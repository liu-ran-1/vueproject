import Vue from "vue";
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Vuex)
Vue.use(ElementUI)

const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,

})

//挂在在vue实例上
export default store
