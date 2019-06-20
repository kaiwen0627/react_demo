import Axios from "axios";
import { message } from "antd";
Axios.create({
  baseURL: "api",
  timeout: 5000,
  withCredentials: true
});

// 请求拦截
Axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    message.info("请检测网络状态~~");
    return Promise.reject(error);
  }
);

// 响应拦截
Axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // Do something with response error
    const CODE = error.response.data.code;
    switch (CODE) {
      case 500:
        message.info(" 内部服务器错误");
        break;
      case 400:
        message.info(" 未知错误");
        break;
      case 502:
        message.info(" 密码错误");
        break;
      default:
        
    }

    return Promise.reject(error);
  }
);
export default Axios;
