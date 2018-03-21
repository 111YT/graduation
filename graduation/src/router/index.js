import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import signin from '@/components/page/signin'
import register from '@/components/page/register'
import aboutus from '@/components/page/aboutus'
import Reservation from '@/components/page/Reservation'
import hotelmap from '@/components/page/hotelmap'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/Reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/hotelmap',
      name: 'hotelmap',
      component: hotelmap
    },
  ]
})
