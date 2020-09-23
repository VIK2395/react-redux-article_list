export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const CREATE_ARTICLE_ERROR = "CREATE_ARTICLE_ERROR";

export const createArticle = (article) => {
    return {
        type: CREATE_ARTICLE,
        article
    }
};

export const createArticleError = (error) => {
    return {
        type: CREATE_ARTICLE_ERROR,
        error
    }
};

export const createArticleRequest = (article) => {
    return (dispatch, getState, getFirebase) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection("articles").add({
            ...article,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch(createArticle(article))
        }).catch((error) => {
            dispatch(createArticleError(error))
        })
    }
};
