<template>
  <div>
    <form @submit.prevent="evento">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-sm-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">{{titulo}}</h5>
                <div class="position-relative form-group">
                  <label for="medio" class>Medio</label>
                  <input
                    name="medio"
                    id="medio"
                    placeholder="Medio..."
                    type="text"
                    class="form-control"
                    v-model="parametros.medio"
                    required
                  />
                  <span v-if="errors.medio" class="text-danger">{{errors.medio[0]}}</span>
                </div>
                <div v-if="getInfoCaractMacroBacterias">
                  <div class="position-relative form-group">
                    <label for="forma" class>Forma</label>
                    <select
                      name="select"
                      id="forma"
                      class="form-control"
                      v-model="parametros.forma"
                    >
                      <option
                        v-for="(f,index) in getInfoCaractMacroBacterias.formas_macros"
                        :key="index"
                        :value="f.id"
                      >{{f.nombre}}</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="borde" class>Borde</label>
                    <select
                      name="select"
                      id="borde"
                      class="form-control"
                      v-model="parametros.borde"
                    >
                      <option
                        v-for="(b,index) in getInfoCaractMacroBacterias.bordes"
                        :key="index"
                        :value="b.id"
                      >{{b.nombre}}</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="consistencia" class>Consistencia</label>
                    <select
                      name="select"
                      id="consistencia"
                      class="form-control"
                      v-model="parametros.consistencia"
                    >
                      <option
                        v-for="(c,index) in getInfoCaractMacroBacterias.consistencias"
                        :key="index"
                        :value="c.id"
                      >{{c.nombre}}</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="detalle_optico" class>Detalle Optico</label>
                    <select
                      name="select"
                      id="detalle_optico"
                      class="form-control"
                      v-model="parametros.detalle_optico"
                    >
                      <option
                        v-for="(d,index) in getInfoCaractMacroBacterias.detalle_opticos"
                        :key="index"
                        :value="d.id"
                      >{{d.nombre}}</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="elevacion" class>Elevacion</label>
                    <select
                      name="select"
                      id="elevacion"
                      class="form-control"
                      v-model="parametros.elevacion"
                    >
                      <option
                        v-for="(e,index) in getInfoCaractMacroBacterias.elevacions"
                        :key="index"
                        :value="e.id"
                      >{{e.nombre}}</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="superficie" class>Superficie</label>
                    <select
                      name="select"
                      id="superficie"
                      class="form-control"
                      v-model="parametros.superficie"
                    >
                      <option
                        v-for="(s,index) in getInfoCaractMacroBacterias.superficies"
                        :key="index"
                        :value="s.id"
                      >{{s.nombre}}</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="color" class>Color</label>
                    <input
                      name="color"
                      id="color"
                      placeholder="Color..."
                      type="text"
                      class="form-control"
                      v-model="parametros.color"
                      required
                    />
                    <span v-if="errors.color" class="text-danger">{{errors.color[0]}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-sm-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <div class="position-relative form-group">
                  <label>Tamaño</label>
                  <div>
                    <div class="custom-radio custom-control custom-control-inline">
                      <input
                        type="radio"
                        :id="radioId1"
                        name="tamaño"
                        class="custom-control-input"
                        value="grande"
                        v-model="parametros.tamaño"
                      />
                      <label class="custom-control-label" :for="radioId1">Grande</label>
                    </div>
                    <div class="custom-radio custom-control custom-control-inline">
                      <input
                        type="radio"
                        :id="radioId2"
                        name="tamaño"
                        class="custom-control-input"
                        value="mediano"
                        v-model="parametros.tamaño"
                      />
                      <label class="custom-control-label" :for="radioId2">Mediano</label>
                    </div>
                    <div class="custom-radio custom-control custom-control-inline">
                      <input
                        type="radio"
                        :id="radioId3"
                        name="tamaño"
                        class="custom-control-input"
                        value="pequeño"
                        v-model="parametros.tamaño"
                      />
                      <label class="custom-control-label" :for="radioId3">Pequeño</label>
                    </div>
                  </div>
                </div>
                <div class="position-relative form-group">
                  <label for="otras_caracteristicas">Otras Caracteristicas</label>
                  <textarea
                    name="text"
                    id="otras_caracteristicas"
                    class="form-control"
                    v-model="parametros.otras_caracteristicas"
                  ></textarea>
                </div>
                <div class="position-relative form-group">
                  <label for="imagen" class>Imagen</label>
                  <input
                    name="imagen"
                    @change="obtenerImagen"
                    id="imagen"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    :required="required"
                  />
                  <span v-if="errors.imagen" class="text-danger">{{errors.imagen}}</span>
                  <!--  <small
                    class="form-text text-muted"
                  >Debe tener un tamaño ''px ''px y un peso de ''kbs.</small>-->
                </div>
                <figure class="text-center">
                  <img
                    width="290"
                    height="290"
                    :src="mostraImagen"
                    alt="Imagen Caracteristica Macroscopica"
                  />
                </figure>
                <div class="position-relative form-group">
                  <label for="imagen_descripcion">Descripcion de la Imagen</label>
                  <textarea
                    name="text"
                    id="imagen_descripcion"
                    class="form-control"
                    v-model="parametros.imagen_descripcion"
                  ></textarea>
                </div>
                <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtnComputed}}</button>
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
  props: ["info", "radioId1", "radioId2", "radioId3", "modificarInfo"],
  data() {
    return {
      parametros: {
        medio: "",
        forma: 1,
        borde: 1,
        elevacion: 1,
        consistencia: 1,
        color: "",
        detalle_optico: 1,
        tamaño: "grande",
        superficie: 1,
        otras_caracteristicas: "",
        imagen: "",
        imagen_descripcion: ""
      },
      tituloForm: "",
      imageMiniatura: "",
      nomBtn: "",
      errors: []
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
      if (this.tituloForm === "Agregar Medio") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/bacteria/caract-macro", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Medio";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Mensaje de ejecución",
              "Caracteristica Macroscópica agregada con exito!!",
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
        if (this.parametros.imagen === this.info.imagen) {
          axios
            .put(
              `/cepas/bacteria/caract-macro/${this.info.id}`,
              this.parametros
            )
            .then(res => {
              this.errors = [];
              this.$refs.inputImagen.value = "";
              this.$emit("editar", res.data);
              this.toastr(
                "Mensaje de ejecución",
                "Caracteristica Macroscópica editada con exito!!",
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
            .post(`/cepas/bacteria/caract-macro/${this.info.id}`, formData, {
              headers: { "Content-Type": "multipart/form-data" }
            })
            .then(res => {
              this.errors = [];
              this.$refs.inputImagen.value = "";
              this.$emit("editar", res.data);
              this.toastr(
                "Mensaje de ejecución",
                "Caracteristica Macroscópica editada con exito!!",
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
      this.parametros.medio = this.info.medio;
      this.parametros.forma = this.info.forma_id;
      this.parametros.borde = this.info.borde_id;
      this.parametros.elevacion = this.info.elevacion_id;
      this.parametros.consistencia = this.info.consistencia_id;
      this.parametros.color = this.info.color;
      this.parametros.detalle_optico = this.info.detalleoptico_id;
      this.parametros.tamaño = this.info.tamano;
      this.parametros.superficie = this.info.superficie_id;
      this.parametros.otras_caracteristicas = this.info.otras_caract;
      this.parametros.imagen = this.info.imagen;
      this.imageMiniatura = this.info.imagenPublica;
      this.parametros.imagen_descripcion = this.info.descripcion;
    },
    appendInfo(formData) {
      formData.append("cepaId", this.$route.params.cepaBacteriaId);
      formData.append("medio", this.parametros.medio);
      formData.append("forma", this.parametros.forma);
      formData.append("borde", this.parametros.borde);
      formData.append("elevacion", this.parametros.elevacion);
      formData.append("consistencia", this.parametros.consistencia);
      formData.append("color", this.parametros.color);
      formData.append("detalle_optico", this.parametros.detalle_optico);
      formData.append("tamaño", this.parametros.tamaño);
      formData.append("superficie", this.parametros.superficie);
      formData.append("otras_caract", this.parametros.otras_caracteristicas);
      formData.append("imagen", this.parametros.imagen);
      formData.append("imagen_descripcion", this.parametros.imagen_descripcion);
    },
    obtenerImagen(e) {
      let file = e.target.files[0];
      this.parametros.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.errors.imagen =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          this.imageMiniatura = "";
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = "";
        } else {
          this.errors.imagen = "";
          this.cargarImagen(file);
        }
      }
    },
    cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.imageMiniatura = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  },
  computed: {
    ...vuex.mapGetters(["getInfoCaractMacroBacterias"]),
    mostraImagen() {
      return this.imageMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Medio") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Medio") {
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
    if (this.info === undefined) {
      this.tituloForm = "Agregar Medio";
      this.nomBtn = "Agregar";
    } else {
      this.llenarInfo();
      this.tituloForm = "Editar Medio";
      this.nomBtn = "Editar";
    }
  }
};
</script>

<style scoped>
</style>