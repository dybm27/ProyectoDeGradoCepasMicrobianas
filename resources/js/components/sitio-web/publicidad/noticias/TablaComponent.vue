<template>
  <div>
    <template v-if="mostrarTabla">
      <MyVuetable
        ref="tabla"
        :apiUrl="'/info-panel/noticias-tabla'"
        :fields="fields"
        :sortOrder="sortOrder"
        :detailRowComponent="''"
        :nameGet="'noticias'"
      ></MyVuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO NOTICIAS</b>
          </span>
        </h5>
      </div>
    </template>
    <transition name="fade">
      <modal
        name="modal_eliminar_noticia"
        classes="my_modal"
        :maxWidth="400"
        :adaptive="true"
        height="auto"
        :scrollable="true"
        @before-open="beforeOpenEliminar"
        @closed="closeEliminar"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Eliminar Noticia
            </h5>
            <button
              type="button"
              class="close"
              @click="$modal.hide('modal_eliminar_noticia')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Esta segura/o de eliminar la Noticia?.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('modal_eliminar_noticia')"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-success"
              :disabled="bloquearBtnModal"
              @click="eliminarNoticia"
            >
              Eliminar
            </button>
          </div>
        </div>
      </modal>
    </transition>
  </div>
</template>

<script>
import FieldDefs from "./columnas";
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import websocketsTabla from "../../../../mixins/websocketsTabla";
import MyVuetable from "../../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "titulo",
          direction: "asc",
        },
      ],
      id: "",
      bloquearBtnModal: false,
    };
  },
  computed: {
    ...vuex.mapGetters("publicidad", ["getNoticias"]),
    mostrarTabla() {
      if (this.getNoticias != "" && this.getNoticias != null) {
        return true;
      }
      return false;
    },
  },
  mixins: [Toastr, websocketsTabla("Noticia")],
  methods: {
    ...vuex.mapActions("publicidad", ["accionNoticia"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarNoticia() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/difusion/${this.id}`, {
          data: { tipo: "noticia" },
        })
        .then((res) => {
          this.bloquearBtnModal = false;
          this.toastr(
            "Eliminar Noticia",
            "Noticia eliminada con exito!!",
            "success"
          );
          this.accionNoticia({ tipo: "eliminar", data: res.data });
          this.actualizarTabla();
          this.$modal.hide("modal_eliminar_noticia");
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