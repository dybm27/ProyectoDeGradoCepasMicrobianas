require("./bootstrap");
window.Vue = require("vue");

import router from "./router/index";
import store from "./store/index";
import VueEvents from "vue-events";
import VueToastr from "vue-toastr";
import VModal from "vue-js-modal";
import VTooltip from "v-tooltip";
import Storage from "vue-ls";
import CKEditor from "@ckeditor/ckeditor5-vue";
Vue.use(CKEditor);
Vue.use(VTooltip);
Vue.use(VModal);
Vue.use(VueEvents);
Vue.use(VueToastr);
Vue.use(Storage);

Vue.component("app-majumba", require("./layouts/App.vue").default);
// ------------- cepas-----------------------------------------
Vue.component(
    "acciones_cepas",
    require("./components/cepas/AccionesCepasComponent.vue").default
);
Vue.component(
    "checkboxs_publicar",
    require("./components/cepas/CheckboxsPublicarComponent.vue").default
);
Vue.component(
    "acciones_cepas_bacterias",
    require("./components/cepas/bacterias/tablas/AccionesCepasComponent.vue").default
);
Vue.component(
    "checkboxs_publicar_bacterias",
    require("./components/cepas/bacterias/tablas/CheckboxsPublicarComponent.vue").default
);
Vue.component(
    "acciones_cepas_levaduras",
    require("./components/cepas/levaduras/tablas/AccionesCepasComponent.vue").default
);
Vue.component(
    "checkboxs_publicar_levaduras",
    require("./components/cepas/levaduras/tablas/CheckboxsPublicarComponent.vue").default
);
Vue.component(
    "acciones_cepas_hongos",
    require("./components/cepas/hongos/tablas/AccionesCepasComponent.vue").default
);
Vue.component(
    "checkboxs_publicar_hongos",
    require("./components/cepas/hongos/tablas/CheckboxsPublicarComponent.vue").default
);
Vue.component(
    "acciones_cepas_actinomicetos",
    require("./components/cepas/actinomicetos/tablas/AccionesCepasComponent.vue").default
);
Vue.component(
    "checkboxs_publicar_actinomicetos",
    require("./components/cepas/actinomicetos/tablas/CheckboxsPublicarComponent.vue").default
);
Vue.component(
    "my-detail-row-h-l-a",
    require("./components/cepas/DetailRowHLAComponent.vue").default
);
Vue.component(
    "my-detail-row-cepas",
    require("./components/cepas/DetailRowCepasComponent.vue").default
);
Vue.component(
    "acciones_tabla_metodo_conser_hongo",
    require("./components/cepas/hongos/tablas/AccionesMetodoConserHongoComponent.vue")
        .default
);
Vue.component(
    "acciones_tabla_metodo_conser_bacteria",
    require("./components/cepas/bacterias/tablas/AccionesMetodoConserBacteriaComponent.vue")
        .default
);
Vue.component(
    "acciones_tabla_metodo_conser_levadura",
    require("./components/cepas/levaduras/tablas/AccionesMetodoConserLevaduraComponent.vue")
        .default
);
// --------------- acciones otra-info-cepas -------------------
Vue.component(
    "acciones_generos",
    require("./components/otra-info/tablas/cepas/generos/AccionesGenerosComponent.vue")
        .default
);
Vue.component(
    "acciones_especies",
    require("./components/otra-info/tablas/cepas/especies/AccionesEspeciesComponent.vue")
        .default
);
Vue.component(
    "acciones_clases",
    require("./components/otra-info/tablas/cepas/clases/AccionesClasesComponent.vue")
        .default
);
Vue.component(
    "acciones_phylums",
    require("./components/otra-info/tablas/cepas/phylums/AccionesPhylumsComponent.vue")
        .default
);
Vue.component(
    "acciones_ordens",
    require("./components/otra-info/tablas/cepas/ordens/AccionesOrdensComponent.vue")
        .default
);
Vue.component(
    "acciones_reinos",
    require("./components/otra-info/tablas/cepas/reinos/AccionesReinosComponent.vue")
        .default
);
Vue.component(
    "acciones_familias",
    require("./components/otra-info/tablas/cepas/familias/AccionesFamiliasComponent.vue")
        .default
);
Vue.component(
    "acciones_divisions",
    require("./components/otra-info/tablas/cepas/divisions/AccionesDivisionsComponent.vue")
        .default
);
// --------------- acciones otra-info-bacterias -------------------
Vue.component(
    "acciones_formas_macro_bacteria",
    require("./components/otra-info/tablas/bacterias/formas-macro/AccionesFormasMacroComponent.vue")
        .default
);
Vue.component(
    "acciones_bordes_bacteria",
    require("./components/otra-info/tablas/bacterias/bordes/AccionesBordesComponent.vue")
        .default
);
Vue.component(
    "acciones_detalles_bacteria",
    require("./components/otra-info/tablas/bacterias/detalles/AccionesDetallesComponent.vue")
        .default
);
Vue.component(
    "acciones_elevacions_bacteria",
    require("./components/otra-info/tablas/bacterias/elevacions/AccionesElevacionsComponent.vue")
        .default
);
Vue.component(
    "acciones_superficies_bacteria",
    require("./components/otra-info/tablas/bacterias/superficies/AccionesSuperficiesComponent.vue")
        .default
);
Vue.component(
    "acciones_colors_bacteria",
    require("./components/otra-info/tablas/bacterias/colors/AccionesColorsComponent.vue")
        .default
);
Vue.component(
    "acciones_formas_micro_bacteria",
    require("./components/otra-info/tablas/bacterias/formas-micro/AccionesFormasMicroComponent.vue")
        .default
);
Vue.component(
    "acciones_tipos_metodos_bacteria",
    require("./components/otra-info/tablas/bacterias/tipos-metodos/AccionesTiposMetodosComponent.vue")
        .default
);
Vue.component(
    "acciones_tipos_agars_bacteria",
    require("./components/otra-info/tablas/bacterias/tipos-agars/AccionesTiposAgarsComponent.vue")
        .default
);
// --------------- acciones otra-info-hongos -------------------
Vue.component(
    "acciones_colors_hongo",
    require("./components/otra-info/tablas/hongos/colors/AccionesColorsComponent.vue")
        .default
);
Vue.component(
    "acciones_texturas_hongo",
    require("./components/otra-info/tablas/hongos/texturas/AccionesTexturasComponent.vue")
        .default
);
Vue.component(
    "acciones_conidioforos_hongo",
    require("./components/otra-info/tablas/hongos/conidioforos/AccionesConidioforosComponent.vue")
        .default
);
Vue.component(
    "acciones_esporas_asexual_hongo",
    require("./components/otra-info/tablas/hongos/esporas-asexual/AccionesEsporasAsexualComponent.vue")
        .default
);
Vue.component(
    "acciones_esporas_sexual_hongo",
    require("./components/otra-info/tablas/hongos/esporas-sexual/AccionesEsporasSexualComponent.vue")
        .default
);
Vue.component(
    "acciones_tipos_metodos_hongo",
    require("./components/otra-info/tablas/hongos/tipos-metodos/AccionesTiposMetodosComponent.vue")
        .default
);
// --------------- acciones otra-info-levaduras -------------------
Vue.component(
    "acciones_colors_levadura",
    require("./components/otra-info/tablas/levaduras/colors/AccionesColorsComponent.vue")
        .default
);
Vue.component(
    "acciones_texturas_levadura",
    require("./components/otra-info/tablas/levaduras/texturas/AccionesTexturasComponent.vue")
        .default
);
Vue.component(
    "acciones_tipos_metodos_levadura",
    require("./components/otra-info/tablas/levaduras/tipos-metodos/AccionesTiposMetodosComponent.vue")
        .default
);
// --------------- acciones otra-info-actinomicetos -------------------
Vue.component(
    "acciones_formas_macro_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/formas-macro/AccionesFormasMacroComponent.vue")
        .default
);
Vue.component(
    "acciones_bordes_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/bordes/AccionesBordesComponent.vue")
        .default
);
Vue.component(
    "acciones_pigmentos_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/pigmentos/AccionesPigmentosComponent.vue")
        .default
);
Vue.component(
    "acciones_texturas_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/texturas/AccionesTexturasComponent.vue")
        .default
);
Vue.component(
    "acciones_superficies_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/superficies/AccionesSuperficiesComponent.vue")
        .default
);
Vue.component(
    "acciones_colors_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/colors/AccionesColorsComponent.vue")
        .default
);
Vue.component(
    "acciones_formas_micro_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/formas-micro/AccionesFormasMicroComponent.vue")
        .default
);
Vue.component(
    "acciones_tincions_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/tincions/AccionesTincionsComponent.vue")
        .default
);
Vue.component(
    "acciones_micelios_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/micelios/AccionesMiceliosComponent.vue")
        .default
);
Vue.component(
    "acciones_conidioforos_actinomiceto",
    require("./components/otra-info/tablas/actinomicetos/conidioforos/AccionesConidioforosComponent.vue")
        .default
);
// --------------- acciones usuarios -------------------
Vue.component(
    "acciones_tabla_usuarios",
    require("./components/gestionar_usuarios/usuarios/AccionesComponent.vue")
        .default
);
// --------------- acciones investigadores -------------------
Vue.component(
    "acciones_investigadores",
    require("./components/sitio-web/investigadores/AccionesInvestigadoresComponent.vue")
        .default
);
// --------------- acciones equipaminetos -------------------
Vue.component(
    "acciones_equipamientos",
    require("./components/sitio-web/equipamientos/AccionesComponent.vue")
        .default
);
Vue.component(
    "checkboxs_equipamientos",
    require("./components/sitio-web/equipamientos/CheckboxsPublicarComponent.vue")
        .default
);
// --------------- acciones documentos -------------------
Vue.component(
    "acciones_proyectos",
    require("./components/sitio-web/documentos/proyectos/AccionesComponent.vue")
        .default
);
Vue.component(
    "checkboxs_proyectos",
    require("./components/sitio-web/documentos/proyectos/CheckboxsPublicarComponent.vue")
        .default
);
Vue.component(
    "descargar_proyecto",
    require("./components/sitio-web/documentos/proyectos/DescargarComponent.vue")
        .default
);
Vue.component(
    "acciones_publicaciones",
    require("./components/sitio-web/documentos/publicaciones/AccionesComponent.vue")
        .default
);
Vue.component(
    "checkboxs_publicaciones",
    require("./components/sitio-web/documentos/publicaciones/CheckboxsPublicarComponent.vue")
        .default
);
Vue.component(
    "descargar_publicacion",
    require("./components/sitio-web/documentos/publicaciones/DescargarComponent.vue")
        .default
);
// --------------- acciones publicidad -------------------
Vue.component(
    "acciones_noticias",
    require("./components/sitio-web/publicidad/noticias/AccionesComponent.vue")
        .default
);
Vue.component(
    "checkboxs_noticias",
    require("./components/sitio-web/publicidad/noticias/CheckboxsPublicarComponent.vue")
        .default
);
Vue.component(
    "acciones_novedades",
    require("./components/sitio-web/publicidad/novedades/AccionesComponent.vue")
        .default
);
Vue.component(
    "checkboxs_novedades",
    require("./components/sitio-web/publicidad/novedades/CheckboxsPublicarComponent.vue")
        .default
);
Vue.component(
    "acciones_actividades",
    require("./components/sitio-web/publicidad/actividades/AccionesComponent.vue")
        .default
);
Vue.component(
    "checkboxs_actividades",
    require("./components/sitio-web/publicidad/actividades/CheckboxsPublicarComponent.vue")
        .default
);
Vue.component(
    "checkboxs_investigadores",
    require("./components/sitio-web/investigadores/CheckboxsPublicarComponent.vue")
        .default
);

const app = new Vue({
    el: "#app",
    router,
    store
});
