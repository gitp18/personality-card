import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProfileOverview from "./profile-overview.js";
import ProfileDetails from "./profile-details.js";
import BrandDetails from "./brand-details.js";
import { fetchProfile } from "../redux/actions/fetchData";
import { fetchBrand } from "../redux/actions/fetchBrand";



/**********************************************************************************************
 * @Purpose: To render the Personality card for a Random Student
 * @Input: The default props
 * @Output: N/A
***********************************************************************************************/
function PersonalityCard(props){
  useEffect(()=> {
      getStudentData();
  }, []);

  const getStudentData = () => {
    props.dispatch(fetchProfile());
    props.dispatch(fetchBrand());
  };

  return (<>
      <ProfileOverview />
      <ProfileDetails />
      <BrandDetails />
      <button onClick={getStudentData}>
        Random Student
      </button>
    </>
  )
}

/**********************************************************************************************
 * @Purpose: Converts the Redux state to React props, so that user data can be fetched from it
 * @Input: The Redux state object
 * @Output: The React props object
***********************************************************************************************/
const mapStateToProps = state => ({
  userData: state.reducer.userData,
  brandData: state.reducer.brandData,
  loading: state.reducer.loading,
  error: state.reducer.error,
});

export default connect(mapStateToProps)(PersonalityCard);
