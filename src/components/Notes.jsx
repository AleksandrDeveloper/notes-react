import React from "react";

export default function Notes({ notesArr }) {
  return (
    <ul className="list-group">
      {notesArr.map((item, index) => (
        <li
          className="list-group-item note"
          key={index + (Math.random() * 100).toFixed()}
        >
          <div>
            <strong className='notes-text'>{item}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>
          <button type="button" className="btn btn-danger">
            Delite
          </button>
        </li>
      ))}
    </ul>
  );
}
