import produce from 'immer'

import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  ADD_USER_IMAGE_FROM_USER,
  EDIT_USER_IMAGE_FROM_USER,
  DELETE_USER_IMAGE_FROM_USER
} from '@/actions/my/profile'

const initialState = {
  currentUser: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return produce(state, (draft) => {
        draft.currentUser = action.payload
      })
    }
    case UNSET_CURRENT_USER: {
      return produce(state, (draft) => {
        draft.currentUser = null
      })
    }
    case ADD_USER_IMAGE_FROM_USER: {
      return produce(state, (draft) => {
        draft.currentUser.UserImages.push(action.payload)
      })
    }
    case EDIT_USER_IMAGE_FROM_USER: {
      return produce(state, (draft) => {
        const index = draft.UserImages.findIndex((image) => image.id === action.payload.id)
        if (index !== -1) draft.UserImages[index] = action.payload
      })
    }
    case DELETE_USER_IMAGE_FROM_USER: {
      return produce(state, (draft) => {
        const index = draft.UserImages.findIndex((image) => image.id === action.payload.id)
        if (index !== -1) draft.UserImages.splice(index, 1)
      })
    }
    default: {
      return state
    }
  }
}
