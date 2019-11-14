<template>

<div>
    <Header />

    <div class="container" id="fullPaymentBlock">
        <h2>Оберіть варіант оплати:</h2>
        <div class="radioSelectionPay">
            <input type="radio" id="card" value="card" v-model="typePayment">
            <label for="card">Оплатити карткою</label>
            <input type="radio" id="cash" value="cash" v-model="typePayment">
            <label for="cash">Оплатити готівкою кур'єру</label>
        </div>
        <div class="cardPayment" v-if="typePayment=='card'">
            <p class="yourSelection">Ви обрали сплату карткою</p>
            <p class="amoutOfPayment">До сплати: {{price}} грн.</p>
            <div class="fullCard">
                <div class="frontCard">
                    <p class="topFrontLabel">Введіть реквізити платіжної карти</p>
                    <div class="inputWithCardNumb">
                        <input type="text" placeholder="Номер картки" v-model="numberCard">
                    </div>
                    <div class="term">
                        <p>Термін дії:</p>
                        <select name="" id="">
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>

                        <select name="" id="">
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                        </select>
                    </div>
                </div>

                <div class="cardBack">
                    <div class="cardBackTop">

                    </div>
                    <div class="cardBackBottom">
                        <input type="text" v-model="CVV2" placeholder="CVV2/CVC2">
                        <div class="questRound">?</div>
                    </div>
                </div>
            </div>

            <div class="buttonPayment">
                <!-- <input type="hidden" name="signature" value="jeohKm81/7zAxJxT6MWW/60HSMw=" /> -->
                 <input @click="clearLocal()" v-if="((CVV2!='')&&(numberCard!='')) " type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png" name="btn_text" />
            </div>
        </div>

        <div class="cashPayment" v-if="typePayment=='cash'">
            <p class="yourSelection">Ви обрали сплату готівкою кур'єру.</p>
            <h5 class="amoutOfPayment">До сплати: {{price}} грн. </h5>
            <div @click="clearLocal()"  class="buttonCashPayment">Повернутися на сайт</div>
        </div>

        
    </div>

    <Footer />
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Cart from './Cart.vue'
export default {
    components: {
        Header,
        Footer
    },
    data: function(){
        return{
            typePayment: "",
            price: Cart.data,
            CVV2: '',
            numberCard: ''
        }
    },
    methods: {
        clearLocal(){
            localStorage.clear();
            this.$router.push('/');
            /* Как сделать что бы сразу стирало LocalStorage, а не при обновлении */
        }
    },
    mounted(){
        this.price = this.$store.getters.getFullPrice;
    }
}
</script>    