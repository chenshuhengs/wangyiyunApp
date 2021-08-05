import Vue from 'vue'
import Toast from './Toast'

/*
    ToastConstructor 实际上是 Toast 组件的构造函数，类似于 Vue 构造函数，所以我们可以使用 new 来进行实例化
*/

const ToastConstructor = Vue.extend(Toast)

// 实例化 Toast 组件
/*
    toastDom 是我们 toast 组件实例，它上面有很多实例属性
*/

function showToast(text, duration = 2000) {
    const toastDom = new ToastConstructor({
        el: document.createElement('div'),
        data() {
            return {
                text: text,
                show: true,
            }
        },
    })

    document.body.appendChild(toastDom.$el)

    setTimeout(() => {
        toastDom.show = false
    }, duration)
}

function toastRegistry() {
    Vue.prototype.$toast = showToast
}

export default toastRegistry
