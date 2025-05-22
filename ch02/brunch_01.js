const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 900,
  });
  await page.goto("https://brunch.co.kr/search");
  await page.click("input.txt_search")
  await page.keyboard.type("Hello World")
  await page.keyboard.press("Enter")
  
  
  // await page.screenshot({path: "brunch_01.png"})
  // await browser.close()
})();
