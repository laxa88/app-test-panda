import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/Link.jsx");
  require("../stories/Button.jsx");
  require("../stories/ButtonSecondary.jsx");
}

configure(loadStories, module);
