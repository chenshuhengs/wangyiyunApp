<template>
    <section class="recommend">
        <Loading />
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in banners" :key="index">
                <img :src="item.pic" alt="" />
                <span :style="{ backgroundColor: item.titleColor ? item.titleColor : '' }">{{ item.typeTitle }}</span>
            </van-swipe-item>
        </van-swipe>
        <!-- <van-loading color="#5cce9f" size="40" type="spinner" v-show="showLoading" /> -->
    </section>
</template>

<script>
    import api from '@/api'
    export default {
        name: 'recommend',
        data() {
            return {
                banners: [],
            }
        },
        created() {
            this.getBanner()
        },
        methods: {
            async getBanner() {
                try {
                    const res = await api.homeApi.banner(1)
                    if (res.data.code === 200) {
                        this.banners = res.data.banners
                    }
                } catch (error) {
                    this.showLoading = false
                }
            },
        },
    }
</script>

<style lang="less" scoped>
    @import url('../../assets/css/mixin.less');
    .recommend {
        height: 100vh - 20px;
        margin-top: 15px;

        .my-swipe .van-swipe-item {
            border-radius: 5px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }

            span {
                color: #fff;
                position: absolute;
                right: 0;
                bottom: 0;
                padding: 3px 5px;
                display: inline-block;
                border-top-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
        .van-loading {
            height: 100%;
            .flex();
        }
    }
</style>
