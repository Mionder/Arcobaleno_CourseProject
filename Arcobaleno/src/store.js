import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState()],

    state:{
        cartShop: [],
        myUser: '',
        myFullPrice: 0
    },
    mutations: {
        setPizza: (state, pizza) =>{
            //state.cartShop.push(pizza);

            let result = state.cartShop.find(item => item.name == pizza.name)
    
            if(result == undefined) state.cartShop.push(pizza);
            else { 
                for(let i=0;i<state.cartShop.length;i++)
                    {
                        if(state.cartShop[i].name == pizza.name)
                            state.cartShop[i].amount++
                    }
            }
        },
        incAmount: (state, item) => {
            const index = state.cartShop.findIndex(el => el._id === item._id);
            state.cartShop[index].amount++;
        },
        decAmount: (state,item) => {
            const indexDec = state.cartShop.findIndex(el => el._id === item._id);
            state.cartShop[indexDec].amount--;
        },
        setDrink: (state, drink) => {
            let result = state.cartShop.find(item => item.name == drink.name)
            if(result == undefined) state.cartShop.push(drink);
            else { for(let i=0;i<state.cartShop.length;i++)
            {
                if(state.cartShop[i].name == drink.name)
                state.cartShop[i].amount++
            }
        }
        },
        setUser: (state, user) => {
            state.myUser = user;
        },
        setFullPrice: (state, fullPrice) =>{
            state.myFullPrice = fullPrice;
        }
    },
    getters: {
        getPizza: (state) =>{
            return state.cartShop;
        },
        getUser: (state)=>{
            return state.myUser;
        },
        getDrink: (state) =>{
            return state.cartShop;
        },
        getFullPrice: (state) => {
            return state.myFullPrice;
        }   
    }
})
export default store