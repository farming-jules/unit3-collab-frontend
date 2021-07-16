import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS'
export const setRecommendations = (payload) => ({ type: SET_RECOMMENDATIONS, payload })

export const UNSET_RECOMMENDATIONS = 'UNSET_RECOMMENDATIONS'
export const unsetRecommendations = () => ({ type: UNSET_RECOMMENDATIONS })

export const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS'
export const getRecommendations = () => (dispatch) => {
  dispatch(loading(GET_RECOMMENDATIONS, { loading: true }))
  axios({
    method: 'GET',
    url: 'https://unit-3-collab.herokuapp.com/api/my/recommendations',
    withCredentials: true
  }).then((resp) => {
    dispatch(setRecommendations(resp.data))
  }).finally(() => {
    dispatch(loading(GET_RECOMMENDATIONS, { loading: false }))
  })
}

export const resetRecommendations = () => (dispatch) => {
  dispatch(unsetRecommendations())
}

export const REMOVE_RECOMMENDATION = 'REMOVE_RECOMMENDATION'
export const removeRecommendation = (payload) => ({ type: REMOVE_RECOMMENDATION, payload })
