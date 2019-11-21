<template>
    <div>
        <Header />

        <div class="orderThis">
            <div class="container">
                <h1 class="cartTitle">Ваша корзина мрії:</h1>
                    <div class="cartSpace">
                        <p v-for="item in PizzaMas"  v-bind:key="item._id"> 
                            <!-- v-if="item.amount>0" no! computed PizzaMas with -->
                            {{item.name}} {{item.amount}}
                            <!-- {{item.size}} -->
                       
                            <button @click="plusAmount(item)">+</button>
                            <button @click="minusAmount(item)">-</button>  
                            {{item.price}}
                            
                        </p> 
                    </div>


                    <div class="fullPrice">
                        До сплати: <span>{{fullPrice}}</span> грн.
                        <p>Ви отримаєте: {{fullBonus()}} бонусів  </p>
                    </div>

                    <router-link class="router" v-bind:to="'/'"><div class="drinksCart">
                        Обрати щось смачненьке
                    </div></router-link>

                    <div @click="goToPayment()" class="paymentCart">
                        Перейти до сплати
                    </div>
            </div>

            <!-- <table>
                <tr v-for="item in PizzaMas">
                    <td>{{item.name}}</td>
                    <td>{{item.amount}}</td>
                    <td><button @click="plusAmount(item)">+</button></td>
                    <td><button @click="minusAmount(item)">-</button>  </td>
                    <td> {{item.price}}</td>
                </tr>
            </table> -->

        </div>

        <Footer />
        
    </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import {mapGetters} from "vuex"

export default {
    components:{
        Header,
        Footer
    },
    data() {
        return{
            // PizzaMas: [], 
            bonuses: 0,
           // fullPriceCart: 0,
            DrinkMas: []
        }
    },
    computed: {
        ...mapGetters({
            PizzaMas: 'getPizza'
        }),
        fullPrice() {
             var fullPriceCart=0;
            for(let i=0;i<this.PizzaMas.length; i++){
                   fullPriceCart += this.PizzaMas[i].price * this.PizzaMas[i].amount;
            }
            return fullPriceCart;
        },
        // PizzaMas: function() {
        //     return this.$store.getters.getPizza;
        // }
    },
    methods:{
        goToPayment(){
            this.$store.commit('setFullPrice', this.fullPrice);
            this.$router.push('/payment/');
        },

        plusAmount(item){
           // item.amount++;
             this.$store.commit("incAmount", item)
        },
        minusAmount(item){
            if(item.amount>0)
            item.amount--;
        },
        myBonus(item){
            return item.price * 0.02;
        },
        fullBonus(){
            var fullBonusCart = 0;

            //for(let i=0; i<this.PizzaMas.length;i++){
                fullBonusCart = this.fullPrice * 0.02;
           // }
           
            return fullBonusCart.toFixed(2);
        }
    },
    mounted(){
       
        this.DrinkMas = this.$store.getters.getDrink;
    },
    // fiters:{
    //     grivnFilt: function(){
    //         return this.PizzaMas.price + "UAH";
    //     }
    // }
}
</script>