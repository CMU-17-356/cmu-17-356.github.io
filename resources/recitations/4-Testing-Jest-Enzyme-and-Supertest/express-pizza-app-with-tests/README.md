# Express pizza app with tests

### Steps for writing tests in server-side apps:

#### Tests setup

- install dependencies: `npm install jest supertest`
- add test scripts in `package.json`

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
},
```

- create a tests directory and a test file (e.g. `./tests/app.test.js`)
- add a test case: 
```js
test('descriptive message', () => {
  expect(1).toEqual(1)
})
``` 
- Make project a git repo if it isn't already so: `git init` (you need to do this in order for `jest`'s watch mode to work)
- run the tests in watch mode: `npm run test:watch`

#### Making api calls from the test
- Separate the `app.listen()` method call into another file: `server.js`, and make the necessary exports/imports
- In your test case, make a request using `supertest`. GET requests are asynchronous (because it takes time for the server to respond). Hence, we need to `async/await` it. Here's the general syntax:

```js
const request = require("supertest");
const app = require("../app");

test("GET / should return hello pizzas", async () => {
  const response = await request(app).get("/");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual({ message: "hello pizzas" });
});
```

#### Reference
- [supertest docs](https://github.com/visionmedia/supertest) (Note: superagent offers various ways to write `expect()` statements, but they can be hard to read. Try to write expectation statements using the style showed in the code snippet above)
- [superagent docs](https://github.com/visionmedia/superagent)

