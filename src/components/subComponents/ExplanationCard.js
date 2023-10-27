import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";


class ExplanationCard extends React.Component {
  render() {
    return (
      <div class="col-xl-12 col-sm-12 col-12 mt-5">
        <div class="card">
          <div class="card-header">
            <div class="card-titles nested-card-title">Explanation</div>
          </div>
          <div class="card-body">
            <div class="form-group">
              <textarea rows="3" cols="50" class="form-control"></textarea>
            </div>
            <div class="actionset">
              <label>
                <a class="action_label5" href="add-Review.html">
                  Upload Image
                  <FeatherIcon icon="edit" />
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExplanationCard;
