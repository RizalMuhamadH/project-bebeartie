import axios from 'axios';

const state = {
    user: {},
    isLoggedIn: false,
    token: null
};
const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    token: (state) => state.token,
    user: (state) => state.user
};
const actions = {
    async logged({ commit, dispatch }, token) {

        commit('SET_USER', JSON.parse(localStorage.getItem("bebeartie.user")));
        commit('SET_TOKEN', token);
        commit('SET_STATUS_LOGIN', true);

        dispatch('setHeader');

    },
    async change({ commit, dispatch }) {
        if (localStorage.getItem("bebeartie.jwt") != null) {
            commit('SET_STATUS_LOGIN', true);
            commit('SET_TOKEN', localStorage.getItem("bebeartie.jwt"));
            commit('SET_USER', JSON.parse(localStorage.getItem("bebeartie.user")));

            dispatch('setHeader');
        }
    },
    async logout({ commit, dispatch }) {
        await axios
            .post("frontend/member/logout", { id: state.user.id })
            .then(res => {

                localStorage.removeItem("bebeartie.jwt");
                localStorage.removeItem("bebeartie.user");
                commit('SET_USER', {});
                commit('SET_STATUS_LOGIN', false);
                commit('SET_TOKEN', null);
                //   this.$router.push("/");
                dispatch('change');
            })
            .catch(err => {
                console.error(err);
            });

    },
    async setHeader() {
        if (localStorage.getItem("bebeartie.jwt") != null) {

            axios.defaults.headers.common["Content-Type"] = "application/json";
            axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + state.token;
        }
    }
};
const mutations = {
    SET_USER: (state, user) => (state.user = user),
    SET_TOKEN: (state, token) => (state.token = token),
    SET_STATUS_LOGIN: (state, status) => (state.isLoggedIn = status)
};

export default {
    state,
    getters,
    actions,
    mutations
}
