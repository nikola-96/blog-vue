import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../components/AppPosts.vue'
import AppSinglePost from '../components/AppSinglePost.vue'
import AppAddPost from '../components/AppAddPost.vue'





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
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: AppSinglePost
  },
  {
    path: '/add',
    name: 'PostAdd',
    component: AppAddPost
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
