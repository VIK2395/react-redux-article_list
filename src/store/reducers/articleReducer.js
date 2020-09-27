import {
    LOG_ARTICLE_ERROR,
    CLEAR_ARTICLE_ERROR
} from "../actions/articleActions";

const initState = {
    articleErrorMessage: null
};

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case LOG_ARTICLE_ERROR:
            return {
                ...state,
                articleErrorMessage: action.errorMessage
            };
        case CLEAR_ARTICLE_ERROR:
            return {
                ...state,
                articleErrorMessage: null
            };
        default:
            return state;
    }
};

export default articleReducer;
