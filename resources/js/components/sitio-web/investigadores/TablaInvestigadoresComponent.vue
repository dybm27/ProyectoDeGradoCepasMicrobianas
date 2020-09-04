<template>
  <div>
    <template v-if="mostrarTabla">
      <MyVuetable
        ref="tabla"
        :apiUrl="'/info-panel/investigadores-tabla'"
        :fields="fields"
        :sortOrder="sortOrder"
        :detailRowComponent="''"
        :nameGet="'investigadores'"
      ></MyVuetable>
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
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="eliminarInvestigador"
          >Eliminar</button>
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
import MyVuetable from "../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombres",
          direction: "asc",
        },
      ],
      id: "",
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr, websocketsTabla("Investigador")],
  computed: {
    ...vuex.mapState("investigadores", ["investigadores"]),
    mostrarTabla() {
      if (this.investigadores != "" && this.investigadores != null) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...vuex.mapActions("investigadores", ["accionInvestigador"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarInvestigador() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/investigadores/${this.id}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          this.accionInvestigador({ tipo: "eliminar", data: res.data });
          this.$modal.hide("modal_eliminar_investigador");
          this.toastr(
            "Eliminar Investigador",
            "Investigador eliminado con exito!!",
            "success"
          );
          this.actualizarTabla();
        })
        .catch((error) => {
          if (error.response.status === 403) {
            this.$router.push("/sin-acceso");
          } else if (
            error.response.status === 405 ||
            error.response.status === 405
          ) {
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!!!", "", "error");
          }
        });
    },
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
  },
};
</script>