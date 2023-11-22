import { connect } from "react-redux";

const mapStateToProps = state => ({
  avatar: state.auth.avatar
})

const WelcomeBanner = ({ userRole, avatar }) => {
  const avatarPath = `/assets/img/profiles/${avatar}`;
  
  return (
    <div className="page-name mb-4">
      <h4 className="m-0">
        <img src={avatarPath} className="mr-1" alt="profile" />
        Welcome {userRole}
      </h4>
      <label>Sun, 29 Nov 2019</label>
    </div>
  );
}

export default connect(mapStateToProps)(WelcomeBanner);
