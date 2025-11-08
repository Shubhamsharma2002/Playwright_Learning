import { test, expect } from "@playwright/test";

test("Built-In-locator", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // logo alt text
  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  // username ,password placeholder
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("password").fill("admin123");

  //  button test cases
  await page.getByRole("button", { type: "submit" }).click();

  const name = await page
    .locator("//p[@class='oxd-userdropdown-name']")
    .textContent();
  await expect(await page.getByText(name)).toBeVisible();
});
