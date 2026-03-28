import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        onSend(input);
        setInput("");
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                placeholder="Ask something about this course..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatInput;