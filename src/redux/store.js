import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
import LoginSlice from './slices/LoginSlice'
import { BlogSlice } from './slices/BlogSlice'

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    loggedInUser : LoginSlice,
    blog: BlogSlice.reducer,
  },
})