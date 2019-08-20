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
    async logged({ commit }, token, user) {
        localStorage.setItem(
            "bebeartie.user",
            JSON.stringify(user)
        );

        localStorage.setItem("bebeartie.jwt", token);

        commit('SET_USER', JSON.stringify(user));
        commit('SET_TOKEN', token);
        commit('SET_STATUS_LOGIN', true);

    },
    async change({ commit, dispatch }) {
        if (localStorage.getItem("bebeartie.jwt") != null) {
            commit('SET_STATUS_LOGIN', true);
            commit('SET_TOKEN', localStorage.getItem("bebeartie.jwt"));
            commit('SET_USER', JSON.parse(localStorage.getItem("bebeartie.user")));

            dispatch('setHeader');
        }
    },
    async logout({ commit }) {
        await axios
            .post("frontend/member/logout", { id: state.user.id })
            .then(res => {

                localStorage.removeItem("bebeartie.jwt");
                localStorage.removeItem("bebeartie.user");
                commit('SET_USER', {});
                commit('SET_STATUS_LOGIN', false);
                commit('SET_TOKEN', null);
                //   this.$router.push("/");
            })
            .catch(err => {
                console.error(err);
            });

    },
    async setHeader() {
        if (localStorage.getItem("bebeartie.jwt") != null) {

            axios.defaults.headers.common["Content-Type"] = "application/json";
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
