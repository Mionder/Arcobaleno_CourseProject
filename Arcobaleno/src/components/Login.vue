<template>
    <div>
        <!-- <Header /> -->
        <div class="logInPanel">
            <p>Name</p>
            <input type="text" v-model ="loginEnter">
            <p>Password</p>
            <input type="text" v-model="passwordEnter">
            <!-- <p>Telephone</p> -->
            <!-- <input type="text" v-model="telephone">  -->
            <button @click="auth()">OK</button>
        </div>

        <div class="SignInPanel">
            <p>Name</p>
            <input type="text" v-model ="loginReg">
            <p>Password</p>
            <input type="text" v-model="passwordReg">
            <button @click="registration()">GO</button>
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
            usersMas:[]
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
        // isRegister(){

        // },
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
                if(this.usersMas.find(this.loginReg) == -1){
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