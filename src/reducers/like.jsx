import produce from 'immer'

import {
  SET_LIKES,
  UNSET_LIKES,
  GET_LIKES,
  REMOVE_LIKE
} from '@/actions/my/likesd'

const initialState = {
  likes: [],
  isGetLikesLoading: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKES: {
      return produce(state, (draft) => {
        draft.likes = action.payload
      })
    }
    case UNSET_LIKES: {
      return produce(state, (draft) => {
        draft.likes = []
      })
    }
    case REMOVE_LIKE: {
      return produce(state, (draft) => {
        const index = draft.likes.findIndex((like) => like.id === action.payload)
        if (index !== -1) draft.likes.splice(index, 1)
      })
    }
    case GET_LIKES: {
      return produce(state, (draft) => {
        draft.isGetLikesLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
