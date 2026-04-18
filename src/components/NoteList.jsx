const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="list">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <div>
            <p>{note.text}</p>
            <small>{note.time}</small>
          </div>
          <button onClick={() => onDelete(note.id)}>Xóa</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;