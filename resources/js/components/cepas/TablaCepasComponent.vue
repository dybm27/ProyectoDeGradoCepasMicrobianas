<template>
  <div>
    <template v-if="mostrarTabla">
      <MyVuetable
        ref="tabla"
        :api-url="'/info-panel/'+tipo+'s-tabla'"
        :fields="FieldDefs"
        :sort-order="sortOrder"
        :detail-row-component="detailRowComponent"
        :nameGet="tipo+'s'"
      ></MyVuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO {{titulo}}</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      :name="'modal_eliminar_cepa'"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Cepa Microbiana</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_cepa')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Cepa?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_cepa')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="eliminarCepa"
          >Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import MyVuetable from "../vuetable/MyVuetableComponent.vue";
import Toastr from "../../mixins/toastr";
import websocketsTabla from "../../mixins/websocketsTabla";
import vuex from "vuex";
export default {
  props: ["FieldDefs", "detailRowComponent", "tipo", "titulo"],
  components: { MyVuetable },
  data() {
    return {
      id: "",
      sortOrder: [
        {
          field: "codigo",
          direction: "asc",
        },
      ],
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  computed: {
    ...vuex.mapState("cepas", ["cepas"]),
    ...vuex.mapGetters("cepas", ["getCepasByGrupo"]),
    mostrarTabla() {
      if (this.cepas != "" && this.cepas != null && this.validarTipoCepa) {
        return true;
      }
      return false;
    },
    validarTipoCepa() {
      switch (this.tipo) {
        case "cepa":
          return true;
          break;
        case "bacteria":
          if (this.getCepasByGrupo(1).length > 0) {
            return true;
          }
          break;
        case "levadura":
          if (this.getCepasByGrupo(3).length > 0) {
            return true;
          }
          break;
        case "hongo":
          if (this.getCepasByGrupo(2).length > 0) {
            return true;
          }
          break;
        case "actinomiceto":
          if (this.getCepasByGrupo(4).length > 0) {
            return true;
          }
          break;
      }
      return false;
    },
  },
  methods: {
    ...vuex.mapActions("cepas", ["accionCepas"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarCepa() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/cepas/eliminar/${this.id}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            if (res.data === "negativo") {
              this.toastr(
                "Precaución!!",
                "La cepa cuenta con caracteristicas registradas, favor eliminarlas",
                "warning",
                8000
              );
            } else {
              this.refrescarTabla = true;
              this.toastr(
                "Eliminar Cepa",
                "Cepa eliminada con exito!!",
                "success",
                5000
              );
            }
            this.accionCepas({ tipo: "eliminar", data: res.data });
            this.actualizarTabla();
            this.$modal.hide("modal_eliminar_cepa");
          }
        })
        .catch((error) => {
          this.bloquearBtnModal = false;
          this.toastr("Error!!", "", "error");
        });
    },
    closeEliminar() {
      window.Echo.private("desbloquearBtnsCepa").whisper(
        "desbloquearBtnsCepa",
        {
          id: this.id,
        }
      );
      this.$events.fire("eliminarMiBloqueoCepa", {
        id: this.id,
      });
    },
    actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    },
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
    this.$events.on("actualizartablaCepa", (e) => this.actualizarTabla());
  },
  destroyed() {
    this.$events.off("actualizartablaCepa");
  },
};
</script>