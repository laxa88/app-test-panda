import { configure } from "@storybook/react";

// Import font-awesome into storybook :)
import "../src/icons";
import "../src/index.css";

function loadStories() {
  require("../stories/Button.jsx");
  require("../stories/ButtonSecondary.jsx");
  require("../stories/Checkbox.jsx");
  require("../stories/Input.jsx");
  require("../stories/ItemCategory.jsx");
  require("../stories/Link.jsx");
  require("../stories/RadioGroup.jsx");
}

configure(loadStories, module);
