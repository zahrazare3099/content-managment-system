"use client";
import * as Icon from "../Editor/index";
import * as TipTap from "../Editor/index";
import { Button } from "../button/Button";
import CustomLink from "../Link/CustomLink";
import { useEffect } from "react";

export const EditorComponent = ({ content }) => {
  const editor = TipTap.useEditor({
    extensions: [
      TipTap.StarterKit,
      TipTap.Underline,
      TipTap.Heading.configure({
        levels: [1, 2, 3],
      }),
      // Link,
      CustomLink,
      TipTap.BulletList.configure({
        HTMLAttributes: {
          style: "direction: rtl;",
        },
      }),
      TipTap.OrderedList.configure({
        HTMLAttributes: {
          style: "direction: rtl;",
        },
      }),
      TipTap.TextAlign.configure({
        types: [
          "heading",
          "paragraph",
          "link",
          "span",
          "bulletList",
          "orderedList",
        ], //, "listItem"
      }),
      TipTap.Strike.configure({
        HTMLAttributes: {
          class: "strike", // Custom class for strikethrough
        },
      }),
    ],
    content,
  });
  // Function to handle heading selection
  const handleHeadingChange = (level) => {
    // event
    // const level = parseInt(event.target.value);
    if (level) {
      editor.chain().focus().toggleHeading({ level }).run();
    }
  };
  // Function to handle setting the link
  const setLink = () => {
    const url = prompt("Enter the URL"); // Prompt user for URL
    if (url) {
      editor.chain().focus().setLink({ href: url }).run(); // Set the link on selected text
    }
  };
  // Function to toggle strikethrough
  const toggleStrikethrough = () => {
    if (editor) {
      editor.chain().focus().toggleStrike().run();
    } else return null;
  };
  // Function to detect if text is Persian
  const isPersian = (text) => {
    const persianRegex = /[\u0600-\u06FF]/; // Persian Unicode range
    return persianRegex.test(text);
  };
  // Function to update direction based on content
  const updateDirection = () => {
    if (editor) {
      const text = editor.getText(); // Get current plain text content
      const isTextPersian = isPersian(text); // Determine if text is Persian

      // Set direction for the editor container
      const direction = isTextPersian ? "rtl" : "ltr";
      document.querySelector(".ProseMirror").setAttribute("dir", direction);

      // Update list styles based on detected language
      const lists = document.querySelectorAll("ol, ul");
      lists.forEach((list) => {
        list.style.direction = direction; // Set direction for each list
        list.style.textAlign = isTextPersian ? "right" : "left"; // Align text accordingly
      });
    }
  };
  useEffect(() => {
    // Update direction when content changes
    const handleUpdate = () => {
      updateDirection();
    };
    if (editor) {
      editor.on("update", handleUpdate); // Listen for updates in the editor
    }
    return () => {
      if (editor) {
        editor.off("update", handleUpdate); // Clean up listener on unmount
      }
    };
  }, [editor, updateDirection]);

  return (
    <div className="parentEditor w-full flex flex-col bg-slate-300 rounded-lg">
      <div className="buttons border border-slate-300 flex flex-wrap items-center gap-1 m-2 p-1 bg-slate-50 rounded-xl shadow-md">
        {/* Bold */}
        <Button
          type="editor"
          name={<Icon.FormatBold fontSize="small" />}
          clickButtonHandler={() => editor.chain().focus().toggleBold().run()}
        />
        {/* Italic */}
        <Button
          type="editor"
          name={<Icon.FormatItalic fontSize="small" />}
          clickButtonHandler={() => editor.chain().focus().toggleItalic().run()}
        />
        {/* underline */}
        <Button
          type="editor"
          name={<Icon.FormatUnderlined fontSize="small" />}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          clickButtonHandler={() =>
            editor.chain().focus().toggleUnderline().run()
          }
        />
        {/* heading H1 */}
        <Button
          name={
            <Icon.Icon fontSize="small">
              H<span className="text-xs font-sans">1</span>
            </Icon.Icon>
          }
          type="editor"
          clickButtonHandler={() => handleHeadingChange(1)}
        />
        {/* heading H2 */}
        <Button
          name={
            <Icon.Icon fontSize="small">
              H<span className="text-xs font-sans">2</span>
            </Icon.Icon>
          }
          type="editor"
          clickButtonHandler={() => handleHeadingChange(2)}
        />
        {/* heading H3 */}
        <Button
          name={
            <Icon.Icon fontSize="small">
              H<span className="text-xs font-sans">3</span>
            </Icon.Icon>
          }
          type="editor"
          clickButtonHandler={() => handleHeadingChange(3)}
        />
        {/* p tag */}
        <Button
          type="editor"
          name={<Icon.Icon fontSize="small">p</Icon.Icon>}
          clickButtonHandler={() => editor.chain().focus().setParagraph().run()}
        />
        {/* Strike */}
        <Button
          type="editor"
          name={<Icon.StrikethroughS fontSize="small" />}
          clickButtonHandler={toggleStrikethrough}
        />
        {/* Unordered List */}
        <Button
          name={<Icon.FormatListBulleted fontSize="small" />}
          type="editor"
          clickButtonHandler={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        />
        {/* Ordered List */}
        <Button
          name={<Icon.FormatListNumbered fontSize="small" />}
          type="editor"
          clickButtonHandler={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        />
        {/* Alignment Buttons */}
        <Button
          name={<Icon.FormatAlignLeft fontSize="small" />}
          type="editor"
          clickButtonHandler={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
        />
        <Button
          name={<Icon.FormatAlignCenter fontSize="small" />}
          type="editor"
          clickButtonHandler={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
        />
        <Button
          name={<Icon.FormatAlignRight fontSize="small" />}
          type="editor"
          clickButtonHandler={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
        />
        {/* Link */}
        <Button
          name={<Icon.LinkIcon fontSize="small" />}
          type="editor"
          clickButtonHandler={setLink}
        />
      </div>
      <TipTap.EditorContent editor={editor} className="tiptap" />
    </div>
  );
};

{
  /* <div className="flex justify-center items-center px-2">
  <select
    onChange={handleHeadingChange}
    defaultValue=""
    className="text-xs py-1 px-2 my-0 rounded-xl border border-slate-400"
  >
    <option value="" disabled>
      Select Heading
    </option>
    <option value="1">H1</option>
    <option value="2">H2</option>
    <option value="3">H3</option>
  </select>
</div>; */
}
