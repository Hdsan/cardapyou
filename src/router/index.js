import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'
import Menu from '../views/Menu.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/perfil',
    name: 'Profile',
    component: Profile
  },
  //lazy load
  {
    path: '/restaurantes',
    name: 'Map',
    component: () => import('../views/RestaurantMap.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
