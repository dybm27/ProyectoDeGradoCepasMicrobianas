<template>
  <div id="carouselExampleControls" class="carousel slide">
    <div class="carousel-inner">
      <CarouselItem
        v-for="image in imagenes"
        :source="image.source"
        :text="image.text"
        :num="image.num"
        :key="image.num"
        :active="image.isActive"
        :directionClass="directionClass"
      ></CarouselItem>
    </div>
    <CarouselControl :id="id" order="prev" v-show="validarPrev">Previous</CarouselControl>
    <CarouselControl :id="id" order="next" v-show="validarNext">Next</CarouselControl>
  </div>
</template>

<script>
import bus from "./event-bus";
import CarouselItem from "./CarouselItemComponent.vue";
import CarouselControl from "./CarouselControlComponent.vue";
export default {
  components: { CarouselItem, CarouselControl },
  props: ["imagenes", "id"],
  data() {
    return {
      directionClass: "",
      prevData: true,
      nextData: true
    };
  },
  watch: {
    imagenes() {
      if (this.imagenes) {
        this.verificarPrev();
        this.verificarNext();
      }
    }
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
      } else {
        this.prevData = true;
        activeItem = this.imagenes[activeIndex];
        nextItem = this.imagenes[nextIndex];
        nextItem.isActive = true;
        activeItem.isActive = false;
        this.directionClass = "slide-next";
        nextIndex = nextIndex + 1;
        if (nextIndex > this.imagenes.length - 1) {
          this.nextData = false;
        }
      }
    },
    prev() {
      const activeIndex = this.getActiveIndex();
      let prevIndex = activeIndex - 1;
      let activeItem;
      let prevItem;
      if (prevIndex < 0) {
      } else {
        this.nextData = true;
        activeItem = this.imagenes[activeIndex];
        prevItem = this.imagenes[prevIndex];
        prevItem.isActive = true;
        activeItem.isActive = false;
        this.directionClass = "slide-prev";
        prevIndex = prevIndex - 1;
        if (prevIndex < 0) {
          this.prevData = false;
        }
      }
    },
    verificarNext() {
      const activeIndex = this.getActiveIndex();
      let nextIndex = activeIndex + 1;

      if (nextIndex > this.imagenes.length - 1) {
        this.nextData = false;
      } else {
        this.nextData = true;
      }
    },
    verificarPrev() {
      const activeIndex = this.getActiveIndex();
      let prevIndex = activeIndex - 1;

      if (prevIndex < 0) {
        this.prevData = false;
      } else {
        this.prevData = true;
      }
    }
  },
  computed: {
    validarPrev() {
      return this.prevData;
    },
    validarNext() {
      return this.nextData;
    }
  },
  created() {
    +this.verificarPrev();
    this.verificarNext();
    bus.$on("goPrev-" + this.id, this.prev).$on("goNext-" + this.id, this.next);
  }
};
</script>