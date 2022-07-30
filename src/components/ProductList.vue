<template>
  <div id="productList__container">
    <div id="productList" v-for="product in getProducts" 
      :key="product.id">
     <div id="singleProduct">
      <button id="delete" @click="deleteProduct(product)"></button>
      <div id="singleProduct__img" :style="{ backgroundImage: 'url(' + product.link + ')' }"></div>
      <p id="singleProduct__naming">{{product.naming}}</p>
      <p id="singleProduct__description">{{product.description}}</p>
      <p id="singleProduct__price">{{product.price}} руб.</p>
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
  box-sizing: border-box;
  margin-right: 32px;
}

#productList {
  position: relative;
  top: 41.5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#singleProduct {
  padding-top: 0;
  box-sizing: border-box;
  max-width: 332px;
  min-height: 423px;
  max-height: 423px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin-bottom: 16px;
  margin-left: 16px;
  &:hover #delete{
    opacity: 1;
    transition: opacity .3s;
  }
}
#delete {
    position: absolute;
    opacity: 0;
    width: 32px;
    height: 32px;
    left: 309px;
    top: -8px;
    background: #FF8484;
    background-image: url('../assets/delete1.png');
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: opacity .3s;
    &:hover {
      cursor:pointer;
      z-index: 2;
    }
}

#singleProduct__img {
  width: 332px;
  height: 200px;
  border-radius: 4px 4px 0px 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#singleProduct__naming {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3F3F3F;
  text-align: left;
  margin-top: 16px;
  margin-left: 16px;
}

#singleProduct__description {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3F3F3F;
  text-align: left;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
}

#singleProduct__price {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #3F3F3F;
  text-align: left;
  margin-top: 32px;
  margin-left: 16px;
}

</style>