const {test,expect} = require('@playwright/test')

test('handle inputbox',async ({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form')

    //Inputbox - firstname
    await expect(await page.locator("//*[@id='firstName']")).toBeVisible();
    await expect(await page.locator("//*[@id='firstName']")).toBeEmpty();
    await expect(await page.locator("//*[@id='firstName']")).toBeEditable();
    await expect(await page.locator("//*[@id='firstName']")).toBeEnabled();


    //await page.locator("//*[@id='firstName']").fill("John");
    await page.fill("//*[@id='firstName']","John")
    await page.waitForTimeout(5000);
})