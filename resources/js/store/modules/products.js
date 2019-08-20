import axios from 'axios';

const state = {
    html: "null",
    products: {},
    object: {},
    slide: [],
};
const getters = {
    allItem: (state) => state.products,
    text: (state) => state.text
};
const actions = {
    async fetchProductLimit({ commit }) {
        // this.$Progress.start();
        await axios
            .get("/frontend/getProductLimit")
            .then(res => {
                commit('SET_PRODUCTS', res.data);
                // this.$Progress.finish();
            })
            .catch(err => {
                // this.$Progress.fail();
                console.error(err);
                Swal.fire("Failed!", "There was something wrong.", "warning");
            });
    },

};
const mutations = {
    SET_PRODUCTS: (state, items) => (state.products = items),
};

export default {
    state,
    getters,
    actions,
    mutations
}
