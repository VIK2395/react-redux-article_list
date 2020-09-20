import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider, useSelector} from "react-redux";
import thunk from "redux-thunk";
import {createFirestoreInstance, getFirestore} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from "react-redux-firebase";
import firebase from "./config/fbConfig";


const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})));

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
};

const AuthIsLoaded = ({children}) => {
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth)) {
        return (
            <div className="center">
                <h5>Loading...</h5>
            </div>
        )
    }
    return children
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));


