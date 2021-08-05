export default {
    data() {
        return {
            token: '',
        }
    },
    beforeRouteEnter(to, from, next) {
        if (localStorage.getItem('token')) {
            next(vm => {
                vm.token = localStorage.getItem('token')
            })
        }
        next()
    },
}
