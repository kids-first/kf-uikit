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
  column: `
    display: flex;
    flex-direction: column;
  `,
  row: `
    display: flex;
    flex-direction: row;
  `,
  center: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  fillCenter: `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
};
export default layout;
