export default {
    namespaced: true,
    state: {
        investigadores: []
    },
    getters: {
        getInvestigadores(state) {
            return state.investigadores;
        },
        getInvestigadorById: state => id => {
            return state.investigadores.find(
                investigador => investigador.id === id
            );
        },
        getInvestigadorByEmail: (state, getters) => email => {
            return getters.getInvestigadores.find(
                investigador => investigador.email === email
            );
        }
    },
    mutations: {
        llenarInvestigadores(state, investigadores) {
            state.investigadores = investigadores;
        },
        modificarInvestigador(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.investigadores.push(data.data);
                    break;
                case "editar":
                    var indice = state.investigadores.findIndex(
                        investigador => investigador.id === data.data.id
                    );
                    state.investigadores.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.investigadores.findIndex(
                        investigador => investigador.id === data.data.id
                    );
                    state.investigadores.splice(indice, 1);
                    break;
            }
        }
    },
    actions: {
        obtenerInvestigadores({ commit }) {
            axios.get("/info-panel/investigadores").then(res => {
                commit("llenarInvestigadores", res.data);
            });
        },
        accionInvestigador({ commit }, data) {
            commit("modificarInvestigador", data);
        }
    }
};
