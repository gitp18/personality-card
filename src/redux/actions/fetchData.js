import axios from "axios";
import { fetchUserDataSuccess, fetchDataError } from "./action";



/**********************************************************************************************
 * @Purpose: GET request to fetch user related data
 * @Input: N/A
 * @Output: {"data": {"first_name": "string", "address": {}, ......}, "status": integer, ....}
***********************************************************************************************/
export function fetchProfile() {
  const API_END_POINT = process.env.REACT_APP_API_URL_USER;
  //const [loading, setLoading] = useState(false);

  return dispatch => {
    axios
      .get(API_END_POINT)
      .then(response => {
        dispatch(fetchUserDataSuccess(response.data));
        //setLoading(false);
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}
