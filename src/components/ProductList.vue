<template>
  <div id="productList__container">
      <select @change="sort" id="sortProduct" v-model="selected">
        <option disabled value="">По умолчанию</option>
        <option>По возрастанию цены</option>
        <option>По убыванию цены</option>
        <option>По названию</option>
      </select>
      <transition-group class="transition" name="list" tag="div">
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
      </transition-group>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: [],
      selected: '',
    }
  },

  methods: {
    sort() {
      switch(this.selected) {
        case 'По возрастанию цены':
          this.data.sort( (a, b) => Number(a.price) > Number(b.price) ? 1 : -1);
        break;
        case 'По убыванию цены':
          this.data.sort( (a, b) => Number(a.price) < Number(b.price) ? 1 : -1);
        break;
        case 'По названию':
          this.data.sort( (a, b) => a.naming > b.naming ? 1 : -1);
        break;
      }
    },

    deleteProductFromList(product) {
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
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/source-sans-pro-v21-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/source-sans-pro-v21-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/source-sans-pro-v21-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/source-sans-pro-v21-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/source-sans-pro-v21-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/source-sans-pro-v21-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: url('../assets/fonts/source-sans-pro-v21-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/source-sans-pro-v21-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/source-sans-pro-v21-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/source-sans-pro-v21-latin-600.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/source-sans-pro-v21-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/source-sans-pro-v21-latin-600.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

@media screen and (min-width: 380px) and (max-width: 1280px) {
  #productList__container {
  box-sizing: border-box;
  width: 380px;
  margin-top: 83px;
}
.transition {
  display: flex;
  flex-direction: column;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  white-space: nowrap;
  text-overflow: ellipsis;
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

select {
  position: sticky;
  top: 60%;
  left: 50%;
  width: 121.49px;
  height: 36px;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  text-align: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
}
}

@media screen and (min-width: 1440px) {
#productList__container {
  box-sizing: border-box;
  width: 1044px;
  margin-top: 83px;
}
.transition {
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

select {
  position: absolute;
  width: 121.49px;
  height: 36px;
  left: 1287px;
  top: 31px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  text-align: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
}
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}


</style>