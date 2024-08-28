const {test,expect} = require('@playwright/test')

test("Inner frames",async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.locator('//*[@id="id3"]/div/input').fill('welcome')

    //nested frames
    const childFrames = await frame3.childFrames()
    await childFrames[0].locator("//*[@id='i5']/div[3]/div").check({force:true})
    await page.waitForTimeout(5000);
 

   
  
});