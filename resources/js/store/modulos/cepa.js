export default {
    namespaced: true,
    state: {
        cepa: null
    },
    getters: {
        getCepa(state) {
            return state.cepa;
        },
        getCaractMacro(state) {
            return state.cepa.caract_macroscopicas;
        },
        getCaractMicro(state) {
            return state.cepa.caract_microscopica;
        },
        getCaractBioqui(state) {
            return state.cepa.caract_bioquimica;
        },
        getCaractFisio(state) {
            return state.cepa.caract_fisiologica;
        },
        getMetodoConser(state) {
            return state.cepa.metodos_conservacion;
        },
        getMetodoConserById: (state, getters) => id => {
            return getters.getMetodoConser.find(metodo => metodo.id == id);
        },
        getIdentiMolecu(state) {
            return state.cepa.ident_molecular;
        },
        getIdentiBioqui(state) {
            return state.cepa.ident_bioquimica;
        },
        getOtrasCaract(state) {
            return state.cepa.otras_caracteristicas;
        }
    },
    mutations: {
        llenarCepa(state, cepa) {
            state.cepa = cepa;
        },
        mutacionLimpiarCepa(state) {
            state.cepa = null;
        },
        mutacionAgregarCaract(state, data) {
            switch (data.tipo) {
                case "macro":
                    state.cepa.caract_macroscopicas.push(data.data);
                    break;
                case "micro":
                    state.cepa.caract_microscopica = data.data;
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
                    state.cepa.metodos_conservacion.push(data.data);
                    break;
                case "identi_bioqui":
                    state.cepa.ident_bioquimica = data.data;
                    break;
                case "otras":
                    state.cepa.otras_caracteristicas = data.data;
                    break;
            }
        },
        mutacionEditarCaract(state, data) {
            switch (data.tipo) {
                case "macro":
                    var indice = state.cepa.caract_macroscopicas.findIndex(
                        caract => caract.id === data.data.id
                    );
                    state.cepa.caract_macroscopicas.splice(
                        indice,
                        1,
                        data.data
                    );
                    break;
                case "micro":
                    state.cepa.caract_microscopica = data.data;
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
                    var indice = state.cepa.metodos_conservacion.findIndex(
                        metod => metod.id === data.data.id
                    );
                    state.cepa.metodos_conservacion.splice(
                        indice,
                        1,
                        data.data
                    );
                    break;
                case "identi_bioqui":
                    state.cepa.ident_bioquimica = data.data;
                    break;
                case "otras":
                    state.cepa.otras_caracteristicas = data.data;
                    break;
            }
        },
        mutacionEliminarCaract(state, data) {
            switch (data.tipo) {
                case "macro":
                    var indice = state.cepa.caract_macroscopicas.findIndex(
                        caract => caract.id === data.data.id
                    );
                    state.cepa.caract_macroscopicas.splice(indice, 1);
                    break;
                case "micro":
                    state.cepa.caract_microscopica = null;
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
                    var indice = state.cepa.metodos_conservacion.findIndex(
                        metod => metod.id === data.data.id
                    );
                    state.cepa.metodos_conservacion.splice(indice, 1);

                    break;
                case "identi_bioqui":
                    state.cepa.ident_bioquimica = null;
                    break;
                case "otras":
                    state.cepa.otras_caracteristicas = null;
                    break;
            }
        }
    },
    actions: {
        obtenerCepa({ commit }, id) {
            axios
                .get(`/info-panel/cepa/agregar-editar-caract/${id}`)
                .then(res => {
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
        },
        limpiarCepa({ commit }) {
            commit("mutacionLimpiarCepa");
        }
    }
};
