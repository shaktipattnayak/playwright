const {test} = require("@playwright/test");

test("First Playwright Test", async function({browser})
{
    browser.newContext()
} )