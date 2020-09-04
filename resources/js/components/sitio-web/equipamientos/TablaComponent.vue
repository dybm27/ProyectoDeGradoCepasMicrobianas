<template>
  <div>
    <template v-if="mostrarTabla">
      <MyVuetable
        ref="tabla"
        :apiUrl="'/info-panel/equipamientos-tabla'"
        :fields="fields"
        :sortOrder="sortOrder"
        :detailRowComponent="''"
        :nameGet="'equipamientos'"
      ></MyVuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO EQUIPAMIENTOS</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_equipamiento"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Equipamiento</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_equipamiento')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar el Equipamiento?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_equipamiento')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="eliminarEquipamiento"
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
          field: "nombre",
          direction: "asc",
        },
      ],
      id: "",
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr, websocketsTabla("Equipamiento")],
  computed: {
    ...vuex.mapState("equipamientos", ["equipamientos"]),
    mostrarTabla() {
      if (this.equipamientos != "" && this.equipamientos != null) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...vuex.mapActions("equipamientos", ["accionEquipamiento"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarEquipamiento() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/equipamientos/${this.id}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          this.$modal.hide("modal_eliminar_equipamiento");
          this.toastr(
            "Eliminar Equipamiento",
            "Equipamiento eliminado con exito!!",
            "success"
          );
          this.accionEquipamiento({ tipo: "eliminar", data: res.data });
          this.actualizarTabla();
        })
        .catch((error) => {
          if (error.response.status === 403) {
            this.$router.push("/sin-acceso");
          } else if (
            error.response.status === 405 ||
            error.response.status === 401
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