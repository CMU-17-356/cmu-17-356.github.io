---
title: Recitation 4 - Typescript
---

# Recitation 4: Typescript (Frontend)

## Staff Overview
- Mehul Agarwal & Rohit Nanjangud Shreenivas
- Emails: mehula@andrew.cmu.edu & rshreeni@andrew.cmu.edu
- Office Hours: Mehul(3:30 PM to 4:30 PM on Wednesdays) Rohit(5 PM to 6 PM on Fridays)

## What and Why Typescript?
- TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript
- Provides an easy way to structure your objects and enforce type validation on them
- Provides great tooling in your IDEs which help catch bugs that potentially would have otherwise been caught in deployment
- 0 learning curve if you already know JS


## Install Typescript
- To install TS globally:
    - npm i -g typescript
    - tsc --version
- To create a react-typescript project:
  - npx create-react-app .  → plain react app
  - npx create-react-app <project-name> --template typescript

## tsconfig.json
- The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project.
- The tsconfig.json file specifies the root files and the compiler options required to compile the project.

<img width="380" alt="image" src="https://user-images.githubusercontent.com/20667665/218348278-48b6c10b-e00f-4604-9469-65f8b24b8f02.png">

## How to make your variables strongly typed

<img width="749" alt="image" src="https://user-images.githubusercontent.com/20667665/218348318-acae66d6-718b-4e4e-a66c-960dbc26ddf7.png">

- Not specifying a type/using the type "any" - NOT A GREAT PRACTICE!

<img width="619" alt="image" src="https://user-images.githubusercontent.com/20667665/218348348-90cd6e19-e604-49f7-a8de-2828ad59f425.png">

## Creating custom types

<img width="855" alt="image" src="https://user-images.githubusercontent.com/20667665/218348414-2b2df1ea-a69d-44af-b72c-31cefccf5ea1.png">

<img width="329" alt="image" src="https://user-images.githubusercontent.com/20667665/218348451-69a76fdd-6518-4ca2-8832-0a1b597e8283.png">

## Strong typing a function

<img width="596" alt="image" src="https://user-images.githubusercontent.com/20667665/218348484-77a95838-e1bc-446d-b649-d01e38415a62.png">

## Strong typing arrays/lists

<img width="563" alt="image" src="https://user-images.githubusercontent.com/20667665/218348509-13cf8e46-1c13-44d9-bb94-a485b45d85c2.png">

## Generics

<img width="464" alt="image" src="https://user-images.githubusercontent.com/20667665/218348534-49943ad9-3d13-44f7-9819-8f60d3369bb7.png">

## Experiment with TS
- Create a react typescript app
- Check the contents in the project
- Run the app
- Create new components
- Add props with types
