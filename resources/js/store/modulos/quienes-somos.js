export default {
    namespaced: true,
    state: {
        quienes_somos: null
    },
    getters: {
        getQuienesSomos(state) {
            return state.quienes_somos;
        }
    },
    mutations: {
        llenarQuienesSomos(state, quienesSomos) {
            state.quienes_somos = quienesSomos;
        },
        cambiarQuienesSomos(state, data) {
            switch (data.tipo) {
                case "mision":
                    state.quienes_somos.mision = data.data;
                    break;
                case "vision":
                    state.quienes_somos.vision = data.data;
                    break;
                case "objetivos":
                    state.quienes_somos.objetivos = data.data;
                    break;
            }
        }
    },
    actions: {
        obtenerQuienesSomos({ commit }) {
            axios.get("/info-panel/quienes-somos").then(res => {
                commit("llenarQuienesSomos", res.data);
            });
        },
        accionCambiarQuienesSomos({ commit }, data) {
            commit("cambiarQuienesSomos", data);
        }
    }
};
