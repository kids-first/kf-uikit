import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { propTypes } from 'prop-types';
import defaultTheme from './theme/defaultTheme';

export { H1, H2, H3, H4, H5, P, BlockQuote, UL, OL } from './components/Typography';

const KFThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

KFThemeProvider.propTypes = {
  theme: propTypes.shape,
  children: propTypes.shape,
};

KFThemeProvider.defaultProps = {
  theme: defaultTheme,
  children: {},
};

export default KFThemeProvider;
