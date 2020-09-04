(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caract-bioqui-hongo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopie3Imagenes */ "./resources/js/mixins/obtenerImagenCroopie3Imagenes.js");
/* harmony import */ var _CroppieCepasComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CroppieCepasComponent.vue */ "./resources/js/components/cepas/CroppieCepasComponent.vue");
/* harmony import */ var _ImagenesComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ImagenesComponent.vue */ "./resources/js/components/cepas/ImagenesComponent.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CroppieCepas: _CroppieCepasComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Imagenes: _ImagenesComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["info", "modificarInfo"],
  watch: {
    modificarInfo: function modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  data: function data() {
    return {
      parametros: {
        cepaId: "",
        enzimas: "",
        azucares: "",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido"
      }
    };
  },
  validations: {
    parametros: {
      enzimas: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      azucares: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      imagen1: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      imagen2: {
        required: function required(value) {
          if (value == "" && this.cantImagenes > 1) return false;
          return true;
        }
      },
      imagen3: {
        required: function required(value) {
          if (value == "" && this.cantImagenes == 3) return false;
          return true;
        }
      }
    }
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;
      this.$v.parametros.$touch();

      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Característica") {
          axios.post("/cepas/hongo/caract-bioqui", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;
              _this.errors = [];
              _this.$refs.inputImagen.value = "";
              _this.tituloForm = "Editar Característica";
              _this.nomBtn = "Editar";

              _this.$emit("agregar", res.data);

              _this.toastr("Agregar Características Bioquímicas", "Características Bioquímicas agregadas con exito!!", "success");
            }
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        } else {
          axios.put("/cepas/hongo/caract-bioqui/".concat(this.info.id), this.parametros).then(function (res) {
            _this.bloquearBtn = false;
            _this.errors = [];

            _this.$emit("editar", res.data);

            _this.toastr("Editar Características Bioquímicas", "Características Bioquímicas editadas con exito!!", "success");
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
      this.imagenes = [];
      this.parametros.enzimas = this.info.enzimas;
      this.parametros.azucares = this.info.azucares;
      this.parametros.otras_caract = this.info.otras_caracteristicas;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.llenarArregloImagenes();
    },
    accionImagen: function accionImagen(data) {
      this.$emit("editar", data);
    }
  },
  computed: {
    validarTipoForm: function validarTipoForm() {
      if (this.tituloForm === "Agregar Característica") {
        return true;
      } else {
        return false;
      }
    },
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Característica") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    }
  },
  mounted: function mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Característica";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Característica";
      this.nomBtn = "Agregar";
    }

    if (this.$route.params.cepaHongoId) {
      this.parametros.cepaId = this.$route.params.cepaHongoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _forms_caract_FormCaractBioquiComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms-caract/FormCaractBioquiComponent.vue */ "./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue");
/* harmony import */ var _ModalEliminarCaractComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ModalEliminarCaractComponent.vue */ "./resources/js/components/cepas/ModalEliminarCaractComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FormCaractBioqui: _forms_caract_FormCaractBioquiComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModalEliminar: _ModalEliminarCaractComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      mostrarBtnAgregar: true,
      mostrarForm: false,
      modificarForm: false
    };
  },
  methods: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract", "accionEliminarCaract"])), {}, {
    agregar: function agregar(data) {
      this.accionAgregarCaract({
        tipo: "bioqui",
        data: data
      });
    },
    editar: function editar(data) {
      this.accionEditarCaract({
        tipo: "bioqui",
        data: data
      });
      this.modificarForm = true;
    },
    eliminar: function eliminar(data) {
      this.accionEliminarCaract({
        tipo: "bioqui",
        data: data
      });
      this.mostrarBtnAgregar = true;
      this.mostrarForm = false;
    },
    cambiarVariable: function cambiarVariable() {
      this.modificarForm = false;
    },
    btnAgregar: function btnAgregar() {
      this.mostrarForm = true;
      this.mostrarBtnAgregar = false;
    },
    cancelar: function cancelar() {
      this.mostrarForm = false;
      this.mostrarBtnAgregar = true;
    }
  }),
  computed: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getCaractBioqui"])), {}, {
    mostrarBtnEliminar: function mostrarBtnEliminar() {
      if (this.getCaractBioqui) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar: function mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getCaractBioqui) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnAgregarComputed: function mostrarBtnAgregarComputed() {
      return this.mostrarBtnAgregar;
    }
  }),
  mounted: function mounted() {
    if (this.getCaractBioqui) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=21ef52ac&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=21ef52ac& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mt-4" }, [
    _c("div", { staticClass: "row justify-content-md-center" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title" }, [
              _vm._v(_vm._s(_vm.tituloForm))
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
                  _c("label", { attrs: { for: "enzimas" } }, [
                    _vm._v("Enzimas")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.trim",
                        value: _vm.$v.parametros.enzimas.$model,
                        expression: "$v.parametros.enzimas.$model",
                        modifiers: { trim: true }
                      }
                    ],
                    class: [
                      "form-control",
                      _vm.$v.parametros.enzimas.$error
                        ? "error-input-select"
                        : ""
                    ],
                    attrs: {
                      name: "enzimas",
                      id: "enzimas",
                      placeholder: "...",
                      type: "text"
                    },
                    domProps: { value: _vm.$v.parametros.enzimas.$model },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.parametros.enzimas,
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
                  _vm.$v.parametros.enzimas.$error &&
                  !_vm.$v.parametros.enzimas.required
                    ? _c("em", { staticClass: "text-error-input" }, [
                        _vm._v(_vm._s(_vm.mensajes.required))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c("label", { attrs: { for: "azucares" } }, [
                    _vm._v("Azúcares")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.trim",
                        value: _vm.$v.parametros.azucares.$model,
                        expression: "$v.parametros.azucares.$model",
                        modifiers: { trim: true }
                      }
                    ],
                    class: [
                      "form-control",
                      _vm.$v.parametros.azucares.$error
                        ? "error-input-select"
                        : ""
                    ],
                    attrs: {
                      name: "azucares",
                      id: "azucares",
                      placeholder: "...",
                      type: "text"
                    },
                    domProps: { value: _vm.$v.parametros.azucares.$model },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.parametros.azucares,
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
                  _vm.$v.parametros.azucares.$error &&
                  !_vm.$v.parametros.azucares.required
                    ? _c("em", { staticClass: "text-error-input" }, [
                        _vm._v(_vm._s(_vm.mensajes.required))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c("label", { attrs: { for: "otras_caract" } }, [
                    _vm._v("Otras Características")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parametros.otras_caract,
                        expression: "parametros.otras_caract"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "otras_caract", id: "otras_caract" },
                    domProps: { value: _vm.parametros.otras_caract },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.parametros,
                          "otras_caract",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.validarTipoForm
                  ? [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "imagen" } }, [
                            _vm._v("Imágenes")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "inputImagen",
                            class: [
                              "form-control-file",
                              _vm.$v.parametros.imagen1.$error ||
                              _vm.$v.parametros.imagen2.$error ||
                              _vm.$v.parametros.imagen3.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "imagen",
                              id: "imagen",
                              type: "file",
                              accept: "image/jpeg, image/png",
                              multiple: ""
                            },
                            on: { change: _vm.obtenerImagenes }
                          }),
                          _vm._v(" "),
                          _vm.erroresImagenes
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.erroresImagenes))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          (_vm.$v.parametros.imagen1.$error &&
                            !_vm.$v.parametros.imagen1.required) ||
                          (_vm.$v.parametros.imagen2.$error &&
                            !_vm.$v.parametros.imagen2.required) ||
                          (_vm.$v.parametros.imagen3.$error &&
                            !_vm.$v.parametros.imagen3.required)
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
                        ]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "mb-2 mr-2 btn btn-block",
                    class: _vm.btnClase,
                    attrs: { disabled: _vm.bloquearBtn }
                  },
                  [_vm._v(_vm._s(_vm.nomBtn))]
                )
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.validarTipoForm
                ? [
                    _vm.imagenesCroppie.length === _vm.cantImagenes &&
                    _vm.$refs.inputImagen.value
                      ? [
                          _c("CroppieCepas", {
                            attrs: {
                              imagenes: _vm.imagenesCroppie,
                              posicion: "vertical"
                            },
                            on: { cambiarValorImagen: _vm.cambiarValorImagen }
                          })
                        ]
                      : [_vm._m(0)]
                  ]
                : [
                    _c("Imagenes", {
                      attrs: {
                        parametros: _vm.parametros,
                        tipoCepa: "hongo/caract-bioqui",
                        imagenes: _vm.imagenes,
                        cepa: _vm.info
                      },
                      on: { accionImagen: _vm.accionImagen }
                    })
                  ]
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
          _c("b", { staticClass: "text-success" }, [_vm._v("SIN IMÁGENES")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=25e3e11e&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=25e3e11e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "mb-3 card" },
          [
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
                      on: {
                        click: function($event) {
                          return _vm.$modal.show("modal_eliminar_caract")
                        }
                      }
                    },
                    [_vm._v("Eliminar Características")]
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
                      on: { click: _vm.btnAgregar }
                    },
                    [_vm._v("Agregar Características")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm.mostrarForm
              ? [
                  _c("FormCaractBioqui", {
                    attrs: {
                      modificarInfo: _vm.modificarForm,
                      info: _vm.getCaractBioqui
                    },
                    on: {
                      agregar: _vm.agregar,
                      editar: _vm.editar,
                      cambiarVariable: _vm.cambiarVariable
                    }
                  })
                ]
              : [_vm._m(1)]
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("ModalEliminar", {
        attrs: {
          tipo: "Característica",
          tipoCaract: "Característica Bioquímica",
          caract: _vm.getCaractBioqui,
          url: "hongo/caract-bioqui"
        },
        on: { eliminar: _vm.eliminar }
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
        _vm._v("\n          Características Bioquímicas\n        ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO LAS CARACTERÍSTICAS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormCaractBioquiComponent_vue_vue_type_template_id_21ef52ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormCaractBioquiComponent.vue?vue&type=template&id=21ef52ac& */ "./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=21ef52ac&");
/* harmony import */ var _FormCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCaractBioquiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormCaractBioquiComponent_vue_vue_type_template_id_21ef52ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormCaractBioquiComponent_vue_vue_type_template_id_21ef52ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractBioquiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=21ef52ac&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=21ef52ac& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_template_id_21ef52ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractBioquiComponent.vue?vue&type=template&id=21ef52ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=21ef52ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_template_id_21ef52ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_template_id_21ef52ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoCaractBioquiComponent_vue_vue_type_template_id_25e3e11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoCaractBioquiComponent.vue?vue&type=template&id=25e3e11e& */ "./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=25e3e11e&");
/* harmony import */ var _InfoCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoCaractBioquiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoCaractBioquiComponent_vue_vue_type_template_id_25e3e11e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoCaractBioquiComponent_vue_vue_type_template_id_25e3e11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractBioquiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=25e3e11e&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=25e3e11e& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_template_id_25e3e11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractBioquiComponent.vue?vue&type=template&id=25e3e11e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=25e3e11e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_template_id_25e3e11e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_template_id_25e3e11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);