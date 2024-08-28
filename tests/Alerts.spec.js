const {test,expect} = require('@playwright/test')

test.skip("Alert with OK",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
    await page.click('//button[normalize-space()="Alert"]');
    await page.waitForTimeout(10000);
});
test.skip("Confirmation Alert",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling dialog window handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() //close by using ok button
    })
    await page.click('//*[@id="HTML9"]/div[1]/button[2]');
    await expect(page.locator('//*[@id="demo"]')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000);
});
test("Prompt Dialog",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling dialog window handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name')
        expect(dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('John') //close by using ok button
    })
    await page.click('//*[@id="HTML9"]/div[1]/button[3]');
    await expect(page.locator('//*[@id="demo"]')).toHaveText('Hello John! How are you today?')
    await page.waitForTimeout(5000);
});