'use strict';

const template = require('art-template');

// 根据模板字符串编译成一个模板编译函数
let compiled = template.compile(`
  hello {{title}}  
  <ul>
    {{each list as value i }} 
      <li>{{value.name}}</li>   
    {{/each}}
  </ul>
  `);

// 调用该函数，注入模板数据，得到替换过后的html字符串
let str = compiled({
  title: '哈哈',
  list: [
    {name:'张三'},
    {name:'李四'},
  ]
});

console.log(str);
