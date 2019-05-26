import { combineReducers } from 'redux'

import Login from '../pages/login/reducer'
import UserInfo from '../pages/home/reducer'

const rootreducer = combineReducers({
  Login,
  UserInfo
});

export { rootreducer };