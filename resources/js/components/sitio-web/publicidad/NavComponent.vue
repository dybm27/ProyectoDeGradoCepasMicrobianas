<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <router-link :to="{name:'noticias'}" class="nav-link" active-class="active">
          <span>Noticias</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'actividades'}" class="nav-link" active-class="active">
          <span>Actividades</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'novedades'}" class="nav-link" active-class="active">
          <span>Novedades</span>
        </router-link>
      </li>
    </ul>
    <div class="tabs-animation">
      <router-view @rutaHijo="ruta" @cambiarTipo="cambiarTipo"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ruta(ruta) {
      this.$emit("rutaHijo", ruta);
    },
    cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  }
};
</script>