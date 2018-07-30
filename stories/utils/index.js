import { withInfo as withAddonInfo } from "@storybook/addon-info";
import { find } from "lodash";

const mdListFromArr = arr =>
  arr
    .map(
      thing => `
    - ${thing}
  `
    )
    .join(",")
    .replace(/,/g, " ");

export const componentShould = ({
  preText: ''
  doThis = [],
  notThis = [],
  guidelines = "",
  postText: ''
}) => `
  ${preText}

  #### Best Practices
  This component **should**: 
  ${mdListFromArr(doThis)}
  
  This component **should NOT**: 
  ${mdListFromArr(notThis)}

  #### Content Guidelines 
  ${guidelines}

  ${postText}
`;

export const withInfo = (options, component) => {
  const SRC = find(global.STORYBOOK_REACT_CLASSES, {
    name: component().type.name
  });

  return withAddonInfo(
    Object.assign(
      {},
      {
        text: SRC ? SRC.docgenInfo.description : "",
        inline: true,
        header: false
      },
      options
    )
  )(component);
};
