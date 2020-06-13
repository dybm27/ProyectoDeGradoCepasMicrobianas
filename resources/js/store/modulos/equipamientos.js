export default {
    namespaced: true,
    state: {
        equipamientos: []
    },
    getters: {
        getEquipamientos(state) {
            return state.equipamientos;
        },
        getEquipamientoById: (state, getters) => id => {
            return getters.getEquipamientos.find(equipamiento => equipamiento.id === id);
        },
        getEquipamientoByNombre: (state, getters) => nombre => {
            return getters.getEquipamientos.find(
                equipamiento => equipamiento.nombre === nombre
            );
        }
    },
    mutations: {
        llenarEquipamientos(state, equipamientos) {
            state.equipamientos = equipamientos;
        },
        modificarEquipamiento(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.equipamientos.push(data.data);
                    break;
                case "editar":
                    var indice = state.equipamientos.findIndex(
                        equipamiento => equipamiento.id === data.data.id
                    );
                    state.equipamientos.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.equipamientos.findIndex(
                        equipamiento => equipamiento.id === data.data.id
                    );
                    state.equipamientos.splice(indice, 1);
                    break;
            }
        }
    },
    actions: {
        obtenerEquipamientos({ commit }) {
            axios.get("/info-panel/equipamientos").then(res => {
                commit("llenarEquipamientos", res.data);
            });
        },
        accionEquipamiento({ commit }, data) {
            commit("modificarEquipamiento", data);
        }
    }
};
