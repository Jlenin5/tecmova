import { createSlice } from '@reduxjs/toolkit'
import asyncThunkWithAxios from '../service/api'
import { Product } from '../interfaces/ProductInterface'

export const getProducts = asyncThunkWithAxios('prod', 'inventoryEC/products/getProducts', 'get')
export const getProduct:any = asyncThunkWithAxios('prodfeatured', 'inventoryEC/products/getProduct', 'getid')

const initialState: Product = {
  id: 1,
  SerialNumber: 0,
  prodNumber: '',
  featuredImageId: '',
  prodName: '',
  prodDescription: '',
  Unit: 0,
  prodStock: 0,
  prodPurchasePrice: 0,
  prodSalePrice: 0,
  prodWidth: 0,
  prodHeight: 0,
  prodDepth: 0,
  prodWeight: 0,
  prodState: 0,
  prodWebHome: 0,
  categories: [],
  product_images: [],
  serial_number: [],
  unit: [],
  branch_office: []
}

const productsSlice:any = createSlice({
  name: 'inventoryEC/products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => action.payload)
    builder.addCase(getProduct.fulfilled, (state, action) => action.payload)
  }
})

export default productsSlice.reducer