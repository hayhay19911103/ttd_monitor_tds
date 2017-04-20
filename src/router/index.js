import Vue from 'vue'
import Router from 'vue-router'
import  dataSource from '@/components/dataSource'
import graphy from '@/components/graphy'
import  warnRule from '@/components/warnRule'
import board from '@/components/board'
import cat from '@/components/cat'
import dashboard from '@/components/dashboard'
import listPage from '@/components/listPage'
import home from '@/components/home'
import apiProperty from '@/components/apiProperty'
import pageProperty from '@/components/pageProperty'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },

    {
      path: '/dataSource',
      name: 'dataSource',
      component: dataSource,
    },
    {
      path: '/graphy',
      name: 'graphy',
      component: graphy
    },
    {
      path: '/board',
      name: 'board',
      component: board
    },
    {
      path: '/warnRule',
      name: 'warnRule',
      component: warnRule
    },
    {
      path: '/CAT',
      name: 'cat',
      component: cat
    },
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/listPage',
      name: 'listPage',
      component: listPage
    },
    {
      path: '/apiProperty',
      name: 'apiProperty',
      component: apiProperty
    },
    {
      path: '/pageProperty',
      name: 'pageProperty',
      component: pageProperty
    },
  ]
})
