import React from "react";

const ArticleSummary = ({article}) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{article.title}</span>
                <p>Posted by {article.authorFirstName} {article.authorLastName}</p>
                <p className="grey-text">{article.createAt.toDate().toString()}</p>
            </div>
        </div>
    )
}

export default ArticleSummary;
