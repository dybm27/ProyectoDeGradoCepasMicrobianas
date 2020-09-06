export default {
    namespaced: true,
    state: {
        publicidad: []
    },
    getters: {
        getNoticias(state) {
            return state.publicidad.noticias;
        },
        getNoticiaById: (state, getters) => id => {
            return getters.getNoticias.find(noticia => noticia.id === id);
        },
        getNoticiaByTitulo: (state, getters) => nombre => {
            return getters.getNoticias.find(
                noticia => noticia.titulo.toUpperCase() === nombre.toUpperCase()
            );
        },
        getActividades(state) {
            return state.publicidad.actividades;
        },
        getActividadById: (state, getters) => id => {
            return getters.getActividades.find(
                actividad => actividad.id === id
            );
        },
        getActividadByTitulo: (state, getters) => nombre => {
            return getters.getActividades.find(
                actividad =>
                    actividad.titulo.toUpperCase() === nombre.toUpperCase()
            );
        },
        getNovedades(state) {
            return state.publicidad.novedades;
        },
        getNovedadById: (state, getters) => id => {
            return getters.getNovedades.find(novedad => novedad.id === id);
        },
        getNovedadByTitulo: (state, getters) => nombre => {
            return getters.getNovedades.find(
                novedad => novedad.titulo.toUpperCase() === nombre.toUpperCase()
            );
        }
    },
    mutations: {
        llenarPublicidad(state, publicidad) {
            state.publicidad = publicidad;
        },
        modificarNoticia(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.publicidad.noticias.push(data.data);
                    break;
                case "editar":
                    var indice = state.publicidad.noticias.findIndex(
                        noticia => noticia.id === data.data.id
                    );
                    state.publicidad.noticias.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.publicidad.noticias.findIndex(
                        noticia => noticia.id === data.data.id
                    );
                    state.publicidad.noticias.splice(indice, 1);
                    break;
            }
        },
        modificarActividad(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.publicidad.actividades.push(data.data);
                    break;
                case "editar":
                    var indice = state.publicidad.actividades.findIndex(
                        actividad => actividad.id === data.data.id
                    );
                    state.publicidad.actividades.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.publicidad.actividades.findIndex(
                        actividad => actividad.id === data.data.id
                    );
                    state.publicidad.actividades.splice(indice, 1);
                    break;
            }
        },
        modificarNovedad(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.publicidad.novedades.push(data.data);
                    break;
                case "editar":
                    var indice = state.publicidad.novedades.findIndex(
                        novedad => novedad.id === data.data.id
                    );
                    state.publicidad.novedades.splice(indice, 1, data.data);
                    break;
                case "eliminar":
                    var indice = state.publicidad.novedades.findIndex(
                        novedad => novedad.id === data.data.id
                    );
                    state.publicidad.novedades.splice(indice, 1);
                    break;
            }
        }
    },
    actions: {
        obtenerPublicidad({ commit }) {
            axios
                .get("/info-panel/publicidad")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarPublicidad", res.data);
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
        accionNoticia({ commit }, data) {
            commit("modificarNoticia", data);
        },
        accionActividad({ commit }, data) {
            commit("modificarActividad", data);
        },
        accionNovedad({ commit }, data) {
            commit("modificarNovedad", data);
        }
    }
};
