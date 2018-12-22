import { configure } from "@storybook/react";

// Import font-awesome into storybook :)
import "../src/icons";

function loadStories() {
  require("../stories/Link.jsx");
  require("../stories/Button.jsx");
  require("../stories/ButtonSecondary.jsx");
  require("../stories/ItemCategory.jsx");
}

configure(loadStories, module);
