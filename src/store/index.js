import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

let ms = require.context('./modules', false, /\.js$/)
// console.log(ms)

/*方法1*/
// let modules = {}
// ms.keys().forEach(k => {
//     console.log(k)
//     let n = k.substring(2, k.length - 3)
//     console.log(n)
//     modules[n] = ms(k).default
// })

/*方法2*/
// let modules = ms.keys().map(k => ({ [k.substring(2, k.length - 3)]: ms(k).default }))
//     .reduce((t, r) => Object.assign(t, r), {})

/*方法3*/
let modules = ms.keys().reduce((modules, m_path) => {
    let m_name = m_path.replace(/\.\/(.+)\.js/, '$1')
    // console.log(m_name, m_path)
    modules[m_name] = ms(m_path).default
    return modules
}, {})

export default new Vuex.Store({ modules })

/*方法4 原始*/
// import user from './modules/user'
// import order from './modules/order'
// let store = new Vuex.Store({
//     modules: {
//         user,
//         order
//     }
// })
// export default store