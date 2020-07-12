export default {
    namespaced: true,
    state: {
        cepas: []
    },
    getters: {
        getCepas(state) {
            return state.cepa;
        },
        getCepaById: (state, getters) => id => {
            return getters.getCepas.find(cepa => cepa.id == id);
        }
    },
    mutations: {
        llenarCepa(state, cepas) {
            state.cepas = cepas;
        },
        mutacionCepas(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.cepas.push(data.data);
                    break;
                case "editar":
                    var indice = state.cepas.findIndex(
                        cepa => cepa.id === data.data.id
                    );
                    state.cepas.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.cepas.findIndex(
                        cepa => cepa.id === data.data.id
                    );
                    state.cepas.splice(indice, 1);
                    break;
            }
        }
    },
    actions: {
        obtenerCepas({ commit }, id) {
            axios.get("/info-panel/cepas").then(res => {
                commit("llenarCepas", res.data);
            });
        },
        accionCepas({ commit }, data) {
            commit("mutacionCepas", data);
        }
    }
};
