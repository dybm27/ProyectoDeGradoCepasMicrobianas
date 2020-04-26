<template>
  <div class="dataTables_filter">
    <label>
      Buscar:
      <input v-model="filterText" @keyup.enter="doFilter" class="form-control form-control-sm" placeholder="..." aria-controls="example" />
      <button v-tooltip="'Deshacer'" class="btn-icon btn btn-danger" @click="resetFilter"><i class="fas fa-redo"></i></button>
    </label>
   <!-- <button class="mr-1 btn btn-primary" @click="doFilter">Go</button>
    <button class="btn btn-warning" @click="resetFilter">Reset</button> -->
  </div>
</template>

  <script>
export default {
  data() {
    return {
      filterText: ""
    };
  },
  computed: {
      
  },
  methods: {
    doFilter() {
      this.$events.fire("filter-set", this.filterText);
    },
    resetFilter() {
      this.filterText = ""; // clear the text in text input
      this.$events.fire("filter-reset");
    }
  }
};
</script>