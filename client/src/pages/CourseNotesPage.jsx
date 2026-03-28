import ChatSidebar from "../components/CourseChat/ChatSidebar/ChatSidebar";
import NotesMain from "../components/CourseChat/NotesMain/NotesMain";

function CourseNotesPage() {
    return (
        <div className="course-chat-container">
            <ChatSidebar />
            <NotesMain />
        </div>
    );
}

export default CourseNotesPage;