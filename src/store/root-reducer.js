// imports
import { combineReducers } from "redux";

// import reducers
import { useReducer } from "../store/user/user.reducer";

// root reducer
export const rootReducer = combineReducers({
    user: useReducer
});