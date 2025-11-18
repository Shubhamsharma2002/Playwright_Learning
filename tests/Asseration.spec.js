import { test, expect } from "@playwright/test";


test("Asseration tset", async ({ page }) => {
  // url link

  await page.goto("https://demo.nopcommerce.com/register?returnUrl");

  // 1) check the url is right or not

  await expect(page).toHaveURL(
    "https://demo.nopcommerce.com/register?returnUrl"
  );

  // 2) check the page title

  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // 3) check the logo is visible or not

  const logoElement = await page.locator(".header-logo");

  await expect(logoElement).toBeVisible();
});
