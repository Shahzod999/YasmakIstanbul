import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);

  const addNewNote = async () => {};

  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter title is required");
      return;
    }
    if (!content) {
      setError("Please enter content is required");
      return;
    }
    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div>
      <button onClick={onClose}>
        <MdClose />
      </button>

      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Tye your task"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Content</label>
        <textarea
          type="text"
          rows={10}
          placeholder="Content"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p>{error}</p>}
      <button onClick={handleAddNote}>Add</button>
    </div>
  );
};

export default AddEditNotes;
