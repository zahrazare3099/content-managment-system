import Link from "@tiptap/extension-link";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { getAttributes } from "@tiptap/core";

const CustomLink = Link.extend({
  addProseMirrorPlugins() {
    const parentPlugins = this.parent?.() || [];

    const clickHandler = new Plugin({
      key: new PluginKey("customLinkClickHandler"),
      props: {
        handleClick(view, pos, event) {
          const attrs = getAttributes(view.state, "link");
          const link = event.target.closest("a");

          // Check if the clicked element is a link
          if (link && attrs.href) {
            event.preventDefault(); // Prevent default link behavior
            const href = attrs.href;

            // Replace the current selection with the link text
            view.dispatch(
              view.state.tr
                .setSelection(view.state.selection)
                .setMeta("addToHistory", false)
                .setNodeMarkup(pos, null, { href })
            );

            // Optionally, you can open the link in a new tab or do something else
            window.open(href, "_blank"); // Open in a new tab (optional)
            return true; // Indicate that the event was handled
          }

          return false; // Allow other click handlers to run
        },
      },
    });

    return [...parentPlugins, clickHandler];
  },
});

export default CustomLink;
