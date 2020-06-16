<template>
  <div>
    <template v-if="getProyectos!=''">
      <my-vuetable
        api-url="/info-panel/proyectos-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'proyectos'"
        @cambiarVariable="cambiarVariable"
        :refrescarTabla="refrescarTabla"
      ></my-vuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO PROYECTOS</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_proyecto"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Proyecto</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_proyecto')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar el Proyecto?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_proyecto')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarProyecto">Eliminar</button>
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
          field: "nombre_documento",
          direction: "asc"
        }
      ],
      refrescarTabla: false,
      texto: "",
      idProyecto: "",
      nombreModal: "",
      nomBtn: "",
      error: ""
    };
  },
  computed: {
    ...vuex.mapGetters("documentos", ["getProyectos"])
  },
  methods: {
    ...vuex.mapActions("documentos", ["accionProyecto"]),
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    beforeOpenEliminar(data) {
      this.idProyecto = data.params.id;
    },
    eliminarProyecto() {
      axios
        .delete(`/documentos/${this.idProyecto}`, {
          data: { tipo: "proyecto" }
        })
        .then(res => {
          this.accionProyecto({
            data: res.data,
            tipo: "eliminar"
          });
          this.$modal.hide("modal_eliminar_proyecto");
          this.toastr(
            "Eliminar Proyecto",
            "Proyecto eliminado con exito!!",
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
    abrirFormularioProyecto(id) {
      this.$emit("abrirFormularioProyecto", id);
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
  }
};
</script>