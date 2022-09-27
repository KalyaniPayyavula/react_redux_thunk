import { createSlice } from "@reduxjs/toolkit";

export const UserActionSlice = createSlice({
    name : 'cash',
    initialState : {
        value : 0
    },

    reducers : {
        deposit : (state, action) =>{
            state.value += action.payload
        },
        withdrawl : (state, action) =>{
            state.value -= action.payload
        }
    }
})

export const {deposit, withdrawl} = UserActionSlice.actions;
export default UserActionSlice.reducer;
