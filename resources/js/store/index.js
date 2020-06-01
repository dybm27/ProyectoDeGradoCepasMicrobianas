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
        getGrupoCepa(state) {
            return state.tipos.gmicrobianos.find(
                gmicrobiano =>
                    gmicrobiano.id === state.cepa.cepa.grupo_microbiano_id
            );
        },
        getPhylums(state) {
            return state.tipos.phylums;
        },
        getPhylumCepa(state) {
            return state.tipos.phylums.find(
                phylum => phylum.id === state.cepa.phylum_id
            );
        },
        getOrdens(state) {
            return state.tipos.ordens;
        },
        getOrdenCepa(state) {
            return state.tipos.ordens.find(
                orden => orden.id === state.cepa.orden_id
            );
        },
        getReinos(state) {
            return state.tipos.reinos;
        },
        getReinoCepa(state) {
            return state.tipos.reinos.find(
                reino => reino.id === state.cepa.reino_id
            );
        },
        getDivisiones(state) {
            return state.tipos.divisiones;
        },
        getDivisionCepa(state) {
            return state.tipos.divisiones.find(
                division => division.id === state.cepa.division_id
            );
        },
        getClases(state) {
            return state.tipos.clases;
        },
        getClaseCepa(state) {
            return state.tipos.clases.find(
                clase => clase.id === state.cepa.clase_id
            );
        },
        getFamilias(state) {
            return state.tipos.familias;
        },
        getFamiliaCepa(state) {
            return state.tipos.familias.find(
                familia => familia.id === state.cepa.familia_id
            );
        },
        getInfoCaractMacroBacterias(state) {
            return state.info_caract_bacterias.caract_macro;
        },
        getInfoCaractMacroBacteriasById: (state, getters) => data => {
            switch (data.tipo) {
                case "forma":
                    return getters.getInfoCaractMacroBacterias.formas_macros.find(
                        forma => forma.id === data.id
                    );
                case "borde":
                    return getters.getInfoCaractMacroBacterias.bordes.find(
                        borde => borde.id === data.id
                    );
                case "detalle":
                    return getters.getInfoCaractMacroBacterias.detalle_opticos.find(
                        detalle => detalle.id === data.id
                    );
                case "elevacion":
                    return getters.getInfoCaractMacroBacterias.elevacions.find(
                        elevacion => elevacion.id === data.id
                    );
                case "superficie":
                    return getters.getInfoCaractMacroBacterias.superficies.find(
                        superficie => superficie.id === data.id
                    );
                case "color":
                    return getters.getInfoCaractMacroBacterias.colors.find(
                        color => color.id === data.id
                    );
            }
        },
        getInfoCaractMicroBacterias(state) {
            return state.info_caract_bacterias.caract_micro;
        },
        getInfoCaractMicroBacteriasById: (state, getters) => data => {
            switch (data.tipo) {
                case "forma":
                    return getters.getInfoCaractMicroBacterias.formas_micros.find(
                        forma => forma.id === data.id
                    );
            }
        },
        getInfoMetodoConserBacterias(state) {
            return state.info_caract_bacterias.metodo_conser;
        },
        getInfoMetodoConserBacteriasById: (state, getters) => data => {
            switch (data.tipo) {
                case "tipo_metodo":
                    return getters.getInfoMetodoConserBacterias.tipo_metodo.find(
                        tipo => tipo.id === data.id
                    );
                case "tipo_agar":
                    return getters.getInfoMetodoConserBacterias.tipo_agar.find(
                        tipo => tipo.id === data.id
                    );
            }
        },
        getInfoCaractMacroLevaduras(state) {
            return state.info_caract_levaduras.caract_macro;
        },
        getInfoCaractMacroLevadurasById: (state, getters) => data => {
            switch (data.tipo) {
                case "textura":
                    return getters.getInfoCaractMacroLevaduras.texturas.find(
                        textura => textura.id === data.id
                    );
                case "color":
                    return getters.getInfoCaractMacroLevaduras.colors.find(
                        color => color.id === data.id
                    );
            }
        },
        getInfoMetodoConserLevaduras(state) {
            return state.info_caract_levaduras.metodo_conser;
        },
        getInfoMetodoConserLevadurasById: (state, getters) => data => {
            switch (data.tipo) {
                case "tipo_metodo":
                    return getters.getInfoMetodoConserLevaduras.tipo_metodo.find(
                        tipo => tipo.id === data.id
                    );
            }
        },
        getInfoCaractMacroHongos(state) {
            return state.info_caract_hongos.caract_macro;
        },
        getInfoCaractMacroHongosById: (state, getters) => data => {
            switch (data.tipo) {
                case "textura":
                    return getters.getInfoCaractMacroHongos.texturas.find(
                        textura => textura.id === data.id
                    );
                case "color":
                    return getters.getInfoCaractMacroHongos.colores.find(
                        color => color.id === data.id
                    );
            }
        },
        getInfoCaractMicroHongos(state) {
            return state.info_caract_hongos.caract_micro;
        },
        getInfoCaractMicroHongosById: (state, getters) => data => {
            switch (data.tipo) {
                case "conidioforo":
                    return getters.getInfoCaractMicroHongos.conidioforos.find(
                        conidioforo => conidioforo.id === data.id
                    );
                case "asexual":
                    return getters.getInfoCaractMicroHongos.esporas_asexuales.find(
                        asexual => asexual.id === data.id
                    );
                case "sexual":
                    return getters.getInfoCaractMicroHongos.esporas_sexuales.find(
                        sexual => sexual.id === data.id
                    );
            }
        },
        getInfoMetodoConserHongos(state) {
            return state.info_caract_hongos.metodo_conser;
        },
        getInfoMetodoConserHongosById: (state, getters) => data => {
            switch (data.tipo) {
                case "tipo_metodo":
                    return getters.getInfoMetodoConserHongos.tipo_metodo.find(
                        tipo => tipo.id === data.id
                    );
            }
        },
        getInfoCaractMacroActinomicetos(state) {
            return state.info_caract_actinomicetos.caract_macro;
        },
        getInfoCaractMacroActinomicetosById: (state, getters) => data => {
            switch (data.tipo) {
                case "textura":
                    return getters.getInfoCaractMacroActinomicetos.texturas.find(
                        textura => textura.id === data.id
                    );
                case "color":
                    return getters.getInfoCaractMacroActinomicetos.colors.find(
                        color => color.id === data.id
                    );
                case "forma":
                    return getters.getInfoCaractMacroActinomicetos.formas_macros.find(
                        forma => forma.id === data.id
                    );
                case "superficie":
                    return getters.getInfoCaractMacroActinomicetos.superficies.find(
                        superficie => superficie.id === data.id
                    );
                case "borde":
                    return getters.getInfoCaractMacroActinomicetos.bordes.find(
                        borde => borde.id === data.id
                    );
                case "pigmento":
                    return getters.getInfoCaractMacroActinomicetos.pigmentos.find(
                        pigmento => pigmento.id === data.id
                    );
            }
        },
        getInfoCaractMicroActinomicetos(state) {
            return state.info_caract_actinomicetos.caract_micro;
        },
        getInfoCaractMicroActinomicetosById: (state, getters) => data => {
            switch (data.tipo) {
                case "forma":
                    return getters.getInfoCaractMicroActinomicetos.formas_micros.find(
                        forma => forma.id === data.id
                    );
                case "tincion":
                    return getters.getInfoCaractMicroActinomicetos.tincions.find(
                        tincion => tincion.id === data.id
                    );
                case "micelio":
                    return getters.getInfoCaractMicroActinomicetos.micelios.find(
                        micelio => micelio.id === data.id
                    );
                case "conidioforo":
                    return getters.getInfoCaractMicroActinomicetos.conidioforos.find(
                        conidioforo => conidioforo.id === data.id
                    );
            }
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
        },
        mutacionLimpiarCepa(state) {
            state.cepa = null;
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
        mutacionEditarTipoCaractBacteria(state, data) {
            switch (data.tipo) {
                case "forma_macro":
                    var indice = state.info_caract_bacterias.caract_macro.formas_macros.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.formas_macros.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "borde":
                    var indice = state.info_caract_bacterias.caract_macro.bordes.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.bordes.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "detalle":
                    var indice = state.info_caract_bacterias.caract_macro.detalle_opticos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.detalle_opticos.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "elevacion":
                    var indice = state.info_caract_bacterias.caract_macro.elevacions.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.elevacions.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "superficie":
                    var indice = state.info_caract_bacterias.caract_macro.superficies.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.superficies.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "color":
                    var indice = state.info_caract_bacterias.caract_macro.colors.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.colors.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "forma_micro":
                    var indice = state.info_caract_bacterias.caract_micro.formas_micros.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_micro.formas_micros.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "metodo_conser":
                    var indice = state.info_caract_bacterias.metodo_conser.tipo_metodo.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.metodo_conser.tipo_metodo.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "tipo_agar":
                    var indice = state.info_caract_bacterias.metodo_conser.tipo_agar.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.metodo_conser.tipo_agar.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
            }
        },
        mutacionEliminarTipoCaractBacteria(state, data) {
            switch (data.tipo) {
                case "forma_macro":
                    var indice = state.info_caract_bacterias.caract_macro.formas_macros.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.formas_macros.splice(
                        indice,
                        1
                    );
                    break;
                case "borde":
                    var indice = state.info_caract_bacterias.caract_macro.bordes.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.bordes.splice(
                        indice,
                        1
                    );
                    break;
                case "detalle":
                    var indice = state.info_caract_bacterias.caract_macro.detalle_opticos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.detalle_opticos.splice(
                        indice,
                        1
                    );
                    break;
                case "elevacion":
                    var indice = state.info_caract_bacterias.caract_macro.elevacions.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.elevacions.splice(
                        indice,
                        1
                    );
                    break;
                case "superficie":
                    var indice = state.info_caract_bacterias.caract_macro.superficies.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.superficies.splice(
                        indice,
                        1
                    );
                    break;
                case "color":
                    var indice = state.info_caract_bacterias.caract_macro.colors.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_macro.colors.splice(
                        indice,
                        1
                    );
                    break;
                case "forma_micro":
                    var indice = state.info_caract_bacterias.caract_micro.formas_micros.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.caract_micro.formas_micros.splice(
                        indice,
                        1
                    );
                    break;
                case "metodo_conser":
                    var indice = state.info_caract_bacterias.metodo_conser.tipo_metodo.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.metodo_conser.tipo_metodo.splice(
                        indice,
                        1
                    );
                    break;
                case "tipo_agar":
                    var indice = state.info_caract_bacterias.metodo_conser.tipo_agar.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_bacterias.metodo_conser.tipo_agar.splice(
                        indice,
                        1
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
        mutacionEditarTipoCaractLevadura(state, data) {
            switch (data.tipo) {
                case "color":
                    var indice = state.info_caract_levaduras.caract_macro.colors.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_levaduras.caract_macro.colors.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "textura":
                    var indice = state.info_caract_levaduras.caract_macro.texturas.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_levaduras.caract_macro.texturas.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "metodo_conser":
                    var indice = state.info_caract_levaduras.metodo_conser.tipo_metodo.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_levaduras.metodo_conser.tipo_metodo.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
            }
        },
        mutacionEliminarTipoCaractLevadura(state, data) {
            switch (data.tipo) {
                case "color":
                    var indice = state.info_caract_levaduras.caract_macro.colors.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_levaduras.caract_macro.colors.splice(
                        indice,
                        1
                    );
                    break;
                case "textura":
                    var indice = state.info_caract_levaduras.caract_macro.texturas.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_levaduras.caract_macro.texturas.splice(
                        indice,
                        1
                    );
                    break;
                case "metodo_conser":
                    var indice = state.info_caract_levaduras.metodo_conser.tipo_metodo.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_levaduras.metodo_conser.tipo_metodo.splice(
                        indice,
                        1
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
        mutacionEditarTipoCaractHongo(state, data) {
            switch (data.tipo) {
                case "color":
                    var indice = state.info_caract_hongos.caract_macro.colores.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_macro.colores.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "textura":
                    var indice = state.info_caract_hongos.caract_macro.texturas.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_macro.texturas.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "conidioforo":
                    var indice = state.info_caract_hongos.caract_micro.conidioforos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.conidioforos.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "espora_asexual":
                    var indice = state.info_caract_hongos.caract_micro.esporas_asexuales.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.esporas_asexuales.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "espora_sexual":
                    var indice = state.info_caract_hongos.caract_micro.esporas_sexuales.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.esporas_sexuales.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "metodo_conser":
                    var indice = state.info_caract_hongos.metodo_conser.tipo_metodo.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.metodo_conser.tipo_metodo.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
            }
        },
        mutacionEliminarTipoCaractHongo(state, data) {
            switch (data.tipo) {
                case "color":
                    var indice = state.info_caract_hongos.caract_macro.colores.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_macro.colores.splice(
                        indice,
                        1
                    );
                    break;
                case "textura":
                    var indice = state.info_caract_hongos.caract_macro.texturas.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_macro.texturas.splice(
                        indice,
                        1
                    );
                    break;
                case "conidioforo":
                    var indice = state.info_caract_hongos.caract_micro.conidioforos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.conidioforos.splice(
                        indice,
                        1
                    );
                    break;
                case "espora_asexual":
                    var indice = state.info_caract_hongos.caract_micro.esporas_asexuales.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.esporas_asexuales.splice(
                        indice,
                        1
                    );
                    break;
                case "espora_sexual":
                    var indice = state.info_caract_hongos.caract_micro.esporas_sexuales.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.esporas_sexuales.splice(
                        indice,
                        1
                    );
                    break;
                case "metodo_conser":
                    var indice = state.info_caract_hongos.metodo_conser.tipo_metodo.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.metodo_conser.tipo_metodo.splice(
                        indice,
                        1
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
        mutacionEditarTipoCaractActinomiceto(state, data) {
            switch (data.tipo) {
                case "forma_macro":
                    var indice = state.info_caract_actinomicetos.caract_macro.formas_macros.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.formas_macros.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "borde":
                    var indice = state.info_caract_actinomicetos.caract_macro.bordes.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.bordes.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "textura":
                    var indice = state.info_caract_actinomicetos.caract_macro.texturas.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.texturas.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "pigmento":
                    var indice = state.info_caract_actinomicetos.caract_macro.pigmentos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.pigmentos.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "superficie":
                    var indice = state.info_caract_actinomicetos.caract_macro.superficies.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.superficies.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "color":
                    var indice = state.info_caract_actinomicetos.caract_macro.colors.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.colors.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "forma_micro":
                    var indice = state.info_caract_actinomicetos.caract_micro.formas_micros.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_micro.formas_micros.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "tincion":
                    var indice = state.info_caract_actinomicetos.caract_micro.tincions.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_micro.tincions.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "micelio":
                    var indice = state.info_caract_actinomicetos.caract_micro.micelios.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_micro.micelios.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "conidioforo":
                    var indice = state.info_caract_actinomicetos.caract_micro.conidioforos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_micro.conidioforos.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
            }
        },
        mutacionEliminarTipoCaractActinomiceto(state, data) {
            switch (data.tipo) {
                case "forma_macro":
                    var indice = state.info_caract_actinomicetos.caract_macro.formas_macros.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.formas_macros.splice(
                        indice,
                        1
                    );
                    break;
                case "borde":
                    var indice = state.info_caract_actinomicetos.caract_macro.bordes.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.bordes.splice(
                        indice,
                        1
                    );
                    break;
                case "textura":
                    var indice = state.info_caract_actinomicetos.caract_macro.texturas.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.texturas.splice(
                        indice,
                        1
                    );
                    break;
                case "pigmento":
                    var indice = state.info_caract_actinomicetos.caract_macro.pigmentos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.pigmentos.splice(
                        indice,
                        1
                    );
                    break;
                case "superficie":
                    var indice = state.info_caract_actinomicetos.caract_macro.superficies.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.superficies.splice(
                        indice,
                        1
                    );
                    break;
                case "color":
                    var indice = state.info_caract_actinomicetos.caract_macro.colors.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_macro.colors.splice(
                        indice,
                        1
                    );
                    break;
                case "forma_micro":
                    var indice = state.info_caract_actinomicetos.caract_micro.formas_micros.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_micro.formas_micros.splice(
                        indice,
                        1
                    );
                    break;
                case "tincion":
                    var indice = state.info_caract_actinomicetos.caract_micro.tincions.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_micro.tincions.splice(
                        indice,
                        1
                    );
                    break;
                case "micelio":
                    var indice = state.info_caract_actinomicetos.caract_micro.micelios.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_micro.micelios.splice(
                        indice,
                        1
                    );
                    break;
                case "conidioforo":
                    var indice = state.info_caract_actinomicetos.caract_micro.conidioforos.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_actinomicetos.caract_micro.conidioforos.splice(
                        indice,
                        1
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
        mutacionModificarAuth(state, data) {
            state.auth = data.data;
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
        },
        obtenerInfoCaractBacterias({ commit }) {
            axios.get("/info-panel/info-caract-bacterias").then(res => {
                commit("llenarInfoCaractBacterias", res.data);
            });
        },
        accionAgregarTipoCaractBacteria({ commit }, data) {
            commit("mutacionAgregarTipoCaractBacteria", data);
        },
        accionEditarTipoCaractBacteria({ commit }, data) {
            commit("mutacionEditarTipoCaractBacteria", data);
        },
        accionEliminarTipoCaractBacteria({ commit }, data) {
            commit("mutacionEliminarTipoCaractBacteria", data);
        },
        obtenerInfoCaractLevaduras({ commit }) {
            axios.get("/info-panel/info-caract-levaduras").then(res => {
                commit("llenarInfoCaractLevaduras", res.data);
            });
        },
        accionAgregarTipoCaractLevadura({ commit }, data) {
            commit("mutacionAgregarTipoCaractLevadura", data);
        },
        accionEditarTipoCaractLevadura({ commit }, data) {
            commit("mutacionEditarTipoCaractLevadura", data);
        },
        accionEliminarTipoCaractLevadura({ commit }, data) {
            commit("mutacionEliminarTipoCaractLevadura", data);
        },
        obtenerInfoCaractHongos({ commit }) {
            axios.get("/info-panel/info-caract-hongos").then(res => {
                commit("llenarInfoCaractHongos", res.data);
            });
        },
        accionAgregarTipoCaractHongo({ commit }, data) {
            commit("mutacionAgregarTipoCaractHongo", data);
        },
        accionEditarTipoCaractHongo({ commit }, data) {
            commit("mutacionEditarTipoCaractHongo", data);
        },
        accionEliminarTipoCaractHongo({ commit }, data) {
            commit("mutacionEliminarTipoCaractHongo", data);
        },
        obtenerInfoCaractActinomicetos({ commit }) {
            axios.get("/info-panel/info-caract-actinomicetos").then(res => {
                commit("llenarInfoCaractActinomicetos", res.data);
            });
        },
        accionAgregarTipoCaractActinomiceto({ commit }, data) {
            commit("mutacionAgregarTipoCaractActinomiceto", data);
        },
        accionEditarTipoCaractActinomiceto({ commit }, data) {
            commit("mutacionEditarTipoCaractActinomiceto", data);
        },
        accionEliminarTipoCaractActinomiceto({ commit }, data) {
            commit("mutacionEliminarTipoCaractActinomiceto", data);
        },
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
        },
        accionModificarAuth({ commit }, data) {
            commit("mutacionModificarAuth", data);
        },
        limpiarCepa({ commit }) {
            commit("mutacionLimpiarCepa");
        }
    },
    modules: {}
});
