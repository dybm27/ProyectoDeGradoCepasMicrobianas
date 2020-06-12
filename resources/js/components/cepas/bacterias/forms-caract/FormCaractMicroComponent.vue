<template>
  <div class="mt-4 mr-4 ml-4">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{tituloForm}}</h5>
            <form @submit.prevent="evento">
              <template v-if="getInfoCaractMicroBacterias">
                <label for="forma" class>Forma</label>
                <div class="input-group mb-3">
                  <select name="select" id="forma" class="form-control" v-model="parametros.forma">
                    <option
                      v-for="(f,index) in getInfoCaractMicroBacterias.formas_micros"
                      :key="index"
                      :value="f.id"
                    >{{f.nombre}}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('forma_micro')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="ordenamiento" class>Ordenamiento</label>
                <input
                  name="ordenamiento"
                  id="ordenamiento"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.ordenamiento"
                  required
                />
                <span v-if="errors.ordenamiento" class="text-danger">{{errors.ordenamiento[0]}}</span>
              </div>
              <div class="position-relative form-group">
                <label>Tinción de Gram</label>
                <div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_gram1"
                      name="tincion_gram"
                      class="custom-control-input"
                      value="Positivo"
                      v-model="parametros.tincion_gram"
                    />
                    <label class="custom-control-label" for="tincion_gram1">Gram Positivos</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_gram2"
                      name="tincion_gram"
                      class="custom-control-input"
                      value="Negativo"
                      v-model="parametros.tincion_gram"
                    />
                    <label class="custom-control-label" for="tincion_gram2">Gram Negativos</label>
                  </div>
                </div>
              </div>
              <div class="position-relative form-group">
                <label>Tinción de Esporas</label>
                <div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_esporas1"
                      name="tincion_esporas"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.tincion_esporas"
                    />
                    <label class="custom-control-label" for="tincion_esporas1">Presencia</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_esporas2"
                      name="tincion_esporas"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.tincion_esporas"
                    />
                    <label class="custom-control-label" for="tincion_esporas2">Ausencia</label>
                  </div>
                </div>
              </div>
              <div
                class="position-relative form-group"
                v-show="parametros.tincion_esporas==='Presencia'"
              >
                <label for="ubicacion_esporas" class>Ubicación de la Espora</label>
                <select
                  name="ubicacion_esporas"
                  id="ubicacion_esporas"
                  v-model="parametros.ubicacion_esporas"
                  class="form-control"
                >
                  <option value="Central">Central</option>
                  <option value="Subterminal">Subterminal</option>
                  <option value="Terminal">Terminal</option>
                </select>
              </div>
              <div class="position-relative form-group">
                <label>Tinción de Cápsula</label>
                <div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_capsula1"
                      name="tincion_capsula"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.tincion_capsula"
                    />
                    <label class="custom-control-label" for="tincion_capsula1">Presencia</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_capsula2"
                      name="tincion_capsula"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.tincion_capsula"
                    />
                    <label class="custom-control-label" for="tincion_capsula2">Ausencia</label>
                  </div>
                </div>
              </div>
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    accept="image/jpeg, image/png"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    multiple
                    :required="required"
                  />
                  <span v-if="erroresImagenes" class="text-danger">{{erroresImagenes}}</span>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="otras_caract">Otras Características</label>
                <textarea
                  name="otras_caract"
                  id="otras_caract"
                  class="form-control"
                  v-model="parametros.otras_caract"
                ></textarea>
              </div>
              <button
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="btnDisable"
              >{{nomBtn}}</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Imagenes</h5>
            <template v-if="required">
              <template v-if="imagenesCroppie.length===cantImagenes&&$refs.inputImagen.value">
                <croppie-cepas
                  :imagenes="imagenesCroppie"
                  @cambiarValorImagen="cambiarValorImagen"
                  :posicion="'vertical'"
                />
              </template>
              <template v-else>
                <div class="text-center">
                  <h5 class="mt-5 mb-5">
                    <span class="pr-1">
                      <b class="text-success">SIN IMÁGENES</b>
                    </span>
                  </h5>
                </div>
              </template>
            </template>
            <template v-else>
              <imagenes
                :parametros="parametros"
                :tipoCepa="'bacteria/caract-micro'"
                :imagenes="imagenes"
                :cepa="info"
                @accionImagen="accionImagen"
              ></imagenes>
            </template>
          </div>
        </div>
      </div>
    </div>
    <modal name="agregar-caract-info" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modal.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar-caract-info')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="nombre" class>Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder=" ..."
              type="text"
              class="form-control"
              v-model="modal.input"
              required
            />
            <span v-if="modal.errors.nombre" class="text-danger">{{modal.errors.nombre[0]}}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('agregar-caract-info')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="agregarInfo">Agregar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  props: ["info", "modificarInfo"],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  data() {
    return {
      parametros: {
        cepaId: "",
        forma: 1,
        ordenamiento: "",
        tincion_gram: "Positivo",
        tincion_esporas: "Presencia",
        ubicacion_esporas: "Central",
        tincion_capsula: "Presencia",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: []
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      erroresImagenes: "",
      imagenesCroppie: [],
      imagenes: [],
      cantImagenes: ""
    };
  },
  methods: {
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractBacteria"]),
    cambiarValorImagen(datos) {
      switch (datos.num) {
        case 1:
          this.imagenes[0].source = datos.data;
          this.parametros.imagen1 = datos.data;
          break;
        case 2:
          this.imagenes[1].source = datos.data;
          this.parametros.imagen2 = datos.data;
          break;
        case 3:
          this.imagenes[2].source = datos.data;
          this.parametros.imagen3 = datos.data;
          break;
      }
    },
    evento() {
      if (this.tituloForm === "Agregar Característica") {
        axios
          .post("/cepas/bacteria/caract-micro", this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Característica";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Característica Microscópica",
              "Característica Microscópica agregada con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        axios
          .put(`/cepas/bacteria/caract-micro/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Característica Microscópica",
              "Característica Microscópica editada con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
              // console.log(error.response.data);
            }
          });
      }
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
    },
    showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;
      if (tipo === "forma_micro") {
        this.modal.titulo = "Agregar Nueva Forma";
      }
      this.$modal.show("agregar-caract-info");
    },
    agregarInfo() {
      if (this.modal.input === "") {
        this.modal.errors = { nombre: { 0: "Favor llenar este campo" } };
      } else {
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input
        };
        axios
          .post("/info-caract-bacterias/agregar", parametros)
          .then(res => {
            this.accionAgregarTipoCaractBacteria({
              info: res.data,
              tipo: this.modal.tipo
            });
            this.$modal.hide("agregar-caract-info");
            this.toastr(
              "Agregar Informacion",
              `${this.modal.tipo} agregado/a con exito`,
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.modal.errors = error.response.data.errors;
            }
            this.toastr("Error!!!!", "", "error");
          });
      }
    },
    obtenerImagenes(e) {
      this.cantImagenes = 0;
      this.limpiar(0);
      let file = e.target.files[3];
      if (file) {
        this.erroresImagenes = "Solo puede subir max 3 imágenes.";
        this.limpiar(1);
      } else {
        let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
        let imagenes = [];
        for (let index = 0; index < 3; index++) {
          let imagen = e.target.files[index];
          if (imagen) {
            if (!allowedExtensions.exec(imagen.name) || imagen.size > 2000000) {
              this.limpiar(1);
              this.erroresImagenes =
                "Las imagenes deben ser en formato .png .jpg y menor a 2Mb.";
              imagenes = "";
              break;
            } else {
              this.erroresImagenes = "";
              imagenes.push(imagen);
            }
          } else {
            break;
          }
        }
        this.cantImagenes = imagenes.length;
        this.cargarImagenes(imagenes);
      }
    },
    cargarImagenes(imagenes) {
      this.imagenesCroppie = [];
      if (imagenes) {
        for (let index = 0; index < imagenes.length; index++) {
          let reader = new FileReader();
          reader.onload = e => {
            switch (index) {
              case 0:
                this.imagenesCroppie.push(e.target.result);
                this.pushImagen(1, e.target.result, true);
                break;
              case 1:
                this.imagenesCroppie.push(e.target.result);
                this.pushImagen(2, e.target.result, false);
                break;
              case 2:
                this.imagenesCroppie.push(e.target.result);
                this.pushImagen(3, e.target.result, false);
                break;
            }
          };
          reader.readAsDataURL(imagenes[index]);
        }
      }
    },
    pushImagen(num, imagen, active) {
      this.imagenes.push({
        num: num,
        source: imagen,
        isActive: active
      });
    },
    llenarArregloImagenes() {
      if (this.parametros.imagen1) {
        this.pushImagen(1, this.info.imagenPublica1, true);
        if (this.parametros.imagen2) {
          this.pushImagen(2, this.info.imagenPublica2, false);
        }
        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen2) {
        this.pushImagen(2, this.info.imagenPublica2, true);
        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen3) {
        this.pushImagen(3, this.info.imagenPublica3, true);
      }
    },
    limpiar(num) {
      switch (num) {
        case 0:
          this.parametros.imagen1 = "";
          this.parametros.imagen2 = "";
          this.parametros.imagen3 = "";
          this.imagenes = [];
          break;
        case 1:
          this.$refs.inputImagen.value = "";
          break;
      }
    },
    llenarInfo() {
      this.imagenes = [];
      this.parametros.forma = this.info.forma_id;
      this.parametros.ordenamiento = this.info.ordenamiento;
      this.parametros.tincion_gram = this.info.tincion_gram;
      this.parametros.tincion_esporas = this.info.tincion_esporas;
      this.parametros.ubicacion_esporas =
        this.info.ubicacion_esporas === null
          ? "Central"
          : this.info.ubicacion_esporas;
      this.parametros.tincion_capsula = this.info.tincion_capsula;
      this.parametros.otras_caract = this.info.otras_caract;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.llenarArregloImagenes();
    },
    accionImagen(data) {
      this.$emit("editar", data);
    }
  },
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoCaractMicroBacterias"]),
    required() {
      if (this.tituloForm === "Agregar Característica") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Característica") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    btnDisable() {
      if (this.imagenes != "") {
        if (this.info) {
          if (this.info.imagen1) {
            if (this.imagenes[0] && !this.parametros.imagen1) {
              return true;
            }
            if (this.info.imagen2) {
              if (this.imagenes[1] && !this.parametros.imagen2) {
                return true;
              }
              if (this.info.imagen3) {
                if (this.imagenes[2] && !this.parametros.imagen3) {
                  return true;
                }
              }
            } else if (this.info.imagen3) {
              if (this.imagenes[1] && !this.parametros.imagen3) {
                return true;
              }
            }
          } else if (this.info.imagen2) {
            if (this.imagenes[0] && !this.parametros.imagen2) {
              return true;
            }
            if (this.info.imagen3) {
              if (this.imagenes[1] && !this.parametros.imagen3) {
                return true;
              }
            }
          } else if (this.info.imagen3) {
            if (this.imagenes[0] && !this.parametros.imagen3) {
              return true;
            }
          }
          return false;
        } else {
          if (this.imagenes[0] && !this.parametros.imagen1) {
            return true;
          }
          if (this.imagenes[1] && !this.parametros.imagen2) {
            return true;
          }
          if (this.imagenes[2] && !this.parametros.imagen3) {
            return true;
          }
          return false;
        }
      } else {
        return false;
      }
    }
  },
  mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Característica";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Característica";
      this.nomBtn = "Agregar";
    }
    if (this.$route.params.cepaBacteriaId) {
      this.parametros.cepaId = this.$route.params.cepaBacteriaId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>