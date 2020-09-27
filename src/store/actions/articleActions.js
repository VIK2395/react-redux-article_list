export const LOG_ARTICLE_ERROR = "LOG_ARTICLE_ERROR";
export const CLEAR_ARTICLE_ERROR = "CLEAR_ARTICLE_ERROR";

export const clearArticleError = () => {
    return {
        type: CLEAR_ARTICLE_ERROR,
    }
};

export const logArticleError = (errorMessage) => {
    return {
        type: LOG_ARTICLE_ERROR,
        errorMessage
    }
};

export const createArticleRequest = (article) => {
    return (dispatch, getState, getFirebase) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const createAt = new Date();

        firestore.collection("articles").add({
            ...article,
            author: `${profile.firstName} ${profile.lastName}`,
            createAt
        }).then(() => {
            return firestore.collection("notifications").add({
                content: "added a new article",
                user: `${profile.firstName} ${profile.lastName}`,
                createAt
            })
        }).then(() => {
            dispatch(clearArticleError())
        }).catch((error) => {
            dispatch(logArticleError(error.message))
        });

    }
};
