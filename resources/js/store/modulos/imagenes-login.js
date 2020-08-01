export default {
    namespaced: true,
    state: {
        imagenesLogin: []
    },
    getters: {
        getImagenLoginById: state => id => {
            return state.imagenesLogin.find(imagen => imagen.id == id);
        }
    },
    mutations: {
        llenarImagenesLogin(state, imagenes) {
            state.imagenesLogin = imagenes;
        },
        mutacionImagenesLogin(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.imagenesLogin.push(data.data);
                    break;
                case "editar":
                    var indice = state.imagenesLogin.findIndex(
                        imagen => imagen.id === data.data.id
                    );
                    state.imagenesLogin.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.imagenesLogin.findIndex(
                        imagen => imagen.id === data.data.id
                    );
                    state.imagenesLogin.splice(indice, 1);
                    break;
            }
        }
    },
    actions: {
        obtenerImagenesLogin({ commit }, data) {
            axios.get("/info-panel/login-imagenes").then(res => {
                if (res.request.responseURL === process.env.MIX_LOGIN) {
                    localStorage.setItem(
                        "mensajeLogin",
                        "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                    );
                    window.location.href = "/";
                }
                commit("llenarImagenesLogin", res.data);
            });
        },
        accionImagenLogin({ commit }, data) {
            commit("mutacionImagenesLogin", data);
        }
    }
};
