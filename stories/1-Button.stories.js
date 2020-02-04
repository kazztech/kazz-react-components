import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../src/atoms/Button";

export default {
  title: "Button",
  component: Button
};

export const Normal = () => (
  <Button clickHandler={action("clicked")}>Hello Button!</Button>
);
