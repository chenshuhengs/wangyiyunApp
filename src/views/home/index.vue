<template>
    <section class="home">
        <HeaderBar>
            <ul>
                <li :class="`${routeId === item.meta.id ? 'active' : 'noActive'}`" v-for="(item, index) in routeList" :key="index">
                    <button @click="navigate(item.path)">
                        <span class="name">{{ item.meta.title }}</span>
                    </button>
                </li>
            </ul>
            <Search />
        </HeaderBar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </section>
</template>

<script>
    import Recommend from './recommend'
    export default {
        name: 'Home',
        components: {
            // Recommend,
        },
        data() {
            return {
                titleList: [{ title: '推荐' }, { title: '歌单' }],
            }
        },
        computed: {
            routeId() {
                return this.$route.meta.id
            },
            routeList() {
                return this.$router.options.routes[0].children[0].children.filter(e => e.meta && e.meta.show)
            },
        },
        methods: {
            routeLink() {
                this.$router.push('/home/recommend')
            },
            navigate(path) {
                this.$router.push(path)
            },
        },
    }
</script>

<style lang="less" scoped></style>
