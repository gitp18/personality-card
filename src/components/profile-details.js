import React from "react";
import { dateFormat, phoneNumberFormat } from "../common";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from "react-redux";



/**********************************************************************************************
 * @Purpose: To render the Profile Details
 * @Input: N/A
 * @Output: N/A
***********************************************************************************************/
function ProfileDetails() { 
  const userData = useSelector((state) => state.reducer.userData);
  const loading = ((typeof userData === 'object' && userData.id === undefined)) ? true : false;
  const { username, date_of_birth, phone_number, email, address, subscription } = userData;
  const completeAddress = (address && address.city != null) ? address.street_name + ', ' + address.street_address + ', ' + address.city + ', ' + address.zip_code + ', ' + address.state : '';
  const subscriptionPlan = (subscription && subscription.plan != null) ? subscription.plan : '';
  const phoneNumber = phoneNumberFormat(phone_number);
  
  if(loading){
    return(
      <div className="cc-profile__details">
        <h3><Skeleton width={300} height={100} /></h3>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label"><Skeleton width={100} /></div>
          <div className="cc-profile__details__value"><Skeleton width={300} /></div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label"><Skeleton width={100} /></div>
          <div className="cc-profile__details__value"><Skeleton width={300} /></div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label"><Skeleton width={100} /></div>
          <div className="cc-profile__details__value"><Skeleton width={300} /></div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label"><Skeleton width={100} /></div>
          <div className="cc-profile__details__value"><Skeleton width={300} /></div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label"><Skeleton width={100} /></div>
          <div className="cc-profile__details__value"><Skeleton width={300} /></div>
        </div>
        <div className="cc-profile__details__row">
          <div className="cc-profile__details__label"><Skeleton width={100} /></div>
          <div className="cc-profile__details__value"><Skeleton width={300} count={3} /></div>
        </div>
      </div>
    )
  } else {
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
}

export default ProfileDetails;
