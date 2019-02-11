// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//for VueCharts
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts)
//vuecharts is different way to make various chart(without creating components).

//for vuechartkick [ npm install --save chartkick vue-chartkick ]
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
Vue.use(VueChartkick, { Chartkick })
//vuechartkick use single line(inline) to build the chart

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
