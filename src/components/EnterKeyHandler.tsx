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
          // fetch("https://jsonplaceholder.typicode.com/todos/1")
          //   .then((response) => response.json())
          //   .then((json) => console.log(json));
          // console.log("THING", thing);
          // console.log("TEXT", thing);
          ref.current?.click();
          // You can place your custom logic here
          // Return `true` to prevent the default behavior, `false` to allow it
          return true;
        },
      };
    },
  });
