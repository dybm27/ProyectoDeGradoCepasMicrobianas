export default {
    namespaced: true,
    state: {
        cepas: []
    },
    getters: {
        getCepaById: state => id => {
            return state.cepas.find(cepa => cepa.id === id);
        },
        getCepasByGrupo: state => grupo => {
            return state.cepas.filter(
                cepa => cepa.grupo_microbiano_id == grupo
            );
        },
        getCepaByCodigo: state => codigo => {
            return state.cepas.find(
                cepa => cepa.codigo.toUpperCase() === codigo.toUpperCase()
            );
        }
    },
    mutations: {
        llenarCepas(state, cepas) {
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
        obtenerCepas({ commit }) {
            axios
                .get("/info-panel/cepas")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarCepas", res.data);
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.$router.push("/sin-acceso");
                    } else if (
                        error.response.status === 405 ||
                        error.response.status === 401
                    ) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                });
        },
        accionCepas({ commit }, data) {
            commit("mutacionCepas", data);
        }
    }
};
