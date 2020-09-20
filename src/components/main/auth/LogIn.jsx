import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {logInRequest, clearLoginError} from "../../../store/actions/authActions";

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

    useEffect(() => {
        return () => {
            props.dispatch(clearLoginError());
        }
    }, []);

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
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Log in</button>
                </div>
                {props.authErrorMessage &&
                    <div className="red-text center">
                        <p>{props.authErrorMessage}</p>
                    </div>}
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authErrorMessage: state.auth.authErrorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (credentials) => {
            dispatch(logInRequest(credentials))
        },
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
