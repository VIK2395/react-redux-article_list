export const LOG_AUTH_ERROR = "LOG_AUTH_ERROR";
export const CLEAR_AUTH_ERROR = "CLEAR_AUTH_ERROR";

export const logAuthError = (errorMessage) => {
    return {
        type: LOG_AUTH_ERROR,
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
            dispatch(logAuthError(error.message))
        });
    }
};

export const signOutRequest = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch(clearAuthError())
        })
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
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                initials: user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
            })
        }).then(() => {
            return firestore.collection("notifications").add({
                content: "joined the project",
                user: `${user.firstName} ${user.lastName}`,
                createAt: new Date()
            })
        }).then(() => {
            dispatch(clearAuthError())
        }).catch((error) => {
            dispatch(logAuthError(error.message))
        })
    }
};

