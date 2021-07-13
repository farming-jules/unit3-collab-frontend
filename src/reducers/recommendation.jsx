import produce from 'immer'

import {
  SET_RECOMMENDATIONS,
  UNSET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS,
  REMOVE_RECOMMENDATION
} from '@/actions/my/recommendation'

const initialState = {
  recommendations: [],
  isGetRecommendationsLoading: false,
  destroyingIDs: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECOMMENDATIONS: {
      return produce(state, (draft) => {
        draft.recommendations = action.payload
      })
    }
    case UNSET_RECOMMENDATIONS: {
      return produce(state, (draft) => {
        draft.recommendations = []
      })
    }
    case REMOVE_RECOMMENDATION: {
      return produce(state, (draft) => {
        const index = draft.recommendations.findIndex((recommendation) => recommendation.id === action.payload)
        if (index !== -1) draft.recommendations.splice(index, 1)
      })
    }
    case GET_RECOMMENDATIONS: {
      return produce(state, (draft) => {
        draft.isGetRecommendationsLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
