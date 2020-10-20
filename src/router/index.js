import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    component: () => import(/* webpackChunkName: "game2048" */ '../views/Game2048.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
