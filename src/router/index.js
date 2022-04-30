import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Index from '@/views/Index'
import Find from '@/views/Find'
import Answer from '@/views/Answer'
import VIP from '@/views/VIP'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/find',
        name: 'Find',
        component: Find
      },
      {
        path: '/answer',
        name: 'Answer',
        component: Answer
      },
      {
        path: '/vip',
        name: 'VIP',
        component: VIP
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
