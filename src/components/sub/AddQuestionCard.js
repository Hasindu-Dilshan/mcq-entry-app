import AnswersCard from "./AnswersCard";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ExplanationCard from "./ExplanationCard";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { submitQuestion } from "../../helpers/user-agent";
import { useRef } from "react";
import { QUESTION_SUBMIT_START, QUESTION_SUBMIT_SUCCESSFUL } from "../../constants/actionTypes";

const mapStateToProps = (state) => {

  return {
    subjectId: state.topic.subjectId,
    topicId: state.topic.topicId,
    subjectName: state.topic.subjectName,
    syllabusUpdatedYear: state.topic.syllabusUpdatedYear,
    topicName: state.topic.topicName,
    title: state.topic.title,
    isSubmitting: state.question.isSubmitting,
  }
}

const mapDispatchToProps = (dispatch) => ({

  dispatchQuestionSubmitStart: () => dispatch({type: QUESTION_SUBMIT_START}),
  dispatchQuestionSubmitSuccessful: () => dispatch({type: QUESTION_SUBMIT_SUCCESSFUL})
})

const AddQuestionCard = ({ subjectId, topicId, subjectName, syllabusUpdatedYear, title, topicName, isSubmitting, dispatchQuestionSubmitStart, dispatchQuestionSubmitSuccessful }) => {

  const initialAnswerRowState = {answer: undefined,  correct: false, key: 0};

  const [keyCount, setkeyCount] = useState(0);
  const [answerRows, setAnswerRows] = useState([]);


  const yearInputRef = useRef(null);
  const questionIdInputRef = useRef(null);
  const questionInputRef = useRef(null);

  function handleAddAnswer(event) {

    if(event)
      event.preventDefault();
    setAnswerRows([...answerRows, {...initialAnswerRowState, key: getIdAndIncrement()}]);
  }

  // returns previous keyCount
  function getIdAndIncrement() {

    setkeyCount(keyCount + 1);
    return keyCount;
  }

  function handleDeleteAnswerRow(key) {

    setAnswerRows(answerRows.filter((answerRow) => answerRow.key !== key));
  }

  function handleAnswerFieldChange(answer) {
    
    const {text, correct, key} = answer;

    let newAnswerRows = [...answerRows];

    for(let i = 0; i < answerRows.length; i++) {
      if(newAnswerRows[i].key === key) {
        newAnswerRows[i].answer = text;
        newAnswerRows[i].correct = correct;
      }
    }

    setAnswerRows(newAnswerRows);
  }

  async function handleSubmit() {

    if(isSubmitting)
      return;

    const year = yearInputRef.current.value;
    const questionId = questionIdInputRef.current.value;
    const questionText = questionInputRef.current.value;
    
    const answers = answerRows.map((answerRow, index) => {
      const {key, ...answerRowWithoutKey} = answerRow;
      answerRowWithoutKey.id = index + 1;

      return answerRowWithoutKey;
    });

    const metaData = {
      subjectId,
      syllabusUpdatedYear,
      topicId
    }

    const question = {
      metaData,
      year,
      questionId,
      questionText,
      answers
    };

    dispatchQuestionSubmitStart();
    const response = await submitQuestion(question);
    console.log(response);
    dispatchQuestionSubmitSuccessful();

    yearInputRef.current.value = '';
    questionIdInputRef.current.value = '';
    questionInputRef.current.value = '';

    setAnswerRows([]);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-titles">{subjectName} {syllabusUpdatedYear} {title}</h3>
      </div>
      <div className="card-header">
        <h3 className="card-sub-titles text-muted">{topicName}</h3>
      </div>

      <div className="card-body">
        <div className="form-creation">
          <div className="col-xl-6 col-sm-6 col-12">
            <div className="form-group">
              <label htmlFor="year">
                Year <span className="mandatory">*</span>
              </label>
              <input
                id="year"
                ref={yearInputRef}
                min={syllabusUpdatedYear}
                max={syllabusUpdatedYear + 7}
                type="number"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-xl-6 col-sm-6 col-12">
            <div className="form-group">
              <label htmlFor="questionId">
                Question ID <span className="mandatory">*</span>
              </label>
              <input
                id="questionId"
                ref={questionIdInputRef}
                min="1"
                max="60"
                type="number"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-xl-12 col-sm-12 col-12">
            <div className="form-group">
              <label htmlFor="question">
                Question <span className="mandatory">*</span>
              </label>
              <textarea id="question" ref={questionInputRef} rows="2" cols="50" className="form-control"></textarea>
            </div>
          </div>

          <AnswersCard handleAddAnswer={handleAddAnswer} answerRows={answerRows} handleDeleteAnswerRow={handleDeleteAnswerRow} handleAnswerFieldChange={handleAnswerFieldChange} />

          <div className="col-xl-12 col-sm-12 col-12">
            <div className="form-group">
              <div className="form-btn">
                <Link onClick={handleAddAnswer} to="#" className="btn btn-apply">
                  <FeatherIcon icon="plus" /> Add Answer
                </Link>
              </div>
            </div>
          </div>

          <ExplanationCard />

          <div className="col-xl-12 col-sm-12 col-12">
            <div className="form-group">
              <div className="form-btn">
                <Link onClick={handleSubmit} to="#" className={isSubmitting ? "btn btn-addmembers-disabled" : "btn btn-addmembers" }>
                  <FeatherIcon icon="send" /> Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps,  mapDispatchToProps)(AddQuestionCard);
