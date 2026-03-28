import React from "react";
import ChatList from "./ChatList";
import "../../Dashboard/UserMenu"; // just for reference clarity
import UserMenu from "../../Dashboard/UserMenu";
import "./ChatSidebar.css";

const ChatSidebar = () => {
    return (
        <div className="chat-sidebar">

            {/* 🔴 TOP SECTION */}
            <div className="chat-sidebar-top">

                {/* New Chat */}
                <button className="new-chat-btn">➕ New Chat</button>

                {/* Notes Section */}
                <div className="chat-sidebar-section">
                    <div className="chat-sidebar-item">📝 My Notes</div>
                    <div className="chat-sidebar-item">📚 All Notes</div>
                </div>

                {/* Chat History */}
                <ChatList />

            </div>

            {/* 🟢 BOTTOM SECTION */}
            <div className="chat-sidebar-bottom">
                <UserMenu />
            </div>

        </div>
    );
};

export default ChatSidebar;