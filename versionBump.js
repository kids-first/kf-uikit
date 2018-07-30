const replace = require("replace-in-file");
const pjVersion = require("./package.json").version;
const fs = require("fs");

const options = [
  {
    files: "storybook-config.json",
    from: "]",
    to: ',"' + pjVersion + '"]'
  },
  {
    files: "_redirects",
    from: /[0-9].*/,
    to: pjVersion
  }
];

options.map(_opt => {
  try {
    const changes = replace.sync(_opt);
    console.log("Modified files:", changes.join(", "));
    fs
      .createReadStream("./" + _opt.files)
      .pipe(fs.createWriteStream("./dist/" + _opt.files));
  } catch (error) {
    console.error("Error occurred:", error);
  }
});
