import { combineReducers } from "redux";
import visuals from './visuals';
import recommands from './recommands';
import pics from './pics';
import logincheck from "./logincheck";
import trip from "./trip"
import goods from "./usedtrade"
import cart from "./cart"
import event from "./event"

const rootReducer = combineReducers({ visuals, recommands, pics, trip, goods, cart, event, logincheck });
export default rootReducer;