const  {test,expect} = require('@playwright/test')
// test.only('test1',async ({page})=>{  
//   console.log("this is my test1...")
// })
// test.skip('test2',async ({page})=>{  
//     console.log("this is my test2...")
//   })
//   test('test3',async ({page,browserName})=>{  
//     console.log("this is my test3...")
//     if(browserName=="chromium"){
//         test.skip()
//     }
//   })
// //Fixme
// test('test4',async({page})=>{
//     test.fixme()
//     console.log("this is test 4")
// })

//Fail
// test('test5',async({page})=>{
//     test.fail() //exp
//     console.log("this is test 5....")
//     expect(1).toBe(2) //If both  exp & Actual is fail then test pass
// })

//slow
test('test7',async({page})=>{
   // test.slow()
    test.setTimeout(5000)
    await page.goto('https://demoblaze.com/index.html')
    console.log('this is test 7....')
 })

