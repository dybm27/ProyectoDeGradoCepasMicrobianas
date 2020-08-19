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

let user = document.head.querySelector('meta[name="user"]');
let permisos = document.head.querySelector('meta[name="permisos-user"]');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        auth: JSON.parse(user.content),
        permisos: JSON.parse(permisos.content)
    },
    getters: {
        getPermiso(state) {
            return state.permisos;
        },
        getPermisoByNombre: state => nombre => {
            return state.permisos.find(
                permiso => permiso.nombre.toUpperCase() === nombre.toUpperCase()
            );
        },
        getPermisoByNombres: (state, getters) => nombres => {
            let res = false;
            nombres.forEach(nombre => {
                if (getters.getPermisoByNombre(nombre)) {
                    res = true;
                }
            });
            return res;
        }
    },
    mutations: {
        mutacionModificarAuth(state, data) {
            state.auth = data;
        },
        guardarPermisos(state, data) {
            state.permisos = data;
        }
    },
    actions: {
        accionModificarAuth({ commit }, data) {
            commit("mutacionModificarAuth", data);
        },
        limpiarCepa({ commit }) {
            commit("mutacionLimpiarCepa");
        },
        guardarPermisosAuth({ commit }, data) {
            commit("guardarPermisos", data);
        }
    },
    modules: {
        usuarios,
        cepas,
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
