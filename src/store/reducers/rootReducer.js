import authReducer from "./authReducer";
import articleReducer from "./articleReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    article: articleReducer, //not needed anymore
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
