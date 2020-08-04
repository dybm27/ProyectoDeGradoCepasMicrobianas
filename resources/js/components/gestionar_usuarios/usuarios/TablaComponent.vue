<template>
  <div>
    <template v-if="mostrarTabla">
      <MyVuetable
        ref="tabla"
        api-url="/info-panel/usuarios-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'usuarios'"
      />
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO NUEVOS USUARIOS</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_usuario"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Usuario</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_usuario')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Usuario?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_usuario')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="eliminarUsuario"
          >Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FieldDefs from "./columnas-usuarios";
import vuex from "vuex";
import Toastr from "../../../mixins/toastr";
import websocketsTabla from "../../../mixins/websocketsTabla";
import MyVuetable from "../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "name",
          direction: "asc",
        },
      ],
      id: "",
      bloquearBtnModal: false,
    };
  },
  computed: {
    ...vuex.mapState("usuarios", ["usuarios"]),
    mostrarTabla() {
      if (this.usuarios != "" && this.usuarios != null) {
        return true;
      }
      return false;
    },
  },
  mixins: [Toastr, websocketsTabla("Usuario")],
  methods: {
    ...vuex.mapActions("usuarios", ["accionUsuario"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarUsuario() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/usuario/eliminar/${this.id}`)
        .then((res) => {
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            if (res.data != "negativo") {
              this.toastr(
                "Eliminar Usuario",
                "Usuario eliminado con exito!!",
                "success",
                5000
              );
              this.accionUsuario({ tipo: "eliminar", data: res.data });
              this.actualizarTabla();
            } else {
              this.toastr(
                "Precaución",
                "El Usuario se encuentra Logueado y no es posible eliminarlo!!",
                "warning",
                8000
              );
            }
            this.bloquearBtnModal = false;
            this.$modal.hide("modal_eliminar_usuario");
          }
        })
        .catch((error) => {
          this.bloquearBtnModal = false;
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
  },
};
</script>