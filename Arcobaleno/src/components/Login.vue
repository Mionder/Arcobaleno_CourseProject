<template>
    <div>
        <!-- <Header /> -->
        <!-- <div class="logInPanel">
            <p>Name</p>
            <input type="text" v-model ="loginEnter">
            <p>Password</p>
            <input type="text" v-model="passwordEnter">
            <button @click="auth()">OK</button>
        </div>

        <div class="SignInPanel">
            <p>Name</p>
            <input type="text" v-model ="loginReg">
            <p>Password</p>
            <input type="text" v-model="passwordReg">
            <button @click="registration()">GO</button>
        </div> -->


        <div class="logInBlock">
            <div class="container-login">
                <div class="wrapper">
                    <p class="mainLabelLogin">Авторизація</p>
                    <label for="login">Введіть логін</label>
                    <input type="text" id="login" v-model ="loginEnter">
                    <label for="password">Введіть пароль</label>
                    <input type="password" id="password" v-model="passwordEnter">
                    <div class="buttonLogIn" @click="auth()">Увійти</div>
                    <p class="questionLogIn">Ще не зареєстровані? <router-link v-bind:to="'/registration'"><span>Зробіть це саме зараз</span></router-link></p>
                </div>
            </div>
        </div> 
        
    </div> 
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Header from './Header.vue'

export default {
    components: {
        Header
    },
    data: function() {
        return {
            loginEnter: '',
            passwordEnter: '',
            loginReg: '',
            passwordReg: '',
            usersMas:[],
            check: false
            // telephone: ''
        }
    },
    mounted(){
        Vue.axios.get("http://localhost:3000/users").then((elem)=>{
            this.usersMas = elem.data;
            console.log(this.usersMas);
        })
    },
    methods: {
        auth() {
            Vue.axios.get("http://localhost:3000/users").then((elem)=>{
                for(let i=0;i<elem.data.length;i++){
                    if((elem.data[i].name == this.loginEnter)&&(elem.data[i].password == this.passwordEnter)){
                        // alert('123');
                        this.$store.commit('setUser', elem.data[i]);
                        this.$router.push('/');
                    }
                    else{
                        console.log("entered", this.loginEnter, this.passwordEnter);
                        console.log(elem.data[i].name, elem.data[i].password);
                    }
                }
            })
        },
        isRegister(){
            Vue.axios.get("http://localhost:3000/users").then((element)=>{
                for(let i=0;i<element.data.lenght;i++){
                    if(element.data[i].name != this.loginReg){
                        this.check = false;
                        console.log(this.check);
                    }
                    else this.check = true;
                }
            });
            return this.check;
        },
        registration(){
            // Vue.axios.get("http://localhost:3000/users").then((element)=>{
            //     for(let i=0;i<element.data.length;i++){
            //         if(this.loginReg != element.data[i].name){
            //             Vue.axios.post("http://localhost:3000/users",{
            //                 name: this.loginReg,
            //                 password: this.passwordReg,
            //                 telephone: ""
            //             }).then((elem)=>{
            //                 console.log("your registration success");
                            
            //             });
            //         }
            //     }
            //     Vue.axios.get("http://localhost:3000/users").then((element)=>{
                               
            //                     console.log("shkh",element.data);
            //                 });
            // });
            
            Vue.axios.get("http://localhost:3000/users").then((element)=>{
                // console.log(element.data.indexOf(this.loginReg));
                this.usersMas = element.data;
                console.log(this.usersMas);
                isRegister();
                if(this.check == false){
                    Vue.axios.post("http://localhost:3000/users",{
                            name: this.loginReg,
                            password: this.passwordReg,
                            email: '',
                            bonus: 0,
                            orders: 0,
                            telephone: ""
                        }).then((elem)=>{
                            alert("your registration success");
                        });
                }
                else alert("registration aborted");
                
            });

        }
    }
}
</script>