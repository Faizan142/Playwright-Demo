import {test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log('this beforeAll Hook.....')
})
test.afterAll(async()=>{
    console.log('this afterAll Hook.....')
})
test.beforeEach(async()=>{
    console.log('this beforeEach Hook.....')
})
test.afterEach(async()=>{
    console.log('this afterEach Hook.....')
})

test.describe.skip('Group 1',()=>{
    test("Test 1",async ({page})=>{
        console.log('This is test 1....')
    });
    test("Test 2",async ({page})=>{
        console.log('This is test 2....')
})
});
test.describe('Group 2',()=>{
    test("Test 3",async ({page})=>{
        console.log('This is test 3....')
    });
    test("Test 4",async ({page})=>{
        console.log('This is test 4....')
    });
});
