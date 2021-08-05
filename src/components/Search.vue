<template>
    <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" />
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {}
        },
    }
</script>

<style lang="less" scoped>
    .search {
        width: 100%;
        position: relative;
        i {
            position: absolute;
            left: 5px;
            top: 5px;
            font-size: 20px;
            color: #a19d9d;
        }
        input {
            width: 100%;
            padding: 8px 5px 8px 30px;
            border: none;
            background: #ecedf1;
            border-radius: 15px;
        }
        input:focus {
            outline: none;
            padding: 8px 5px 8px 30px;
            border: none;
            background: #f5f3f3;
            border-radius: 15px;
        }
    }
</style>
