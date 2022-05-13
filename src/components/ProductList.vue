<template>
  <div class="">
    <div class="p-20">
      <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-color text-white mb-10 w-72">
      <img class="w-full h-40" :src="product.image">
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">
            <router-link :to="{name: 'Product', params:{id: product.id}}">{{product.title}}</router-link>
          </div>
          <p class="text-white text-base">
            ${{product.price}}
          </p>
          <p class="mb-10">{{product.description}}</p>
          <button class="addButton p-2 rounded-xl" @click="addToCart()">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['product'],
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