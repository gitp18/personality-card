import React from "react";
import { connect } from "react-redux";
import ProfileDesc from "./profile-desc";
import { getAge } from "../common";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**********************************************************************************************
 * @Purpose: To render the Profile Overview
 * @Input: The default props
 * @Output: N/A
 ***********************************************************************************************/
function ProfileOverview(props) {
  const { date_of_birth, avatar, first_name, last_name, gender } =
    props.userData;
  const loading = props.loading;
  const age = getAge(date_of_birth).toString();
  if (loading) {
    return (
      <>
        <div className="cc-profile__wrap">
          <Skeleton
            circle
            width={200}
            height={200}
            className="mr-4"
            containerClassName="avatar-skeleton"
          />
          <div className="cc-profile__label">
            <h3>
              <Skeleton width={300} />
            </h3>
            <p>
              <Skeleton width={300} />
            </p>
          </div>
        </div>
        <div className="cc-profile__description">
          <Skeleton width={500} count={5} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="cc-profile__wrap">
          <div className="cc-profile__pic">
            <img src={avatar} alt="DP" className="cc-profile__pic__img" />
          </div>
          <div className="cc-profile__label">
            <h3>
              {first_name} {last_name}
            </h3>
            <p>
              {age} / {gender}
            </p>
          </div>
        </div>
        <div className="cc-profile__description">
          <ProfileDesc />
        </div>
      </>
    );
  }
}

/**********************************************************************************************
 * @Purpose: Converts the Redux state to React props, so that user data can be fetched from it
 * @Input: The Redux state object
 * @Output: The React props object
 ***********************************************************************************************/
const mapStateToProps = (state) => ({
  userData: state.reducer.userData,
});

export default connect(mapStateToProps)(ProfileOverview);
