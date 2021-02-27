const { webkit } = require('playwright');
const expect = require('expect');
let browser;
let page;
beforeAll(async () => {
  browser = await webkit.launch();
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

describe('browser check', () => {
	test('should display correct browser', async () => {
		await page.goto('http://whatsmybrowser.org/');
	});
  test.todo('some other test');
});
