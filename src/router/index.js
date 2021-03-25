import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Experts from '../views/Experts.vue'
import Contacts from '../views/Contacts.vue'
import Info from '../views/Info.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },

    {
        path: '/contacts',
        name: 'Contacts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contacts.vue')
    }, {
        path: '/experts',
        name: 'Experts',
        component: Experts
    },

    {
        path: '/info',
        name: 'Info',
        component: Info
    }, {
        path: '/mine',
        name: 'Mine',
        component: Mine
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router