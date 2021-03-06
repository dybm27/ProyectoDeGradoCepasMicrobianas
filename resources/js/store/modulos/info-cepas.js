export default {
    namespaced: true,
    state: { tipos: [] },
    getters: {
        getGeneros(state) {
            return state.tipos.generos;
        },
        getGenerosId: state => id => {
            return state.tipos.generos.filter(
                genero => genero.grupo_microbiano_id === id
            );
        },
        getGenerosById: state => id => {
            return state.tipos.generos.find(genero => genero.id === id);
        },
        getGeneroByNombre: state => nombre => {
            return state.tipos.generos.find(
                genero => genero.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getGeneroCepa(state, getters, rootState) {
            return state.tipos.generos.find(
                genero => genero.id === rootState.cepa.cepa.cepa.genero_id
            );
        },
        getEspecies(state) {
            return state.tipos.especies;
        },
        getEspeciesId: state => id => {
            return state.tipos.especies.filter(
                especie => especie.genero_id === id
            );
        },
        getEspecieByNombre: state => nombre => {
            return state.tipos.especies.find(
                especie => especie.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getEspecieCepa(state, getters, rootState) {
            return state.tipos.especies.find(
                especie => especie.id === rootState.cepa.cepa.cepa.especie_id
            );
        },
        getGrupos(state) {
            return state.tipos.gmicrobianos;
        },
        getGrupoCepa(state, getters, rootState) {
            return state.tipos.gmicrobianos.find(
                gmicrobiano =>
                    gmicrobiano.id ===
                    rootState.cepa.cepa.cepa.grupo_microbiano_id
            );
        },
        getPhylums(state) {
            return state.tipos.phylums;
        },
        getPhylumCepa(state, getters, rootState) {
            return state.tipos.phylums.find(
                phylum => phylum.id === rootState.cepa.cepa.phylum_id
            );
        },
        getPhylumByNombre: state => nombre => {
            return state.tipos.phylums.find(
                phylum => phylum.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getOrdens(state) {
            return state.tipos.ordens;
        },
        getOrdenCepa(state, getters, rootState) {
            return state.tipos.ordens.find(
                orden => orden.id === rootState.cepa.cepa.orden_id
            );
        },
        getOrdenByNombre: state => nombre => {
            return state.tipos.ordens.find(
                orden => orden.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getReinos(state) {
            return state.tipos.reinos;
        },
        getReinoCepa(state, getters, rootState) {
            return state.tipos.reinos.find(
                reino => reino.id === rootState.cepa.cepa.reino_id
            );
        },
        getReinoByNombre: state => nombre => {
            return state.tipos.reinos.find(
                reino => reino.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getDivisiones(state) {
            return state.tipos.divisiones;
        },
        getDivisionCepa(state, getters, rootState) {
            return state.tipos.divisiones.find(
                division => division.id === rootState.cepa.cepa.division_id
            );
        },
        getDivisionByNombre: state => nombre => {
            return state.tipos.divisiones.find(
                division =>
                    division.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getClases(state) {
            return state.tipos.clases;
        },
        getClaseCepa(state, getters, rootState) {
            return state.tipos.clases.find(
                clase => clase.id === rootState.cepa.cepa.clase_id
            );
        },
        getClaseByNombre: state => nombre => {
            return state.tipos.clases.find(
                clase => clase.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getFamilias(state) {
            return state.tipos.familias;
        },
        getFamiliaCepa(state, getters, rootState) {
            return state.tipos.familias.find(
                familia => familia.id === rootState.cepa.cepa.familia_id
            );
        },
        getFamiliaByNombre: state => nombre => {
            return state.tipos.familias.find(
                familia => familia.nombre.toUpperCase() === nombre.toUpperCase()
            );
        }
    },
    mutations: {
        llenarTipos(state, tipos) {
            state.tipos = tipos;
        },
        mutacionAgregarTipoCepa(state, data) {
            switch (data.tipo) {
                case "genero":
                    state.tipos.generos.push(data.info);
                    break;
                case "especie":
                    state.tipos.especies.push(data.info);
                    break;
                case "familia":
                    state.tipos.familias.push(data.info);
                    break;
                case "orden":
                    state.tipos.ordens.push(data.info);
                    break;
                case "clase":
                    state.tipos.clases.push(data.info);
                    break;
                case "phylum":
                    state.tipos.phylums.push(data.info);
                    break;
                case "reino":
                    state.tipos.reinos.push(data.info);
                    break;
                case "division":
                    state.tipos.divisiones.push(data.info);
                    break;
            }
        },
        mutacionEditarTipoCepa(state, data) {
            switch (data.tipo) {
                case "genero":
                    var indice = state.tipos.generos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.generos.splice(indice, 1, data.info);
                    break;
                case "especie":
                    var indice = state.tipos.especies.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.especies.splice(indice, 1, data.info);
                    break;
                case "familia":
                    var indice = state.tipos.familias.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.familias.splice(indice, 1, data.info);
                    break;
                case "orden":
                    var indice = state.tipos.ordens.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.ordens.splice(indice, 1, data.info);
                    break;
                case "clase":
                    var indice = state.tipos.clases.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.clases.splice(indice, 1, data.info);
                    break;
                case "phylum":
                    var indice = state.tipos.phylums.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.phylums.splice(indice, 1, data.info);
                    break;
                case "reino":
                    var indice = state.tipos.reinos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.reinos.splice(indice, 1, data.info);
                    break;
                case "division":
                    var indice = state.tipos.divisiones.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.divisiones.splice(indice, 1, data.info);
                    break;
            }
        },
        mutacionEliminarTipoCepa(state, data) {
            switch (data.tipo) {
                case "genero":
                    var indice = state.tipos.generos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.generos.splice(indice, 1);
                    break;
                case "especie":
                    var indice = state.tipos.especies.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.especies.splice(indice, 1);
                    break;
                case "familia":
                    var indice = state.tipos.familias.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.familias.splice(indice, 1);
                    break;
                case "orden":
                    var indice = state.tipos.ordens.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.ordens.splice(indice, 1);
                    break;
                case "clase":
                    var indice = state.tipos.clases.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.clases.splice(indice, 1);
                    break;
                case "phylum":
                    var indice = state.tipos.phylums.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.phylums.splice(indice, 1);
                    break;
                case "reino":
                    var indice = state.tipos.reinos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.reinos.splice(indice, 1);
                    break;
                case "division":
                    var indice = state.tipos.divisiones.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.divisiones.splice(indice, 1);
                    break;
            }
        }
    },
    actions: {
        obtenerTiposCepas({ commit }) {
            axios
                .get("/info-panel/info-tipos-cepas")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarTipos", res.data);
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
        accionAgregarTipoCepa({ commit }, data) {
            commit("mutacionAgregarTipoCepa", data);
        },
        accionEditarTipoCepa({ commit }, data) {
            commit("mutacionEditarTipoCepa", data);
        },
        accionEliminarTipoCepa({ commit }, data) {
            commit("mutacionEliminarTipoCepa", data);
        }
    }
};
