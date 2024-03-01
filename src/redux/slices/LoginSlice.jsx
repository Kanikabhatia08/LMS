import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const registerUser = createAsyncThunk('registerUser', async(data)=>{
    try{
        const res= await axios("https://65e1621ea8583365b3163c03.mockapi.io/auth/signup", data);
        return res.data;
    }
    catch(err){
        console.error(err)
    }

})
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