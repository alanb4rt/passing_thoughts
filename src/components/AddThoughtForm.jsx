import { useState } from "react";
import { generateId, getNewExpirationTime } from "../utils/Utilities";

export default function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = ({ target }) => setText(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "") {
      setText("");
      return alert("Empty Thought");
    }

    const newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };

    props.addThought(newThought);
    setText("");
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
