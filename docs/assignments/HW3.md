---
title: HW3 Sprint 1
---

# Homework 3: Sprint 1


<p style="text-align: center;">
100 points<br/>  

Due on Gradescope Thursday, February 16, 2023 11:59pm<br/>

This homework is to be done and submitted as a team.<br/>
</p>



## Learning Goals

- Develop data models for representing data and relationships.
- Use an iterative design process to develop rapid user interface prototypes.

## References

- [Design Methods E-Book](http://faculty.washington.edu/ajko/books/design-methods/)

## Homework Tasks

In this homework, you will work to conduct your first sprint with your team towards your MVP. The core goal in this assignment is to prototype the core elements of your product. Your task is to prepare a number of different forms of prototypes.


### Object Data Model


An Object Data Model (ODM) is a way of specifying the format of data your application will interact with.  There are [many different ways](https://www.lucidchart.com/pages/database-diagram/database-models) of developing an ODM; ranging from building object-oriented class structures to contain data (like you may have learned in 17-214), creating a database schema (like in SQL) or even as a formal UML diagram. Creating an ODM is crucial any time different components of an application are to interact (for example, a database and server-side application, or a MVC frontend and a server-side application).

In this assignment, we will be focused on creating a document-based object data model.  In Javascript, objects can be represented in a format called [JSON](https://www.digitalocean.com/community/tutorials/an-introduction-to-json).  For instance, a User might be represented as follows:

```
{
   "username" : "ricksanchez",
   "password" : "735ed12abec12bdcb42b",
   "full_name" : "Rick Sanchez",
   "followers" : [
      "msmith",
      "bperson",
      "kmichael",
      "mpbh"
   ]
}
```

While this is a good example of a user, it is not entirely explanatory of the datatypes and relationships expressed in the data.  Likewise, we might write out a document that looks something like this to help guide development:

```
{
   "username" : String,    // UNIQUE, URL-SAFE
   "password" : String,    // Salted, Hashed Password.
   "full_name" : String,
   "twitter_id" : ?String, // Optional, hence the question mark 
   "followers" : [String]  // Reference to other USER objects
}
```

Much like developing in an object-oriented fashion within a single language, developing an object model like this allows team members to coordinate development even across multiple projects (say, frontend and backend).  As such, your team should:

- As a group, decide on a list of relevant objects (Drones, Users, etc).
- For each of these objects, create an example object (like the first example above).  Note that you may need to have multiple example objects if an object can be in more than one state.
- For each of these objects, create a corresponding Object Data Model (as above).
- Put all of the above examples and objects into your repository wiki.

### Object Validation

In an ideal world, all actors (developers on your project, users of your API, etc) would respect your object data model.  However, this isn’t always going to be the case; developers can make mistakes, API users can mis-use your API, and hackers can attempt to abuse your object model for nefarious purposes.

To combat this, your application should programmatically validate objects, as defined in your ODM. The way you should implement this depends on your choice of backend framework (from HW2):

### Mongoose

Neither Express.JS nor Fastify.io include built-in functionality for defining data models. You should install [Mongoose.js](https://mongoosejs.com), a package for validating JSON objects for the mongodb database:

- Install and save the mongoose package to your project repository.
- Create Schema objects for all of the objects in your ODM.  Follow [this guide](http://mongoosejs.com/docs/guide.html#definition).
- Write some simple unit tests for your schema validation.  Follow Part 1 of [this guide](https://codeutopia.net/blog/2016/06/10/mongoose-models-and-unit-tests-the-definitive-guide/).
- If using Fastify.io, [this tool](https://github.com/jeka-kiselyov/fastify-mongoose-api) may help you define your APIs. 


### Paper Prototype

To help you synthesize all your team’s ideas into a single design, you will start by developing a series of paper prototypes.  Each individual team member is responsible for generating a total of 6 different paper prototype sketches. Each person should create 3 sketches of the UI for the customer page, and 3 sketches of the UI for the employees.  The UIs do not need to be “good”, but they should be all different from each other. After generating these sketches individually, your team should meet to synthesize your design into a single design that incorporates the best of all the designs.

To turn these in, each team member should scan or take a picture of their sketches, and then upload them to your GitHub wiki. You should turn in a link to the wiki page where your pictures live.

### Frontend Prototype

As a startup with limited funding, you should be focused on building a presentable prototype as quickly as possible. However, as you don’t want to do a lot of re-work, you decide to develop your prototype using an MVC framework, a tool which makes it very easy to create dynamic client-side applications.  To keep things simple, all groups will be using React.js as our MVC framework.  You can familiarize yourself with React.js using the following resources:

- [Intro to React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Tutorial](https://www.w3schools.com/REACT/default.asp)
- [React Fundamentals](https://reactnative.dev/docs/intro-react)


Using **React.js**, your team should develop a prototype:

- Develop a **view-only** prototype for the 1-3 largest user stories in your project.  What you do not accomplish in this sprint, you will need to accomplish later, so budget your time appropriately.  This should be a prototype, so while it should demonstrate how a user will interact with the system, it does not need to be "pixel perfect."  Because it is view only, you should be able to navigate across pages, but you do not need to implement any part of the back end (data processing, validation, generation) at this point.

- You will be deploying your application to be hosted on the cloud. Please ensure that your submission deploys correctly upon submission of your assignment.

*NOTE:* In recent iterations of React, there has been a shift from class-based components to functional components. Each of these has their own style of React development associated with it. The TAs in recitation will prioritize teaching functional components, and this is what we recommend using; however, the choice is ultimately yours. For more info about the differences between the two, see [Understanding Functional Components vs. Class Components in React](https://www.twilio.com/blog/react-choose-functional-components).


### Use of Typescript

In this class, we will be mandating the use of Typescript instead of Javascript for your Dronuts prototype. Typescript is a much stricter language that enforces types within your Javascript code. For this assignment, your frontend prototype and backend must be implemented using Typescript. You will be introduced to this in recitation, but here is a [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) that discusses Typescript further.


We expect your team to set up CI for your web apps. Please do not use Travis CI. We recommend the use of Github Actions as your CI service, however, other options such as Circle CI are acceptable. Here are some links to get you started:

- [Using Starter Workflows](https://docs.github.com/en/actions/using-workflows/using-starter-workflows)
- [How to build a CI/CD pipeline with GitHub Actions in four simple steps](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/)
- [Creating a CI/CD pipeline using Github Actions](https://medium.com/@michaelekpang/creating-a-ci-cd-pipeline-using-github-actions-b65bb248edfe)

### Releasing your work

Just before turning in your assignment, one person on your team should create a [GitHub Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). 

## Deliverables



The deliverables for this assignment are

1. A link to your team's Object Data Model in the group's repository wiki
2. A link to the paper prototype page of your team's repo. Each team member should upload their paper prototypes there. They can be organized on different pages, but they should all link from a single page.
3. A link to the web page for your released deliverables. This release should contain
    1. An implementation of the Object Data Model in either Fastify.io or Express.js, committed to your team's repository. 
    2. A Typescript-based frontend prototype implemented in React.js, committed to your team's repository.

## Additional Criteria

We will be strictly enforcing and grading your team’s process; i.e., we want to see all PRs, close issues, and issues tied to cards on your Github Kanban board with individuals assigned to each. Failure to adhere to these practices will result in deductions.
