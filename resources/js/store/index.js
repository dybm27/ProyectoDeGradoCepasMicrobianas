import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cepa: null,
        tipos: [],
        info_caract_bacterias: [],
        info_caract_levaduras: []
    },
    getters: {
        getCepa(state) {
            return state.cepa;
        },
        getCaractMacro(state) {
            return state.cepa.caract_macroscopicas;
        },
        getCaractMicro(state) {
            return state.cepa.caract_microscopicas;
        },
        getCaractBioqui(state) {
            return state.cepa.caract_bioquimica;
        },
        getCaractFisio(state) {
            return state.cepa.caract_fisiologica;
        },
        getMetodoConser(state) {
            return state.cepa.metodo_conservacion;
        },
        getMetodoConserById: (state, getters) => id => {
            return getters.getMetodoConser.find(metodo => metodo.id == id);
        },
        getIdentiMolecu(state) {
            return state.cepa.ident_molecular;
        },
        getGeneros(state) {
            return state.tipos.generos;
        },
        getGenerosId: state => id => {
            return state.tipos.generos.filter(
                genero => genero.grupo_microbiano_id === id
            );
        },
        getGeneroCepa(state) {
            return state.tipos.generos.find(
                genero =>
                    genero.grupo_microbiano_id === state.cepa.cepa.genero_id
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
        getEspecieCepa(state) {
            return state.tipos.especies.find(
                especie => especie.genero_id === state.cepa.cepa.especie_id
            );
        },
        getGrupos(state) {
            return state.tipos.gmicrobianos;
        },
        getPhylums(state) {
            return state.tipos.phylums;
        },
        getOrdens(state) {
            return state.tipos.ordens;
        },
        getReinos(state) {
            return state.tipos.reinos;
        },
        getDivisiones(state) {
            return state.tipos.divisiones;
        },
        getClases(state) {
            return state.tipos.clases;
        },
        getFamilias(state) {
            return state.tipos.familias;
        },
        getInfoCaractMacroBacterias(state) {
            return state.info_caract_bacterias.caract_macro;
        },
        getInfoCaractMicroBacterias(state) {
            return state.info_caract_bacterias.caract_micro;
        },
        getInfoMetodoConserBacterias(state) {
            return state.info_caract_bacterias.metodo_conser;
        },
        getInfoCaractMacroLevaduras(state) {
            return state.info_caract_levaduras.caract_macro;
        }
    },
    mutations: {
        llenarTipos(state, tipos) {
            state.tipos = tipos;
        },
        llenarCepa(state, cepa) {
            state.cepa = cepa;
        },
        llenarInfoCaractBacterias(state, info) {
            state.info_caract_bacterias = info;
        },
        llenarInfoCaractLevaduras(state, info) {
            state.info_caract_levaduras = info;
        },
        mutacionAgregarCaract(state, data) {
            switch (data.tipo) {
                case "macro":
                    state.cepa.caract_macroscopicas.push(data.data);
                    break;
                case "micro":
                    state.cepa.caract_microscopicas = data.data;
                    break;
                case "bioqui":
                    state.cepa.caract_bioquimica = data.data;
                    break;
                case "fisio":
                    state.cepa.caract_fisiologica = data.data;
                    break;
                case "identi":
                    state.cepa.ident_molecular = data.data;
                    break;
                case "metodo":
                    state.cepa.metodo_conservacion.push(data.data);
                    break;
            }
        },
        mutacionEditarCaract(state, data) {
            switch (data.tipo) {
                case "macro":
                    for (
                        let i = 0;
                        i < state.cepa.caract_macroscopicas.length;
                        i++
                    ) {
                        if (
                            state.cepa.caract_macroscopicas[i].id ===
                            data.data.id
                        ) {
                            //Vue.set(state.cepa.caract_macroscopicas, i, data);
                            state.cepa.caract_macroscopicas.splice(
                                i,
                                1,
                                data.data
                            );
                        }
                    }
                    break;
                case "micro":
                    state.cepa.caract_microscopicas = data.data;
                    break;
                case "bioqui":
                    state.cepa.caract_bioquimica = data.data;
                    break;
                case "fisio":
                    state.cepa.caract_fisiologica = data.data;
                    break;
                case "identi":
                    state.cepa.ident_molecular = data.data;
                    break;
                case "metodo":
                    for (
                        let i = 0;
                        i < state.cepa.metodo_conservacion.length;
                        i++
                    ) {
                        if (
                            state.cepa.metodo_conservacion[i].id ===
                            data.data.id
                        ) {
                            state.cepa.metodo_conservacion.splice(
                                i,
                                1,
                                data.data
                            );
                        }
                    }
                    break;
            }
        },
        mutacionEliminarCaract(state, data) {
            switch (data.tipo) {
                case "macro":
                    for (
                        let i = 0;
                        i < state.cepa.caract_macroscopicas.length;
                        i++
                    ) {
                        if (
                            state.cepa.caract_macroscopicas[i].id ===
                            data.data.id
                        ) {
                            state.cepa.caract_macroscopicas.splice(i, 1);
                        }
                    }
                    break;
                case "micro":
                    state.cepa.caract_microscopicas = null;
                    break;
                case "bioqui":
                    state.cepa.caract_bioquimica = null;
                    break;
                case "fisio":
                    state.cepa.caract_fisiologica = null;
                    break;
                case "identi":
                    state.cepa.ident_molecular = null;
                    break;
                case "metodo":
                    for (
                        let i = 0;
                        i < state.cepa.metodo_conservacion.length;
                        i++
                    ) {
                        if (
                            state.cepa.metodo_conservacion[i].id ===
                            data.data.id
                        ) {
                            state.cepa.metodo_conservacion.splice(i, 1);
                        }
                    }
                    break;
            }
        },
        limpiarCepa(state) {
            state.cepa = null;
            state.info_caract_bacterias = [];
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
        mutacionAgregarTipoCaractBacteria(state, data) {
            switch (data.tipo) {
                case "forma_macro":
                    state.info_caract_bacterias.caract_macro.formas_macros.push(
                        data.info
                    );
                    break;
                case "borde":
                    state.info_caract_bacterias.caract_macro.bordes.push(
                        data.info
                    );
                    break;
                case "detalle":
                    state.info_caract_bacterias.caract_macro.detalle_opticos.push(
                        data.info
                    );
                    break;
                case "elevacion":
                    state.info_caract_bacterias.caract_macro.elevacions.push(
                        data.info
                    );
                    break;
                case "superficie":
                    state.info_caract_bacterias.caract_macro.superficies.push(
                        data.info
                    );
                    break;
                case "color":
                    state.info_caract_bacterias.caract_macro.colors.push(
                        data.info
                    );
                    break;
                case "forma_micro":
                    state.info_caract_bacterias.caract_micro.formas_micros.push(
                        data.info
                    );
                    break;
                case "metodo_conser":
                    state.info_caract_bacterias.metodo_conser.tipo_metodo.push(
                        data.info
                    );
                    break;
                case "tipo_agar":
                    state.info_caract_bacterias.metodo_conser.tipo_agar.push(
                        data.info
                    );
                    break;
            }
        },
        mutacionAgregarTipoCaractLevadura(state, data) {
            switch (data.tipo) {
                case "color":
                    state.info_caract_levaduras.caract_macro.colors.push(
                        data.info
                    );
                    break;
                case "textura":
                    state.info_caract_levaduras.caract_macro.texturas.push(
                        data.info
                    );
                    break;
            }
        }
    },
    actions: {
        obtenerTiposCepas({ commit }) {
            axios.get("/api/info-tipos-cepas").then(res => {
                commit("llenarTipos", res.data);
            });
        },
        accionAgregarTipoCepa({ commit }, data) {
            commit("mutacionAgregarTipoCepa", data);
        },
        obtenerInfoCaractBacterias({ commit }) {
            axios.get("/api/info-caract-bacterias").then(res => {
                commit("llenarInfoCaractBacterias", res.data);
            });
        },
        accionAgregarTipoCaractBacteria({ commit }, data) {
            commit("mutacionAgregarTipoCaractBacteria", data);
        },
        obtenerInfoCaractLevaduras({ commit }) {
            axios.get("/api/info-caract-levaduras").then(res => {
                commit("llenarInfoCaractLevaduras", res.data);
            });
        },
        accionAgregarTipoCaractLevadura({ commit }, data) {
            commit("mutacionAgregarTipoCaractLevadura", data);
        },
        obtenerCepa({ commit }, id) {
            axios.get(`/api/cepa/agregar-editar-caract/${id}`).then(res => {
                commit("llenarCepa", res.data);
            });
        },
        accionAgregarCaract({ commit }, data) {
            commit("mutacionAgregarCaract", data);
        },
        accionEditarCaract({ commit }, data) {
            commit("mutacionEditarCaract", data);
        },
        accionEliminarCaract({ commit }, data) {
            commit("mutacionEliminarCaract", data);
        }
    },
    modules: {}
});
