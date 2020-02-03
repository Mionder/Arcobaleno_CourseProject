<template>
    <div>
        <div class="logInBlock">
            <div class="container-login">
                <div class="wrapper">
                    <p class="mainLabelLogin">Регістрація</p>
                    <label for="login">Введіть логін</label>
                    <input type="text" id="login" v-model ="loginReg">
                    <label for="email">Введіть e-mail</label>
                    <input type="email" id="email" v-model ="emailReg">
                    <label for="password">Введіть пароль</label>
                    <input type="password" id="password" v-model="passwordReg">
                    <label for="passwordConfirm">Підтвердіть пароль</label>
                    <input type="password" id="passwordConfirm" v-model="passwordConfirm">
                    <div class="buttonLogIn" @click="registration()">Зареєструватися</div>
                    <p class="questionLogIn">Вже зареєстровані? <router-link v-bind:to="'/login'"><span>Увійдіть саме зараз</span></router-link></p>
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

export default {
    data: function() {
        return {
            loginReg: '',
            passwordReg: '',
            passwordConfirm: '',
            emailReg: '',
            usersMas:[],
            check: '',
            
           
        }
    }, 
    mounted(){
        Vue.axios.get("http://localhost:3000/users").then((elem)=>{
            this.usersMas = elem.data;
            console.log(this.usersMas);
        })
    },
    methods: {
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
        auth() {
            Vue.axios.get("http://localhost:3000/users").then((elem)=>{
                for(let i=0;i<elem.data.length;i++){
                    if((elem.data[i].name == this.loginReg)&&(elem.data[i].password == this.passwordReg)){
                        // alert('123');
                        this.$store.commit('setUser', elem.data[i]);
                        this.$router.push('/');
                    }
                    else{
                        console.log("entered", this.loginReg, this.passwordReg);
                        console.log(elem.data[i].name, elem.data[i].password);
                    }
                }
            })
        },
        registration(){
            
            // Vue.axios.get("http://localhost:3000/users").then((element)=>{
            //     // console.log(element.data.indexOf(this.loginReg));
            //     this.usersMas = element.data;
            //     console.log(this.usersMas);
            //     this.isRegister();
            //     // const str = JSON.stringify(this.postUser);
                    
                
            //     // else alert("registration aborted");
                
            // });
            // Vue.axios.post("http://localhost:3000/users",JSON.parse(JSON.stringify(this.postUser))).then((response)=>{
            //                 console.log(response);
            //                 this.auth();
            // });

            Vue.axios.post("http://localhost:3000/users", {
                                                                name: this.loginReg,
                                                                password: this.passwordReg,
                                                                email: this.emailReg,
                                                                bonus: 0, 
                                                                orders: 0
            }).then((response)=>{
                            console.log(response);
                            this.auth();
            });


        }
    }
}
</script>

