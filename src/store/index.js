import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        account: {
            username: "oracle",
            password: "oracle"
        },
        loggedIn: false
    },
    mutations: {},
    actions: {},
    modules: {}
})
