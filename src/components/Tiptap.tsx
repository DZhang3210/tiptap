"use client";

import { useEditor } from "@tiptap/react";
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

import { useState } from "react";
import ReadOnly from "./read-only";
import MainEditor from "./main-editor";
import { EnterKeyHandler } from "./EnterKeyHandler";
import { cn } from "@/lib/utils";

const limit = 280;

const Tiptap = () => {
  const [text, setText] = useState("");
  const [editable, setEditable] = useState(true);

  const handleSubmit = async () => {
    if (!editor) return "";
    const res = editor.getHTML();
    console.log(res);
    setText(res);
  };

  const editor = useEditor(
    {
      // editorProps: {
      //   attributes: {
      //     // class: "big",
      //   },
      // },
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
        //{ onSubmit: handleSubmit }
        EnterKeyHandler(),
      ],
      content: { text },
      onUpdate: ({}) => {
        const html = editor?.getHTML() as string;
        setText(html);
      },
      immediatelyRender: false,
      editable: editable,
    },
    []
  );
  if (!editor) {
    return <div>Unfortunate</div>;
  }

  return (
    <>
      <MainEditor editor={editor} />

      <button onClick={handleSubmit} className="bg-red-500">
        Submit
      </button>
      <button
        onClick={() => setEditable((prev: boolean) => !prev)}
        className={cn(editable ? "bg-green-500" : "bg-red-400")}
      >
        Edit Swap
      </button>
      <ReadOnly text={text} />
    </>
  );
};

export default Tiptap;
