import React from "react";

const AddNoteButton = ({ onClick }) => {
    return (
        <button className="add-note-btn" onClick={onClick}>
            +
        </button>
    );
};

export default AddNoteButton;