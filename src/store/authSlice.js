import { createSlice } from "@reduxjs/toolkit";


// now the initial state
const initialState = {
    status:false, // if the user is auntheticated or not
    userData:null
}

// let us make a slice

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.status= true
            state.userData = action.payload.userData
        },
        logout:(state)=>{
            state.status = true,
            state.userData = null
        }
    }
}) // we are passing an object

export const {login,logout} =  authSlice.actions

export default authSlice.reducer

