import { createSlice,current } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"


const customerSlice = createSlice({
    name:'customer',
    initialState:[],
    reducers:{
        AddCustomer(state,action){
            // console.log('action.payload.name:',action.payload.name)
            // console.log('action.payload.id:',action.payload.id)

            const newCustomer = {
                // id:action.payload.id,
                id:uuidv4(),
                customerName:action.payload.name,
                dishes:action.payload.dishes
            }
            state.push(newCustomer)
        },
        updateCustomer(state,action){
            // console.log(action.payload)
            // console.log(current(state))
            const fetchedObj = state.find(item=>item.id===action.payload.customerId)
            fetchedObj.dishes.push(action.payload.dish)
            // console.log(current(fetchedObj))
            // console.log(current(fetchedObj.dishes))
            // console.log(fetchedObj.dishes.push(action.payload.dish))
            // console.log('customer.dishes:',customer.dishes)
            // console.log('action.payload.dish:',action.payload.dish)
            // customer.dishes.push(action.payload.dish)
        }
    }
})


export default customerSlice.reducer
export const {AddCustomer,updateCustomer} = customerSlice.actions