import { useState } from "react";
import BreadcrumbNavigation from "../subComponents/BreadcrumbNavigation";
import AddQuestionCard from "../subComponents/AddQuestionCard";

const AddQuestions = () => {
  const [numAnswers, setNumAnswers] = useState(1);

  return (
    <>
      <BreadcrumbNavigation />

      <div class="row">
          <div class="col-xl-12 col-sm-12 col-12">
              {/* <AddQuestionCard /> */}
              <AddQuestionCard numAnswers={numAnswers} setNumAnswers={setNumAnswers} />
          </div>
      </div>
    </>
  );
}

export default AddQuestions;
