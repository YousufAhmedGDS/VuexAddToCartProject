<template>
  <div class="container">
    <div class="p-20 flex flex-wrap justify-around">
      <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-color text-white mb-10 w-72" v-for="(carts, idx) in carts" :key="idx">
      <img class="w-full h-40" src="https://source.unsplash.com/random/200x200?sig=1" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">
            <router-link :to="{name: 'Product', params:{id: 23}}">Product Tile</router-link>
          </div>
          <p class="text-white text-base">
            $23
          </p>
          <p class="mb-10">Lorem ipsum dolor sit amet.</p>
          <button class="addButton p-2 rounded-xl">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      carts: ['','','','','','',''],
    }
  }
};
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
