import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const setCurrentUser = (payload) => ({ type: SET_CURRENT_USER, payload })

export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'
export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER })

export const ADD_USER_IMAGE_FROM_USER = 'ADD_USER_IMAGE_FROM_USER'
export const addUserImageFromUser = (payload) => ({ type: ADD_USER_IMAGE_FROM_USER, payload })

export const EDIT_USER_IMAGE_FROM_USER = 'EDIT_USER_IMAGE_FROM_USER'
export const editUserImageFromUser = (payload) => ({ type: EDIT_USER_IMAGE_FROM_USER, payload })

export const DELETE_USER_IMAGE_FROM_USER = 'DELETE_USER_IMAGE_FROM_USER'
export const deleteUserImageFromUser = (payload) => ({ type: DELETE_USER_IMAGE_FROM_USER, payload })

export const getMyProfile = () => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/my/profile',
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch(() => {
    dispatch(setCurrentUser(null))
    reject()
  })
})

export const updateMyProfile = (values) => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'PUT',
    url: 'http://localhost:3000/api/my/profile',
    withCredentials: true,
    data: values
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})

export const deleteMyProfile = () => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'DELETE',
    url: 'http://localhost:3000/api/my/profile',
    withCredentials: true
  }).then((resp) => {
    dispatch(unsetCurrentUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})