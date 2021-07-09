import axios from 'axios'

import { loading } from '@/actions/loading'

export const PUTLIKE_IN_RECOMMENDATION = 'PUTLIKE_IN_RECOMMENDATION'
export const putLikeInRecommendation = (payload) => ({ type: PUTLIKE_IN_RECOMMENDATION, payload })

export const UPDATE_RECOMMENDATION = 'UPDATE_RECOMMENDATION'
export const updateRecommendation = (id) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_RECOMMENDATION, { loading: true }))
  axios({
    method: 'PUT',
    url: 'https://fswdi-api-todos.herokuapp.com/api/my/like',
    data: id
  }).then((resp) => {
    dispatch(putLikeInRecommendation(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_RECOMMENDATION, { loading: false }))
  })
})
