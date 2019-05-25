export default (state = {}, actions) => {
  switch (actions.type) {
    case "SET_USER_DETAIL_INFO":
      return { ...state, ...actions.data.data};
    default:
      return state;
  }
};
