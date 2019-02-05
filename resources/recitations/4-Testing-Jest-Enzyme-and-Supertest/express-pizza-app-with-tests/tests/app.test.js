const app = require("../app");
const request = require("supertest");

test("GET / should return a hello message", async () => {
  const response = await request(app).get("/");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual("hello pizzas");
});

test("GET /pizzas should return a non-empty array", async () => {
  const response = await request(app).get("/pizzas");

  expect(response.status).toEqual(200);
  expect(Array.isArray(response.body)).toEqual(true);
  expect(response.body.length).toBeGreaterThan(0);
});

test("POST /pizzas should return a new pizza object", async () => {
  const TEST_DATA = {
    name: "test pizza",
    price: 19
  };
  const response = await request(app)
    .post("/pizzas")
    .send(TEST_DATA);
  expect(response.status).toEqual(200);
  expect(response.body).toMatchObject(TEST_DATA);
});

test("PUT /pizzas should return an array with the updated pizza", async () => {
  const TEST_DATA = {
    name: "updated pizza",
    price: 5
  };
  const response = await request(app)
    .put("/pizzas/1")
    .send(TEST_DATA);

  expect(response.status).toEqual(200);
  expect(response.body).toMatchObject(TEST_DATA);
});

test("DELETE /pizzas should return a 'deleted successfully' confirmation message", async () => {
  const ID = 1;
  const response = await request(app).delete(`/pizzas/${ID}`);

  expect(response.status).toEqual(200);
  expect(response.body).toEqual(`pizza with id ${ID} deleted successfully`);
});
