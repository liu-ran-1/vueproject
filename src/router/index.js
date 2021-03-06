import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'

const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')
const Detail = ()=>import('../views/detail/Detail')
const LoginRegister = ()=>import('views/loginregister/LoginRegister')
const Test = ()=>import('views/test/Test')
const Main = ()=>import('views/main/Main')
const Phone = ()=>import('views/phone/Phone')
const Content = ()=>import('../views/test/Content.vue')
const Setting = ()=>import('../views/test/Setting')
const PersonSetting = ()=>import('../views/test/PersonSetting')
const BasicBar = ()=>import('../views/test/BasicBar')
const Map = ()=>import('../views/test/Map')
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err=>err)
}
Vue.use(ElementUI)

Vue.prototype.$echarts = echarts

const routes = [
  {
    path: '/',
    redirect: '/login'
    // children:[
    //   {
    //     path: '/content',
    //     name:'content',
    //     component: Content
    //   },{
    //     path: '/setting',
    //     component: Setting
    //   }
    // ]
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/phone',
    component: Phone
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/login',
    component: LoginRegister
  },
  {
    path: '/home',
    component: Home
  },{
    path: '/cart',
    component: Cart
  },{
    path: '/category',
    component: Category
  },{
    path: '/profile',
    component: Profile
  },{
    path: '/detail',
    component: Detail
  },
    {
        path: '/content',
        name:'content',
        component: Content
      },{
        path: '/setting',
        component: Setting
      },{
        path: '/personalSetting',
        component: PersonSetting
      },{
        path: '/basicBar',
        component: BasicBar
      },{
        path: '/map',
        component: Map
      }
]

export default new Router({
  routes
})
