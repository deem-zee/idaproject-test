<template>
  <div id="addProduct__container">
    <p id="addProduct__container__header">Добавление товара</p>
    <form id="addProduct__container__form">
        <label for="productName">Наименование товара</label>
        <div  class="requiredCircle" />
        <input
            type="text"
            v-model="product.naming"
            :class="{valid:validNaming, error:!validNaming}"
            name="productName" id="productName"
            placeholder="Введите наименование товара" required
        />
        <p 
            :class="{errmsg:!validNaming, noErr:validNaming}" 
            value="обязательное поле"
        />
        <label for="productDescription">Описание товара</label>
        <textarea 
            v-model="product.description"
            name="productDescription"
            id="productDescription"
            placeholder="Введите описание товара"
            cols="30"
            rows="10"
        />
        <label for="productImageLink">Ссылка на изображение товара</label>
        <div class="requiredCircle" />
        <input
            type="text"
            v-model="product.link"
            :class="{valid:validLink, error:!validLink}"
            name="productImageLink"
            id="productImageLink"
            placeholder="Введите ссылку"
            required
        />
        <p 
            :class="{errmsg:!validLink, noErr:validLink}"
            value="обязательное поле"
        />
        <label for="productPrice">Цена товара</label>
        <div class="requiredCircle" />
        <input
            type="text"
            v-model="product.price"
            @keyup="mask"
            :class="{valid:validPrice, error:!validPrice}"
            name="productPrice"
            id="productPrice"
            placeholder="Введите цену"
            required
        />
        <p 
            :class="{errmsg:!validPrice, noErr:validPrice}"
            value="обязательное поле"
        />
        <button
            id="addProduct__container__submit"
            @click.prevent="addProduct(product)"
            :disabled="validate === false"
            value="Добавить товар"
        />
        <div
            class="success"
            :class="{successfullyAdded: succeed}"
        >
            <div class="arrow" />
        </div>
    </form> 
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            product: {
                naming: null,
                description: null,
                link: null,
                price: null,
                id: null,
                deleted: false,
            },
            succeed: false,
            inputPrice: true,
            inputLink: true,
            inputName: true,
        }
    },
    computed: {
        ...mapGetters(['getProducts']),
        validate() {
            return (this.product.naming && this.product.link && !isNaN(Number(this.product.price)))
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
                deleted: false
            }
            this.succeed = true;
            setTimeout(() => {
                this.succeed = false;
            }, 1000)

        },
        mask(e) {
            (this.product.price.indexOf('.') === -1 && e.which == 32) ?
                this.product.price = this.product.price.trim() + '.' 
                : this.product.price;  
            },
    }
}
</script>

<style lang="scss" scoped>
@import url('http://fonts.cdnfonts.com/css/source-sans-pro');

#addProduct__container {
    background:  rgba(255, 254, 251, 0.8);
    border-radius: 4px;
    margin-left: 32px;
    
    
}
#addProduct__container__header {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 16px;
    margin-top: 32px;
    color: #3F3F3F;
    text-align: left;
}
#addProduct__container__form {
    width: 332px;
    height: 440px;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding-top: 8px;

}

    label {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        color: #49485E; 
        margin-top: 16px;
        margin-bottom: 4px;
        margin-left: 24px;
        display: block;
        text-align: left;
        box-sizing: border-box;
    }
    .requiredCircle {
        width: 4px;
        height: 4px;
        background: #FF8484;
        border-radius: 4px;
        &:nth-of-type(1) {
            position: relative;
            top: -16px;
            left: 119px;
        }
        &:nth-of-type(2) {
            position: relative;
            top: -16px;
            left: 158px;
        }
        &:nth-of-type(3) {
            position: relative;
            top: -16px;
            left: 77px;
        }
    }
    input {
        box-sizing: border-box;
        width: 284px;
        background: #FFFEFB;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: left;
        padding: 0 0 0 16px;
        color: #B4B4B4;
        border: none;
    }
    #productName, #productImageLink, #productPrice {
        height: 36px;
    }
    #productDescription {
        box-sizing: border-box;
        width: 284px;
        height: 108px;
        padding-top:10px;
        padding-left: 16px;
        resize: none;
        border: none;
        background: #FFFEFB;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
       
    }
    #addProduct__container__submit {
        width: 284px;
        height: 36px;
        background: #EEEEEE;
        border-radius: 10px;
        border: none;
        margin: 24px;
        
    }

    .success {
        position: relative;
        left: 320px;
        top: -63px;
        color: white;
        background: rgb(153, 249, 153);
        border-radius: 4px;
        width: 36px;
        height: 36px;
        border-radius: 18px;
        z-index: 1;
        opacity: 0;
        transition: opacity 1s ease-in; 
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
    .error {
        border: 1px solid rgb(255, 121, 121);
        &:after {
            content: "это поле обязательно"
        }
    }

    .valid {
        border: 1px solid rgb(153, 249, 153);
    }
    .errmsg {
        font-family: 'Source Sans Pro', sans-serif;
        position: absolute;
        // visibility: visible;
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        color: rgb(255, 121, 121);
        text-align: left;
        padding-left: 32px;
        &:nth-of-type(1) {
            
            top: 160px;
            
        }
        &:nth-of-type(2) {
            position: absolute;
            top: 380px;
        }
        &:nth-of-type(3) {
            position: absolute;
            top: 450px;
        }
    }
    .noErr {
        display: none;
    }

</style>