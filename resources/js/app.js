
require('./bootstrap');
window.Vue = require('vue');

import router from './router/index'
import store from './store/index'
import VueEvents from 'vue-events'
import VueToastr from 'vue-toastr'
import VModal from 'vue-js-modal'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
Vue.use(VModal)
Vue.use(VueEvents)
Vue.use(VueToastr)

//croppie
Vue.component('croppie', require('./components/CroppieComponent.vue').default);
Vue.component('croppie-cepas', require('./components/cepas/CroppieCepasComponent.vue').default);
//my-vuetable
Vue.component('vuetable', require('vuetable-2/src/components/Vuetable').default);
Vue.component('my-vuetable', require('./components/MyVuetableComponent').default);
Vue.component('filter-bar', require('./components/FilterBarComponent.vue').default);
Vue.component('vuetable-pagination', require('./components/PaginationComponent.vue').default);
Vue.component('vuetable-pagination-info', require('./components/PaginationInfoComponent').default);
//carousel
Vue.component('carousel', require('./components/carousel/CarouselComponent').default);
Vue.component('carousel-item', require('./components/carousel/CarouselItemComponent').default);
Vue.component('carousel-control', require('./components/carousel/CarouselControlComponent').default);
Vue.component('imagenes', require('./components/cepas/ImagenesComponent').default);
//header-content
Vue.component('header-content', require('./components/Header-ContentComponent.vue').default);
//perfil
Vue.component('perfil', require('./components/PerfilComponent.vue').default);
//cepas
Vue.component('cepas', require('./components/cepas/CepasComponent.vue').default);
Vue.component('acciones_cepas', require('./components/cepas/AccionesCepasComponent.vue').default);
Vue.component('checkboxs-publicar', require('./components/cepas/CheckboxsPublicarComponent.vue').default);
Vue.component('my-detail-row-cepas', require('./components/cepas/DetailRowCepasComponent.vue').default);
Vue.component('my-detail-row-h-l-a', require('./components/cepas/DetailRowHLAComponent.vue').default);
//bacterias
Vue.component('bacterias', require('./components/cepas/bacterias/BacteriasComponent.vue').default);
Vue.component('nav-bacterias', require('./components/cepas/bacterias/NavBacteriasComponent').default);
Vue.component('form-carat-macro-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractMacroComponent').default);
Vue.component('form-carat-micro-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractMicroComponent').default);
Vue.component('form-carat-bioqui-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractBioquiComponent').default);
Vue.component('form-carat-fisio-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractFisioComponent').default);
Vue.component('form-identi-molecu-bacteria', require('./components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent').default);
Vue.component('form-metodo-conser-bacteria', require('./components/cepas/bacterias/forms-caract/FormMetodoConserComponent').default);
Vue.component('tabla-metodo-conser-bacteria', require('./components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent').default);
Vue.component('acciones_tabla_metodo_conser_bacteria', require('./components/cepas/bacterias/tablas/AccionesMetodoConserBacteriaComponent.vue').default);
Vue.component('my-detail-row-bacterias', require('./components/cepas/bacterias/tablas/DetailRowBacteriasComponent.vue').default);
Vue.component('ver-bacteria', require('./components/cepas/bacterias/VerBacteriaComponent').default);
//hongos
Vue.component('hongos', require('./components/cepas/hongos/HongosComponent.vue').default);
Vue.component('nav-hongos', require('./components/cepas/hongos/NavHongosComponent').default);
Vue.component('form-carat-macro-hongo', require('./components/cepas/hongos/forms-caract/FormCaractMacroComponent').default);
Vue.component('form-carat-micro-hongo', require('./components/cepas/hongos/forms-caract/FormCaractMicroComponent').default);
Vue.component('form-carat-bioqui-hongo', require('./components/cepas/hongos/forms-caract/FormCaractBioquiComponent').default);
Vue.component('form-metodo-conser-hongo', require('./components/cepas/hongos/forms-caract/FormMetodoConserComponent').default);
Vue.component('tabla-metodo-conser-hongo', require('./components/cepas/hongos/tablas/TablaMetodoConserHongosComponent').default);
Vue.component('form-identi-molecu-hongo', require('./components/cepas/hongos/forms-caract/FormIdentiMolecuComponent').default);
Vue.component('acciones_tabla_metodo_conser_hongo', require('./components/cepas/hongos/tablas/AccionesMetodoConserHongoComponent.vue').default);
Vue.component('ver-hongo', require('./components/cepas/hongos/VerHongoComponent').default);
//levaduras
Vue.component('levaduras', require('./components/cepas/levaduras/LevadurasComponent.vue').default);
Vue.component('nav-levaduras', require('./components/cepas/levaduras/NavLevadurasComponent').default);
Vue.component('form-carat-macro-levadura', require('./components/cepas/levaduras/forms-caract/FormCaractMacroComponent').default);
Vue.component('form-carat-micro-levadura', require('./components/cepas/levaduras/forms-caract/FormCaractMicroComponent').default);
Vue.component('form-carat-bioqui-levadura', require('./components/cepas/levaduras/forms-caract/FormCaractBioquiComponent').default);
Vue.component('form-metodo-conser-levadura', require('./components/cepas/levaduras/forms-caract/FormMetodoConserComponent').default);
Vue.component('tabla-metodo-conser-levadura', require('./components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent').default);
Vue.component('form-identi-molecu-levadura', require('./components/cepas/levaduras/forms-caract/FormIdentiMolecuComponent').default);
Vue.component('acciones_tabla_metodo_conser_levadura', require('./components/cepas/levaduras/tablas/AccionesMetodoConserLevaduraComponent.vue').default);
Vue.component('ver-levadura', require('./components/cepas/levaduras/VerLevaduraComponent').default);
//actinomicetos
Vue.component('actinomicetos', require('./components/cepas/actinomicetos/ActinomicetosComponent.vue').default);
Vue.component('nav-actinomicetos', require('./components/cepas/actinomicetos/NavActinomicetosComponent').default);
Vue.component('form-carat-macro-actinomiceto', require('./components/cepas/actinomicetos/forms-caract/FormCaractMacroComponent').default);
Vue.component('form-carat-micro-actinomiceto', require('./components/cepas/actinomicetos/forms-caract/FormCaractMicroComponent').default);
Vue.component('form-identi-bioqui-actinomiceto', require('./components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent').default);
Vue.component('form-otras-caract-actinomiceto', require('./components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent').default);
Vue.component('ver-actinomiceto', require('./components/cepas/actinomicetos/VerActinomicetoComponent').default);
//otra info
Vue.component('otra-info', require('./components/otra-info/OtraInfoComponent.vue').default);
    // --------------- cepas -------------------
Vue.component('modales-otra-info-cepas', require('./components/otra-info/tablas/cepas/ModalesComponent.vue').default);
Vue.component('tabla-generos', require('./components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue').default);
Vue.component('acciones_generos', require('./components/otra-info/tablas/cepas/generos/AccionesGenerosComponent.vue').default);
Vue.component('tabla-especies', require('./components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue').default);
Vue.component('acciones_especies', require('./components/otra-info/tablas/cepas/especies/AccionesEspeciesComponent.vue').default);
Vue.component('tabla-clases', require('./components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue').default);
Vue.component('acciones_clases', require('./components/otra-info/tablas/cepas/clases/AccionesClasesComponent.vue').default);
Vue.component('tabla-phylums', require('./components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue').default);
Vue.component('acciones_phylums', require('./components/otra-info/tablas/cepas/phylums/AccionesPhylumsComponent.vue').default);
Vue.component('tabla-ordens', require('./components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue').default);
Vue.component('acciones_ordens', require('./components/otra-info/tablas/cepas/ordens/AccionesOrdensComponent.vue').default);
Vue.component('tabla-reinos', require('./components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue').default);
Vue.component('acciones_reinos', require('./components/otra-info/tablas/cepas/reinos/AccionesReinosComponent.vue').default);
Vue.component('tabla-familias', require('./components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue').default);
Vue.component('acciones_familias', require('./components/otra-info/tablas/cepas/familias/AccionesFamiliasComponent.vue').default);
Vue.component('tabla-divisions', require('./components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue').default);
Vue.component('acciones_divisions', require('./components/otra-info/tablas/cepas/divisions/AccionesDivisionsComponent.vue').default);
    // --------------- bacterias -------------------
Vue.component('modales-otra-info-bacterias', require('./components/otra-info/tablas/bacterias/ModalesComponent.vue').default);
Vue.component('tabla-formas-macro-bacteria', require('./components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue').default);
Vue.component('acciones_formas_macro_bacteria', require('./components/otra-info/tablas/bacterias/formas-macro/AccionesFormasMacroComponent.vue').default);
Vue.component('tabla-bordes-bacteria', require('./components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue').default);
Vue.component('acciones_bordes_bacteria', require('./components/otra-info/tablas/bacterias/bordes/AccionesBordesComponent.vue').default);
Vue.component('tabla-detalles-bacteria', require('./components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue').default);
Vue.component('acciones_detalles_bacteria', require('./components/otra-info/tablas/bacterias/detalles/AccionesDetallesComponent.vue').default);
Vue.component('tabla-elevacions-bacteria', require('./components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue').default);
Vue.component('acciones_elevacions_bacteria', require('./components/otra-info/tablas/bacterias/elevacions/AccionesElevacionsComponent.vue').default);
Vue.component('tabla-superficies-bacteria', require('./components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue').default);
Vue.component('acciones_superficies_bacteria', require('./components/otra-info/tablas/bacterias/superficies/AccionesSuperficiesComponent.vue').default);
Vue.component('tabla-colors-bacteria', require('./components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue').default);
Vue.component('acciones_colors_bacteria', require('./components/otra-info/tablas/bacterias/colors/AccionesColorsComponent.vue').default);
Vue.component('tabla-formas-micro-bacteria', require('./components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue').default);
Vue.component('acciones_formas_micro_bacteria', require('./components/otra-info/tablas/bacterias/formas-micro/AccionesFormasMicroComponent.vue').default);
Vue.component('tabla-tipos-metodos-bacteria', require('./components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue').default);
Vue.component('acciones_tipos_metodos_bacteria', require('./components/otra-info/tablas/bacterias/tipos-metodos/AccionesTiposMetodosComponent.vue').default);
Vue.component('tabla-tipos-agars-bacteria', require('./components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue').default);
Vue.component('acciones_tipos_agars_bacteria', require('./components/otra-info/tablas/bacterias/tipos-agars/AccionesTiposAgarsComponent.vue').default);
    // --------------- hongos -------------------
Vue.component('modales-otra-info-hongos', require('./components/otra-info/tablas/hongos/ModalesComponent.vue').default);
Vue.component('tabla-colors-hongo', require('./components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue').default);
Vue.component('acciones_colors_hongo', require('./components/otra-info/tablas/hongos/colors/AccionesColorsComponent.vue').default);
Vue.component('tabla-texturas-hongo', require('./components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue').default);
Vue.component('acciones_texturas_hongo', require('./components/otra-info/tablas/hongos/texturas/AccionesTexturasComponent.vue').default);
Vue.component('tabla-conidioforos-hongo', require('./components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue').default);
Vue.component('acciones_conidioforos_hongo', require('./components/otra-info/tablas/hongos/conidioforos/AccionesConidioforosComponent.vue').default);
Vue.component('tabla-esporas-asexual-hongo', require('./components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue').default);
Vue.component('acciones_esporas_asexual_hongo', require('./components/otra-info/tablas/hongos/esporas-asexual/AccionesEsporasAsexualComponent.vue').default);
Vue.component('tabla-esporas-sexual-hongo', require('./components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue').default);
Vue.component('acciones_esporas_sexual_hongo', require('./components/otra-info/tablas/hongos/esporas-sexual/AccionesEsporasSexualComponent.vue').default);
Vue.component('tabla-tipos-metodos-hongo', require('./components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue').default);
Vue.component('acciones_tipos_metodos_hongo', require('./components/otra-info/tablas/hongos/tipos-metodos/AccionesTiposMetodosComponent.vue').default);
    // --------------- levaduras -------------------
Vue.component('modales-otra-info-levaduras', require('./components/otra-info/tablas/levaduras/ModalesComponent.vue').default);
Vue.component('tabla-colors-levadura', require('./components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue').default);
Vue.component('acciones_colors_levadura', require('./components/otra-info/tablas/levaduras/colors/AccionesColorsComponent.vue').default);
Vue.component('tabla-texturas-levadura', require('./components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue').default);
Vue.component('acciones_texturas_levadura', require('./components/otra-info/tablas/levaduras/texturas/AccionesTexturasComponent.vue').default);
Vue.component('tabla-tipos-metodos-levadura', require('./components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue').default);
Vue.component('acciones_tipos_metodos_levadura', require('./components/otra-info/tablas/levaduras/tipos-metodos/AccionesTiposMetodosComponent.vue').default);
    // --------------- actinomicetos -------------------
Vue.component('modales-otra-info-actinomicetos', require('./components/otra-info/tablas/actinomicetos/ModalesComponent.vue').default);
Vue.component('tabla-formas-macro-actinomiceto', require('./components/otra-info/tablas/actinomicetos/formas-macro/TablaFormasMacroComponent.vue').default);
Vue.component('acciones_formas_macro_actinomiceto', require('./components/otra-info/tablas/actinomicetos/formas-macro/AccionesFormasMacroComponent.vue').default);
Vue.component('tabla-bordes-actinomiceto', require('./components/otra-info/tablas/actinomicetos/bordes/TablaBordesComponent.vue').default);
Vue.component('acciones_bordes_actinomiceto', require('./components/otra-info/tablas/actinomicetos/bordes/AccionesBordesComponent.vue').default);
Vue.component('tabla-pigmentos-actinomiceto', require('./components/otra-info/tablas/actinomicetos/pigmentos/TablaPigmentosComponent.vue').default);
Vue.component('acciones_pigmentos_actinomiceto', require('./components/otra-info/tablas/actinomicetos/pigmentos/AccionesPigmentosComponent.vue').default);
Vue.component('tabla-texturas-actinomiceto', require('./components/otra-info/tablas/actinomicetos/texturas/TablaTexturasComponent.vue').default);
Vue.component('acciones_texturas_actinomiceto', require('./components/otra-info/tablas/actinomicetos/texturas/AccionesTexturasComponent.vue').default);
Vue.component('tabla-superficies-actinomiceto', require('./components/otra-info/tablas/actinomicetos/superficies/TablaSuperficiesComponent.vue').default);
Vue.component('acciones_superficies_actinomiceto', require('./components/otra-info/tablas/actinomicetos/superficies/AccionesSuperficiesComponent.vue').default);
Vue.component('tabla-colors-actinomiceto', require('./components/otra-info/tablas/actinomicetos/colors/TablaColorsComponent.vue').default);
Vue.component('acciones_colors_actinomiceto', require('./components/otra-info/tablas/actinomicetos/colors/AccionesColorsComponent.vue').default);
Vue.component('tabla-formas-micro-actinomiceto', require('./components/otra-info/tablas/actinomicetos/formas-micro/TablaFormasMicroComponent.vue').default);
Vue.component('acciones_formas_micro_actinomiceto', require('./components/otra-info/tablas/actinomicetos/formas-micro/AccionesFormasMicroComponent.vue').default);
Vue.component('tabla-tincions-actinomiceto', require('./components/otra-info/tablas/actinomicetos/tincions/TablaTincionsComponent.vue').default);
Vue.component('acciones_tincions_actinomiceto', require('./components/otra-info/tablas/actinomicetos/tincions/AccionesTincionsComponent.vue').default);
Vue.component('tabla-micelios-actinomiceto', require('./components/otra-info/tablas/actinomicetos/micelios/TablaMiceliosComponent.vue').default);
Vue.component('acciones_micelios_actinomiceto', require('./components/otra-info/tablas/actinomicetos/micelios/AccionesMiceliosComponent.vue').default);
Vue.component('tabla-conidioforos-actinomiceto', require('./components/otra-info/tablas/actinomicetos/conidioforos/TablaConidioforosComponent.vue').default);
Vue.component('acciones_conidioforos_actinomiceto', require('./components/otra-info/tablas/actinomicetos/conidioforos/AccionesConidioforosComponent.vue').default);
//calendario
Vue.component('calendario', require('./components/CalendarioComponent.vue').default);
//usuarios
Vue.component('usuarios', require('./components/usuarios/UsuariosComponent.vue').default);
Vue.component('acciones_tabla_usuarios', require('./components/usuarios/tablas/AccionesTablaUsuariosComponent.vue').default);
Vue.component('acciones_tabla_seguimientos', require('./components/usuarios/tablas/AccionesTablaSeguimientoComponent.vue').default);
//calendario
Vue.component('imagenes-login', require('./components/imagenes-login/ImagenesLoginComponent.vue').default);
//------- sitio-web ---------------
//quienes-somos
Vue.component('quienes-somos', require('./components/sitio-web/QuienesSomosComponent.vue').default);
Vue.component('acciones_objetivos', require('./components/sitio-web/quienes-somos/AccionesObjetivosComponent.vue').default);
//investigadores
Vue.component('investigadores', require('./components/sitio-web/InvestigadoresComponent.vue').default);
Vue.component('tabla-investigadores', require('./components/sitio-web/investigadores/TablaInvestigadoresComponent.vue').default);
Vue.component('acciones_investigadores', require('./components/sitio-web/investigadores/AccionesInvestigadoresComponent.vue').default);
Vue.component('checkboxs_investigadores', require('./components/sitio-web/investigadores/CheckboxsPublicarComponent.vue').default);
Vue.component('form-investigadores', require('./components/sitio-web/investigadores/FormInvestigadoresComponent.vue').default);
//equipamientos
Vue.component('equipamientos', require('./components/sitio-web/EquipamientosComponent.vue').default);
Vue.component('tabla-equipamientos', require('./components/sitio-web/equipamientos/TablaComponent.vue').default);
Vue.component('acciones_equipamientos', require('./components/sitio-web/equipamientos/AccionesComponent.vue').default);
Vue.component('checkboxs_equipamientos', require('./components/sitio-web/equipamientos/CheckboxsPublicarComponent.vue').default);
Vue.component('form-equipamientos', require('./components/sitio-web/equipamientos/FormComponent.vue').default);
//publicidad
Vue.component('publicidad', require('./components/sitio-web/PublicidadComponent.vue').default);
//documentos
Vue.component('documentos', require('./components/sitio-web/DocumentosComponent.vue').default);
Vue.component('tabla-proyectos', require('./components/sitio-web/documentos/proyectos/TablaComponent.vue').default);
Vue.component('form-proyectos', require('./components/sitio-web/documentos/proyectos/FormComponent.vue').default);
Vue.component('acciones_proyectos', require('./components/sitio-web/documentos/proyectos/AccionesComponent.vue').default);
Vue.component('checkboxs_proyectos', require('./components/sitio-web/documentos/proyectos/CheckboxsPublicarComponent.vue').default);
Vue.component('descargar_proyecto', require('./components/sitio-web/documentos/proyectos/DescargarComponent.vue').default);
Vue.component('tabla-publicaciones', require('./components/sitio-web/documentos/publicaciones/TablaComponent.vue').default);
Vue.component('form-publicaciones', require('./components/sitio-web/documentos/publicaciones/FormComponent.vue').default);
Vue.component('acciones_publicaciones', require('./components/sitio-web/documentos/publicaciones/AccionesComponent.vue').default);
Vue.component('checkboxs_publicaciones', require('./components/sitio-web/documentos/publicaciones/CheckboxsPublicarComponent.vue').default);
Vue.component('descargar_publicacion', require('./components/sitio-web/documentos/publicaciones/DescargarComponent.vue').default);

// usuario autenticado
//import auth from './autenticacion/auth'
//Vue.mixin(auth);

const app = new Vue({
    el: '#app',
    router,
    store
});

