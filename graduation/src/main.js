// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css'
import './assets/css/animate.css'
import '../static/js/jquery-1.8.3.min.js'
import '../static/js/wow.min.js'
import '../static/fonts/demo.css'
import '../static/fonts/iconfont.css'
import '../static/fonts/iconfont.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
