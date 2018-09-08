<p align="center">
  <img src="assets/kf_uikit.png" alt="UIKit">
</p>
<p align="center">
  <a herf="https://github.com/kids-first/kf-uikit/blob/master/LICENSE"><img src="https://img.shields.io/github/license/kids-first/kf-uikit.svg?style=for-the-badge"></a>
  <a href="https://kf-uikit.netlify.com"><img src="https://img.shields.io/badge/storybook-master-ff69b4.svg?style=for-the-badge"></a>
  <a href="https://circleci.com/gh/kids-first/kf-uikit/tree/master"><img src="https://img.shields.io/circleci/project/github/kids-first/kf-uikit/master.svg?style=for-the-badge"></a>
</p>

# Kids First UI Kit

A design system and component library for Kids First projects.

## Getting Started

### Create React App

Get started with the UIKit in a new react application in just a couple steps:

```
create-react-app my-app
cd my-app
yarn add https://kf-uikit.kids-first.io/1.0.0/kf-uikit/kf-uikit.tar.gz


// src/App.js

import React, { Component } from 'react';
import logo from './logo.svg';
import 'kf-uikit/dist/styles.css';
import { Button } from 'kf-uikit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color='primary'>Hello</Button>
      </div>
    );
  }
}

export default App;
```

### CSS Only

Include the stylesheet in your head to get started started styling any webpage.

```
<link href="https://kf-uikit.kids-first.io/1.0.0/main.css" rel="stylesheet">
```

## Development

Use the storybook for development of new components and styles:

```
yarn storybook
// -> open localhost:9001 in the browser
```

### Adding new components

New components should have a layout as seen below:

```
src/
└── components
    ├── Button
    │   ├── __tests__/
    │   ├── Button.jsx
    │   ├── Button.story.jsx
    │   └── Button.css
    └── index.js
```

#### Using Tailwind `@apply` helper

When composing utility classes to bulid a component the following order should be followed when declaring properites

- layout/box styles
  - position (z-index)
  - display
  - dimension (width, height)
  - margin/padding
  - background styles
  - border styles
- typography styles
  - font family
  - font-size
  - font style (italic, bold, etc)
  - font color
  - font alignment
- pseudo selectors
- child selectors

example:

```
 @apply
  block
  w-1/2
  h-3
  m-3
  p-4
  bg-primary
  border-grey
  border-2
  rounded
  font-heading
  text-2xl;
```
