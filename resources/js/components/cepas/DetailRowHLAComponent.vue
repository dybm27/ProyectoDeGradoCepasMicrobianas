<template>
  <div @click="onClick">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <td>
            <b>Estado:</b>
          </td>
          <td>{{rowData.estado}}</td>
          <td>
            <b>Origen:</b>
          </td>
          <td>{{rowData.origen}}</td>
        </tr>
        <template v-if="rowData.otras_caract">
          <tr>
            <td>
              <b>Otras características:</b>
            </td>
            <td colspan="3">{{rowData.otras_caract}}</td>
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
    onClick(event) {},
  },
  computed: {},
};
</script>