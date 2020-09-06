import React, {useState} from "react";

const LogIn = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
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
                <h5 className="grey-text text-darken-3">Log in</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} value={state.email} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} value={state.password} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Log in</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn;
