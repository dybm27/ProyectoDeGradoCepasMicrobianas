<template>
  <div>
    <template v-if="mostrarTabla">
      <my-vuetable
        ref="tabla"
        api-url="/info-panel/publicaciones-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'publicaciones'"
      ></my-vuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO PUBLICACIONES</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_publicacion"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Publicación</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_publicacion')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Publicación?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_publicacion')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarPublicacion">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FieldDefs from "./columnas";
import Toastr from "../../../../mixins/toastr";
import websocketsTabla from "../../../../mixins/websocketsTabla";
import vuex from "vuex";
export default {
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre_documento",
          direction: "asc"
        }
      ],
      id: ""
    };
  },
  mixins: [Toastr, websocketsTabla("Publicacion")],
  computed: {
    ...vuex.mapGetters("documentos", ["getPublicaciones"]),
    mostrarTabla() {
      if (this.getPublicaciones != "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("documentos", ["accionPublicacion"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarPublicacion() {
      axios
        .delete(`/documentos/${this.id}`, {
          data: { tipo: "publicacion" }
        })
        .then(res => {
          this.$modal.hide("modal_eliminar_publicacion");
          this.toastr(
            "Eliminar Publicacion",
            "Publicacion eliminado con exito!!",
            "success"
          );
          this.accionPublicacion({ tipo: "eliminar", data: res.data });
          this.actualizarTabla();
        })
        .catch(error => {
          this.toastr("Error!!!!", "", "error");
        });
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
  }
};
</script>