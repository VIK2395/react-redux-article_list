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
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async request
        const firestore = getFirestore();
        firestore.collection("articles").add({
            ...article,
            authorFirstName: "Vasja",
            authorLastName: "Vasiliy",
            authorId: 12345,
            createAt: new Date()
        }).then(() => {
            dispatch(createArticle(article))
        }).catch((error) => {
            dispatch(createArticleError(error))
        })
    }
};
