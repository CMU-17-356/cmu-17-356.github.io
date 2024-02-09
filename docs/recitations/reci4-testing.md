---
title: Recitation 4 - Typescript
---

# Recitation 4: Testing + Git Flow

## Staff Overview
- Nicholas Wernink & Alex Barrios
- Emails: [ngw@andrew.cmu.edu](mailto:ngw@andrew.cmu.edu) & [ambarrio@andrew.cmu.edu](mailto:ambarrio@andrew.cmu.edu)
- Office Hours: Wed 2:30 - 4pm (Nicholas), Thu 12pm - 1pm (Alex)

# Git Flow
## Git Operations
- Clone - Copies a repository from a remote source to your local machine
- Checkout - Switches between different branches 
- Add - Stages changes in the working directory 
- Commit - Records changes to the repository
- Push - Uploads local repository changes to a remote repository
- Pull - Fetches changes from a remote repository and merges them into the local branch
- Merge - Combines changes from different branches into the current branch


# Testing
## jest
- JavaScript testing framework developed by Facebook
- Great for testing both backend and frontend
- Built-in assertion libraries and mocking functionalities
- Easy to use!


## Backend
- Routes:
    - Test routes behave as expected
    - Response status
    - Response data
    - Works with database as expected (GET, PUT, POST, DELETE calls)

- Database:
    - Test database behaves as expected
    - Add data to database
    - Update data in database
    - Delete data in database

## Frontend
- Components
    - Test if components appear
    - Test if props are as expected
- Functionalities
    - Buttons and client interactions perform/update UI as expected

## Let's try it out!
- Clone either the [MongoDB](https://github.com/CMU-17-356/example-mongo-app) or [Postgres](https://github.com/CMU-17-356/example-postgres-app) reference solution
- cd into a directory with `cd client` or `server`
- Run `npm install --legacy-peer-deps` in command line
- Run `npm test` in command line

