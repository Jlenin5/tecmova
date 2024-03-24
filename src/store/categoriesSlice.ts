import { createSlice } from '@reduxjs/toolkit'
import asyncThunkWithAxios from '../service/api'
import { Category } from '../interfaces/CategoryInterface'

export const getCategories = asyncThunkWithAxios('cate', 'inventoryEC/categories/getCategories', 'get')

const initialState: Category = {
  id: 1,
  cateName: '',
  cateState: true,
}

const categoriesSlice:any = createSlice({
  name: 'inventoryEC/categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => action.payload)
  }
})

export default categoriesSlice.reducer