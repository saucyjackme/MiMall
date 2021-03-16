import Vue from 'vue'
import App from './App.vue'
import routers from './router'
import axios from 'axios'
//VueAxios将axios挂载至vue上
import VueAxios from 'vue-axios'

//mock开关
const mock = false;
if(mock) {
  //import 是预编译加载，直接加载到内存中
  //1require是按需加载
  require('./mock/api');
}

// import env from './env'
//axios拦截器
// 设置默认值，根据前端的跨域方式作调整
// axios.defaults.baseURL = env.baseURL;
axios.defaults.baseURl = '/api';
//超时处理
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0) {
    return res.data;
  }else if(res.status == 10) {
    window.location.href = '/#/login'
  }else {
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router:routers,
  render: h => h(App),
}).$mount('#app')
