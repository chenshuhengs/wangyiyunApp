const state = {
    isLoading: false,
    showModal: true,
}

const mutations = {
    BEGIN_LOADING(state) {
        state.isLoading = true
    },
    END_LOADING(state) {
        state.isLoading = false
    },
    MODAL_LOADING(state) {
        state.showModal = false
    },
}

const actions = {
    beginLoading({ commit }) {
        commit('BEGIN_LOADING')
    },
    endLoading({ commit }) {
        commit('END_LOADING')
    },
    modalLoading({ commit }) {
        commit('MODAL_LOADING')
    },
}

const getters = {}

const loadingStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default loadingStore
