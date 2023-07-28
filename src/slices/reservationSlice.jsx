import { createSlice } from "@reduxjs/toolkit";


const reservationSlice = createSlice({
    name:'reservation',
    initialState:[],
    reducers:{
        addUser(state,action){
            // console.log('action.payload',action.payload)
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        }
    }
})


export default reservationSlice.reducer
export const {addUser,removeUser} = reservationSlice.actions