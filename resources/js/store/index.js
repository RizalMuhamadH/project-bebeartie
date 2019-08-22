import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products';
import user from './modules/user';
import cart from './modules/cart';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        products,
        user,
        cart
    },
    strict: process.env.NODE_ENV !== 'production'
});
