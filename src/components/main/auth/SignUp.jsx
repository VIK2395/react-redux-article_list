import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUpRequest} from "../../../store/actions/authActions";

const SignUp = (props) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })

    const handleChange = ev => {
        setUser({
            ...user,
            [ev.target.id]: ev.target.value
        });
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        props.signUp(user);
    }

    if (props.auth.uid) return <Redirect to="/" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} value={user.email} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} value={user.password} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} value={user.firstName} />
                </div>
                <div className="input-field">
                    <label htmlFor="lasttName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange} value={user.lastName} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign up</button>
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
        auth: state.firebase.auth,
        authErrorMessage: state.auth.authErrorMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (user) => {
            dispatch(signUpRequest(user))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
