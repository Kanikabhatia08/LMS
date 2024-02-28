import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart :(state, action) => {
            return state.filter((item) => item.id !== action.payload); 
        },
        increment: (state, action) => {
            state = state.map((element) => {
                if (element.id == action.payload) {
                    element.count += 1;
                    //     return element
                }
                // else{
                //     return element
                // }
                return element;
            }
            )
            
        },
        decrement: (state, action) => {
            state = state.map((element) =>{
                if(element.id == action.payload && element.count > 1){
                    element.count -=1;
                }
                return element;
            })
        },
    }
})

export const { increment, decrement, addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;