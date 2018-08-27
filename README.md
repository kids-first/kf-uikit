Kids First UI Kit
=================

A design system and component library for Kids First projects.


Getting Started
---------------

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


Development
-----------

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
