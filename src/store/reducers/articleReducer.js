import {
    CREATE_ARTICLE,
    CREATE_ARTICLE_ERROR
} from "../actions/articleActions";

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
            console.log("article created", action.article);
            return state;
        case CREATE_ARTICLE_ERROR:
            console.log("back article create mistake", action.error);
            return state;
        default:
            return state;
    }
};

export default articleReducer;
