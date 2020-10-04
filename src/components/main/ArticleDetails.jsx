import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {Link, Redirect} from "react-router-dom";
import {deleteArticleRequest} from "../../store/actions/articleActions";

const ArticleDetails = (props) => {
    const {article, auth} = props;

    const deleteArticle = () => {
        props.deleteArticle(props.match.params.id);
        props.history.push("/");
    }

    if (!auth.uid) return <Redirect to="/login" />

    if (article) {
        return (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <label>Title</label>
                        <span className="card-title">{article.title}</span>
                        <label>Content</label>
                        <p>{article.content}</p>
                    </div>
                    <div className="card-action">
                        <Link to={`/update/${props.match.params.id}`} className="btn pink lighten-1 z-depth-0">Update</Link>
                        <span>   </span>
                        <button className="btn pink lighten-1 z-depth-0" onClick={deleteArticle}>Delete</button>
                        <Link to='/' className="btn pink lighten-1 z-depth-0 right">Close</Link>
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
    const articles = state.firestore.data.articles; //state.firestore.ordered.articles.id.id;
    const article = articles ? articles[id] : null;
    return {
        article,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteArticle: (articleId) => {
            dispatch(deleteArticleRequest(articleId))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: "articles", orderBy: ["createAt", "desc"]}
    ])
)(ArticleDetails);
