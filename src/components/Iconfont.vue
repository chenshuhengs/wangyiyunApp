<template>
    <div class="iconfont">
        <i :class="`iconfont icon-${iconName}`" :style="{ fontSize: fontSize + 'px' }"></i>
    </div>
</template>

<script>
    export default {
        name: 'iconfont',
        props: {
            iconName: {
                type: String,
                required: true,
            },
            fontSize: {
                type: Number,
                default: 12,
            },
        },
    }
</script>

<style lang="less" scoped>
    .iconfont {
        display: inline-block;
    }
</style>
