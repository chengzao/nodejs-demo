// 引入依赖插件
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const request = require('request');
const colors = require('colors');

let args = process.argv[2];


let theBrowser = null;
let num = args||10;
let imgDir = path.join(__dirname, './images');


// Colors Custom themes
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// 设置tab页的尺寸
let ViewPort = {
  width: 1000,
  height: 3480
}


// 启动puppeteer
puppeteer.launch({
  // root 权限下需要取消sandbox
  args: ['--no-sandbox']
}).then(async browser => {
  theBrowser = browser
  // 打开浏览器后，新建tab页
  const page = await browser.newPage();

  // 设置tab页的尺寸，puppeteer允许对每个tab页单独设置尺寸
  await page.setViewport({
    width: ViewPort.width,
    height: ViewPort.height
  });
  if (i >= num && num <= 100) {
    console.log('num 最小值为1,最大值为100！！！'.error);
    return false;
  }
  // 创建放图片的images文件夹
  console.log('正在创建images文件夹...'.verbose);
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir);
  }
  console.log('创建完成，进入页面等待截图...'.verbose);
  for (var i = 1; i <= num; i++) {
    // tab访问需要截图的页面，使用await可以等待页面加载完毕
    const websiteUrl = `http://127.0.0.1:5500/gaiban/lingqian3.html?idx=${i}`;
    // 进入页面
    await page.goto(websiteUrl);
    // 由于页面数据是异步的，所以等待8秒，等待异步请求完毕，页面渲染完毕
    await page.waitFor(3000);
    // 获取图片的高度
    const dimensions = await page.evaluate(() => {
      let _info = document.querySelectorAll('#linqian .lq-border')[0].getBoundingClientRect()
      return {'w':_info.width,'h':_info.height,'y':_info.top};
    });
    console.log(`图片${i}的信息 : ${JSON.stringify(dimensions)}`.data);
    // 页面渲染完毕后，开始截图
    await page.screenshot({
      path: `./images/shot_${i}.png`,
      clip: {
        x: (ViewPort.width-dimensions.w)/2,
        y: dimensions.y,
        width: dimensions.w,
        height: dimensions.h
      }
    });
    // 输出截图进度
    console.log(`screenshot :  shot_${i}.png is end!`.info);
    // 输出截图完毕
    if (i >= num) {
      console.log('screenshot is over!!!'.warn);
      console.log(`screenshot file path : ${imgDir}`.warn);
    }
  }
  await browser.close();
}).catch(err => console.log(`${err}`))