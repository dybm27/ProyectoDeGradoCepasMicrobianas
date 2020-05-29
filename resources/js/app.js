
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
//header-content
Vue.component('header-content', require('./components/Header-ContentComponent.vue').default);
//perfil
Vue.component('perfil', require('./components/PerfilComponent.vue').default);
//otra info
Vue.component('otra-info', require('./components/otra-info/OtraInfoComponent.vue').default);
//my-vuetable
Vue.component('vuetable', require('vuetable-2/src/components/Vuetable').default);
Vue.component('my-vuetable', require('./components/MyVuetableComponent').default);
Vue.component('filter-bar', require('./components/FilterBarComponent.vue').default);
Vue.component('vuetable-pagination', require('./components/PaginationComponent.vue').default);
Vue.component('vuetable-pagination-info', require('./components/PaginationInfoComponent').default);
//cepas
Vue.component('cepas', require('./components/cepas/CepasComponent.vue').default);
Vue.component('acciones_cepas', require('./components/cepas/AccionesCepasComponent.vue').default);
Vue.component('checkboxs-publicar', require('./components/cepas/CheckboxsPublicarComponent.vue').default);
Vue.component('my-detail-row-cepas', require('./components/cepas/DetailRowCepasComponent.vue').default);
Vue.component('my-detail-row-h-l-a', require('./components/cepas/DetailRowHLAComponent.vue').default);
//carousel
Vue.component('carousel', require('./components/carousel/CarouselComponent').default);
Vue.component('carousel-item', require('./components/carousel/CarouselItemComponent').default);
Vue.component('carousel-control', require('./components/carousel/CarouselControlComponent').default);
Vue.component('imagenes', require('./components/cepas/ImagenesComponent').default);
//bacterias
Vue.component('bacterias', require('./components/cepas/bacterias/BacteriasComponent.vue').default);
Vue.component('nav-bacterias', require('./components/cepas/bacterias/NavBacteriasComponent').default);
Vue.component('form-carat-macro-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractMacroComponent').default);
Vue.component('form-carat-micro-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractMicroComponent').default);
Vue.component('form-carat-bioqui-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractBioquiComponent').default);
Vue.component('form-carat-fisio-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractFisioComponent').default);
Vue.component('form-metodo-conser-bacteria', require('./components/cepas/bacterias/forms-caract/FormMetodoConserComponent').default);
Vue.component('form-identi-molecu-bacteria', require('./components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent').default);
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
//calendario
Vue.component('calendario', require('./components/CalendarioComponent.vue').default);
//usuarios
Vue.component('usuarios', require('./components/usuarios/UsuariosComponent.vue').default);
Vue.component('acciones_tabla_usuarios', require('./components/usuarios/tablas/AccionesTablaUsuariosComponent.vue').default);
Vue.component('acciones_tabla_seguimientos', require('./components/usuarios/tablas/AccionesTablaSeguimientoComponent.vue').default);

// usuario autenticado
//import auth from './autenticacion/auth'
//Vue.mixin(auth);

const app = new Vue({
    el: '#app',
    router,
    store
});

