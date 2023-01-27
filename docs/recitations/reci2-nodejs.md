---
title: Recitation 2 - Node.js
---

# Recitation 1: Node.js

## Overview
This recitation aims to highlight the basics of Node.js by walking students through the implementation of a basic To-Do app.

## Staff Overview
- Mehul Agarwal & Rohit Nanjangud Shreenivas
- Emails: mehula@andrew.cmu.edu & rshreeni@andrew.cmu.edu
- Office Hours: TBD

## Full-stack Development
Different levels of the stack:
- Backend
- Frontend
- Database
- Deployment
- Testing and more

## BACKEND DEVELOPMENT USING NODE.JS

## What is Node?

- Back-end JavaScript runtime environment, runs on the V8 JavaScript Engine
- Used for server-side scripting
- Has an event-driven architecture capable of asynchronous(non-blocking) I/O.
- Used to build fast, powerful and scalable web applications

## Asynchronous or Non-blocking I/O

Every request consists of:

<img width="1206" alt="Screenshot 2023-01-26 at 10 00 08 PM" src="https://user-images.githubusercontent.com/20667665/215030896-58afa4c0-0a8f-4aa8-a0f4-2c45c53653d1.png">

- Non-blocking I/O allows a thread to suspend a request while it’s performing I/O to go work on a different request
- Runs on a single-thread event loop, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections without incurring the cost of thread context switching
- Concurrency (in Node) refers to the Event Loop’s capacity to execute Javascript “callback” functions after completing other work

## Node js async options

- Callbacks: Functions passed to another functions
- Promises (and promise chains): Structured callbacks
- Generators: Functions which can be exited/paused and later re-entered
- Async/Await: Combining generators and promises

## Node Package Manager (npm)

Consists of:
- npm client - command line tool
- npm registry - an online database of public and paid-for private packages

The largest ecosystem of open-source libraries in the world

## Model View Controller (MVC)
<img width="733" alt="Screenshot 2023-01-27 at 1 10 08 AM" src="https://user-images.githubusercontent.com/20667665/215031124-a7e1afe5-2f36-40c3-95e3-cb0fcc8ecc6f.png">


## Model View Viewmodel (MVVM)
<img width="699" alt="Screenshot 2023-01-27 at 2 24 48 AM" src="https://user-images.githubusercontent.com/20667665/215031102-9fa20449-ccff-4d31-9c08-0296608485ad.png">


## A SIMPLE TO-DO APP USING NODE.JS

1. `mkdir` into your project folder (todo-app) and `cd` into it
2. `npm init`
3. `npm install express --save`
4. `npm install body-parser --save`
5. Write express code, as seen in the reference solution
6. `node index.js` (to start the server)
7. (optional) Play with the server, send it post requests



