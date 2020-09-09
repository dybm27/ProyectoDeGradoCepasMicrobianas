<template>
  <div @click="onClick">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <td v-if="rowData.otras_caract">
            <b>Otras Caracteristicas:</b>
          </td>
        </tr>
        <tr>
          <td v-if="rowData.otras_caract">{{rowData.otras_caract}}</td>
        </tr>
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