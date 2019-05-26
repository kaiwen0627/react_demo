import {
  login_phone,
  login_Email,
  getUserInfo
} from "../../tools/api";

const USER_LOGININ_BY_PHONE = "USER_LOGININ_BY_PHONE";
const USER_LOGININ_BY_EMAIL = "USER_LOGININ_BY_EMAIL";
const SET_USER_DETAIL_INFO = "SET_USER_DETAIL_INFO";

export const userLoninByPhone = (phoneNunber, pwd) => {
  return async dispatch => {
    const data = await login_phone(phoneNunber, pwd);

    dispatch({
      type: USER_LOGININ_BY_PHONE,
      data
    });
  };
};

export const userLoninByEmail = (email, pwd) => {
  return async dispatch => {
    const data = await login_Email(email, pwd);
    dispatch({
      type: USER_LOGININ_BY_EMAIL,
      data
    });
  };
};

export const setUserDetailInfo = id => {
  return async dispatch => {
    const data = await getUserInfo(id);

    dispatch({
      type: SET_USER_DETAIL_INFO,
      data
    });
  };
};

