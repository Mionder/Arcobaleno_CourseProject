<template>
    <div class="header">
        <div class="container">
            <div class="row" id="navBlock">
                <router-link v-bind:to="'/'"><div class="col-sm-12 col-md-2" ><h1>Arcobaleno</h1></div></router-link>
                <div class="col-sm-12 col-md-1"></div>
                <div class="col-sm-12 col-md-2">
                    <p class="navBar">Піца та напої</p>
                </div>
                <div class="col-sm-12 col-md-1">
                    <p class="navBar">Акції</p>
                </div>
                <div class="col-sm-12 col-md-2">
                    <p class="navBar">FAQs</p>
                </div>
                <div class="col-sm-12 col-md-1"></div>
                <div class="col-sm-12 col-md-1" id="myCartIcon">
                    <router-link v-bind:to = "'/cart/'"><i class="fas fa-shopping-cart" id="cart"></i></router-link>
                    <div class="round" v-if="emptyCard != '' "></div>
                </div>
                <div class="col-sm-12 col-md-2" id="buttonTel">
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
            emptyCard: ''
        }
    },
    mounted(){
        this.emptyCard = this.$store.getters.getPizza;
    }
}
</script>

<style scoped>

</style>