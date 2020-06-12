<template>
  <div class="mt-4 mr-4 ml-4">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{tituloForm}}</h5>
            <form @submit.prevent="evento">
              <template v-if="getInfoCaractMicroActinomicetos">
                <label for="tincion" class>Tinción de Gram</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="tincion"
                    class="form-control"
                    v-model="parametros.tincion"
                  >
                    <option
                      v-for="(f,index) in getInfoCaractMicroActinomicetos.tincions"
                      :key="index"
                      :value="f.id"
                    >{{f.nombre}}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('tincion')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <label for="forma" class>Forma</label>
                <div class="input-group mb-3">
                  <select name="select" id="forma" class="form-control" v-model="parametros.forma">
                    <option
                      v-for="(f,index) in getInfoCaractMicroActinomicetos.formas_micros"
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
                <label for="micelio" class>Micelío</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="micelio"
                    class="form-control"
                    v-model="parametros.micelio"
                  >
                    <option
                      v-for="(f,index) in getInfoCaractMicroActinomicetos.micelios"
                      :key="index"
                      :value="f.id"
                    >{{f.nombre}}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('micelio')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <label for="conidioforo" class>Conidióforo</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="conidioforo"
                    class="form-control"
                    v-model="parametros.conidioforo"
                  >
                    <option
                      v-for="(f,index) in getInfoCaractMicroActinomicetos.conidioforos"
                      :key="index"
                      :value="f.id"
                    >{{f.nombre}}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('conidioforo')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="forma_estructura_reproduccion" class>Forma Estructura de Reproducción</label>
                <input
                  name="forma_estructura_reproduccion"
                  id="forma_estructura_reproduccion"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.forma_estructura_reproduccion"
                  required
                />
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
                :tipoCepa="'actinomiceto/caract-micro'"
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
              :class="['form-control',modal.errors.nombre!=undefined?'is-invalid':'']"
              v-model="modal.input"
              required
            />
            <em v-if="modal.errors.nombre" class="error invalid-feedback">{{modal.errors.nombre[0]}}</em>
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
        forma_estructura_reproduccion: "",
        tincion: 1,
        micelio: 1,
        conidioforo: 1,
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
      imagenesCroppie: [],
      imagenes: [],
      cantImagenes: ""
    };
  },
  methods: {
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractActinomiceto"]),
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
          .post("/cepas/actinomiceto/caract-micro", this.parametros)
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
          .put(
            `/cepas/actinomiceto/caract-micro/${this.info.id}`,
            this.parametros
          )
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
      } else if (tipo === "tincion") {
        this.modal.titulo = "Agregar Nueva Tincion";
      } else if (tipo === "micelio") {
        this.modal.titulo = "Agregar Nuevo Micelio";
      } else {
        this.modal.titulo = "Agregar Nuevo Conodioforo";
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
          .post("/info-caract-actinomicetos/agregar", parametros)
          .then(res => {
            this.accionAgregarTipoCaractActinomiceto({
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
      this.parametros.forma_estructura_reproduccion = this.info.forma_estructura_reproduccion;
      this.parametros.tincion = this.info.tinciongram_id;
      this.parametros.micelio = this.info.micelio_id;
      this.parametros.conidioforo = this.info.conidioforo_id;
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
    ...vuex.mapGetters("info_caract", ["getInfoCaractMicroActinomicetos"]),
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
    if (this.$route.params.cepaActinomicetoId) {
      this.parametros.cepaId = this.$route.params.cepaActinomicetoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>