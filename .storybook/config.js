import { configure } from "@storybook/react";

// Import font-awesome into storybook :)
import "../src/icons";
import "../src/index.css";

function loadStories() {
  require("../stories/Accordion.jsx");
  require("../stories/Button.jsx");
  require("../stories/ButtonSecondary.jsx");
  require("../stories/Checkbox.jsx");
  require("../stories/CheckboxGroup.jsx");
  require("../stories/ContentHelp.jsx");
  require("../stories/Input.jsx");
  require("../stories/InputWithInstructions.jsx");
  require("../stories/ItemCategory.jsx");
  require("../stories/Label.jsx");
  require("../stories/Link.jsx");
  require("../stories/RadioGroup.jsx");
  require("../stories/Table.jsx");
}

configure(loadStories, module);
