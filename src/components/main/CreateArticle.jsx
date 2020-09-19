import React, {useState} from "react";
import {connect} from "react-redux";
import {createArticleRequest} from "../../store/actions/articleActions";

const CreateArticle = (props) => {
    const [state, setState] = useState({
        title: "",
        content: ""
    })

    const handleChange = ev => {
        setState({
            ...state,
            [ev.target.id]: ev.target.value
        });
    }

    const handleSubmit = ev => {
        ev.preventDefault();

        props.createArticle(state);
        //console.log(state)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create an Article</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} value={state.title} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea className="materialize-textarea"
                              id="content"
                              onChange={handleChange}
                              value={state.content} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => {
            dispatch(createArticleRequest(article))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateArticle);
