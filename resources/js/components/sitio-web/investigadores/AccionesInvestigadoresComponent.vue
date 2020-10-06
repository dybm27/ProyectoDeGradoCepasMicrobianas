<template>
  <div class="container">
    <div
      class="row"
      v-if="
        getPermisoByNombres(['editar-investigador', 'eliminar-investigador']) &&
        !disabledBtns
      "
    >
      <div class="col-md-12 col-lg-12">
        <button
          :dusk="'btn-editar-' + rowData.id"
          v-if="getPermisoByNombre('editar-investigador')"
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip.left="'Editar'"
          @click="editar(rowData)"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          :dusk="'btn-eliminar-' + rowData.id"
          v-if="getPermisoByNombre('eliminar-investigador')"
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          v-tooltip="'Eliminar'"
          @click="eliminar(rowData)"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
    <div v-else>
      <IconoNoAccess />
    </div>
  </div>
</template>

  <script>
import vuex from "vuex";
import IconoNoAccess from "../../IconoNoAccess.vue";
import websocketsAccionesMixin from "../../../mixins/websocketsAcciones";
export default {
  components: { IconoNoAccess },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
    },
  },
  mixins: [
    websocketsAccionesMixin("investigador", "Investigador", "investigadores"),
  ],
  computed: {
    ...vuex.mapState(["auth"]),
    ...vuex.mapGetters(["getPermisoByNombre", "getPermisoByNombres"]),
  },
};
</script>