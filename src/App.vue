<template>
    <main class="main" id="app">
        <transition :name="direction">
            <router-view class="page" />
        </transition>
    </main>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            // 动态设置过渡样式
            direction: function () {
                const currentPath = this.$route.path
                const localRoute = (window.myVue && window.myVue.localRoute) || []
                const index = localRoute.indexOf(currentPath)
                let tranName = ''

                if (localRoute.length === 0) {
                    tranName = 'fade' // 首页，渐显
                } else if (index >= 0) {
                    tranName = 'page-back' // 回退，右划
                } else {
                    tranName = 'page-go' // 进入新页面，左划
                }
                return tranName
            },
        },
    }
</script>

<style lang="less">
    html,
    body {
        margin: 0;
        // 
        background: #f3f3f3;
    }
    .page {
        // position: absolute;
        width: 100%;
        height: 100%;
        transition: all 0.8s ease-in-out;
    }
    .page-go-enter-active {
        transform: translate3d(100%, 0, 0);
    }
    .page-go-enter-to {
        transform: translate3d(0, 0, 0);
    }
    .page-go-leave-active {
        transform: translate3d(0, 0, 0);
    }
    .page-go-leave-to {
        transform: translate3d(-100%, 0, 0);
    }
    .page-back-enter-active {
        transform: translate3d(-100%, 0, 0);
    }
    .page-back-enter-to {
        transform: translate3d(0, 0, 0);
    }
    .page-back-leave-active {
        transform: translate3d(0, 0, 0);
    }
    .page-back-leave-to {
        transform: translate3d(100%, 0, 0);
    }
</style>
