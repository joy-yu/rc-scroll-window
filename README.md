# rc-scroll-window
### React滚动窗组件
### [传送门](https://joy-yu.github.io/rc-scroll-window)
### 使用示例：  
``` React
import React from 'react';
import { render } from 'react-dom';
import ScrollWindow from './ScrollWindow';
import './index.css';

//数据源
const ss = [{
  image: './img/1.jpg',
  href: 'https://www.baidu.com'
}, {
  image: './img/2.jpg',
  href: 'https://www.baidu.com'
}, {
  image: './img/3.jpg',
  href: 'https://www.baidu.com'
}, {
  image: './img/4.jpg',
  href: 'https://www.baidu.com'
}, {
  image: './img/5.jpg',
  href: 'https://www.baidu.com'
}];

render(
  <ScrollWindow
    width={'500px'}
    height={'300px'}
    duration={3000}
    source={ss}
  />,
  document.getElementById('root')
);
```
