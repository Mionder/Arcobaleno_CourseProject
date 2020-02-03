<template>

<div >
    <Header />
<div class="payMent">
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
            

            <div class="buttonPayment">
                <!-- <input type="hidden" name="signature" value="jeohKm81/7zAxJxT6MWW/60HSMw=" /> -->
                 <!-- <input @click="clearLocal()" v-if="((CVV2!='')&&(numberCard!='')) " type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png" name="btn_text" /> -->
                <form method="POST" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
                    <input type="hidden" name="data" :value="this.paymentLiqPayData()" />
                    <input type="hidden" name="signature" :value="this.paymentLiqPaySignature()" />
                    <button class="payForLiqPay" v-show="this.price!=0">
                        <img name="btn_text"/>
                        <p>Оплата</p>
                    </button>
                </form>
            </div>
        </div>

        <div class="cashPayment" v-if="typePayment=='cash'">
            <p class="yourSelection">Ви обрали сплату готівкою кур'єру.</p>
            <h5 class="amoutOfPayment">До сплати: {{price}} грн. </h5>
            <div @click="clearLocal()"  class="buttonCashPayment">Повернутися на сайт</div>
        </div>

        
    </div>
</div>

    <Footer />
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Cart from './Cart.vue'
import * as CryptoJS from 'crypto-js'

export default {
    components: {
        Header,
        Footer
    },
    data: function(){
        return{
            typePayment: "",
            price: Cart.data, 
        }
    },
    methods: {
        clearLocal(){
            localStorage.clear();
            this.$router.push('/');
            window.location.reload()
            /* Как сделать что бы сразу стирало LocalStorage, а не при обновлении */
        },
        paymentLiqPayData() {
            return btoa(`{"public_key":"i47874867893","version":"3","action":"pay","amount":"${this.price}","currency":"UAH","description":"test","order_id":"000001"}`);
        },
        paymentLiqPaySignature() {
            const private_key = "53G32HIO2VRHIyhovehcweEmxMyuZRGSlayXZX7B";

            return CryptoJS
                .SHA1(`${private_key}${this.paymentLiqPayData()}${private_key}`)
                .toString(CryptoJS.enc.Base64);
        }
    },
    mounted(){
        this.price = this.$store.getters.getFullPrice;
        this.paymentLiqPaySignature();
    }
}
</script>    