import http from '@/requestConfig'

const homeApi = {
    /**
     * 获取banner
     * @param type
     * @returns {AxiosPromise<any>}
     */
    banner(type) {
        return http.get('/banner?type=' + type)
    },
}

export default homeApi
