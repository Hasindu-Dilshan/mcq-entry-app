import FeatherIcon from "feather-icons-react";
import SyllabiComponent from "./SyllabiComponent";
import TopicsComponent from "./TopicsComponent";
import { Link } from "react-router-dom";

const ChooseSyllabusCard = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="card">
          <div className="card-header">
            <h3>Choose Syllabus</h3>
          </div>
          <div className="card-body">
            <div className="form-creation">
              <SyllabiComponent />
              <TopicsComponent />

              <div className="form-group">
                <div className="head-link-set">
                  <Link className="btn-add" to="/addquestions">
                    <FeatherIcon icon="plus" /> Add Questions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSyllabusCard;
