<template>
  <div class="container">
    <div
      class="row"
      v-if="getPermisoByNombres(['editar-otra', 'eliminar-otra'])"
    >
      <div class="col-md-12 col-lg-12">
        <button
          :dusk="'btn-editar-' + rowData.id"
          v-if="getPermisoByNombre('editar-otra')"
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip.left="'Editar'"
          @click="editar(rowData)"
          :disabled="disabledBtns"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          :dusk="'btn-eliminar-' + rowData.id"
          v-if="getPermisoByNombre('eliminar-otra')"
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          v-tooltip="'Eliminar'"
          @click="eliminar(rowData)"
          :disabled="disabledBtns"
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
import IconoNoAccess from "../../../../IconoNoAccess.vue";
import websocketsAccionesOtraInfoMixin from "../../../../../mixins/websocketsAccionesOtraInfo";
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
    websocketsAccionesOtraInfoMixin(
      "color",
      "colors-levadura",
      "levadura",
      "LevadurasInfo"
    ),
  ],
  computed: {
    ...vuex.mapState(["auth"]),
    ...vuex.mapGetters(["getPermisoByNombre", "getPermisoByNombres"]),
  },
};
</script>