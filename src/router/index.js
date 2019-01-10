import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import home from '../components/home'
import table from '../components/table'
import form from '../components/form'
import order from '../components/order'
import finance from '../components/finance'
import refunds from '../components/refunds'
import echart from '../components/echart'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '', component: login},
    {path: '/login', component: login},
    {
      path: '/',
      component: home,
      children: [
        {path: '/table', component: table},
        {path: '/form', component: form},
        {path: '/order', component: order},
        {path: '/finance', component: finance},
        {path: '/refunds', component: refunds},
        {path: '/echart', component: echart}
      ]
    }
  ]
})
