# Recitation 3: React (+ Component Libs)

## Goal:

Build a basic frontend for our todo-app, and learn how to integrate it with express backend.

## Steps:

1. In root directory, create new folder called `todo-app-backend` (or something to that effect)
2. Move all existing backend files into that folder (now you should have path `/todo-app/todo-app-backend`)
3. Run `npx create-react-app todo-app-frontend` to create a new react project called "todo-app-frontend"
4. Navigate to the frontend folder and run `npm start` to make sure everything's working properly so far.
5. Open `todo-app-frontend` in your favorite code editor, and delete the body of html in `App.js`
6. Add an `<h1>` tag in the header labelling the name of the app
7. Copy the necessary flex css into the App.css (TA can help with this)
8. Delete the rest of the css (this is optional, we just don't like having excess useless code in our files)
9. Now we're gonna create an "Add Todo" button component (just as an exercise)
   1. Create a new folder called `components` in `frontend/src` (this isn't necessary, but its good for organization)
   2. Create a new file called `AddTodoButton.js`
      1. You could also create a folder called `AddTodoButton` containing the `.js` and `.css` together, but that's up to you. (It's probably makes your code more modular if you do this, actually). We won't be doing this in the recitation.
   3. Write the React boilerplate (you can use an extension to make this easier with a snippet) + the button itself
   4. Go back to `App.js`, and import the component file + add it to your app component.
10. Next, we're gonna learn to use a component library (so we don't have to meticulously handcraft or hand-css every single one of our components, and instead focus on building out the app as fast as possible).
    1. https://react.geist-ui.dev/en-us/guide/introduction
    2. React now uses yarn defaultly, so we're gonna do `yarn add @geist-ui/react`
    3. Follow the rest of the installation instructions (should be only 1 more step)
       1. This should involve wrapping your app component, so open up `index.js` and do that
11. Time to use Geist UI! Go to the previously written `AddTodoButton.js` and import the Geist button.
12. Replace the default html button with the Geist button. Try adding a property to it! (perhaps change the color to Success)
13. Replace the default `<h1>` with Geist's Text component (with property h1)

NOTE TO SEAN: Tasks remaining to do/write about:

- make new component called "TodoItem" (that we will render many of, one for each todo item)
  - This should probably be a card with some text, due date and a checkbox
- IF NO TIME: Just have them render one or two sample cards on the homepage.
- make new wrapper component called "TodoLists" for the two columns (left is incomplete, right is completed)
  - This component will take the fake data and render the two columns of TodoItem's appropriately
- Connect app to backend (ping the GET endpoint to grab the list of fake Todo's)