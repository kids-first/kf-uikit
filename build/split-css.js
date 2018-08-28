/* eslint-disable */
let fs = require('fs');
var lines = fs
  .readFileSync('./dist/styles.css', 'utf-8')
  .split('\n')
  .filter(Boolean);

let cssVars = lines.slice(0, lines.indexOf('/*vars:end */'));
let decls = lines.slice(lines.indexOf('/*vars:end */') + 1, lines.length);

fs.writeFileSync('./dist/styles/kf-uikit-theme.css', cssVars.join('\n'), 'utf-8');
fs.writeFileSync('./dist/styles/kf-uikit.css', decls.join('\n'), 'utf-8');
