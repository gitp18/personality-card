import { combineReducers } from "redux";
import reducer from "./reducers";



/**********************************************************************************************
 * @Purpose: Combine all reducers to get only one reducer to pass through the createStore()
 * @Input: all reducers
 * @Output: One root reducer
***********************************************************************************************/
export default combineReducers({
  reducer
});
