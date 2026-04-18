import { useState, useEffect } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [notes, setNotes] = useState(() => {
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      time: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <ThemeProvider>
      <div className="container">
        <Header count={notes.length} />
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </ThemeProvider>
  );
}

export default App;