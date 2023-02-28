let initialState = {
  loading: false,
  userData: [],
  brandData: [],
  error: null
};



/**********************************************************************************************
 * @Purpose: Takes the current state and the action to React props, so that user data can be fetched from it
 * @Input: The previos state object and the action object
 * @Output: The new state object
***********************************************************************************************/
function reducer(state = initialState, action) {

  switch (action.type) {

    case "FETCH_BRAND_DATA_SUCCESS":
      return {
        ...state,
        brandData: action.brandData,
        loading: true
      };
      break;

    case "FETCH_USER_DATA_SUCCESS":
      return {
        ...state,
        userData: action.userData,
        loading: true
      };
      break;
  
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        error: action.payload.error,
        userData: [],
        brandData: [],
        loading: false
      };
      break;

    default:
      return state;
  }
}

export default reducer;
