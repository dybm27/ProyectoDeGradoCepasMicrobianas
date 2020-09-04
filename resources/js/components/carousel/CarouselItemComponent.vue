<template>
  <div>
    <transition name="slide">
      <div class="carousel-item" :class="directionClass" v-show="active">
        <div class="container">
          <div class="row">
            <span class="badge badge-pill badge-success float-left">{{num}}</span>
          </div>
          <div class="row justify-content-md-center">
            <img width="200px" height="200px" :src="source" :alt="text" class="border border-success rounded" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["source", "text", "active", "directionClass", "num"]
};
</script>