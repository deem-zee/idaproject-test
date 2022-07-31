<template>
  <div id="productList__container">
      <ul id="sortProduct"><span class="sortProductLabel">По умолчанию</span> <div class="downfallImg"></div>
        <li @click="sortAscend">По возрастанию цены</li>
        <li @click="sortDescend">По убыванию цены</li>
        <li @click="sortByName">По названию</li>
      </ul>
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      data: [],
      ascend: false,
      descend: false,
      byName: false,
      
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['deleteProduct']),
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
  padding-right: 32px;
  position: relative;
  top: 83px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#productList {
  position: relative;
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
    left: 308px;
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
  background-size: cover;
}

#singleProduct__naming {
  font-family: 'Source Sans Pro', sans-serif;
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
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3F3F3F;
  text-align: left;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  overflow: hidden;
  max-height: 80px;
}

#singleProduct__price {
  position: absolute;
  top: 338px;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #3F3F3F;
  text-align: left;
  margin-top: 32px;
  margin-left: 16px;
}

#sortProduct {
  position: absolute;
  width: 121.49px;
  height: 36px;
  left: 867px;
  top: -52px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0;
  list-style: none;
  padding-right: 16px;
  
  .sortProductLabel {
    position: relative;
    top: 10px;
    left: -16px;
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
  }


  .downfallImg {
    box-sizing: border-box;
    position: absolute;
    position: relative;
    width: 4.59px;
    height: 4.59px;
    left: 99px;
    top: -1px;
    border: 1px solid #B4B4B4;
    border-left: none;
    border-top: none;
    transform: rotate(45deg);
  }
  li {
    position: absolute;
    top: 0;
    opacity: 0;
    background: white;
    width: 121.49px;
    height: 20px;
    border-top: 1px solid #B4B4B4;
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    cursor: pointer;
    li:nth-of-type(1) {
      transition: all 1s ease-out;
      position: absolute;
      top: 36px;
      opacity:1;
      z-index: 1;
    }
    li:nth-of-type(2) {
      transition: all 1s ease-out;
      position: absolute;
      top: 56px;
      opacity:1;
      z-index: 1;
    }
    li:nth-of-type(3) {
      transition: all 1s ease-out;
      position: absolute;
      top: 76px;
      opacity:1;
      z-index: 1;
      border-bottom: 1px solid #B4B4B4;;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
}
.deleted {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

@media screen and (min-width: 380px) and (max-width: 480px) {
  #sortProduct {
  position: absolute;
  width: 121.49px;
  height: 36px;
  left: 130px;
  top: -52px;
  }
}

</style>