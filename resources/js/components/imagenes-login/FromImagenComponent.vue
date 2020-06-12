<template>
  <div class="container">
    <template v-if="validarForm">
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{titulo}}</h5>
              <form @submit.prevent="evento">
                <div class="position-relative form-group">
                  <label for="titulo" class>Título</label>
                  <input
                    name="titulo"
                    id="titulo"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.titulo"
                    required
                  />
                  <em v-if="errors.titulo" class="text-danger">{{errors.titulo[0]}}</em>
                </div>
                <div class="position-relative form-group">
                  <label for="imagen" class>Imagen</label>
                  <input
                    name="imagen"
                    @change="obtenerImagen"
                    id="imagen"
                    accept="image/jpeg"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    :required="required"
                  />
                  <em v-if="imagenError" class="text-danger">{{imagenError}}</em>
                </div>
                <div class="position-relative form-group">
                  <label for="descripcion">Descripción</label>
                  <textarea
                    name="text"
                    id="descripcion"
                    class="form-control"
                    v-model="parametros.descripcion"
                    required
                  ></textarea>
                </div>
                <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtnComputed}}</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Imagen</h5>
              <template v-if="mostraImagen">
                <img class="d-block w-100 p-3" :src="mostraImagen" />
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
      </div>
    </template>
    <template v-else>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center mt-5">
            <div class="loader mt-5">
              <div class="ball-spin-fade-loader mt-5">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  created() {
    this.$emit("rutaHijo", window.location.pathname);
    if (this.getImagenesLogin.length === 3 && !this.$route.params.idImagen) {
      this.$router.push({ name: "imagenes-ver" });
    }
  },
  data() {
    return {
      parametros: { imagen: "", titulo: "", descripcion: "" },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      info: ""
    };
  },
  methods: {
    ...vuex.mapActions("imagenes_login", ["accionImagenLogin"]),
    cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen = this.info.imagen;
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    evento() {
      if (this.tituloForm === "Agregar Imagen") {
        let form = new FormData();
        form.append("imagen", this.parametros.imagen);
        form.append("descripcion", this.parametros.descripcion);
        form.append("titulo", this.parametros.titulo);
        axios
          .post("/login/imagen", form, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Imagen";
            this.nomBtn = "Editar";
            this.accionImagenLogin({ tipo: "agregar", data: res.data });
            this.toastr(
              "Agregar Imagen",
              "Imagen agregado con exito!!",
              "success"
            );
            this.$router.push({ name: "imagenes-ver" });
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        if (this.parametros.imagen === this.info.imagen) {
          axios
            .put(`/login/imagen/${this.info.id}`, this.parametros)
            .then(res => {
              this.errors = [];
              this.$refs.inputImagen.value = "";
              this.accionImagenLogin({ tipo: "editar", data: res.data });
              this.toastr(
                "Editar Imagen",
                "Imagen editado con exito!!",
                "success"
              );
              this.$router.push({ name: "imagenes-ver" });
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
          let form = new FormData();
          form.append("imagen", this.parametros.imagen);
          form.append("descripcion", this.parametros.descripcion);
          form.append("titulo", this.parametros.titulo);
          form.append("_method", "PUT");
          axios
            .post(`/login/imagen/${this.info.id}`, form, {
              headers: { "Content-Type": "multipart/form-data" }
            })
            .then(res => {
              this.errors = [];
              this.$refs.inputImagen.value = "";
              this.accionImagenLogin({ tipo: "editar", data: res.data });
              this.toastr(
                "Editar Imagen",
                "Imagen editado con exito!!",
                "success"
              );
              this.$router.push({ name: "imagenes-ver" });
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
      this.parametros.titulo = this.info.titulo;
      this.parametros.descripcion = this.info.descripcion;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    obtenerImagen(e) {
      let file = e.target.files[0];
      this.parametros.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";
          if (this.info) {
            this.imagenMiniatura = this.info.imagenPublica;
            this.parametros.imagen = this.info.imagen;
          } else {
            this.imagenMiniatura = "";
            this.parametros.imagen = "";
          }
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        if (this.info) {
          this.imagenMiniatura = this.info.imagenPublica;
          this.parametros.imagen = this.info.imagen;
        } else {
          this.parametros.imagen = "";
          this.imagenMiniatura = "";
        }
      }
    },
    cargarImagen(file) {
      let reader = new Image();
      reader.onload = e => {
        if (e.path[0].height > e.path[0].width) {
          this.imagenMiniatura = reader.src;
        } else {
          this.imagenError = "La altura de la imagen debe ser mayor al ancho.";
          this.$refs.inputImagen.value = "";
          if (this.info) {
            this.imagenMiniatura = this.info.imagenPublica;
            this.parametros.imagen = this.info.imagen;
          } else {
            this.imagenMiniatura = "";
            this.parametros.imagen = "";
          }
        }
      };
      reader.src = URL.createObjectURL(file);
    }
  },
  computed: {
    ...vuex.mapGetters("imagenes_login", [
      "getImagenLoginById",
      "getImagenesLogin"
    ]),
    mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Imagen") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Imagen") {
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
    validarForm() {
      if (!this.$route.params.idImagen) {
        return true;
      } else if (this.parametros.imagen) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    if (!this.$route.params.idImagen) {
      this.tituloForm = "Agregar Imagen";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getImagenLoginById(this.$route.params.idImagen);
      if (this.info) {
        this.llenarInfo();
      }
      this.tituloForm = "Editar Imagen";
      this.nomBtn = "Editar";
    }
  },
  watch: {
    getImagenesLogin() {
      if (this.getImagenesLogin) {
        if (
          this.getImagenesLogin.length === 3 &&
          !this.$route.params.idImagen
        ) {
          this.$router.push({ name: "imagenes-ver" });
        } else {
          if (this.$route.params.idImagen) {
            this.info = this.getImagenLoginById(this.$route.params.idImagen);
            this.llenarInfo();
          }
        }
      }
    }
  }
};
</script>