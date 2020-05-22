<template>
  <div>
    <form @submit.prevent="evento" class="mt-4 mr-4 ml-4">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">{{titulo}}</h5>
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
                          name="secuen_forward"
                          id="secuen_forward"
                          placeholder="Secuencia..."
                          type="text"
                          class="form-control"
                          v-model="parametros.secuen_forward"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="position-relative form-group">
                        <input
                          name="produc_forward"
                          id="produc_forward"
                          placeholder="Producto..."
                          type="text"
                          class="form-control"
                          v-model="parametros.produc_forward"
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
                          name="secuen_reversed"
                          id="secuen_reversed"
                          placeholder="Secuencia..."
                          type="text"
                          class="form-control"
                          v-model="parametros.secuen_reversed"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="position-relative form-group">
                        <input
                          name="produc_reversed"
                          id="produc_reversed"
                          placeholder="Producto..."
                          type="text"
                          class="form-control"
                          v-model="parametros.produc_reversed"
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
                      <input
                        type="text"
                        class="form-control"
                        :value="getGeneroCepa.nombre"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Especie</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        :value="getEspecieCepa.nombre"
                        disabled
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
                        accept="image/jpeg"
                        class="form-control-file"
                        ref="inputImagenPcr"
                        :required="required"
                      />
                      <span v-if="imagenError.pcr" class="text-danger">{{imagenError.pcr}}</span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="imagen_sec" class>Imagen Secuencia</label>
                      <input
                        name="imagen_sec"
                        @change="obtenerImagenSec"
                        id="imagen_sec"
                        type="file"
                        accept="image/jpeg"
                        class="form-control-file"
                        ref="inputImagenSec"
                        :required="required"
                      />
                      <span v-if="imagenError.sec" class="text-danger">{{imagenError.sec}}</span>
                    </div>
                  </div>
                </div>
                <div class="form-row justify-content-md-center">
                  <div class="col-md-8">
                    <div class="position-relative form-group">
                      <label for="obser_secuenciacion">Informe de Secuenciación</label>
                      <textarea
                        name="obser_secuenciacion"
                        id="obser_secuenciacion"
                        class="form-control"
                        v-model="parametros.obser_secuenciacion"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtnComputed}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-md-5">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <template v-if="mostraImagenPcr">
                  <h5 class="card-title">Imagen PCR</h5>
                  <img :src="mostraImagenPcr" class="d-block w-100" alt="Imagen PCR" />
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
            </div>
          </div>
          <div class="col-md-5">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <template v-if="mostraImagenSec">
                  <h5 class="card-title">Imagen Secuenciación</h5>
                  <img :src="mostraImagenSec" class="d-block w-100" alt="Imagen PCR" />
                </template>
                <template v-else>
                  <div class="text-center">
                    <h5 class="mt-5 mb-5">
                      <span class="pr-1">
                        <b class="text-warning">SIN IMAGEN DE SECUENCIACIÓN</b>
                      </span>
                    </h5>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        nombre_forward: "",
        nombre_reversed: "",
        secuen_forward: "",
        secuen_reversed: "",
        produc_forward: "",
        produc_reversed: "",
        obser_secuenciacion: "",
        imagen_pcr: "",
        imagen_sec: ""
      },
      tituloForm: "",
      imagenMiniaturaPcr: "",
      imagenMiniaturaSec: "",
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
    evento() {
      if (this.tituloForm === "Agregar Identificación") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/bacteria/identi-molecu", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
            this.errors = [];
            this.$refs.inputImagenPcr.value = "";
            this.$refs.inputImagenSec.value = "";
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
        if (
          this.parametros.imagen_pcr === this.info.img_pcr &&
          this.parametros.imagen_sec === this.info.img_secuen
        ) {
          axios
            .put(
              `/cepas/bacteria/identi-molecu/${this.info.id}`,
              this.parametros
            )
            .then(res => {
              this.errors = [];
              this.$refs.inputImagenPcr.value = "";
              this.$refs.inputImagenSec.value = "";
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
        } else {
          let formData = new FormData();
          this.appendInfo(formData);
          formData.append("_method", "PUT");
          axios
            .post(`/cepas/bacteria/identi-molecu/${this.info.id}`, formData, {
              headers: { "Content-Type": "multipart/form-data" }
            })
            .then(res => {
              this.errors = [];
              this.$refs.inputImagenPcr.value = "";
              this.$refs.inputImagenSec.value = "";
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
      this.parametros.secuen_forward = this.info.secuen_forward;
      this.parametros.secuen_reversed = this.info.secuen_reversed;
      this.parametros.produc_forward = this.info.produc_forward;
      this.parametros.produc_reversed = this.info.produc_reversed;
      this.parametros.obser_secuenciacion = this.info.obser_secuenciacion;
      this.parametros.imagen_pcr = this.info.img_pcr;
      this.parametros.imagen_sec = this.info.img_secuen;
      this.imagenMiniaturaPcr = this.info.img_pcrPublica;
      this.imagenMiniaturaSec = this.info.img_secuenPublica;
    },
    appendInfo(formData) {
      if (this.$route.params.cepaBacteriaId) {
        formData.append("cepaId", this.$route.params.cepaBacteriaId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("nombre_forward", this.parametros.nombre_forward);
      formData.append("nombre_reversed", this.parametros.nombre_reversed);
      formData.append("secuen_forward", this.parametros.secuen_forward);
      formData.append("secuen_reversed", this.parametros.secuen_reversed);
      formData.append("produc_forward", this.parametros.produc_forward);
      formData.append("produc_reversed", this.parametros.produc_reversed);
      formData.append(
        "obser_secuenciacion",
        this.parametros.obser_secuenciacion === null
          ? ""
          : this.parametros.obser_secuenciacion
      );
      formData.append("imagen_pcr", this.parametros.imagen_pcr);
      formData.append("imagen_sec", this.parametros.imagen_sec);
    },
    obtenerImagenPcr(e) {
      let file = e.target.files[0];
      this.parametros.imagen_pcr = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError.pcr =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          if (this.required) {
            this.imagenMiniaturaPcr = "";
            this.parametros.imagen_pcr = "";
          } else {
            this.imagenMiniaturaPcr = this.info.img_pcrPublica;
            this.parametros.imagen_pcr = this.info.img_pcr;
          }
          this.$refs.inputImagenPcr.value = "";
        } else {
          this.imagenError.pcr = "";
          this.cargarImagen(file, "pcr");
        }
      }
    },
    obtenerImagenSec(e) {
      let file = e.target.files[0];
      this.parametros.imagen_sec = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError.sec =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          if (this.required) {
            this.imagenMiniaturaSec = "";
            this.parametros.imagen_sec = "";
          } else {
            this.imagenMiniaturaSec = this.info.img_secuenPublica;
            this.parametros.imagen_sec = this.info.img_secuen;
          }
          this.$refs.inputImagenSec.value = "";
        } else {
          this.imagenError.sec = "";
          this.cargarImagen(file, "sec");
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
          case "sec":
            this.imagenMiniaturaSec = e.target.result;
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
    mostraImagenSec() {
      return this.imagenMiniaturaSec;
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
  }
};
</script>