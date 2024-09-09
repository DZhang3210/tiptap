"use client";

import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import CodeBlock from "@tiptap/extension-code-block";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import HardBreak from "@tiptap/extension-hard-break";
import CharacterCount from "@tiptap/extension-character-count";
import History from "@tiptap/extension-history";
import OrderedList from "@tiptap/extension-ordered-list";

import { Bold as BoldIcon, CodeIcon, Dice1, Dot } from "lucide-react";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import parse from "html-react-parser";
import { useState } from "react";

const limit = 280;
const Tiptap = () => {
  const [code, setCode] = useState("");
  const handleSubmit = () => {
    if (!editor) return "";
    const res = editor.getHTML();
    console.log(res);
    setCode(res);
  };
  const editor = useEditor(
    {
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        CodeBlock,
        Italic,
        Strike,
        BulletList,
        OrderedList,
        ListItem,
        History,
        HardBreak,
        CharacterCount.configure({
          limit,
        }),
      ],
      content: "<p>Hello World! 🌎️</p>",
      immediatelyRender: false,
      autofocus: true,
    },
    []
  );

  if (!editor) {
    return null;
  }

  const percentage = editor
    ? Math.round((100 / limit) * editor.storage.characterCount.characters())
    : 0;

  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="flex gap-2">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : ""}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "is-active" : ""}
            >
              Strike
            </button>
          </div>
        </BubbleMenu>
      )}
      <div className="w-full flex items-center justify-center pt-10">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "bg-gray-400" : ""}
          >
            <BoldIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "bg-gray-400" : ""}
          >
            <CodeIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "bg-gray-400" : ""}
          >
            <Dot />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <Dice1 />
          </button>
        </div>
      </div>
      <EditorContent editor={editor} className="border border-black" />
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
      <button onClick={handleSubmit} className="bg-red-500">
        Submit
      </button>
      {/* <div dangerouslySetInnerHTML={{ __html: code }} /> */}
      <div>{parse(code)}</div>
    </>
  );
};

export default Tiptap;
