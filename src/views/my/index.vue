<template>
    <section class="my">
        <router-view></router-view>
    </section>
</template>

<script>
    import api from '@/api'
    export default {
        name: 'My',
        data() {
            return {}
        },
        created() {
            this.getloginState()
        },
        methods: {
            async getloginState() {
                try {
                    const res = await api.loginApi.loginState()
                    // console.log(res)
                } catch (error) {
                    console.error(error)
                }
            },
        },
    }
</script>

<style lang="less" scoped></style>
