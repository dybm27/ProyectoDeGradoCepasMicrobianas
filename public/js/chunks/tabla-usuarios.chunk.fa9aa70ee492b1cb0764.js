(function(d){	const l = d['es'] = d['es'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The URL must not be empty.":"La URL no debe estar vacía","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabla-usuarios"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! croppie */ "./node_modules/croppie/croppie.js");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id", "imagen", "mostrarBtnCroppie", "zoom", "editar", "enableZoom", "boundaryHeigth", "viewportWidth"],
  data: function data() {
    return {
      croppie: null,
      btnAprobar: true
    };
  },
  mounted: function mounted() {
    this.crearCroppie();
  },
  methods: {
    crearCroppie: function crearCroppie() {
      var el = document.getElementById(this.id);
      this.croppie = new croppie__WEBPACK_IMPORTED_MODULE_0___default.a(el, {
        viewport: {
          width: this.viewportWidth,
          height: 200
        },
        boundary: {
          height: this.boundaryHeigth
        },
        enableZoom: this.enableZoom
      });
      this.croppie.bind({
        url: this.imagen,
        zoom: this.zoom
      });
    },
    resultado: function resultado() {
      this.croppie.result({
        type: "base64",
        size: "viewport",
        format: "jpeg"
      }).then(function (res) {
        document.getElementById("results").innerHTML = '<canvas id="myCanvas" width="200" height="200" style="border:1px solid #d3d3d3;"><imd id="scream" src="' + result.src + '" />';
        var gh = result.src;
        var s = document.getElementById("myCanvas");
        var cts = s.getContext("2d");
        var img = document.getElementById("scream");
        cts.drawImage(img, 0, 0, 200, 200);
        cts.fillStyle = "#02D2C2";
        cts.globalCompositeOperation = "destination-over";
        cts.beginPath();
        cts.fillRect(0, 0, 200, 200);
        cts.closePath();
        cts.fill();
        var a = document.createElement("a");
        a.href = document.getElementById("myCanvas").toDataURL("image/jpeg");
        a.download = filename + ".jpg";
        a.click();
      });
    },
    cancelar: function cancelar() {
      this.btnAprobar = true;
      this.$emit("cambiarValorImagen", "");
    }
  },
  watch: {
    imagen: function imagen() {
      if (this.imagen) {
        this.btnAprobar = true;
        this.croppie.destroy();
        this.crearCroppie();
      }
    }
  },
  computed: {
    mostrarMensaje: function mostrarMensaje() {
      if (this.btnAprobar && !this.editar) {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websocketsSinCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/websocketsSinCheck */ "./resources/js/mixins/websocketsSinCheck.js");
/* harmony import */ var _TablaComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaComponent */ "./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue");
/* harmony import */ var _FormComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormComponent */ "./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Form: _FormComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tabla: _TablaComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      formulario: false,
      id: 0
    };
  },
  mixins: [Object(_mixins_websocketsSinCheck__WEBPACK_IMPORTED_MODULE_0__["default"])("Usuario", "usuarios")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_3__["default"].mapGetters(["getPermisoByNombre"])),
  methods: {
    abrirFormulario: function abrirFormulario(id) {
      if (id != 0) {
        this.id = id;
      } else {
        this.id = 0;
      }

      this.formulario = !this.formulario;
    },
    cerrarFormulario: function cerrarFormulario() {
      window.Echo["private"]("desbloquearBtnsUsuario").whisper("desbloquearBtnsUsuario", {
        id: this.id
      });
      this.$events.fire("eliminarMiBloqueoUsuario", {
        id: this.id
      });
      this.id = 0;
      this.formulario = !this.formulario;
    },
    cambiarVariableFormulario: function cambiarVariableFormulario() {
      this.formulario = !this.formulario;
    },
    cambiarTipo: function cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  },
  created: function created() {
    var _this = this;

    this.$emit("rutaHijo", window.location.pathname);
    this.$events.$on("abrirFormularioUsuario", function (e) {
      return _this.abrirFormulario(e);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$events.$off("abrirFormularioUsuario");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _CroppieComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CroppieComponent */ "./resources/js/components/CroppieComponent.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Croppie: _CroppieComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ["idUsuario"],
  data: function data() {
    return {
      showPass: false,
      showPass1: false,
      info: "",
      parametros: {
        nombre: "",
        rol: 2,
        email: "",
        pass: "",
        pass1: "",
        imagen: ""
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      mensajeErrorEmail: "",
      mensajeContraseña: "",
      mensajeContraseña1: "",
      mensajeNombre: "",
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido.",
        email: "El campo debe ser un email valido.",
        sameAs: "Las contraseñas no coinciden",
        alpha: "El campo solo puede contener letras.",
        minLength: "La contraseña debe tener mínimo 8 carácteres.",
        maxLength: "La contraseña debe tener máximo 15 carácteres.",
        unique: "Ya existe un registro con ese email"
      }
    };
  },
  validations: function validations() {
    if (this.validarTipoForm) {
      return {
        parametros: {
          nombre: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
            alpha: function alpha(value) {
              if (value == "") return true;

              if (this.validarNombre) {
                return false;
              }

              return true;
            }
          },
          rol: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
          },
          email: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
            email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["email"],
            unique: function unique(value) {
              if (value == "") return true;

              if (this.validarEmail) {
                return false;
              }

              return true;
            }
          },
          pass: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
            minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(8),
            maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(15)
          },
          pass1: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
            sameAs: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["sameAs"])("pass")
          },
          imagen: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
          }
        }
      };
    } else {
      return {
        parametros: {
          nombre: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
            alpha: function alpha(value) {
              if (value == "") return true;

              if (this.validarNombre) {
                return false;
              }

              return true;
            }
          },
          rol: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
          },
          email: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
            email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["email"],
            unique: function unique(value) {
              if (value == "") return true;

              if (this.validarEmail) {
                return false;
              }

              return true;
            }
          },
          pass: {
            minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(8),
            maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(15)
          },
          pass1: {
            sameAs: function sameAs(value) {
              if (value == "" && !this.parametros.pass) return true;
              if (this.parametros.pass != this.parametros.pass1) return false;
              return true;
            }
          },
          imagen: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
          }
        }
      };
    }
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("usuarios", ["accionUsuario"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions(["accionModificarAuth"])), {}, {
    cambiarValorImagen: function cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.validarTipoForm) {
          this.parametros.imagen = this.info.avatar;
          this.imagenMiniatura = this.info.avatarPublico;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;
      this.$v.parametros.$touch();

      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Usuario") {
          axios.post("/usuario/agregar", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;

              _this.accionUsuario({
                tipo: "agregar",
                data: res.data
              });

              _this.toastr("Agregar Usuario", "Usuario agregado con exito!!", "success");

              _this.$emit("cambiarVariableFormulario");
            }
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        } else {
          axios.put("/usuario/editar/".concat(this.info.id), this.parametros).then(function (res) {
            _this.bloquearBtn = false;

            if (_this.auth.id === res.data.id) {
              _this.accionModificarAuth({
                data: res.data
              });
            }

            if (res.data != "negativo") {
              _this.accionUsuario({
                tipo: "editar",
                data: res.data
              });

              _this.toastr("Editar Usuario", "Usuario editado con exito!!", "success");

              window.Echo["private"]("desbloquearBtnsUsuario").whisper("desbloquearBtnsUsuario", {
                id: res.data.id
              });

              _this.$events.fire("eliminarMiBloqueoUsuario", {
                id: res.data.id
              });

              _this.$emit("cambiarVariableFormulario");
            } else {
              _this.toastr("Precaución", "El Usuario se encuentra Logueado y no es posible Editarlo!!", "warning");

              _this.bloquearBtn = false;
            }
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        }
      } else {
        this.bloquearBtn = false;
        this.toastr("Error!!", "Favor llenar correctamente los campos", "error");
      }
    },
    llenarInfo: function llenarInfo() {
      this.parametros.nombre = this.info.name;
      this.parametros.rol = this.info.rol_id;
      this.parametros.email = this.info.email;
      this.parametros.pass = this.info.password;
      this.parametros.imagen = this.info.avatar;
      this.imagenMiniatura = this.info.avatarPublico;
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .jpg .png y menor a 2Mb.";
          this.imagenMiniatura = this.info.avatarPublico;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.avatar;
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        this.imagenMiniatura = this.info.avatarPublico;
        this.$refs.inputImagen.value = "";
        this.parametros.imagen = this.info.avatar;
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this2 = this;

      var reader = new Image();

      reader.onload = function (e) {
        _this2.imagenMiniatura = reader.src;
      };

      reader.src = URL.createObjectURL(file);
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState("usuarios", ["usuarios"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("usuarios", ["getRoles", "getUsuarioById", "getUsuarioByEmail"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState(["auth"])), {}, {
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Usuario") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm: function validarTipoForm() {
      if (this.tituloForm === "Agregar Usuario") {
        return true;
      } else {
        return false;
      }
    },
    titulo: function titulo() {
      return this.tituloForm;
    },
    nomBtnComputed: function nomBtnComputed() {
      return this.nomBtn;
    },
    validarEmail: function validarEmail() {
      if (this.getUsuarioByEmail(this.parametros.email)) {
        if (this.getUsuarioByEmail(this.parametros.email).id != this.info.id) {
          this.mensajeErrorEmail = "El correo electrónico ya Existe";
          return true;
        }
      }
    },
    validarNombre: function validarNombre() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      var letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;

      if (!letters.test(this.parametros.nombre)) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCroppie: function mostrarBtnCroppie() {
      if (this.imagenMiniatura != this.info.avatarPublico) {
        return true;
      } else {
        return false;
      }
    }
  }),
  created: function created() {
    if (this.idUsuario === 0) {
      this.tituloForm = "Agregar Usuario";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getUsuarioById(this.idUsuario);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Usuario";
      this.nomBtn = "Editar";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _columnas_usuarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnas-usuarios */ "./resources/js/components/gestionar_usuarios/usuarios/columnas-usuarios.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/websocketsTabla */ "./resources/js/mixins/websocketsTabla.js");
/* harmony import */ var _vuetable_MyVuetableComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vuetable/MyVuetableComponent */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas_usuarios__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "name",
        direction: "asc"
      }],
      id: "",
      bloquearBtnModal: false
    };
  },
  computed: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapState("usuarios", ["usuarios"])), {}, {
    mostrarTabla: function mostrarTabla() {
      if (this.usuarios != "" && this.usuarios != null) {
        return true;
      }

      return false;
    }
  }),
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_3__["default"])("Usuario")],
  methods: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("usuarios", ["accionUsuario"])), {}, {
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarUsuario: function eliminarUsuario() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/usuario/eliminar/".concat(this.id)).then(function (res) {
        if (res.data != "negativo") {
          _this.toastr("Eliminar Usuario", "Usuario eliminado con exito!!", "success");

          _this.accionUsuario({
            tipo: "eliminar",
            data: res.data
          });

          _this.actualizarTabla();
        } else {
          _this.toastr("Precaución", "El Usuario se encuentra Logueado y no es posible eliminarlo!!", "warning");
        }

        _this.bloquearBtnModal = false;

        _this.$modal.hide("modal_eliminar_usuario");
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this.$router.push("/sin-acceso");
        } else if (error.response.status === 405 || error.response.status === 401) {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.toastr("Error!!!", "", "error");
        }
      });
    }
  }),
  created: function created() {
    this.$emit("cambiarTipo", "tabla");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("div", { attrs: { id: _vm.id } }),
      _vm._v(" "),
      _vm.mostrarBtnCroppie
        ? [
            _vm.btnAprobar
              ? [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { dusk: "btn-croppie" },
                      on: { click: _vm.resultado }
                    },
                    [_vm._v("\n        Aprobar Imagen\n      ")]
                  ),
                  _vm._v(" "),
                  _vm.mostrarMensaje
                    ? _c("em", { staticClass: "text-danger small" }, [
                        _vm._v("Debe Aprobar la imagen")
                      ])
                    : _vm._e()
                ]
              : [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger float-right",
                      on: { click: _vm.cancelar }
                    },
                    [_vm._v("\n        Cancelar\n      ")]
                  )
                ]
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=template&id=0e7402ac&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=template&id=0e7402ac& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-card mb-3 card" }, [
    _c("div", { staticClass: "card-header-tab card-header" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "btn-actions-pane-right actions-icon-btn" },
        [
          !_vm.formulario
            ? [
                _vm.getPermisoByNombre("agregar-usuario")
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
                        attrs: { dusk: "btn-agregar" },
                        on: {
                          click: function($event) {
                            return _vm.abrirFormulario(0)
                          }
                        }
                      },
                      [_vm._v("\n          Agregar\n        ")]
                    )
                  : _vm._e()
              ]
            : [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",
                    on: { click: _vm.cerrarFormulario }
                  },
                  [_vm._v("\n          Cancelar\n        ")]
                )
              ]
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        !_vm.formulario
          ? [_c("Tabla", { on: { cambiarTipo: _vm.cambiarTipo } })]
          : [
              _c("Form", {
                attrs: { idUsuario: _vm.id },
                on: {
                  cambiarTipo: _vm.cambiarTipo,
                  cambiarVariableFormulario: _vm.cambiarVariableFormulario
                }
              })
            ]
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "card-header-title font-size-lg text-capitalize font-weight-normal"
      },
      [
        _c("i", {
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n      Tabla Dinámica Usuarios\n    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=template&id=0124e1ce&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=template&id=0124e1ce& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-3 ml-2 mr-2" }, [
    _c("div", { staticClass: "row justify-content-md-center" }, [
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.evento($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(_vm.titulo))
                  ]),
                  _vm._v(" "),
                  _vm.errors != ""
                    ? [
                        _c(
                          "div",
                          { staticClass: "alert alert-danger" },
                          _vm._l(_vm.errors, function(item, index) {
                            return _c("p", { key: index }, [
                              _vm._v(_vm._s(item[0]))
                            ])
                          }),
                          0
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "nombre" } }, [
                      _vm._v("Nombre")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.$v.parametros.nombre.$model,
                          expression: "$v.parametros.nombre.$model",
                          modifiers: { trim: true }
                        }
                      ],
                      class: [
                        "form-control",
                        _vm.$v.parametros.nombre.$error
                          ? "error-input-select"
                          : ""
                      ],
                      attrs: {
                        dusk: "nombre",
                        name: "nombre",
                        id: "nombre",
                        placeholder: "...",
                        type: "text"
                      },
                      domProps: { value: _vm.$v.parametros.nombre.$model },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.$v.parametros.nombre,
                            "$model",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.$v.parametros.nombre.$error &&
                    !_vm.$v.parametros.nombre.required
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.required))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$v.parametros.nombre.$error &&
                    !_vm.$v.parametros.nombre.alpha
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.alpha))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.getRoles
                    ? [
                        _c(
                          "div",
                          { staticClass: "osition-relative form-group" },
                          [
                            _c("label", { attrs: { for: "rol" } }, [
                              _vm._v("Rol de Usuario")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value: _vm.$v.parametros.rol.$model,
                                    expression: "$v.parametros.rol.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                class: [
                                  "form-control",
                                  _vm.$v.parametros.rol.$error
                                    ? "error-input-select"
                                    : ""
                                ],
                                attrs: { name: "select", id: "rol" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.$v.parametros.rol,
                                      "$model",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getRoles, function(tu, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: tu.id } },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(tu.nombre) +
                                        "\n                  "
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _vm.$v.parametros.rol.$error &&
                            !_vm.$v.parametros.rol.required
                              ? _c("em", { staticClass: "text-error-select" }, [
                                  _vm._v(_vm._s(_vm.mensajes.required))
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "imagen" } }, [
                      _vm._v("Imagen")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      ref: "inputImagen",
                      class: [
                        "form-control-file",
                        _vm.$v.parametros.imagen.$error
                          ? "error-input-select"
                          : ""
                      ],
                      attrs: {
                        dusk: "imagen",
                        name: "imagen",
                        id: "imagen",
                        accept: "image/jpeg, image/png",
                        type: "file"
                      },
                      on: { change: _vm.obtenerImagen }
                    }),
                    _vm._v(" "),
                    _vm.imagenError
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.imagenError))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$v.parametros.imagen.$error &&
                    !_vm.$v.parametros.imagen.required
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.required))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.$v.parametros.email.$model,
                          expression: "$v.parametros.email.$model",
                          modifiers: { trim: true }
                        }
                      ],
                      class: [
                        "form-control",
                        _vm.$v.parametros.email.$error
                          ? "error-input-select"
                          : ""
                      ],
                      attrs: {
                        dusk: "email",
                        name: "email",
                        id: "email",
                        placeholder: "...",
                        type: "email"
                      },
                      domProps: { value: _vm.$v.parametros.email.$model },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.$v.parametros.email,
                            "$model",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.$v.parametros.email.$error &&
                    !_vm.$v.parametros.email.required
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.required))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$v.parametros.email.$error &&
                    !_vm.$v.parametros.email.email
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.email))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$v.parametros.email.$error &&
                    !_vm.$v.parametros.email.unique
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.unique))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "pass" } }, [
                    _vm._v("Contraseña")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.$v.parametros.pass.$model,
                          expression: "$v.parametros.pass.$model",
                          modifiers: { trim: true }
                        }
                      ],
                      class: [
                        "form-control",
                        _vm.$v.parametros.pass.$error
                          ? "error-input-select"
                          : ""
                      ],
                      attrs: {
                        dusk: "pass1",
                        name: "pass",
                        id: "pass",
                        placeholder: "...",
                        type: _vm.showPass ? "text" : "password"
                      },
                      domProps: { value: _vm.$v.parametros.pass.$model },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.$v.parametros.pass,
                            "$model",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "input-group-append verContraseña" },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "input-group-text",
                            on: {
                              click: function($event) {
                                _vm.showPass = !_vm.showPass
                              }
                            }
                          },
                          [
                            _vm.showPass
                              ? _c("i", { staticClass: "fas fa-eye" })
                              : _c("i", { staticClass: "fas fa-eye-slash" })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.$v.parametros.pass.$error &&
                    !_vm.$v.parametros.pass.required &&
                    _vm.validarTipoForm
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.required))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$v.parametros.pass.$error &&
                    !_vm.$v.parametros.pass.minLength
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.minLength))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$v.parametros.pass.$error &&
                    !_vm.$v.parametros.pass.maxLength
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.maxLength))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "pass1" } }, [
                    _vm._v("Confirmar Contraseña")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.$v.parametros.pass1.$model,
                          expression: "$v.parametros.pass1.$model",
                          modifiers: { trim: true }
                        }
                      ],
                      class: [
                        "form-control",
                        _vm.$v.parametros.pass1.$error
                          ? "error-input-select"
                          : ""
                      ],
                      attrs: {
                        dusk: "pass2",
                        name: "pass1",
                        id: "pass1",
                        placeholder: "...",
                        type: _vm.showPass1 == true ? "text" : "password"
                      },
                      domProps: { value: _vm.$v.parametros.pass1.$model },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.$v.parametros.pass1,
                            "$model",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "input-group-append verContraseña" },
                      [
                        _c("span", { staticClass: "input-group-text" }, [
                          _vm.showPass1
                            ? _c("i", {
                                staticClass: "fas fa-eye",
                                on: {
                                  click: function($event) {
                                    _vm.showPass1 = !_vm.showPass1
                                  }
                                }
                              })
                            : _c("i", {
                                staticClass: "fas fa-eye-slash",
                                on: {
                                  click: function($event) {
                                    _vm.showPass1 = !_vm.showPass1
                                  }
                                }
                              })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm.$v.parametros.pass1.$error &&
                    !_vm.$v.parametros.pass1.required &&
                    _vm.validarTipoForm
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.required))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$v.parametros.pass1.$error &&
                    !_vm.$v.parametros.pass1.sameAs
                      ? _c("em", { staticClass: "text-error-input" }, [
                          _vm._v(_vm._s(_vm.mensajes.sameAs))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "mb-2 mr-2 btn btn-block",
                      class: _vm.btnClase,
                      attrs: { dusk: "btn-accion", disabled: _vm.bloquearBtn }
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.nomBtnComputed) +
                          "\n            "
                      )
                    ]
                  )
                ],
                2
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("h5", { staticClass: "card-title" }, [_vm._v("Imagen")]),
              _vm._v(" "),
              _vm.mostraImagen
                ? [
                    _vm.mostraImagen === _vm.info.avatarPublico
                      ? [
                          _c("Croppie", {
                            attrs: {
                              id: "croppie",
                              imagen: _vm.mostraImagen,
                              mostrarBtnCroppie: _vm.mostrarBtnCroppie,
                              enableZoom: false,
                              zoom: 0,
                              editar: true,
                              boundaryHeigth: 300,
                              viewportWidth: 200
                            },
                            on: { cambiarValorImagen: _vm.cambiarValorImagen }
                          })
                        ]
                      : [
                          _c("Croppie", {
                            attrs: {
                              id: "croppie",
                              imagen: _vm.mostraImagen,
                              mostrarBtnCroppie: _vm.mostrarBtnCroppie,
                              zoom: 1,
                              enableZoom: true,
                              editar: false,
                              boundaryHeigth: 300,
                              viewportWidth: 200
                            },
                            on: { cambiarValorImagen: _vm.cambiarValorImagen }
                          })
                        ]
                  ]
                : [_vm._m(0)]
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-warning" }, [_vm._v("SIN IMAGEN")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=template&id=2df403fa&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=template&id=2df403fa& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.mostrarTabla
        ? [
            _c("MyVuetable", {
              ref: "tabla",
              attrs: {
                apiUrl: "/info-panel/usuarios-tabla",
                fields: _vm.fields,
                sortOrder: _vm.sortOrder,
                detailRowComponent: "",
                nameGet: "usuarios"
              }
            })
          ]
        : [_vm._m(0)],
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _c(
            "modal",
            {
              attrs: {
                name: "modal_eliminar_usuario",
                classes: "my_modal",
                maxWidth: 400,
                adaptive: true,
                height: "auto",
                scrollable: true
              },
              on: {
                "before-open": _vm.beforeOpenEliminar,
                closed: _vm.closeEliminar
              }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "exampleModalLongTitle" }
                    },
                    [_vm._v("\n            Eliminar Usuario\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$modal.hide("modal_eliminar_usuario")
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("p", [_vm._v("Esta segura/o de eliminar la Usuario?.")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$modal.hide("modal_eliminar_usuario")
                        }
                      }
                    },
                    [_vm._v("\n            Cancelar\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: {
                        dusk: "btn-eliminar-modal",
                        type: "button",
                        disabled: _vm.bloquearBtnModal
                      },
                      on: { click: _vm.eliminarUsuario }
                    },
                    [_vm._v("\n            Eliminar\n          ")]
                  )
                ])
              ])
            ]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO NUEVOS USUARIOS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CroppieComponent.vue?vue&type=template&id=2cc1e54c& */ "./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&");
/* harmony import */ var _CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CroppieComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CroppieComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CroppieComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CroppieComponent.vue?vue&type=template&id=2cc1e54c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerComponent_vue_vue_type_template_id_0e7402ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=template&id=0e7402ac& */ "./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=template&id=0e7402ac&");
/* harmony import */ var _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerComponent_vue_vue_type_template_id_0e7402ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerComponent_vue_vue_type_template_id_0e7402ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=template&id=0e7402ac&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=template&id=0e7402ac& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_0e7402ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=template&id=0e7402ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/ContainerComponent.vue?vue&type=template&id=0e7402ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_0e7402ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_0e7402ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormComponent_vue_vue_type_template_id_0124e1ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=template&id=0124e1ce& */ "./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=template&id=0124e1ce&");
/* harmony import */ var _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormComponent_vue_vue_type_template_id_0124e1ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormComponent_vue_vue_type_template_id_0124e1ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=template&id=0124e1ce&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=template&id=0124e1ce& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_0124e1ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=template&id=0124e1ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/FormComponent.vue?vue&type=template&id=0124e1ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_0124e1ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_0124e1ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaComponent_vue_vue_type_template_id_2df403fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=template&id=2df403fa& */ "./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=template&id=2df403fa&");
/* harmony import */ var _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaComponent_vue_vue_type_template_id_2df403fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaComponent_vue_vue_type_template_id_2df403fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=template&id=2df403fa&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=template&id=2df403fa& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_2df403fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=template&id=2df403fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/usuarios/TablaComponent.vue?vue&type=template&id=2df403fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_2df403fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_2df403fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/usuarios/columnas-usuarios.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/usuarios/columnas-usuarios.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "name",
  sortField: "name",
  title: "Nombre",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "email",
  sortField: "email",
  title: "Email",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "rol",
  sortField: "rol_id",
  title: "Rol de Usuario",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "avatarPublico",
  title: "Imagen",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "imagen"
}, {
  name: "__component:acciones_tabla_usuarios",
  title: "Acciones",
  dataClass: "text-center",
  titleClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/mixins/websocketsSinCheck.js":
/*!***************************************************!*\
  !*** ./resources/js/mixins/websocketsSinCheck.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsMixin = function websocketsMixin(tipoM, tipoP) {
  return {
    data: function data() {
      return {
        bloqueos: [],
        miBloqueo: null
      };
    },
    methods: {
      // Bloquear Btns
      bloquearBtnsTabla: function bloquearBtnsTabla(e) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id
        });
        this.$events.fire(e.id + "-bloquearBtns" + tipoM);
      },
      desbloquearBtnsTabla: function desbloquearBtnsTabla(e) {
        var data = this.bloqueos.find(function (data) {
          return data.id === e.id;
        });
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id;
        }), 1);
        this.$events.fire(data.id + "-desbloquearBtns" + tipoM);
      },
      // guardar mis bloqueos
      agregarMiBloqueo: function agregarMiBloqueo(e) {
        this.miBloqueo = e;
      },
      eliminarMiBloqueo: function eliminarMiBloqueo(e) {
        if (e.id != 0) {
          this.miBloqueo = null;
        }
      },
      //borrar bloqueos
      borrarBloqueos: function borrarBloqueos(e) {
        var data = this.bloqueos.find(function (data) {
          return data.idUser === e.id;
        });

        if (data) {
          this.desbloquearBtnsTabla(data);
        }
      },
      // verificar bloqueos existentes
      verificarBloqueos: function verificarBloqueos() {
        for (var index = 0; index < this.bloqueos.length; index++) {
          this.$events.fire(this.bloqueos[index].id + "-bloquearBtns" + tipoM);
        }
      },
      enviarBloqueos: function enviarBloqueos() {
        window.Echo["private"]("recibirBtns" + tipoM).whisper("recibirBtns" + tipoM, {
          miBloqueo: this.miBloqueo
        });
      }
    },
    mounted: function mounted() {
      var _this = this;

      window.Echo.join(tipoP).joining(function (data) {
        if (_this.miBloqueo) {
          _this.enviarBloqueos();
        }
      }).leaving(function (data) {
        _this.borrarBloqueos(data.user);
      });
      window.Echo["private"]("bloquearBtns" + tipoM).listenForWhisper("bloquearBtns" + tipoM, function (e) {
        _this.bloquearBtnsTabla(e);
      });
      window.Echo["private"]("desbloquearBtns" + tipoM).listenForWhisper("desbloquearBtns" + tipoM, function (e) {
        if (e.id != 0) {
          _this.desbloquearBtnsTabla(e);
        }
      });
    },
    created: function created() {
      var _this2 = this;

      window.Echo["private"]("recibirBtns" + tipoM).listenForWhisper("recibirBtns" + tipoM, function (e) {
        if (_this2.bloqueos.length == 0) {
          _this2.bloquearBtnsTabla(e.miBloqueo);
        }
      });
      this.$events.$on("agregarMiBloqueo" + tipoM, function (e) {
        return _this2.agregarMiBloqueo(e);
      });
      this.$events.$on("eliminarMiBloqueo" + tipoM, function (e) {
        return _this2.eliminarMiBloqueo(e);
      });
      this.$events.$on("verificarBloqueos-" + tipoP, function (e) {
        return _this2.verificarBloqueos();
      });
    },
    destroyed: function destroyed() {
      this.$events.$off("agregarMiBloqueo" + tipoM);
      this.$events.$off("eliminarMiBloqueo" + tipoM);
      this.$events.$off("verificarBloqueos-" + tipoP);
    },
    beforeDestroy: function beforeDestroy() {
      window.Echo.leave(tipoP);
      window.Echo.leave("recibirBtns" + tipoM);
      window.Echo.leave("desbloquearBtns" + tipoM);
      window.Echo.leave("bloquearBtns" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsMixin);

/***/ }),

/***/ "./resources/js/mixins/websocketsTabla.js":
/*!************************************************!*\
  !*** ./resources/js/mixins/websocketsTabla.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsTabla = function websocketsTabla(tipoM) {
  return {
    methods: {
      closeEliminar: function closeEliminar() {
        window.Echo["private"]("desbloquearBtns" + tipoM).whisper("desbloquearBtns" + tipoM, {
          id: this.id
        });
        this.$events.fire("eliminarMiBloqueo" + tipoM, {
          id: this.id
        });
      },
      actualizarTabla: function actualizarTabla() {
        if (this.mostrarTabla) {
          if (this.$refs.tabla) {
            this.$refs.tabla.refreshDatos();
          }
        }
      }
    },
    created: function created() {
      var _this = this;

      this.$events.on("actualizartabla" + tipoM, function (e) {
        return _this.actualizarTabla();
      });
    },
    destroyed: function destroyed() {
      this.$events.off("actualizartabla" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsTabla);

/***/ })

}]);