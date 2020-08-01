<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip.left="'Editar'"
          @click="editar(rowData)"
          :disabled="disabledBtns"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          v-tooltip="'Eliminar'"
          @click="eliminar(rowData)"
          :disabled="disabledBtns"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

  <script>
import vuex from "vuex";
import websocketsAccionesOtraInfoMixin from "../../../../../mixins/websocketsAccionesOtraInfo";
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
  mixins: [
    websocketsAccionesOtraInfoMixin("especie", "especies", "cepa", "CepasInfo"),
  ],
  computed: {
    ...vuex.mapState(["auth"]),
  },
  methods: {
    editar(data) {
      this.$modal.show("modal_editar_tipo_cepa", {
        id: data.id,
        nombre: data.nombre,
        genero: data.genero_id,
        tipo: "especie",
      });
      window.Echo.private("bloquearBtnsCepasInfo").whisper(
        "bloquearBtnsCepasInfo",
        {
          id: data.id,
          idUser: this.auth.id,
          tipo: "especie",
        }
      );
      this.$events.fire("agregarMiBloqueoCepasInfo", {
        id: data.id,
        idUser: this.auth.id,
        tipo: "especie",
      });
    },
  },
};
</script>