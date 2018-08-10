<p align="center">
  <img src="assets/kf_uikit.png" alt="UIKit">
</p>
<p align="center">
  <a herf="https://github.com/kids-first/kf-uikit/blob/master/LICENSE"><img src="https://img.shields.io/github/license/kids-first/kf-uikit.svg?style=for-the-badge"></a>
  <a href="https://kf-uikit.netlify.com"><img src="https://img.shields.io/badge/storybook-master-ff69b4.svg?style=for-the-badge"></a>
  <a href="https://circleci.com/gh/kids-first/kf-uikit/tree/master"><img src="https://img.shields.io/circleci/project/kids-first/kf-uikit.svg?style=for-the-badge"></a>
</p>

Kids First UIKit
================

The UIKit implements the Kids First Design System which dictates all visual
styles of the Kids First project.
Sub projects within Kids First should utilize the UIKit so that all assets
maintain consistent appearence.

## Setting up in a new project

To get started with a new application using the UIKit in a new React app:

```
yarn create react-app my-app
cd my-app
yarn add git://github.com:kids-first/kf-uikit.git#master
```

## Component Layout

Components should be placed within their own directory and have a story file
adjacent to them like the structure below:

```
src/components/Typography
├── Headings
│   ├── Headings.jsx
│   ├── Headings.story.jsx
│   └── index.js
```
