import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        case USER_LOGIN_REQUEST:
            return { loading : true }
        case USER_LOGIN_SUCCESS:
            return { loading : false, userInfo : payload}
        case USER_LOGIN_FAIL:
            return { loading : false, error : payload}
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}

export const userSignUpReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading : true }
        case USER_SIGNUP_SUCCESS:
            return { loading : false, userInfo : action.payload}
        case USER_SIGNUP_FAIL:
            return { loading : false, error : action.payload}
        default:
            return state;
    }
}