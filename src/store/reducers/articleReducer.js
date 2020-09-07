const initState = {
    articles: [
        {id: "1", title: "first article", content: "first article content"},
        {id: "2", title: "second article", content: "second article content"},
        {id: "3", title: "third article", content: "third article content"}
    ]
}

const articleReducer = (state = initState, action) => {
    return state
};

export default articleReducer;
