import Dashboard from "../components/mainComponents/Dashboard";
import ChooseSyllabus from "../components/mainComponents/ChooseSyllabus";
import AddQuestions from "../components/mainComponents/AddQuestions";
import TestAPIs from "../components/test/TestAPIs";

const appRoutes = [
  {
    index: true,
    path: "/dashboard",
    element: <Dashboard />,
    // state: "dashboared",
    sidebarProps: {
      display: "Dashboard",
      img: "home.svg",
      alt: "sidebar_img",
    },
  },
  {
    path: "/choosesyllabus",
    element: <ChooseSyllabus />,
    // state: "choose_syllabus",
    sidebarProps: {
      display: "Choose Syllabus",
      img: "employee.svg",
      alt: "sidebar_img",
    },
  },
  {
    path: "/addquestions",
    element: <AddQuestions />,
    // state: "add_questions",
    sidebarProps: {
      display: "Add Questions",
      img: "leave.svg",
      alt: "sidebar_img"
    },
  },



  {
    path: "/test",
    element: <TestAPIs />,
    // state: "TestAPIs",
  },
  
];

export default appRoutes;