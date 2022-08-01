<template>
  <div id="productList__container">
      <!-- <ul id="sortProduct"><span class="sortProductLabel">По умолчанию</span> <div class="downfallImg"></div>
        <li @click="sortAscend">По возрастанию цены</li>
        <li @click="sortDescend">По убыванию цены</li>
        <li @click="sortByName">По названию</li>
      </ul> -->
      <select v-model="selected" id="sortProduct">
        <option value="По возрастанию цены"></option>
        <option value="По убыванию цены"></option>
        <option value="По возрастанию цены"></option>
      </select>
    <div 
      id="productList"
      v-for="product in data" 
      :key="product.id"
      :class="{deleted:product.deleted }">
        <button id="delete" @click="deleteProductFromList(product)" />
        <div 
          id="singleProduct__img" 
          :style="{ backgroundImage: 'url(' + product.link + ')' }" 
        />
        <p id="singleProduct__naming">{{product.naming}}</p>
        <p id="singleProduct__description">{{product.description}}</p>
        <p id="singleProduct__price">{{product.price}} руб.</p>   
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      data: [],
      ascend: false,
      descend: false,
      byName: false,
      selected: null,
    }
  },
  // watch() {

  // },
  methods: {
    // ...mapActions(['deleteProduct']),
    sortAscend() { 
      this.data.sort( (a, b) => a.price > b.price ? 1 : -1);
    },
    sortDescend() {
      this.data.sort( (a, b) => a.price < b.price ? 1 : -1);
    },
    sortByName() {
      this.data.sort( (a, b) => a.naming > b.naming ? 1 : -1);
    }, 
    deleteProductFromList(product) {
      console.log(product.delted)
      product.deleted = true;
      setTimeout(() => {
        this.$store.dispatch('deleteProduct', product);
      },600)
    }

  },
  created() {
    this.data = this.$store.getters.getProducts;
  },

}
</script>

<style lang="scss" scoped>
@import url('http://fonts.cdnfonts.com/css/source-sans-pro');
#productList__container {
  box-sizing: border-box;
  width: 1028px;
}

</style>