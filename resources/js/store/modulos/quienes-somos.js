export default {
    namespaced: true,
    state: {
        quienes_somos: null
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
            axios
                .get("/info-panel/quienes-somos")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarQuienesSomos", res.data);
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
        accionCambiarQuienesSomos({ commit }, data) {
            commit("cambiarQuienesSomos", data);
        }
    }
};
