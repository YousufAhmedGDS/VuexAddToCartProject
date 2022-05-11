<template>
  <div class="container">
      <div class=" rounded-xl overflow-hidden shadow-lg bg-color text-white mb-10 flex">
      <img class="w-full" src="https://source.unsplash.com/random/200x200?sig=1" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">
            <router-link :to="{name: 'Product', params:{id: 23}}">Product Tile</router-link>
          </div>
          <p class="text-white text-base">
            $23
          </p>
          <p class="mb-10">Lorem ipsum dolor sit amet.</p>
          <div class="flex justify-between">
              <input type="text" class="w-10 text-center text-black">
              <button class="addButton p-2 rounded-xl">Add To Cart</button>
          </div>
          <p class="w-96 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo quis qui.  Omnis distinctio quis illum voluptate ipsa sequi recusandae quam non,  porro pariatur aliquid quas adipisci neque illo laboriosam quaerat mollitia.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['id']
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