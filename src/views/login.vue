<template>
    <section class="login">
        <div class="header"></div>
        <div class="content">
            <van-form @submit="onSubmit" v-if="phoneLogin">
                <van-field v-model="form.userName" name="手机号" label="手机号" placeholder="输入手机号" :rules="rules" />
                <van-field v-model="form.passWord" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true }]" />
                <div style="margin: 16px">
                    <van-button round block type="info" native-type="submit">登录</van-button>
                </div>
            </van-form>
        </div>
        <div class="footer">
            <button @click="loginPhoneOk" v-if="!phoneLogin">手机号登录</button>
            <button @click="qrCodeLoginOk" v-if="!QRCodeLogin">二维码登录</button>
        </div>
    </section>
</template>

<script>
    import api from '@/api'
    import { createNamespacedHelpers } from 'vuex'
    const myInitStore = createNamespacedHelpers('myInitStore')
    export default {
        name: 'login',
        data() {
            return {
                phoneLogin: true,
                QRCodeLogin: false,
                form: {
                    userName: '',
                    passWord: '',
                },
                rules: [{ pattern: /^1[3456789]\d{9}$/, required: true }],
            }
        },
        methods: {
            ...myInitStore.mapActions({ setToken: 'setToken', setLoginState: 'setLoginState', setUserId: 'setUserId' }),
            async onSubmit(values) {
                const res = await api.loginApi.phoneLogin({ phone: this.form.userName, password: this.form.passWord })
                console.log(res.data)
                if (res.data.code === 200) {
                    this.setToken(res.data.token)
                    this.setUserId(res.data.account.id)

                    let account = JSON.stringify(res.data.account)
                    let profile = JSON.stringify(res.data.profile)
                    this.setLoginState({ account: account, profile: profile })

                    localStorage.setItem('account', account)
                    localStorage.setItem('profile', profile)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('userId', res.data.account.id)

                    this.$router.replace('/my')
                }
            },
            loginPhoneOk() {
                this.phoneLogin = true
                this.QRCodeLogin = false
            },
            qrCodeLoginOk() {
                this.phoneLogin = false
                this.QRCodeLogin = true
            },
        },
    }
</script>

<style lang="less" scoped>
    @import url('../assets/css/mixin.less');
    .login {
        width: 100%;
        height: 100vh;
        flex-grow: 0;
        flex-shrink: 0;
        background-image: url('../assets/images/login.png');
        background-size: cover;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        .header {
            flex: 1;
        }
        .content {
            flex: 1;
            margin: 0 20px;
        }
        .footer {
            height: 170px;
            .flex(center, space-around,none);
            button {
                font-size: 14px;
                color: #4e4d4d;
                border-radius: 5px;
                letter-spacing: 3px;
                padding: 8px 13px;
                background-color: #fff;
                &:active {
                    // .hideAnimation();
                    display: none;
                    background-color: rgb(241, 235, 235);
                }
            }
        }
    }
</style>
