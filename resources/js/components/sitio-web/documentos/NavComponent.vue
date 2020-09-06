<template>
  <div>
    <ul
      class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      v-if="getPermisoByNombres(['agregar-proyecto','editar-proyecto','eliminar-proyecto'])
      &&getPermisoByNombres(['agregar-publicacion','editar-publicacion','eliminar-publicacion'])"
    >
      <li class="nav-item">
        <router-link :to="{name:'proyectos'}" class="nav-link" active-class="active" exact>
          <span>Proyectos</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'publicaciones'}" class="nav-link" active-class="active">
          <span>Publicaciones</span>
        </router-link>
      </li>
    </ul>
    <div class="tabs-animation">
      <transition enter-active-class="slideInLeft">
        <router-view @rutaHijo="ruta" @cambiarTipo="cambiarTipo"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  methods: {
    ruta(ruta) {
      this.$emit("rutaHijo", ruta);
    },
    cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombres"]),
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>