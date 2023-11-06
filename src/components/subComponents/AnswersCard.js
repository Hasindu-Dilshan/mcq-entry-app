import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import AnswerComponent from "./AnswerComponent";

const AnswersCard = ({ answerRows, handleDeleteAnswerRow, handleAnswerFieldChange }) => {

  return (
    <div class="col-xl-12 col-sm-12 col-12 mt-5">
      <div class="card">
        <div class="card-header">
          <div class="card-titles nested-card-title">Answers</div>
        </div>
        <div class="table-responsive">
          <table class="table custom-table no-footer">
            <thead>
              <tr>
                <th class="custom-id-column">ID</th>
                <th class="custom-answer-column">Answer</th>
                <th class="custom-correct-column">Correct</th>
                <th>Image</th>
                <th class="custom-delete-column"></th>
              </tr>
            </thead>
            <tbody>
              {
                  // [...Array(numAnswers)].map((element, index) => (
                  //   <AnswerComponent id={index + 1}/>
                  // ))

                  answerRows.map((answerRow) => {
                    return <AnswerComponent key={answerRow.id} id={answerRow.id} answerRow={answerRow} handleDeleteAnswerRow={handleDeleteAnswerRow} handleAnswerFieldChange={handleAnswerFieldChange} />
                  })

                  // <AnswerComponent id={1} answerRow={undefined} />
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnswersCard;
