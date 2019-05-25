import {login_phone,login_Email} from '../../tools/api'

const USER_LOGININ_BY_PHONE = 'USER_LOGININ_BY_PHONE';
const USER_LOGININ_BY_EMAIL = 'USER_LOGININ_BY_EMAIL';

// export const userLoninByPhone = (data) => {
//   return {
//     type: USER_LOGININ_BY_PHONE,
//     data
//   }
// }


// export const userLoninByEmail = (data) => {
//   return {
//     type: USER_LOGININ_BY_EMAIL,
//     data
//   }
// }


export const userLoninByPhone = (data) => {
  return async (dispatch) => {
    const data = await login_phone(data);

    return {
      type: USER_LOGININ_BY_PHONE,
      data
    }
  }
 
}

export const userLoninByEmail = (email,pwd) => {
  console.log(email,pwd)
  return async (dispatch) => {
    const data = await login_Email(email,pwd);
    
    dispatch({
      type: USER_LOGININ_BY_EMAIL,
      data
    })
  }
 
}