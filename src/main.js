/* jshint esversion: 6 */

import {createApp} from "vue";
import App from "./App.vue";
import Mock from 'mockjs';

// 引入mock数据
import './mock/index.js';
// 启动mock
Mock.setup({});

createApp(App)
  .mount("#app");