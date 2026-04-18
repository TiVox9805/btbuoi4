import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addNote(text);
    setText("");
  };

  return (
    <div className="form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập ghi chú mới..."
      />
      <button onClick={handleAdd}>+ Thêm</button>
    </div>
  );
};

export default NoteForm;