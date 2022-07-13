import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

const Search = () => import('@/views/Search')
const News = () => import('@/views/News')
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const CityList = () => import('@/views/Home/CityList')
const Map = () => import('@/views/Home/Map')
const House = () => import('@/views/House')
const AddRoom = () => import('@/views/Home/AddRoom')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'search', component: Search },
      { path: 'news', component: News },
      { path: 'my', component: My, name: 'my' }

    ]
  },

  {
    path: '/login', component: Login

  },
  { path: '/citylist', component: CityList, name: 'citylist' },
  { path: '/map', component: Map, name: 'map' },
  {
    path: '/house/:houseCode',
    component: House,
    name: 'house',
    props: true // 让路由和组件解耦
  },
  { path: '/addroom', component: AddRoom, name: 'addroom' }

]

const router = new VueRouter({
  routes
})

export default router
