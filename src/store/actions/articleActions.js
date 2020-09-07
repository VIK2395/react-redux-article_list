export const CREATE_ARTICLE = "CREATE_ARTICLE";

export const createArticle = (article) => {
    return {
        type: CREATE_ARTICLE,
        article
    }
};

export const createArticleThunk = (article) => {
    return dispatch => {
        //make async request
        dispatch(createArticle(article))
    }
};
