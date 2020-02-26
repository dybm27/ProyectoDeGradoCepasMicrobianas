<template>
  <div @click="onClick">
    <div class="inline field">
      <label>Otras Caracteristicas:</label>
      <span>{{rowData.otras_caract}}</span>
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
    onClick(event) {
      console.log("my-detail-row: on-click", event.target);
    }
  }
};
</script>