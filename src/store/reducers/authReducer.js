import {
    LOG_AUTH_ERROR,
    CLEAR_AUTH_ERROR
} from "../actions/authActions";

const initState = {
    authErrorMessage: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOG_AUTH_ERROR:
            return {
                ...state,
                authErrorMessage: action.errorMessage
            };
        case CLEAR_AUTH_ERROR:
            return {
                ...state,
                authErrorMessage: null
            };
        default:
            return state;
    }
};

export default authReducer;
