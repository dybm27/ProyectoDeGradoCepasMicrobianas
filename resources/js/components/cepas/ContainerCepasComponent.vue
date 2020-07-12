<template>
  <div class="tabs-animation">
    <router-view :tipoG="tipoG" @rutaHijo="ocultarLink" />
  </div>
</template>

<script>
export default {
  props: ["tipoG"],
  methods: {
    ocultarLink(ruta) {
      this.$emit("rutaHijo", ruta);
    }
  }
};
</script>