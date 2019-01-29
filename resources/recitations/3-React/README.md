## Tutorials + Helpful Docs

- [React tutorial](https://reactjs.org/tutorial/tutorial.html) ~ We recommend
using the CodePen starter-link in order to go through this
- [Webpack tutorial](https://webpack.js.org/guides/getting-started/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [React Patterns](https://reactpatterns.com/)
- [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)

## Recitation 3: React

### ECMAScript

* Scripting-language specification for standardizing Javascript
* currently on 9th Edition - ECMAScript 2018, but ES.Next is being worked on
* [What do browsers currently support](https://kangax.github.io/compat-table/es6/)?

### Babel

Javascript compiler that allows for new features while remaining
backwards compatible. Babel

* transforms syntax
* contains Polyfill features that are missing in your target environment
* can perform source code transformations

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

### Webpack

* [A bundler for modules](https://webpack.js.org/guides/getting-started/)
* [Hot reload](https://webpack.js.org/concepts/hot-module-replacement/) of
modules for development
* Advanced [code-splitting](https://webpack.js.org/guides/code-splitting/)
  ```js
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
  +   another: './src/another-module.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
  ```
* There's even an [Webpack](https://github.com/webpack-contrib/webpack-bundle-analyzer) bundle analyzer!

### Thinking in React

React is...

* a JavaScript library – one of the most popular ones, with over 100,000 stars
on GitHub.
* not a framework (unlike Angular, which is more opinionated).
* an open-source project created by Facebook.
* used to build user interfaces (UI) on the front end.
* the view'ish layer of an MVC application (Model View Controller).

Heavily makes uses of a Virtual DOM:

![Virutal Dom Diff](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/3-React/images/vdom.png)

* All about components ~ `parent -> children`
* Rendering as a primitive!

[Tic-Tac-Toe Demo](https://codepen.io/zeeshanlakhani/pen/WPwPqj)

### Create-React-App

**This will make your life better!** ~ coalesces needed babel, webpack, etc...
starter code

```shell
host$ npx create-react-app my-app
```

Resulting directory:

```shell
README.md         build             node_modules      package-lock.json package.json      public            src
```

```js
// App.js

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

### Things to Consider

- [Progressive Web Applications](https://developers.google.com/web/progressive-web-apps/) and
[Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) with service
workers (web workers with no DOM access)
