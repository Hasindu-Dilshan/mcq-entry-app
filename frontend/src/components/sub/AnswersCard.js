import { useEffect } from "react";
import AnswerComponent from "./AnswerComponent";

const AnswersCard = ({
  handleAddAnswer,
  answerRows,
  handleDeleteAnswerRow,
  handleAnswerFieldChange,
}) => {
  useEffect(() => {
    if (answerRows.length === 0) {
      handleAddAnswer();
    }
  }, [answerRows]);

  return (
    <div className="col-xl-12 col-sm-12 col-12 mt-5">
      <div className="card">
        <div className="card-header">
          <div className="card-titles nested-card-title">Answers</div>
        </div>
        <div className="table-responsive">
          <table className="table custom-table no-footer">
            <thead>
              <tr>
                <th className="custom-id-column">ID</th>
                <th className="custom-answer-column">Answer</th>
                <th className="custom-correct-column">Correct</th>
                <th>Image</th>
                <th className="custom-delete-column"></th>
              </tr>
            </thead>
            <tbody>
              {answerRows.map((answerRow, index) => {
                return (
                  <AnswerComponent
                    key={answerRow.key}
                    id={index}
                    answerRow={answerRow}
                    handleDeleteAnswerRow={handleDeleteAnswerRow}
                    handleAnswerFieldChange={handleAnswerFieldChange}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnswersCard;
