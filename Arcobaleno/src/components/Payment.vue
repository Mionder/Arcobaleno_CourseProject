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
            <!-- <div class="fullCard">
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
            </div> -->

            <div class="buttonPayment">
                <!-- <input type="hidden" name="signature" value="jeohKm81/7zAxJxT6MWW/60HSMw=" /> -->
                 <!-- <input @click="clearLocal()" v-if="((CVV2!='')&&(numberCard!='')) " type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png" name="btn_text" /> -->
                <form method="POST" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
                    <input type="hidden" name="data" :value="this.paymentLiqPayData()" />
                    <input type="hidden" name="signature" :value="this.paymentLiqPaySignature()" />
                    <button>
                        <img src="https://static.liqpay.ua/buttons/logo-small.png" name="btn_text"/>
                        <span>Оплата</span>
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
        }
    },
    methods: {
        clearLocal(){
            localStorage.clear();
            this.$router.push('/');
            /* Как сделать что бы сразу стирало LocalStorage, а не при обновлении */
        },
        SHA1(msg) {
        function rotate_left(n,s) {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
        };
        function lsb_hex(val) {
        var str='';
        var i;
        var vh;
        var vl;
        for( i=0; i<=6; i+=2 ) {
        vh = (val>>>(i*4+4))&0x0f;
        vl = (val>>>(i*4))&0x0f;
        str += vh.toString(16) + vl.toString(16);
        }
        return str;
        };
        function cvt_hex(val) {
        var str='';
        var i;
        var v;
        for( i=7; i>=0; i-- ) {
        v = (val>>>(i*4))&0x0f;
        str += v.toString(16);
        }
        return str;
        };
        function Utf8Encode(string) {
        string = string.replace(/\r\n/g,'\n');
        var utftext = '';
        for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
        utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
        }
        }
        return utftext;
        };
        var blockstart;
        var i, j;
        var W = new Array(80);
        var H0 = 0x67452301;
        var H1 = 0xEFCDAB89;
        var H2 = 0x98BADCFE;
        var H3 = 0x10325476;
        var H4 = 0xC3D2E1F0;
        var A, B, C, D, E;
        var temp;
        msg = Utf8Encode(msg);
        var msg_len = msg.length;
        var word_array = new Array();
        for( i=0; i<msg_len-3; i+=4 ) {
        j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
        msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
        word_array.push( j );
        }
        switch( msg_len % 4 ) {
        case 0:
        i = 0x080000000;
        break;
        case 1:
        i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
        break;
        case 2:
        i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
        break;
        case 3:
        i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8 | 0x80;
        break;
        }
        word_array.push( i );
        while( (word_array.length % 16) != 14 ) word_array.push( 0 );
        word_array.push( msg_len>>>29 );
        word_array.push( (msg_len<<3)&0x0ffffffff );
        for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
        for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
        for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for( i= 0; i<=19; i++ ) {
        temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
        }
        for( i=20; i<=39; i++ ) {
        temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
        }
        for( i=40; i<=59; i++ ) {
        temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
        }
        for( i=60; i<=79; i++ ) {
        temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
        }
        var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

        return temp.toLowerCase();
        },
        paymentLiqPayData(){
            var json_string = {"public_key":"i47874867893","version":"3","action":"pay","amount":this.price,"currency":"UAH","description":"test","order_id":"000001"} ;
            console.log(json_string);
            var data = btoa(json_string);
            // console.log(data);
            return data;
            var private_key = "53G32HIO2VRHIyhovehcweEmxMyuZRGSlayXZX7B";
            var sign_string = private_key + data + private_key;
            // console.log(sign_string);
            var signature = btoa(this.SHA1(sign_string));
            console.log(signature);
        },
        paymentLiqPaySignature(){
            var json_string = {"public_key":"i47874867893","version":"3","action":"pay","amount":this.price,"currency":"UAH","description":"test","order_id":"000001"} ;
            console.log(json_string);
            var data = btoa(json_string);
            // console.log(data);
            var private_key = "53G32HIO2VRHIyhovehcweEmxMyuZRGSlayXZX7B";
            var sign_string = private_key + data + private_key;
            var signature = btoa(this.SHA1(sign_string));
             console.log(data);
             console.log(signature);
                       return signature;
        }
        

    },
    mounted(){
        this.price = this.$store.getters.getFullPrice;
        this.paymentLiqPaySignature();
    }
}
</script>    