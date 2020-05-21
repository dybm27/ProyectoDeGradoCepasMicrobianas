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
                          name="secuencia_forward"
                          id="secuencia_forward"
                          placeholder="secuencia..."
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
                          placeholder="productoto..."
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
                          placeholder="secuencia..."
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
                          placeholder="productoto..."
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
                      <label for="imagen_blast" class>Imagen Blast</label>
                      <input
                        name="imagen_blast"
                        @change="obtenerImagenBlast"
                        id="imagen_blast"
                        accept="image/jpeg"
                        type="file"
                        class="form-control-file"
                        ref="inputImagenBlast"
                        :required="required"
                      />
                      <span v-if="imagenError.blast" class="text-danger">{{imagenError.blast}}</span>
                    </div>
                  </div>
                </div>
                <div class="form-row justify-content-md-center">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="condiciones_pcr" class>Condiciones PCR</label>
                      <input
                        name="condiciones_pcr"
                        id="condiciones_pcr"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.condiciones_pcr"
                        required
                      />
                      <span
                        v-if="errors.condiciones_pcr"
                        class="text-danger"
                      >{{errors.condiciones_pcr[0]}}</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="blast" class>Blast</label>
                      <input
                        name="blast"
                        id="blast"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.blast"
                        required
                      />
                      <span v-if="errors.blast" class="text-danger">{{errors.blast[0]}}</span>
                    </div>
                  </div>
                </div>
                <div class="form-row justify-content-md-center">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="analisis_filogenetico">Análisis Filogenético</label>
                      <textarea
                        name="analisis_filogenetico"
                        id="analisis_filogenetico"
                        class="form-control"
                        v-model="parametros.analisis_filogenetico"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
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
                <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtnComputed}}</button>
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
                  <div class="col-md-6">
                    <template v-if="mostraImagenBlast">
                      <h5 class="card-title">Imagen Blast</h5>
                      <img :src="mostraImagenBlast" class="d-block w-100" alt="Imagen PCR" />
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
    </form>
  </div>
</template>

<script>
import vuex, { mapGetters } from "vuex";

export default {
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
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
        blast: ""
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
          .post("/cepas/levadura/identi-molecu", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
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
        if (
          this.parametros.imagen_pcr === this.info.imagen_pcr &&
          this.parametros.imagen_blast === this.info.imagen_blast
        ) {
          axios
            .put(
              `/cepas/levadura/identi-molecu/${this.info.id}`,
              this.parametros
            )
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
        } else {
          let formData = new FormData();
          this.appendInfo(formData);
          formData.append("_method", "PUT");
          axios
            .post(`/cepas/levadura/identi-molecu/${this.info.id}`, formData, {
              headers: { "Content-Type": "multipart/form-data" }
            })
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
    appendInfo(formData) {
      if (this.$route.params.cepaLevaduraId) {
        formData.append("cepaId", this.$route.params.cepaLevaduraId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("nombre_forward", this.parametros.nombre_forward);
      formData.append("nombre_reversed", this.parametros.nombre_reversed);
      formData.append("secuencia_forward", this.parametros.secuencia_forward);
      formData.append("secuencia_reversed", this.parametros.secuencia_reversed);
      formData.append("producto_forward", this.parametros.producto_forward);
      formData.append("producto_reversed", this.parametros.producto_reversed);
      formData.append("condiciones_pcr", this.parametros.condiciones_pcr);
      formData.append("blast", this.parametros.blast);
      formData.append(
        "analisis_filogenetico",
        this.parametros.analisis_filogenetico
      );
      formData.append(
        "observaciones",
        this.parametros.observaciones === null
          ? ""
          : this.parametros.observaciones
      );
      formData.append("imagen_pcr", this.parametros.imagen_pcr);
      formData.append("imagen_blast", this.parametros.imagen_blast);
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
            this.imagenMiniaturaPcr = this.info.imagen_pcrPublica;
            this.parametros.imagen_pcr = this.info.imagen_pcr;
          }
          this.$refs.inputImagenPcr.value = "";
        } else {
          this.imagenError.pcr = "";
          this.cargarImagen(file, "pcr");
        }
      }
    },
    obtenerImagenBlast(e) {
      let file = e.target.files[0];
      this.parametros.imagen_blast = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError.blast =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          if (this.required) {
            this.imagenMiniaturaBlast = "";
            this.parametros.imagen_blast = "";
          } else {
            this.imagenMiniaturaBlast = this.info.imagen_blastPublica;
            this.parametros.imagen_blast = this.info.imagen_blast;
          }
          this.$refs.inputImagenBlast.value = "";
        } else {
          this.imagenError.blast = "";
          this.cargarImagen(file, "blast");
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

<style scoped>
</style>