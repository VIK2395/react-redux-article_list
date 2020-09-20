import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";

const ArticleDetails = ({article, auth}) => {

    if (!auth.uid) return <Redirect to="/login" />

    if (article) {
        return (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{article.title}</span>
                        <p>{article.content}</p>
                    </div>
                    <div className="card-action lighten-4 grey-text">
                        <div>Posted by {article.authorFirstName} {article.authorLastName}</div>
                        <div>{article.createAt.toDate().toString()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading article...</p>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const articles = state.firestore.data.articles;
    const article = articles ? articles[id] : null;
    return {
        article,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        {collection: "articles"}
    ])
)(ArticleDetails);
