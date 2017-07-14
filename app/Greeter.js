// var config = require('./config.json');
// 
// module.exports = function() {
//     var greeter = document.createElement('div');
// 
//     //greeter.textContent = 'Hi, there and greetings!';
//     greeter.textContent = config.greeterText;
// 
//     return greeter;
// };

import React, {Component} from 'react';
import config from './config.json';

import styles from './Greeter.css'; // 导入

class Greeter extends Component {
    render() {
        // 添加类名
        return (
            <div className={styles.root}>
                {config.greeterText}
            </div>
        );
    }
}

export default Greeter;
