import axios from 'axios'

import { loading } from '@/actions/loading'

import {
  removeRecommendation
} from '@/actions/my/recommendation'

export const CREATE_LIKE = 'CREATE_LIKE'
export const createLike = (id, like) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_LIKE, { loading: true }))
  axios({
    withCredentials: true,
    method: 'POST',
    url: 'http://localhost:3000/api/my/likes',
    data: {
      TargetId: id,
      like
    }
  }).then((resp) => {
    dispatch(removeRecommendation(id))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_LIKE, { loading: false }))
  })
})
