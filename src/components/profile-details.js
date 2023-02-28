import React from "react";
import { connect } from "react-redux";



/**********************************************************************************************
 * @Purpose: To render the Profile Details
 * @Input: The default props
 * @Output: N/A
***********************************************************************************************/
function ProfileDetails(props) {  
  const { username, date_of_birth, phone_number, email, address, subscription } = props.userData;
  const completeAddress = (address && address.city != null) ? address.street_name + ', ' + address.street_address + ', ' + address.city + ', ' + address.zip_code + ', ' + address.state : '';
  const subscriptionPlan = (subscription && subscription.plan != null) ? subscription.plan : '';

  return (<>
        <h3>Details</h3>
        <p>Username: {username}</p>
        <p>Date of Birth: {date_of_birth}</p>
        <p>Phone: {phone_number}</p>
        <p>Email: {email}</p>
        <p>Subscription: {subscriptionPlan}</p>
        <p>Location: {completeAddress}</p> 
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
