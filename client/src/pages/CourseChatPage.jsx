import React, { useState } from "react";
import ChatSidebar from "../components/CourseChat/ChatSidebar/ChatSidebar";
import ChatHeader from "../components/CourseChat/ChatMain/ChatHeader";
import ChatWindow from "../components/CourseChat/ChatMain/ChatWindow";
import ChatInput from "../components/CourseChat/ChatMain/ChatInput";
import "../components/CourseChat/CourseChatLayout.css";
import "../components/CourseChat/ChatMain/ChatMain.css";

const CourseChatPage = () => {
    const [messages, setMessages] = useState([]);

    const handleSend = (text) => {
        const newMessage = { sender: "user", text };

        setMessages((prev) => [...prev, newMessage]);

        // Fake AI response (for now)
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { sender: "ai", text: "AI response for: " + text },
            ]);
        }, 500);
    };

    return (
        <div className="course-chat-container">
            <ChatSidebar />

            <div className="chat-main">
                <ChatHeader courseName="DBMS Theory" />
                <ChatWindow messages={messages} />
                <ChatInput onSend={handleSend} />
            </div>
        </div>
    );
};

export default CourseChatPage;