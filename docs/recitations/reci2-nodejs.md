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


## Model View Viewmodel (MVVM)


## A SIMPLE TO-DO APP USING NODE.JS

1. `mkdir` your project folder (todo-app) and `cd` into it
2. `npm init`
3. `npm install express --save`
4. `npm install body-parser --save`
5. Write express code, as seen in the reference solution
6. `node index.js` (to start the server)
7. (optional) Play with the server, send it post requests



