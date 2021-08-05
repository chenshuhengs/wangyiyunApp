<template>
    <section class="layout">
        <main class="main" ref="main">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </main>
        <footerBar></footerBar>
    </section>
</template>

<script>
    import footerBar from './index'
    export default {
        name: 'layout',
        components: {
            footerBar,
        },
        data() {
            return {}
        },
    }
</script>

<style lang="less" scoped>
    .layout {
        .main {
            padding: 15px;
        }
    }
</style>
