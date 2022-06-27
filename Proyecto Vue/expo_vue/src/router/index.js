import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import RegistrarProducto from '../components/RegistrarProducto.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home,
    },
    {
        path:'/RegistrarProducto',
        name:'RegistrarProducto',
        component:RegistrarProducto,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router