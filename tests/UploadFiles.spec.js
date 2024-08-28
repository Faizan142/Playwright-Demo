const {test,expect} = require('@playwright/test')

test("Single File",async ({page})=>{
    await page.goto('https://www.foundit.in/');

    await page.waitForSelector('.mqfihd-upload')
    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('tests/files/Testfile1.pdf')

    await page.waitForTimeout(5000)

   
  
});
test.only("Multiple File",async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/files/Testfile1.pdf','tests/files/Testfile2.pdf'])

    await page.waitForTimeout(3000)
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Testfile1.pdf')
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Testfile2.pdf')
    
    await page.waitForTimeout(3000)
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

  
});