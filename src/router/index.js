import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/iView',
    name: 'iView',
    component: () => import('../views/iViewView.vue')
  },
  {
    path: '/productList',
    name: 'productList',
    component: () => import('../views/ProductListView.vue')
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('../views/Example.vue')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('../views/TodoListView.vue')
  },
  {
    path: '/timer',
    name: 'timer',
    component: () => import('../views/TimerView.vue')
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('@/views/CarouselView.vue')
  },
  {
    path: '/transitions',
    name: 'transitions',
    component: () => import('@/views/TransitionsView.vue')
  },
  {
    path: '/css',
    name: 'css',
    component: () => import('@/views/CSSView.vue')
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('@/views/GamesView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
