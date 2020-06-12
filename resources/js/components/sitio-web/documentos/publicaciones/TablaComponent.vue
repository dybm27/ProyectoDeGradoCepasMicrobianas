<template>
  <div>
    <template v-if="getPublicaciones!=''">
      <my-vuetable
        api-url="/info-panel/publicaciones-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'publicaciones'"
        @cambiarVariable="cambiarVariable"
        :refrescarTabla="refrescarTabla"
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
import vuex from "vuex";
export default {
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre",
          direction: "asc"
        }
      ],
      refrescarTabla: false,
      texto: "",
      idPublicacion: "",
      nombreModal: "",
      nomBtn: "",
      error: ""
    };
  },
  computed: {
    ...vuex.mapGetters("documentos", ["getPublicaciones"])
  },
  methods: {
    ...vuex.mapActions("documentos", ["accionPublicacion"]),
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    beforeOpenEliminar(data) {
      this.idPublicacion = data.params.id;
    },
    eliminarPublicacion() {
      axios
        .delete(`/documentos/${this.idPublicacion}`, {
          data: { tipo: "publicacion" }
        })
        .then(res => {
          this.accionPublicacion({
            data: res.data,
            tipo: "eliminar"
          });
          this.$modal.hide("modal_eliminar_publicacion");
          this.toastr(
            "Eliminar Publicacion",
            "Publicacion eliminado con exito!!",
            "success"
          );
          this.refrescarTabla = true;
        })
        .catch(error => {
          this.toastr("Error!!!!", "", "error");
        });
    },
    toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: () => {},
        onClicked: () => {},
        onClosed: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {}
      });
    },
    abrirFormularioPublicacion(id) {
      this.$emit("abrirFormularioPublicacion", id);
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
  }
};
</script>