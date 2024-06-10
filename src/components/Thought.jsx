import { useEffect, useState } from "react";

export default function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => removeThought(thought.id);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeThought(thought.id);
    }, thought.expiresAt - Date.now());

    return () => clearTimeout(timeoutId);
  }, [thought, removeThought]);

  const [className, setClassName] = useState("");

  useEffect(() => {
    const timeoutAnim = setTimeout(() => {
      setClassName("forget");
    }, thought.expiresAt - Date.now() - 2000);

    return () => clearTimeout(timeoutAnim);
  });

  return (
    <li className={`Thought ${className}`}>
      <div className="text">{thought.text}</div>
      <button
        aria-label="Rempve thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
    </li>
  );
}
