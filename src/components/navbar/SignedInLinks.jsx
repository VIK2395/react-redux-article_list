import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOutRequest} from "../../store/actions/authActions";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Article</NavLink></li>
            <li><a onClick={props.signOut}>Log out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
         dispatch(signOutRequest())
        }
    }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
