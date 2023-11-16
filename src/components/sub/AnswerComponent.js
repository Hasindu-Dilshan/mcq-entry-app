import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useRef, useState } from "react";

const AnswerComponent = ({ id, answerRow, handleDeleteAnswerRow, handleAnswerFieldChange }) => {

  const [isChecked, setIsChecked] = useState(false);

  const answerTextRef = useRef(null);
  const answerCorrectRef = useRef(null);

  function handleDeleteAnswer() {
    handleDeleteAnswerRow(answerRow.key);
  }

  function updateAnswerFields() {
    const text = answerTextRef.current.value;
    const correct = answerCorrectRef.current.checked;
    const key = answerRow.key;

    const answer = {
      text,
      correct,
      key
    }

    handleAnswerFieldChange(answer);
  }

  function handleKeyUp() {
    updateAnswerFields();
  }

  function handleToggle() {
    setIsChecked(!isChecked);
    
    updateAnswerFields();
  }

  return (
    <tr>
      <td>
        <label>{id + 1} </label>
      </td>
      <td>
        <textarea ref={answerTextRef} rows="3" cols="50" className="form-control" defaultValue={typeof answerRow === "string" ? answerRow : ''} onKeyUp={handleKeyUp}></textarea>
      </td>
      <td>
        <label className="customcheck ml-4 mb-3">
          <input ref={answerCorrectRef} checked={isChecked} onChange={handleToggle} type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </td>
      <td>
        <div className="actionset">
          <label>
            <a className="action_label5" href="add-Review.html">
              Upload <FeatherIcon icon="edit" />
            </a>
          </label>
        </div>
      </td>
      <td>
        <div className="actionset">
          <label>
            <a
              href="#"
              className="action_label4 trash"
              data-toggle="modal"
              data-target="#delete"
              onClick={handleDeleteAnswer}
            >
              <FeatherIcon icon="trash-2" />
            </a>
          </label>
        </div>
      </td>
    </tr>
  );
};

export default AnswerComponent;
