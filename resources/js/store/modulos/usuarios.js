export default {
    namespaced: true,
    state: {
        tipos_users: [],
        usuarios: []
    },
    getters: {
        getUsuarios(state) {
            return state.usuarios;
        },
        getTipoUser(state) {
            return state.tipos_users.filter(tipo => tipo.id != 1);
        },
        getTipoUserById: state => id => {
            return state.tipos_users.find(tipo => tipo.id == id);
        },
        getUsuarioById: (state, getters) => id => {
            return getters.getUsuarios.find(user => user.id == id);
        },
        getUsuarioByEmail: (state, getters) => email => {
            return getters.getUsuarios.find(user => user.email == email);
        }
    },
    mutations: {
        llenarUsuarios(state, users) {
            state.usuarios = users;
        },
        llenarTiposUsers(state, tipos) {
            state.tipos_users = tipos;
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
        mutacionTipoUsuario(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.tipos_users.push(data.info);
                    break;
                case "editar":
                    var indice = state.tipos_users.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos_users.splice(indice, 1, data.info);
                    break;
                case "eliminar":
                    var indice = state.tipos_users.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos_users.splice(indice, 1);

                    break;
            }
        }
    },
    actions: {
        obtenerUsers({ commit }, data) {
            axios.get("/info-panel/users").then(res => {
                commit("llenarUsuarios", res.data);
            });
        },
        obtenerTiposUsers({ commit }) {
            axios.get("/info-panel/tipos-users").then(res => {
                commit("llenarTiposUsers", res.data);
            });
        },
        accionTipoUsuario({ commit }, data) {
            commit("mutacionTipoUsuario", data);
        },
        accionUsuario({ commit }, data) {
            commit("mutacionUsuario", data);
        }
    }
};
