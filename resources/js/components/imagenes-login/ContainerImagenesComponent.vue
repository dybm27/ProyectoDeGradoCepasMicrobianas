<template>
  <div>
    <div class="tabs-animation">
      <router-view @rutaHijo="ocultarLink" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ocultarLink(ruta) {
      this.$emit("rutaHijo", ruta);
    }
  }
};
</script>