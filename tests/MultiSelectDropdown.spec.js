const {test, expect} = require('@playwright/test')

test("Handle dropdowns",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple options from multi select drop down
   // await page.selectOption('#colors',['Blue','Red','Yellow'])
    //1)check number of options in dropdown
    // const options= await page.locator('#colors option')
    // await expect(options).toHaveCount(5);
    // await page.waitForTimeout(5000);

    //2) Check number of options in dropdown using JS array
    // const options = await page.$$('#colors option')
    //console.log("Number of options: ",options.length)
    // await expect(options.length).toBe(5);

    //3)check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
  // await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();
})