import { test, expect } from "@playwright/test";



test("Locating Anchor", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  //  const links = await page.$$("a");
  //  console.log(`Total links found: ${links.length}`);
  const links = await page.$$("a");
  for (const li of links) {
    const inerText = (await li.textContent())?.trim();
    console.log(inerText);
  }
});
