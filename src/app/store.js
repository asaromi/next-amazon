import {configureStore} from '@reduxjs/toolkit'
import basketReducer from '../slices/basketSlice'
import authReducer from '../slices/authSlice'

// the global store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    auth: authReducer,
  },
})
