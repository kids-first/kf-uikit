const toasts = {
  success: css`
    font-family: ${fonts.details};
    font-size: 13px;
    font-weight: 600;
    line-height: 1.85;
    text-align: left;

    color: ${colors.greyScale1};
    border-radius: 5px;
    background-color: #d9eaed;
    box-shadow: 0 0 5.8px 0.2px #9b9b9d;
    border: solid 2px ${colors.tertiary};
    width: 469px;

    a {
      color: ${colors.primary};
      text-decoration: underline;
    }
    a:hover {
      color: ${colors.hover};
      text-decoration: underline;
    }
  `
};

export default toasts;
