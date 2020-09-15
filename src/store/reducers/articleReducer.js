import {CREATE_ARTICLE} from "../actions/articleActions";

const initState = {
    articles: [
        {id: "1", title: "first article", content: "first article content"},
        {id: "2", title: "second article", content: "second article content"},
        {id: "3", title: "third article", content: "third article content"}
    ]
}

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_ARTICLE:
            console.log("article created", action.article)
    }

    return state
};

export default articleReducer;
