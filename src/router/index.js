import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')
const Detail = ()=>import('../views/detail/Detail')
const LoginRegister = ()=>import('views/loginregister/LoginRegister')
const Test = ()=>import('views/test/Test')
const Main = ()=>import('views/main/Main')
const Phone = ()=>import('views/phone/Phone')
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'App',
    redirect: '/login',
    component: App
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
