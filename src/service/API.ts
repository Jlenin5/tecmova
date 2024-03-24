import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://sismova.tech/backsis/public/api/'

const asyncThunkWithAxios = (endpoint:string, actionName:string, changeMethod:string) => {
  return createAsyncThunk(actionName, async (data:any) => {
    var response:any = null
    if (changeMethod === 'getid') {
      response = await axios.get(API_URL + endpoint + '/' + data)
    } else {
      response = await axios.get(API_URL + endpoint)
    }
    return response.data
  })
}

export default asyncThunkWithAxios