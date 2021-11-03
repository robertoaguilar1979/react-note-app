import React from "react";
import notes from "../assets/data";
import { Link } from "react-router-dom";

function ListItem({ note }) {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <li>{note.body}</li>
      </div>
    </Link>
  );
}

export default ListItem;
