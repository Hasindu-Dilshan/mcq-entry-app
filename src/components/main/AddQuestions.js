import BreadcrumbNavigation from "../sub/BreadcrumbNavigation";
import AddQuestionCard from "../sub/AddQuestionCard";
import { useEffect } from "react";
import { connect } from "react-redux";
import { ROUTE } from "../../constants/actionTypes";

const mapDispatchToProps = dispatch => ({
  dispatchRouteState: (state) => dispatch({ type: ROUTE, payload: state }),
});

const AddQuestions = ({ dispatchRouteState }) => {
  useEffect(() => {
    dispatchRouteState("Add Questions");
  }, []);
  
  return (
    <>
      <BreadcrumbNavigation />
      <div className="row">
        <div className="col-xl-12 col-sm-12 col-12" id="add-question-card">
          <AddQuestionCard />
        </div>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(AddQuestions);
