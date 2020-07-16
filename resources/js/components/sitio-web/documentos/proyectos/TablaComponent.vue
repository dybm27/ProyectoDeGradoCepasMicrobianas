<template>
  <div>
    <template v-if="mostrarTabla">
      <MyVuetable
        ref="tabla"
        api-url="/info-panel/proyectos-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'proyectos'"
      ></MyVuetable>
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
      @closed="closeEliminar"
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
import websocketsTabla from "../../../../mixins/websocketsTabla";
import MyVuetable from "../../../vuetable/MyVuetableComponent.vue";
export default {
  components: {
    MyVuetable
  },
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
  mixins: [Toastr, websocketsTabla("Proyecto")],
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
      this.id = data.params.id;
    },
    eliminarProyecto() {
      axios
        .delete(`/documentos/${this.id}`, {
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
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
  }
};
</script>