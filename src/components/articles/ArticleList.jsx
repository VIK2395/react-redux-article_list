import React from "react";
import ArticleSummary from "./ArticleSummary";

const ArticleList = ({articles}) => {
    return (
        <div className="section">
            {articles && articles.map(article => <ArticleSummary article={article} key={article.id} />)}
        </div>
    )
}

export default ArticleList;

