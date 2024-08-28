const {test,expect} = require('@playwright/test')

test('handle radio button',async({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form');
    //await page.pause() 
    await page.locator("//*[@id='gender-radio-1']").check({force:true});
  //  await expect(await page.locator("//*[@id='gender-radio-1']")).toBeChecked();
   // await expect(await page.locator("//*[@id='gender-radio-1']")).isChecked().toBeTruthy();
   // await expect(await page.locator("//*[@id='gender-radio-2']")).isChecked().toBeFalsy();
    await page.waitForTimeout(5000);
})