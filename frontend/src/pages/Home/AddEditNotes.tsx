import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance.";

const AddEditNotes = ({ noteData, type, onClose, getAllNotes, showToastMessage }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);

  const [error, setError] = useState<string | null>(null);

  //Add Note
  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note added successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
  //Edit Note
  const editNote = async () => {
    const noteId = noteData._id;

    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note updated successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

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
    <div className="modal_addEditNotes">
      <button onClick={onClose} className="modal_addEditNotes_close">
        <MdClose />
      </button>

      <div className="modal_addEditNotes_title">
        <label htmlFor="">Title</label>
        <input type="text" placeholder="Tye your task" value={title} onChange={({ target }) => setTitle(target.value)} />
      </div>

      <div className="modal_addEditNotes_content">
        <label htmlFor="">Content</label>
        <textarea type="text" rows={10} placeholder="Content" value={content} onChange={({ target }) => setContent(target.value)} />
      </div>

      <div className="modal_addEditNotes_tags">
        <label htmlFor="">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p>{error}</p>}
      <button onClick={handleAddNote} className="modal_addEditNotes_add">
        {type === "edit" ? "UPDATE" : "Add"}
      </button>
    </div>
  );
};

export default AddEditNotes;
