export default {
    namespaced: true,
    state: {
        roles: [],
        usuarios: [],
        permisos: []
    },
    getters: {
        getRoles(state) {
            return state.roles.filter(rol => rol.id != 1);
        },
        getRolById: state => id => {
            return state.roles.find(rol => rol.id == id);
        },
        getRolByNombre: state => nombre => {
            return state.roles.find(
                rol => rol.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getUsuarioById: state => id => {
            return state.usuarios.find(user => user.id == id);
        },
        getUsuarioByEmail: state => email => {
            return state.usuarios.find(
                user => user.email.toUpperCase() === email.toUpperCase()
            );
        }
    },
    mutations: {
        llenarUsuarios(state, users) {
            state.usuarios = users;
        },
        llenarRoles(state, roles) {
            state.roles = roles;
        },
        llenarPermisos(state, permisos) {
            state.permisos = permisos;
        },
        mutacionUsuario(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.usuarios.push(data.data);
                    break;
                case "editar":
                    var indice = state.usuarios.findIndex(
                        user => user.id === data.data.id
                    );
                    state.usuarios.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.usuarios.findIndex(
                        user => user.id === data.data.id
                    );
                    state.usuarios.splice(indice, 1);
                    break;
            }
        },
        mutacionRol(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.roles.push(data.data);
                    break;
                case "editar":
                    var indice = state.roles.findIndex(
                        rol => rol.id === data.data.id
                    );
                    state.roles.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.roles.findIndex(
                        rol => rol.id === data.data.id
                    );
                    state.roles.splice(indice, 1);
                    break;
            }
        },
        mutacionModificarPermisos(state, data) {
            var indice = state.roles.findIndex(rol => rol.id === data.id);
            state.roles.splice(indice, 1, data);
        }
    },
    actions: {
        obtenerUsers({ commit }, data) {
            axios
                .get("/info-panel/users")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarUsuarios", res.data);
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
        obtenerRoles({ commit }) {
            axios.get("/info-panel/roles").then(res => {
                if (res.request.responseURL === process.env.MIX_LOGIN) {
                    localStorage.setItem(
                        "mensajeLogin",
                        "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                    );
                    window.location.href = "/";
                }
                commit("llenarRoles", res.data);
            });
        },
        obtenerPermisos({ commit }) {
            axios.get("/info-panel/permisos").then(res => {
                if (res.request.responseURL === process.env.MIX_LOGIN) {
                    localStorage.setItem(
                        "mensajeLogin",
                        "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                    );
                    window.location.href = "/";
                }
                commit("llenarPermisos", res.data);
            });
        },
        accionRol({ commit }, data) {
            commit("mutacionRol", data);
        },
        accionUsuario({ commit }, data) {
            commit("mutacionUsuario", data);
        },
        accionModificarPermisos({ commit }, data) {
            commit("mutacionModificarPermisos", data);
        }
    }
};
