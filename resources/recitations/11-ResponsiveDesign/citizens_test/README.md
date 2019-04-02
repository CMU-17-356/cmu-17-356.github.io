## Citizens Code test:

To start:

- First of all you need to clone the project: 
    - `git clone https://github.com/DaveMitten/citizens_test`
	
Then run: 

`npm init` 

To start the server run: 

`yarn start`

_If you find something is not functioning, please refer to the CRA guide below for assistance._

Most of the setup is done with the confines of the **CRA (create-react-app)**. My choice reflects the desire to have consistent and reliable updates within the react eco system and for test purposes allowed me to get up and running quickly without sacrificing stability.

My choice to do css-in-js within each component is to follow the react guidelines and not use classes. If you create classes it removes the possibility of having reusable components of course. I find keeping the css in the react files can help understanding when trying to read the components code and it can always be refactored into SASS if needed at a later date, so this would be good for the initial development cycle.

I didn't use layouts as before I have a first draft I wouldn't want to assume I knew what the project might need as reusable components. There is a few, for instance the banner, but these would be refactored into layouts that could take props. My main aim was to get a viable product, that was easy to read and maniuplate further once a review can be done.

I used a library for the breakpoints, this was a quick and easy way to produce solid results for a responsive layout. This then allowed me to focus on more important elements like design and implementation.

For a first iteration of the site it runs at demo level. It has a few interactions and a few base ideas to build on. Next stages would consist of a review of the product to check that we are goinG in the right direction and that we are still adhering to the brief. 


### Future changes:

- Refactor the footer so it uses a map to produce the items in each unordered list.
- Round the corners of the burger menu :hover cover so they fit into the border radium of the menu.
- Cut out the logo in Photo-shop and add that to the main banner title and the footer.
- Work on the large banners white button. It needs a more interactive or recognizable activation, be it sound, visual or similar.
- Refactor any reusable components into layouts.
- Use styled.components or similar methods to tidy the current CSS use.
- Create a dummy data file to enable fake api retrieval. I could use this for text or similar.
- Functional components that took props.















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
