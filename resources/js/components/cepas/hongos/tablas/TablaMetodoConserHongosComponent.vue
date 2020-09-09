<template>
  <div>
    <template v-if="mostrarTabla">
      <div class="card-body mt-3 ml-2 mr-2">
        <MyVuetable
          ref="tabla"
          :apiUrl="url"
          :fields="fields"
          :sortOrder="sortOrder"
          :nameGet="'metodos-hongos'"
          :detailRowComponent="''"
        ></MyVuetable>
      </div>
      <transition name="fade">
        <modal
          name="my_modal_eliminar_metodo"
          classes="my_modal"
          :maxWidth="400"
          :adaptive="true"
          height="auto"
          :scrollable="true"
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
      </transition>
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
      url: "/info-panel/cepa/hongo/metodos-conser/",
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
        .delete(`/cepas/hongo/metodo-conser/${this.idMetodoEliminar}`)
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
          } else if (
            error.response.status === 405 ||
            error.response.status === 401
          ) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
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
    let array = [];
    if (this.$route.params.cepaHongoSlug) {
      array = this.$route.params.cepaHongoSlug.split("-");
      this.url += parseInt(array[array.length - 1]);
    } else {
      array = this.$route.params.cepaSlug.split("-");
      this.url += parseInt(array[array.length - 1]);
    }
  },
};
</script>