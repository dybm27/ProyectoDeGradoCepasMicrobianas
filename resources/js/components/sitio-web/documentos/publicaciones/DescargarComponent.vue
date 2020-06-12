<template>
  <div>
    <img src="/iconos/pdf.png" @click="descargar(rowData)" />
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
    descargar(data) {
      window.open(data.rutaPublica);
    }
  }
};
</script>