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
  
  // 검색 완료

  // 마우스 스크롤을 해서 밑으로 내린다 
  // 키보드 화살표 아래를 눌러서 화면을 아래로 내린다 
  // => 무한 스크롤 게시글 데이터가 들어오지 않을까? 

  // 페이지안에서 일어나는 것을 컨트롤 할 수 있다. 
  await page.waitForNavigation()

  let infiniteScrollInterval = setInterval(async() => {
    await page.evaluate(() => {
      // 0 에서부터 window.Highght 까지 스크롤한다. 
      // 서버에서는 window 에서 access 가 되지 않는다. 
      window.scrollBy(0, window.innerHeight)
  });
  }, 1000)

  // setTimeout(() => {
  //   clearInterval(infiniteScrollInterval)
  // }, 1000 & 10);
  
})();
