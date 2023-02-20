/* jshint esversion: 6 */

import Mock from "mockjs";

const getList = Mock.mock('/mock/getList/', 'get', {
  message: 'success',
  data: ['数据1', '数据2', '数据3']
});

export default getList;