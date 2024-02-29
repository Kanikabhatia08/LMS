import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk("fetchBlogs", async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    // console.log(res.JSON(),"kkkkkkkkkkkk");
        const data = await res.json();
        return data

});

export const BlogSlice = createSlice({
    name: "blogss",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchBlogs.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchBlogs.fulfilled, (state, action) =>{
            console.log(action.payload,"datakkkkkkkkkkkk");
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchBlogs.rejected, (state, action) =>{
            state.isError = true;
        })
    }
});

