<template>
  <div id="productList__container">
    <div id="productList" v-for="product in getProducts" :key="product.id">
     <div id="singleProduct">
      <button id="delete" @click="deleteProduct(product)">del</button>
      <p id="singleProduct__naming">{{product.naming}}</p>
      <p id="singleProduct__description">{{product.description}}</p>
      <img id="singleProduct__img" :src="product.link" alt="">
      <p id="singleProduct__price">{{product.price}}</p>
     </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['deleteProduct'])
  }
  
}
</script>

<style lang="scss" scoped>
#productList__container {
  width: 60%;
}
#delete {
    opacity: 0;
    width: 200px;
    height: 40px;
    top: 100px;
    background: rgba(0, 0, 0, .3);
    color:#fff;
    transition: opacity .3s;
    &:hover {
      cursor:pointer;
    }
}

#singleProduct {
  border: 1px solid black;

  #singleProduct__img {
    width: 332px;
    height: 200px;
  }
  &:hover #delete{
    opacity: 1;
    transition: opacity .3s;
  }
}
</style>