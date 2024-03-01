import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk('registerUser', async(data)=>{
    try{
        const res= await axios.post("https://65e1621ea8583365b3163c03.mockapi.io/auth/signup", data);
        return res.data;
    }
    catch(err){
        console.error(err)
    }
})

export const getUsers = createAsyncThunk('getUsers', async()=>{
    try{
        const res = await axios("https://65e1621ea8583365b3163c03.mockapi.io/auth/signup");
        console.log(res.data,"ressssssssssss")
        return res.data;
        
    }
    catch(err){
        console.log(err)
    }
})

export const authSlice = createSlice({
    name: "user", 
    initialState:{
        data: [],
        isLoading: localStorage.getItem('setIsLoggedIn') === 'true' ? (true):(false),
        isError :false
    },
    extraReducers: (builder) => {
        // register User
        builder.addCase(registerUser.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(registerUser.fulfilled, (state, action) =>{
            console.log(action.payload,"datakkkkkkkkkkkk");
            state.isLoading = false;
            state.data.push(action.payload)
            console.log(state.data)
            
        })
        builder.addCase(registerUser.rejected, (state, action) =>{
            state.isError = true;
        })

        //get Userss
        builder.addCase(getUsers.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled, (state, action) =>{
            console.log(action.payload,"gettttttttt");
            state.isLoading = false;
            state.data = action.payload;
            console.log(state.data)
            
        })
        builder.addCase(getUsers.rejected, (state, action) =>{
            state.isError = true;
        })

    }
})

export default authSlice.reducer;