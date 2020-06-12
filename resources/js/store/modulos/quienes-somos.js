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
            }
        },
        modificarObjetivo(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.quienes_somos.objetivos.push(data.data);
                    break;
                case "editar":
                    var indice = state.quienes_somos.objetivos.findIndex(
                        objetivo => objetivo.id === data.data.id
                    );
                    state.quienes_somos.objetivos.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.quienes_somos.objetivos.findIndex(
                        objetivo => objetivo.id === data.data.id
                    );
                    state.quienes_somos.objetivos.splice(indice, 1);
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
        },
        accionObjetivo({ commit }, data) {
            commit("modificarObjetivo", data);
        }
    }
};
