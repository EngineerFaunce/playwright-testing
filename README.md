# Playwright Testing
Small test example of using the Playwright framework for automated browser testing. Currently uses Jest as the testrunner.

## Running Tests
Set the `BROWSER` environment variable to the browser you want to run the test in (`chromium`, `firefox`, or `webkit`).
In Windows this can be done by using the following:
```
$Env:BROWSER = "{browserName}"
```

Then run the following:
1. `npm i`
2. `npm test`