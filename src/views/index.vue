<template>
    <footer class="footerbar">
        <!-- <van-tabbar route active-color="#04C25A" inactive-color="#a8a5a5">
            <van-tabbar-item replace :class="`iconfont icon-${item.icon}`" v-for="(item, index) in routerList" :key="index" :to="item.path">
                {{ item.title }}
            </van-tabbar-item>
        </van-tabbar> -->
        <ul>
            <router-link v-for="(item, index) in routerList" :key="index" :to="item.path" @click="navigate(item.path)">
                <button>
                    <i :class="`iconfont icon-${item.icon}`"></i>
                    <span class="name">{{ item.title }}</span>
                </button>
            </router-link>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: 'FooterBar',
        data() {
            return {
                routerList: [
                    {
                        title: '首页',
                        icon: 'yinle',
                        path: '/home',
                    },
                    {
                        title: '视频',
                        icon: 'shipin',
                        path: '/videoMv',
                    },
                    {
                        title: '电台',
                        icon: 'diantai',
                        path: '/radioStation',
                    },
                    {
                        title: '我的',
                        icon: 'wode',
                        path: '/my',
                    },
                ],
            }
        },
        methods: {
            navigate(path) {
                this.$router.push(path)
            },
        },
    }
</script>

<style lang="less" scoped>
    @import url('../assets/css/mixin.less');
    .footerbar {
        position: fixed;
        left: 0;
        bottom: 0;
        height: 40px;
        width: 100%;
        ul {
            .flex(center,center,row);
            width: 100%;
            height: 40px;
            a {
                width: calc(~'100% / 4');
                button {
                    border: none;
                    background: transparent;
                    width: 100%;
                    .flex();
                    i {
                        font-size: 18px;
                    }
                }
            }
            .router-link-active {
                color: rgb(4, 221, 105);
            }
        }
    }
</style>
