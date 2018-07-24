import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './theme/defaultTheme';

const KFThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default KFThemeProvider;
