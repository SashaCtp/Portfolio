import './css/style.scss'

import { createApp, h } from 'vue'
import App from './App.vue'

import { createRouter,  createWebHistory } from 'vue-router'

// Routes
import Home from './views/Home.vue'
import Project from './views/Project.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/project/:id', component: Project},
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to: any, from: any, savedPosition: any) : any {
        return { x: 0, y: 0 }
    }
})

const app = createApp({
    el: '#app',
    render: () => h(App)
})

app.use(router)

app.mount('#app')
