import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import RegistrarProducto from '../components/RegistrarProducto.vue';
import MostrarProducto from '../components/MostrarProducto.vue';
import EditarProducto from '../components/EditarProducto.vue';

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
    },
    {
        path:'/MostrarProducto',
        name:'MostrarProducto',
        component:MostrarProducto,
    },
    {
        path: "/EditarProducto",
        name: "EditarProducto",
        component:EditarProducto,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router