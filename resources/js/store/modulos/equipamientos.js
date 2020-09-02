export default {
    namespaced: true,
    state: {
        equipamientos: []
    },
    getters: {
        getEquipamientoById: state => id => {
            return state.equipamientos.find(
                equipamiento => equipamiento.id === id
            );
        },
        getEquipamientoByNombre: state => nombre => {
            return state.equipamientos.find(
                equipamiento =>
                    equipamiento.nombre.toUpperCase() === nombre.toUpperCase()
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
            axios
                .get("/info-panel/equipamientos")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarEquipamientos", res.data);
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.$router.push("/sin-acceso");
                    } else if (
                        error.response.status === 405 ||
                        error.response.status === 401
                    ) {
                        window.location.href = "/";
                    }
                });
        },
        accionEquipamiento({ commit }, data) {
            commit("modificarEquipamiento", data);
        }
    }
};
