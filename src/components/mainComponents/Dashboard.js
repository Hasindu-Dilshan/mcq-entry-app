import WelcomeBanner from "../subComponents/WelcomeBanner";
import BreadcrumbNavigation from "../subComponents/BreadcrumbNavigation";
import { fetchWrapper } from "../../helpers";
import { useEffect } from "react";

const Dashboard =  () => {
  // useEffect(() => {
  //   async function fetchUsers() {
  //     console.log(await fetchWrapper.get('/users'));
  //   }
  //   fetchUsers();
  // }, []);
  
  return (
      <>
        <WelcomeBanner />

        <BreadcrumbNavigation />

      </>
  );
}

export default Dashboard;
