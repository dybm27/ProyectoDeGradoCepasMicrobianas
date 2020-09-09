<template>
  <div @click="onClick">
    <table class="table table-bordered">
      <tbody>
        <template v-if="rowData.grupo_microbiano_id===2">
          <tr>
            <td>
              <b>Clase:</b>
            </td>
            <td>{{rowData.hongo.clase.nombre}}</td>
            <td>
              <b>Orden:</b>
            </td>
            <td>{{rowData.hongo.orden.nombre}}</td>
          </tr>
          <tr>
            <td>
              <b>Familia:</b>
            </td>
            <td>{{rowData.hongo.familia.nombre}}</td>
            <td>
              <b>Phylum:</b>
            </td>
            <td>{{rowData.hongo.phylum.nombre}}</td>
          </tr>
        </template>
        <template v-else-if="rowData.grupo_microbiano_id===3">
          <tr>
            <td>
              <b>Clase:</b>
            </td>
            <td>{{rowData.levadura.clase.nombre}}</td>
            <td>
              <b>Orden:</b>
            </td>
            <td>{{rowData.levadura.orden.nombre}}</td>
          </tr>
          <tr>
            <td>
              <b>Familia:</b>
            </td>
            <td>{{rowData.levadura.familia.nombre}}</td>
            <td>
              <b>Division:</b>
            </td>
            <td>{{rowData.levadura.division.nombre}}</td>
          </tr>
        </template>
        <template v-else-if="rowData.grupo_microbiano_id===4">
          <tr>
            <td>
              <b>Clase:</b>
            </td>
            <td>{{rowData.actinomiceto.clase.nombre}}</td>
            <td>
              <b>Orden:</b>
            </td>
            <td>{{rowData.actinomiceto.orden.nombre}}</td>
          </tr>
          <tr>
            <td>
              <b>Reino:</b>
            </td>
            <td>{{rowData.actinomiceto.reino.nombre}}</td>
            <td>
              <b>Phylum:</b>
            </td>
            <td>{{rowData.actinomiceto.phylum.nombre}}</td>
          </tr>
        </template>
        <template v-if="rowData.otras_caract">
          <tr>
            <td colspan="4" v-if="rowData.otras_caract">
              <b>Otras características:</b>
            </td>
          </tr>
          <tr>
            <td colspan="4" v-if="rowData.otras_caract">{{rowData.otras_caract}}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

   <script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
    },
  },
  methods: {
    onClick(event) {
      //console.log("my-detail-row: on-click", event.target);
    },
  },
};
</script>