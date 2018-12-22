import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/Link.jsx");
}

configure(loadStories, module);
