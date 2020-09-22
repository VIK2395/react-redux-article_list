export const AUTH_ERROR = "AUTH_ERROR";
export const CLEAR_AUTH_ERROR = "CLEAR_AUTH_ERROR";
export const SIGNOUT = "SIGNOUT";
export const SIGNUP = "SIGNUP";

export const authError = (errorMessage) => {
    return {
        type: AUTH_ERROR,
        errorMessage
    }
};

export const clearAuthError = () => {
    return {
        type: CLEAR_AUTH_ERROR
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
            dispatch(clearAuthError())
        }).catch((error) => {
            dispatch(authError(error.message))
        });
    }
};

export const signOut = () => {
    return {
        type: SIGNOUT
    }
};

export const signOutRequest = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch(signOut())
        })
    }
};

export const signUp = () => {
    return {
        type: SIGNUP
    }
};

export const signUpRequest = (user) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then((response) => {
            return firestore.collection("users").doc(response.user.uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
                initials: `${user.firstName[0]}${user.lastName[0]}`
            })
        }).then(() => {
            dispatch(signUp())
        }).catch((error) => {
            dispatch(authError(error.message))
        })
    }
};

