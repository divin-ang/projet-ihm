import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form  from '../views/Form.vue'
import Inscription2 from '../views/Inscription2.vue'
import Inscription3 from '../views/Inscription3.vue'
import Welcome from '../views/Welcome.vue'
import FormLogin  from '../views/FormLogin.vue'
import Network from  '../views/Network.vue'
import Profil from  '../views/Profil.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/signup',
    component:Form
  },
  {
    path:'/network',
    component:Network
  },
  
  {
    path:'/welcome',
    component:Welcome
  },
  {
    path:'/signup-suite/job',
    component:Inscription3
  },
  {
    path:'/signup-suite',
    component:Inscription2
  },
  {
    path:'/profil',
    component:Profil
  }
  ,{
    path:'/login',
    component:FormLogin
  }
  
  ,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
