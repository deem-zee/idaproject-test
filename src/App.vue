<template>
  <div id="app">
    <add-product></add-product>
    <product-list></product-list>
  </div>
</template>

<script>
import  AddProduct  from './components/AddProduct.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components: {
    'add-product': AddProduct,
    'product-list':ProductList
  },
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgba(255, 254, 251, 0.8);
  display: grid;
  grid-auto-columns: 1fr, 3fr;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  

}
</style>
