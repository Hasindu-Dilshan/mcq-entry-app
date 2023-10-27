import BreadcrumbNavigation from "../subComponents/BreadcrumbNavigation";
import React from "react";
import FeatherIcon from 'feather-icons-react';
import ChooseSyllabusCard from "../subComponents/ChooseSyllabusCard";
import { Outlet } from "react-router-dom";

// class ChooseSyllabus extends React.Component {
//   render() {
//     return (
//       <Out>
//         <BreadcrumbNavigation />

//         <ChooseSyllabusCard />
//       </>
//     );
//   }
// }

const ChooseSyllabus = () => {
  return (
    <>
      <BreadcrumbNavigation />
      <ChooseSyllabusCard />
    </>
  );
}

export default ChooseSyllabus;