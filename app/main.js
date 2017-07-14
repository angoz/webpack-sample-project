// var greeter = require('./Greeter.js');
// 
// document.getElementById('root').appendChild(greeter());

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter.js';

import './main.css'; // 使用 require 导入 css 文件

render(<Greeter />, document.getElementById('root'));
