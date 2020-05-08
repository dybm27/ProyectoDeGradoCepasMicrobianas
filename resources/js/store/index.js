import Vue from "vue";
import Vuex from "vuex";

let userLogueado = document.head.querySelector('meta[name="user-logueado"]');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        auth: JSON.parse(userLogueado.content),
        cepa: null,
        tipos: [],
        info_caract_bacterias: [],
        info_caract_levaduras: [],
        info_caract_hongos: [],
        info_caract_actinomicetos: [],
        tipos_users: [],
        usuarios: []
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
        getIdentiBioqui(state) {
            return state.cepa.ident_bioquimica;
        },
        getOtrasCaract(state) {
            return state.cepa.otras_caracteristicas;
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
                genero => genero.id === state.cepa.cepa.genero_id
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
                especie => especie.id === state.cepa.cepa.especie_id
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
        },
        getInfoMetodoConserLevaduras(state) {
            return state.info_caract_levaduras.metodo_conser;
        },
        getInfoCaractMacroHongos(state) {
            return state.info_caract_hongos.caract_macro;
        },
        getInfoCaractMicroHongos(state) {
            return state.info_caract_hongos.caract_micro;
        },
        getInfoMetodoConserHongos(state) {
            return state.info_caract_hongos.metodo_conser;
        },
        getInfoCaractMacroActinomicetos(state) {
            return state.info_caract_actinomicetos.caract_macro;
        },
        getInfoCaractMicroActinomicetos(state) {
            return state.info_caract_actinomicetos.caract_micro;
        },
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
        },
        getUserAuth(state) {
            return state.auth;
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
        llenarInfoCaractHongos(state, info) {
            state.info_caract_hongos = info;
        },
        llenarInfoCaractActinomicetos(state, info) {
            state.info_caract_actinomicetos = info;
        },
        llenarUsuarios(state, users) {
            state.usuarios = users;
        },
        llenarTiposUsers(state, tipos) {
            state.tipos_users = tipos;
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
                    for (
                        let i = 0;
                        i < state.cepa.caract_macroscopicas.length;
                        i++
                    ) {
                        if (
                            state.cepa.caract_macroscopicas[i].id ===
                            data.data.id
                        ) {
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
                case "identi_bioqui":
                    state.cepa.ident_bioquimica = null;
                    break;
                case "otras":
                    state.cepa.otras_caracteristicas = null;
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
                case "metodo_conser":
                    state.info_caract_levaduras.metodo_conser.tipo_metodo.push(
                        data.info
                    );
                    break;
            }
        },
        mutacionAgregarTipoCaractHongo(state, data) {
            switch (data.tipo) {
                case "color":
                    state.info_caract_hongos.caract_macro.colores.push(
                        data.info
                    );
                    break;
                case "textura":
                    state.info_caract_hongos.caract_macro.texturas.push(
                        data.info
                    );
                    break;
                case "conidioforo":
                    state.info_caract_hongos.caract_micro.conidioforos.push(
                        data.info
                    );
                    break;
                case "espora_asexual":
                    state.info_caract_hongos.caract_micro.esporas_asexuales.push(
                        data.info
                    );
                    break;
                case "espora_sexual":
                    state.info_caract_hongos.caract_micro.esporas_sexuales.push(
                        data.info
                    );
                    break;
                case "metodo_conser":
                    state.info_caract_hongos.metodo_conser.tipo_metodo.push(
                        data.info
                    );
                    break;
            }
        },
        mutacionAgregarTipoCaractActinomiceto(state, data) {
            switch (data.tipo) {
                case "forma_macro":
                    state.info_caract_actinomicetos.caract_macro.formas_macros.push(
                        data.info
                    );
                    break;
                case "borde":
                    state.info_caract_actinomicetos.caract_macro.bordes.push(
                        data.info
                    );
                    break;
                case "textura":
                    state.info_caract_actinomicetos.caract_macro.texturas.push(
                        data.info
                    );
                    break;
                case "pigmento":
                    state.info_caract_actinomicetos.caract_macro.pigmentos.push(
                        data.info
                    );
                    break;
                case "superficie":
                    state.info_caract_actinomicetos.caract_macro.superficies.push(
                        data.info
                    );
                    break;
                case "color":
                    state.info_caract_actinomicetos.caract_macro.colors.push(
                        data.info
                    );
                    break;
                case "forma_micro":
                    state.info_caract_actinomicetos.caract_micro.formas_micros.push(
                        data.info
                    );
                    break;
                case "tincion":
                    state.info_caract_actinomicetos.caract_micro.tincions.push(
                        data.info
                    );
                    break;
                case "micelio":
                    state.info_caract_actinomicetos.caract_micro.micelios.push(
                        data.info
                    );
                    break;
                case "conidioforo":
                    state.info_caract_actinomicetos.caract_micro.conidioforos.push(
                        data.info
                    );
                    break;
            }
        },
        mutacionTipoUsuario(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.tipos_users.push(data.info);
                    break;
                case "editar":
                    for (let i = 0; i < state.tipos_users.length; i++) {
                        if (state.tipos_users[i].id === data.info.id) {
                            state.tipos_users.splice(i, 1, data.info);
                        }
                    }
                    break;
                case "eliminar":
                    for (let i = 0; i < state.tipos_users.length; i++) {
                        if (state.tipos_users[i].id === data.info.id) {
                            state.tipos_users.splice(i, 1);
                        }
                    }
                    break;
            }
        },
        mutacionUsuario(state, data) {
            switch (data.tipo) {
                case "agregar":
                    state.usuarios.push(data.data);
                    break;
                case "editar":
                    for (let i = 0; i < state.usuarios.length; i++) {
                        if (state.usuarios[i].id === data.data.id) {
                            state.usuarios.splice(i, 1, data.data);
                        }
                    }
                    break;
                case "eliminar":
                    for (let i = 0; i < state.usuarios.length; i++) {
                        if (state.usuarios[i].id === data.data.id) {
                            state.usuarios.splice(i, 1);
                        }
                    }
                    break;
            }
        },
        mutacionModificarAuth(state, data) {
            state.auth = data;
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
        obtenerInfoCaractHongos({ commit }) {
            axios.get("/api/info-caract-hongos").then(res => {
                commit("llenarInfoCaractHongos", res.data);
            });
        },
        accionAgregarTipoCaractHongo({ commit }, data) {
            commit("mutacionAgregarTipoCaractHongo", data);
        },
        obtenerInfoCaractActinomicetos({ commit }) {
            axios.get("/api/info-caract-actinomicetos").then(res => {
                commit("llenarInfoCaractActinomicetos", res.data);
            });
        },
        accionAgregarTipoCaractActinomiceto({ commit }, data) {
            commit("mutacionAgregarTipoCaractActinomiceto", data);
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
        },
        obtenerUsers({ commit }, data) {
            axios.get("/api/users").then(res => {
                commit("llenarUsuarios", res.data);
            });
        },
        obtenerTiposUsers({ commit }) {
            axios.get("/api/tipos-users").then(res => {
                commit("llenarTiposUsers", res.data);
            });
        },
        accionTipoUsuario({ commit }, data) {
            commit("mutacionTipoUsuario", data);
        },
        accionUsuario({ commit }, data) {
            commit("mutacionUsuario", data);
        },
        accionModificarAuth({ commit }, data) {
            commit("mutacionModificarAuth", data);
        }
    },
    modules: {}
});