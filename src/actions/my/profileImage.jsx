import axios from 'axios'

import { loading } from '@/actions/loading'

import {
  addUserImageFromUser,
  editUserImageFromUser,
  deleteUserImageFromUser
} from './profile'

const getFormData = (file) => {
  const formData = new FormData()
  formData.append('image', file)

  return formData
}

export const CREATE_MY_PROFILE_IMAGE = 'CREATE_MY_PROFILE_IMAGE'
export const createMyProfileImage = (file) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_MY_PROFILE_IMAGE, { loading: true }))
  axios({
    method: 'POST',
    url: 'https://unit-3-collab.herokuapp.com/api/my/user-images',
    withCredentials: true,
    data: getFormData(file)
  }).then((resp) => {
    dispatch(addUserImageFromUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_MY_PROFILE_IMAGE, { loading: false }))
  })
})

export const updateMyProfileImage = (file, UserImageId) => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'PUT',
    url: `https://unit-3-collab.herokuapp.com/api/my/user-images/${UserImageId}`,
    withCredentials: true,
    data: getFormData(file)
  }).then((resp) => {
    dispatch(editUserImageFromUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})

export const destroyMyProfileImage = (UserImageId) => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'DELETE',
    url: `https://unit-3-collab.herokuapp.com/api/my/user-images/${UserImageId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(deleteUserImageFromUser({ id: UserImageId }))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})
