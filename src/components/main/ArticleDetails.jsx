import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";

const ArticleDetails = (props) => {
    console.log("article props: ", props);
    const {article} = props;
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
                        <div>blah blah</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Article loading...</p>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    console.log("state: ", state);
    const id = ownProps.match.params.id;
    const articles = state.firestore.data.articles;
    const article = articles ? articles[id] : null;
    return {
        article
    }
};

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        {collection: "articles"}
    ])
)(ArticleDetails);
