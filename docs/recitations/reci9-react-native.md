---
title: Recitation 9 - React Native
---

# Recitation 9 - React Native

## Staff Overview
- Mehul Agarwal & Rohit Nanjangud Shreenivas
- Emails: mehula@andrew.cmu.edu & rshreeni@andrew.cmu.edu
- Office Hours: Mehul(3:30 PM to 4:30 PM on Wednesdays) Rohit(5 PM to 6 PM on Fridays)

## Before React Native

- Writing and maintaining of code for multiple platforms was daunting
- Needed to write separate code for different platforms
- Resulted in longer software development cycles
- Higher costs and higher resource consumption

## React Native

- Open-source framework for building cross-platform mobile applications using JavaScript and React
- Created by Facebook in 2015
- Uses native components, better performance, seamless UX
- Hot reloading, strong community support, easy to start

## JavascriptCore

The JavaScriptCore Framework provides the ability to evaluate JavaScript programs from within Swift, Objective-C, and C-based apps. You can use also use JavaScriptCore to insert custom objects to the JavaScript environment.

- In most cases, React Native will use Hermes, an open-source JavaScript engine optimized for React Native.
- If Hermes is disabled, React Native will use JavaScriptCore, the JavaScript engine that powers Safari.
- When using Chrome debugging, all JavaScript code runs within Chrome itself, communicating with native code via WebSockets.

## Threading model

The React Native renderer distributes the work of the render pipeline across multiple threads.
- UI Thread (native rendering)
- JS Thread (logic / batched updates)
- Native Modules Thread (platform APIs)
- Render Thread (only Android / OpenGL)

## React Native Bridge

React Native Bridge is a communication channel that enables communication between the JavaScript code running on the main thread and the platform-specific native modules running on a separate thread.

The bridge allows the JavaScript code to invoke native modules and receive the results back.

## Code example


## Hello World!

- https://expo.github.io/router/docs/
- npx create-expo-app@latest --example with-router ./
- Create a app folder with _layout.js and index.js
- npm start
- npm install -g expo-cli followed by expo-cli start –tunnel
- Run this on your phone using the Expo Go app

## Reference

https://youtu.be/mJ3bGvy0WAY
