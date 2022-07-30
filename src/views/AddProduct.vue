export <template>
  <div id="addProduct__container">
    <p id="addProduct__container__header">Добавление товара</p>
    <form action="" id="addProduct__container__form">
            <label for="productName">Наименование товара</label>
            <div  class="requiredCircle"></div>
            <input type="text" name="productName" id="productName" placeholder="Введите наименование товара" required>
            <label for="productDescription">Описание товара</label>
            <div  class="requiredCircle"></div>
            <input type="textarea" name="productDescription" id="productDescription" placeholder="Введите описание товара">
            <label for="productImageLink">Ссылка на изображение товара</label>
            <input type="textarea" name="productImageLink" id="productImageLink" placeholder="Введите ссылку" required>
            <label for="productPrice">Цена товара</label>
            <div class="requiredCircle"></div>
            <input type="text" name="productPrice" id="productPrice" placeholder="Введите цену" required>
            <button id="addProduct__container__submit">Добавить товар</button>
    </form>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }

#addProduct__container {
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    #addProduct__container__header {
        position: absolute;
        width: 247px;
        height: 35px;
        left: 32px;
        top: 32px;

        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;

        color: #3F3F3F;
    }
       #addProduct__container__form {
        position: relative;
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;

        label {
            position: absolute;
            height: 13px;
            left: 56px;

            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 13px;
            /* identical to box height */

            letter-spacing: -0.02em;

            /* Temp / Darks / Lesser */

            color: #49485E;

        }
        :nth-child(1) {
            width: 95px;
            top: 107px;
        }
        .requiredCircle:nth-child(1) {
            position: absolute;
            width: 4px;
            height: 4px;
            left: 151px;
            top: 107px;
        }
        :nth-child(4) {
            width: 74px;
            top: 176px;
        }
        .requiredCircle:nth-child(5) {
            position: absolute;
            width: 4px;
            height: 4px;
            left: 190px;
            top: 317px;
        }
        :nth-child(7) {
            width: 134px;
            top: 317px;
        }
        :nth-child(9) {
            width: 53px;
            top: 386px;
        }
        .requiredCircle:nth-child(10) {
            position: absolute;
            width: 4px;
            height: 4px;
            left: 109px;
            top: 386px;
        }
        #productName {
            position: absolute;
            width: 284px;
            height: 36px;
            left: 56px;
            top: 124px;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
        }

        .requiredCircle {
            position: absolute;
            width: 4px;
            height: 4px;
            left: 151px;
            top: 107px;
            background: #FF8484;
            border-radius: 4px;
        } 
        // .requiredCircle:nth-child(1) {

        // }
        // .requiredCircle:nth-child(2) {
            
        // }
        // .requiredCircle:nth-child(3) {
            
        // }
          #productDescription {
                position: absolute;
                width: 284px;
                height: 108px;
                left: 56px;
                top: 193px;
                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
            }

            #productImageLink {
                position: absolute;
                width: 284px;
                height: 36px;
                left: 56px;
                top: 334px;
                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
            }

            #productPrice  {
                position: absolute;
                width: 284px;
                height: 36px;
                left: 56px;
                top: 403px;

                /* Darks & Whites / White */

                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
            }
            #addProduct__container__submit {
                position: absolute;
                width: 284px;
                height: 36px;
                left: 56px;
                top: 463px;
                background: #EEEEEE;
                border-radius: 10px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                /* identical to box height */

                text-align: center;
                letter-spacing: -0.02em;

                /* Greys / 500 */

                color: #B4B4B4;
            }
} 
}


</style>