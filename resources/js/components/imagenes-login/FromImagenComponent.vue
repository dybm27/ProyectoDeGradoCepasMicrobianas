<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Editar Imagen</h5>
            <form @submit.prevent="evento">
              <template v-if="errors!=''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="titulo" class>Título</label>
                <input
                  name="titulo"
                  id="titulo"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.titulo.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.titulo.$model"
                />
                <em
                  v-if="$v.parametros.titulo.$error&&!$v.parametros.titulo.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="imagen" class>Imagen</label>
                <input
                  name="imagen"
                  @change="obtenerImagen"
                  id="imagen"
                  accept="image/jpeg"
                  type="file"
                  :class="['form-control-file', imagenError? 'error-input-select':'']"
                  ref="inputImagen"
                />
                <em v-if="imagenError" class="text-error-input">{{imagenError}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="descripcion">Descripción</label>
                <textarea
                  name="text"
                  id="descripcion"
                  :class="['form-control', $v.parametros.descripcion.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.descripcion.$model"
                ></textarea>
                <em
                  v-if="$v.parametros.descripcion.$error&&!$v.parametros.descripcion.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
              </div>
              <div class="custom-checkbox custom-control mb-2">
                <input
                  type="checkbox"
                  id="mostrar"
                  :class="['custom-control-input',$v.parametros.mostrar.$error? 'is-invalid':'']"
                  v-model.trim="$v.parametros.mostrar.$model"
                />
                <label class="custom-control-label" for="mostrar">Desea Mostrar la imagen?</label>
              </div>
              <em
                v-if="$v.parametros.mostrar.$error&&!$v.parametros.mostrar.validarMostrar"
                class="text-error-select"
              >{{mensajes.validarMostrar}}</em>
              <button class="mb-2 mr-2 btn btn-block btn-warning" :disabled="bloquearBtn">Editar</button>
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
                    <b class="text-success">SIN IMAGEN</b>
                  </span>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../mixins/toastr";
import { required } from "vuelidate/lib/validators";
export default {
  props: ["idImagen"],
  data() {
    return {
      parametros: { imagen: "", titulo: "", descripcion: "", mostrar: false },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      info: "",
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido.",
        validarMostrar: "Debe haber al menos 1 imagen para mostrar.",
      },
    };
  },
  validations: {
    parametros: {
      titulo: { required },
      descripcion: { required },
      mostrar: {
        validarMostrar(value) {
          if (value) return true;
          if (this.getImagenLoginByMostrar.length == 1) {
            if (this.getImagenLoginByMostrar[0].id == this.info.id)
              return false;
          }
          return true;
        },
      },
    },
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("imagenes_login", ["accionImagenLogin"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.parametros.imagen === this.info.imagen) {
          axios
            .put(`/login/imagen/${this.info.id}`, this.parametros)
            .then((res) => {
              this.bloquearBtn = false;
              if (res.data.mostrar) {
                res.data.mostrar = 1;
              } else {
                res.data.mostrar = 0;
              }
              this.accionImagenLogin({ tipo: "editar", data: res.data });
              this.$emit("mostrarFrom");
              this.toastr(
                "Editar Imagen",
                "Imagen editado con exito!!",
                "success"
              );
            })
            .catch((error) => {
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        } else {
          let form = new FormData();
          form.append("imagen", this.parametros.imagen);
          form.append("descripcion", this.parametros.descripcion);
          form.append("titulo", this.parametros.titulo);
          if (this.parametros.mostrar) {
            form.append("mostrar", 1);
          } else {
            form.append("mostrar", 0);
          }
          form.append("_method", "PUT");
          axios
            .post(`/login/imagen/${this.info.id}`, form, {
              headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtn = false;
                this.toastr(
                  "Editar Imagen",
                  "Imagen editada con exito!!",
                  "success"
                );
                this.accionImagenLogin({ tipo: "editar", data: res.data });
                this.$emit("mostrarFrom");
              }
            })
            .catch((error) => {
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        }
      } else {
        this.bloquearBtn = false;
        this.toastr(
          "Error!!",
          "Favor llenar correctamente los campos",
          "error"
        );
      }
    },
    llenarInfo() {
      this.parametros.titulo = this.info.titulo;
      this.parametros.descripcion = this.info.descripcion;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
      if (this.info.mostrar == 1) {
        this.parametros.mostrar = true;
      }
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
      reader.onload = (e) => {
        if (e.path[0].height > e.path[0].width) {
          this.imagenMiniatura = reader.src;
        } else {
          this.imagenError = "La imagen debe ser en forma vertical.";
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
    },
  },
  computed: {
    ...vuex.mapGetters("imagenes_login", [
      "getImagenLoginById",
      "getImagenLoginByMostrar",
    ]),
    ...vuex.mapState(["auth"]),
    mostraImagen() {
      return this.imagenMiniatura;
    },
  },
  mounted() {
    this.info = this.getImagenLoginById(this.idImagen);
    this.llenarInfo();
  },
};
</script>