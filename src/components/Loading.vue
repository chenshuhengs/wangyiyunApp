<template>
    <div class="spinner" v-show="isLoading">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const loadingStore = createNamespacedHelpers('loadingStore')
    export default {
        name: 'Loading',
        computed: {
            ...loadingStore.mapState({
                isLoading: 'isLoading',
            }),
        },
    }
</script>

<style lang="less" scoped>
    @import url('../assets/css/mixin.less');
    .spinner {
        height: 40px;
        .flex(center,center,none);
        margin: 10px 0;
        .rect2,
        .rect3,
        .rect4 {
            margin: 0 2px;
        }
        div {
            background-color: #5cce9f;
            height: 100%;
            width: 3px;
            display: inline-block;
            animation: mymove 1s infinite ease-in-out;
            &:nth-child(2) {
                animation-delay: -1.1s;
            }
            &:nth-child(3) {
                animation-delay: -1s;
            }
            &:nth-child(4) {
                animation-delay: -0.7;
            }
            &:nth-child(5) {
                animation-delay: -0.9s;
            }
        }
    }
    @keyframes mymove {
        0%,
        40%,
        100% {
            transform: scaleY(0.4);
        }
        20% {
            transform: scaleY(1);
        }
    }
</style>
