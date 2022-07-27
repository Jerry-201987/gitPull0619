import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
// const Home1 = () => import(/* webpackChunkName: 'Home1' */ '~~/Home1')
// const Home2 = () => import(/* webpackChunkName: 'Home2' */ '~~/page2/Home2')
// const Home3 = () => import(/* webpackChunkName: 'Home3' */ '~~/page3/Home3')
// const Home = resolve => require(['~~/Home'], resolve)
// const Home = r => require.ensure([], () => r(require('~~/Home')), 'Home')

let context = require.context('../page', true, /\.vue$/)
// context.keys().forEach(v => {
//     // if (v.startsWith('./page2/')) return
//     if ((/\.\/(page2)\/(.+)\.vue$/).test(v)) return 
//     const components = context(v).default
//     console.log('components', components)
// })

let components = context.keys().reduce((component, c_path) => {
    let c_name = c_path.replace(/\.\/(.+)\.vue$/, '$1')
    if (c_name.includes('/')) {
        let arr = c_name.split('/')
        c_name = arr[arr.length - 1]
    }
    component.push(c_name)
    return component
}, [])
components = components.map((r, i) => () => import('~~/' + (i > 0 ? `page${i + 1}/` : '') + `Home${i + 1}`))

let router = new VueRouter({
    routes: [
        {
            path: "/",
            meta: { title: "首页" },
            // component: Home1
            component: components[0]
        },
        {
            path: "/home2",
            meta: { title: "首页2" },
            // component: Home2
            component: components[1]
        },
        {
            path: "/home3",
            meta: { title: "首页3" },
            // component: Home3
            component: components[2]
        }
    ]
})

//路由跳转之前会被此处拦截
router.beforeEach((to, from, next) => {
    next()
})

//路由跳转之后会被此处拦截
router.afterEach(() => {
})

export default router