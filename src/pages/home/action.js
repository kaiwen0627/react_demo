import {getUserInfo} from '../../tools/api'


const SET_USER_DETAIL_INFO = 'SET_USER_DETAIL_INFO';


export const SetUserDetailInfo = (id) => {
  return async (dispatch) => {
    const data = await getUserInfo(id);
    
    dispatch({
      type: SET_USER_DETAIL_INFO ,
      data
    })
  }
 
}