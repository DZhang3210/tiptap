import { BoldIcon, CodeIcon, Dice1, Dot } from "lucide-react";
import React from "react";
import { EmojiPopover } from "./emoji-provider";
import { MdEmojiEmotions } from "react-icons/md";
import { Editor } from "@tiptap/react";
interface SelectMenuProps {
  editor: Editor;
}

const SelectMenu = ({ editor }: SelectMenuProps) => {
  const onEmojiSelect = (emoji: any) => {
    if (!editor) return;
    editor.chain().focus().insertContent(emoji.native).run();
  };

  if (!editor) {
    return <div>Oops</div>;
  }

  return (
    <div className="w-full flex items-center justify-center pt-10">
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => editor!.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-gray-400" : ""}
        >
          <BoldIcon />
        </button>
        <button
          onClick={() => editor!.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "bg-gray-400" : ""}
        >
          <CodeIcon />
        </button>
        <button
          onClick={() => editor!.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-gray-400" : ""}
        >
          <Dot />
        </button>
        <button
          onClick={() => editor!.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <Dice1 />
        </button>
        <EmojiPopover onEmojiSelect={onEmojiSelect}>
          <div>
            <MdEmojiEmotions />
          </div>
        </EmojiPopover>
      </div>
    </div>
  );
};

export default SelectMenu;
