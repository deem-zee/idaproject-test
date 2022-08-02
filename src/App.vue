<template>
  <div id="app">
    <add-product class="addProd"></add-product>
    <product-list class="prodList"></product-list>
  </div>
</template>

<script>
import  AddProduct  from './components/AddProduct.vue'
import ProductList from './components/ProductList.vue'
// eslint-disable-next-line no-unused-vars
import store from './store/index';

export default {
  name: 'App',
  components: {
    'add-product': AddProduct,
    'product-list':ProductList,
  },
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
}
</script>


<style lang="scss">
@import url('http://fonts.cdnfonts.com/css/source-sans-pro');
@media screen and (min-width: 1440px) {
  body {
    margin: 0 auto;
  }
  #app {
    font-family: 'Source Sans Pro', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background:  rgba(255, 254, 251, 0.8);
    box-sizing: border-box;
    width: 1440px;
    padding: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

}

@media screen and (min-width: 380px) and (max-width: 1280px) {
  body {
    margin: 0 auto;
  }
  #app {
    font-family: 'Source Sans Pro', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background:  rgba(255, 254, 251, 0.8);
    box-sizing: border-box;
    width: 380px;
    padding: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }

}





</style>
