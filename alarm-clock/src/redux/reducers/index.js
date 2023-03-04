import { combineReducers } from "redux";
import { updateTimeReducer } from "./timerReducer";
import { alarmReducer } from "./alarmReducer";

const rootReducer = combineReducers({ updateTimeReducer, alarmReducer });

export default rootReducer;