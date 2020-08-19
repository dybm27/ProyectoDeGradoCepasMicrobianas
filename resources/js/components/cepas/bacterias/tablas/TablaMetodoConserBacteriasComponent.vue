<template>
  <div>
    <template v-if="mostrarTabla">
      <div class="card-body mt-3 ml-2 mr-2">
        <MyVuetable
          ref="tabla"
          :api-url="url"
          :fields="fields"
          :sort-order="sortOrder"
          :nameGet="'metodos-bacterias'"
        ></MyVuetable>
      </div>
      <modal
        name="my_modal_eliminar_metodo"
        classes="my_modal"
        :width="400"
        :height="300"
        @before-open="beforeOpen"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Método de Conservación</h5>
            <button type="button" class="close" @click="$modal.hide('my_modal_eliminar_metodo')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Esta segura/o de eliminar el Método?.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('my_modal_eliminar_metodo')"
            >Cancelar</button>
            <button
              type="button"
              class="btn btn-success"
              :disabled="bloquearBtnModal"
              @click="eliminarMetodo"
            >Eliminar</button>
          </div>
        </div>
      </modal>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">NO SE HA AGREGADO NINGÚN MÉTODO</b>
          </span>
        </h5>
      </div>
    </template>
  </div>
</template>
<script>
import FieldDefs from "./metodo-conser";
import Toastr from "../../../../mixins/toastr";
import vuex from "vuex";
import MyVuetable from "../../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
  data() {
    return {
      url: "/info-panel/cepa/bacteria/metodos-conser/",
      idMetodoEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "tipo_id",
          direction: "asc",
        },
      ],
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("cepa", ["accionEliminarCaract"]),
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    eliminarMetodo() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/cepas/bacteria/metodo-conser/${this.idMetodoEliminar}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          this.accionEliminarCaract({ tipo: "metodo", data: res.data });
          this.actualizarTabla();
          this.toastr(
            "Eliminar Metodo",
            "Metodo eliminada con exito!!",
            "success"
          );
          this.$modal.hide("my_modal_eliminar_metodo");
        })
        .catch((error) => {
          if (error.response.status === 403) {
            this.$router.push("/sin-acceso");
          } else if (error.response.status === 405) {
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!", "", "error");
          }
        });
    },
    beforeOpen(data) {
      this.idMetodoEliminar = data.params.id;
    },
    actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    },
  },

  computed: {
    ...vuex.mapGetters("cepa", ["getMetodoConser"]),
    mostrarTabla() {
      if (this.getMetodoConser != "" && this.getMetodoConser != null) {
        return true;
      }
      return false;
    },
  },
  created() {
    if (this.$route.params.cepaBacteriaId) {
      this.url += this.$route.params.cepaBacteriaId;
    } else {
      this.url += this.$route.params.cepaId;
    }
  },
};
</script>