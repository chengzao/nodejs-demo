const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
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