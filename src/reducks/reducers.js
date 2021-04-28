import { combineReducers } from "redux";
import sessionReducer from "./session/sessionSlice";
import contractReducer from "./contracts/contractsSlice";

const rootReducer = combineReducers({
  session: sessionReducer,
  contracts: contractReducer
});

export default rootReducer;
