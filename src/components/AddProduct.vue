export <template>
  <div id="addProduct__container">
    <p id="addProduct__container__header">Добавление товара</p>
    <form id="addProduct__container__form">
        <label for="productName">Наименование товара</label>
        <div  class="requiredCircle"></div>
        <input type="text" v-model="product.naming" name="productName" id="productName" placeholder="Введите наименование товара" required>
        <label for="productDescription">Описание товара</label>
        <textarea v-model="product.description" name="productDescription" id="productDescription" placeholder="Введите описание товара" cols="30" rows="10"></textarea>
        <label for="productImageLink">Ссылка на изображение товара</label>
        <div  class="requiredCircle"></div>
        <input type="textarea" v-model="product.link" name="productImageLink" id="productImageLink" placeholder="Введите ссылку" required>
        <label for="productPrice">Цена товара</label>
        <div class="requiredCircle"></div>
        <input type="text" v-model="product.price" @keyup="mask" name="productPrice" id="productPrice" placeholder="Введите цену" required>
        <button id="addProduct__container__submit"  @click.prevent="addProduct(product)" :disabled="validate == false">Добавить товар</button>
        <div class="success" :class="{successfullyAdded: succeed}"><div class="arrow"></div></div>
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
                id: null
            },
            succeed: false,
            
        }
    },
    computed: {
        ...mapGetters(['getProducts']),
        validate() {
            return (this.product.naming && this.product.link && this.product.price) ? true :  false;
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
                id: null
           }
            this.succeed = true;
            setTimeout(() => {
                this.succeed = false;
            }, 3000)

        },
        mask(e) {
            (this.product.price.indexOf('.') === -1 && e.which == 32) ?
                this.product.price = this.product.price.trim() + '.' 
                : this.product.price;  
        }
    }
}
</script>

<style lang="scss" scoped>
#addProduct__container {
    background:  #E5E5E5;
    // box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    margin-left: 32px;
    
}
#addProduct__container__header {
    font-family: 'Source Sans Pro';
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
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding-top: 8px;

}

    label {
        font-family: 'Source Sans Pro';
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
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        font-family: 'Source Sans Pro';
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
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        font-family: 'Source Sans Pro';
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
        &:active {
            background: rgb(116, 245, 116);
        }
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
</style>