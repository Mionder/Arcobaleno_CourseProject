<template>
    <div id="app">
        <div class="fullAll">
            <Header />
       
                <StartMenu />
<!-- АКЦИИ КАРУСЕЛЬ -->        
                    <Sales />


<div class="container" id="myPizzaFullBlock">
    <h1 class="favouritePizza" @click="logout()">Обери свою улюблену піцу</h1>
    <!-- <select name="" id="" v-model="typePizza">
               <option value="meat">М'ясна</option>
               <option value="vegeb">Овочева</option>
               <option value="cheese">Сирна</option>
               <option value="assorted">Асорті</option>
           </select> -->
        
           <!-- <select name="" id="" v-model="sizePizza">
               <option value="400">400 грам</option>
               <option value="500">500 грам</option>
               <option value="600">600 грам</option>
           </select> -->

           
            <!-- <input type="checkbox" v-model = "MoreOne"> -->
         <div class="myFullPizza">   
            <div class="pizza" v-for="item in pizzaMas" v-bind:key="item._id">
                 <div>
                     <img :src="item.img" alt="" class="imgBlock">
                 </div>
                 <h1 class="pizzaName">{{item.name}}</h1>
                 <p class="pizzaComponents">{{item.components}}</p>
                 <p class="pizzaSize">{{item.size}} грам</p>
                 <h3 class="pizzaPrice">{{item.price}} грн.</h3>
                 <div class="buttonPizza" @click="addPizza(item)">Додати до корзини</div>
                 <router-link v-bind:to="'/pizzaprofile/'+item._id"><div class="buttonPizza">Детальніше</div></router-link>
                 <select name="" id="" v-for="zalipa in item.meal">
                     <option value="">
                            {{zalipa.size}}
                     </option>
                     <option value="">{{zalipa.price}}</option>
                 </select>
             </div>
        </div>
</div>


    <div class="container" id="fullDrinks">
        <h1 class="favouritePizza">Обери свій улюблений напій</h1>
        <div class="myFullPizza">   
        <div class="pizza" v-for="item in drinksMas">
            <div>
                <img :src="item.img" alt="" class="imgBlock">
            </div>
            <h1 class="pizzaName">{{item.name}}</h1>
            <p class="pizzaSize">{{item.size}} л.</p>
            <p class="pizzaPrice">{{item.price}} грн.</p>
            <div class="buttonPizza" @click="addDrink(item)">Додати до корзини</div>
        </div>
        </div>
    </div>

        
        
     
    
                                <AboutUs />
    
<!-- FOOTER --> 
                                         <Footer />               
      </div> 
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import logins from '../login'
import VueAxios from 'vue-axios'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Sales from './Sales.vue'
import AboutUs from './AboutUs.vue'
import StartMenu from './StartMenu.vue'
Vue.use(VueAxios, axios)

export default{
    components: {
        Header,
        Footer,
        Sales,
        AboutUs,
        StartMenu
    },
    data: function()  {return{
        pizzaMas: [],
        drinksMas: [],
        // value: ""
        //  sizePizza: 600,
         typePizza: "cheese",
        //  MoreOne: '0'
        }
    },
    mounted() {
        Vue.axios.get("http://localhost:3000/tasks").then((elem)=>{
            this.pizzaMas = elem.data;
            console.log(this.pizzaMas);
        }),
        Vue.axios.get("http://localhost:3000/drinks").then((element)=>{
            this.drinksMas = element.data;
        }),
        this.$store.getters.getUser;
        
    },
    computed: {
        // filt: function(){
        //     if(this.MoreOne != ''){
        //     return this.fitlAll = this.diff(this.filtType,this.filtSelect);}
        // },
        // filtSelect: function(){
        //     return this.pizzaMas.filter(element =>{
        //         console.log(this.sizePizza);
        //         return element.size==this.sizePizza;
        //     })
        //         return this.pizzaMas;
            
        // },
        filtType: function(){
            return this.pizzaMas.filter(element =>{
                return element.type == this.typePizza;
            })
            return this.pizzaMas;
        }

        
    },
    methods:{
        addPizza(value){
            // Vue.set(value, "amount", 1);
            // const pizza = value;
            // pizza.amount = 1;

            // const pizza = { ...value }
            // pizza.amount = 1

            // const pizza = { ...value, amount: 1 }

            this.$store.commit('setPizza', { ...value, amount: 1 });
        },
        addDrink(value){
            value.amount = 1;
            this.$store.commit('setDrink', value);
        },
        logout(){
            this.$store.commit('setUser', "");
            alert('logOuted00');
        }
    //     diff: funct,ion(arr1,arr2){
    //       var ret =[];
    //       arr1.sort();
    //       arr2.sort();
    //       for(var i=0;i<arr1.length;i++){
    //           if(arr2.indexOf(arr1[i])>-1){
    //               ret.push(arr1[i]);
    //           }
    //       }
    //       return ret;
    //   }
    }
}
</script>