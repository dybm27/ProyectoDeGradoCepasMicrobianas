<template>
  <div>
    <template v-if="getUsuarios!=''">
      <my-vuetable
        api-url="/info-panel/usuarios"
        :fields="fields"
        :sort-order="sortOrder"
        @cambiarVariable="cambiarVariable"
        :refrescarTabla="refrescarTabla"
        :nameGet="'usuarios'"
      ></my-vuetable>
      <modal
        name="my_modal_eliminarUsuario"
        classes="my_modal"
        :width="400"
        :height="300"
        @before-open="beforeOpenEliminar"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Usuario</h5>
            <button type="button" class="close" @click="$modal.hide('my_modal_eliminarUsuario')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Esta segura/o de eliminar el Usuario?.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('my_modal_eliminarUsuario')"
            >Cancelar</button>
            <button type="button" class="btn btn-success" @click="eliminarUsuario">Eliminar</button>
          </div>
        </div>
      </modal>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">NO SE HAN AGREGADO USUARIOS</b>
          </span>
        </h5>
      </div>
    </template>
  </div>
</template>
<script>
import FieldDefs from "./columnas/columnas-usuarios";
import vuex from "vuex";

export default {
  data() {
    return {
      refrescarTabla: false,
      idUsuarioEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "name",
          direction: "asc"
        }
      ],
      modal: {
        nombre: "",
        tipo_user: "",
        email: "",
        contraseña: "",
        imagen: ""
      },
      errors: [],
      titulo_modal: ""
    };
  },
  methods: {
    ...vuex.mapActions("usuarios", ["accionAgregarTipoUsers"]),
    toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: () => {},
        onClicked: () => {},
        onClosed: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {}
      });
    },
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    eliminarUsuario() {
      axios
        .delete(`/usuario/eliminar/${this.idUsuarioEliminar}`)
        .then(res => {
          this.refrescarTabla = true;
          this.toastr(
            "Eliminar Usuario",
            "Usuario eliminado con exito!!",
            "success",
            5000
          );
          this.$modal.hide("my_modal_eliminarUsuario");
        })
        .catch(error => {
          if (error.response) {
            //console.log(error.response.data);
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
    beforeOpenEliminar(data) {
      this.idUsuarioEliminar = data.params.id;
    }
  },
  computed: {
    ...vuex.mapGetters("usuarios", ["getUsuarios"])
  }
};
</script>