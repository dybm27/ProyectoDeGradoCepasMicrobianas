<template>
  <div>bacteria</div>
</template>

<script>
export default {
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  }
};
</script>