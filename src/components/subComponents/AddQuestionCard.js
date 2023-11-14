import AnswersCard from "./AnswersCard";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ExplanationCard from "./ExplanationCard";
import { useEffect, useState } from "react";

// const AddQuestionCard = ( ) => {
const AddQuestionCard = () => {

  const [keyCount, setkeyCount] = useState(0);
  const [answerRows, setAnswerRows] = useState([{answer: undefined, key: keyCount}]);

  // Do the initial keyCount increment
  useEffect(() => {
    incrementAndGetId()
  }, [])

  function handleAddAnswer(event) {
    event.preventDefault();
    setAnswerRows([...answerRows, {answer: undefined, key: incrementAndGetId()}]);
  }

  function incrementAndGetId() {
    setkeyCount((prevkeyCount) => prevkeyCount + 1);
    return keyCount;
  }

  function handleDeleteAnswerRow(key) {
    setAnswerRows(answerRows.filter((answerRow) => answerRow.key !== key));
  }

  function handleAnswerFieldChange(answerKey, answerText) {
    let newAnswerRows = [...answerRows];

    for(let i = 0; i < answerRows.length; i++) {
      if(newAnswerRows[i].key === answerKey) {
        newAnswerRows[i].answer = answerText;
      }
    }
    setAnswerRows(newAnswerRows);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-titles">භෞතික විද්‍යාව 2019 නව නිර්දේෂය</h3>
      </div>
      <div className="card-header">
        <h3 className="card-sub-titles text-muted">යාන්ත්‍ර විද්‍යාව</h3>
      </div>

      <div className="card-body">
        <div className="form-creation">
          <div className="col-xl-6 col-sm-6 col-12">
            <div className="form-group">
              <label style={{ fontSize: 18, fontWeight: 600 }}>
                Year <span className="mandatory">*</span>
              </label>
              <input
                min="2019"
                max="2023"
                type="number"
                id="typeNumber"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-xl-6 col-sm-6 col-12">
            <div className="form-group">
              <label style={{ fontSize: 18, fontWeight: 600 }}>
                Question ID <span className="mandatory">*</span>
              </label>
              <input
                min="1"
                type="number"
                id="typeNumber"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-xl-12 col-sm-12 col-12">
            <div className="form-group">
              <label style={{ fontSize: 18, fontWeight: 600 }}>
                Question <span className="mandatory">*</span>
              </label>
              <textarea rows="2" cols="50" className="form-control"></textarea>
            </div>
          </div>

          <AnswersCard answerRows={answerRows} handleDeleteAnswerRow={handleDeleteAnswerRow} handleAnswerFieldChange={handleAnswerFieldChange} />

          <div className="col-xl-12 col-sm-12 col-12">
            <div className="form-group">
              <div className="form-btn">
                <a onClick={handleAddAnswer} href="#" className="btn btn-apply">
                  <FeatherIcon icon="plus" /> Add Answer
                </a>
              </div>
            </div>
          </div>

          <ExplanationCard />

          <div className="col-xl-12 col-sm-12 col-12">
            <div className="form-group">
              <div className="form-btn">
                <a href="#" className="btn btn-addmembers">
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
