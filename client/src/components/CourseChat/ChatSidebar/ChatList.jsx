import React from "react";

const ChatList = () => {
    // Dummy chats (replace later with real data)
    const chats = [
        { id: 1, title: "DBMS Normalization Doubts" },
        { id: 2, title: "ER Diagram Explanation" },
        { id: 3, title: "SQL Queries Practice" },
    ];

    return (
        <div className="chat-list">
            <p className="chat-list-title">Chats</p>

            {chats.map((chat) => (
                <div key={chat.id} className="chat-item">
                    {chat.title}
                </div>
            ))}
        </div>
    );
};

export default ChatList;