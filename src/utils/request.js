/* jshint esversion: 6 */

import axios from "axios";

const service = axios.create({
  baseURL: "/mock/",
  timeout: 5000, // 请求超时时间
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  "use strict";
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  "use strict";
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  "use strict";
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  "use strict";
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service;