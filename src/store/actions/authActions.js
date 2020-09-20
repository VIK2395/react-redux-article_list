export const ADD_LOGIN_ERROR ="ADD_LOGIN_ERROR";
export const CLEAR_LOGIN_ERROR = "CLEAR_LOGIN_ERROR";
export const SIGNOUT = "SIGNOUT";

export const addLoginError = (errorMessage) => {
    return {
        type: ADD_LOGIN_ERROR,
        errorMessage
    }
};

export const clearLoginError = () => {
    return {
        type: CLEAR_LOGIN_ERROR
    }
};

export const logInRequest = (credentials) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        //log in request
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch(clearLoginError())
        }).catch((error) => {
            dispatch(addLoginError(error.message))
        });
    }
};

export const signOut = () => {
    return {
        type: SIGNOUT
    }
}

export const signOutRequest = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch(signOut())
        })
    }
}
