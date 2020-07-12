import Vue from "vue";
import Vuex from "vuex";

//modulos
import usuarios from "./modulos/usuarios";
import cepa from "./modulos/cepa";
import cepas from "./modulos/cepas";
import info_caract from "./modulos/info-caract";
import info_cepas from "./modulos/info-cepas";
import imagenes_login from "./modulos/imagenes-login";
import quienes_somos from "./modulos/quienes-somos";
import investigadores from "./modulos/investigadores";
import documentos from "./modulos/documentos";
import equipamientos from "./modulos/equipamientos";
import publicidad from "./modulos/publicidad";

//let userLogueado = document.head.querySelector('meta[name="user-logueado"]');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //  auth: JSON.parse(userLogueado.content)
        auth: ""
    },
    getters: {
        getUserAuth(state) {
            return state.auth;
        }
    },
    mutations: {
        mutacionModificarAuth(state, data) {
            state.auth = data.data;
        }
    },
    actions: {
        accionModificarAuth({ commit }, data) {
            commit("mutacionModificarAuth", data);
        }
    },
    modules: {
        usuarios,
        // cepas,
        cepa,
        info_caract,
        info_cepas,
        imagenes_login,
        quienes_somos,
        investigadores,
        documentos,
        equipamientos,
        publicidad
    }
});
