---
title: Recitation 5 - Fullstack MERN app
---

# Recitation 5: Fullstack MERN app

## Staff Overview
- Mehul Agarwal & Rohit Nanjangud Shreenivas
- Emails: mehula@andrew.cmu.edu & rshreeni@andrew.cmu.edu
- Office Hours: Mehul(3:30 PM to 4:30 PM on Wednesdays) Rohit(5 PM to 6 PM on Fridays)

## Fullstack MERN app

- git clone from: https://github.com/machadop1407/MERN-Beginners
- ``server`` -- backend express app; runs on port 3001
- ``client`` -- frontend react app; runs on port 3000

## To run the backend server

- The app uses mongodb and this needs to be configured
- We've used mongoose library for ODM and interacting with the db
- On line 14, ``mongoose.connect(<mongodb-atlas-url>);`` you need to replace the url with your mongodb url
- To setup a cloud mongodb, go to ``https://www.mongodb.com/atlas/database``, setup a free tier db and get the connection link
- Your URL should look something similar to this: ``mongodb://<username>:<password>@mers-fs-app.xg3etjm.mongodb.net/<dbname>?retryWrites=true&w=majority;``
- Once you set this up, you can use ``node index.js`` from the ``server`` directory to bring up the backend server

## To run the frontend server

- ``cd client``
- Delete the ``package-lock.json``
- ``npm install`` to install the required dependencies
- ``NODE_OPTIONS=--openssl-legacy-provider npm start `` to bring up the frontend server. The extra flag is to avoid some legacy dependency issue

## Reference

- https://www.youtube.com/@PedroTechnologies