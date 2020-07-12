<template>
  <div>
    <template v-if="mostrarTabla">
      <my-vuetable
        ref="tabla"
        api-url="/info-panel/investigadores-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'investigadores'"
      ></my-vuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO INVESTIGADORES</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_investigador"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Investigador</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_investigador')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar el Investigador?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_investigador')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarInvestigador">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FieldDefs from "./columnas";
import Toastr from "../../../mixins/toastr";
import websocketsTabla from "../../../mixins/websocketsTabla";
import vuex from "vuex";
export default {
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombres",
          direction: "asc"
        }
      ],
      id: ""
    };
  },
  mixins: [Toastr, websocketsTabla("Investigador")],
  computed: {
    ...vuex.mapGetters("investigadores", ["getInvestigadores"]),
    mostrarTabla() {
      if (this.getInvestigadores != "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("investigadores", ["accionInvestigador"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarInvestigador() {
      axios
        .delete(`/investigadores/${this.id}`)
        .then(res => {
          this.accionInvestigador({ tipo: "eliminar", data: res.data });
          this.$modal.hide("modal_eliminar_investigador");
          this.toastr(
            "Eliminar Investigador",
            "Investigador eliminado con exito!!",
            "success"
          );
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