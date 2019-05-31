const puppeteer = require('puppeteer-core');
const path = require('path');

// 本地安装的 chrome 绝对地址
const ChromePath = path.resolve('/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary')

(async () => {
  const browser = await puppeteer.launch({
    executablePath: ChromePath
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/gaiban/lingqian3.html?idx=1');

    // const feedHandle = await page.$eval('#abc', el => el.innerHTML)

    // console.log(feedHandle)

    // const feedHandle = await page.$('#abc')
    // console.log(feedHandle)

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    let _height = document.querySelectorAll('#linqian .lq-border')[0].getBoundingClientRect().height
    return _height;
  });
  console.log('Dimensions:', dimensions);


  await browser.close();
})();
