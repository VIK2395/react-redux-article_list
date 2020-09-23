import React from "react";
import Notifications from "./Notifications";
import ArticleList from "./ArticleList";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

const Dashboard = ({articles, auth}) => {
    if (!auth.uid) return <Redirect to="/login" />

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ArticleList articles={articles} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.firestore.ordered.articles,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps, null),
    //connects the online collection to the store.firestore reducer in order to reflect the collection changes #19
    firestoreConnect([
        //need to re-write "orderBy" in order not to get re-ordering when re-render is done, or use Reselect
        {collection: "articles", orderBy: ["createAt", "desc"]}
    ])
)(Dashboard);
