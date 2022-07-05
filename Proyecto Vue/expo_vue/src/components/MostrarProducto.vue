<template>
  <div class="
      w-full
      flex flex-col
      items-center
      justify-center
    ">
    <div class="">
      <h2 class="text-center font-bold font-sans my-4 text-3xl text-white">
        Lista de Productos
      </h2>
    </div>
    <thead>
      <tr class="bg-[#207296] border-2 border-white">
        <th class="text-center border p-2 border-white">ID</th>
        <th class="text-center border p-2 border-white">Nombre</th>
        <th class="text-center border p-2 border-white">Descripcion</th>
        <th class="text-center border p-2 border-white">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-[#08394e]" v-for="product in Products" :key="product.id">
        <td class="text-white text-center border border-white p-2">
          {{ product.id }}
        </td>
        <td class="text-white text-center border border-white p-2">
          {{ product.nombre }}
        </td>
        <td class="text-white text-center border border-white p-2">
          {{ product.descripcion }}
        </td>
        <td class="text-white text-center border border-white p-2">
          {{ product.precio }}
        </td>
        <td class="text-white border border-white p-2">
          <div class="flex flex-row justify-center items-center gap-x-2">
            <button v-on:click="showDeleteAlert(product.id)" class="
                  bg-red-500
                  px-2
                  py-2
                  rounded-xl
                  text-sm text-white
                  font-semibold
                ">
              Eliminar
            </button>
            <button v-on:click="
              goEdit(
                product.id,
                product.nombre,
                product.descripcion,
                product.precio,
              )
            " class="
                  bg-green-500
                  px-2
                  py-2
                  rounded-xl
                  text-sm text-black
                  font-semibold
                ">
              Editar
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Listar Productos",
  data: () => {
    return {
      Products: null,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    goEdit(id,name,descripcion,precio,) {
      this.$router.push({
        name: "EditarProducto",
        params: {
          id: id,
          name: name,
          descripcion: descripcion,
          precio: precio,
        },
      });
    },
    getProducts() {
      axios
        .get("http://localhost:8000/api/producto")
        .then((response) => {
          console.log(response);
          this.Products = response.data;
        })
        .catch((e) => console.log(e));
    },
    async deleteProduct(id) {
      await axios.delete(
        "http://localhost:8000/api/producto/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      this.getProducts();
    },
    showDeleteAlert(id) {
      // Use sweetalert2
      this.$swal({
        title: "¿Estás seguro de hacerlo?",
        text: "No podrás revertirlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, quiero borrarlo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduct(id);
          this.$swal("Eliminado!", "El registro ha sido borrado", "success");
        }
      });
    },
  },
};
</script>