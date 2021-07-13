import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'
import ReducersRecommendations from '@/reducers/recommendation'
import ReducersMatches from '@/reducers/match'
import ReducersLikes from '@/reducers/like'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  recommendations: ReducersRecommendations,
  matches: ReducersMatches,
  likes: ReducersLikes,
  router: connectRouter(history)
})

export default createReducersRoot
