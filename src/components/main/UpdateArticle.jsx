import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {updateArticleRequest} from "../../store/actions/articleActions";
import {Link, Redirect} from "react-router-dom";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const UpdateArticle = (props) => {
    const [article, setArticleData] = useState(props.article);
    //state doesn't change based on new props; this is how useState works.

    useEffect(() => {
        setArticleData({
            ...props.article
        });
    }, [props.article]);
    //to update state based on new props.

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

    if (props.loading) {
        return (
            <div className="center">
                <p>Loading the article...</p>
            </div>
        )
    }

    if (props.warning) {
        return (
            <div className="red-text center">
                <p>{props.warning}</p>
                <Link to='/' className="btn pink lighten-1 z-depth-0">Home</Link>
            </div>
        )
    }

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

    const warning = () => {
        if (articles) {
            if (articles[id]) {
                return null
            } else {
                return "No such article in the database"
            }
        } else {
            return null
        }
    }

    const noArticleYet = {
        title: "",
        content: ""
    }

    const article = articles ? articles[id] : noArticleYet;

    return {
        article,
        auth: state.firebase.auth,
        loading: !articles,
        warning: warning()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateArticle: (updatedArticle, articleId) => {
            dispatch(updateArticleRequest(updatedArticle, articleId))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: "articles", orderBy: ["createAt", "desc"]}
    ])
)(UpdateArticle);
