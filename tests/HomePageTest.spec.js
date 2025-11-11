import { test, expect } from "@playwright/test";
test("Home Page", async ({ page }) => {
  // Navigate to site
  await page.goto("https://www.demoblaze.com/index.html");

  // Get page title (with await)
  const pageTitle = await page.title();
  console.log("Page title:", pageTitle);

  // Assertions
  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
});
