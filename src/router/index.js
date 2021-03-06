import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Welcome
  },
  {
    path: '/stats',
    name: 'Stats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stats.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
