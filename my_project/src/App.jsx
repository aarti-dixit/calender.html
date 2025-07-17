import React from "react";
import Card from "./component/card/card";

import { NotesData } from "./data/notes";
import "./App.css";

function App() {
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="app">
      <h1>This is my sticky notes</h1>
      <h2>Today's date: {date}</h2>
      <div className="notes-container">
        {NotesData.map((note) => (
          <Card
            key={note.id}
            heading={note.heading}
            description={note.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
