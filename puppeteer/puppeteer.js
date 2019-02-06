
const puppeteer = require('puppeteer');



(async () => {
  console.log(process.argv)
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://www.chenio.cn');
  // 设置tab页的尺寸，puppeteer允许对每个tab页单独设置尺寸
  await page.setViewport({
    width: 1000,
    height: 1080
  });
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();