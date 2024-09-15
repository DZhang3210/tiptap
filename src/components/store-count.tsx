import React from "react";
import { editor } from "./editor";

const limit = 280;

const StoreCount = () => {
  const percentage = editor
    ? Math.round((100 / limit) * editor.storage.characterCount.characters())
    : 0;

  if (!editor) {
    return <div>Welp</div>;
  }
  return (
    <div
      className={`character-count ${
        editor.storage.characterCount.characters() === limit
          ? "character-count--warning"
          : ""
      }`}
    >
      <svg height="20" width="20" viewBox="0 0 20 20">
        <circle r="10" cx="10" cy="10" fill="#e9ecef" />
        <circle
          r="5"
          cx="10"
          cy="10"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="10"
          strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
          transform="rotate(-90) translate(-20)"
        />
        <circle r="6" cx="10" cy="10" fill="white" />
      </svg>
      {editor.storage.characterCount.characters()} / {limit} characters
      <br />
      {editor.storage.characterCount.words()} words
    </div>
  );
};

export default StoreCount;
