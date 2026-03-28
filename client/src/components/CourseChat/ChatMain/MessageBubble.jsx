import React from "react";

const MessageBubble = ({ message }) => {
    return (
        <div
            className={`message-bubble ${message.sender === "user" ? "user" : "ai"
                }`}
        >
            {message.text}
        </div>
    );
};

export default MessageBubble;