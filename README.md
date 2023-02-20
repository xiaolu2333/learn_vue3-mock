# myvuemock

# 一，Mock.js 的基本原理
Mock.js 是一个用于生成随机数据的前端库，它可以用于模拟后端接口数据。
在前端开发中，通常情况下我们需要向后端发送请求获取数据，但是在前端开发过程中，后端接口可能还没有开发完成，或者由于某些原因无法获取真实的数据。
这时候我们可以使用 Mock.js 来模拟后端数据，以便我们能够继续开发前端代码。

Mock.js 的原理是通过拦截前端发送的 Ajax 请求，根据请求的参数和接口规则，返回符合规则的随机数据，从而实现模拟后端接口数据的功能。

# 二，vue3 项目中 Mock.js 的安装和简单使用
以下是在 Vue3 中如何使用 Mock.js 模拟后端 API 数据的步骤：
1，安装 Mock.js
```
npm install mockjs --save-dev
```
- --save-dev 选项表示将 Mock.js 作为开发依赖安装，这样在生产环境中就不会安装 Mock.js 了。缩写为 -D。
- --save 选项表示将 Mock.js 作为生产依赖安装，这样在生产环境中也会安装 Mock.js。缩写为 -S。

2，创建 Mock 数据
在 Vue3 项目中，可以在 src/mock 目录下创建一个 index.js 文件，用于存放所有的 Mock 数据。
```javascript
import Mock from 'mockjs';

Mock.mock('/api/user', 'get', {
  'name': '@name',
  'age|18-35': 18,
  'gender|1': ['男', '女'],
});
```
接收三个参数：
- rurl：表示需要拦截的 URL，可以是字符串或者正则表达式。
- rtype：表示需要拦截的 Ajax 请求类型，可以是字符串或者正则表达式。
- template：表示JSON格式的数据，用于生成模拟数据。

这里的数据模板中：
- `'name': '@name'` 表示生成的 name 属性值是一个随机的中文姓名，
- `'age|18-35': 18` 表示生成的 age 属性值是一个 18 到 35 岁之间的整数，
- `'gender|1': ['男', '女']` 表示生成的 gender 属性值是一个数组中的随机一个值。

3，配置 Vue3 项目
在 Vue3 项目中，我们需要在 main.js 中引入 Mock.js，并调用 Mock.mock() 方法，将接口和数据进行关联。
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Mock from 'mockjs';
import './mock'; // 引入 mock 数据

Mock.setup({
  timeout: 1000 // 模拟请求延时
});

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
```
4，发送请求
在 Vue3 项目中发送请求时，只需要按照正常的方式发送即可，例如使用 axios 发送 GET 请求：
```javascript
import axios from 'axios';

axios.get('/api/user').then(response => {
  console.log(response.data);
}).catch(error => {
  console.log(error);
});
```
5，运行项目
在项目根目录下运行以下命令，启动项目：
```
npm run serve
```

以上就是在 Vue3 中使用 Mock.js 模拟后端 API 数据的步骤。
Mock.js 不仅可以模拟数据，还可以模拟请求失败、请求超时等异常情况，从而提高我们开发的容错能力。


#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
