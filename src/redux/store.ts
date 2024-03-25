import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../store/productSlice"
import categoriesSlice from "../store/categoriesSlice"

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch