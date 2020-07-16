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
            <b class="text-success">AÚN NO SE HAN AGREGADO USUARIOS</b>
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
          <button type="button" class="btn btn-success" @click="eliminarUsuario">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FieldDefs from "./columnas-usuarios";
import vuex from "vuex";
import Toastr from "../../../mixins/toastr";
import MyVuetable from "../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "name",
          direction: "asc"
        }
      ],
      id: ""
    };
  },
  computed: {
    ...vuex.mapGetters("usuarios", ["getUsuarios"]),
    mostrarTabla() {
      if (this.getUsuarios != "" && this.getUsuarios != null) {
        return true;
      }
      return false;
    }
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("usuarios", ["accionUsuario"]),
    beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarUsuario() {
      axios
        .delete(`/usuario/eliminar/${this.id}`)
        .then(res => {
          this.toastr(
            "Eliminar Usuario",
            "Usuario eliminado con exito!!",
            "success",
            5000
          );
          this.accionUsuario({ tipo: "eliminar", data: res.data });
          this.$modal.hide("modal_eliminar_usuario");
          this.actualizarTabla();
        })
        .catch(error => {
          if (error.response) {
            //console.log(error.response.data);
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
    closeEliminar() {
      window.Echo.private("desbloquearBtnsUsuario").whisper(
        "desbloquearBtnsUsuario",
        {
          id: this.id
        }
      );
      this.$events.fire("spliceMisBloqueosUsuario", {
        id: this.id
      });
    },
    actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
    this.$events.on("actualizartablaUsuario", e => this.actualizarTabla());
  },
  destroyed() {
    this.$events.off("actualizartablaUsuario");
  }
};
</script>