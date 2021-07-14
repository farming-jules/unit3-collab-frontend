import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_LIKES = 'SET_LIKES'
export const setLikes = (payload) => ({ type: SET_LIKES, payload })

export const UNSET_LIKES = 'UNSET_LIKES'
export const unsetLikes = () => ({ type: UNSET_LIKES })

export const GET_LIKES = 'GET_LIKES'
export const getLikes = () => (dispatch) => {
  dispatch(loading(GET_LIKES, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/my/likes',
    withCredentials: true
  }).then((resp) => {
    dispatch(setLikes(resp.data))
  }).finally(() => {
    dispatch(loading(GET_LIKES, { loading: false }))
  })
}

export const resetLikes = () => (dispatch) => {
  dispatch(unsetLikes())
}

export const REMOVE_LIKE = 'REMOVE_LIKE'
export const removeLike = (payload) => ({ type: REMOVE_LIKE, payload })
