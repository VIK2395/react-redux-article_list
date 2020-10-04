import React from "react";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";

const UserInfo = (props) => {

    if (!props.auth.uid) return <Redirect to="/login" />

    return (
        <div className="container center">
            <h5>You are logged in as {props.userInfo}</h5>
            <Link to='/' className="btn pink lighten-1 z-depth-0">Close</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.firebase.auth.email,
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(UserInfo);
