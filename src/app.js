import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './css/style.scss'

import Home from './views/Home.vue'
import Parcours from './views/Parcours.vue'
import Project from './views/Project.vue'
import NotFound from './views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/parcours', component: Parcours },
    { path: '/project/:id', component: Project},
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})