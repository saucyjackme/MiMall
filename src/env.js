let baseURL;
//根据不同环境输出不同的地址
//获得node.js进程中的环境变量
switch (process.env.NODE_ENV) {
  case 'dev':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prod':
    baseURL = 'http:/mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http:/mall-pre.springboot.cn/api';
    break;
}

export default {
  baseURL
}