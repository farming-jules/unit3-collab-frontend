import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'
import ReducersTodos from '@/reducers/recommendation'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  recommendations: ReducersTodos,
  router: connectRouter(history)
})

export default createReducersRoot
