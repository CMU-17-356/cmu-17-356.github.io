# Recitation #5
### 17-356/17-766

## Unit Testing
- Testing individual components or units of code in isolation.
- A unit can be a function, method, or class.
- Why Unit Testing?
  - Easy to define scope and logic.
  - Catches bugs early in the development cycle.
  - Facilitates refactoring and maintenance.

## Jest
- JavaScript testing framework developed by Facebook
- Great for testing both backend and frontend
- Built-in assertion libraries and mocking functionalities
- Easy to use!

## Why Test Everything? Even Simple Logic
- Future-Proofing
- Refactoring Safety
- Edge Cases
  - Different data type: JSON, null, None, undefined, empty strings, or unexpected objects.
  - Unpredictable behaviors: clicking button 1000 times, rapid API calls
  - Boundary Conditions: integer overflow
- Concurrency Issues

## Async Functions
  - Always use await and tools like waitFor to test async functions.
  - Example: handle API calls or delayed updates

## Frontend Unit Test
- Interact with component: (e.g., Click, Submit forms)
- Styling and Layout
  - Write test for styling and properties if it is critical to functionality (e.g., a disabled button color).
  - Avoid testing purely visual aspects; use visual regression tools instead.
- Test Error code as well

## TDD: Worth the Hype or Overkill
- Pros
  - Ensures testable design.
  - Prevents engineers from deleting failing tests when bugs arise.
- Cons
  - Can slow down development, especially in fast-paced startups.
  - May feel restrictive for exploratory or prototype-driven projects.
- Solution
  - Use TDD for critical components.
  - Avoid focusing too much on testing coding style.
  - Use AI tools to generate code based on test cases?

## How Do We Know We Test Everything?
- Black Box Testing
  - Focuses on all the possible input and output without knowing internal logic.
  - Tests functionality from the user’s perspective.
- White Box Testing
  - Tests all internal structures and code.
  - Ensures all paths, branches, and conditions are covered

## How to Test Randomness 
- Use a fixed seed to make random behavior deterministic.
- Test Range or Distribution.
- Verify that outputs fall within expected ranges.
- Mock Randomness function.
- Run several times, and make sure there’s no pattern between them

## Mocking: Isolating Your Tests
- Simulating the behavior of real objects or services.
- Common Use Cases:
  - API calls.
  - Database queries.
  - Components that the output is hard to predict (e.g., time-dependent functions, randomness, AI algorithms)
- Why Mock?
  - Speed
  - Reliability & Easy to debug
  - Simulate specific scenarios (e.g., errors, timeouts)
  - Avoid Extra Costs
- Examples
    ```javascript
    jest.mock("axios");

    beforeEach(() => {
      axios.mockClear(); // Clear previous mocks before each test
    });

    test("clicking (8 + 9 =) results in (17)", async () => {
      // Mock Axios response
      axios.post.mockResolvedValueOnce({
        data: { result: "17" }, // Mock response data
      });
    });
    ```