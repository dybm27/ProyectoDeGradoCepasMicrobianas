<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <router-link :to="{name:'tabla-usuarios'}" class="nav-link" active-class="active">
          <span>Tabla Usuarios</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'tabla-seguimiento'}" class="nav-link" active-class="active">
          <span>Tabla de seguimiento</span>
        </router-link>
      </li>
    </ul>
    <router-view @rutaHijo="cambiarTipo"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    cambiarTipo(ruta) {
      this.$emit("rutaHijo", ruta);
    }
  }
};
</script>