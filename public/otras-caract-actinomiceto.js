(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otras-caract-actinomiceto"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopie3Imagenes */ "./resources/js/mixins/obtenerImagenCroopie3Imagenes.js");
/* harmony import */ var _CroppieCepasComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CroppieCepasComponent */ "./resources/js/components/cepas/CroppieCepasComponent.vue");
/* harmony import */ var _ImagenesComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ImagenesComponent */ "./resources/js/components/cepas/ImagenesComponent.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CroppieCepas: _CroppieCepasComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    Imagenes: _ImagenesComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
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
      fijacion_nitrogeno: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      produccion_aia: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      solubili_fosforo: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      giberelinas: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      antagonismos: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      produccion_sideroforos: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      activi_enzimaticas: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      alta_produc_antibioticos: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      produccion_pha: {
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
        if (this.tituloForm === "Agregar Características") {
          axios.post("/cepas/actinomiceto/otras-caract", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;
              _this.errors = [];
              _this.$refs.inputImagen.value = "";
              _this.tituloForm = "Editar Características";
              _this.nomBtn = "Editar";

              _this.$emit("agregar", res.data);

              _this.toastr("Agregar Otras Característica", "Características agregadas con exito!!", "success");
            }
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        } else {
          axios.put("/cepas/actinomiceto/otras-caract/".concat(this.info.id), this.parametros).then(function (res) {
            _this.bloquearBtn = false;
            _this.errors = [];

            _this.$emit("editar", res.data);

            _this.toastr("Editar Otras Característica", "Características editadas con exito!!", "success");
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
      this.llenarArregloImagenes();
    },
    accionImagen: function accionImagen(data) {
      this.$emit("editar", data);
    }
  },
  computed: {
    validarTipoForm: function validarTipoForm() {
      if (this.tituloForm === "Agregar Características") {
        return true;
      } else {
        return false;
      }
    },
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Características") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    classRow: function classRow() {
      if (this.tituloForm === "Agregar Características") {
        return "col-md-4";
      } else {
        return "col-md-6";
      }
    }
  },
  mounted: function mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Características";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Características";
      this.nomBtn = "Agregar";
    }

    if (this.$route.params.cepaActinomicetoId) {
      this.parametros.cepaId = this.$route.params.cepaActinomicetoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _forms_caract_FormOtrasCaractComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms-caract/FormOtrasCaractComponent */ "./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue");
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
    FormOtrasCaract: _forms_caract_FormOtrasCaractComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
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
        tipo: "otras",
        data: data
      });
    },
    editar: function editar(data) {
      this.accionEditarCaract({
        tipo: "otras",
        data: data
      });
      this.modificarForm = true;
    },
    eliminar: function eliminar(data) {
      this.accionEliminarCaract({
        tipo: "otras",
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
  computed: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getOtrasCaract"])), {}, {
    mostrarBtnEliminar: function mostrarBtnEliminar() {
      if (this.getOtrasCaract) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar: function mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getOtrasCaract) {
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
    if (this.getOtrasCaract) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=template&id=a87f6c80&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=template&id=a87f6c80& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title" }, [
              _vm._v(_vm._s(_vm.tituloForm))
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "mt-4 mr-4 ml-4",
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
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "fijacion_nitrogeno" } }, [
                        _vm._v("Fijación Nitrogeno")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.parametros.fijacion_nitrogeno.$model,
                            expression:
                              "$v.parametros.fijacion_nitrogeno.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.fijacion_nitrogeno.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "fijacion_nitrogeno",
                          id: "fijacion_nitrogeno",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.fijacion_nitrogeno.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.fijacion_nitrogeno,
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
                      _vm.$v.parametros.fijacion_nitrogeno.$error &&
                      !_vm.$v.parametros.fijacion_nitrogeno.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "produccion_aia" } }, [
                        _vm._v("Producción AIA")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.parametros.produccion_aia.$model,
                            expression: "$v.parametros.produccion_aia.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.produccion_aia.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "produccion_aia",
                          id: "produccion_aia",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.produccion_aia.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.produccion_aia,
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
                      _vm.$v.parametros.produccion_aia.$error &&
                      !_vm.$v.parametros.produccion_aia.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "giberelinas" } }, [
                        _vm._v("Giberelinas")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.parametros.giberelinas.$model,
                            expression: "$v.parametros.giberelinas.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.giberelinas.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "giberelinas",
                          id: "giberelinas",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.giberelinas.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.giberelinas,
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
                      _vm.$v.parametros.giberelinas.$error &&
                      !_vm.$v.parametros.giberelinas.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c(
                        "label",
                        { attrs: { for: "produccion_sideroforos" } },
                        [_vm._v("Producción Sideróforos")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value:
                              _vm.$v.parametros.produccion_sideroforos.$model,
                            expression:
                              "$v.parametros.produccion_sideroforos.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.produccion_sideroforos.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "produccion_sideroforos",
                          id: "produccion_sideroforos",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.produccion_sideroforos.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.produccion_sideroforos,
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
                      _vm.$v.parametros.produccion_sideroforos.$error &&
                      !_vm.$v.parametros.produccion_sideroforos.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "solubili_fosforo" } }, [
                        _vm._v("Solubilización de Fósforo")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.parametros.solubili_fosforo.$model,
                            expression: "$v.parametros.solubili_fosforo.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.solubili_fosforo.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "solubili_fosforo",
                          id: "solubili_fosforo",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.solubili_fosforo.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.solubili_fosforo,
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
                      _vm.$v.parametros.solubili_fosforo.$error &&
                      !_vm.$v.parametros.solubili_fosforo.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "produccion_pha" } }, [
                        _vm._v("Producción PHA")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.parametros.produccion_pha.$model,
                            expression: "$v.parametros.produccion_pha.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.produccion_pha.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "produccion_pha",
                          id: "produccion_pha",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.produccion_pha.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.produccion_pha,
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
                      _vm.$v.parametros.produccion_pha.$error &&
                      !_vm.$v.parametros.produccion_pha.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c(
                        "label",
                        { attrs: { for: "alta_produc_antibioticos" } },
                        [_vm._v("Alta Producción De Antibióticos")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value:
                              _vm.$v.parametros.alta_produc_antibioticos.$model,
                            expression:
                              "$v.parametros.alta_produc_antibioticos.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.alta_produc_antibioticos.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "alta_produc_antibioticos",
                          id: "alta_produc_antibioticos",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value:
                            _vm.$v.parametros.alta_produc_antibioticos.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.alta_produc_antibioticos,
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
                      _vm.$v.parametros.alta_produc_antibioticos.$error &&
                      !_vm.$v.parametros.alta_produc_antibioticos.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "activi_enzimaticas" } }, [
                        _vm._v("Actividades Enzimáticas")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.parametros.activi_enzimaticas.$model,
                            expression:
                              "$v.parametros.activi_enzimaticas.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.$v.parametros.activi_enzimaticas.$error
                            ? "error-input-select"
                            : ""
                        ],
                        attrs: {
                          name: "activi_enzimaticas",
                          id: "activi_enzimaticas",
                          placeholder: "...",
                          type: "text"
                        },
                        domProps: {
                          value: _vm.$v.parametros.activi_enzimaticas.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.parametros.activi_enzimaticas,
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
                      _vm.$v.parametros.activi_enzimaticas.$error &&
                      !_vm.$v.parametros.activi_enzimaticas.required
                        ? _c("em", { staticClass: "text-error-input" }, [
                            _vm._v(_vm._s(_vm.mensajes.required))
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-row" },
                  [
                    _c("div", { class: _vm.classRow }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "antagonismos" } }, [
                            _vm._v("Antagonismos")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.antagonismos.$model,
                                expression: "$v.parametros.antagonismos.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.antagonismos.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "antagonismos",
                              id: "antagonismos",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.antagonismos.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.antagonismos,
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
                          _vm.$v.parametros.antagonismos.$error &&
                          !_vm.$v.parametros.antagonismos.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.validarTipoForm
                      ? [
                          _c("div", { staticClass: "col-md-4" }, [
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
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-input" },
                                      [_vm._v(_vm._s(_vm.erroresImagenes))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                (_vm.$v.parametros.imagen1.$error &&
                                  !_vm.$v.parametros.imagen1.required) ||
                                (_vm.$v.parametros.imagen2.$error &&
                                  !_vm.$v.parametros.imagen2.required) ||
                                (_vm.$v.parametros.imagen3.$error &&
                                  !_vm.$v.parametros.imagen3.required)
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-input" },
                                      [_vm._v(_vm._s(_vm.mensajes.required))]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { class: _vm.classRow }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
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
                            staticClass: "form-control autosize-input",
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
                        ]
                      )
                    ])
                  ],
                  2
                ),
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
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row justify-content-md-center" },
      [
        _vm.validarTipoForm
          ? [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Imagenes")
                      ]),
                      _vm._v(" "),
                      _vm.imagenesCroppie.length === _vm.cantImagenes &&
                      _vm.$refs.inputImagen.value
                        ? [
                            _c("CroppieCepas", {
                              attrs: {
                                imagenes: _vm.imagenesCroppie,
                                posicion: "horizontal"
                              },
                              on: { cambiarValorImagen: _vm.cambiarValorImagen }
                            })
                          ]
                        : [_vm._m(0)]
                    ],
                    2
                  )
                ])
              ])
            ]
          : [
              _c("div", { staticClass: "col-md-5" }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Imagenes")
                      ]),
                      _vm._v(" "),
                      _c("Imagenes", {
                        attrs: {
                          parametros: _vm.parametros,
                          tipoCepa: "actinomiceto/otras-caract",
                          imagenes: _vm.imagenes,
                          cepa: _vm.info
                        },
                        on: { accionImagen: _vm.accionImagen }
                      })
                    ],
                    1
                  )
                ])
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=template&id=1f827ea0&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=template&id=1f827ea0& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("Eliminar Característica")]
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
                    [_vm._v("Agregar Característica")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm.mostrarForm
              ? [
                  _c("FormOtrasCaract", {
                    attrs: {
                      modificarInfo: _vm.modificarForm,
                      info: _vm.getOtrasCaract
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
          tipo: "Características",
          tipoCaract: "Otras Características de Interés",
          caract: _vm.getOtrasCaract,
          url: "actinomiceto/otras-caract"
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
        _vm._v("\n          Otras Características de Interés\n        ")
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

/***/ "./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormOtrasCaractComponent_vue_vue_type_template_id_a87f6c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormOtrasCaractComponent.vue?vue&type=template&id=a87f6c80& */ "./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=template&id=a87f6c80&");
/* harmony import */ var _FormOtrasCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormOtrasCaractComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormOtrasCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormOtrasCaractComponent_vue_vue_type_template_id_a87f6c80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormOtrasCaractComponent_vue_vue_type_template_id_a87f6c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormOtrasCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormOtrasCaractComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormOtrasCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=template&id=a87f6c80&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=template&id=a87f6c80& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormOtrasCaractComponent_vue_vue_type_template_id_a87f6c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormOtrasCaractComponent.vue?vue&type=template&id=a87f6c80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue?vue&type=template&id=a87f6c80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormOtrasCaractComponent_vue_vue_type_template_id_a87f6c80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormOtrasCaractComponent_vue_vue_type_template_id_a87f6c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoOtrasCaractsComponent_vue_vue_type_template_id_1f827ea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoOtrasCaractsComponent.vue?vue&type=template&id=1f827ea0& */ "./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=template&id=1f827ea0&");
/* harmony import */ var _InfoOtrasCaractsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoOtrasCaractsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoOtrasCaractsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoOtrasCaractsComponent_vue_vue_type_template_id_1f827ea0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoOtrasCaractsComponent_vue_vue_type_template_id_1f827ea0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoOtrasCaractsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoOtrasCaractsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoOtrasCaractsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=template&id=1f827ea0&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=template&id=1f827ea0& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoOtrasCaractsComponent_vue_vue_type_template_id_1f827ea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoOtrasCaractsComponent.vue?vue&type=template&id=1f827ea0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue?vue&type=template&id=1f827ea0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoOtrasCaractsComponent_vue_vue_type_template_id_1f827ea0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoOtrasCaractsComponent_vue_vue_type_template_id_1f827ea0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);