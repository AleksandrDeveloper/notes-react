import React from "react";

export default function Notes({ notesArr ,onRemove}) {
  return (
    <ul className="list-group">
      {notesArr.map((note, index) => (
        <li
          className="list-group-item note"
          key={note.id}
        >
           <div>
            <strong className='notes-text'>{note.title}</strong>
            <small>{note.date}</small>
          </div>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => onRemove(note.id)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}
