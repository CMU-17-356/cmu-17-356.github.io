---
title: HW2 Sprint 0
---

# Homework 2: Sprint 0


<p style="text-align: center;">
50 points<br/>

Due on Gradescope Thursday, February 1, 2023 11:59pm<br/>

This homework is to be done and submitted as a team.<br/>
</p>

## Learning Goals

- Identify the key user stories that will constitute the Minimum Viable Product (MVP).
- Justify which features to include based on priority, and time available
- Understand and practice the basic building blocks for how to create and deploy
  a modern web app (related, in some fashion, to the MVC model)

## References

 - [Sprint 0](https://www.smallfootprint.com/insights/how-to-use-sprint-zero-to-prepare-an-agile-software-development-project)
 - [Startup Sprint](https://scrumdictionary.com/term/startup-sprint/)
 - [GitHub Documentation](https://docs.github.com/)
 - [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
 - [Dronuts Starter Kit](https://github.com/CMU-17-356/dronut-starter)
 - [Render docs](https://docs.render.com/)
 - [Docker overview](https://docs.docker.com/get-started/overview/)

## Homework Tasks

### Create Project Backlog

- Reconcile all individual user stories into a backlog of team user stories.
  For this project, we require you to work within the GitHub ecosystem.
  - Take advantage of the GitHub Projects kanban board.
  - Each item on the board should be a separate GitHub Issue. All GitHub Issues
    should be linked to a Pull Request and an assignee.
  - Explore [GitHub Documentation](https://docs.github.com/) for a great guide
    on these tools!
  - You should have the following columns categories (you can rename any of them
    as you see fit):
    - Backlog
    - Sprint To-Dos
    - In Progress
    - Done
- Estimate the amount of time your team will take to implement each user story,
  and justify your estimation.
- Write a document listing the user stories your team will include in the MVP
  and which your team will not. **Add a SHORT justification for each user story decision**.
  NOTE: you cannot select more than 40 hours worth of work in a single week, per team.

### Backend Framework

- Create a set of business objectives and criteria for deciding what type of
  framework you should use.
- Unless you have a preference (let us know), you'll be using [Express](https://expressjs.com)
  to develop your Node.js web application.
- Write a business-style email justifying the use of this framework to your
  investors and why Node.js is a good choice as a technology for building your web application.
  Language is important here. Your investors are not software developers and
  will not understand jargon and technobabble.

### Prepare to write the first line(s) of productive code.
- Choose a name for your team.
    - You will be working on your team repository for this project. First,
      collectively choose a team name.
      Your team name should be unique, pronounceable, short, and something you
      would be proud to shout in your team cheer on the streets of Pittsburgh in
      the presence of small, impressionable, multi-lingual children.
- Agree upon and configure development communication tools, e.g. Slack, etc...
- Agree upon and configure your project management infrastructure, including bug
  tracking, task management, etc... We suggest that you use GitHub Issues.
-	Create a repo for your team using [GitHub classroom](https://classroom.github.com/a/eG2wmAqU).
  NOTE: only one student should make the assignment repo, then add the rest
  of the team. DM us on Slack if you have issues.
- Write a simple *hello-world* app with a test (even if it’s fake) and follow
  the application instructions in README that will be cloned into your classroom
  repo.
- Setup your team's development infrastructure, including development
  environment, Continuous Integration (CI), code style (via linter), and
  deployment pipeline, as per the README. We suggest you use GitHub Actions for
  CI.
- Deploy your *hello-world* application for the world to see! We recommend
  [Render](https://render.com/) for this!

**Instructions for getting started can be found in the README.MD once you setup
your classroom repo. This includes creating/joining a GitHub team, creating a
repository, setting up GitHub Actions, Docker.**

### Cloud Deployment

For deployment on a cloud server instance, the instructors suggest using
[Render](https://docs.render.com/free) which allows free deployment for small
projects. You can see how to deploy Docker contains on Render
[here](https://docs.render.com/docker).

The following links will help with setting up the service.

- [How do I start with Node.js after I installed it?](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Dockerizing a Node.js web application](https://docs.docker.com/language/nodejs/containerize/)
- [Deploying on Render](https://docs.render.com/deploy-an-image)
    - **You will not need a credit card on Render for free web services**, but
      always make sure you are using the `Free` options.

### Do something fun (non-scholastic) with your team.

- Getting to know your colleagues in a friendly context can often lead to more
  effective collaboration; healthy teams often get lunch together, for example.
  To incentivize this, we will give your team 5% extra credit for this assignment
  if you meet as a team outside of a working session. You might want to eat
  together or go out for boba tea. If someone on your team is not feeling well,
  you may also do a virtual activity, such as an online gaming
  session (perhaps [drawasaurus](https://www.drawasaurus.org)) or social
  "zoom lunch."

## Deliverables

You will submit this assignment via [gradescope](https://www.gradescope.com/courses/704199/assignments/3982826), Homework 2.

Turn in one document that includes

- Your team's name.
- A link to your team’s product backlog (i.e., your GitHub Projects board).
- A short justification for which user stories you are including in your MVP.
- Your business-style email justifying the use of your framework and using Node.js
  to investors.
- A URL which is running your starter repository's *hello-world* application.

To earn your extra credit, email post a picture of your team outing or
screenshot of your virtual activity showing everyone who participated on [Slack](https://cmu-17-776-s24.slack.com/).

## Grading

This homework is worth 50 points. To receive full credit, you must have a
reasonable product backlog that includes estimates and a short (no more than a
few sentences) justifications for the user stories you choose for your MVP. You
should have a reasonable justification for which framework you choose, and you
should be ready to write your first line of real, productive code in the next
sprint.
