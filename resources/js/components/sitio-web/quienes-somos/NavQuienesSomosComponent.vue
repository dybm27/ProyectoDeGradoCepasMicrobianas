<template>
  <div>
    <ul
      class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      v-if="verificarNav>1"
    >
      <li class="nav-item" v-if="mostrarMision">
        <router-link :to="{name:'mision'}" class="nav-link" active-class="active" exact>
          <span>Misión</span>
        </router-link>
      </li>
      <li class="nav-item" v-if="mostrarVision">
        <router-link :to="{name:'vision'}" class="nav-link" active-class="active">
          <span>Visión</span>
        </router-link>
      </li>
      <li class="nav-item" v-if="mostrarObjetivos">
        <router-link :to="{name:'objetivos'}" class="nav-link" active-class="active">
          <span>Objetivos</span>
        </router-link>
      </li>
    </ul>
    <router-view @rutaHijo="cambiarTipo"></router-view>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return {
      mostrarMision: false,
      mostrarVision: false,
      mostrarObjetivos: false,
    };
  },
  methods: {
    cambiarTipo(ruta) {
      this.$emit("rutaHijo", ruta);
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    verificarNav() {
      let num = 0;
      if (this.getPermisoByNombre("editar-mision")) {
        this.mostrarMision = true;
        num++;
      } else {
        this.mostrarMision = false;
      }
      if (this.getPermisoByNombre("editar-vision")) {
        this.mostrarVision = true;
        num++;
      } else {
        this.mostrarVision = false;
      }
      if (this.getPermisoByNombre("editar-objetivos")) {
        this.mostrarObjetivos = true;
        num++;
      } else {
        this.mostrarObjetivos = false;
      }
      return num;
    },
  },
};
</script>