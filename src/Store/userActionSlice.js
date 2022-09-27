import { createSlice } from "@reduxjs/toolkit";

export const UserActionSlice = createSlice({
    name : 'cash',
    initialState : {
        value : 0
    },

    reducers : {
        balance : (state, action) =>{
            state.value = action.payload
        },
        deposit : (state, action) =>{
            state.value += action.payload
        },
        withdrawl : (state, action) =>{
            state.value -= action.payload
        }
    }
})

export const {balance, deposit, withdrawl} = UserActionSlice.actions;
export default UserActionSlice.reducer;
