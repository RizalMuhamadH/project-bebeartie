import axios from 'axios';

const state = {
    html: "null",
    products: {},
    object: {},
    slide: [],
    categories: [],
    selected: null,
    title: 'ALL'
};
const getters = {
    allItem: (state) => state.products,
    selected: (state) => state.selected,
    title: (state) => state.title,
    categories: (state) => state.categories
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
    async fetchProductAll({ commit, state }) {
        commit('SET_PRODUCTS', {});
        await axios
            .get("/frontend/getProductIndex")
            .then(res => {
                console.log(res.data);

                commit('SET_PRODUCTS', res.data);
            })
            .catch(err => {
                console.error(err);
                Swal.fire("Failed!", "There was something wrong.", "warning");
            });
    },
    async fetchNextPage({ commit, state }, page) {
        await axios.get(state.products.path + "?page=" + page).then(response => {
            commit('SET_PRODUCTS', res.data);
            Fire.$emit("scrollToUp");
        });
    },
    async fetchProductByCategory({ commit }, payload) {
        commit('SET_SELECT', payload.id);
        commit('SET_TITLE', payload.name);
        await axios
            .get("/frontend/getProductCategory/" + payload.id)
            .then(res => {
                commit('SET_PRODUCTS', res.data);
            })
            .catch(err => {
                console.error(err);
                Swal.fire("Failed!", "There was something wrong.", "warning");
            });
    },
    async fetchGetCategory({ commit }) {
        await axios
            .get("/frontend/getCategoryIndex")
            .then(res => {
                console.log(res.data);

                commit('SET_CATEGORIES', res.data);
                // this.$Progress.finish();
            })
            .catch(err => {
                // this.$Progress.fail();
                console.error(err);
                Swal.fire("Failed!", "There was something wrong.", "warning");
            });
    }

};
const mutations = {
    SET_PRODUCTS: (state, items) => (state.products = items),
    SET_SELECT: (state, selected) => (state.selected = selected),
    SET_TITLE: (state, title) => (state.title = title),
    SET_CATEGORIES: (state, category) => (state.categories = category)
};

export default {
    state,
    getters,
    actions,
    mutations
}
