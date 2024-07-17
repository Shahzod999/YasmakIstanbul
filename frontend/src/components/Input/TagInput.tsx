import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagtoRemove) => {
    setTags(tags.filter((tag) => tag !== tagtoRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div>
          {tags.map((tag, index) => (
            <span key={index}>
              #{tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}>
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}
      <div>
        <input
          type="text"
          placeholder="add tags"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button onClick={() => addNewTag()}>
          <MdAdd />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
