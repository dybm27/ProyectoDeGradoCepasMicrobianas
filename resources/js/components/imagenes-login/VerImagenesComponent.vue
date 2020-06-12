<template>
  <div class="main-card mb-3 card">
    <div class="card-body m-3">
      <h5 class="card-title">imagenes</h5>
      <template v-if="getImagenesLogin!=''">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-4" v-for="(imagen, index) in getImagenesLogin" :key="index">
              <div class="card">
                <img class="card-img-top" :src="imagen.imagenPublica" />
                <div class="card-body">
                  <h5 class="card-title">{{imagen.titulo}}</h5>
                  <p class="card-text">{{imagen.descripcion}}</p>
                </div>
                <div class="card-footer">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-7">
                        <small class="text-muted">{{modificarFecha(imagen.created_at)}}</small>
                      </div>
                      <div class="col-md-5 text-right">
                        <img
                          v-tooltip="'Editar Imagen'"
                          :src="'/iconos/icons8-editar-imagen-30.png'"
                          @click="editar(imagen.id)"
                        />
                        <img
                          v-tooltip="'Eliminar Imagen'"
                          :src="'/iconos/icons8-eliminar-30.png'"
                          @click="$modal.show('eliminar_imagen',{id: imagen.id})"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="text-center">
          <h5 class="mt-5 mb-5">
            <span class="pr-1">
              <b class="text-warning">AÚN NO SE HAN AGREGADO IMAGENES</b>
            </span>
          </h5>
        </div>
      </template>
    </div>
    <modal
      name="eliminar_imagen"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Imagen</h5>
          <button type="button" class="close" @click="$modal.hide('eliminar_imagen')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Imagen?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('eliminar_imagen')"
          >Cancelar</button>
          <button type="button" class="btn btn-primary" @click="eliminar">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      id: ""
    };
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  computed: {
    ...vuex.mapGetters("imagenes_login", ["getImagenesLogin"]),
    mostrarImagenes() {
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("imagenes_login", ["accionImagenLogin"]),
    modificarFecha(fecha) {
      return moment(fecha).fromNow();
    },
    editar(id) {
      this.$router.push({ name: "imagenes-editar", params: { idImagen: id } });
    },
    beforeOpenEliminar(datos) {
      this.id = datos.params.id;
    },
    eliminar() {
      axios
        .delete(`/login/imagen/${this.id}`)
        .then(res => {
          this.accionImagenLogin({ tipo: "eliminar", data: res.data });
          this.toastr(
            "Eliminar Imagen",
            "Imagen eliminada con exito!!",
            "success"
          );
          this.$modal.hide("eliminar_imagen");
        })
        .catch(error => {
          if (error.response) {
            this.toastr("Error!!", "", "error");
          }
        });
    },
    toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
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
    }
  }
};
</script>