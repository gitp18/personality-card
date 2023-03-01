import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProfileOverview from "./profile-overview.js";
import ProfileDetails from "./profile-details.js";
import BrandDetails from "./brand-details.js";
import { fetchProfile } from "../redux/actions/fetchData";
import { fetchBrand } from "../redux/actions/fetchBrand";
import Skeleton from "react-loading-skeleton";



/**********************************************************************************************
 * @Purpose: To render the Personality card for a Random Student
 * @Input: The default props
 * @Output: N/A
***********************************************************************************************/
function PersonalityCard(props){
  useEffect(()=> {
    getStudentData('i');
    //console.log('log8 :', props.userData, props.brandData);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 700);
      return () => clearTimeout(timer);
  }, []);
  const [loading, setLoading] = useState(true);

  const getStudentData = (t) => {
    var communicate = new BroadcastChannel('communication');
    if(t === 'b'){
      props.dispatch(fetchProfile());
      props.dispatch(fetchBrand());
      communicate.postMessage({'loadType': 'ButtonClicked'})
    } else {
      communicate.postMessage({'loadType': 'PageRefresh'})
      let userCollection=localStorage.getItem('userData');
      userCollection = JSON.parse(userCollection);
      props.dispatch(fetchProfile());

      let brandCollection=localStorage.getItem('brandData');
      brandCollection = JSON.parse(brandCollection);
      props.dispatch(fetchBrand());
    }
  };
  
  return (<>
    <div className="cc-wrapper">
      <ProfileOverview loading={loading} />
      <ProfileDetails loading={loading} />
      <BrandDetails loading={loading} />
      {loading ? <div className="cc-btn__holder"><Skeleton width={300} height={100} /> </div>:
      <div className="cc-btn__holder">
        <button className="font-['Montserrat'] text-[30px] leading-[49px] text-white font-bold text-center px-4 py-1 relative rounded-md overflow-hidden group bg-[var(--secondary-btn-color)] hover:bg-gradient-to-r hover:from-[var(--secondary-btn-color)] hover:to-[var(--secondary-btn-color)] hover:ring-2 hover:ring-offset-2 hover:ring-[var(--secondary-btn-color)] transition-all ease-out duration-300" onClick={(t)=>getStudentData('b')}>
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Random Student</span>
        </button>
      </div>
      }
    </div>
    </>
  )
}

/**********************************************************************************************
 * @Purpose: Converts the Redux state to React props, so that user data can be fetched from it
 * @Input: The Redux state object
 * @Output: The React props object
**********************************************************************************************
const mapStateToProps = state => ({
  userData: state.reducer.userData,
  brandData: state.reducer.brandData,
  loading: state.reducer.loading,
  error: state.reducer.error,
});*/

export default connect()(PersonalityCard);
