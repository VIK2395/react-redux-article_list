import React, {useState, useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {logInRequest, clearAuthError} from "../../../store/actions/authActions";
import {Redirect} from "react-router-dom";

const LogIn = (props) => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleChange = ev => {
        setCredentials({
            ...credentials,
            [ev.target.id]: ev.target.value
        });
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        props.logIn(credentials);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearAuthError());
        }
    }, []);

    if (props.auth.uid) return <Redirect to="/" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Log in</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} value={credentials.email} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} value={credentials.password} />
                </div>
                <button className="btn pink lighten-1 z-depth-0">Log in</button>
            </form>
            {props.authErrorMessage &&
                <div className="red-text center">
                    <p>{props.authErrorMessage}</p>
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authErrorMessage: state.auth.authErrorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (credentials) => {
            dispatch(logInRequest(credentials))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
