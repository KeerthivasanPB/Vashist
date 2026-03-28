import React, { useState } from "react";

const UploadNoteModal = ({ onClose, onAdd }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
        if (!title.trim()) return;

        const newNote = {
            id: Date.now(),
            title,
            date: new Date().toLocaleDateString(),
        };

        onAdd(newNote);
        onClose();
    };

    return (
        <div className="modal-overlay">

            <div className="modal">

                <h3>Upload Note</h3>

                <input
                    type="text"
                    placeholder="Enter note title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="modal-actions">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleSubmit}>Upload</button>
                </div>

            </div>

        </div>
    );
};

export default UploadNoteModal;