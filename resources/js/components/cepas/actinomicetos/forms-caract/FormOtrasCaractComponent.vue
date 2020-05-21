<template>
  <div>
    <form @submit.prevent="evento" class="mt-4 mr-4 ml-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">{{tituloForm}}</h5>
                <div class="position-relative form-group">
                  <label for="fijacion_nitrogeno" class>Fijación Nitrogeno</label>
                  <input
                    name="fijacion_nitrogeno"
                    id="fijacion_nitrogeno"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.fijacion_nitrogeno"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="produccion_aia" class>Producción AIA</label>
                  <input
                    name="produccion_aia"
                    id="produccion_aia"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.produccion_aia"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="giberelinas" class>Giberelinas</label>
                  <input
                    name="giberelinas"
                    id="giberelinas"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.giberelinas"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="produccion_sideroforos" class>Producción Sideróforos</label>
                  <input
                    name="produccion_sideroforos"
                    id="produccion_sideroforos"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.produccion_sideroforos"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="solubili_fosforo" class>Solubilización de Fósforo</label>
                  <input
                    name="solubili_fosforo"
                    id="solubili_fosforo"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.solubili_fosforo"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="produccion_pha" class>Producción PHA</label>
                  <input
                    name="produccion_pha"
                    id="produccion_pha"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.produccion_pha"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="alta_produc_antibioticos" class>Alta Producción De Antibióticos</label>
                  <input
                    name="alta_produc_antibioticos"
                    id="alta_produc_antibioticos"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.alta_produc_antibioticos"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="activi_enzimaticas" class>Actividades Enzimáticas</label>
                  <input
                    name="activi_enzimaticas"
                    id="activi_enzimaticas"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.activi_enzimaticas"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="antagonismos" class>Antagonismos</label>
                  <input
                    name="antagonismos"
                    id="antagonismos"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.antagonismos"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <div class="position-relative form-group">
                  <label for="otras_caract">Otras Características</label>
                  <textarea
                    name="otras_caract"
                    id="otras_caract"
                    class="form-control"
                    v-model="parametros.otras_caract"
                  ></textarea>
                </div>
                <template v-if="required">
                  <div class="position-relative form-group">
                    <label for="imagen" class>Imágenes</label>
                    <input
                      name="imagen"
                      @change="obtenerImagenes"
                      id="imagen"
                      type="file"
                      accept="image/jpeg"
                      class="form-control-file"
                      ref="inputImagen"
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
              :parametros="this.parametros"
              :tipoCepa="'actinomiceto/otras-caract'"
              :imagenes="this.imagenes"
              :cepa="this.info"
              @accionImagen="accionImagen"
            ></imagenes>
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
        fijacion_nitrogeno: "",
        produccion_aia: "",
        giberelinas: "",
        solubili_fosforo: "",
        produccion_sideroforos: "",
        antagonismos: "",
        activi_enzimaticas: "",
        alta_produc_antibioticos: "",
        produccion_pha: "",
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
      if (this.tituloForm === "Agregar Características") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/actinomiceto/otras-caract", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Características";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Otras Característica",
              "Características agregadas con exito!!",
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
            `/cepas/actinomiceto/otras-caract/${this.info.id}`,
            this.parametros
          )
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Otras Característica",
              "Características editadas con exito!!",
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
      this.parametros.fijacion_nitrogeno = this.info.fijacion_nitrogeno;
      this.parametros.produccion_aia = this.info.produccion_aia;
      this.parametros.giberelinas = this.info.giberelinas;
      this.parametros.solubili_fosforo = this.info.solubili_fosforo;
      this.parametros.produccion_sideroforos = this.info.produccion_sideroforos;
      this.parametros.antagonismos = this.info.antagonismos;
      this.parametros.activi_enzimaticas = this.info.activi_enzimaticas;
      this.parametros.alta_produc_antibioticos = this.info.alta_produc_antibioticos;
      this.parametros.produccion_pha = this.info.produccion_pha;
      this.parametros.otras_caract = this.info.otras_caract;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.parametros.descripcion_imagenes = this.info.descripcion;
      this.llenarArregloImagenes();
    },
    appendInfo(formData) {
      if (this.$route.params.cepaActinomicetoId) {
        formData.append("cepaId", this.$route.params.cepaActinomicetoId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("fijacion_nitrogeno", this.parametros.fijacion_nitrogeno);
      formData.append("produccion_aia", this.parametros.produccion_aia);
      formData.append("giberelinas", this.parametros.giberelinas);
      formData.append("solubili_fosforo", this.parametros.solubili_fosforo);
      formData.append(
        "produccion_sideroforos",
        this.parametros.produccion_sideroforos
      );
      formData.append("antagonismos", this.parametros.antagonismos);
      formData.append("activi_enzimaticas", this.parametros.activi_enzimaticas);
      formData.append(
        "alta_produc_antibioticos",
        this.parametros.alta_produc_antibioticos
      );
      formData.append("produccion_pha", this.parametros.produccion_pha);
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
      if (this.tituloForm === "Agregar Características") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Características") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    }
  },
  mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Características";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Características";
      this.nomBtn = "Agregar";
    }
  }
};
</script>
