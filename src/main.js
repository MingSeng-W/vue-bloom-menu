import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Corner from './Corner'
import Center from './Center'

Vue.use(VueRouter)
const routes = [{
  path: '/',
  component: Center
}, {
  path: '/corner',
  component: Corner
}, {
  path: '/center',
  component: Center
}]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

