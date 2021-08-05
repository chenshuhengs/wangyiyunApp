<template>
    <div class="toast" v-if="show">
        <div>{{ text }}</div>
    </div>
</template>

<script>
    export default {
        name: 'toast',
    }
</script>

<style lang="less" scoped>
    .toast {
        position: fixed;
        top: calc(50% - 20px);
        left: calc(50% - 50px);
        width: 100px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 10px;
        box-sizing: border-box;
    }
</style>
