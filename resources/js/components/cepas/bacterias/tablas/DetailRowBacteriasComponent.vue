<template>
  <div @click="onClick">
    <div class="container">
      <template v-if="rowData.otras_caract">
        <div class="row">
          <div class="col-md-12">
            <label>Otras Caracteristicas: {{rowData.otras_caract}}</label>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

   <script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {
    onClick(event) {}
  },
  computed: {}
};
</script>