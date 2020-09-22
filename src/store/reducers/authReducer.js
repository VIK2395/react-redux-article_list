import {
    AUTH_ERROR,
    CLEAR_AUTH_ERROR,
    SIGNUP,
    SIGNOUT
} from "../actions/authActions";

const initState = {
    authErrorMessage: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_ERROR:
            console.log("auth error");
            return {
                ...state,
                authErrorMessage: action.errorMessage
            };
        case CLEAR_AUTH_ERROR:
            return {
                ...state,
                authErrorMessage: null
            };
        case SIGNUP:
            console.log("signup success");
            return {
                ...state,
                authErrorMessage: null
            };
        case SIGNOUT:
            console.log("signout success");
            return {
                ...state,
                authErrorMessage: null
            };
        default:
            return state;
    }
};

export default authReducer;
