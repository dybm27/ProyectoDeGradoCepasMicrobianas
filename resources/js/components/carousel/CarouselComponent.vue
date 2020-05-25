<template>
  <div id="carouselExampleControls" class="carousel slide">
    <div class="carousel-inner">
      <carousel-item
        v-for="image in imagenes"
        :source="image.source"
        :text="image.text"
        :num="image.num"
        :key="image.num"
        :active="image.isActive"
        :directionClass="directionClass"
      ></carousel-item>
    </div>
    <carousel-control :id="id" order="prev">Previous</carousel-control>
    <carousel-control :id="id" order="next">Next</carousel-control>
  </div>
</template>

<script>
import bus from "./event-bus";
export default {
  props: ["imagenes", "id"],
  data() {
    return {
      directionClass: ""
    };
  },
  methods: {
    getActiveIndex() {
      return this.imagenes.findIndex(obj => obj.isActive);
    },
    next() {
      const activeIndex = this.getActiveIndex();
      let nextIndex = activeIndex + 1;
      let activeItem;
      let nextItem;

      if (nextIndex > this.imagenes.length - 1) {
        //nextIndex = 0;
      } else {
        activeItem = this.imagenes[activeIndex];
        nextItem = this.imagenes[nextIndex];

        nextItem.isActive = true;
        activeItem.isActive = false;
        this.directionClass = "slide-next";
      }
    },
    prev() {
      const activeIndex = this.getActiveIndex();
      let prevIndex = activeIndex - 1;
      let activeItem;
      let prevItem;

      if (prevIndex < 0) {
        //prevIndex = this.imagenes.length - 1;
      } else {
        activeItem = this.imagenes[activeIndex];
        prevItem = this.imagenes[prevIndex];

        prevItem.isActive = true;
        activeItem.isActive = false;
        this.directionClass = "slide-prev";
      }
    }
  },
  created() {
    bus.$on("goPrev-" + this.id, this.prev).$on("goNext-" + this.id, this.next);
  }
};
</script>