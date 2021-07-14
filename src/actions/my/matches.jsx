import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_MATCHES = 'SET_MATCHES'
export const setMatches = (payload) => ({ type: SET_MATCHES, payload })

export const UNSET_MATCHES = 'UNSET_MATCHES'
export const unsetMatches = () => ({ type: UNSET_MATCHES })

export const GET_MATCHES = 'GET_MATCHES'
export const getMatches = () => (dispatch) => {
  dispatch(loading(GET_MATCHES, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/my/matches',
    withCredentials: true
  }).then((resp) => {
    dispatch(setMatches(resp.data))
  }).finally(() => {
    dispatch(loading(GET_MATCHES, { loading: false }))
  })
}

export const resetMatches = () => (dispatch) => {
  dispatch(unsetMatches())
}

export const REMOVE_MATCH = 'REMOVE_MATCH'
export const removeMatch = (payload) => ({ type: REMOVE_MATCH, payload })
