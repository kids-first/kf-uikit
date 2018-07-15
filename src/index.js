import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './theme/defaultTheme';
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  BlockQuote,
  UL,
  OL
} from './components/Typography';

const KFThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default KFThemeProvider;
