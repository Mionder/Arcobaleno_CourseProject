<template>
    <div>
        <!-- <Header /> -->
        <div class="logInPanel">
            <p>Name</p>
            <input type="text" v-model ="login">
            <p>Password</p>
            <input type="text" v-model="password">
            <p>Telephone</p>
            <input type="text" v-model="telephone"> 
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
            login: '',
            password: '',
            telephone: ''
        }
    },
    methods: {
        auth() {
            Vue.axios.get("http://localhost:3000/users/"+this.login).then((elem)=>{
                if(elem.data === null){
                    return
                }
                else {
                    this.$store.commit('setUser', elem.data);
                    this.$router.push('/');
                }
            })
        }
    }
}
</script>