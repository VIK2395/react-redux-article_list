import React from "react";
import Notifications from "./Notifications";
import ArticleList from "../articles/ArticleList";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

const Dashboard = ({articles}) => {
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
    console.log(state);
    return {
        articles: state.firestore.ordered.articles
    }
}

export default compose(
    connect(mapStateToProps, null),
    //connects the online collection to the store.firestore reducer in order to reflect the collection changes #19
    //firestoreConnect(() => ["articles"])
    firestoreConnect([
        {collection: "articles"}
    ])
)(Dashboard);
