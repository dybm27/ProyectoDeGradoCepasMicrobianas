<template>
  <div>
    <transition name="slide">
      <div class="carousel-item" :class="directionClass" v-show="active">
        <span class="badge badge-pill badge-primary">{{num}}</span>
        <img class="d-block w-100" :src="source" :alt="text" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["source", "text", "active", "directionClass", "num"]
};
</script>

<style scoped>
.centrar {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>