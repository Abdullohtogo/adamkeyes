import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        path:'/',
        name:'Home',
        component:()=>import('../Pages/HomePage.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router