import produce from 'immer'

import {
  SET_MATCHES,
  UNSET_MATCHES,
  GET_MATCHES,
  REMOVE_MATCH
} from '@/actions/my/matches'

const initialState = {
  matches: [],
  isGetMatchesLoading: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES: {
      return produce(state, (draft) => {
        draft.matches = action.payload
      })
    }
    case UNSET_MATCHES: {
      return produce(state, (draft) => {
        draft.matches = []
      })
    }
    case REMOVE_MATCH: {
      return produce(state, (draft) => {
        const index = draft.matches.findIndex((match) => match.id === action.payload)
        if (index !== -1) draft.matches.splice(index, 1)
      })
    }
    case GET_MATCHES: {
      return produce(state, (draft) => {
        draft.isGetMatchesLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
