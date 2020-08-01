<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <router-link :to="{name:'mision'}" class="nav-link" active-class="active" exact>
          <span>Misión</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'vision'}" class="nav-link" active-class="active">
          <span>Visión</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'objetivos'}" class="nav-link" active-class="active">
          <span>Objetivos</span>
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