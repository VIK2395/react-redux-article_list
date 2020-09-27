import React from "react";
import moment from "moment";

const Notifications = ({notifications}) => {
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul>
                        {notifications && notifications.map(note => {
                            return (
                                <li className="notification" key={note.id}>
                                    <span className="pink-text">{note.user} </span>
                                    <span>{note.content}</span>
                                    <div className="grey-text">
                                        {moment(note.createAt.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Notifications;
