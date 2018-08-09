import React from 'react';
import { ThemeProvider, withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import defaultTheme from './theme/defaultTheme';

// Typography
export { H1, H2, H3, H4, H5, P, BlockQuote, UL, OL } from './components/Typography';

// Emotion
export const withKFTheme = withTheme;
export { styled, css } from './kfEmotion';
const KFThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default KFThemeProvider;

/* eslint-disable react/forbid-prop-types */
KFThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.element,
};

KFThemeProvider.defaultProps = {
  theme: defaultTheme,
  children: '<React.Fragment/ >',
};
