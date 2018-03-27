import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import signin from '@/components/page/signin'
import register from '@/components/page/register'
import aboutus from '@/components/page/aboutus'
import Reservation from '@/components/page/Reservation'
import hotelmap from '@/components/page/hotelmap'
import hoteldetail from '@/components/page/hoteldetail'
import hoteldetailTwo from '@/components/page/hoteldetailTwo'
import personalcenter from '@/components/page/personalcenter'
import personinfo from '@/components/page/personinfo'
import relist from '@/components/page/relist'
import reg from '@/components/page/reg'
import stepone from '@/components/page/stepone'
import steptwo from '@/components/page/steptwo'
import steptree from '@/components/page/steptree'



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
    {
      path: '/hoteldetail',
      name: 'hoteldetail',
      component: hoteldetail
    },
    {
      path: '/hoteldetailTwo',
      name: 'hoteldetailTwo',
      component: hoteldetailTwo
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg,

    },
    {
      path: '/stepone',
      name: 'stepone',
      component: stepone,

    },
    {
      path: '/steptwo',
      name: 'steptwo',
      component: steptwo,

    },
    {
      path: '/steptree',
      name: 'steptree',
      component: steptree,

    },
    {
      path: '/personalcenter',
      name: 'personalcenter',
      component: personalcenter,
      children: [
        {
        path: 'personinfo',
        component: personinfo
      },
        {
        path: 'relist',
        component: relist
      },

      ]
    },
  ]
})
