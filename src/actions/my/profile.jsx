import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const setCurrentUser = (payload) => ({ type: SET_CURRENT_USER, payload })

export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'
export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER })

export const getMyProfile = () => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: 'https://fswdi-api-auth-todos.herokuapp.com/api/my/profile',
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch(() => {
    dispatch(setCurrentUser({ user: null }))
    reject()
  })
})
