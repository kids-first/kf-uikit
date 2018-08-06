const promptDirectory = require("inquirer-directory");

module.exports = function(plop) {
  plop.setHelper("reactCase", txt =>
    txt
      .split(/ /g)
      .map(_t => _t.charAt(0).toUpperCase() + _t.slice(1))
      .join("")
      .trim()
  );
  plop.setPrompt("directory", promptDirectory);

  // react component generator
  plop.setGenerator("controller", {
    description: "kf-uikit component scaffolding",
    prompts: [
      {
        type: "directory",
        name: "folder",
        message: "what type of component is this?",
        basePath: "./src/components"
      },
      {
        type: "input",
        name: "name",
        message: "component name please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{folder}}/{{reactCase name}}.js",
        templateFile: ".plop-templates/component.hbs"
      }
    ]
  });
};
