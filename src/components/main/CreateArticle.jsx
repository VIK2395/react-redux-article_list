import React, {useState} from "react";
import {connect} from "react-redux";
import {createArticleRequest} from "../../store/actions/articleActions";
import {Redirect} from "react-router-dom";

const CreateArticle = (props) => {
    const [article, setArticleData] = useState({
        title: "",
        content: ""
    })

    const handleChange = ev => {
        setArticleData({
            ...article,
            [ev.target.id]: ev.target.value
        });
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        props.createArticle(article);
        props.history.push("/");
    }

    if (!props.auth.uid) return <Redirect to="/login" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create an Article</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} value={article.title} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea className="materialize-textarea"
                              id="content"
                              onChange={handleChange}
                              value={article.content} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => {
            dispatch(createArticleRequest(article))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
