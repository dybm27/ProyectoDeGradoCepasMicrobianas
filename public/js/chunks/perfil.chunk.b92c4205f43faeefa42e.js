(function(d){	const l = d['es'] = d['es'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The URL must not be empty.":"La URL no debe estar vacía","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil"],{

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
      var _this = this;

      this.croppie.result("canvas", "viewport", "jpeg").then(function (res) {
        _this.btnAprobar = false;

        _this.$emit("cambiarValorImagen", res);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/bloquearPestañas */ "./resources/js/mixins/bloquearPestañas.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var ruleAlpha = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      showPass: false,
      showPass1: false,
      titulo: "",
      tipo: "",
      nombre: "",
      imagen: "",
      pass: "",
      pass1: "",
      errorImagen: "",
      errorPass: "",
      errorNombre: "",
      imagenMiniatura: "",
      bloquearBtnModal: false,
      mensajes: {
        required: "El campo es requerido.",
        sameAs: "Las contraseñas no coinciden",
        alpha: "El campo solo puede contener letras.",
        minLength: "La contraseña debe tener mínimo 8 carácteres.",
        maxLength: "La contraseña debe tener máximo 15 carácteres."
      }
    };
  },
  validations: function validations() {
    if (this.tipo == "nombre") {
      return {
        nombre: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
          alpha: function alpha(value) {
            if (value == "") return true;
            if (!ruleAlpha.test(value)) return false;
            return true;
          }
        }
      };
    } else if (this.tipo == "imagen") {
      return {
        imagen: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
        }
      };
    } else {
      return {
        pass: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
          minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["minLength"])(8),
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["maxLength"])(15)
        },
        pass1: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
          sameAs: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["sameAs"])("pass")
        }
      };
    }
  },
  mixins: [Object(_mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__["default"])("perfil"), _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions(["accionModificarAuth"])), {}, {
    cambiarValorImagen: function cambiarValorImagen(valor) {
      this.imagen = valor;
    },
    showModal: function showModal(tipo) {
      this.imagenMiniatura = "";
      this.nombre = "";
      this.pass = "";
      this.imagen = "";
      this.tipo = tipo;

      switch (tipo) {
        case "nombre":
          this.titulo = "Cambiar Nombre";
          this.nombre = this.auth.name;
          this.$modal.show("cambiarInfo");
          break;

        case "imagen":
          this.titulo = "Cambiar Imagen";
          this.$modal.show("cambiarImagen");
          break;

        case "contraseña":
          this.titulo = "Cambiar Contraseña";
          this.$modal.show("cambiarInfo");
          break;
      }
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.errorImagen = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";
          this.imagen = "";
        } else {
          this.errorImagen = "";
          this.cargarImagen(file);
        }
      } else {
        this.imagen = "";
        this.imagenMiniatura = "";
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this = this;

      var reader = new Image();

      reader.onload = function (e) {
        _this.imagenMiniatura = reader.src;
      };

      reader.src = URL.createObjectURL(file);
    },
    eventBtn: function eventBtn() {
      var _this2 = this;

      this.bloquearBtnModal = true;
      var parametros = {
        nombre: this.nombre,
        pass: this.pass,
        imagen: this.imagen
      };

      switch (this.tipo) {
        case "nombre":
          this.$v.nombre.$touch();

          if (!this.$v.$invalid) {
            axios.put("/perfil/cambiar-".concat(this.tipo), parametros).then(function (res) {
              _this2.bloquearBtnModal = false;

              _this2.accionModificarAuth(res.data);

              _this2.toastr(_this2.titulo, "Accion realizada con exito!!", "success");

              _this2.$modal.hide("cambiarInfo");
            })["catch"](function (error) {
              if (error.response.status === 405 || error.response.status === 401) {
                localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
                window.location.href = "/";
              } else {
                _this2.bloquearBtnModal = false;
              }
            });
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!", "Favor llenar correctamente los campos", "error");
          }

          break;

        case "imagen":
          this.$v.imagen.$touch();

          if (!this.$v.$invalid) {
            axios.put("/perfil/cambiar-".concat(this.tipo), parametros).then(function (res) {
              _this2.bloquearBtnModal = false;

              _this2.accionModificarAuth(res.data);

              _this2.toastr(_this2.titulo, "Accion realizada con exito!!", "success");

              _this2.$modal.hide("cambiarImagen");
            })["catch"](function (error) {
              if (error.response.status === 405 || error.response.status === 401) {
                localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
                window.location.href = "/";
              } else {
                _this2.bloquearBtnModal = false;
              }
            });
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!", "Favor llenar correctamente los campos", "error");
          }

          break;

        case "contraseña":
          this.$v.pass.$touch();
          this.$v.pass1.$touch();

          if (!this.$v.$invalid) {
            axios.put("/perfil/cambiar-".concat(this.tipo), parametros).then(function (res) {
              _this2.bloquearBtnModal = false;

              _this2.accionModificarAuth(res.data);

              _this2.toastr(_this2.titulo, "Accion realizada con exito!!", "success");

              _this2.$modal.hide("cambiarInfo");
            })["catch"](function (error) {
              if (error.response.status === 405 || error.response.status === 401) {
                localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
                window.location.href = "/";
              } else {
                _this2.bloquearBtnModal = false;
              }
            });
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!", "Favor llenar correctamente los campos", "error");
          }

          break;
      }
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapGetters("usuarios", ["getRolById", "getRoles"])), vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapState(["auth"])), {}, {
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    }
  }),
  created: function created() {
    this.$emit("rutaSider", window.location.pathname);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("ul", {
        staticClass:
          "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tabs-animation" },
        [
          _vm.numPestaña == 1
            ? [
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "row justify-content-md-center" }, [
                    _c("div", { staticClass: "col-md-7" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card-shadow-primary profile-responsive card-border mb-3 card"
                        },
                        [
                          _c("div", { staticClass: "dropdown-menu-header" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "dropdown-menu-header-inner bg-focus"
                              },
                              [
                                _c("div", {
                                  staticClass: "menu-header-image opacity-3",
                                  staticStyle: {
                                    "background-image":
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "menu-header-content btn-pane-right"
                                  },
                                  [
                                    _c("div", { staticClass: "container" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row justify-content-center"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "avatar-icon-wrapper mr-2 avatar-icon-xl"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "avatar-icon rounded"
                                                },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src:
                                                        _vm.auth.avatarPublico,
                                                      alt: "Avatar"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row justify-content-center"
                                        },
                                        [
                                          _c("div", [
                                            _c(
                                              "h5",
                                              {
                                                staticClass: "menu-header-title"
                                              },
                                              [_vm._v(_vm._s(_vm.auth.name))]
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "list-group list-group-flush" },
                            [
                              _c("li", { staticClass: "list-group-item" }, [
                                _c("div", { staticClass: "widget-content" }, [
                                  _c("div", { staticClass: "text-center" }, [
                                    _c("h5", {
                                      staticClass: "widget-heading opacity-2"
                                    }),
                                    _vm._v(" "),
                                    _c("h5", [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-md-12" },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "float-left" },
                                              [
                                                _c("b", [
                                                  _vm._v("Rol de Usuario:")
                                                ]),
                                                _vm._v(" "),
                                                _vm.getRoles != ""
                                                  ? [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getRolById(
                                                            _vm.auth.rol_id
                                                          ).nombre
                                                        )
                                                      )
                                                    ]
                                                  : _vm._e()
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-md-12" },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "float-left" },
                                              [
                                                _c("b", [_vm._v("Email:")]),
                                                _vm._v(
                                                  "\n                              " +
                                                    _vm._s(_vm.auth.email) +
                                                    "\n                            "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "p-0 list-group-item" }, [
                                _c(
                                  "div",
                                  { staticClass: "grid-menu grid-menu-3col" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "no-gutters row" },
                                      [
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn-icon-vertical btn-square btn-transition btn btn-outline-link",
                                              attrs: { dusk: "cambiar-nombre" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.showModal("nombre")
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "lnr-pencil btn-icon-wrapper btn-icon-lg mb-3"
                                              }),
                                              _vm._v(
                                                "Cambiar Nombre\n                        "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn-icon-vertical btn-square btn-transition btn btn-outline-link",
                                              attrs: { dusk: "cambiar-imagen" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.showModal("imagen")
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "lnr-link btn-icon-wrapper btn-icon-lg mb-3"
                                              }),
                                              _vm._v(
                                                "Cambiar Imagen\n                        "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn-icon-vertical btn-square btn-transition btn btn-outline-link",
                                              attrs: {
                                                dusk: "cambiar-password"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.showModal(
                                                    "contraseña"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "lnr-star btn-icon-wrapper btn-icon-lg mb-3"
                                              }),
                                              _vm._v(
                                                "Cambiar Contraseña\n                        "
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            : [_vm._m(1)]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _c(
            "modal",
            {
              attrs: {
                name: "cambiarImagen",
                classes: "my_modal",
                adaptive: true,
                maxWidth: 700,
                height: "auto",
                scrollable: true
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
                    [_vm._v(_vm._s(_vm.titulo))]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$modal.hide("cambiarImagen")
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
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    _vm.tipo === "imagen"
                      ? [
                          _c("div", { staticClass: "container" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "position-relative form-group"
                                  },
                                  [
                                    _c("label", { attrs: { for: "imagen" } }, [
                                      _vm._v("Imagen")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      ref: "inputImagen",
                                      class: [
                                        "form-control-file",
                                        _vm.$v.imagen.$error != ""
                                          ? "error-input-select"
                                          : ""
                                      ],
                                      attrs: {
                                        dusk: "imagen",
                                        name: "imagen",
                                        id: "imagen",
                                        accept: "image/jpeg",
                                        type: "file"
                                      },
                                      on: { change: _vm.obtenerImagen }
                                    }),
                                    _vm._v(" "),
                                    _vm.errorImagen
                                      ? _c(
                                          "em",
                                          { staticClass: "text-error-input" },
                                          [_vm._v(_vm._s(_vm.errorImagen))]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.$v.imagen.$error &&
                                    !_vm.$v.imagen.required
                                      ? _c(
                                          "em",
                                          { staticClass: "text-error-input" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.mensajes.required)
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-6" },
                                [
                                  _vm.mostraImagen
                                    ? [
                                        _c("Croppie", {
                                          attrs: {
                                            id: "croppie",
                                            imagen: _vm.mostraImagen,
                                            mostrarBtnCroppie: true,
                                            zoom: 1,
                                            enableZoom: true,
                                            editar: false,
                                            boundaryHeigth: 230,
                                            viewportWidth: 200
                                          },
                                          on: {
                                            cambiarValorImagen:
                                              _vm.cambiarValorImagen
                                          }
                                        })
                                      ]
                                    : [
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "mt-5 mb-5" },
                                              [
                                                _c(
                                                  "span",
                                                  { staticClass: "pr-1" },
                                                  [
                                                    _c(
                                                      "b",
                                                      {
                                                        staticClass:
                                                          "text-warning"
                                                      },
                                                      [_vm._v("SIN IMAGEN")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                ],
                                2
                              )
                            ])
                          ])
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$modal.hide("cambiarImagen")
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
                        dusk: "button",
                        type: "button",
                        disabled: _vm.bloquearBtnModal
                      },
                      on: { click: _vm.eventBtn }
                    },
                    [_vm._v("\n            Cambiar\n          ")]
                  )
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _c(
            "modal",
            {
              attrs: {
                name: "cambiarInfo",
                classes: "my_modal",
                maxWidth: 450,
                adaptive: true,
                height: "auto",
                scrollable: true
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
                    [_vm._v(_vm._s(_vm.titulo))]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$modal.hide("cambiarInfo")
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
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    _vm.tipo === "nombre"
                      ? [
                          _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c("label", { attrs: { for: "nombre" } }, [
                                _vm._v("Nombre")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value: _vm.$v.nombre.$model,
                                    expression: "$v.nombre.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                class: [
                                  "form-control",
                                  _vm.$v.nombre.$error
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
                                domProps: { value: _vm.$v.nombre.$model },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.nombre,
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
                              _vm.$v.nombre.$error && !_vm.$v.nombre.required
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-input" },
                                    [_vm._v(_vm._s(_vm.mensajes.required))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$v.nombre.$error && !_vm.$v.nombre.alpha
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-input" },
                                    [_vm._v(_vm._s(_vm.mensajes.alpha))]
                                  )
                                : _vm._e()
                            ]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.tipo === "contraseña"
                      ? [
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
                                  value: _vm.$v.pass.$model,
                                  expression: "$v.pass.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.$v.pass.$error ? "error-input-select" : ""
                              ],
                              attrs: {
                                dusk: "password",
                                name: "pass",
                                id: "pass",
                                placeholder: "...",
                                type: _vm.showPass == true ? "text" : "password"
                              },
                              domProps: { value: _vm.$v.pass.$model },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.pass,
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
                              {
                                staticClass: "input-group-append verContraseña"
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "input-group-text" },
                                  [
                                    _vm.showPass
                                      ? _c("i", {
                                          staticClass: "fas fa-eye",
                                          on: {
                                            click: function($event) {
                                              _vm.showPass = !_vm.showPass
                                            }
                                          }
                                        })
                                      : _c("i", {
                                          staticClass: "fas fa-eye-slash",
                                          on: {
                                            click: function($event) {
                                              _vm.showPass = !_vm.showPass
                                            }
                                          }
                                        })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm.$v.pass.$error && !_vm.$v.pass.required
                              ? _c("em", { staticClass: "text-error-input" }, [
                                  _vm._v(_vm._s(_vm.mensajes.required))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$v.pass.$error && !_vm.$v.pass.minLength
                              ? _c("em", { staticClass: "text-error-input" }, [
                                  _vm._v(_vm._s(_vm.mensajes.minLength))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$v.pass.$error && !_vm.$v.pass.maxLength
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
                                  value: _vm.$v.pass1.$model,
                                  expression: "$v.pass1.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.$v.pass1.$error ? "error-input-select" : ""
                              ],
                              attrs: {
                                dusk: "password-reply",
                                name: "pass1",
                                id: "pass1",
                                placeholder: "...",
                                type:
                                  _vm.showPass1 == true ? "text" : "password"
                              },
                              domProps: { value: _vm.$v.pass1.$model },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.pass1,
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
                              {
                                staticClass: "input-group-append verContraseña"
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "input-group-text" },
                                  [
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
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm.$v.pass1.$error && !_vm.$v.pass1.required
                              ? _c("em", { staticClass: "text-error-input" }, [
                                  _vm._v(_vm._s(_vm.mensajes.required))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$v.pass1.$error && !_vm.$v.pass1.sameAs
                              ? _c("em", { staticClass: "text-error-input" }, [
                                  _vm._v(_vm._s(_vm.mensajes.sameAs))
                                ])
                              : _vm._e()
                          ])
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$modal.hide("cambiarInfo")
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
                        dusk: "button",
                        type: "button",
                        disabled: _vm.bloquearBtnModal
                      },
                      on: { click: _vm.eventBtn }
                    },
                    [_vm._v("\n            Cambiar\n          ")]
                  )
                ])
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-page-title" }, [
      _c("div", { staticClass: "page-title-wrapper" }, [
        _c("div", { staticClass: "page-title-heading" }, [
          _c("div", { staticClass: "page-title-icon" }, [
            _c("i", { staticClass: "pe-7s-id icon-gradient bg-mean-fruit" })
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v("\n          Información del Usuario\n          "),
            _c("div", { staticClass: "page-title-subheading opacity-10" }, [
              _c("nav", [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _c("li", { staticClass: "breadcrumb-item" }, [
                    _c("a", [_c("i", { staticClass: "fa fa-home" })])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "breadcrumb-item" }, [
                    _c("a", [_vm._v("Perfil")])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "page-title-actions" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c(
                "div",
                {
                  staticClass: "alert alert-danger mt-4 text-center",
                  attrs: { role: "alert" }
                },
                [
                  _vm._v(
                    "\n                  Ya has ingresado desde otra pestaña del navegador!!\n                "
                  )
                ]
              )
            ])
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

/***/ "./resources/js/components/PerfilComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/PerfilComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerfilComponent.vue?vue&type=template&id=85951714& */ "./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714&");
/* harmony import */ var _PerfilComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PerfilComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PerfilComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PerfilComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PerfilComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PerfilComponent.vue?vue&type=template&id=85951714& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/bloquearPestañas.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/bloquearPestañas.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bloquearPestañasMixin = function bloquearPestañasMixin(tipo) {
  return {
    data: function data() {
      return {
        numPestañas: 0,
        numPestaña: 0
      };
    },
    methods: {
      obtenerValorPestañas: function obtenerValorPestaAs() {
        var value = this.$ls.get(tipo);

        if (value) {
          this.numPestañas = value.numPestañas + 1;
          this.numPestaña = this.numPestañas;
          this.$ls.set(tipo, {
            numPestañas: this.numPestañas,
            numPestañaSaliente: 0
          });
        } else {
          this.numPestañas = 1;
          this.numPestaña = 1;
          this.$ls.set(tipo, {
            numPestañas: 1,
            numPestañaSaliente: 0
          });
        }
      },
      modificarValorPestañas: function modificarValorPestaAs(val, oldVal) {
        if (val && oldVal) {
          this.numPestañas = val.numPestañas;

          if (val.numPestañas < oldVal.numPestañas) {
            if (val.numPestañaSaliente < this.numPestaña) {
              this.numPestaña = this.numPestaña - 1;
            }
          }
        } else {
          if (this.numPestaña == 1) {
            this.$ls.set(tipo, {
              numPestañas: this.numPestañas,
              numPestañaSaliente: 0
            });
          }
        }
      },
      verificar: function verificar() {
        if (this.numPestañas === 1) {
          this.$ls.remove(tipo);
        } else {
          this.$ls.set(tipo, {
            numPestañas: --this.numPestañas,
            numPestañaSaliente: this.numPestaña
          });
        }
      },
      beforeunload: function beforeunload() {
        this.verificar();
      }
    },
    mounted: function mounted() {
      this.obtenerValorPestañas();
      window.addEventListener("beforeunload", this.beforeunload);
    },
    created: function created() {
      this.$ls.on(tipo, this.modificarValorPestañas);
    },
    beforeDestroy: function beforeDestroy() {
      this.verificar();
      this.$ls.off(tipo, this.modificarValorPestañas);
      window.removeEventListener("beforeunload", this.beforeunload);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (bloquearPestañasMixin);

/***/ })

}]);