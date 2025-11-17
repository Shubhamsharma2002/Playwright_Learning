import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  //  page link
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
  //  login username input
  await page.locator("#loginusername").click();
  await page.locator("#loginusername").fill("pavanol");
  // login password input
  await page.locator("#loginpassword").click();
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Log out" }).click();
});
