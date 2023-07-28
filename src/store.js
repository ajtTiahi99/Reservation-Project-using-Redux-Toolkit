import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./slices/reservationSlice";
import customerSlice from "./slices/customerSlice";

export default configureStore({
    reducer:{
        reservation:reservationSlice,
        customer:customerSlice
    }
})