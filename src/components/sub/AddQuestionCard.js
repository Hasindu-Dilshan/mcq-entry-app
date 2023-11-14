import AnswersCard from "./AnswersCard";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ExplanationCard from "./ExplanationCard";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { submitQuestion } from "../../helpers/user-agent";
import { useRef } from "react";

const mapStateToProps = (state) => {
  return {
    subjectName: state.topic.subjectName,
    syllabusUpdatedYear: state.topic.syllabusUpdatedYear,
    topicName: state.topic.topicName,
    title: state.topic.title,
  }
}



// const AddQuestionCard = ( ) => {
const AddQuestionCard = ({ subjectName, syllabusUpdatedYear, title, topicName }) => {

  const [keyCount, setkeyCount] = useState(0);
  const [answerRows, setAnswerRows] = useState([{answer: undefined, correct: false, key: keyCount}]);

  const yearInputRef = useRef(null);
  const questionIdInputRef = useRef(null);
  const questionInputRef = useRef(null);

  // Do the initial keyCount increment
  useEffect(() => {
    incrementAndGetId()
  }, [])

  function handleAddAnswer(event) {
    event.preventDefault();
    setAnswerRows([...answerRows, {answer: undefined,  correct: false, key: incrementAndGetId()}]);
  }

  function incrementAndGetId() {
    setkeyCount((prevkeyCount) => prevkeyCount + 1);
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

  function handleSubmit(event) {
    event.preventDefault();

    const year = yearInputRef.current.value;
    const questionId = questionIdInputRef.current.value;
    const questionText = questionInputRef.current.value;

    const question = {
      year,
      questionId,
      questionText,
      answerRows
    };

    // submitQuestion()
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
              <label htmlFor="year" style={{ fontSize: 18, fontWeight: 600 }}>
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
              <label htmlFor="questionId" style={{ fontSize: 18, fontWeight: 600 }}>
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
              <label htmlFor="question"  style={{ fontSize: 18, fontWeight: 600 }}>
                Question <span className="mandatory">*</span>
              </label>
              <textarea id="question" ref={questionInputRef} rows="2" cols="50" className="form-control"></textarea>
            </div>
          </div>

          <AnswersCard answerRows={answerRows} handleDeleteAnswerRow={handleDeleteAnswerRow} handleAnswerFieldChange={handleAnswerFieldChange} />

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
                <Link onClick={(event) => handleSubmit(event)} href="#" className="btn btn-addmembers">
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

export default connect(mapStateToProps)(AddQuestionCard);
