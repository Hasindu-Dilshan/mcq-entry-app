import Dashboard from "../components/main/Dashboard";
import ChooseSyllabus from "../components/main/ChooseSyllabus";
import AddQuestions from "../components/main/AddQuestions";

const appRoutes = [
  {
    index: true,
    path: "/dashboard",
    element: <Dashboard />,
    // state: "dashboared",
    sidebarProps: {
      display: "Dashboard",
      img: "dashboard.svg",
      alt: "sidebar_img",
    },
  },
  {
    path: "/choosesyllabus",
    element: <ChooseSyllabus />,
    // state: "choose_syllabus",
    sidebarProps: {
      display: "Choose Syllabus",
      img: "choosesyllabus.svg",
      alt: "sidebar_img",
    },
  },
  {
    path: "/addquestions",
    element: <AddQuestions />,
    // state: "add_questions",
    sidebarProps: {
      display: "Add Questions",
      img: "addquestions.svg",
      alt: "sidebar_img"
    },
  },
];

export default appRoutes;