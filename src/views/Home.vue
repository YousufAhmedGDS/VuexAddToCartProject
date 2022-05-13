<template>
  <div>
    <ProductList v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { ProductList },
  data() {
    return {
      product: ["", "", "", "", "", "", ""],
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style scoped>
.addButton {
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
