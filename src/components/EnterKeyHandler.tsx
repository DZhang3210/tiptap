import { Extension } from "@tiptap/core";
import { Editor } from "@tiptap/react";
import { Dispatch, RefObject, SetStateAction } from "react";

// Create a custom extension to handle the Enter key
interface EnterKeyHandlerProps {
  //   onSubmit: () => void;
  editor: Editor;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export const EnterKeyHandler = ({
  ref,
}: {
  ref: RefObject<HTMLButtonElement>;
}) =>
  Extension.create({
    name: "enterKeyHandler",

    addKeyboardShortcuts() {
      return {
        Enter: () => {
          ref.current?.click();

          return true;
        },
      };
    },
  });
