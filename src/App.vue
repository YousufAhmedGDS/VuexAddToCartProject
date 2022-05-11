<template>
  <div id="app">
    <div id="nav">
      <app-nav/>
    </div>
    <div class="mt-32">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppNav from "./components/AppNav.vue"

export default ({
  components: {
    AppNav
  }
  
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@200;300;400;500&family=Ubuntu&display=swap');
body{
  background: #221f1f;
font-family: 'Ubuntu', sans-serif;
}
</style>