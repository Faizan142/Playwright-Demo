const {test,expect} = require('@playwright/test')

test("Date Picker",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   // await page.fill('#datepicker','06/30/2024')

   //date picker
   const year = "2022"
   const month = "March"
   const date = "25"
   await page.click('#datepicker')

   while(true){
    const currentYear = await page.locator('.ui-datepicker-year').textContent()
    const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        if(currentYear == year && currentMonth==month){
            break
        }
       // await page.locator('[title="Next"]').click() //Next
       await page.locator(['title="Prev']).click()
   }
//    const dates = await page.$$("//a[@class='ui-state-default']")
//    for(const dt of dates){
//         if(await dt.textContent()==date)
//         {
//             await dt.click();
//             break;
//         }
//    }
   //date selection -without loop
   const dates =await page.click("//a[@class='ui-state-default']")
    await page.waitForTimeout(5000)

  
});