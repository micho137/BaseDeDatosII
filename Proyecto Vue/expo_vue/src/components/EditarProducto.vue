<template>
    <div class="m-5 flex flex-col items-center">
        <div class=" flex items-center justify-center">
            <div class="border-white border-dotted border-2 px-2">
                <div class="items-center justify-center flex flex-col">
                    <h2 class="font-bold text-2xl my-2 text-white">Nombre del Producto</h2>
                    <input type="text" class="p-2 rounded border border-red-500 text-center font-semibold"
                        v-model="name">
                </div>
                <div class="items-center justify-center flex flex-col ">
                    <h2 class="font-bold text-2xl my-2 text-white">Descripcion del Producto</h2>
                    <input type="text" class="p-2 rounded border border-red-500 text-center font-semibold"
                        v-model="descripcion">
                </div>
                <div class="items-center justify-center flex flex-col ">
                    <h2 class="font-bold text-2xl my-2 text-white">Precio del Producto</h2>
                    <input type="text" class="p-2 rounded border border-red-500 text-center font-semibold"
                        v-model="precio">
                </div>
                <div class="items-center justify-evenly flex ">
                    <button v-on:click="goList()"
                        class="border-2 border-red-600 p-2 rounded-2xl bg-red-400 text-white font-semibold my-4 focus:bg-white focus:text-red-600 focus:border-2-white ">
                        Cancelar
                    </button>
                    <button v-on:click="Editar()" class="border-2 border-green-600 p-2 rounded-2xl bg-green-400 text-white font-semibold my-4 focus:bg-white focus:text-red-600 focus:border-2-white">
                        Editar
                    </button>
                </div>
            </div>
            <div>
            </div>
            <div class="button_class mx-4 mb-2">

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props: {
        id: String,
        name: String,
        descripcion: String,
        precio: String,
    },
    data: () => {
        return {};
    },
    methods: {
        goList() {
            this.$router.push("MostrarProducto");
        },
        createProduct(name, descripcion, precio,) {
            var Product = {
                nombre: name,
                descripcion: descripcion,
                precio: precio,
            };
            return Product;
        },
        Editar() {
            let Product = this.createProduct(
                this.name,
                this.descripcion,
                this.precio,
            );
            console.log(Product);
            axios
                .put(
                    "http://localhost:8000/api/producto/" + this.id,
                    Product
                )
                .then((response) => {
                    this.request = response.status;
                    this.goList();
                })
                .catch((e) => console.log(e));
        },
    },
};
</script>