import React from "react";
import "./EmptyState.css";

const EmptyState = () => {
    return (
        <div className="empty-state">
            <h2>No classes joined yet</h2>
            <button className="join-btn">+ Join Class</button>
        </div>
    );
};

export default EmptyState;