import axios from "axios"

const API_URL = 'https://tecmova.com/backtec/public/api/'

export const sendMail = async (message:any) => {
    const response = await axios.post(API_URL+'send-mail', message)
    return response.data
}