---
title: Recitation 3 - React
---

# Recitation 3: React (Frontend)

## Concept: Frontend

- What the user sees + interacts with.
- “Client-side code”
- Probably know of HTML/CSS/JS. You can build vanilla frontends.
- We will learn React (https://reactjs.org)

## Staff Overview
- Mehul Agarwal & Rohit Nanjangud Shreenivas
- Emails: mehula@andrew.cmu.edu & rshreeni@andrew.cmu.edu
- Office Hours: TBD

## Visual
![image](https://user-images.githubusercontent.com/42957482/216521060-d797b392-e24c-4cb7-b9a6-bd0bb6582e4c.jpeg)

## Interruption: Styling and CSS
- We don’t have a dedicated recitation for styling, because there are so many many systems you can follow.
- Google is your friend.
- Course's personal pick: Flexbox
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
https://www.youtube.com/watch?v=JJSoEo8JSnc

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
- We’re gonna use Geist UI (more obscure, to get used to learning weird things)

Link to prototype: https://github.com/CMU-17-356/cmu-17-356.github.io/tree/main/resources/recitations/2021/Recitation%203/todo-app-rec3/todo-app-frontend
