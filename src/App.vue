<template>
  <div id="app">
    <div :class="{preloader: preloader}"></div>
    <add-product class="addProd"></add-product>
    <product-list class="prodList"></product-list>
    <a href="#" class="toTop"><div></div></a>
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
  data() {
    return {
      preloader: true,
    }
  },
  beforeCreate() {
		this.$store.commit('initialiseStore');
    setTimeout(() => {
        this.preloader = false;
      }, 1000)
	},
}
</script>


<style lang="scss">

@media screen and (min-width: 1440px) {
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
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

}

@media screen and (min-width: 380px) and (max-width: 1280px) {
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
  .toTop {
    position: fixed;
    top: 530px;
    left: 0;
    z-index: 2;
    width: 36px;
    height: 36px;
    color: white;
    border-radius: 18px;
    background: #7BAE73;
    opacity: 0.5;
    
    
    div{
      width: 5px;
      height: 5px;
      border: 1px solid white;
      border-right: none;
      border-top: none;
      margin: 50% 50%;
      transform: rotate(135deg) translate(2.5px, 2.5px);
    }
    &:hover {
      cursor: pointer;
    }
  }

}

.preloader {
   position: absolute;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   z-index: 9999;
   background-image: url('./assets/preloader.gif');
   background-repeat: no-repeat; 
   background-color: #FFF;
   background-position: center;
}



</style>
