## Recitation 6: React and the Outside World

### Tutorials + Helpful Docs

- [How to fetch data in React](https://www.robinwieruch.de/react-fetching-data/)
- [Axios](Promise based HTTP client for the browser and node.js) ~ Promise based HTTP client for the browser and node.js
- [FAQ Ajax](https://reactjs.org/docs/faq-ajax.html)


### Example

```js
import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  ...
}

export default App;
```

### lifecycle Methods

![lifecycle diagram](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/6-React+World/images/lifecycle.jpg)

[simulate lifecycles](https://reactarmory.com/guides/lifecycle-simulators)

### Examples and Things to Remember

* [react+ajax](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/6-React+World/react-ajax-example)

* [react-data-fetching](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/6-React+World/react-data-fetching)

* [localStorage vs sessionStorage vs cookies](https://wpreset.com/localstorage-sessionstorage-cookies-detailed-comparison/)
  - [Session Storage and Local Storage in React](https://www.robinwieruch.de/local-storage-react/)
  - [Storing Tokens](https://auth0.com/docs/security/store-tokens)

* [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) ~ Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.
 - [Nice walkthrough](https://www.codecademy.com/articles/what-is-cors)
