import React from "react";

const NoteCard = ({ note }) => {
    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p>{note.date}</p>
        </div>
    );
};

export default NoteCard;