const navigation = {
  navLink: css`
    display: block;
    color: ${colors.hover};
    padding: 6px 10px;
    margin: 0px 4px;
    text-decoration: none;
    border: solid 2px transparent;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      ${mixins.linkButtonActive};
    }
  `,
  navBar: css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 1.86;
    letter-spacing: 0.2px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.86;
    letter-spacing: 0.2px;
    text-align: left;
    color: #90278e;
  `,

  secondaryNav: css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.86;
    letter-spacing: 0.2px;
    border-left: 1px solid ${colors.greyScale5};

    li {
      box-sizing: content-box;
      border-right: 1px solid ${colors.greyScale5};
      a {
        display: block;
        font-size: 16px;
        line-height: 1.86;
        letter-spacing: 0.2px;
        text-align: left;
        color: ${colors.primary};
        font-weight: 500;
        padding: 10px 40px;
        border-bottom: 5px solid transparent;
        text-decoration: none;
      }

      a:hover,
      a.active {
        cursor: pointer;
        color: ${colors.highlight};
        font-weight: 500;
        border-bottom: 5px solid ${colors.highlight};
        text-decoration: none;
      }
    }
  `
};
export default navigation;
