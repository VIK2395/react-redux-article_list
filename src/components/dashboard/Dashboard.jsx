import React from "react";
import Notifications from "./Notifications";
import ArticleList from "../articles/ArticleList";

const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ArticleList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
