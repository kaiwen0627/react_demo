import { combineReducers } from "redux";

//退出登录清除还原store
import recycleState from "redux-recycle";

import Login from "../pages/login/reducer";
import UserInfo from "../pages/home/reducer";

const rootreducer = combineReducers({
  Login: recycleState(Login, ["USER_LOGOUT"], {}),
  UserInfo: recycleState(UserInfo, ["USER_LOGOUT"], {})
});

export { rootreducer };
