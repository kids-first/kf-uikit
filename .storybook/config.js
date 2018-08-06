import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import { checkA11y } from "@storybook/addon-a11y";
import theme from "../src/theme/defaultTheme";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeDecorator);
addDecorator(checkA11y);

const req = require.context("../stories", true, /index\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
