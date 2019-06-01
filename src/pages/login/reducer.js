export default (state = {}, actions) => {
  switch (actions.type) {
    case "USER_LOGININ_BY_PHONE":
      return {
        ...state,
        ...{
          islogin: actions.data.data.code === 200,
          userID: actions.data.data.account.id
        }
      };
    case "USER_LOGININ_BY_EMAIL":
      return {
        ...state,
        ...{
          islogin: actions.data.data.code === 200,
          userID: actions.data.data.account.id
        }
      };
      case "USER_LOGOUT":
        return {
          ...state,
          ...{
            islogin: false,
            
          }
        };
    default:
      return state;
  }
};
