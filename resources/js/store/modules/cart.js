import axios from 'axios';

const state = {
    listItem: [],
    totalPrice: 0,
    subTotal: 0,
    lengthItem: 0,
    selected: null,
    weight: 0
};

const getters = {
    listItem: (state) => state.listItem,
    totalPrice: (state) => state.totalPrice,
    subTotal: (state) => state.subTotal,
    lengthItem: (state) => state.lengthItem,
    selected: (state) => state.selected,
    weight: (state) => state.weight,
};

const actions = {
    async loadListItemCart({ commit, rootState, state }) {
        if (rootState.user.isLoggedIn) {
            await axios
                .get("api/cart/show/" + rootState.user.user.id)
                .then(res => {
                    commit('SET_LIST_ITEM', res.data);
                    commit('SET_LENGTH_ITEM', res.data.length)

                    let subTotal = 0;
                    let total = 0;
                    let weight = 0;
                    for (let i = 0; i < res.data.length; i++) {

                        let discount = state.listItem[i].product.price *
                            (state.listItem[i].product.promote.discount / 100);

                        let end = state.listItem[i].product.price - discount;

                        total += state.listItem[i].quality * end;

                        subTotal += res.data[i].quality * res.data[i].product.price;

                        weight += state.listItem[i].product.weight;

                        console.log(subTotal);
                    }
                    commit('SET_WEIGHT', weight);
                    commit('SET_SUB_TOTAL', subTotal);
                    commit('SET_TOTAL_PRICE', total);
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },
    async addCart({ commit, rootState, dispatch }, payload) {
        // console.log(payload.id + " " + payload.qty);

        if (rootState.user.isLoggedIn) {
            await axios
                .post("api/cart/add", {
                    quality: payload.qty,
                    product_id: payload.id,
                    member_id: rootState.user.user.id
                })
                .then(res => {
                    dispatch('loadListItemCart');
                    // Fire.$emit("addCart", true);
                    // this.$Progress.finish();
                    console.log(res);

                    Fire.$emit("modalHide", true);
                })
                .catch(err => {
                    // this.$Progress.fail();
                    console.error(err);
                });
        } else {
            Fire.$emit("mustLogin", true);
        }
    },
    async updateCart({ commit, rootState }, payload) {
        if (rootState.user.isLoggedIn) {

            await axios
                .put("api/cart/update/" + payload.id, {
                    quality: payload.quality,
                    id: payload.id
                })
                .then(res => {
                    Fire.$emit("addCart", true);
                    // this.$Progress.finish();
                    console.log(res);

                    commit('SET_SELECTED_ITEM', null);
                })
                .catch(err => {
                    this.$Progress.fail();
                    console.error(err);
                });
        } else {
            Fire.$emit("mustLogin", true);
        }
    },

    async delItemCart({ commit, rootState }, id) {
        if (rootState.user.isLoggedIn) {

            await axios
                .delete("api/cart/" + id)
                .then(res => {
                    Fire.$emit("addCart", true);
                    // this.$Progress.finish();
                    console.log(res);
                })
                .catch(err => {
                    // this.$Progress.fail();
                    console.error(err);
                });
        } else {
            Fire.$emit("mustLogin", true);
        }
    },

    // async getProvince({ commit }) {
    // await axios.get('http://api.rajaongkir.com/starter/province')
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // }
};

const mutations = {
    SET_LIST_ITEM: (state, list) => state.listItem = list,
    SET_TOTAL_PRICE: (state, total) => state.totalPrice = total,
    SET_SUB_TOTAL: (state, sub) => state.subTotal = sub,
    SET_LENGTH_ITEM: (state, length) => state.lengthItem = length,
    SET_SELECTED_ITEM: (state, selected) => state.selected = selected,
    SET_WEIGHT: (state, weight) => state.weight = weight,
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
