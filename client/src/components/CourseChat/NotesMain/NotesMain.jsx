import React, { useState } from "react";
import NotesHeader from "./NotesHeader";
import NotesGrid from "./NotesGrid";
import AddNoteButton from "./AddNoteButton";
import UploadNoteModal from "./UploadNoteModal";
import "./NotesMain.css";

const NotesMain = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: "DBMS Unit 1", date: "28 Mar 2026" },
        { id: 2, title: "Normalization Notes", date: "27 Mar 2026" },
    ]);

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="notes-main">

            <NotesHeader />

            <NotesGrid notes={notes} />

            <AddNoteButton onClick={() => setShowModal(true)} />

            {showModal && (
                <UploadNoteModal
                    onClose={() => setShowModal(false)}
                    onAdd={(newNote) => setNotes((prev) => [...prev, newNote])}
                />
            )}

        </div>
    );
};

export default NotesMain;