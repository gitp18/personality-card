import axios from "axios";
import { fetchBrandDataSuccess, fetchDataError } from "./action";


/**********************************************************************************************
 * @Purpose: GET request to fetch brand list
 * @Input: N/A
 * @Output: {"data": [{"id": "string", "brand": "string", ...}, {...}], "status": integer, ....}
***********************************************************************************************/
export function fetchBrand() {
  const API_END_POINT = process.env.REACT_APP_API_URL_BRAND;

  return dispatch => {
    axios
      .get(API_END_POINT)
      .then(response => {
        console.log(response)
        dispatch(fetchBrandDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}
