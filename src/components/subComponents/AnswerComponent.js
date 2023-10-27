import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

class AnswerComponent extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <label>1 </label>
        </td>
        <td>
          <textarea rows="3" cols="50" class="form-control"></textarea>
        </td>
        <td>
          <label class="customcheck ml-4 mb-3">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </td>
        <td>
          <div class="actionset">
            <label>
              <a class="action_label5" href="add-Review.html">
                Upload <FeatherIcon icon="edit" />
              </a>
            </label>
          </div>
        </td>
        <td>
          <div class="actionset">
            <label>
              <a
                class="action_label4 trash"
                data-toggle="modal"
                data-target="#delete"
              >
                <FeatherIcon icon="trash-2" />
              </a>
            </label>
          </div>
        </td>
      </tr>
    );
  }
}

export default AnswerComponent;
