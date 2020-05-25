<template>
  <div class="container mt-4 mr-4 ml-4">
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{ titulo }}</h5>
            <form @submit.prevent="evento">
              <div class="position-relative form-group">
                <label for="medio" class>Primers</label>
                <div class="form-row">
                  <div class="col-md-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">F</span>
                      </div>
                      <input
                        placeholder="Nombre.."
                        name="nombre_forward"
                        id="nombre_forward"
                        type="text"
                        class="form-control"
                        v-model="parametros.nombre_forward"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <input
                        name="secuencia_forward"
                        id="secuencia_forward"
                        placeholder="Secuencia..."
                        type="text"
                        class="form-control"
                        v-model="parametros.secuencia_forward"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="producto_forward"
                        id="producto_forward"
                        placeholder="Producto..."
                        type="text"
                        class="form-control"
                        v-model="parametros.producto_forward"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">R</span>
                      </div>
                      <input
                        placeholder="Nombre.."
                        name="nombre_reversed"
                        id="nombre_reversed"
                        type="text"
                        class="form-control"
                        v-model="parametros.nombre_reversed"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <input
                        name="secuencia_reversed"
                        id="secuencia_reversed"
                        placeholder="Secuencia..."
                        type="text"
                        class="form-control"
                        v-model="parametros.secuencia_reversed"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="producto_reversed"
                        id="producto_reversed"
                        placeholder="Producto..."
                        type="text"
                        class="form-control"
                        v-model="parametros.producto_reversed"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-row justify-content-md-center">
                <div class="col-md-5">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Genero</span>
                    </div>
                    <input type="text" class="form-control" :value="getGeneroCepa.nombre" disabled />
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Especie</span>
                    </div>
                    <input type="text" class="form-control" :value="getEspecieCepa.nombre" disabled />
                  </div>
                </div>
              </div>
              <br />

              <div class="form-row">
                <div class="col-md-4">
                  <label for="condiciones_pcr" class>Condiciones PCR</label>
                  <div class="input-group">
                    <input
                      placeholder="..."
                      name="condiciones_pcr"
                      id="condiciones_pcr"
                      type="text"
                      class="form-control"
                      v-model="parametros.condiciones_pcr"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="blast" class>BLAST</label>
                  <div class="input-group">
                    <input
                      placeholder="..."
                      name="blast"
                      id="blast"
                      type="text"
                      class="form-control"
                      v-model="parametros.blast"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="analisis_filogenetico" class>Análisis Filogenético</label>
                  <div class="input-group">
                    <input
                      placeholder="..."
                      name="analisis_filogenetico"
                      id="analisis_filogenetico"
                      type="text"
                      class="form-control"
                      v-model="parametros.analisis_filogenetico"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-row justify-content-md-center mt-2">
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <label for="imagen_pcr" class>Imagen PCR</label>
                    <input
                      name="imagen_pcr"
                      @change="obtenerImagenPcr"
                      id="imagen_pcr"
                      type="file"
                      accept="image/jpeg, image/png"
                      class="form-control-file"
                      ref="inputImagenPcr"
                      :required="required"
                    />
                    <span v-if="imagenError.pcr" class="text-danger">{{ imagenError.pcr }}</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <label for="imagen_blast" class>Imagen BLAST</label>
                    <input
                      name="imagen_blast"
                      @change="obtenerImagenBlast"
                      id="imagen_blast"
                      type="file"
                      accept="image/jpeg, image/png"
                      class="form-control-file"
                      ref="inputImagenBlast"
                      :required="required"
                    />
                    <span v-if="imagenError.sec" class="text-danger">{{ imagenError.sec }}</span>
                  </div>
                </div>
              </div>
              <div class="form-row justify-content-md-center">
                <div class="col-md-8">
                  <div class="position-relative form-group">
                    <label for="observaciones">Observaciones</label>
                    <textarea
                      name="observaciones"
                      id="observaciones"
                      class="form-control"
                      v-model="parametros.observaciones"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="validarBtn"
              >{{ nomBtnComputed }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="form-row">
              <div class="col-md-6">
                <template v-if="mostraImagenPcr">
                  <h5 class="card-title">Imagen PCR</h5>
                  <template v-if="validarCroppiePcr">
                    <croppie
                      :id="'croppie1'"
                      :imagen="mostraImagenPcr"
                      @cambiarValorImagen="cambiarValorImagenPcr"
                      :mostrarBtnCroppie="mostrarBtnCroppiePcr"
                      :enableZoom="false"
                      :zoom="0"
                      :editar="true"
                      :boundaryHeigth="300"
                      :viewportWidth="200"
                    />
                  </template>
                  <template v-else>
                    <croppie
                      :id="'croppie1'"
                      :imagen="mostraImagenPcr"
                      @cambiarValorImagen="cambiarValorImagenPcr"
                      :mostrarBtnCroppie="mostrarBtnCroppiePcr"
                      :zoom="1"
                      :enableZoom="true"
                      :editar="false"
                      :boundaryHeigth="300"
                      :viewportWidth="200"
                    />
                  </template>
                </template>
                <template v-else>
                  <div class="text-center">
                    <h5 class="mt-5 mb-5">
                      <span class="pr-1">
                        <b class="text-warning">SIN IMAGEN PCR</b>
                      </span>
                    </h5>
                  </div>
                </template>
              </div>
              <div class="col-md-6">
                <template v-if="mostraImagenBlast">
                  <h5 class="card-title">Imagen BLAST</h5>
                  <template v-if="validarCroppieBlast">
                    <croppie
                      :id="'croppie2'"
                      :imagen="mostraImagenBlast"
                      @cambiarValorImagen="cambiarValorImagenBlast"
                      :mostrarBtnCroppie="mostrarBtnCroppieBlast"
                      :enableZoom="false"
                      :zoom="0"
                      :editar="true"
                      :boundaryHeigth="300"
                      :viewportWidth="300"
                    />
                  </template>
                  <template v-else>
                    <croppie
                      :id="'croppie2'"
                      :imagen="mostraImagenBlast"
                      @cambiarValorImagen="cambiarValorImagenBlast"
                      :mostrarBtnCroppie="mostrarBtnCroppieBlast"
                      :zoom="1"
                      :enableZoom="true"
                      :editar="false"
                      :boundaryHeigth="300"
                      :viewportWidth="300"
                    />
                  </template>
                </template>
                <template v-else>
                  <div class="text-center">
                    <h5 class="mt-5 mb-5">
                      <span class="pr-1">
                        <b class="text-warning">SIN IMAGEN BLAST</b>
                      </span>
                    </h5>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex, { mapGetters } from "vuex";
export default {
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        nombre_forward: "",
        nombre_reversed: "",
        secuencia_forward: "",
        secuencia_reversed: "",
        producto_forward: "",
        producto_reversed: "",
        condiciones_pcr: "",
        blast: "",
        analisis_filogenetico: "",
        observaciones: "",
        imagen_pcr: "",
        imagen_blast: ""
      },
      tituloForm: "",
      imagenMiniaturaPcr: "",
      imagenMiniaturaBlast: "",
      nomBtn: "",
      errors: [],
      imagenError: {
        pcr: "",
        sec: ""
      }
    };
  },
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  methods: {
    cambiarValorImagenPcr(valor) {
      if (valor) {
        this.parametros.imagen_pcr = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen_pcr = this.info.imagen_pcr;
          this.imagenMiniaturaPcr = this.info.imagen_pcrPublica;
          this.$refs.inputImagenPcr.value = "";
        } else {
          this.parametros.imagen_pcr = "";
        }
      }
    },
    cambiarValorImagenBlast(valor) {
      if (valor) {
        this.parametros.imagen_blast = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen_blast = this.info.imagen_blast;
          this.imagenMiniaturaBlast = this.info.imagen_blastPublica;
          this.$refs.inputImagenBlast.value = "";
        } else {
          this.parametros.imagen_blast = "";
        }
      }
    },
    evento() {
      if (this.tituloForm === "Agregar Identificación") {
        axios
          .post("/cepas/hongo/identi-molecu", this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagenPcr.value = "";
            this.$refs.inputImagenBlast.value = "";
            this.tituloForm = "Editar Identificación";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Identificación",
              "Identificación Molecular agregada con exito!!",
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
          .put(`/cepas/hongo/identi-molecu/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagenPcr.value = "";
            this.$refs.inputImagenBlast.value = "";
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Identificación",
              "Identificación Molecular editada con exito!!",
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
    llenarInfo() {
      this.parametros.nombre_forward = this.info.nombre_forward;
      this.parametros.nombre_reversed = this.info.nombre_reversed;
      this.parametros.secuencia_forward = this.info.secuencia_forward;
      this.parametros.secuencia_reversed = this.info.secuencia_reversed;
      this.parametros.producto_forward = this.info.producto_forward;
      this.parametros.producto_reversed = this.info.producto_reversed;
      this.parametros.condiciones_pcr = this.info.condiciones_pcr;
      this.parametros.blast = this.info.blast;
      this.parametros.analisis_filogenetico = this.info.analisis_filogenetico;
      this.parametros.observaciones = this.info.observaciones;
      this.parametros.imagen_pcr = this.info.imagen_pcr;
      this.parametros.imagen_blast = this.info.imagen_blast;
      this.imagenMiniaturaPcr = this.info.imagen_pcrPublica;
      this.imagenMiniaturaBlast = this.info.imagen_blastPublica;
    },

    obtenerImagenPcr(e) {
      let file = e.target.files[0];
      this.parametros.imagen_pcr = file;
      let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError.pcr =
            "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagenPcr.value = "";
          if (this.required) {
            this.imagenMiniaturaPcr = "";
            this.parametros.imagen_pcr = "";
          } else {
            this.imagenMiniaturaPcr = this.info.imagen_pcrPublica;
            this.parametros.imagen_pcr = this.info.imagen_pcr;
          }
        } else {
          this.imagenError.pcr = "";
          this.cargarImagen(file, "pcr");
        }
      } else {
        if (this.required) {
          this.imagenMiniaturaPcr = "";
          this.parametros.imagen_pcr = "";
        } else {
          this.imagenMiniaturaPcr = this.info.imagen_pcrPublica;
          this.parametros.imagen_pcr = this.info.imagen_pcr;
        }
      }
    },
    obtenerImagenBlast(e) {
      let file = e.target.files[0];
      this.parametros.imagen_blast = file;
      let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError.sec =
            "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagenBlast.value = "";
          if (this.required) {
            this.imagenMiniaturaBlast = "";
            this.parametros.imagen_blast = "";
          } else {
            this.imagenMiniaturaBlast = this.info.imagen_blastPublica;
            this.parametros.imagen_blast = this.info.imagen_blast;
          }
        } else {
          this.imagenError.sec = "";
          this.cargarImagen(file, "blast");
        }
      } else {
        if (this.required) {
          this.imagenMiniaturaBlast = "";
          this.parametros.imagen_blast = "";
        } else {
          this.imagenMiniaturaBlast = this.info.imagen_blastPublica;
          this.parametros.imagen_blast = this.info.imagen_blast;
        }
      }
    },
    cargarImagen(file, tipo) {
      let reader = new FileReader();
      reader.onload = e => {
        switch (tipo) {
          case "pcr":
            this.imagenMiniaturaPcr = e.target.result;
            break;
          case "blast":
            this.imagenMiniaturaBlast = e.target.result;
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  },
  computed: {
    ...vuex.mapGetters(["getGeneroCepa", "getEspecieCepa"]),
    mostraImagenPcr() {
      return this.imagenMiniaturaPcr;
    },
    mostraImagenBlast() {
      return this.imagenMiniaturaBlast;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Identificación") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Identificación") {
        return true;
      } else {
        return false;
      }
    },
    titulo() {
      return this.tituloForm;
    },
    nomBtnComputed() {
      return this.nomBtn;
    },
    mostrarBtnCroppiePcr() {
      if (this.info) {
        if (this.imagenMiniaturaPcr != this.info.imagen_pcrPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    mostrarBtnCroppieBlast() {
      if (this.info) {
        if (this.imagenMiniaturaBlast != this.info.imagen_blastPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    validarCroppiePcr() {
      if (this.info) {
        if (this.imagenMiniaturaPcr == this.info.imagen_pcrPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    validarCroppieBlast() {
      if (this.info) {
        if (this.imagenMiniaturaBlast == this.info.imagen_blastPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    validarBtn() {
      if (!this.parametros.imagen_pcr || !this.parametros.imagen_blast) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Identificación";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Identificación";
      this.nomBtn = "Agregar";
    }
    if (this.$route.params.cepaHongoId) {
      this.parametros.cepaId = this.$route.params.cepaHongoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>