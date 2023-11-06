import AnswersCard from "./AnswersCard";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ExplanationCard from "./ExplanationCard";
import { useEffect, useState } from "react";

// const AddQuestionCard = ( ) => {
const AddQuestionCard = () => {

  const [idCount, setIdCount] = useState(0);

  const [answerRows, setAnswerRows] = useState([{answer: undefined, id: idCount}]);

  // Do the initial idCount increment
  useEffect(() => {
    incrementAndGetId()
  }, [])

  function handleAddAnswer(event) {
    event.preventDefault();
    setAnswerRows([...answerRows, {answer: undefined, id: incrementAndGetId()}]);
    console.log(idCount);
  }

  function incrementAndGetId() {
    setIdCount((prevIdCount) => prevIdCount + 1);
    return idCount;
  }

  function handleDeleteAnswerRow(id) {
    setAnswerRows(answerRows.filter((answerRow) => answerRow.id !== id));
  }

  function handleAnswerFieldChange(answerId, answerText) {
    let newAnswerRows = [...answerRows];

    for(let i = 0; i < answerRows.length; i++) {
      if(newAnswerRows[i].id === answerId) {
        newAnswerRows[i].answer = answerText;
      }
    }
    setAnswerRows(newAnswerRows);
  }

  return (
    <div class="card">
      <div class="card-header">
        <h3 class="card-titles">භෞතික විද්‍යාව 2019 නව නිර්දේෂය</h3>
      </div>
      <div class="card-header">
        <h3 class="card-sub-titles text-muted">යාන්ත්‍ර විද්‍යාව</h3>
      </div>

      <div class="card-body">
        <div class="form-creation">
          <div class="col-xl-6 col-sm-6 col-12">
            <div class="form-group">
              <label style={{ fontSize: 18, fontWeight: 600 }}>
                Year <span class="mandatory">*</span>
              </label>
              <input
                min="2019"
                max="2023"
                type="number"
                id="typeNumber"
                class="form-control"
              />
            </div>
          </div>

          <div class="col-xl-6 col-sm-6 col-12">
            <div class="form-group">
              <label style={{ fontSize: 18, fontWeight: 600 }}>
                Question ID <span class="mandatory">*</span>
              </label>
              <input
                min="1"
                type="number"
                id="typeNumber"
                class="form-control"
              />
            </div>
          </div>

          <div class="col-xl-12 col-sm-12 col-12">
            <div class="form-group">
              <label style={{ fontSize: 18, fontWeight: 600 }}>
                Question <span class="mandatory">*</span>
              </label>
              <textarea rows="2" cols="50" class="form-control"></textarea>
            </div>
          </div>

          <AnswersCard answerRows={answerRows} handleDeleteAnswerRow={handleDeleteAnswerRow} handleAnswerFieldChange={handleAnswerFieldChange} />

          <div class="col-xl-12 col-sm-12 col-12">
            <div class="form-group">
              <div class="form-btn">
                <a onClick={handleAddAnswer} href="#" class="btn btn-apply">
                  <FeatherIcon icon="plus" /> Add Answer
                </a>
                {/* <a href="#" class="btn btn-apply">
                  <FeatherIcon icon="plus" /> Add Answer
                </a> */}
              </div>
            </div>
          </div>

          <ExplanationCard />

          <div class="col-xl-12 col-sm-12 col-12">
            <div class="form-group">
              <div class="form-btn">
                <a href="#" class="btn btn-addmembers">
                  <FeatherIcon icon="send" /> Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionCard;
