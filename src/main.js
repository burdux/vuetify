import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

//if user logged in we router him to todos page, if not we router him to login page
store.state.loggedIn ? router.push('todos') : router.push('signin')

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
