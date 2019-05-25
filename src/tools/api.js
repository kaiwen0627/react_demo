import getDate from "./service";

/**
 *
 * @param {String} phone 用户手机号码
 * @param {String} password 密码
 */
export const login_phone = (phone, password) => {
  return getDate.get(`/login/cellphone?phone=${phone}&password=${password}`);
};

/**
 *
 * @param {String} email 登录邮箱
 * @param {String} password 密码
 */
export const login_Email = (email, password) => {
  return getDate.get(`/login?email=${email}&password=${password}`);
};

/**
 * 获取用户信息
 */
export const getUserInfo = id => {
  return getDate.get(`/user/detail?uid=${id}`);
};

/**
 * 获取banner
 * @param {num} type 0: pc 1: android 2: iphone 3: ipad
 */
export const getBanerList = type => {
  return getDate.get(`/banner?type=${type}`);
};

/**
 * 获取用户登录状态
 */
export const getUserLoginState = () => {
  return getDate.get("/login/status");
};
