<template>
<div class="profPiz">
    <Header />
    <div class="profilePizza">
        <div class="container" v-if="pizzaOne != null">
            <div class="blockPizza">
                <img :src="pizzaOne.img" alt="">
                <div class="pizzaInfo">
                    <p class="pizzaProfileName">{{pizzaOne.name}}</p>
                    <p class="pizzaProfileComponents"><span>Компоненти:</span> {{pizzaOne.components}}</p>
                    <p class="pizzaProfileSize">Розмір: {{pizzaOne.size}} гр.</p>
                    <p class="pizzaProfilePrice"><span>Ціна:</span> {{pizzaOne.price}} грн.</p>
                    <div class="buttonPizza" @click="addPizza(item)">Додати до корзини</div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    components:{
      Header,
      Footer      
    },
    data: function(){
        
        return{
            pizzaOne: null,
            pizzaMas: [],
            item: ''
        }
    },
    computed:{
    },
    mounted(){
        Vue.axios.get("http://localhost:3000/tasks").then((elem)=>{
            this.pizzaMas = elem.data;
            console.log(this.pizzaMas);

            this.pizzaOne = this.pizzaMas.find((item)=>{
                if(item._id == this.$route.params.id){   
                    return this.pizzaOne = item;
                }
            });
        });
        
        
    },
    methods:{
        addPizza(value){
            console.log();
            this.$store.commit('setPizza', { ...this.pizzaOne, amount: 1 });
        },
        addDrink(value){
            value.amount = 1;
            this.$store.commit('setDrink', value);
        }
    }
}
</script>