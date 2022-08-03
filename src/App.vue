<template>
  <div id="app">
    <div :class="{preloader: preloader}"></div>
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
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: url('./assets/fonts/source-sans-pro-v21-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./assets/fonts/source-sans-pro-v21-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/source-sans-pro-v21-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/source-sans-pro-v21-latin-600.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/source-sans-pro-v21-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/source-sans-pro-v21-latin-600.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

@font-face {
    font-family: 'Inter Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Inter Medium'), url('./assets/fonts/Inter-Medium.woff') format('woff');
}

@media screen and (min-width: 1440px) {
  body {
    // margin: 0 auto;
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
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

}

@media screen and (min-width: 380px) and (max-width: 1280px) {
  body {
    // margin: 0 auto;
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
