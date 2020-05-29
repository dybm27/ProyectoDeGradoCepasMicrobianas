<template>
  <div>hongo</div>
</template>

<script>
export default {
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  }
};
</script>