<template>
  <div id="app">
    <add-product></add-product>
    <!-- <product-sort></product-sort> -->
    <product-list id="productList"></product-list>
  </div>
</template>

<script>
import  AddProduct  from './components/AddProduct.vue'
import ProductList from './components/ProductList.vue'
// import ProductSort from './components/ProductSort.vue'
// eslint-disable-next-line no-unused-vars
import store from './store/index';

export default {
  name: 'App',
  components: {
    'add-product': AddProduct,
    'product-list':ProductList,
    // 'product-sort': ProductSort,
  },
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
}
</script>


<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:  #E5E5E5;
  display: flex;
  flex-direction: row;
  // width: 100%;
  padding-bottom: 80px;
  padding-right:32px;
}

// #productList {
//   display: flex;
// }


</style>
