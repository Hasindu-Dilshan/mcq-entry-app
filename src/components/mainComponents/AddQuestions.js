import { useState } from "react";
import BreadcrumbNavigation from "../subComponents/BreadcrumbNavigation";
import AddQuestionCard from "../subComponents/AddQuestionCard";

const AddQuestions = () => {
  return (
    <>
      <BreadcrumbNavigation />

      <div className="row">
          <div className="col-xl-12 col-sm-12 col-12">
              <AddQuestionCard />
          </div>
      </div>
    </>
  );
}

export default AddQuestions;
