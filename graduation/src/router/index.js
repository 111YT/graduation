import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components//page/index'
// import aboutus from '@/components//page/aboutus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // {
    //   path: '/aboutus',
    //   name: 'aboutus',
    //   component: aboutus
    // }
  ]
})
