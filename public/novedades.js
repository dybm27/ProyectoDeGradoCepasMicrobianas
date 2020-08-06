(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["novedades"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websockets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../mixins/websockets */ "./resources/js/mixins/websockets.js");
/* harmony import */ var _mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/abrirCerrarFormulario */ "./resources/js/mixins/abrirCerrarFormulario.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TablaComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TablaComponent.vue */ "./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue");
/* harmony import */ var _FormComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormComponent.vue */ "./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Tabla: _TablaComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Form: _FormComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapGetters(["getPermisoByNombre"])),
  mixins: [Object(_mixins_websockets__WEBPACK_IMPORTED_MODULE_0__["default"])("Novedad", "novedades"), Object(_mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_1__["default"])("Novedad")],
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopie */ "./resources/js/mixins/obtenerImagenCroopie.js");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
/* harmony import */ var _editor_texto_EditorTextoComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../editor-texto/EditorTextoComponent.vue */ "./resources/js/components/editor-texto/EditorTextoComponent.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Editor: _editor_texto_EditorTextoComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["idNovedad"],
  data: function data() {
    return {
      info: "",
      parametros: {
        titulo: "",
        link: "",
        cuerpo: "",
        imagen: "",
        publicar: false,
        tipo: "novedad",
        imagenesEditor: [],
        imagenesGuardadas: []
      },
      selectTipo: "link",
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      imagenError: "",
      mensajeTitulo: "",
      mensajeLink: "",
      errors: [],
      bloquearBtn: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_obtenerImagenCroopie__WEBPACK_IMPORTED_MODULE_2__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("publicidad", ["accionNovedad"]), {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;

      if (this.tituloForm === "Agregar Novedad") {
        axios.post("/publicidad", this.parametros).then(function (res) {
          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
            window.location.href = "/";
          } else {
            _this.bloquearBtn = false;

            _this.toastr("Agregar Novedad", "Novedad agregada con exito!!", "success");

            _this.accionNovedad({
              tipo: "agregar",
              data: res.data
            });

            _this.$emit("cambiarVariableFormulario");
          }
        })["catch"](function (error) {
          _this.bloquearBtn = false;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!", "", "error");
        });
      } else {
        axios.put("/publicidad/".concat(this.idNovedad), this.parametros).then(function (res) {
          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
            window.location.href = "/";
          } else {
            _this.bloquearBtn = false;

            _this.toastr("Editar Novedad", "Novedad editada con exito!!", "success");

            window.Echo["private"]("desbloquearBtnsNovedad").whisper("desbloquearBtnsNovedad", {
              id: res.data.id
            });
            window.Echo["private"]("desbloquearCheckNovedad").whisper("desbloquearCheckNovedad", {
              id: res.data.id
            });

            _this.$events.fire("eliminarMiBloqueoNovedad", {
              id: res.data.id
            });

            _this.accionNovedad({
              tipo: "editar",
              data: res.data
            });

            _this.$emit("cambiarVariableFormulario");
          }
        })["catch"](function (error) {
          _this.bloquearBtn = false;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!", "", "error");
        });
      }
    },
    llenarInfo: function llenarInfo() {
      this.parametros.titulo = this.info.titulo;
      this.parametros.cuerpo = this.info.cuerpo;
      this.parametros.link = this.info.link;

      if (this.info.cuerpo) {
        this.selectTipo = "texto";
      }

      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;

      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
    aceptarContenido: function aceptarContenido(data) {
      this.parametros.cuerpo = data.contenido;
      this.parametros.imagenesEditor = data.imagenesEditor;
      this.parametros.imagenesGuardadas = data.imagenesGuardadas;
    },
    modificarContenido: function modificarContenido() {
      this.parametros.cuerpo = "";
    },
    cambiarDatos: function cambiarDatos() {
      if (this.selectTipo === "texto") {
        this.parametros.link = "";
      } else {
        this.parametros.cuerpo = "";
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("publicidad", ["getNovedadById", "getNovedadByTitulo"]), {
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Novedad") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required: function required() {
      if (this.tituloForm === "Agregar Novedad") {
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
    validarTitulo: function validarTitulo() {
      if (this.parametros.titulo) {
        var titulo = this.getNovedadByTitulo(this.parametros.titulo);

        if (titulo) {
          if (titulo.id != this.info.id) {
            this.mensajeTitulo = "Ya existe una novedad con ese titulo";
            return true;
          }

          return false;
        }

        return false;
      }

      return false;
    },
    validarLink: function validarLink() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      var letters = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

      if (this.parametros.link) {
        if (!letters.test(this.parametros.link)) {
          this.mensajeLink = "El link no tiene un formato valido.";
          return true;
        }

        return false;
      }

      return false;
    },
    validarCuerpo: function validarCuerpo() {
      if (this.selectTipo == "texto" && !this.parametros.cuerpo) {
        return true;
      }

      return false;
    },
    validarBtn: function validarBtn() {
      if (this.validarTitulo || this.selectTipo == "link" && this.validarLink || this.validarCuerpo || !this.parametros.imagen) {
        return true;
      }

      return false;
    }
  }),
  created: function created() {
    if (this.idNovedad === 0) {
      this.tituloForm = "Agregar Novedad";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getNovedadById(this.idNovedad);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Novedad";
      this.nomBtn = "Editar";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/sitio-web/publicidad/novedades/columnas.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/websocketsTabla */ "./resources/js/mixins/websocketsTabla.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
        field: "titulo",
        direction: "asc"
      }],
      id: "",
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], Object(_mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_2__["default"])("Novedad")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_3__["default"].mapGetters("publicidad", ["getNovedades"]), {
    mostrarTabla: function mostrarTabla() {
      if (this.getNovedades != null && this.getNovedades != "") {
        return true;
      }

      return false;
    }
  }),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_3__["default"].mapActions("publicidad", ["accionNovedad"]), {
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarNovedad: function eliminarNovedad() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/publicidad/".concat(this.id), {
        data: {
          tipo: "novedad"
        }
      }).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.toastr("Eliminar Novedad", "Novedad eliminada con exito!!", "success");

          _this.accionNovedad({
            tipo: "eliminar",
            data: res.data
          });

          _this.actualizarTabla();

          _this.$modal.hide("modal_eliminar_novedad");
        }
      })["catch"](function (error) {
        _this.bloquearBtnModal = false;

        _this.toastr("Error!!!!", "", "error");
      });
    }
  }),
  created: function created() {
    this.$emit("cambiarTipo", "tabla");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2& ***!
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
                _vm.getPermisoByNombre("agregar-novedad")
                  ? _c(
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
                attrs: { idNovedad: _vm.id },
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
        _vm._v("\n      Tabla Dinámica Novedades\n    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=template&id=36ad74d6&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=template&id=36ad74d6& ***!
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
  return _c(
    "div",
    { staticClass: "container mt-3 ml-2 mr-2" },
    [
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
                      _c("label", { attrs: { for: "titulo" } }, [
                        _vm._v("Título")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.titulo,
                            expression: "parametros.titulo"
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.validarTitulo ? "is-invalid" : ""
                        ],
                        attrs: {
                          name: "titulo",
                          id: "titulo",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.titulo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "titulo",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.validarTitulo
                        ? _c("em", { staticClass: "error invalid-feedback" }, [
                            _vm._v(_vm._s(_vm.mensajeTitulo))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "select" } }, [
                        _vm._v("Contenido de la Novedad:")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectTipo,
                              expression: "selectTipo"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "select",
                            id: "conidioforo",
                            disabled: !_vm.required
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.selectTipo = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.cambiarDatos
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "link" } }, [
                            _vm._v("Link")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "texto" } }, [
                            _vm._v("Texto")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.selectTipo == "link"
                      ? [
                          _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c("label", { attrs: { for: "link" } }, [
                                _vm._v("Link")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.link,
                                    expression: "parametros.link"
                                  }
                                ],
                                class: [
                                  "form-control",
                                  _vm.validarLink ? "is-invalid" : ""
                                ],
                                attrs: {
                                  name: "link",
                                  id: "link",
                                  placeholder: "...",
                                  type: "text",
                                  required: ""
                                },
                                domProps: { value: _vm.parametros.link },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.parametros,
                                      "link",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.validarLink
                                ? _c(
                                    "em",
                                    { staticClass: "error invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.mensajeLink))]
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
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
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
                          [_vm._v("Desea publicar la Novedad?")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "mb-2 mr-2 btn btn-block",
                        class: _vm.btnClase,
                        attrs: { disabled: _vm.validarBtn || _vm.bloquearBtn }
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
      ]),
      _vm._v(" "),
      _vm.selectTipo == "texto"
        ? [
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Elaborar Novedad")
                      ]),
                      _vm._v(" "),
                      _c("Editor", {
                        attrs: { info: _vm.info, quienesSomos: false },
                        on: {
                          contenido: _vm.aceptarContenido,
                          modificar: _vm.modificarContenido
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        : _vm._e()
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
          _c("b", { staticClass: "text-success" }, [_vm._v("SIN IMAGEN")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=template&id=cc7a6034&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=template&id=cc7a6034& ***!
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
                "api-url": "/info-panel/novedades-tabla",
                fields: _vm.fields,
                "sort-order": _vm.sortOrder,
                nameGet: "novedades"
              }
            })
          ]
        : [_vm._m(0)],
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_novedad",
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
                [_vm._v("Eliminar Novedad")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_novedad")
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
              _c("p", [_vm._v("Esta segura/o de eliminar la Novedad?.")])
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
                      return _vm.$modal.hide("modal_eliminar_novedad")
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
                  attrs: { type: "button", disabled: _vm.bloquearBtnModal },
                  on: { click: _vm.eliminarNovedad }
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
            _vm._v("AÚN NO SE HAN AGREGADO NOVEDADES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=template&id=e241a9e2& */ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2&");
/* harmony import */ var _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=template&id=e241a9e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormComponent_vue_vue_type_template_id_36ad74d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=template&id=36ad74d6& */ "./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=template&id=36ad74d6&");
/* harmony import */ var _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormComponent_vue_vue_type_template_id_36ad74d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormComponent_vue_vue_type_template_id_36ad74d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=template&id=36ad74d6&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=template&id=36ad74d6& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_36ad74d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=template&id=36ad74d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/FormComponent.vue?vue&type=template&id=36ad74d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_36ad74d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_36ad74d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaComponent_vue_vue_type_template_id_cc7a6034___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=template&id=cc7a6034& */ "./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=template&id=cc7a6034&");
/* harmony import */ var _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaComponent_vue_vue_type_template_id_cc7a6034___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaComponent_vue_vue_type_template_id_cc7a6034___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=template&id=cc7a6034&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=template&id=cc7a6034& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_cc7a6034___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=template&id=cc7a6034& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/TablaComponent.vue?vue&type=template&id=cc7a6034&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_cc7a6034___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_cc7a6034___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/columnas.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/columnas.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "titulo",
  sortField: "titulo",
  title: "Titulo",
  titleClass: "text-center"
}, {
  name: "__component:checkboxs_novedades",
  title: "Publicar",
  titleClass: "text-center",
  dataClass: "text-center",
  sortField: "publicar"
}, {
  name: "__component:acciones_novedades",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ })

}]);