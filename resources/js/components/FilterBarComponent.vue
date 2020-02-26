<template>
  <div class="dataTables_filter">
    <label>
      Buscar:
      <input v-model="filterText" @keyup.enter="doFilter" class="form-control form-control-sm" placeholder="..." aria-controls="example" />
      <button class="btn-icon btn btn-danger" @click="resetFilter"><i class="lnr-undo"></i></button>
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
      console.log("doFilter:", this.filterText);
    },
    resetFilter() {
      this.filterText = ""; // clear the text in text input
      this.$events.fire("filter-reset");
      console.log("resetFilter");
    }
  }
};
</script>