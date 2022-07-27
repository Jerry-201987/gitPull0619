// import createPersistedState from 'vuex-persistedstate'

export default {
    namespaced: true,
    state: {
        firstName: "张",
        lastName: "楚岚",
        age: 27,
        userlist: []
    },
    getters: {
        fullName({ firstName, lastName }) {
            return firstName + lastName
        }
        // fullName(state) {
        //     return state.firstName + state.lastName
        // }
    },
    mutations: {
        setAge(state, val) {
            if (val < 1) return
            if (val > 100) return
            state.age = val
        },
        cgName1(state) {
            state.lastName = '王也'
        },
        cgName2(state, val) {
            state.lastName = val
        }
        // setUserList(state, payload) {
        //     state.userlist = payload
        // }
    },
    actions: {
        // async getUserAge({ commit }) {
        //     let res = await fetch('http://47.92.50.43:8888/sys/jslist').then(res => res.json())
        //     commit('setUserList', res)
        //     return res
        // },
        aCgName1(context, n) { //context相当于$store
            setTimeout(() => {
                context.commit('cgName1', n)
            }, 200);
        },
        aCgName2({ commit }, n) {
            console.log('{commit}', { commit })
            setTimeout(() => {
                commit('cgName2', n)
            }, 200);
        }
    },
    // plugins: [createPersistedState({
    //     storage: window.sessionStorage,
    //     reducer(val) {
    //         return {
    //             age: val.age
    //         }
    //     }
    // })]
}