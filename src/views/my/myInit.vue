<template>
    <section class="myinit">
        <HeaderBar>
            <ul>
                <li :class="`${routeId === item.meta.id ? 'active' : 'noActive'}`" v-for="(item, index) in routeList" :key="index">
                    <button @click="navigate(item.path)">
                        <span class="name">{{ item.meta.title }}</span>
                    </button>
                </li>
            </ul>
            <Search></Search>
        </HeaderBar>
        <div class="user_panel" v-if="!token">
            <div class="not_login">
                <button @click="login">
                    <Iconfont iconName="wode-copy"></Iconfont>
                    <span>立即登录</span>
                </button>
                <p>立即登录畅想高品质</p>
            </div>
        </div>
        <div class="login" v-else>
            <div class="avatar">
                <img :src="profile.avatarUrl" alt="" />
            </div>
            <div class="username">
                <span>{{ profile.nickname }}</span>
            </div>
            <div class="details">
                <span>关注{{ profile.followeds }}</span>
                <span>粉丝{{ profile.follows }}</span>
            </div>
        </div>
        <ul class="module">
            <li v-for="(item, index) in musicModule" :key="index">
                <Iconfont :iconName="item.iconFont" :fontSize="28" />
                <p>{{ item.title }}</p>
                <p v-if="token" class="quantity">{{ item.quantity ? item.quantity : 0 }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
    import api from '@/api'
    import { createNamespacedHelpers } from 'vuex'
    const myInitStore = createNamespacedHelpers('myInitStore')
    export default {
        name: 'myInit',
        data() {
            return {
                userId: '',
                account: '',
                profile: '',
                musicModule: [
                    {
                        title: '喜欢',
                        quantity: '',
                        iconFont: 'xihuan1',
                    },
                    {
                        title: '歌单',
                        quantity: '',
                        iconFont: 'yinlegedanyinfu',
                    },
                    {
                        title: '电台',
                        quantity: '',
                        iconFont: 'ai-video',
                    },
                    {
                        title: 'MV',
                        quantity: '',
                        iconFont: 'dianshiju',
                    },
                ],
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.userId = localStorage.getItem('userId')
                this.getLikeList()
                this.getUserSubcount()
                this.account = JSON.parse(localStorage.getItem('account'))
                this.profile = JSON.parse(localStorage.getItem('profile'))

                this.setToken(localStorage.getItem('token'))
                this.setLoginState({ account: this.account, profile: this.profile })
            }
        },
        computed: {
            ...myInitStore.mapState({
                token: 'token',
                likeIds: 'likeIds',
            }),
            routeId() {
                return this.$route.meta.id
            },
            routeList() {
                return this.$router.options.routes[0].children[3].children.filter(e => e.meta && e.meta.show)
            },
        },
        methods: {
            ...myInitStore.mapActions({
                setToken: 'setToken',
                setLikeIds: 'setLikeIds',
                setLoginState: 'setLoginState',
            }),
            login() {
                this.$router.push('/login')
            },
            navigate(path) {
                this.$router.push(path)
            },

            async getLikeList() {
                const res = await api.userApi.getLikeList(this.userId)
                this.setLikeIds(res.data.ids)
                this.musicModule[0].quantity = res.data.ids.length
            },

            async getUserSubcount() {
                const res = await api.userApi.getUserSubcount()
                this.musicModule[1].quantity = res.data.artistCount
                this.musicModule[2].quantity = res.data.djRadioCount
                this.musicModule[3].quantity = res.data.mvCount
            },
        },
    }
</script>

<style lang="less" scoped>
    @import url('../../assets/css/mixin.less');
    .myinit {
        .user_panel {
            width: 100%;
            height: 80px;
            margin: 20px 0;
            border-radius: 10px;
            background-color: #fff;
            .flex(center,none,none);
            .not_login {
                display: flex;
                button {
                    margin: 0 20px 0 30px;
                    display: flex;
                    color: #fff;
                    background-color: #5cce9f;
                    padding: 5px 10px;
                    border-radius: 25px;
                    span {
                        margin-left: 10px;
                        font-size: 14px;
                        letter-spacing: 2px;
                    }
                    &:active {
                        background: #81e2ba;
                    }
                }
                p {
                    color: rgb(131, 130, 130);
                    .flex(center, none, none);
                }
            }
        }
        .login {
            width: 100%;
            height: 80px;
            margin: 20px 0;
            padding: 12px 20px;
            border-radius: 10px;
            background-color: #fff;
            position: relative;
            .avatar {
                position: absolute;
                left: 23px;
                top: -15px;
                img {
                    width: 50px;
                    border-radius: 50%;
                }
            }
            .username {
                font-size: 16px;
                padding-left: 80px;
            }
            .details {
                margin-top: 15px;
                font-size: 14px;
                span {
                    letter-spacing: 3px;
                    padding-right: 10px;
                    margin-right: 10px;
                    border-right: 1px solid #e0e0e0;
                }
            }
        }
        .module {
            display: flex;
            justify-content: space-around;
            li {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 70px;
                text-align: center;
                .iconfont {
                    display: inline-block;

                    color: #5cce9f;
                }
                .quantity {
                    color: #9b9797;
                }
            }
        }
    }
</style>
