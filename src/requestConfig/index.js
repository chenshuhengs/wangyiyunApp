import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
import { createNamespacedHelpers } from 'vuex'
const loadingStore = createNamespacedHelpers('loadingStore')

const config = {
    timeout: 30000,
    baseURL: 'http://localhost:4000/',
    withCredentials: true,
}

const instance = axios.create(config)

instance.interceptors.request.use(
    config => {
        loadingStore.mapActions({ beginLoading: 'beginLoading' })
        return config
    },
    error => {
        return Promise.reject(error)
    },
)

instance.interceptors.response.use(
    response => {
        loadingStore.mapActions({ endLoading: 'endLoading' })
        if (response.status !== 200) {
            Toast.fail('请求失败')
        } else {
            Toast.success('获取成功')
        }
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        Toast.fail('请求失败请重试')
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    },
)

Vue.prototype.$axios = axios
Vue.prototype.$get = axios.get
Vue.prototype.$post = axios.post
Vue.prototype.$put = axios.put
Vue.prototype.$delete = axios.delete

export default instance
