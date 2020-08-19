export default {
    namespaced: true,
    state: {
        investigadores: []
    },
    getters: {
        getInvestigadorById: state => id => {
            return state.investigadores.find(
                investigador => investigador.id === id
            );
        },
        getInvestigadorByEmail: state => email => {
            return state.investigadores.find(
                investigador =>
                    investigador.email.toUpperCase() === email.toUpperCase()
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
            axios
                .get("/info-panel/investigadores")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarInvestigadores", res.data);
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.$router.push("/sin-acceso");
                    }
                });
        },
        accionInvestigador({ commit }, data) {
            commit("modificarInvestigador", data);
        }
    }
};
