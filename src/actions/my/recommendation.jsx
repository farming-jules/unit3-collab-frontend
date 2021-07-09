import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS'
export const setRecommendations = (payload) => ({ type: SET_RECOMMENDATIONS, payload })

export const UNSET_RECOMMENDATIONS = 'UNSET_RECOMMENDATIONS'
export const unsetRecommendations = () => ({ type: UNSET_RECOMMENDATIONS })

export const REMOVE_RECOMMENDATION_IN_RECOMMENDATIONS = 'REMOVE_RECOMMENDATION_IN_RECOMMENDATIONS'
export const removeRecommendationInRecommendations = (payload) => ({ type: REMOVE_RECOMMENDATION_IN_RECOMMENDATIONS, payload })

export const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS'
export const getRecommendations = () => (dispatch) => {
  dispatch(loading(GET_RECOMMENDATIONS, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/my/recommendations',
    withCredentials: true
  }).then((resp) => {
    dispatch(setRecommendations(resp.data))
  }).finally(() => {
    dispatch(loading(GET_RECOMMENDATIONS, { loading: false }))
  })
}

export const DESTROY_RECOMMENDATION = 'DESTROY_RECOMMENDATION'
export const destroyRecommendation = (RecommendationId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_RECOMMENDATION, { loading: true, id: RecommendationId }))
  axios({
    method: 'DELETE',
    url: `https://localhost:3000/api/my/recommendations/${RecommendationId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(removeRecommendationInRecommendations(RecommendationId))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_RECOMMENDATION, { loading: false, id: RecommendationId }))
  })
})

export const resetRecommendations = () => (dispatch) => {
  dispatch(unsetRecommendations())
}
