import { Editor, EditorContent } from "@tiptap/react";
import React from "react";
// import { editor } from "./editor";
import SelectMenu from "./select-menu";
import BbubbleMenu from "./bubble-menu";

interface MainEditorProps {
  editor: Editor;
}

const MainEditor = ({ editor }: MainEditorProps) => {
  return (
    <>
      <BbubbleMenu editor={editor} />
      <SelectMenu editor={editor} />
      <div className="border border-black mx-10 ">
        <EditorContent editor={editor} readOnly />
      </div>
    </>
  );
};

export default MainEditor;
