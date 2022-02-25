import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')
const Detail = ()=>import('../views/detail/Detail')
const LoginRegister = ()=>import('views/loginregister/LoginRegister')
const Test = ()=>import('views/test/Test')
const Main = ()=>import('views/main/Main')
const Phone = ()=>import('views/phone/Phone')
const ElementUITest = ()=>import('views/test/ElementUITest')
Vue.use(Router)
Vue.use(ElementUI)

const routes = [
  {
    path: '/',
    component: ElementUITest
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
  }
]

export default new Router({
  routes
})
