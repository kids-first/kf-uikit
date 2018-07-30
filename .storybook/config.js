import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import theme from "../src/theme/defaultTheme";
import { withInfo } from "@storybook/addon-info";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

// const enhanced = withInfo()(ThemeDecorator);
// addDecorator((story, context) =>
//   withInfo({
//     header: false,
//     inline: true
//   })(story)(context)
// );
addDecorator(ThemeDecorator);

const req = require.context("../stories", true, /\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
