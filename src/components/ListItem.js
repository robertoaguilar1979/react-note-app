import React from "react";
import notes from "../assets/data";

function ListItem({ note }) {
  return (
    <div className="notes-list-item">
      <li>{note.body}</li>
    </div>
  );
}

export default ListItem;
