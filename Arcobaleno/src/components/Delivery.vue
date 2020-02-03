<template>
<div>

</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    data(){
        return{
            mas: []
        }
    },
    mounted(){
        Vue.axios.get("https://api.monobank.ua/personal/client-info", "uw-8Lmj7MOAThOx8zbdDfrWEXghIc3qe28marfbyJHJg").then((element)=>{
            this.mas = (element.data);
            console.log(this.mas);
        })
    }
}
</script>