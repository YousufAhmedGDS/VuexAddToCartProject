<template>
  <div class="container" v-if="product">
      <div class=" rounded-xl overflow-hidden shadow-lg bg-color text-white mb-10 flex">
      <img class="w-full" src="https://source.unsplash.com/random/200x200?sig=1" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">
            <h1>{{product.title}}</h1>
          </div>
          <p class="text-white text-base">
            ${{product.price}}
          </p>
          <p class="mb-10">{{product.description}}</p>
          <div class="flex justify-between">
              <input type="text" class="w-10 text-center text-black">
              <button class="addButton p-2 rounded-xl" @click="addToCart()">Add To Cart</button>
          </div>
          <p class="w-96 p-5">{{product.longdescription}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['id'],
      computed: {
          product() {
              return this.$store.state.product;
          }
      },
    mounted() {
        this.$store.dispatch('getProduct', this.id);
    },
    methods: {
        addToCart() {
          this.$store.dispatch("addProductToCart", {
            product: this.product,
            quantity: 1,
          });
        },
    },
}
</script>

<style scoped>
.addButton{
  background: #42b983;
}
.container {
  display: flex;
  margin: 30px 160px 30px 160px;
  justify-content: space-between;
  align-items: center;
}
.bg-color {
  background-color: #0e0e18;
}
</style>