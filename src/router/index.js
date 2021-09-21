import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'App',
    redirect: '/home',
    component: App
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
  }
]

export default new Router({
  routes
})
