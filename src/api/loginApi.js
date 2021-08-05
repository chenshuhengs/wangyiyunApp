import http from '@/requestConfig'

const loginApi = {
    /**
     * 获取登录状态
     *
     * @returns {AxiosPromise<any>}
     */
    loginState() {
        return http.get('/login/status')
    },

    /**
     * 手机号登录
     * @param data
     *
     * @returns {AxiosPromise<any>}
     */
    phoneLogin(data) {
        return http.get(`/login/cellphone?phone=${data.phone}&password=${data.password}`)
    },
}

export default loginApi
