export default {
    namespaced: true,
    state: { tipos: [] },
    getters: {
        getTipos(state) {
            return state.tipos;
        },
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
        getOrdens(state) {
            return state.tipos.ordens;
        },
        getOrdenCepa(state, getters, rootState) {
            return state.tipos.ordens.find(
                orden => orden.id === rootState.cepa.cepa.orden_id
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
        getDivisiones(state) {
            return state.tipos.divisiones;
        },
        getDivisionCepa(state, getters, rootState) {
            return state.tipos.divisiones.find(
                division => division.id === rootState.cepa.cepa.division_id
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
        getFamilias(state) {
            return state.tipos.familias;
        },
        getFamiliaCepa(state, getters, rootState) {
            return state.tipos.familias.find(
                familia => familia.id === rootState.cepa.cepa.familia_id
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
                    state.tipos.divisions.push(data.info);
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
                    var indice = state.tipos.divisions.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.divisions.splice(indice, 1, data.info);
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
                    state.tipos.ordens.splice(indicei, 1);
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
                    var indice = state.tipos.divisions.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.tipos.divisions.splice(indice, 1);
                    break;
            }
        }
    },
    actions: {
        obtenerTiposCepas({ commit }) {
            axios.get("/info-panel/info-tipos-cepas").then(res => {
                commit("llenarTipos", res.data);
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
