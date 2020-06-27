<template>
  <div>
    <template v-if="mostrarTabla">
      <my-vuetable
        ref="tabla"
        api-url="/info-panel/actividades-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'actividades'"
      ></my-vuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO ACTIVIDADES</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_actividad"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Actividad</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_actividad')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Actividad?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_actividad')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarActividad">Eliminar</button>
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
          field: "titulo",
          direction: "asc"
        }
      ],
      id: ""
    };
  },
  mixins: [Toastr, websocketsTabla("Actividad")],
  computed: {
    ...vuex.mapGetters("publicidad", ["getActividades"]),
    mostrarTabla() {
      if (this.getActividades != null && this.getActividades != "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("publicidad", ["accionActividad"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarActividad() {
      axios
        .delete(`/publicidad/${this.id}`, {
          data: { tipo: "actividad" }
        })
        .then(res => {
          this.toastr(
            "Eliminar Actividad",
            "Actividad eliminada con exito!!",
            "success"
          );
          this.accionActividad({ tipo: "eliminar", data: res.data });
          this.actualizarTabla();
          this.$modal.hide("modal_eliminar_actividad");
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