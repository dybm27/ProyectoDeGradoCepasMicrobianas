
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


Vue.component('perfil', require('./components/PerfilComponent.vue').default);
Vue.component('cepas', require('./components/cepas/CepasComponent.vue').default);
Vue.component('bacterias', require('./components/cepas/BacteriasComponent.vue').default);
Vue.component('hongos', require('./components/cepas/HongosComponent.vue').default);
Vue.component('levaduras', require('./components/cepas/LevadurasComponent.vue').default);
Vue.component('actinomicetos', require('./components/cepas/ActinomicetosComponent.vue').default);
Vue.component('vuetable', require('vuetable-2/src/components/Vuetable').default);
Vue.component('acciones-cepas', require('./components/cepas/AccionesCepasComponent.vue').default);
Vue.component('checkboxs-publicar', require('./components/cepas/CheckboxsPublicarComponent.vue').default);
Vue.component('my-detail-row', require('./components/DetailRowComponent.vue').default);
Vue.component('filter-bar', require('./components/FilterBarComponent.vue').default);
Vue.component('vuetable-pagination', require('./components/PaginationComponent.vue').default);
Vue.component('vuetable-pagination-info', require('./components/PaginationInfoComponent').default);
Vue.component('my-vuetable', require('./components/MyVuetableComponent').default);
Vue.component('nav-actinomicetos', require('./components/cepas/actinomicetos/NavActinomicetosComponent').default);
Vue.component('nav-bacterias', require('./components/cepas/bacterias/NavBacteriasComponent').default);
Vue.component('nav-hongos', require('./components/cepas/hongos/NavHongosComponent').default);
Vue.component('nav-levaduras', require('./components/cepas/levaduras/NavLevadurasComponent').default);
Vue.component('form-carat-macro-bacteria', require('./components/cepas/bacterias/forms-caract/FormCaractMacroComponent').default);




const app = new Vue({
    el: '#app',
    router,
    store
});

