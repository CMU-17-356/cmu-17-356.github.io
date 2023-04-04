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

<img width="657" alt="image" src="https://user-images.githubusercontent.com/20667665/229871116-a9a0035b-8856-4db2-ac89-a6c3a5bbd6ca.png">

<img width="762" alt="image" src="https://user-images.githubusercontent.com/20667665/229871220-b904e1ca-f0be-484f-afb0-539afc85c923.png">

<img width="976" alt="image" src="https://user-images.githubusercontent.com/20667665/229871295-dcf046bd-b845-4962-93bb-af533fed269a.png">

<img width="998" alt="image" src="https://user-images.githubusercontent.com/20667665/229871353-fefe09b6-731f-4e6a-a62e-0abe6aa7225a.png">

<img width="894" alt="image" src="https://user-images.githubusercontent.com/20667665/229871429-80f9bc37-ce14-4a3a-a55c-20483129fe22.png">

<img width="994" alt="image" src="https://user-images.githubusercontent.com/20667665/229871516-6ae31222-ca65-4c72-b2de-ae5938f96efb.png">

<img width="994" alt="image" src="https://user-images.githubusercontent.com/20667665/229871615-4fb0d033-5773-4da8-bdb8-c025a09adbfb.png">

<img width="989" alt="image" src="https://user-images.githubusercontent.com/20667665/229871706-b0272223-0134-46d1-a453-8e902ead9257.png">

<img width="991" alt="image" src="https://user-images.githubusercontent.com/20667665/229871785-65ab57c4-e938-4f7b-a24c-3c9affec2a49.png">

## Hello World!

- https://expo.github.io/router/docs/
- npx create-expo-app@latest --example with-router ./
- Create a app folder with _layout.js and index.js
- npm start
- npm install -g expo-cli followed by expo-cli start –tunnel
- Run this on your phone using the Expo Go app

## Reference

https://youtu.be/mJ3bGvy0WAY
