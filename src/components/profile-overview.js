import React from "react";
import ProfileDesc from "./profile-desc";
import { getAge } from "../common";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";



/**********************************************************************************************
 * @Purpose: To render the Profile Overview
 * @Input: N/A
 * @Output: N/A
 ***********************************************************************************************/
function ProfileOverview() {
  const userData = useSelector((state) => state.reducer.userData);
  const loading = ((typeof userData === 'object' && userData.id === undefined)) ? true : false;
  const { date_of_birth, avatar, first_name, last_name, gender } = userData;
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

export default ProfileOverview;
