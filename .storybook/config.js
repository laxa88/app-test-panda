import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/Link.jsx");
  require("../stories/Button.jsx");
}

configure(loadStories, module);
