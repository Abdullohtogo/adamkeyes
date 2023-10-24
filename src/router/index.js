import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        path:'/',
        name:'Home',
        component:()=>import('../Pages/HomePage.vue')
    },
    {
        path:'/player',
        name:'Player',
        component:()=>import('../Pages/player.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router