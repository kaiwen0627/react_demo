export default (state = {}, actions) => {
  switch (actions.type) {
    case "USER_LOGININ_BY_PHONE":
      return { ...state, ...actions.data.data.account };
    case "USER_LOGININ_BY_EMAIL":
      return { ...state, ...actions.data.data.account };
    // case "SET_USER_DETAIL_INFO":
    //   return { ...state, ...actions.data.data};
    default:
      return state;
  }
};
