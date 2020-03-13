import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../components/AppPosts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    name: 'Posts',
    component: AppPosts
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
