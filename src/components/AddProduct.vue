<template>
  <div id="addProduct__container">
    <p id="addProduct__container__header">Добавление товара</p>
    <form id="addProduct__container__form">
        <div class="labelContainer">
            <label for="productName">Наименование товара</label>
            <div  class="requiredCircle" />
        </div>
        
        <input
            type="text"
            autocomplete="off"
            v-model="product.naming"
            :class="{valid:validNaming, error:!validNaming}"
            name="productName" id="productName"
            placeholder="Введите наименование товара" required
        />
        <p 
           :class="{errmsg:!validNaming, noErr:validNaming}"
        >Обязательное поле  
        </p>
        <div class="labelContainer">
          <label for="productDescription">Описание товара</label>
        </div>
        <textarea 
            v-model="product.description"
            autocomplete="off"
            name="productDescription"
            id="productDescription"
            placeholder="Введите описание товара"
            cols="30"
            rows="10"
        />
        <div class="labelContainer">
            <label for="productImageLink">Ссылка на изображение товара</label>
            <div class="requiredCircle" />
        </div>
        
        <input
            type="text"
            autocomplete="off"
            v-model="product.link"
            :class="{valid:validLink, error:!validLink}"
            name="productImageLink"
            id="productImageLink"
            placeholder="Введите ссылку"
            required
        />
        <p 
           :class="{errmsg:!validLink, noErr:validLink}"
        >Обязательное поле  
        </p>
        <div class="labelContainer">
            <label for="productPrice">Цена товара</label>
            <div class="requiredCircle" />
        </div>
        
        <input
            type="text"
            autocomplete="off"
            v-model="product.price"
            @keyup="mask"
            :class="{valid:validPrice, error:!validPrice}"
            name="productPrice"
            id="productPrice"
            placeholder="Введите цену"
            required
        />
        <div class="errorArea">
          <p 
           :class="{errmsg:!validPrice, noErr:validPrice}"
          >Обязательное поле  
        </p>
        </div>
        
        <button
            id="addProduct__container__submit"
            @click.prevent="addProduct(product)"
            :disabled="(validate === false)"
            :class="{validChecked: validate}"
           >Добавить товар
        </button>
        <div
            class="success"
            :class="{successfullyAdded: succeed}">
            <div class="arrow" />
        </div>
    </form> 
  </div>
</template>

<script>

export default {
    data() {
        return {
            product: {
                naming: null,
                description: null,
                link: null,
                price: null,
                id: null,
            },
            succeed: false,
            inputPrice: true,
            inputLink: true,
            inputName: true,
        }
    },
    computed: {

        validate() {
          return (!isNaN(Number(this.product.price)) && Number(this.product.price) !== 0 && this.product.naming && this.product.link ) ? true : false;
            
        },
        validNaming() {
            return !(this.product.naming === null || this.product.naming.trim() === '')
        },
        validLink() {
            return !(this.product.link === null || this.product.link.trim() === '')
        },
        validPrice() {
            return !(this.product.price === null || (this.product.price.trim()) === '' || isNaN(Number(this.product.price)) )
        }
        
    },
    methods: {
        addProduct(product) {
            this.$store.dispatch('addNewProduct', product);
            this.product = {
                naming: null,
                description: null,
                link: null,
                price: null,
                id: null,
            }
            this.succeed = true;
            setTimeout(() => {
                this.succeed = false;
            }, 1000)

        },
        mask(e) {
            (this.product.price.indexOf('.') === -1 && e.which === 32) ?
                this.product.price = this.product.price.trim() + '.' 
                : this.product.price;  
            },
    }
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
    font-family: 'Inter Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Inter Medium'), url('../assets/fonts/Inter-Medium.woff') format('woff');
}

@media screen and (min-width: 380px) and (max-width: 1280px) {
  #addProduct__container {
    position: sticky;
    top: 0;
    box-sizing: border-box;
    width: 332px;
    z-index: 1;
 }

#addProduct__container__header {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3F3F3F; 
  margin-bottom: 0px;
  text-align: left;
  padding-left: 32px;

}

#addProduct__container__form {
  box-sizing: border-box;
  width: 332px;
  padding: 24px;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.labelContainer {
    text-align: left;
    line-height: 13px;
}

label {
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485E;
  display: inline-block;
  margin-bottom: 4px;
}

.requiredCircle {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #FF8484;
  border-radius: 4px;
  margin-bottom: 5px;
}

input, button {
  box-sizing: border-box;
  width: 284px;
  height: 36px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  padding-bottom: 10px;
}

input, textarea {
  padding-top: 10px;
  padding-left: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

textarea {
  box-sizing: border-box;
  width: 284px;
  height: 108px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #3F3F3F;
  resize: none;
}

button {
  background: #EEEEEE;
  border-radius: 10px;
  border: none;
  padding: 0;
  margin-top: 8px;
  font-family: 'Inter Medium', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #B4B4B4
}
.valid {
  border: 1px solid #7BAE73;
}
.noErr {
  visibility: hidden;
  margin: 0;
  height:16px;
}

.errmsg {
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  color: rgb(255, 121, 121);
  margin-top: 4px;
  margin-bottom: 2px;
  line-height: 10px;
  letter-spacing: -0.02em;
  text-align:left;
}
.successfullyAdded {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.errorArea {
  margin-top: 4px;
  height:16px;
  position: relative;
  margin-bottom: 2px;
  p {
    position: absolute;
    top: 4px;
  }
}
.success {
  position: absolute;
  top: 445px;
  color: white;
  background: #7BAE73;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in; 
  z-index: 1; 
}
.arrow {
  position: relative;
  top: 14.5px;
  left: 13px;
  transform: rotate(-45deg);
  width: 10px;
  height: 5px;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
     
}
.successfullyAdded {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.validChecked {
  background: #7BAE73;
  color: white;
  &:hover {
    cursor: pointer;
  }
}
}


@media screen and (min-width: 1440px) {
  #addProduct__container {
  box-sizing: border-box;
  width: 332px;
}

#addProduct__container__header {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3F3F3F; 
  margin-bottom: 0px;
  text-align: left;
  padding-left: 32px;

}

#addProduct__container__form {
  position: sticky;
  top: 83px;
  box-sizing: border-box;
  width: 332px;
  padding: 24px;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.labelContainer {
    text-align: left;
    line-height: 13px;
}

label {
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485E;
  display: inline-block;
  margin-bottom: 4px;
}

.requiredCircle {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #FF8484;
  border-radius: 4px;
  margin-bottom: 5px;
}

input, button {
  box-sizing: border-box;
  width: 284px;
  height: 36px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  padding-bottom: 10px;
}

input, textarea {
  padding-top: 10px;
  padding-left: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

textarea {
  box-sizing: border-box;
  width: 284px;
  height: 108px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #3F3F3F;
  resize: none;
}

button {
  background: #EEEEEE;
  border-radius: 10px;
  border: none;
  padding: 0;
  margin-top: 8px;
  font-family: 'Inter Medium', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #B4B4B4
}
.valid {
  border: 1px solid #7BAE73;
}
.noErr {
  visibility: hidden;
  margin: 0;
  height:16px;
}

.errmsg {
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  color: rgb(255, 121, 121);
  margin-top: 4px;
  margin-bottom: 2px;
  line-height: 10px;
  letter-spacing: -0.02em;
  text-align:left;
}
.successfullyAdded {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.errorArea {
  margin-top: 4px;
  height:16px;
  position: relative;
  margin-bottom: 2px;
  p {
    position: absolute;
    top: 4px;
  }
}
.success {
  position: absolute;
  top: 385px;
  color: white;
  background: #7BAE73;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in; 
  z-index: 1; 
}
.arrow {
  position: relative;
  top: 14.5px;
  left: 13px;
  transform: rotate(-45deg);
  width: 10px;
  height: 5px;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
     
}
.successfullyAdded {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.validChecked {
  background: #7BAE73;
  color: white;
  &:hover {
    cursor: pointer;
  }
}
}



</style>