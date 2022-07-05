<template>
  <div class="pl-6 flex justify-evenly font-bold border-2 py-3 bg-[#207296] text-white">
    <router-link to="/">Inicio</router-link>
    <router-link to="/RegistrarProducto">Registrar Producto</router-link>
    <router-link to="/MostrarProducto">Mostrar Producto</router-link>
  </div>
  <router-view />
</template>

<script>
import RegistrarProducto from "./components/RegistrarProducto.vue";
export default {
  name: 'App',
  components:{
    RegistrarProducto,
  },
};
</script>