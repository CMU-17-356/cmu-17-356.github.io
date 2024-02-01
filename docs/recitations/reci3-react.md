---
title: Recitation 3 - React
---

# Recitation 3: React (Frontend)

## Staff Overview
- Nicholas Wernink & Alex Barrios
- Emails: [ngw@andrew.cmu.edu](mailto:ngw@andrew.cmu.edu) & [ambarrio@andrew.cmu.edu](mailto:ambarrio@andrew.cmu.edu)
- Office Hours: Wed 2:30 - 4pm (Nicholas), Thu 12pm - 1pm (Alex)


## Concept: Frontend
- What the user sees + interacts with.
- “Client-side code”
- Probably know of HTML/CSS/JS. You can build vanilla frontends.
- We will learn React (https://reactjs.org)

## Visual
![image](https://user-images.githubusercontent.com/42957482/216521060-d797b392-e24c-4cb7-b9a6-bd0bb6582e4c.jpeg)

## Interruption: Styling and CSS
- We don’t have a dedicated recitation for styling, because there are so many many systems you can follow.
- Google is your friend.


## Intro to ReactJS (or just React)
- Created 2011 (by Facebook)
- “Frontend JS Library” (technically not a framework, but its chill)
- Declarative, Component-Based
- Uses JSX syntax (HTML inside your JS)

<img width="380" alt="image" src="https://user-images.githubusercontent.com/42957482/216521984-aa33b996-bee6-4e51-b13f-f7ff8a06e6f3.png">

## React: Components + Props
- “React Only Updates What’s Necessary”
- Function vs Class components
<img width="940" alt="image" src="https://user-images.githubusercontent.com/42957482/216522175-cadae18a-54ca-437c-a3fc-8dbb1441b4fb.png">
- You can nest components (intuitive)
- STRICT Rule: “All React components must act like pure functions with respect to their props” (this does not apply to State)

## React: Components + State
- Component State = saved (and usually important) information about a component
- Changing state -> trigger a component reload
- Do not modify state directly (will not trigger reload). Use React’s state funcs.

## React: Data (States & Props) Flow
- Parent-Child relationships (think Tree)
- State is always local, but can flow downwards (to children) as props.
- Common Workaround: pass a state-modifying function as prop to child.
- Child can then call the passed function to indirectly modify parent state.

- Summary: State flows down (waterfall). Changes can sometimes flow back up.
- (We will learn about state management libraries later on)

## React: Design Process
How to think + code like a React dev:
- Break UI into component list/hierarchy (form the Tree)
- Build static version of UI first
- Compatible with data models, but no interactions
- Find simplest representation of UI state for each component
- Identify where state should live
- Add inverse data flow (changes go back up)

## Component Libraries/Frameworks
- SUPER USEFUL (and fun to explore)
- You no longer have to style everything by hand (b/c CSS bad).
- Find one that you enjoy and read the docs on how to use it!

Popular ones:
- MaterialUI (google)
- Bootstrap
- Ant Design (Ant Financial, Alibaba)
- Evergreen
- We’re gonna use Tailwind CSS


## React demo app
- Clone either the [MongoDB](https://github.com/CMU-17-356/example-mongo-app) or [Postgres](https://github.com/CMU-17-356/example-postgres-app) reference solution
- cd into server directory with `cd server`
- Run `npm install` in command line
- Run `npm start` in command line
- cd into client directory with `cd client` from root directory
- Run `npm install` in command line
- Run `npm start` in command line


