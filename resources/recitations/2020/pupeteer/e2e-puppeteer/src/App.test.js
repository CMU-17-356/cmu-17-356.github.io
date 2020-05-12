import puppeteer from "puppeteer";

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
});

// 1
test("renders counter", async () => {
  await page.waitForSelector(".header");

  const header = await page.$eval(".header", e => e.innerHTML);
  expect(header).toBe("Counter");
});

// 2
test("sets initial state to zero", async () => {
  await page.waitForSelector(".counter-app");

  const count = await page.$eval(".count", e => e.innerHTML);
  expect(count).toBe("0");
});

// 3
test("increments counter by 1", async () => {
  await page.waitForSelector(".counter-app");

  await page.click(".increment");
  await page.click(".increment");
  await page.click(".increment");
  await page.click(".increment");
  await page.click(".increment");
  const count = await page.$eval(".count", e => e.innerHTML);
  expect(count).toBe("5");
});

// 4
test("decrements counter by 1", async () => {
  await page.waitForSelector(".counter-app");

  await page.click(".decrement");
  await page.click(".decrement");
  await page.click(".decrement");
  const count = await page.$eval(".count", e => e.innerHTML);
  expect(count).toBe("2");
});

afterAll(() => {
  browser.close();
});
