import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  name: state.auth.name,
  avatar: state.auth.avatar,
});

const WelcomeBanner = ({ name, avatar }) => {
  return (
    <div className="page-name mb-4">
      <h4 className="m-0">
        <img src={avatar?.url} className="mr-1" alt="profile-pic" />
        Welcome {name}
      </h4>
      <label>Sun, 29 Nov 2019</label>
    </div>
  );
};

export default connect(mapStateToProps)(WelcomeBanner);
