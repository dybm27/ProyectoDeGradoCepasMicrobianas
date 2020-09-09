(function(d){	const l = d['es'] = d['es'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The URL must not be empty.":"La URL no debe estar vacía","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caract-macro-levadura"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopieCepas */ "./resources/js/mixins/obtenerImagenCroopieCepas.js");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
/* harmony import */ var _ModalAgregarInfoCaractComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModalAgregarInfoCaractComponent.vue */ "./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__);
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalAgregarInfo: _ModalAgregarInfoCaractComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["info", "modificarInfo"],
  data: function data() {
    return {
      parametros: {
        cepaId: "",
        medio: "",
        color: null,
        textura: null,
        topografia_superficie: "",
        borde_colonia: "",
        imagen: ""
      },
      tituloModal: "",
      tipoModal: "",
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
      bloquearBtnModal: false,
      mensajes: {
        required: "El campo es requerido",
        minLength: "El campo debe tener como minimo "
      }
    };
  },
  validations: {
    parametros: {
      medio: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
      },
      color: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
      },
      textura: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
      },
      topografia_superficie: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
      },
      borde_colonia: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
      },
      imagen: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
      }
    }
  },
  mixins: [_mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;
      this.$v.parametros.$touch();

      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Medio") {
          axios.post("/cepas/levadura/caract-macro", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;
              _this.errors = [];
              _this.$refs.inputImagen.value = "";
              _this.tituloForm = "Editar Medio";
              _this.nomBtn = "Editar";

              _this.$emit("agregar", res.data);

              _this.toastr("Agregar Medio", "Medio agregado con exito!!", "success");
            }
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        } else {
          axios.put("/cepas/levadura/caract-macro/".concat(this.info.id), this.parametros).then(function (res) {
            _this.bloquearBtn = false;
            _this.errors = [];
            _this.$refs.inputImagen.value = "";

            _this.$emit("editar", res.data);

            _this.toastr("Editar Medio", "Medio editado con exito!!", "success");
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
      this.parametros.medio = this.info.medio;
      this.parametros.color = this.info.color_id;
      this.parametros.textura = this.info.textura_id;
      this.parametros.topografia_superficie = this.info.topografia_superficie;
      this.parametros.borde_colonia = this.info.borde_colonia;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    showModal: function showModal(tipo) {
      this.tipoModal = tipo;

      if (tipo === "color") {
        this.tituloModal = "Agregar Nuevo Color";
      } else if (tipo === "textura") {
        this.tituloModal = "Agregar Nueva Textura";
      }

      this.$modal.show("modal_agregar_info_caract");
    },
    verificarSelects: function verificarSelects() {
      if (this.obtenerColores.length > 0) {
        this.parametros.color = this.obtenerColores[0].id;
      } else {
        this.parametros.color = null;
      }

      if (this.obtenerTexturas.length > 0) {
        this.parametros.textura = this.obtenerTexturas[0].id;
      } else {
        this.parametros.textura = null;
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getPermisoByNombre"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroLevaduras"])), {}, {
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Medio") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm: function validarTipoForm() {
      if (this.tituloForm === "Agregar Medio") {
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
    obtenerColores: function obtenerColores() {
      return this.getInfoCaractMacroLevaduras.colors;
    },
    obtenerTexturas: function obtenerTexturas() {
      return this.getInfoCaractMacroLevaduras.texturas;
    }
  }),
  mounted: function mounted() {
    if (this.info === undefined) {
      this.tituloForm = "Agregar Medio";
      this.nomBtn = "Agregar";
    } else {
      this.llenarInfo();
      this.tituloForm = "Editar Medio";
      this.nomBtn = "Editar";
    }

    var array = [];

    if (this.$route.params.cepaLevaduraSlug) {
      array = this.$route.params.cepaLevaduraSlug.split("-");
      this.parametros.cepaId = parseInt(array[array.length - 1]);
    } else {
      array = this.$route.params.cepaSlug.split("-");
      this.parametros.cepaId = parseInt(array[array.length - 1]);
    }
  },
  created: function created() {
    this.verificarSelects();
  },
  watch: {
    modificarInfo: function modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    },
    obtenerColores: function obtenerColores() {
      if (this.obtenerColores.length > 0) {
        this.parametros.color = this.obtenerColores[0].id;
      } else {
        this.parametros.color = null;
      }
    },
    obtenerTexturas: function obtenerTexturas() {
      if (this.obtenerTexturas.length > 0) {
        this.parametros.textura = this.obtenerTexturas[0].id;
      } else {
        this.parametros.textura = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_infoCaractMacro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/infoCaractMacro */ "./resources/js/mixins/infoCaractMacro.js");
/* harmony import */ var _forms_caract_FormCaractMacroComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms-caract/FormCaractMacroComponent.vue */ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue");
/* harmony import */ var _ModalEliminarCaractComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModalEliminarCaractComponent.vue */ "./resources/js/components/cepas/ModalEliminarCaractComponent.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FormCaractMacro: _forms_caract_FormCaractMacroComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalEliminar: _ModalEliminarCaractComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_infoCaractMacro__WEBPACK_IMPORTED_MODULE_2__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract", "accionEliminarCaract"])),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getCaractMacro"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-md-center" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "main-card mb-3 card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.titulo))
                ]),
                _vm._v(" "),
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
                      _c("label", { attrs: { for: "medio" } }, [
                        _vm._v("Medio")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.parametros.medio.$model,
                            expression: "$v.parametros.medio.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.medio.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "medio",
                          id: "medio",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: { value: _vm.$v.parametros.medio.$model },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.medio,
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
                      _vm.$v.parametros.medio.$error &&
                      !_vm.$v.parametros.medio.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm.getInfoCaractMacroLevaduras
                      ? [
                          _c("div", { staticClass: "form-row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "color" } }, [
                                _vm._v("Color")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group mb-3" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: _vm.$v.parametros.color.$model,
                                        expression:
                                          "$v.parametros.color.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.$v.parametros.color.$error
                                        ? "error-input-select"
                                        : ""
                                    ],
                                    attrs: { name: "select", id: "color" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.parametros.color,
                                          "$model",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.obtenerColores, function(
                                    c,
                                    index
                                  ) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: c.id } },
                                      [_vm._v(_vm._s(c.nombre))]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _vm.getPermisoByNombre("agregar-otra")
                                  ? _c(
                                      "div",
                                      { staticClass: "input-group-append" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.showModal("color")
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-plus"
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _vm.$v.parametros.color.$error &&
                              !_vm.$v.parametros.color.required
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-select" },
                                    [_vm._v(_vm._s(_vm.mensajes.required))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "textura" } }, [
                                _vm._v("Textura")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group mb-3" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: _vm.$v.parametros.textura.$model,
                                        expression:
                                          "$v.parametros.textura.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.$v.parametros.textura.$error
                                        ? "error-input-select"
                                        : ""
                                    ],
                                    attrs: { name: "select", id: "textura" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.parametros.textura,
                                          "$model",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.obtenerTexturas, function(
                                    t,
                                    index
                                  ) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: t.id } },
                                      [_vm._v(_vm._s(t.nombre))]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _vm.getPermisoByNombre("agregar-otra")
                                  ? _c(
                                      "div",
                                      { staticClass: "input-group-append" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.showModal("textura")
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-plus"
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _vm.$v.parametros.textura.$error &&
                              !_vm.$v.parametros.textura.required
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-select" },
                                    [_vm._v(_vm._s(_vm.mensajes.required))]
                                  )
                                : _vm._e()
                            ])
                          ])
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
                      _c("label", { attrs: { for: "topografia_superficie" } }, [
                        _vm._v("Topografía de la Superficie")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value:
                              _vm.$v.parametros.topografia_superficie.$model,
                            expression:
                              "$v.parametros.topografia_superficie.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.topografia_superficie.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "topografia_superficie",
                          id: "topografia_superficie",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.topografia_superficie.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.topografia_superficie,
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
                      _vm.$v.parametros.topografia_superficie.$error &&
                      !_vm.$v.parametros.topografia_superficie.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "borde_colonia" } }, [
                        _vm._v("Borde de la Colonia")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.parametros.borde_colonia.$model,
                            expression: "$v.parametros.borde_colonia.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.borde_colonia.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "borde_colonia",
                          id: "borde_colonia",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.borde_colonia.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.borde_colonia,
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
                      _vm.$v.parametros.borde_colonia.$error &&
                      !_vm.$v.parametros.borde_colonia.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "mb-2 mr-2 btn btn-block",
                        class: _vm.btnClase,
                        attrs: { disabled: _vm.bloquearBtn }
                      },
                      [_vm._v(_vm._s(_vm.nomBtnComputed))]
                    )
                  ],
                  2
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "main-card mb-3 card" }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _vm.mostraImagen
                    ? [
                        _vm.validarCroppie
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
                                on: {
                                  cambiarValorImagen: _vm.cambiarValorImagen
                                }
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
                                on: {
                                  cambiarValorImagen: _vm.cambiarValorImagen
                                }
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
      ]),
      _vm._v(" "),
      _c("ModalAgregarInfo", {
        attrs: {
          url: "info-caract-levaduras",
          tipo: _vm.tipoModal,
          titulo: _vm.tituloModal,
          tipoForm: "levadura"
        }
      })
    ],
    1
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
          _c("b", { staticClass: "text-success" }, [_vm._v("SIN IMAGEN")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "tabs-animation" }, [
        _c("div", { staticClass: "mb-3 card" }, [
          _c("div", { staticClass: "card-header-tab card-header" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "btn-actions-pane-right text-capitalize" },
              [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mostrarBtnCancelar,
                        expression: "mostrarBtnCancelar"
                      }
                    ],
                    staticClass:
                      "btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",
                    on: { click: _vm.cancelar }
                  },
                  [_vm._v("Cancelar")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mostrarBtnEliminar,
                        expression: "mostrarBtnEliminar"
                      }
                    ],
                    staticClass:
                      "btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",
                    on: { click: _vm.eliminarMedio }
                  },
                  [_vm._v("Eliminar Medio")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mostrarBtnAgregarComputed,
                        expression: "mostrarBtnAgregarComputed"
                      }
                    ],
                    staticClass:
                      "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
                    on: { click: _vm.abrirForm }
                  },
                  [_vm._v("Agregar Medio")]
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
                _vm.mostrarForms
                  ? [
                      _c(
                        "div",
                        { staticClass: "tabs-lg-alternate card-header" },
                        [
                          _c(
                            "ul",
                            { staticClass: "nav nav-justified" },
                            [
                              _vm.mostrar1
                                ? [
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link",
                                          class: _vm.computedActive1,
                                          on: {
                                            click: function($event) {
                                              return _vm.cambiarActive(1)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "widget-number text-success"
                                            },
                                            [_vm._v("Medio 1")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "tab-subheading" },
                                            [
                                              _vm._m(1),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(_vm.medio1) +
                                                  "\n                      "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.mostrar2
                                ? [
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link",
                                          class: _vm.computedActive2,
                                          on: {
                                            click: function($event) {
                                              return _vm.cambiarActive(2)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "widget-number text-success"
                                            },
                                            [_vm._v("Medio 2")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "tab-subheading" },
                                            [
                                              _vm._m(2),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(_vm.medio2) +
                                                  "\n                      "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.mostrar3
                                ? [
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link",
                                          class: _vm.computedActive3,
                                          on: {
                                            click: function($event) {
                                              return _vm.cambiarActive(3)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "widget-number text-success"
                                            },
                                            [_vm._v("Medio 3")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "tab-subheading" },
                                            [
                                              _vm._m(3),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(_vm.medio3) +
                                                  "\n                      "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "tab-content" },
                        [
                          _vm.mostrar1
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane",
                                    class: _vm.computedActive1
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card-body" },
                                      [
                                        _vm.computedMostrarForm1
                                          ? [
                                              _c("FormCaractMacro", {
                                                attrs: {
                                                  info: _vm.getCaractMacro[0],
                                                  modificarInfo:
                                                    _vm.modificarForm
                                                },
                                                on: {
                                                  agregar: _vm.agregarInfo,
                                                  editar: _vm.editarInfo,
                                                  cambiarVariable:
                                                    _vm.cambiarVariable
                                                }
                                              })
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.mostrar2
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane",
                                    class: _vm.computedActive2
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card-body" },
                                      [
                                        _vm.computedMostrarForm2
                                          ? [
                                              _c("FormCaractMacro", {
                                                attrs: {
                                                  info: _vm.getCaractMacro[1],
                                                  modificarInfo:
                                                    _vm.modificarForm
                                                },
                                                on: {
                                                  agregar: _vm.agregarInfo,
                                                  editar: _vm.editarInfo,
                                                  cambiarVariable:
                                                    _vm.cambiarVariable
                                                }
                                              })
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.mostrar3
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane",
                                    class: _vm.computedActive3
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card-body" },
                                      [
                                        _vm.computedMostrarForm3
                                          ? [
                                              _c("FormCaractMacro", {
                                                attrs: {
                                                  info: _vm.getCaractMacro[2],
                                                  modificarInfo:
                                                    _vm.modificarForm
                                                },
                                                on: {
                                                  agregar: _vm.agregarInfo,
                                                  editar: _vm.editarInfo,
                                                  cambiarVariable:
                                                    _vm.cambiarVariable
                                                }
                                              })
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  : [_vm._m(4)]
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ModalEliminar", {
        attrs: {
          tipo: "Característica",
          tipoCaract: "Característica Macroscópica",
          caract: _vm.caract,
          url: "levadura/caract-macro"
        },
        on: { eliminar: _vm.eliminarInfo }
      })
    ],
    1
  )
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
          staticClass: "header-icon lnr-charts icon-gradient bg-happy-green"
        }),
        _vm._v("\n          Características Macroscópicas\n        ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "pr-2 opactiy-6" }, [
      _c("i", { staticClass: "pe-7s-note2" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "pr-2 opactiy-6" }, [
      _c("i", { staticClass: "pe-7s-note2" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "pr-2 opactiy-6" }, [
      _c("i", { staticClass: "pe-7s-note2" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("NO SE HA AGREGADO NINGÚN MEDIO")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c& */ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c&");
/* harmony import */ var _FormCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCaractMacroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractMacroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29& */ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29&");
/* harmony import */ var _InfoCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoCaractMacroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractMacroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/infoCaractMacro.js":
/*!************************************************!*\
  !*** ./resources/js/mixins/infoCaractMacro.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var infoCaractMacroMixin = {
  data: function data() {
    return {
      active1: "active",
      active2: "",
      active3: "",
      mostrar1: false,
      mostrar2: false,
      mostrar3: false,
      mostrarForm1: true,
      mostrarForm2: false,
      mostrarForm3: false,
      mostrarBtnAgregar: true,
      modificarForm: false,
      caract: null,
      num: 0
    };
  },
  methods: {
    agregarInfo: function agregarInfo(data) {
      this.accionAgregarCaract({
        tipo: "macro",
        data: data
      });
      this.mostrarBtnAgregar = true;
      this.modificarForm = true;
    },
    editarInfo: function editarInfo(data) {
      this.accionEditarCaract({
        tipo: "macro",
        data: data
      });
      this.modificarForm = true;
    },
    eliminarInfo: function eliminarInfo(data) {
      this.accionEliminarCaract({
        tipo: "macro",
        data: data
      });
      this.mostrarBtnAgregar = true;
      this.modificarForm = true;
      this.formatear(this.num);
    },
    eliminarMedio: function eliminarMedio() {
      if (this.mostrarForm1) {
        this.caract = this.getCaractMacro[0];
        this.num = 1;
      } else if (this.mostrarForm2) {
        this.caract = this.getCaractMacro[1];
        this.num = 2;
      } else {
        this.caract = this.getCaractMacro[2];
        this.num = 3;
      }

      this.$modal.show("modal_eliminar_caract");
    },
    cambiarVariable: function cambiarVariable() {
      this.modificarForm = false;
    },
    cancelar: function cancelar() {
      if (this.mostrarForm1) {
        this.mostrarForm1 = false;
        this.mostrar1 = false;
        this.mostrarBtnAgregar = true;
      } else if (this.mostrarForm2) {
        this.mostrarForm2 = false;
        this.cambiarActive(1);
        this.mostrar2 = false;
        this.mostrarBtnAgregar = true;
      } else if (this.mostrarForm3) {
        this.mostrarForm3 = false;
        this.cambiarActive(2);
        this.mostrar3 = false;
        this.mostrarBtnAgregar = true;
      }
    },
    abrirForm: function abrirForm() {
      if (!this.mostrar1) {
        this.cambiarActive(1);
        this.mostrar1 = true;
        this.mostrarBtnAgregar = false;
      } else if (this.getCaractMacro[0] && !this.mostrar2) {
        this.cambiarActive(2);
        this.mostrar2 = true;
        this.mostrarBtnAgregar = false;
      } else if (this.getCaractMacro[1] && !this.mostrar3) {
        this.cambiarActive(3);
        this.mostrar3 = true;
        this.mostrarBtnAgregar = false;
      }
    },
    llenarForms: function llenarForms() {
      if (this.getCaractMacro[0]) {
        this.medio1 = this.getCaractMacro[0].medio;
        this.mostrar1 = true;
      }

      if (this.getCaractMacro[1]) {
        this.medio2 = this.getCaractMacro[1].medio;
        this.mostrar2 = true;
      }

      if (this.getCaractMacro[2]) {
        this.medio3 = this.getCaractMacro[2].medio;
        this.mostrar3 = true;
        this.mostrarBtnAgregar = false;
      }
    },
    cambiarActive: function cambiarActive(num) {
      switch (num) {
        case 1:
          this.active1 = "active";
          this.active2 = "";
          this.active3 = "";
          this.mostrarForm1 = true;
          this.mostrarForm2 = false;
          this.mostrarForm3 = false;
          break;

        case 2:
          this.active1 = "";
          this.active2 = "active";
          this.active3 = "";
          this.mostrarForm1 = false;
          this.mostrarForm2 = true;
          this.mostrarForm3 = false;
          break;

        case 3:
          this.active1 = "";
          this.active2 = "";
          this.active3 = "active";
          this.mostrarForm1 = false;
          this.mostrarForm2 = false;
          this.mostrarForm3 = true;
          break;
      }
    },
    formatear: function formatear(num) {
      switch (num) {
        case 1:
          if (this.mostrar3) {
            this.mostrar3 = false;
            this.cambiarActive(2);
          } else if (this.mostrar2) {
            this.mostrar2 = false;
            this.cambiarActive(1);
          } else {
            this.mostrar1 = false;
            this.mostrarForm1 = false;
          }

          break;

        case 2:
          if (this.mostrar3) {
            this.mostrar3 = false;
            this.cambiarActive(2);
          } else {
            this.mostrar2 = false;
            this.cambiarActive(1);
          }

          break;

        case 3:
          this.mostrar3 = false;
          this.cambiarActive(2);
          break;
      }
    }
  },
  computed: {
    computedActive1: function computedActive1() {
      return this.active1;
    },
    computedActive2: function computedActive2() {
      return this.active2;
    },
    computedActive3: function computedActive3() {
      return this.active3;
    },
    computedMostrarForm1: function computedMostrarForm1() {
      return this.mostrarForm1;
    },
    computedMostrarForm2: function computedMostrarForm2() {
      return this.mostrarForm2;
    },
    computedMostrarForm3: function computedMostrarForm3() {
      return this.mostrarForm3;
    },
    mostrarForms: function mostrarForms() {
      if (!this.getCaractMacro[0] && !this.mostrar1) {
        this.mostrarForm1 = false;
        return false;
      } else {
        this.llenarForms();
        return true;
      }
    },
    mostrarBtnEliminar: function mostrarBtnEliminar() {
      if (this.getCaractMacro[0] && this.mostrarForm1) {
        return true;
      } else if (this.getCaractMacro[1] && this.mostrarForm2) {
        return true;
      } else if (this.getCaractMacro[2] && this.mostrarForm3) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar: function mostrarBtnCancelar() {
      if (!this.getCaractMacro[0] && this.mostrarForm1) {
        return true;
      } else if (!this.getCaractMacro[1] && this.mostrarForm2) {
        return true;
      } else if (!this.getCaractMacro[2] && this.mostrarForm3) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnAgregarComputed: function mostrarBtnAgregarComputed() {
      return this.mostrarBtnAgregar;
    },
    medio1: {
      get: function get() {
        if (this.getCaractMacro[0]) {
          return this.getCaractMacro[0].medio;
        }
      },
      set: function set() {}
    },
    medio2: {
      get: function get() {
        if (this.getCaractMacro[1]) {
          return this.getCaractMacro[1].medio;
        }
      },
      set: function set() {}
    },
    medio3: {
      get: function get() {
        if (this.getCaractMacro[2]) {
          return this.getCaractMacro[2].medio;
        }
      },
      set: function set() {}
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoCaractMacroMixin);

/***/ }),

/***/ "./resources/js/mixins/obtenerImagenCroopieCepas.js":
/*!**********************************************************!*\
  !*** ./resources/js/mixins/obtenerImagenCroopieCepas.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var obtenerImagenCroopieCepasMixin = {
  data: function data() {
    return {
      imagenMiniatura: "",
      imagenError: ""
    };
  },
  methods: {
    cambiarValorImagen: function cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.validarTipoForm) {
          this.parametros.imagen = this.info.imagen;
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
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
    cargarImagen: function cargarImagen(file) {
      var _this = this;

      var reader = new Image();

      reader.onload = function (e) {
        _this.imagenMiniatura = reader.src;
      };

      reader.src = URL.createObjectURL(file);
    }
  },
  computed: {
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    },
    mostrarBtnCroppie: function mostrarBtnCroppie() {
      if (this.info) {
        if (this.imagenMiniatura != this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    validarCroppie: function validarCroppie() {
      if (this.info) {
        if (this.imagenMiniatura == this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (obtenerImagenCroopieCepasMixin);

/***/ })

}]);