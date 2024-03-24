import axios from "axios"
import { Product } from "../interfaces/ProductInterface"
import { Category } from "../interfaces/CategoryInterface"

const API_URL = 'https://sismova.tech/backsis/public/api/'

export const getProducts = async (): Promise<Product []> => {
    const response = await axios.get(API_URL+'prod')
    return response.data
}

export const getCategories = async(): Promise<Category []> => {
    const response = await axios.get(API_URL+'cate')
    return response.data
}