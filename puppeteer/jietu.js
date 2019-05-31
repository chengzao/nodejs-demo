// 引入依赖插件
const puppeteer = require('puppeteer-core');
const path = require('path');

// 本地安装的 chrome 绝对地址
const ChromePath = path.resolve('/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary')

const fs = require('fs');
const request = require('request');

let theBrowser = null;

const websiteUrl = 'http://127.0.0.1:5500/gaiban/lingqian2.html?idx=1';
const uploadFileUrl = 'http://127.0.0.1:5500/upload';

// 启动puppeteer



puppeteer.launch({
  // root 权限下需要取消sandbox
  args: ['--no-sandbox'],
  executablePath: ChromePath
}).then(async browser => {
  theBrowser = browser
  // 打开浏览器后，新建tab页
  const page = await browser.newPage();

  // 设置tab页的尺寸，puppeteer允许对每个tab页单独设置尺寸
  await page.setViewport({
    width: 1000,
    height: 3480
  });

  // tab访问需要截图的页面，使用await可以等待页面加载完毕
  await page.goto(websiteUrl);

  // 由于页面数据是异步的，所以等待8秒，等待异步请求完毕，页面渲染完毕
  await page.waitFor(8000);

  // 页面渲染完毕后，开始截图
  await page.screenshot({
    path: './dashboard_shot.png',
    clip: {
      x: 182,
      y: 30,
      width: 636,
      height: 1040
    }
  });
  await browser.close();
  // 截图成功后，将截图上传至图片服务器
//   request.post({
//     url: uploadFileUrl,
//     headers: {
//       // 此处模拟一个服务器校验token
//       userToken: '2361A77FDD432C6B464C57007C062B82'
//     },
//     formData: {
//       file: fs.createReadStream(
//         path.join(__dirname, './dashboard_shot.png')
//       )
//     }
//   }, (err, httpResponse, body) => {
//     // 异常处理，且不管失败还是成功，都关闭打开的浏览器
//     if (err) {
//       theBrowser.close();
//       fs.unlink(
//         path.join(__dirname, './dashboard_shot.png')
//       )
//       return console.error('upload failed:', err)
//     }

//     fs.unlink(
//       path.join(__dirname, './dashboard_shot.png')
//     )
//     theBrowser.close();
//   })
// }).catch(error => {
//   theBrowser.close();
// });

})
