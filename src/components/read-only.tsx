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
import { EditorContent, useEditor } from "@tiptap/react";

import React, { useEffect } from "react";

const ReadOnly = ({ text }: { text: string }) => {
  const readOnly = useEditor(
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
      ],
      content: { text },
      immediatelyRender: false,
      autofocus: true,
      editable: false,
    },
    []
  );

  useEffect(() => {
    if (readOnly && text !== readOnly.getHTML()) {
      readOnly.commands.setContent(text);
    }
  }, [text, readOnly]);

  return <EditorContent editor={readOnly} />;
};

export default ReadOnly;
