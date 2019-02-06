/**
 * dns 模块用于DNS的查询和操作系统底层域名解析功能的使用，
 * 提供了一些封装好的异步的功能方法
 * http://www.gbtags.com/gb/tutorials/222/1171.htm
 */
var dns = require('dns');
dns.lookup('www.google.com', function onLookup(err, address, family) {
  console.log('address:', address);
  dns.reverse(address, function (err, hostnames) {
    if (err) {
      console.log(err.stack);
    }
    console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
  });
});
