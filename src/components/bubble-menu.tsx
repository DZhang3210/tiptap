import React from "react";
import { BubbleMenu, Editor } from "@tiptap/react";

interface BBubbleMenuProps {
  editor: Editor;
}
const BbubbleMenu = ({ editor }: BBubbleMenuProps) => {
  if (!editor) {
    return <div>Hello</div>;
  }
  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <div className="flex gap-2 bg-red-100">
        <button
          onClick={() => editor!.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor!.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          Italic
        </button>
        <button
          onClick={() => editor!.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          Strike
        </button>
      </div>
    </BubbleMenu>
  );
};

export default BbubbleMenu;
