
require('./bootstrap');
window.Vue = require('vue');

import router from './router/index'
import store from './store/index'
import VueEvents from 'vue-events'
import VueToastr from 'vue-toastr'
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.use(VueEvents)
Vue.use(VueToastr)
//vistas
Vue.component('perfil', require('./components/PerfilComponent.vue').default);
Vue.component('cepas', require('./components/cepas/CepasComponent.vue').default);
Vue.component('bacterias', require('./components/cepas/BacteriasComponent.vue').default);
Vue.component('hongos', require('./components/cepas/HongosComponent.vue').default);
Vue.component('levaduras', require('./components/cepas/LevadurasComponent.vue').default);
Vue.component('actinomicetos', require('./components/cepas/ActinomicetosComponent.vue').default);
//my-vuetable
Vue.component('vuetable', require('vuetable-2/src/components/Vuetable').default);
Vue.component('my-vuetable', require('./components/MyVuetableComponent').default);
Vue.component('filter-bar', require('./components/FilterBarComponent.vue').default);
Vue.component('vuetable-pagination', require('./components/PaginationComponent.vue').default);
Vue.component('vuetable-pagination-info', require('./components/PaginationInfoComponent').default);
//tabla cepas
Vue.component('acciones-cepas', require('./components/cepas/AccionesCepasComponent.vue').default);
Vue.component('checkboxs-publicar', require('./components/cepas/CheckboxsPublicarComponent.vue').default);
Vue.component('my-detail-row', require('./components/DetailRowComponent.vue').default);
//dropzone
Vue.component('dropzone', require('./components/DropzoneComponent').default);
//carousel
Vue.component('carousel', require('./components/carousel/CarouselComponent').default);
Vue.component('carousel-item', require('./components/carousel/CarouselItemComponent').default);
Vue.component('carousel-control', require('./components/carousel/CarouselControlComponent').default);
//bacterias
Vue.component('nav-bacterias', require('./components/cepas/bacterias/NavBacteriasComponent').default);
Vue.component('form-carat-macro-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractMacroComponent').default);
Vue.component('form-carat-micro-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractMicroComponent').default);
Vue.component('form-carat-bioqui-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractBioquiComponent').default);
Vue.component('form-carat-fisio-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractFisioComponent').default);
Vue.component('form-metodo-conser-bacteria', require('./components/cepas/bacterias/forms-caract/FormMetodoConserComponent').default);
Vue.component('form-identi-molecu-bacteria', require('./components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent').default);
//hongos
Vue.component('nav-hongos', require('./components/cepas/hongos/NavHongosComponent').default);
//levaduras
Vue.component('nav-levaduras', require('./components/cepas/levaduras/NavLevadurasComponent').default);
//actinomicetos
Vue.component('nav-actinomicetos', require('./components/cepas/actinomicetos/NavActinomicetosComponent').default);

const app = new Vue({
    el: '#app',
    router,
    store
});

