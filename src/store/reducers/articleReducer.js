import {
    CREATE_ARTICLE,
    CREATE_ARTICLE_ERROR
} from "../actions/articleActions";

const articleReducer = (state = {}, action) => {
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
