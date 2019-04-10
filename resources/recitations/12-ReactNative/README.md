## React Native

* [Tutorial for Native Cli and Expo Cli](https://facebook.github.io/react-native/docs/getting-started)
* [Jest Testing](https://github.com/facebook/jest/tree/master/examples/react-native)
* [Testing React Native Apps](https://jestjs.io/docs/en/tutorial-react-native)
* [Redux and React Native](https://alligator.io/react/react-native-redux/)
* [Expo](https://docs.expo.io/versions/v32.0.0/bare/hello-world/)
* [React Native Guide](https://www.reactnative.guide/)
* [Animated](https://facebook.github.io/react-native/docs/animated.html)
* [Read the Performance Section](https://facebook.github.io/react-native/docs/performance)

### Storage
* [AsyncStorage](https://github.com/react-native-community/react-native-async-storage)
* [Realm](https://realm.io/docs/javascript/latest/)
* [Persisting Data in React Native](https://pusher.com/tutorials/persisting-data-react-native)
* [React Native Firebase](https://rnfirebase.io/)

### Demo Apps
* [Quirk](https://github.com/flaque/quirk)

[A Good Read](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c) on why Airbnb
jumped off the React Native bandwagon.

### How?

![RN-Arch](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/12-ReactNative/images/rn-arch.png)

**JavascriptCore**

The JavaScriptCore Framework provides the ability to evaluate JavaScript programs from within Swift, Objective-C, and C-based apps. You can use also use JavaScriptCore to
insert custom objects to the JavaScript environment.

**React Native Bridge**

React Native bridge is a C++/Java bridge which is responsible for communication between the native and Javascript thread. A custom protocol is used for message passing.

**4 threads**:

* UI Thread (native rendering)
* JS Thread (logic / batched updates)
* Native Modules Thread (platform APIs)
* Render Thread (only Android / OpenGL)

**Notes**

- In case of Android, React Native bundles the JavaScriptCore along with the application. This increases the app size. Hence the Hello World application of RN would take around
  3 to 4 megabytes for Android.
- In case of Chrome debugging mode, the JavaScript code runs within Chrome itself (instead of the JavaScriptCore on the device) and communicates with native code via WebSocket.

### Testing
```javascript
/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
import Intro from '../Intro';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

it('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});

// These serve as integration tests for the jest-react-native preset.
it('renders the ActivityIndicator component', () => {
  const ActivityIndicator = require('ActivityIndicator');
  const tree = renderer
    .create(<ActivityIndicator animating={true} size="small" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the Image component', done => {
  const Image = require('Image');
  Image.getSize('path.jpg', (width, height) => {
    const tree = renderer.create(<Image style={{height, width}} />).toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
});

it('renders the TextInput component', () => {
  const TextInput = require('TextInput');
  const tree = renderer
    .create(<TextInput autoCorrect={false} value="apple banana kiwi" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the ListView component', () => {
  const ListView = require('ListView');
  const Text = require('Text');
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  }).cloneWithRows(['apple', 'banana', 'kiwi']);
  const tree = renderer
    .create(
      <ListView
        dataSource={dataSource}
        renderRow={rowData => <Text>{rowData}</Text>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

### Platform-Specific Code

```javascript
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});
```

### Expo (& Expo-Cli) vs React Native

* Can't use custom native modules beyond React Native APIs and components
available in the Expo client application.

* Expo provides configuration and an SDK that handles the basics super well
(think *Rails* + *create-react-app*), including camera, maps, etc...

### Google Chrome Debugging

[React Native Debugging tips and tricks](https://codeburst.io/react-native-debugging-tips-and-tricks-9700012121bf)
