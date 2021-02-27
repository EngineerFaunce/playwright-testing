const { chromium, firefox, webkit } = require('playwright');
const browserName = process.env.BROWSER || 'chromium';
let browser;
let page;
beforeAll(async () => {
  browser = await {chromium, webkit, firefox}[browserName].launch({ headless: false, slowMo: 5000});
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
