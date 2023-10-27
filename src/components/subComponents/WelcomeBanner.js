import React from "react";

// class WelcomeBanner extends React.Component {
//   render() {
//     return (
//       <div className="page-name mb-4">
//         <h4 className="m-0">
//           <img src="assets/img/profile.jpg" className="mr-1" alt="profile" />
//           Welcome Admin
//         </h4>
//         <label>Sun, 29 Nov 2019</label>
//       </div>
//     );
//   }
// }

function WelcomeBanner() {
  return (
    <div className="page-name mb-4">
      <h4 className="m-0">
        <img src="assets/img/profile.jpg" className="mr-1" alt="profile" />
        Welcome Admin
      </h4>
      <label>Sun, 29 Nov 2019</label>
    </div>
  );
}

export default WelcomeBanner;
