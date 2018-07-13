const links = {
  linkStyles: {
    primary: {
      color: colors.primary
    },
    bare: {
      textDecoration: 'jnone'
    }
  },
  externalLink: css`
    color: ${colors.primary};
    cursor: pointer;
    &:hover,
    &.active {
      color: ${colors.highlight};
    }
  `
};

export default links;
