/* eslint-disable */
const promptDirectory = require('inquirer-directory');

module.exports = function(plop) {
  plop.setHelper('reactCase', txt =>
    txt
      .split(/ /g)
      .map(_t => _t.charAt(0).toUpperCase() + _t.slice(1))
      .join('')
      .trim(),
  );

  plop.setHelper('toLowerCase', txt =>
    txt
      .split(/ /g)
      .map(_t => _t.charAt(0).toUpperCase() + _t.slice(1))
      .join('')
      .trim()
      .toLowerCase(),
  );

  plop.setPrompt('directory', promptDirectory);

  // react component generator
  plop.setGenerator('component', {
    description: 'kf-uikit component scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
      {
        type: 'input',
        name: 'component_desc',
        message: 'Describe your component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{reactCase name}}/{{reactCase name}}.jsx',
        templateFile: '.plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{reactCase name}}/__tests__/{{reactCase name}}-test.jsx',
        templateFile: '.plop-templates/snapshot-test.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{reactCase name}}/{{reactCase name}}.story.jsx',
        templateFile: '.plop-templates/story.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{reactCase name}}/{{reactCase name}}.css',
        templateFile: '.plop-templates/component-styles.hbs',
      },
    ],
  });
};
