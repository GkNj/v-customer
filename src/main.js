import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

import Customers from './components/Customers'
import about from './components/About'
import add from './components/Add'
import customerDetails from './components/CustomerDetails'
import edit from './components/edit'
//设置路由
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Customers},
        {path: '/about', component: about},
        {path: '/add', component: add},
        {path: '/customer/:id', component: customerDetails},
        {path: '/edit/:id', component: edit}
    ]
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
