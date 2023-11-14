import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const ExplanationCard = () => {
  
  return (
    <div className="col-xl-12 col-sm-12 col-12 mt-5">
      <div className="card">
        <div className="card-header">
          <div className="card-titles nested-card-title">Explanation</div>
        </div>
        <div className="card-body">
          <div className="form-group">
            <textarea rows="3" cols="50" className="form-control"></textarea>
          </div>
          <div className="actionset">
            <label>
              <a className="action_label5" href="add-Review.html">
                Upload Image
                <FeatherIcon icon="edit" />
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationCard;
