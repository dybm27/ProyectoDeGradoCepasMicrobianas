<template>
  <div>
    <template v-if="mostraImagenes">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <carousel :id="1" :imagenes="imagenes"></carousel>
          </div>
        </div>
        <div class="row mt-3 mb-3">
          <div class="col-md-4">
            <button
              v-show="btnAgregar"
              type="button"
              class="mr-3 btn btn-info btn-block"
              @click="showModalImagen('agregar')"
            >Agregar</button>
          </div>
          <div class="col-md-4">
            <button
              v-show="btnCambiar"
              type="button"
              class="mr-3 btn btn-warning btn-block"
              @click="showModalImagen('cambiar')"
            >Cambiar</button>
          </div>
          <div class="col-md-4">
            <button
              v-show="btnEliminar"
              type="button"
              class="btn btn-danger btn-block"
              @click="showModalImagen('eliminar')"
            >Eliminar</button>
          </div>
        </div>
      </div>
    </template>
    <modal name="agregar_cambiar_imagen" classes="my_modal" :width="700" :height="490">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modalImagen.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar_cambiar_imagen')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <template v-if="modalImagen.nomBtn==='Agregar'">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <div class="position-relative form-group">
                    <label for="imagen" class>Seleccione la nueva Imagen</label>
                    <input
                      name="imagen"
                      @change="verificarImagen"
                      id="imagen"
                      type="file"
                      class="form-control-file"
                      ref="inputImagenModal"
                      accept="image/jpeg, image/png"
                    />
                    <span v-if="modalImagen.errors" class="text-danger">{{modalImagen.errors}}</span>
                  </div>
                </div>
                <div class="col-sm-6">
                  <template v-if="mostraImagen">
                    <croppie
                      :id="'croppie'"
                      :imagen="mostraImagen"
                      @cambiarValorImagen="cambiarValorImagen"
                      :mostrarBtnCroppie="true"
                      :zoom="1"
                      :enableZoom="true"
                      :editar="false"
                      :boundaryHeigth="230"
                      :viewportWidth="200"
                    />
                  </template>
                  <template v-else>
                    <div class="text-center">
                      <h5 class="mt-5 mb-5">
                        <span class="pr-1">
                          <b class="text-warning">SIN IMAGEN</b>
                        </span>
                      </h5>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
          <template v-if="modalImagen.nomBtn==='Cambiar'">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <div class="position-relative form-group">
                    <label for="select_imagen" class>{{modalImagen.nomLabel}}</label>
                    <select
                      name="select_imagen"
                      id="select_imagen"
                      v-model.number="modalImagen.select_imagen"
                      class="form-control"
                    >
                      <option value="1" v-if="parametros.imagen1">Primera</option>
                      <option value="2" v-if="parametros.imagen2">Segunda</option>
                      <option value="3" v-if="parametros.imagen3">Tercera</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="imagen" class>Seleccione la nueva Imagen</label>
                    <input
                      name="imagen"
                      @change="verificarImagen"
                      id="imagen"
                      type="file"
                      class="form-control-file"
                      ref="inputImagenModal"
                      accept="image/jpeg, image/png"
                    />
                    <span v-if="modalImagen.errors" class="text-danger">{{modalImagen.errors}}</span>
                  </div>
                </div>
                <div class="col-sm-6">
                  <template v-if="mostraImagen">
                    <croppie
                      :id="'croppie'"
                      :imagen="mostraImagen"
                      @cambiarValorImagen="cambiarValorImagen"
                      :mostrarBtnCroppie="true"
                      :zoom="1"
                      :enableZoom="true"
                      :editar="false"
                      :boundaryHeigth="230"
                      :viewportWidth="200"
                    />
                  </template>
                  <template v-else>
                    <div class="text-center">
                      <h5 class="mt-5 mb-5">
                        <span class="pr-1">
                          <b class="text-warning">SIN IMAGEN</b>
                        </span>
                      </h5>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('agregar_cambiar_imagen')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="accionModal"
            :disabled="validarBtn"
          >{{modalImagen.nomBtn}}</button>
        </div>
      </div>
    </modal>
    <modal name="eliminar_imagen" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modalImagen.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('eliminar_imagen')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="select_imagen" class>{{modalImagen.nomLabel}}</label>
            <select
              name="select_imagen"
              id="select_imagen"
              v-model.number="modalImagen.select_imagen"
              class="form-control"
            >
              <option value="1" v-if="parametros.imagen1">Primera</option>
              <option value="2" v-if="parametros.imagen2">Segunda</option>
              <option value="3" v-if="parametros.imagen3">Tercera</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('eliminar_imagen')"
          >Cancelar</button>
          <button type="button" class="btn btn-primary" @click="accionModal">{{modalImagen.nomBtn}}</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  props: ["parametros", "tipoCepa", "imagenes", "cepa"],
  data() {
    return {
      modalImagen: {
        nomBtn: "",
        select_imagen: 1,
        imagen: "",
        titulo: "",
        nomLabel: "",
        errors: ""
      },
      imagenMiniatura: ""
    };
  },
  methods: {
    cambiarValorImagen(valor) {
      this.modalImagen.imagen = valor;
    },
    showModalImagen(tipo) {
      this.seleccionar();
      this.imagenMiniatura = "";
      this.modalImagen.errors = "";
      this.modalImagen.imagen = "";
      if (tipo === "cambiar") {
        this.modalImagen.nomBtn = "Cambiar";
        this.modalImagen.titulo = "Cambiar Imagen";
        this.modalImagen.nomLabel = "Cual imagen desea cambiar?";
        this.$modal.show("agregar_cambiar_imagen");
      } else if (tipo === "eliminar") {
        this.modalImagen.nomBtn = "Eliminar";
        this.modalImagen.titulo = "Eliminar Imagen";
        this.modalImagen.nomLabel = "Cual imagen desea eliminar?";
        this.$modal.show("eliminar_imagen");
      } else {
        this.modalImagen.nomBtn = "Agregar";
        this.modalImagen.titulo = "Agregar Imagen";
        this.$modal.show("agregar_cambiar_imagen");
      }
    },
    seleccionar() {
      if (this.parametros.imagen1) {
        this.modalImagen.select_imagen = 1;
      } else if (this.parametros.imagen2) {
        this.modalImagen.select_imagen = 2;
      } else if (this.parametros.imagen3) {
        this.modalImagen.select_imagen = 3;
      }
    },
    accionModal() {
      this.modalImagen.errors = "";
      if (this.modalImagen.nomBtn === "Cambiar") {
        if (this.$refs.inputImagenModal.value) {
          let parametros = {
            numero: this.modalImagen.select_imagen,
            imagen: this.modalImagen.imagen
          };
          axios
            .put(
              `/cepas/${this.tipoCepa}/cambiar-imagen/${this.cepa.id}`,
              parametros
            )
            .then(res => {
              this.$emit("accionImagen", res.data);
              this.$modal.hide("agregar_cambiar_imagen");
              this.toastr(
                "Cambiar Imagen",
                "La imagen fue cambiada con exito!!",
                "success"
              );
            })
            .catch(error => {
              if (error.response) {
                this.modalImagen.errors = [];
                this.modalImagen.errors = error.response.data.errors;
                this.toastr("Error!!", "", "error");
                // console.log(error.response.data);
              }
            });
        } else {
          this.modalImagen.errors = "Favor seleccionar una imagen.";
        }
      } else if (this.modalImagen.nomBtn === "Eliminar") {
        let parametros = {
          numero: this.modalImagen.select_imagen
        };
        axios
          .put(
            `/cepas/${this.tipoCepa}/eliminar-imagen/${this.cepa.id}`,
            parametros
          )
          .then(res => {
            this.$emit("accionImagen", res.data);
            this.$modal.hide("eliminar_imagen");
            this.toastr(
              "Eliminar Imagen",
              "Imagen eliminada con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.modalImagen.errors = [];
              this.modalImagen.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
              // console.log(error.response.data);
            }
          });
      } else {
        if (this.$refs.inputImagenModal.value) {
          this.colocarNumeroAgregar();
          let parametros = {
            numero: this.modalImagen.select_imagen,
            imagen: this.modalImagen.imagen
          };
          axios
            .put(
              `/cepas/${this.tipoCepa}/agregar-imagen/${this.cepa.id}`,
              parametros
            )
            .then(res => {
              this.$emit("accionImagen", res.data);
              this.$modal.hide("agregar_cambiar_imagen");
              this.toastr(
                "Agregar Imagen",
                "La imagen fue agregada con exito!!",
                "success"
              );
            })
            .catch(error => {
              if (error.response) {
                this.modalImagen.errors = [];
                this.modalImagen.errors = error.response.data.errors;
                this.toastr("Error!!", "", "error");
                // console.log(error.response.data);
              }
            });
        } else {
          this.modalImagen.errors = "Favor seleccionar una imagen.";
        }
      }
    },
    colocarNumeroAgregar() {
      if (!this.parametros.imagen1) {
        this.modalImagen.select_imagen = 1;
      } else if (!this.parametros.imagen2) {
        this.modalImagen.select_imagen = 2;
      } else if (!this.parametros.imagen3) {
        this.modalImagen.select_imagen = 3;
      }
    },
    verificarImagen(e) {
      this.modalImagen.errors = "";
      let file = e.target.files[0];
      let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.modalImagen.errors =
            "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagenModal.value = "";
          this.modalImagen.imagen = "";
        } else {
          this.modalImagen.errors = "";
          this.cargarImagen(file);
        }
      } else {
        this.modalImagen.imagen = "";
        this.imagenMiniatura = "";
      }
    },
    cargarImagen(file) {
      let reader = new Image();
      reader.onload = e => {
        this.imagenMiniatura = reader.src;
      };
      reader.src = URL.createObjectURL(file);
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
  },
  computed: {
    mostraImagenes() {
      if (
        this.parametros.imagen1 ||
        this.parametros.imagen2 ||
        this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnAgregar() {
      if (
        !this.parametros.imagen1 ||
        !this.parametros.imagen2 ||
        !this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnCambiar() {
      if (
        this.parametros.imagen1 ||
        this.parametros.imagen2 ||
        this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnEliminar() {
      let cant = 0;
      if (this.parametros.imagen1) {
        cant++;
      }
      if (this.parametros.imagen2) {
        cant++;
      }
      if (this.parametros.imagen3) {
        cant++;
      }
      if (cant > 1) {
        return true;
      } else {
        return false;
      }
    },
    mostraImagen() {
      return this.imagenMiniatura;
    },
    validarBtn() {
      if (!this.modalImagen.imagen) {
        return true;
      }
      return false;
    }
  }
};
</script>