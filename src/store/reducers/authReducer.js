import {
    ADD_LOGIN_ERROR,
    CLEAR_LOGIN_ERROR, SIGNOUT
} from "../actions/authActions";

const initState = {
    authErrorMessage: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case CLEAR_LOGIN_ERROR:
            return {
                ...state,
                authErrorMessage: null
            };
        case ADD_LOGIN_ERROR:
            return {
                ...state,
                authErrorMessage: action.errorMessage
            };
        case SIGNOUT:
            console.log("SIGNOUT complete");
            return state;
        default:
            return state;
    }
};

export default authReducer;
