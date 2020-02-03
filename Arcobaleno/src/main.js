import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Pizza from './components/Pizza.vue'
import Cart from './components/Cart.vue'
import store from './store.js'
import Login from './components/Login.vue'
import Payment from './components/Payment.vue'
import Registration from './components/Registration.vue'
import UserProfile from './components/UserProfile.vue'
import PizzaProfile from './components/PizzaProfile.vue'
import Delivery from './components/Delivery.vue'

const routes = [
    {path: '/', component: Pizza},
    {path: '/cart', component: Cart, meta: {requiresAuth: true}},
    {path: '/login', component: Login},
    {path: '/payment', component: Payment},
    {path: '/registration', component: Registration},
    {path: '/profile', component: UserProfile, meta:{props: true}},
    {path: '/pizzaprofile/:id', component: PizzaProfile},
    {path: '/delivery', component: Delivery}
]

const router = new VueRouter({
    routes
 })

 router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // этот путь требует авторизации, проверяем залогинен ли
      // пользователь, и если нет, перенаправляем на страницу логина
      if (store.getters.getUser === null) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // всегда так или иначе нужно вызвать next()!
    }
  })

Vue.use(VueRouter)
    new Vue({
        render: h => h(App),
        el: '#app',
        router,
        store

})