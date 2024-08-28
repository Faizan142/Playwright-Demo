const {test, expect} = require('@playwright/test')

test("Handle Checkboxes",async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
  //  await page.pause()
   // await page.locator("//*[@id='hobbies-checkbox-1']").click({force:true});
    //await page.check("//*[@id='hobbies-checkbox-1']")
   // expect(await page.locator("//*[@id='hobbies-checkbox-1']")).toBeChecked();
   // expect(await page.locator("//*[@id='hobbies-checkbox-1']").isChecked()).toBeTruthy();
   // expect(await page.locator("//*[@id='hobbies-checkbox-2']").isChecked()).toBeFalsy();

    const checkboxLocators=[
      "//*[@id='hobbies-checkbox-1']",
      "//*[@id='hobbies-checkbox-2']",
      "//*[@id='hobbies-checkbox-3']"
    ];
    for(const locator of checkboxLocators)
    {
      await page.locator(locator).check({force:true});
    }
    await page.waitForTimeout(5000);
    for(const locator of checkboxLocators)
    {
     if(await page.locator(locator).isChecked()){
        await page.locator(locator).uncheck({force:true});
     }
    }
    await page.waitForTimeout(5000);
})