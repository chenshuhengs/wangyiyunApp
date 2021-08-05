import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/views/layout'),
        children: [
            {
                path: '/home',
                redirect: '/home/recommend',
                component: () => import('@/views/home'),
                children: [
                    {
                        path: '/home/recommend',
                        component: () => import('@/views/home/recommend'),
                        meta: {
                            id: 1,
                            show: true,
                            title: '推荐',
                            path: '/home/recommend',
                        },
                    },
                    {
                        path: '/home/songsheet',
                        component: () => import('@/views/home/songSheet'),
                        meta: {
                            id: 2,
                            show: true,
                            title: '歌单',
                            path: '/home/songsheet',
                        },
                    },
                ],
            },
            {
                path: '/videoMv',
                name: 'videoMv',
                component: () => import('@/views/videoMv'),
            },
            {
                path: '/radioStation',
                name: 'radioStation',
                component: () => import('@/views/radioStation'),
            },
            {
                path: '/my',
                redirect: '/my/myInit',
                component: () => import('@/views/my'),
                children: [
                    {
                        path: '/my/myInit',
                        name: 'myInit',
                        component: () => import('@/views/my/myInit'),
                        meta: {
                            id: 3,
                            show: true,
                            title: '我的',
                            path: '/my/myInit',
                        },
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        component: () => import('@/views/login'),
    },
]

const router = new VueRouter({
    routes,
})

// 路由拦截 router.js
// router.afterEach((to, from) => {
//     // console.log(to, from);
//     if (!(from.path === '/' && from.name === null)) {
//         setLocalRoute(to, from)
//     }
// })

// function setLocalRoute(to, from) {
//     // 本地已访问页面路由,存5条
//     const localRoute = (window.myVue.localRoute = window.myVue.localRoute || [])
//     const from_index = localRoute.indexOf(from.path)
//     const to_index = localRoute.indexOf(to.path)
//     if (from_index < 0) {
//         localRoute.unshift(from.path)
//         to_index >= 0 && localRoute.splice(to_index, 1)
//     }
//     if (localRoute.length > 5) {
//         localRoute.splice(0, 1)
//     }
// }

export default router
