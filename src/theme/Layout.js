const layout = {
  boxStyles: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  flexStyles: {
    row: {
      flexDirection: 'row'
    },
    column: {
      flexDirection: 'column'
    }
  },
  column: css`
    display: flex;
    flex-direction: column;
  `,
  row: css`
    display: flex;
    flex-direction: row;
  `,
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  fillCenter: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
};
export default layout;
