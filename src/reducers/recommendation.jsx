import produce from 'immer'

import {
  SET_RECOMMENDATIONS,
  UNSET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS,
  DESTROY_RECOMMENDATION
} from '@/actions/my/recommendation'

import {
  PUTLIKE_IN_RECOMMENDATION
} from '@/actions/my/PutLike'

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
    case PUTLIKE_IN_RECOMMENDATION: {
      return produce(state, (draft) => {
        const index = draft.recommendations.findIndex((recommendation) => recommendation.id === action.payload.recommendation.id)
        if (index !== -1) draft.recommendations[index] = action.payload.recommendation
      })
    }
    case GET_RECOMMENDATIONS: {
      return produce(state, (draft) => {
        draft.isGetRecommendationsLoading = action.payload.loading
      })
    }
    case DESTROY_RECOMMENDATION: {
      return produce(state, (draft) => {
        if (action.payload.loading) {
          draft.destroyingIDs.push(action.payload.id)
        } else {
          const index = draft.destroyingIDs.indexOf(action.payload.id)
          if (index !== -1) draft.destroyingIDs.splice(index, 1)
        }
      })
    }
    default: {
      return state
    }
  }
}
