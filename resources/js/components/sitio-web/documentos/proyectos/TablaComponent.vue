<template>
  <div>
    <template v-if="mostrarTabla">
      <my-vuetable
        ref="tabla"
        api-url="/info-panel/proyectos-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'proyectos'"
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
import Toastr from "../../../../mixins/toastr";
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
      idProyecto: ""
    };
  },
  mixins: [Toastr],
  computed: {
    ...vuex.mapGetters("documentos", ["getProyectos"]),
    mostrarTabla() {
      if (this.getProyectos != "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("documentos", ["accionProyecto"]),
    beforeOpenEliminar(data) {
      this.idProyecto = data.params.id;
    },
    eliminarProyecto() {
      axios
        .delete(`/documentos/${this.idProyecto}`, {
          data: { tipo: "proyecto" }
        })
        .then(res => {
          this.$modal.hide("modal_eliminar_proyecto");
          this.toastr(
            "Eliminar Proyecto",
            "Proyecto eliminado con exito!!",
            "success"
          );
          this.accionProyecto({ tipo: "eliminar", data: res.data });
          this.actualizarTabla();
        })
        .catch(error => {
          this.toastr("Error!!!!", "", "error");
        });
    },
    abrirFormularioProyecto(id) {
      this.$emit("abrirFormularioProyecto", id);
    },
    actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
    this.$events.on("actualizartablaProyecto", e => this.actualizarTabla());
  },
  destroyed() {
    this.$events.off("actualizartablaProyecto");
  }
};
</script>