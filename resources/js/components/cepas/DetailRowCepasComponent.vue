<template>
  <div @click="onClick">
    <div class="container">
      <template v-if="rowData.grupo_microbiano_id===2">
        <div class="row">
          <div class="col-md-3">
            <label>Clase: {{rowData.hongo.clase.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Orden: {{rowData.hongo.orden.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Familia: {{rowData.hongo.familia.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Phylum: {{rowData.hongo.phylum.nombre}}</label>
          </div>
        </div>
      </template>
      <template v-else-if="rowData.grupo_microbiano_id===3">
        <div class="row">
          <div class="col-md-3">
            <label>Division: {{rowData.levadura.division.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Clase: {{rowData.levadura.clase.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Orden: {{rowData.levadura.orden.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Familia: {{rowData.levadura.familia.nombre}}</label>
          </div>
        </div>
      </template>
      <template v-else-if="rowData.grupo_microbiano_id===4">
        <div class="row">
          <div class="col-md-3">
            <label>Clase: {{rowData.actinomiceto.clase.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Orden: {{rowData.actinomiceto.orden.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Phylum: {{rowData.actinomiceto.phylum.nombre}}</label>
          </div>
          <div class="col-md-3">
            <label>Reino: {{rowData.actinomiceto.reino.nombre}}</label>
          </div>
        </div>
      </template>
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
    onClick(event) {
      //console.log("my-detail-row: on-click", event.target);
    }
  }
};
</script>