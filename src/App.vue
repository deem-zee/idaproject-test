<template>
  <div id="app">
    <add-product class="addProd"></add-product>
    <!-- <product-sort></product-sort> -->
    <product-list class="prodList"></product-list>
    <a class="toTop" href="#">&#8593;</a>
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
  margin: 0 auto;
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
  padding-bottom: 80px;
}

@media screen and (min-width: 1440px) {
  .addProd {
  position: fixed;
  z-index: 1;
}

.prodList {
  margin-left: 364px;
}
.toTop {
  display: none;
}
}

@media screen and (min-width: 380px) and (max-width: 480px){
  #app {
    flex-wrap: wrap;
  }
  .prodList {
    margin-left: 16px;
  }
  .toTop {
    position: fixed;
    top: 860px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: rgb(153, 249, 153);
    
  }
}



</style>
