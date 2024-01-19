import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSlice";
import userDetailSlice2 from "../features/userDetailSlice2";
import pixelImageSlice from "../features/pixelImageSlice";
import productSlice from "../features/productSlice";


export const store = configureStore({
    reducer: {
        app: userDetail,
        app2:userDetailSlice2,
        imageStore:pixelImageSlice,
        product:productSlice,
    },
})