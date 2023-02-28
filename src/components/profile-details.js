import React from "react";
import { connect } from "react-redux";
import { dateFormat, phoneNumberFormat } from "../common";



/**********************************************************************************************
 * @Purpose: To render the Profile Details
 * @Input: The default props
 * @Output: N/A
***********************************************************************************************/
function ProfileDetails(props) {  
  const { username, date_of_birth, phone_number, email, address, subscription } = props.userData;
  const completeAddress = (address && address.city != null) ? address.street_name + ', ' + address.street_address + ', ' + address.city + ', ' + address.zip_code + ', ' + address.state : '';
  const subscriptionPlan = (subscription && subscription.plan != null) ? subscription.plan : '';
  const phoneNumber = phoneNumberFormat(phone_number);
  
  return (<>
      <div className="cc-profile__details">
        <h3>Details</h3>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label">Username: </div>
          <div className="cc-profile__details__value">{username}</div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label">Date of Birth:</div> 
          <div className="cc-profile__details__value"> {dateFormat(date_of_birth)}</div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label">Phone:</div> 
          <div className="cc-profile__details__value"> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label">Email:</div> 
          <div className="cc-profile__details__value"> <a href={`mailto:${email}`}>{email}</a></div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label">Subscription:</div> 
          <div className="cc-profile__details__value"> {subscriptionPlan}</div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label">Location:</div> 
          <div className="cc-profile__details__value"> {completeAddress}</div> 
        </div>
      </div>
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

export default connect(mapStateToProps)(ProfileDetails);
