import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import SyllabiComponent from "./SyllabiComponent";
import TopicsComponent from "./TopicsComponent";

const ChooseSyllabusCard = () => {

  const [topics, setTopics] = useState([]);
  
  return (
    <div className="row">
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="card">
          <div className="card-header">
            <h3>Choose Syllabus</h3>
          </div>
          <div className="card-body">
            <div className="form-creation">
              <SyllabiComponent setTopics={setTopics} />
              <TopicsComponent topics={topics} />
              <div className="form-group">
                <div className="head-link-set">
                  <a className="btn-add" href="add-employee.html">
                    <FeatherIcon icon="plus" /> Add Questions
                  </a>
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
