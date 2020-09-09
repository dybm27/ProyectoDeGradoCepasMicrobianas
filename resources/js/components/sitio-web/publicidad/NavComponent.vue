<template>
  <div>
    <ul
      class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      v-if="verificarNav>1"
    >
      <li class="nav-item" v-if="mostrarNoticia">
        <router-link :to="{name:'noticias'}" class="nav-link" active-class="active" exact>
          <span>Noticias</span>
        </router-link>
      </li>
      <li class="nav-item" v-if="mostrarActividad">
        <router-link :to="{name:'actividades'}" class="nav-link" active-class="active">
          <span>Actividades</span>
        </router-link>
      </li>
      <li class="nav-item" v-if="mostrarNovedad">
        <router-link :to="{name:'novedades'}" class="nav-link" active-class="active">
          <span>Novedades</span>
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
  data() {
    return {
      mostrarNoticia: false,
      mostrarActividad: false,
      mostrarNovedad: false,
    };
  },
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
    verificarNav() {
      let num = 0;
      if (
        this.getPermisoByNombres([
          "agregar-noticia",
          "editar-noticia",
          "eliminar-noticia",
        ])
      ) {
        this.mostrarNoticia = true;
        num++;
      } else {
        this.mostrarNoticia = false;
      }
      if (
        this.getPermisoByNombres([
          "agregar-actividad",
          "editar-actividad",
          "eliminar-actividad",
        ])
      ) {
        this.mostrarActividad = true;
        num++;
      } else {
        this.mostrarActividad = false;
      }
      if (
        this.getPermisoByNombres([
          "agregar-novedad",
          "editar-novedad",
          "eliminar-novedad",
        ])
      ) {
        this.mostrarNovedad = true;
        num++;
      } else {
        this.mostrarNovedad = false;
      }
      return num;
    },
  },
};
</script>