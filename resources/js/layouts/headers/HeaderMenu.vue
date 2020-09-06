<template>
  <div class="app-header__menu">
    <span>
      <button
        @click="mostrarHeaderMobile"
        type="button"
        class="btn-icon btn-icon-only btn btn-success btn-sm mobile-toggle-header-nav"
      >
        <span class="btn-icon-wrapper">
          <i class="fa fa-ellipsis-v fa-w-6"></i>
        </span>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    mostrarHeaderMobile() {
      this.$events.fire("mostrar-ocultar-headerMobie");
    },
  },
};
</script>