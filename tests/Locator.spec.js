import {test , expect} from "@playwright/test";

test("Locator" , async({page})=>{
     await page.goto('https://www.demoblaze.com/index.html');

     //click on login button 
     await page.click('id=login2')
    //  input feild username testing ways

    //   await page.locator('#loginusername').fill("pavanol")
     await page.fill('#loginusername', 'pavanol')
    //  await page.type('#loginusername' , 'pavanol')

    // input password testing ways
     await page.fill('#loginpassword' , 'test@123')

    //  login button 

    await page.click("//button[contains(normalize-space(),'Log in')]")


    // logout button testing 

   const logoutLink =  await page.locator("(//a[normalize-space()='Log out'])")
   await expect(logoutLink).toBeVisible()

   
})