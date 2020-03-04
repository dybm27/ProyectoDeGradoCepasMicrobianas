import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cepa: null,
        tipos: [],
        info_caract_bacterias: []
    },
    getters: {
        getCepa(state) {
            return state.cepa;
        },
        getCaractMacro(state) {
            return state.cepa.caract_macroscopicas;
        },
        getGeneros(state) {
            return state.tipos.generos;
        },
        getGrupos(state) {
            return state.tipos.gmicrobianos;
        },
        getEspecies(state) {
            return state.tipos.especies;
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
        mutacionAgregarCaractMacroBacteria(state, data) {
            state.cepa.caract_macroscopicas.push(data);
        },
        mutacionEditarCaractMacroBacteria(state, data) {
            for (let i = 0; i < state.cepa.caract_macroscopicas.length; i++) {
                if (state.cepa.caract_macroscopicas[i].id === data.id) {
                    //Vue.set(state.cepa.caract_macroscopicas, i, data);
                    state.cepa.caract_macroscopicas.splice(i, 1, data);
                }
            }
        },
        mutacionEliminarCaractMacroBacteria(state, data) {
            for (let i = 0; i < state.cepa.caract_macroscopicas.length; i++) {
                if (state.cepa.caract_macroscopicas[i].id === data.id) {
                    state.cepa.caract_macroscopicas.splice(i, 1);
                }
            }
        },
        limpiarCepa(state) {
            state.cepa = null;
            this.info_caract_bacterias = [];
        }
    },
    actions: {
        obtenerTipos({ commit }) {
            axios.get("/api/info-tipos-cepas").then(res => {
                commit("llenarTipos", res.data);
            });
        },
        obtenerCepa({ commit }, id) {
            axios.get(`/api/cepa/agregar-editar-caract/${id}`).then(res => {
                commit("llenarCepa", res.data);
            });
        },
        obtenerInfoCaractBacterias({ commit }) {
            axios.get("/api/info-caract-bacterias").then(res => {
                commit("llenarInfoCaractBacterias", res.data);
            });
        },
        accionAgregarCaractMacroBacteria({ commit }, data) {
            commit("mutacionAgregarCaractMacroBacteria", data);
        },
        accionEditarCaractMacroBacteria({ commit }, data) {
            commit("mutacionEditarCaractMacroBacteria", data);
        },
        accionEliminarCaractMacroBacteria({ commit }, data) {
            commit("mutacionEliminarCaractMacroBacteria", data);
        }
    },
    modules: {}
});
