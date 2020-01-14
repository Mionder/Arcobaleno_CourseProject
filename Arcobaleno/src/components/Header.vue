<template>
    <div class="header">
        <div class="container">
            <div id="navBlock">
                <router-link v-bind:to="'/'"><h1>Arcobaleno</h1></router-link>
               
                    <router-link v-bind:to="'/'"><p class="navBar">Піца та напої</p></router-link>
               
               
                    <router-link v-bind:to="'/'"><p class="navBar">Акції</p></router-link>
                
                
                    <router-link v-bind:to="'/'"><p class="navBar">FAQs</p></router-link>
                    <div id="userIcon" class="navBar">
                        <router-link  v-bind:to="'/profile'"> <p> {{this.currentUser}}</p></router-link><router-link  v-bind:to="'/login'"><i class="fas fa-user"></i></router-link>
                    </div>
                <div id="myCartIcon" class="navBar">
                    <router-link v-bind:to = "'/cart/'"><i class="fas fa-shopping-cart" id="cart"></i></router-link>
                    <div class="round" v-if="emptyCard != '' "></div>
                </div>
                <div  id="buttonTel" class="navBar">
                    <p><i class="fas fa-phone-alt" id="phone"></i>095-654-80-08</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            emptyCard: '',
            currentUser: ''
        }
    },
    mounted(){
        this.emptyCard = this.$store.getters.getPizza;
        this.currentUser = this.$store.getters.getUser.name;
    }
}
</script>

<style scoped>

</style>