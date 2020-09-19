import React, {useState} from "react";

const SignUp = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })

    const handleChange = ev => {
        setState({
            ...state,
            [ev.target.id]: ev.target.value
        });
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(state)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} value={state.email} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} value={state.password} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} value={state.firstName} />
                </div>
                <div className="input-field">
                    <label htmlFor="lasttName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange} value={state.lastName} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
