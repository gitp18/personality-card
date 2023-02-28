import {
  FETCH_BRAND_DATA_SUCCESS,
  FETCH_USER_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "./actionType";



/**********************************************************************************************
 * @Purpose: Action creator to create fetchUserDataSuccess
 * @Input: The payload - userData: {}
 * @Output: The action object - {"type": "string", "userData": {"first_name": "string", "address": {}, ...}}
***********************************************************************************************/
export function fetchUserDataSuccess(userData) {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    userData
  };
}

/**********************************************************************************************
 * @Purpose: Action creator to create fetchBrandDataSuccess
 * @Input: The payload - brandData: [{}, {}]
 * @Output: The action object - {"type": "string", "brandData": [{"id": "string", "brand": "string", ...}, {...}]}}
***********************************************************************************************/
export function fetchBrandDataSuccess(brandData) {
  return {
    type: FETCH_BRAND_DATA_SUCCESS,
    brandData
  };
}

/**********************************************************************************************
 * @Purpose: Action creator to handle fetchDataError
 * @Input: The payload - error
 * @Output: The action object - {"type": "string", "payload": {error}}
***********************************************************************************************/
export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error }
  };
}


