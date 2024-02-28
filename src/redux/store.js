import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
import LoginSlice from './slices/LoginSlice'

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    loggedInUser : LoginSlice,
  },
})