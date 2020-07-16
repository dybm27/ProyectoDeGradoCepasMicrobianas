(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proyectos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_websockets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/websockets */ "./resources/js/mixins/websockets.js");
/* harmony import */ var _mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/abrirCerrarFormulario */ "./resources/js/mixins/abrirCerrarFormulario.js");
/* harmony import */ var _TablaComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TablaComponent.vue */ "./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue");
/* harmony import */ var _FormComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormComponent.vue */ "./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Tabla: _TablaComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Form: _FormComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [Object(_mixins_websockets__WEBPACK_IMPORTED_MODULE_1__["default"])("Proyecto", "proyectos"), Object(_mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_2__["default"])("Proyecto")],
  methods: {
    cambiarTipo: function cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  },
  created: function created() {
    this.$emit("rutaHijo", window.location.pathname);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopie */ "./resources/js/mixins/obtenerImagenCroopie.js");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
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
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["idProyecto"],
  data: function data() {
    return {
      info: "",
      parametros: {
        nombre_documento: "",
        nombre_autor: "",
        archivo: "",
        descripcion: "",
        imagen: "",
        publicar: false,
        tipo: "proyecto"
      },
      tituloCroppie: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      archivoError: "",
      mensajeNombreProyecto: "",
      mensajeNombreAutor: "",
      traerValorImg: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_obtenerImagenCroopie__WEBPACK_IMPORTED_MODULE_2__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("documentos", ["accionProyecto"]), {
    evento: function evento() {
      var _this = this;

      if (this.tituloCroppie === "Agregar Proyecto") {
        var form = new CroppieData();
        form.append("nombre_documento", this.parametros.nombre_documento);
        form.append("nombre_autor", this.parametros.nombre_autor);
        form.append("descripcion", this.parametros.descripcion);
        form.append("archivo", this.parametros.archivo);
        form.append("imagen", this.parametros.imagen);

        if (this.parametros.publicar) {
          form.append("publicar", 1);
        } else {
          form.append("publicar", 0);
        }

        form.append("tipo", this.parametros.tipo);
        axios.post("/documentos", form, {
          headers: {
            "content-type": "multipart/form-data"
          }
        }).then(function (res) {
          _this.toastr("Agregar Proyecto", "Proyecto agregado con exito!!", "success");

          _this.accionProyecto({
            tipo: "agregar",
            data: res.data
          });

          _this.$emit("cambiarVariableCroppieulario");
        })["catch"](function (error) {
          if (error.response) {
            _this.errors = [];
            _this.errors = error.response.data.errors;

            _this.toastr("Error!!", "", "error");
          }
        });
      } else {
        axios.put("/documentos/".concat(this.idProyecto), this.parametros).then(function (res) {
          _this.toastr("Editar Proyecto", "Proyecto editado con exito!!", "success");

          window.Echo["private"]("desbloquearBtnsProyecto").whisper("desbloquearBtnsProyecto", {
            id: res.data.id
          });
          window.Echo["private"]("desbloquearCheckProyecto").whisper("desbloquearCheckProyecto", {
            id: res.data.id
          });

          _this.$events.fire("spliceMisBloqueosProyecto", {
            id: res.data.id
          });

          _this.accionProyecto({
            tipo: "editar",
            data: res.data
          });

          _this.$emit("cambiarVariableCroppieulario");
        })["catch"](function (error) {
          if (error.response) {
            _this.errors = [];
            _this.errors = error.response.data.errors;

            _this.toastr("Error!!", "", "error"); // console.log(error.response.data);

          }
        });
      }
    },
    llenarInfo: function llenarInfo() {
      this.parametros.nombre_documento = this.info.nombre_documento;
      this.parametros.nombre_autor = this.info.nombre_autor;
      this.parametros.descripcion = this.info.descripcion;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;

      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
    obtenerArchivo: function obtenerArchivo(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.pdf)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 20000000) {
          this.archivoError = "El archivo debe ser en formato .pdf y menor a 20Mb.";
          this.$refs.inputArchivo.value = "";
          this.parametros.archivo = this.info.imagen;
        } else {
          this.parametros.archivo = file;
          this.archivoError = "";
        }
      } else {
        this.parametros.archivo = "";
        this.$refs.inputArchivo.value = "";
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("documentos", ["getProyectoById", "getProyectoByNombre"]), {
    btnClase: function btnClase() {
      if (this.tituloCroppie === "Agregar Proyecto") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required: function required() {
      if (this.tituloCroppie === "Agregar Proyecto") {
        return true;
      } else {
        return false;
      }
    },
    titulo: function titulo() {
      return this.tituloCroppie;
    },
    nomBtnComputed: function nomBtnComputed() {
      return this.nomBtn;
    },
    validarNombreProyecto: function validarNombreProyecto() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      var letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;

      if (this.parametros.nombre_documento) {
        if (!letters.test(this.parametros.nombre_documento)) {
          this.mensajeNombreProyecto = "Solo se admiten letras.";
          return true;
        } else {
          if (this.getProyectoByNombre(this.parametros.nombre_documento)) {
            if (this.getProyectoByNombre(this.parametros.nombre_documento).id != this.info.id) {
              this.mensajeNombreProyecto = "Ya existe un proyecto con ese nombre";
              return true;
            }

            return false;
          }

          return false;
        }
      }

      return false;
    },
    validarNombreAutor: function validarNombreAutor() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      var letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;

      if (this.parametros.nombre_autor) {
        if (!letters.test(this.parametros.nombre_autor)) {
          this.mensajeNombreAutor = "Solo se admiten letras.";
          return true;
        }

        return false;
      }

      return false;
    },
    validarBtn: function validarBtn() {
      if (this.validarNombreProyecto || this.validarNombreAutor || !this.parametros.imagen) {
        return true;
      }

      return false;
    }
  }),
  created: function created() {
    if (this.idProyecto === 0) {
      this.tituloCroppie = "Agregar Proyecto";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getProyectoById(this.idProyecto);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloCroppie = "Editar Proyecto";
      this.nomBtn = "Editar";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/sitio-web/documentos/proyectos/columnas.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mixins/websocketsTabla */ "./resources/js/mixins/websocketsTabla.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "nombre_documento",
        direction: "asc"
      }],
      id: ""
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_3__["default"])("Proyecto")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("documentos", ["getProyectos"]), {
    mostrarTabla: function mostrarTabla() {
      if (this.getProyectos != "") {
        return true;
      }

      return false;
    }
  }),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("documentos", ["accionProyecto"]), {
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarProyecto: function eliminarProyecto() {
      var _this = this;

      axios["delete"]("/documentos/".concat(this.id), {
        data: {
          tipo: "proyecto"
        }
      }).then(function (res) {
        _this.$modal.hide("modal_eliminar_proyecto");

        _this.toastr("Eliminar Proyecto", "Proyecto eliminado con exito!!", "success");

        _this.accionProyecto({
          tipo: "eliminar",
          data: res.data
        });

        _this.actualizarTabla();
      })["catch"](function (error) {
        _this.toastr("Error!!!!", "", "error");
      });
    }
  }),
  created: function created() {
    this.$emit("cambiarTipo", "tabla");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=template&id=3142744e&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=template&id=3142744e& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
                    on: {
                      click: function($event) {
                        return _vm.abrirFormulario(0)
                      }
                    }
                  },
                  [_vm._v("Agregar")]
                )
              ]
            : [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",
                    on: { click: _vm.cerrarFormulario }
                  },
                  [_vm._v("Cancelar")]
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
                attrs: { idProyecto: _vm.id },
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
        _vm._v("\n      Tabla Dinámica Proyectos\n    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=template&id=57a32037&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=template&id=57a32037& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "nombre_documento" } }, [
                      _vm._v("Nombre Proyecto")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.parametros.nombre_documento,
                          expression: "parametros.nombre_documento"
                        }
                      ],
                      class: [
                        "form-control",
                        _vm.validarNombreProyecto ? "is-invalid" : ""
                      ],
                      attrs: {
                        name: "nombre_documento",
                        id: "nombre_documento",
                        placeholder: "...",
                        type: "text",
                        required: ""
                      },
                      domProps: { value: _vm.parametros.nombre_documento },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.parametros,
                            "nombre_documento",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.validarNombreProyecto
                      ? _c("em", { staticClass: "error invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.mensajeNombreProyecto))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "nombre_autor" } }, [
                      _vm._v("Nombre Autor")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.parametros.nombre_autor,
                          expression: "parametros.nombre_autor"
                        }
                      ],
                      class: [
                        "form-control",
                        _vm.validarNombreAutor ? "is-invalid" : ""
                      ],
                      attrs: {
                        name: "nombre_autor",
                        id: "nombre_autor",
                        placeholder: "...",
                        type: "text",
                        required: ""
                      },
                      domProps: { value: _vm.parametros.nombre_autor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.parametros,
                            "nombre_autor",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.validarNombreAutor
                      ? _c("em", { staticClass: "error invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.mensajeNombreAutor))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.required
                    ? [
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "archivo" } }, [
                              _vm._v("Archivo")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              ref: "inputArchivo",
                              class: [
                                "form-control-file",
                                _vm.archivoError != "" ? "is-invalid" : ""
                              ],
                              attrs: {
                                name: "archivo",
                                id: "archivo",
                                accept: "application/pdf",
                                type: "file",
                                required: ""
                              },
                              on: { change: _vm.obtenerArchivo }
                            }),
                            _vm._v(" "),
                            _vm.archivoError
                              ? _c(
                                  "em",
                                  { staticClass: "error invalid-feedback" },
                                  [_vm._v(_vm._s(_vm.archivoError))]
                                )
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
                        _vm.imagenError != "" ? "is-invalid" : ""
                      ],
                      attrs: {
                        name: "imagen",
                        id: "imagen",
                        accept: "image/jpeg, image/png",
                        type: "file",
                        required: _vm.required
                      },
                      on: { change: _vm.obtenerImagen }
                    }),
                    _vm._v(" "),
                    _vm.imagenError
                      ? _c("em", { staticClass: "error invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.imagenError))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "descripcion" } }, [
                      _vm._v("Descripción")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.parametros.descripcion,
                          expression: "parametros.descripcion"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "descripcion",
                        id: "descripcion",
                        placeholder: "...",
                        type: "text",
                        required: ""
                      },
                      domProps: { value: _vm.parametros.descripcion },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.parametros,
                            "descripcion",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "custom-checkbox custom-control mb-2" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.publicar,
                            expression: "parametros.publicar"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: { type: "checkbox", id: "publicar" },
                        domProps: {
                          checked: Array.isArray(_vm.parametros.publicar)
                            ? _vm._i(_vm.parametros.publicar, null) > -1
                            : _vm.parametros.publicar
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.parametros.publicar,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.parametros,
                                    "publicar",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.parametros,
                                    "publicar",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.parametros, "publicar", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "publicar" }
                        },
                        [_vm._v("Desea publicar el Proyecto?")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "mb-2 mr-2 btn btn-block",
                      class: _vm.btnClase,
                      attrs: { disabled: _vm.validarBtn }
                    },
                    [_vm._v(_vm._s(_vm.nomBtnComputed))]
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
                    _vm.mostraImagen === _vm.info.imagenPublica
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=template&id=d0fadeb6&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=template&id=d0fadeb6& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
                "api-url": "/info-panel/proyectos-tabla",
                fields: _vm.fields,
                "sort-order": _vm.sortOrder,
                nameGet: "proyectos"
              }
            })
          ]
        : [_vm._m(0)],
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_proyecto",
            classes: "my_modal",
            width: 400,
            height: 300
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
                [_vm._v("Eliminar Proyecto")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_proyecto")
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
              _c("p", [_vm._v("Esta segura/o de eliminar el Proyecto?.")])
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
                      return _vm.$modal.hide("modal_eliminar_proyecto")
                    }
                  }
                },
                [_vm._v("Cancelar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: { click: _vm.eliminarProyecto }
                },
                [_vm._v("Eliminar")]
              )
            ])
          ])
        ]
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
            _vm._v("AÚN NO SE HAN AGREGADO PROYECTOS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerComponent_vue_vue_type_template_id_3142744e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=template&id=3142744e& */ "./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=template&id=3142744e&");
/* harmony import */ var _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerComponent_vue_vue_type_template_id_3142744e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerComponent_vue_vue_type_template_id_3142744e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=template&id=3142744e&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=template&id=3142744e& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_3142744e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=template&id=3142744e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/ContainerComponent.vue?vue&type=template&id=3142744e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_3142744e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_3142744e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormComponent_vue_vue_type_template_id_57a32037___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=template&id=57a32037& */ "./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=template&id=57a32037&");
/* harmony import */ var _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormComponent_vue_vue_type_template_id_57a32037___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormComponent_vue_vue_type_template_id_57a32037___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=template&id=57a32037&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=template&id=57a32037& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_57a32037___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=template&id=57a32037& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/FormComponent.vue?vue&type=template&id=57a32037&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_57a32037___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_57a32037___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaComponent_vue_vue_type_template_id_d0fadeb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=template&id=d0fadeb6& */ "./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=template&id=d0fadeb6&");
/* harmony import */ var _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaComponent_vue_vue_type_template_id_d0fadeb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaComponent_vue_vue_type_template_id_d0fadeb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=template&id=d0fadeb6&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=template&id=d0fadeb6& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_d0fadeb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=template&id=d0fadeb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/documentos/proyectos/TablaComponent.vue?vue&type=template&id=d0fadeb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_d0fadeb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_d0fadeb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/documentos/proyectos/columnas.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/sitio-web/documentos/proyectos/columnas.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre_documento",
  sortField: "nombre_documento",
  title: "Nombre Proyecto",
  titleClass: "text-center"
}, {
  name: "nombre_autor",
  sortField: "nombre_autor",
  title: "Nombre Autor",
  titleClass: "text-center"
}, {
  name: "descripcion",
  sortField: "descripcion",
  title: "Descripción",
  titleClass: "text-center",
  dataClass: "text-justify"
}, {
  name: "__component:descargar_proyecto",
  title: "Ver",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "__component:checkboxs_proyectos",
  title: "Publicar",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "__component:acciones_proyectos",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ })

}]);