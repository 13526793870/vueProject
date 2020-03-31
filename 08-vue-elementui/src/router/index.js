import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../components/Users'
import Role from '../components/Role'
import Echarts from '../components/Echarts'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Users', component: Users },
  { path: '/users', name: 'Users', component: Users },
  { path: '/role', name: 'Role', component: Role },
  { path: '/echart', name: 'Echarts', component: Echarts },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
