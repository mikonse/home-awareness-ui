import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Configuration from './components/Configuration'
import Tracking from './components/Tracking'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/config',
      name: 'config',
      component: Configuration
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: Tracking
    }
  ]
})