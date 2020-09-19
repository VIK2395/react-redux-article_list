import React from "react";

const ArticleDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Article title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius ex ipsam pariatur perferendis quidem repellat tempora ullam ut? Aliquid excepturi fuga illum molestias necessitatibus non officia pariatur recusandae similique.</p>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by CV</div>
                        <div>6th September, 1:31pm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails;
