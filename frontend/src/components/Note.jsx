import React from "react";
import "../styles/Note.css";
const Note = ({note, onDelete}) => {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")
    return (  
        <div className="note-container">
            <div className="note-title">{note.title}</div>
            <div className="note-content">{note.content} </div>
            <div className="note-date">{formattedDate}</div>
            <button className="delete-button" onClick={()=> onDelete(note.id)}>Delete</button>
        </div>
    );
}
 
export default Note;