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
      <router-view @rutaHijo="ruta" @cambiarTipo="cambiarTipo"></router-view>
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