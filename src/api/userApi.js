import http from '@/requestConfig'

const userApi = {
    /**
     * 获取用户信息 , 歌单，收藏，mv, dj 数量
     *
     * @returns {AxiosPromise<any>}
     */
    getUserSubcount() {
        return http.get('/user/subcount')
    },

    /**
     * 获取喜欢音乐列表
     * @param id
     *
     * @returns {AxiosPromise<any>}
     */
    getLikeList(id) {
        return http.get('/likelist?uid=' + id)
    },
}

export default userApi
