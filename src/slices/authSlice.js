import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.loggedIn = action.payload.loggedIn
      state.user = action.payload.user
    },
    revokeAuth: (state) => {
      state.loggedIn = false
      state.user = null
    },
  }
})

export const {setAuth, revokeAuth} = authSlice.actions

export const selectAuth = (state) => state.auth

export default authSlice.reducer
