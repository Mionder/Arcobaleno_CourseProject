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
            // telephone: ''
        }
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
                        console.log("entered", this.loginEnter);
                        console.log(elem.data[i].name);
                    }
                }
                // if(elem.data === null){
                //     return
                // }
                // else {
                //     this.$store.commit('setUser', elem.data);
                //     this.$router.push('/');
                // }
            })
        }
    }
}
</script>