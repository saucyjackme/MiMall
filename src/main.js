import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {Message} from 'element-ui'
// 每次需要同时引入elementui样式
import 'element-ui/lib/theme-chalk/index.css'

// 将store加载
import store from './store'
//VueAxios将axios挂载至vue上
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

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
axios.defaults.baseURL = '/api';
//超时处理
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0) {
    return res.data;
  }else if(res.status == 10) {
    //未登陆也可访问首页
    if(path != '#/index' ) {
      window.location.href = '/#/login';
      return Promise.reject(res);
    }
  }else {
    // alert(res.msg);
    Message.warning(res.msg)
    return Promise.reject(res);
  }
},(error)=>{
  let res = error.response;
  Message.warning(res.data.message);
  return Promise.reject(error);
});


Vue.use(VueAxios,axios);
Vue.use(VueCookie);
//图片懒加载
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.use(Message);
//以prototype的形式扩展插件
Vue.prototype.$message = Message;




Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
