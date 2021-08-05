const state = {
    loginState: {
        likeIds: [], //喜欢的音乐
        token: null,
        userId: '',
        account: null, //用户信息
        profile: null, //用户信息
    },
}

const mutations = {
    SET_USERID(state, id) {
        state.userId = id
    },
    SET_LIKEIDS(state, id) {
        state.likeIds = id
    },
    GET_TOKEN(state, token) {
        state.token = token
    },
    LOGIN_STATE(state, data) {
        state.loginState.account = data.account
        state.loginState.profile = data.profile
    },
}

const actions = {
    setUserId({ commit }, id) {
        commit('SET_USERID', id)
    },
    setToken({ commit }, token) {
        commit('GET_TOKEN', token)
    },
    setLikeIds({ commit }, ids) {
        commit('SET_LIKEIDS', ids)
    },
    setLoginState({ commit }, data) {
        commit('LOGIN_STATE', data)
    },
}

const getters = {}

const myInitStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default myInitStore
