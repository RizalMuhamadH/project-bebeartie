import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products';
import user from './modules/user';
import cart from './modules/cart';
import shipping from './modules/shipping.js';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        products,
        user,
        cart,
        shipping
    },
    strict: process.env.NODE_ENV !== 'production'
});
