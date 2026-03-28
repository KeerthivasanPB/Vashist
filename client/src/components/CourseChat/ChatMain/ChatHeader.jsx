import React from "react";

const ChatHeader = ({ courseName }) => {
    return (
        <div className="chat-header">
            <h3>{courseName}</h3>
        </div>
    );
};

export default ChatHeader;