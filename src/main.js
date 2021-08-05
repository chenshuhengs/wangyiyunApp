import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Vant from 'vant'
import 'lib-flexible'
import 'vant/lib/index.css'
import '@/assets/css/reset.css'

import instance from '@/requestConfig'

import Search from '@/components/Search'
import Loading from '@/components/Loading'
import Iconfont from '@/components/Iconfont'
import HeaderBar from '@/components/HeaderBar'

Vue.use(Vant)

Vue.component('Search', Search)
Vue.component('Loading', Loading)
Vue.component('Iconfont', Iconfont)
Vue.component('HeaderBar', HeaderBar)

import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.http = Vue.prototype.$http = instance

Vue.config.productionTip = false

new Vue({ store, router, render: h => h(App) }).$mount('#app')
