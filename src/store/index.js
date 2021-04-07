//管理入口,导入插件
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);

//管理初始状态
const state = {
  username: '', //登录用户名
  cartCount: 0  //购物车商品数量
}
//创建并导出Vuex.Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions
});