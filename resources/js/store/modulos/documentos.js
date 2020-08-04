export default {
    namespaced: true,
    state: {
        documentos: []
    },
    getters: {
        getProyectos(state) {
            return state.documentos.proyectos;
        },
        getProyectoById: (state, getters) => id => {
            return getters.getProyectos.find(proyecto => proyecto.id === id);
        },
        getProyectoByNombre: (state, getters) => nombre => {
            return getters.getProyectos.find(
                proyecto =>
                    proyecto.nombre_documento.toUpperCase() ===
                    nombre.toUpperCase()
            );
        },
        getPublicaciones(state) {
            return state.documentos.publicaciones;
        },
        getPublicacionById: (state, getters) => id => {
            return getters.getPublicaciones.find(
                publicacion => publicacion.id === id
            );
        },
        getPublicacionByNombre: (state, getters) => nombre => {
            return getters.getPublicaciones.find(
                publicacion =>
                    publicacion.nombre_documento.toUpperCase() ===
                    nombre.toUpperCase()
            );
        }
    },
    mutations: {
        llenarDocumentos(state, documentos) {
            state.documentos = documentos;
        },
        modificarProyecto(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.documentos.proyectos.push(data.data);
                    break;
                case "editar":
                    var indice = state.documentos.proyectos.findIndex(
                        proyecto => proyecto.id === data.data.id
                    );
                    state.documentos.proyectos.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.documentos.proyectos.findIndex(
                        proyecto => proyecto.id === data.data.id
                    );
                    state.documentos.proyectos.splice(indice, 1);
                    break;
            }
        },
        modificarPublicacion(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.documentos.publicaciones.push(data.data);
                    break;
                case "editar":
                    var indice = state.documentos.publicaciones.findIndex(
                        publicacion => publicacion.id === data.data.id
                    );
                    state.documentos.publicaciones.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.documentos.publicaciones.findIndex(
                        publicacion => publicacion.id === data.data.id
                    );
                    state.documentos.publicaciones.splice(indice, 1);
                    break;
            }
        }
    },
    actions: {
        obtenerDocumentos({ commit }) {
            axios.get("/info-panel/documentos").then(res => {
                if (res.request.responseURL === process.env.MIX_LOGIN) {
                    localStorage.setItem(
                        "mensajeLogin",
                        "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                    );
                    window.location.href = "/";
                }
                commit("llenarDocumentos", res.data);
            });
        },
        accionProyecto({ commit }, data) {
            commit("modificarProyecto", data);
        },
        accionPublicacion({ commit }, data) {
            commit("modificarPublicacion", data);
        }
    }
};
