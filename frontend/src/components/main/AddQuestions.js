import BreadcrumbNavigation from "../sub/BreadcrumbNavigation";
import AddQuestionCard from "../sub/AddQuestionCard";

const AddQuestions = () => {
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

export default AddQuestions;
