# Recitation 3: React (+ Component Libs)

## Goal:

Build a basic frontend for our todo-app, and learn how to integrate it with express backend.

For full tutorial on integrating React frontend with Node backend, click [here](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/).

## FAQ:

- How to start webapp?
  - `npm start` in backend folder, then in a new terminal window, `npm start` in frontend folder
- My data rendered differently
  - Perhaps you didn't download the most recent todo list data? If not, its on slack.

## First Steps:

(optional) Prep: Download the starter code from last recitation

(semi-optional) Prep 2: Download updated todolist data from slack (TA will send). There are some fields that have been modified because the randomly generated values didn't have a great distribution.

1. In root directory, create new folder called `todo-app-backend` (or something to that effect)
2. Move all existing backend files into that folder (now you should have path `/todo-app/todo-app-backend`)
3. EDIT: Change express port number to 3001 (because React defaults to 3000)
4. Run `npx create-react-app todo-app-frontend` to create a new react project called "todo-app-frontend"
5. Navigate to the frontend folder and run `npm start` to make sure everything's working properly so far.
6. Open `todo-app-frontend` in your favorite code editor, and delete the body of html in `App.js`
7. Add an `<h1>` tag in the header labelling the name of the app
8. Copy the necessary flex css into the App.css (TA can help with this)
9. Delete the rest of the css (this is optional, we just don't like having excess useless code in our files)
10. Now we're gonna create an "Add Todo" button component (just as an exercise)
   1. Create a new folder called `components` in `frontend/src` (this isn't necessary, but its good for organization)
   2. Create a new file called `AddTodoButton.js`
      1. You could also create a folder called `AddTodoButton` containing the `.js` and `.css` together, but that's up to you. (It's probably makes your code more modular if you do this, actually). We won't be doing this in the recitation.
   3. Write the React boilerplate (you can use an extension to make this easier with a snippet) + the button itself
   4. Go back to `App.js`, and import the component file + add it to your app component.
11. Next, we're gonna learn to use a component library (so we don't have to meticulously handcraft or hand-css every single one of our components, and instead focus on building out the app as fast as possible).
    1. https://react.geist-ui.dev/en-us/guide/introduction
    2. React now uses yarn defaultly, so we're gonna do `yarn add @geist-ui/react`
    3. Follow the rest of the installation instructions (should be only 1 more step)
       1. This should involve wrapping your app component, so open up `index.js` and do that
12. Time to use Geist UI! Go to the previously written `AddTodoButton.js` and import the Geist button.
13. Replace the default html button with the Geist button. Try adding a property to it! (perhaps change the color to Success)
14. In App.js, replace the default `<h1>` with Geist's Text component (with property h1)

Thats the bare basics covered: Create react app, understanding react project structure, creating and using components, styling, and component libraries.

## Continuing (as we did in Recitation)

If we were to write the full remaining instructions in a step-by-step manner, this doc would turn into a 10 page MLA-cited paper. (jokes)

Instead, we ask that you refer to the published recitation code to aid yourself in following the general workflow outline below.

- Create `DisplayToggle` component, responsible for toggling the "Show Completed" state
  - Pay attention to the props! What does the `DisplayToggle` component take in? (Hint: its interacts with `App.js` state)
- Put the `DisplayToggle` component into `App.js` so it renders. At this point, you may style it however you like. The recitation code provides a basic way to style using flex.
- Create `TodoItem` component (refer to recitation code). Again, try to understand the props passed to it.
- Create the necessary pieces of state in `App.js` (should be 2 pieces).
- Map the `todoList` state to a Grid of `TodoItem` components. Be sure to check for the `completed` status!
- Write the fetch function that, when called, will populate the `todoList` piece of state
- In `useEffect` (which you will have to import), call the fetch function.
  - As the second parameter to `useEffect`, pass an empty list. This means that `useEffect` will have no dependencies and thus won't rerun when state (or anything else) changes