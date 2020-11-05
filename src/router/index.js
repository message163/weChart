import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ()=> import('@/views/login/login')
  },
  {
    path: '/index',
    redirect:"/index/chart",
    component: () => import('@/views/index/main'),
    children:[{
       name:"chart",
       path:"/index/chart",
       component:()=> import('@/views/index/we-chart')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
