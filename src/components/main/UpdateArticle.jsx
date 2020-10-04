import React, {useState} from "react";
import {connect} from "react-redux";
import {updateArticleRequest} from "../../store/actions/articleActions";
import {Link, Redirect} from "react-router-dom";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const UpdateArticle = (props) => {
    const [article, setArticleData] = useState({
        title: props.article ? props.article.title : "",
        content: props.article ? props.article.content : ""
    })

    const handleChange = ev => {
        setArticleData({
            ...article,
            [ev.target.id]: ev.target.value
        });
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        props.updateArticle(article, props.match.params.id);
        props.history.push(`/article/${props.match.params.id}`);
    }

    if (!props.auth.uid) return <Redirect to="/login" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Update the Article</h5>
                <div className="input-field">
                    <label htmlFor="title" className="active">Title</label>
                    <input type="text" id="title" required onChange={handleChange} value={article.title} />
                </div>
                <div className="input-field">
                    <label htmlFor="content" className="active">Content</label>
                    <textarea className="materialize-textarea"
                              id="content"
                              required
                              onChange={handleChange}
                              value={article.content} />
                </div>
                <button className="btn pink lighten-1 z-depth-0">Save</button>
                <span>   </span>
                <Link to={`/article/${props.match.params.id}`} className="btn pink lighten-1 z-depth-0">Cancel</Link>
            </form>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const articles = state.firestore.data.articles;
    const article = articles ? articles[id] : null;
    return {
        article,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateArticle: (updatedArticle, articleId) => {
            dispatch(updateArticleRequest(updatedArticle, articleId))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: "articles", orderBy: ["createAt", "desc"]}
    ])
)(UpdateArticle);
