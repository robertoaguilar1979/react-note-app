import React from "react";
import notes from "../assets/data";

function ListItem() {
  return (
    <div className="notes-list-item">
      {notes.map((note) => (
        <li>{note.body}</li>
      ))}
    </div>
  );
}

export default ListItem;
