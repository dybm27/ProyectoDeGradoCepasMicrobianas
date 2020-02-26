<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"></ul>
    <!--  detail-row-component="my-detail-row" -->
    <my-vuetable
      api-url="http://127.0.0.1:8000/api/cepas"
      :fields="fields"
      :sort-order="sortOrder"
      detail-row-component="my-detail-row"
    ></my-vuetable>
  </div>
</template>

<script>

import FieldDefs from "./columnas/columnas-cepas";
export default {
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "id",
          direction: "asc"
        }
      ]
    };
  },
  methods: {},
  computed: {},
  mounted() {
    this.$emit("rutaHijo", window.location.pathname);
  }
};
</script>

<style scoped>
</style>