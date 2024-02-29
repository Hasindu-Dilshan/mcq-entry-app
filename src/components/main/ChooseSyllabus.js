import { useEffect } from "react";
import BreadcrumbNavigation from "../sub/BreadcrumbNavigation";
import ChooseSyllabusCard from "../sub/ChooseSyllabusCard";
import { connect } from "react-redux";
import { ROUTE } from "../../constants/actionTypes";

const mapDispatchToProps = dispatch => ({
  dispatchRouteState: (state) => dispatch({ type: ROUTE, payload: state }),
});

const ChooseSyllabus = ({ dispatchRouteState }) => {

  useEffect(() => {
    dispatchRouteState("Choose Syllabus");
  }, []);

  return (
    <>
      <BreadcrumbNavigation />
      <ChooseSyllabusCard />
    </>
  );
};

export default connect(null, mapDispatchToProps)(ChooseSyllabus);
