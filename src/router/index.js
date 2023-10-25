import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        path:'/',
        name:'Home',
        component:()=>import('../pages/HomePage.vue')
    },
    {
        path:'/player',
        name:'Player',
        component:()=>import('../pages/player.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router