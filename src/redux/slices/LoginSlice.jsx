import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "kuch bhi",
    initialState: localStorage.getItem('setIsLoggedIn') === 'true' ? (true):(false),
    reducers:{
        authenticate: (state) =>{
            if(localStorage.getItem('setIsLoggedIn') === 'true'){
                return true
            }
            return false
        }
    }
})

export const {authenticate} = LoginSlice.actions;
export default LoginSlice.reducer