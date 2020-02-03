<template>
    <div>
        <Header />
        <div id="profileFull">
            <div class="containerProfile">
                <div class="profile">
                    <div class="whitePartProfile">
                        <div class="topMenu">
                            <i class="fas fa-sign-out-alt" @click="logOut()"></i>
                            <div class="photo"></div>
                            <i class="fas fa-dice" @click="playZone()" ></i>
                        </div>
                        <div class="profilePhoto">
                            
                            <div class="infoUser">
                                <h2>{{this.currentUser}}</h2>
                                <p>{{this.usersMas.email}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="blackPartProfile">
                        <div class="infoProfile">
                            <div class="infoPart">
                                <p class="num">{{this.usersMas.bonus}}</p>
                                <div class="numInfo">Бонусів</div>
                            </div>
                            <!-- <div class="infoPart">
                                <p class="num">74009</p>
                                <div class="numInfo">subscribes</div>
                            </div> -->
                            <div class="infoPart">
                                <p class="num">{{this.usersMas.orders}}</p>
                                <div class="numInfo">Замовлень</div>
                            </div>
                        </div>
                    </div>

                    <div id="playGameProfile" v-show="this.myPlayZone==true">
                        <div class="buttonPlay" @click="goPlay()">
                            Натисни та отпримай
                        </div>
                        <p>Ти можешь отримати купон на знижку <span>1 раз</span> на тиждень</p>
                        <p>{{currentCoupon}}</p>
                        <div class="playingZone" v-for="item in couponMas">
                            <!-- <p>{{item.code}}</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'  
Vue.use(VueAxios, axios)
export default {
     components:{
        Header,
        Footer
    },
    data: function(){
        return{
            currentUser: "",
            usersMas: {},
            myPlayZone: '',
            couponMas: [],
            currentCoupon: ''
        }
    },
    computed: {
        
    },
    mounted() {
        Vue.axios.get("http://localhost:3000/coupons").then((elem)=>{
            this.couponMas = elem.data;
            console.log(this.couponMas);
        })

        this.currentUser = this.$store.getters.getUser.name;
        this.usersMas = this.$store.getters.getUser;
        console.log(this.usersMas);
    },
    methods: {
        logOut(){
            this.$store.commit('setUser', undefined);
            this.$router.push('/');
        },
        // showPlayZone(){
        //    document.getElementById('playGameProfile').style.cssText = "display:none;";
        // //    alert("gotovo");
        //     // play.style.cssText = 'display:block';
        // }

        playZone(){
            if(this.myPlayZone == true){
                this.myPlayZone = false;
            }
            else{
                this.myPlayZone = true;
            }
            return this.myPlayZone;
        },
        goPlay(){
            let i;
            i = this.getRandomInt(this.couponMas.length); 
            this.currentCoupon = (this.couponMas[i].name);
            return this.currentCoupon;
        },
        getRandomInt(max){
            return Math.floor(Math.random() * Math.floor(max));
        }
    }
}
</script>