<template>
    <div class="m-5 flex flex-col items-center">
        <div class=" flex items-center justify-center">
            <div class="flex items-center justify-center">
                <!--img src="../svgs/bx-archive.svg" class="w-96"-->
            </div>
            <form @submit.prevent="onCreatePost">
            <div class="border-white border-dotted border-2 px-2">
                <div class="items-center justify-center flex flex-col">
                    <h2 class="font-bold text-2xl my-2 text-white">Nombre del Producto</h2>
                    <input type="text" class="p-2 rounded border border-red-500 text-center font-semibold" v-model="name">
                </div>
                <div class="items-center justify-center flex flex-col ">
                    <h2 class="font-bold text-2xl my-2 text-white">Descripcion del Producto</h2>
                    <input type="text" class="p-2 rounded border border-red-500 text-center font-semibold" v-model="descripcion">
                </div>
                <div class="items-center justify-center flex flex-col ">
                    <h2 class="font-bold text-2xl my-2 text-white">Precio del Producto</h2>
                    <input type="text" class="p-2 rounded border border-red-500 text-center font-semibold" v-model="precio">
                </div>
                <div class="items-center justify-center flex flex-col">
                    <button
                        class="border-2 border-red-600 p-2 rounded-2xl bg-red-400 text-white font-semibold my-4 focus:bg-white focus:text-red-600 focus:border-2-white ">Registrar
                        Producto</button>
                </div>
            </div>
            </form>
        </div>
        <div class="text-white text-2xl font-semibold border-2 p-3 rounded-lg bg-green-400 border-green-800" v-if="onSuccess">
                    Producto registrado con exito
        </div>
        <div class="text-white text-2xl font-semibold border-2 p-3 rounded-lg bg-red-400 border-red-800" v-if="failSuccess">
                    Debe llenar todos los datos!
        </div>
    </div>
</template>



<script>
import axios from 'axios';
export default {
    data(){
        return{
            nombre: '',
            descripcion: '',
            precio: '',
            onSuccess: false,
            failSuccess:false,
        }
    },
    methods: {
        onCreatePost(){
            if(this.name!==''&&this.descripcion!==''&&this.precio!==''){
            axios.post(`http://localhost:8000/api/producto`,
                {nombre:this.name,descripcion:this.descripcion,precio:this.precio}).then((Response)=>{
                this.onSuccess=true;
                console.log(Response)
                this.name='';
                this.descripcion='';
                this.precio='';
                setTimeout(() => {
                    this.onSuccess=false;
                }, 2000);
            });
            }else{
                this.failSuccess=true;
                setTimeout(() => {
                    this.failSuccess=false;
                }, 2000);
            }
        }
    }
};
</script>