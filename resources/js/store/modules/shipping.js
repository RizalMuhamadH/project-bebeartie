import axios from 'axios';

const state = {
    province: [],
    city: [],
    origin: '24',
    destination: '',
    courier: '',
    cost: 0,
    service: {}

};

const getters = {
    province: (state) => state.province,
    city: (state) => state.city,
    origin: (state) => state.origin,
    destination: (state) => state.destination,
    courier: (state) => state.courier,
    cost: (state) => state.cost,
    service: (state) => state.service,
};

const actions = {
    async getProvince({ commit, rootState }) {

        await axios
            .get("/api/getProvince")
            .then(res => {
                console.log(res.data.rajaongkir);

                commit('SET_PROVINCE', res.data.rajaongkir.results);
                // this.$Progress.finish();
            })
            .catch(err => {
                // this.$Progress.fail();
                console.error(err);
                Swal.fire("Failed!", "There was something wrong.", "warning");
            });
    },
    async getCity({ commit }, province) {
        await axios
            .get("/api/getCity/" + province)
            .then(res => {
                console.log(res.data.rajaongkir);

                commit('SET_CITY', res.data.rajaongkir.results);
                // this.$Progress.finish();
            })
            .catch(err => {
                // this.$Progress.fail();
                console.error(err);
                Swal.fire("Failed!", "There was something wrong.", "warning");
            });
    },
    async getCost({ commit, state, rootState }, payload) {
        commit('SET_COURIER', payload.courier);
        commit('SET_DESTINATION', payload.destination);
        await axios
            .post("/api/getCost", {
                origin: state.origin,
                destination: state.destination,
                weight: rootState.cart.weight,
                courier: state.courier
            })
            .then(res => {
                console.log(res.data.rajaongkir);

                commit('SET_SERVICE', res.data.rajaongkir.results[0]);
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
    SET_PROVINCE: (state, province) => state.province = province,
    SET_CITY: (state, city) => state.city = city,
    SET_DESTINATION: (state, destination) => state.destination = destination,
    SET_COURIER: (state, courier) => state.courier = courier,
    SET_COST: (state, cost) => state.cost = cost,
    SET_SERVICE: (state, service) => state.service = service,

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
