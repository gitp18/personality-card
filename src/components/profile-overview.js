import React from "react";
import { connect } from "react-redux";
import ProfileDesc from "./profile-desc";
import {getAge} from "../common";



/**********************************************************************************************
 * @Purpose: To render the Profile Overview
 * @Input: The default props
 * @Output: N/A
***********************************************************************************************/
function ProfileOverview(props) {  
  const { date_of_birth, avatar, first_name, last_name, gender } = props.userData;
  const age = getAge(date_of_birth).toString();

  return (<>
        <div className="cc-profile__wrap">
          <div className="cc-profile__pic">
            <img src={avatar} alt="DP" />
          </div>
          <div className="cc-profile__label">
            <h3>{first_name} {last_name}</h3>
            <p>{age} / {gender}</p>
          </div>
        </div>
        <div className="cc-profile__description"><ProfileDesc /></div>
    </>
  );
}

/**********************************************************************************************
 * @Purpose: Converts the Redux state to React props, so that user data can be fetched from it
 * @Input: The Redux state object
 * @Output: The React props object
***********************************************************************************************/
const mapStateToProps = state => ({
  userData: state.reducer.userData
});

export default connect(mapStateToProps)(ProfileOverview);
