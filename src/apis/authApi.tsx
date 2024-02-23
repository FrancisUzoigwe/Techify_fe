

import axios from "axios"

// const url: string = "http://localhost:2345"
const url: string = "https://techify-be.onrender.com"

export const registerApi = async (data: any) => {
    try {
        return await axios.post(`${url}/api/register`, data).then((res) => {
            return res.data
        })
    } catch (error: any) {
        console.log(error?.message)
    }
}


export const verifyApi = async (userID: any) => {
    try {
        return await axios.patch(`${url}/api/${userID}/verify-account`).then((res) => {
            return res.data?.data
        })
    } catch (error: any) {
        console.log(error?.text)
    }
}

export const signinApi = async (data: any) => {
    try {
        return await axios.post(`${url}/api/signin`, data).then((res) => {
            return res.data?.data
        })
    } catch (error: any) {
        console.log(error?.text)

    }
}

