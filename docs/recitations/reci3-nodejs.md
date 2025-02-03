# Recitation #3
### 17-356/17-766

## What is Node.js
- Open-source, cross-platform JavaScript runtime environment.
- Event-driven architecture capable of asynchronous (non-blocking) I/O.
- Suitable for fast, powerful, and scalable web applications.
- JavaScript and Node.js are the most popular technologies for web development.

## Npm (Node Package Manager)
- Largest ecosystem of open-source libraries in the world.
- npm registry - an online database of public and paid-for private packages.

### How to find reliable, secure packages:
1. Run `npm audit` after installing to check for vulnerabilities.
2. Look for an active GitHub repository (stars, forks, and issues).
3. Check `package.json` dependencies:
    ```json
    "dependencies": {
      "axios": "^1.7.9",
      "cra-template": "1.2.0",
      "react": "^18.0.0",
      "react-dom": "^18.0.0",
      "react-scripts": "5.0.1",
      "web-vitals": "^4.2.4"
    }
    ```

## Simple Web Architecture
- **Frontend**: React / Vue + RESTful APIs
- **Backend**: Node.js
- **Database**: PostgreSQL / MySQL / MongoDB

## Node.js + MongoDB

### What is MongoDB?
- NoSQL document-based database.
- Stores data in JSON-like BSON format.
- Scalable, flexible, and schema-less.

### Schema Example:
```json
{
  "name": "Harry Potter",
  "author": {
    "name": "J.K. Rowling",
    "followers": 789
  },
  "views": 123456
}
```

### Node.js Asynchronous Execution
```javascript
function function1() {
    setTimeout(() => {
        console.log('function1');
    }, 1000); // Delays execution by 1 second
}
function function2() {
    console.log('function2');
}
function main() {
    function1();
    function2();
}
```

### Output
```
function2
function1
```

### Callback Functions

1. Functions passed to another function
2. Executes the callback after function1 completes

Example
```javascript
function function1(callback) {
    setTimeout(() => {
        console.log('function1');
        callback();
    }, 1000);
}
function function2() {
    console.log('function2');
}
function main() {
    function1(function2);
}
```

### Output
```
function1
function2
```

### Promises and Promise Chains

1. Structured callbacks that avoid "callback hell".
2. Resolves the promise after function1 completes.

Example
```javascript
function function1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('function1');
            resolve();
        }, 1000);
    });
}
function function2() {
    console.log('function2');
}
function main() {
    function1().then(function2); // Waits for function1 before running function2
}
```

Output
```
function1
function2
```

### Generators
1. Functions that can be exited/paused and later renamed

Example
```javascript
function* main() {
    yield new Promise((resolve) => {
        setTimeout(() => {
            console.log('function1');
            resolve();
        }, 1000);
    });

    console.log('function2');
}
const generator = main();
generator.next().value.then(() => generator.next());
```

Output
```
function1
function2
```

### Async/Await
1. Combines generators and promises.
2. Waits for function1 before running function2.
3. Functions that use await must be declared as async.

```javascript
function function1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('function1');
            resolve();
        }, 1000);
    });
}
function function2() {
    console.log('function2');
}
async function main() {
    await function1();
    function2();
}
```

```
function1
function2
```