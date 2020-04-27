<template>
  <div>
    <a
      @click.prevent="handleClick"
      :class="buttonClass"
      href="#carouselExampleControls"
      role="button"
      :data-slide="order"
    >
      <span :class="iconClass" aria-hidden="true" class="color"></span>
      <span class="sr-only">
        <slot></slot>
      </span>
    </a>
  </div>
</template>

<script>
import bus from "./event-bus";
export default {
  props: ["order"],
  data() {
    return {
      buttonClass: `carousel-control-${this.order}`
    };
  },
  computed: {
    iconClass() {
      return `${this.buttonClass}-icon`;
    }
  },
  methods: {
    handleClick(event) {
      if (this.order === "next") {
        bus.$emit("goNext");
      } else if (this.order === "prev") {
        bus.$emit("goPrev");
      }
    }
  }
};
</script>

<style scoped>
.color {
  background-color: #3f6ad8;
}
</style>