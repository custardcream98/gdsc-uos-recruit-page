import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle, theme } from "../src";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Story />
    </ThemeProvider>
  ),
];
