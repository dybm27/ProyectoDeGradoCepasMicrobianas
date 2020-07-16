<template>
  <div class="dataTables_filter">
    <label>
      Buscar:
      <input
        v-model="filterText"
        @keyup.enter="doFilter"
        class="form-control form-control-sm"
        placeholder="..."
        aria-controls="example"
      />
      <button v-tooltip="'Deshacer'" class="btn-icon btn btn-danger" @click="resetFilter">
        <i class="fas fa-redo"></i>
      </button>
    </label>
    <div :class="['dropleft d-inline-block',show?'show':'']">
      <button
        type="button"
        class="mb-2 mr-2 dropdown-toggle btn btn-outline-success"
        @click="abrirMenu"
        v-tooltip="'Imprimir'"
      >
        <i class="fas fa-print"></i>
      </button>
      <div :class="['dropdown-menu',show?'show':'']">
        <button class="dropdown-item" @click="exportar('todo')">Todo</button>
        <button class="dropdown-item" @click="exportar('tabla')" :disabled="validarBtn">Tabla</button>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  props: ["disabled", "nameGet"],
  data() {
    return {
      filterText: "",
      show: false
    };
  },
  computed: {
    validarBtn() {
      return this.disabled;
    }
  },
  methods: {
    doFilter() {
      this.$events.fire(this.nameGet + "-filter-set", this.filterText);
    },
    resetFilter() {
      this.filterText = ""; // clear the text in text input
      this.$events.fire(this.nameGet + "-filter-reset");
    },
    abrirMenu() {
      this.show = !this.show;
    },
    exportar(tipo) {
      this.show = !this.show;
      this.$emit("exportarExcel", tipo);
    }
  }
};
</script>