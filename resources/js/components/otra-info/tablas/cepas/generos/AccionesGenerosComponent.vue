<template>
  <div class="container">
    <div
      class="row"
      v-if="
        getPermisoByNombres(['editar-otra', 'eliminar-otra']) && !disabledBtns
      "
    >
      <div class="col-md-12 col-lg-12">
        <button
          :dusk="'btn-editar-' + rowData.id"
          v-if="getPermisoByNombre('editar-otra')"
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip.left="'Editar'"
          @click="editar(rowData)"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          :dusk="'btn-eliminar-' + rowData.id"
          v-if="getPermisoByNombre('eliminar-otra')"
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
    websocketsAccionesOtraInfoMixin("genero", "generos", "cepa", "CepasInfo"),
  ],
  computed: {
    ...vuex.mapState(["auth"]),
    ...vuex.mapGetters(["getPermisoByNombre", "getPermisoByNombres"]),
  },
  methods: {
    editar(data) {
      this.$modal.show("modal_editar_tipo_cepa", {
        id: data.id,
        nombre: data.nombre,
        grupo: data.grupo_microbiano_id,
        tipo: "genero",
      });
      window.Echo.private("bloquearBtnsCepasInfo").whisper(
        "bloquearBtnsCepasInfo",
        {
          id: data.id,
          idUser: this.auth.id,
          tipo: "genero",
        }
      );
      this.$events.fire("agregarMiBloqueoCepasInfo", {
        id: data.id,
        idUser: this.auth.id,
        tipo: "genero",
      });
    },
  },
};
</script>