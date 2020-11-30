import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.post('http://localhost:5000/api/auth/login', {email, password}, config)

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type : USER_LOGIN_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
} 

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type :USER_LOGOUT
    })
}



export const signup = (firstname, lastname, username, email, password) => async (dispatch) => {
    try {
        dispatch({
            type : USER_SIGNUP_REQUEST
        })

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.post('http://localhost:5000/api/auth/register', {firstname, lastname, username, email, password}, config)

        dispatch({
            type : USER_SIGNUP_SUCCESS,
            payload : data
        })

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error) {
        dispatch({
            type : USER_SIGNUP_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
} 