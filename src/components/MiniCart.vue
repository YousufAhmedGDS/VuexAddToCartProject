<template>
  <div>
    <div v-for="item in cart" :key="item.product.id">
      <div class="flex justify-between text-black p-4">
      <h1 class="text-xl">{{item.product.title}}</h1>
      <p class="bg-red-500 text-white px-2 rounded-lg">Remove</p>
    </div>
    <div class="flex justify-between text-black p-4">
      <p class="text-black">(qty: {{item.quantity}})  (price: ${{item.product.price}})</p>
    </div>
    <hr>
    </div>
    <hr />
    <div class="flex justify-between text-black p-4">
      <h1 class="text-xl">Total: ${{cartTotalPrice}}</h1>
      <p class="bg-red-500 text-white px-2 rounded-lg">Clear Cart</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'MiniCart',
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        cartTotalPrice(){
          return this.$store.getters.cartTotalPrice;
        }
    },
    mounted(){
      this.$store.dispatch('getCartItems');
    }
};
</script>

<style>
</style>