export default {
    namespaced: true,
    state: {
        info_caract_bacterias: [],
        info_caract_levaduras: [],
        info_caract_hongos: [],
        info_caract_actinomicetos: []
    },
    getters: {
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
        getInfoCaractMacroBacteriasByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "forma_macro":
                    return getters.getInfoCaractMacroBacterias.formas_macros.find(
                        forma =>
                            forma.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "borde":
                    return getters.getInfoCaractMacroBacterias.bordes.find(
                        borde =>
                            borde.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "detalle":
                    return getters.getInfoCaractMacroBacterias.detalle_opticos.find(
                        detalle =>
                            detalle.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "elevacion":
                    return getters.getInfoCaractMacroBacterias.elevacions.find(
                        elevacion =>
                            elevacion.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "superficie":
                    return getters.getInfoCaractMacroBacterias.superficies.find(
                        superficie =>
                            superficie.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "color":
                    return getters.getInfoCaractMacroBacterias.colors.find(
                        color =>
                            color.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoCaractMicroBacteriasByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "forma_micro":
                    return getters.getInfoCaractMicroBacterias.formas_micros.find(
                        forma =>
                            forma.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoMetodoConserBacteriasByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "tipo_metodo":
                    return getters.getInfoMetodoConserBacterias.tipo_metodo.find(
                        tipo =>
                            tipo.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "tipo_agar":
                    return getters.getInfoMetodoConserBacterias.tipo_agar.find(
                        tipo =>
                            tipo.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoCaractMacroLevadurasByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "textura":
                    return getters.getInfoCaractMacroLevaduras.texturas.find(
                        textura =>
                            textura.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "color":
                    return getters.getInfoCaractMacroLevaduras.colors.find(
                        color =>
                            color.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoMetodoConserLevadurasByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "tipo_metodo":
                    return getters.getInfoMetodoConserLevaduras.tipo_metodo.find(
                        tipo =>
                            tipo.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoCaractMacroHongosByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "textura":
                    return getters.getInfoCaractMacroHongos.texturas.find(
                        textura =>
                            textura.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "color":
                    return getters.getInfoCaractMacroHongos.colores.find(
                        color =>
                            color.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoCaractMicroHongosByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "conidioforo":
                    return getters.getInfoCaractMicroHongos.conidioforos.find(
                        conidioforo =>
                            conidioforo.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "esporaA":
                    return getters.getInfoCaractMicroHongos.esporas_asexuales.find(
                        asexual =>
                            asexual.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "esporaS":
                    return getters.getInfoCaractMicroHongos.esporas_sexuales.find(
                        sexual =>
                            sexual.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoMetodoConserHongosByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "tipo_metodo":
                    return getters.getInfoMetodoConserHongos.tipo_metodo.find(
                        tipo =>
                            tipo.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoCaractMacroActinomicetosByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "textura":
                    return getters.getInfoCaractMacroActinomicetos.texturas.find(
                        textura =>
                            textura.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "color":
                    return getters.getInfoCaractMacroActinomicetos.colors.find(
                        color =>
                            color.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "forma_macro":
                    return getters.getInfoCaractMacroActinomicetos.formas_macros.find(
                        forma =>
                            forma.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "superficie":
                    return getters.getInfoCaractMacroActinomicetos.superficies.find(
                        superficie =>
                            superficie.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "borde":
                    return getters.getInfoCaractMacroActinomicetos.bordes.find(
                        borde =>
                            borde.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "pigmento":
                    return getters.getInfoCaractMacroActinomicetos.pigmentos.find(
                        pigmento =>
                            pigmento.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
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
        getInfoCaractMicroActinomicetosByNombre: (state, getters) => data => {
            switch (data.tipo) {
                case "forma_micro":
                    return getters.getInfoCaractMicroActinomicetos.formas_micros.find(
                        forma =>
                            forma.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "tincion":
                    return getters.getInfoCaractMicroActinomicetos.tincions.find(
                        tincion =>
                            tincion.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "micelio":
                    return getters.getInfoCaractMicroActinomicetos.micelios.find(
                        micelio =>
                            micelio.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
                case "conidioforo":
                    return getters.getInfoCaractMicroActinomicetos.conidioforos.find(
                        conidioforo =>
                            conidioforo.nombre.toUpperCase() ===
                            data.nombre.toUpperCase()
                    );
            }
        }
    },
    mutations: {
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
                case "tipo_metodo":
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
                case "tipo_metodo":
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
                case "tipo_metodo":
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
                case "tipo_metodo":
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
                case "tipo_metodo":
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
                case "tipo_metodo":
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
                case "esporaA":
                    state.info_caract_hongos.caract_micro.esporas_asexuales.push(
                        data.info
                    );
                    break;
                case "esporaS":
                    state.info_caract_hongos.caract_micro.esporas_sexuales.push(
                        data.info
                    );
                    break;
                case "tipo_metodo":
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
                case "esporaA":
                    var indice = state.info_caract_hongos.caract_micro.esporas_asexuales.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.esporas_asexuales.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "esporaS":
                    var indice = state.info_caract_hongos.caract_micro.esporas_sexuales.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.esporas_sexuales.splice(
                        indice,
                        1,
                        data.info
                    );
                    break;
                case "tipo_metodo":
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
                case "esporaA":
                    var indice = state.info_caract_hongos.caract_micro.esporas_asexuales.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.esporas_asexuales.splice(
                        indice,
                        1
                    );
                    break;
                case "esporaS":
                    var indice = state.info_caract_hongos.caract_micro.esporas_sexuales.findIndex(
                        tipo => tipo.id === data.info.id
                    );
                    state.info_caract_hongos.caract_micro.esporas_sexuales.splice(
                        indice,
                        1
                    );
                    break;
                case "tipo_metodo":
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
        }
    },
    actions: {
        obtenerInfoCaractBacterias({ commit }) {
            axios
                .get("/info-panel/info-caract-bacterias")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarInfoCaractBacterias", res.data);
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.$router.push("/sin-acceso");
                    } else if (
                        error.response.status === 405 ||
                        error.response.status === 401
                    ) {
                        window.location.href = "/";
                    }
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
            axios
                .get("/info-panel/info-caract-levaduras")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarInfoCaractLevaduras", res.data);
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.$router.push("/sin-acceso");
                    } else if (
                        error.response.status === 405 ||
                        error.response.status === 401
                    ) {
                        window.location.href = "/";
                    }
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
            axios
                .get("/info-panel/info-caract-hongos")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarInfoCaractHongos", res.data);
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.$router.push("/sin-acceso");
                    } else if (
                        error.response.status === 405 ||
                        error.response.status === 401
                    ) {
                        window.location.href = "/";
                    }
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
            axios
                .get("/info-panel/info-caract-actinomicetos")
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    }
                    commit("llenarInfoCaractActinomicetos", res.data);
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.$router.push("/sin-acceso");
                    } else if (
                        error.response.status === 405 ||
                        error.response.status === 401
                    ) {
                        window.location.href = "/";
                    }
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
        }
    }
};
