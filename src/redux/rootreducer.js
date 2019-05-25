import { combineReducers } from 'redux'

import User from '../pages/login/reducer'

const rootreducer = combineReducers({
  User
});

export { rootreducer };