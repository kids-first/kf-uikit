const links = {
  linkStyles: {
    primary: {
      color: colors.primary
    },
    bare: {
      textDecoration: 'jnone'
    }
  },
  internalLink: `
    color: #a42c90;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      color: ${colors.hover};
    }
  `,
  externalLink: `
    color: ${colors.primary};
    cursor: pointer;
    &:hover,
    &.active {
      color: ${colors.highlight};
    }
  `
};

export default links;
