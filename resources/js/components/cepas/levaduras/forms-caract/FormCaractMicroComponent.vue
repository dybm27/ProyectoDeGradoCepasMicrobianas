<template>
  <div>
    <form @submit.prevent="evento" class="mt-4 mr-4 ml-4">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{tituloForm}}</h5>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Hifas</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="hifas1"
                          name="hifas"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.hifas"
                        />
                        <label class="custom-control-label" for="hifas1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="hifas2"
                          name="hifas"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.hifas"
                        />
                        <label class="custom-control-label" for="hifas2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Cápsula</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="capsula1"
                          name="capsula"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.capsula"
                        />
                        <label class="custom-control-label" for="capsula1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="capsula2"
                          name="capsula"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.capsula"
                        />
                        <label class="custom-control-label" for="capsula2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Balistoconidias</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="balistoconidias1"
                          name="balistoconidias"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.balistoconidias"
                        />
                        <label class="custom-control-label" for="balistoconidias1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="balistoconidias2"
                          name="balistoconidias"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.balistoconidias"
                        />
                        <label class="custom-control-label" for="balistoconidias2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Artroconidias</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="artroconidias1"
                          name="artroconidias"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.artroconidias"
                        />
                        <label class="custom-control-label" for="artroconidias1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="artroconidias2"
                          name="artroconidias"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.artroconidias"
                        />
                        <label class="custom-control-label" for="artroconidias2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Pseudohifas</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="pseudohifas1"
                          name="pseudohifas"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.pseudohifas"
                        />
                        <label class="custom-control-label" for="pseudohifas1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="pseudohifas2"
                          name="pseudohifas"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.pseudohifas"
                        />
                        <label class="custom-control-label" for="pseudohifas2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Blastoconidias</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="blastoconidias1"
                          name="blastoconidias"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.blastoconidias"
                        />
                        <label class="custom-control-label" for="blastoconidias1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="blastoconidias2"
                          name="blastoconidias"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.blastoconidias"
                        />
                        <label class="custom-control-label" for="blastoconidias2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Producción de Clamidosporas</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="produccion_clamidosporas1"
                          name="produccion_clamidosporas"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.produccion_clamidosporas"
                        />
                        <label
                          class="custom-control-label"
                          for="produccion_clamidosporas1"
                        >Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="produccion_clamidosporas2"
                          name="produccion_clamidosporas"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.produccion_clamidosporas"
                        />
                        <label class="custom-control-label" for="produccion_clamidosporas2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Inducción de Filamentización</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="induccion_filamentizacion1"
                          name="induccion_filamentizacion"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.induccion_filamentizacion"
                        />
                        <label
                          class="custom-control-label"
                          for="induccion_filamentizacion1"
                        >Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="induccion_filamentizacion2"
                          name="induccion_filamentizacion"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.induccion_filamentizacion"
                        />
                        <label
                          class="custom-control-label"
                          for="induccion_filamentizacion2"
                        >Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Producción de Tubo Germinativo</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="produccion_tubo_germinativo1"
                          name="produccion_tubo_germinativo"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.produccion_tubo_germinativo"
                        />
                        <label
                          class="custom-control-label"
                          for="produccion_tubo_germinativo1"
                        >Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="produccion_tubo_germinativo2"
                          name="produccion_tubo_germinativo"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.produccion_tubo_germinativo"
                        />
                        <label
                          class="custom-control-label"
                          for="produccion_tubo_germinativo2"
                        >Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Formación de Asco y Ascosporas</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="formacion_asco_y_ascosporas1"
                          name="formacion_asco_y_ascosporas"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.formacion_asco_y_ascosporas"
                        />
                        <label
                          class="custom-control-label"
                          for="formacion_asco_y_ascosporas1"
                        >Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="formacion_asco_y_ascosporas2"
                          name="formacion_asco_y_ascosporas"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.formacion_asco_y_ascosporas"
                        />
                        <label
                          class="custom-control-label"
                          for="formacion_asco_y_ascosporas2"
                        >Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="position-relative form-group">
                <label for="otras_caract">Otras Características</label>
                <textarea
                  name="text"
                  id="otras_caract"
                  class="form-control"
                  v-model="parametros.otras_caract"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    accept="image/jpeg"
                    multiple
                    :required="required"
                  />
                  <span v-if="erroresImagenes" class="text-danger">{{erroresImagenes}}</span>
                  <!--  <small
                    class="form-text text-muted"
                  >Debe tener un tamaño ''px ''px y un peso de ''kbs.</small>-->
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="descripcion_imagenes">Descripción Imágenes</label>
                <textarea
                  name="text"
                  id="descripcion_imagenes"
                  class="form-control"
                  v-model="parametros.descripcion_imagenes"
                ></textarea>
              </div>
              <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtn}}</button>
            </div>
          </div>
          <imagenes
            :required="required"
            :parametros="parametros"
            :tipoCepa="'levadura/caract-micro'"
            :imagenes="imagenes"
            :cepa="info"
            @accionImagen="accionImagen"
          ></imagenes>
        </div>
      </div>
    </form>
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
        hifas: "Presencia",
        capsula: "Presencia",
        pseudohifas: "Presencia",
        balistoconidias: "Presencia",
        produccion_tubo_germinativo: "Presencia",
        blastoconidias: "Presencia",
        produccion_clamidosporas: "Presencia",
        artroconidias: "Presencia",
        induccion_filamentizacion: "Presencia",
        formacion_asco_y_ascosporas: "Presencia",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        descripcion_imagenes: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      erroresImagenes: "",
      imagenes: []
    };
  },
  methods: {
    evento() {
      if (this.tituloForm === "Agregar Característica") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/levadura/caract-micro", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
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
          .put(`/cepas/levadura/caract-micro/${this.info.id}`, this.parametros)
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
    obtenerImagenes(e) {
      this.limpiar(0);
      let file = e.target.files[3];
      if (file) {
        this.erroresImagenes = "Solo puede subir max 3 imágenes.";
        this.limpiar(1);
      } else {
        let allowedExtensions = /(.jpg|.jpeg)$/i;
        let imagenes = [];
        for (let index = 0; index < 3; index++) {
          let imagen = e.target.files[index];
          if (imagen) {
            if (!allowedExtensions.exec(imagen.name) || imagen.size > 2000000) {
              this.limpiar(1);
              this.erroresImagenes =
                "Las imagenes deben ser en formato .jpeg/.jpg y menor a 2Mb.";
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
        this.cargarImagenes(imagenes);
      }
    },
    cargarImagenes(imagenes) {
      if (imagenes) {
        for (let index = 0; index < imagenes.length; index++) {
          let reader = new FileReader();
          reader.onload = e => {
            switch (index) {
              case 0:
                this.parametros.imagen1 = imagenes[index];
                this.pushImagen(1, e.target.result, true);
                break;
              case 1:
                this.parametros.imagen2 = imagenes[index];
                this.pushImagen(2, e.target.result, false);
                break;
              case 2:
                this.parametros.imagen3 = imagenes[index];
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
      this.parametros.hifas = this.info.hifas;
      this.parametros.capsula = this.info.capsula;
      this.parametros.pseudohifas = this.info.pseudohifas;
      this.parametros.balistoconidias = this.info.balistoconidias;
      this.parametros.produccion_tubo_germinativo = this.info.produccion_tubo_germinativo;
      this.parametros.blastoconidias = this.info.blastoconidias;
      this.parametros.produccion_clamidosporas = this.info.produccion_clamidosporas;
      this.parametros.artroconidias = this.info.artroconidias;
      this.parametros.induccion_filamentizacion = this.info.induccion_filamentizacion;
      this.parametros.formacion_asco_y_ascosporas = this.info.formacion_asco_y_ascosporas;
      this.parametros.otras_caract = this.info.otras_caract;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.parametros.descripcion_imagenes = this.info.descripcion;
      this.llenarArregloImagenes();
    },
    appendInfo(formData) {
      if (this.$route.params.cepaLevaduraId) {
        formData.append("cepaId", this.$route.params.cepaLevaduraId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("hifas", this.parametros.hifas);
      formData.append("capsula", this.parametros.capsula);
      formData.append("pseudohifas", this.parametros.pseudohifas);
      formData.append("balistoconidias", this.parametros.balistoconidias);
      formData.append(
        "produccion_tubo_germinativo",
        this.parametros.produccion_tubo_germinativo
      );
      formData.append("blastoconidias", this.parametros.blastoconidias);
      formData.append(
        "produccion_clamidosporas",
        this.parametros.produccion_clamidosporas
      );
      formData.append("artroconidias", this.parametros.artroconidias);
      formData.append(
        "induccion_filamentizacion",
        this.parametros.induccion_filamentizacion
      );
      formData.append(
        "formacion_asco_y_ascosporas",
        this.parametros.formacion_asco_y_ascosporas
      );
      formData.append(
        "otras_caract",
        this.parametros.otras_caract === null
          ? ""
          : this.parametros.otras_caract
      );
      formData.append("imagen1", this.parametros.imagen1);
      formData.append("imagen2", this.parametros.imagen2);
      formData.append("imagen3", this.parametros.imagen3);
      formData.append(
        "descripcion_imagenes",
        this.parametros.descripcion_imagenes === null
          ? ""
          : this.parametros.descripcion_imagenes
      );
    },
    accionImagen(data) {
      this.$emit("editar", data);
    }
  },
  computed: {
    required() {
      if (this.tituloForm === "Agregar Característica") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Característica") {
        return "btn-primary";
      } else {
        return "btn-warning";
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
  }
};
</script>