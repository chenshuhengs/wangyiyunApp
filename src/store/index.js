import Vue from 'vue'
import Vuex from 'vuex'
import loadingStore from './modules/loadingStore'
import myInitStore from './modules/myInitStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        loadingStore,
        myInitStore,
    },
    strict: process.env.NODE_ENV !== 'production',
})
