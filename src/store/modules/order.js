export default {
    namespaced: true,
    state: {
        money: 2021
    },
    mutations: {
        setMoney(state,val){
            state.money=val
        }
    }
}