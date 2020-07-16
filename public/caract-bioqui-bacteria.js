(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caract-bioqui-bacteria"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopie3Imagenes */ "./resources/js/mixins/obtenerImagenCroopie3Imagenes.js");
/* harmony import */ var _CroppieCepasComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CroppieCepasComponent.vue */ "./resources/js/components/cepas/CroppieCepasComponent.vue");
/* harmony import */ var _ImagenesComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ImagenesComponent.vue */ "./resources/js/components/cepas/ImagenesComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        oxidasa: "",
        catalasa: "",
        citrato: "",
        tsi: "",
        lia: "",
        sim: "",
        rm: "",
        vp: "",
        nitrato: "",
        caldo_urea: "",
        of: "",
        glucosa: "",
        lactosa: "",
        manitol: "",
        xilosa: "",
        arabinosa: "",
        sacarosa: "",
        otros_azucares: "",
        almidon: "",
        lecitinasa: "",
        lipasa: "",
        otras_enzimas: "",
        hidro_caseina: "",
        hidro_gelatina: "",
        hidro_urea: "",
        creci_nacl: "",
        creci_dif_temp: "",
        ordenamiento: "",
        tincion_gram: "positivo",
        tincion_esporas: "presencia",
        ubicacion_esporas: "central",
        tincion_capsula: "presencia",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: []
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    evento: function evento() {
      var _this = this;

      if (this.tituloForm === "Agregar Característica") {
        axios.post("/cepas/bacteria/caract-bioqui", this.parametros).then(function (res) {
          _this.errors = [];
          _this.$refs.inputImagen.value = "";
          _this.tituloForm = "Editar Característica";
          _this.nomBtn = "Editar";

          _this.$emit("agregar", res.data);

          _this.toastr("Agregar Características Bioquímicas", "Características Bioquímicas agregadas con exito!!", "success");
        })["catch"](function (error) {
          if (error.response) {
            _this.errors = [];
            _this.errors = error.response.data.errors;

            _this.toastr("Error!!", "", "error");
          }
        });
      } else {
        axios.put("/cepas/bacteria/caract-bioqui/".concat(this.info.id), this.parametros).then(function (res) {
          _this.errors = [];

          _this.$emit("editar", res.data);

          _this.toastr("Editar Características Bioquímicas", "Características Bioquímicas editadas con exito!!", "success");
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
      this.imagenes = [];
      this.parametros.oxidasa = this.info.oxidasa;
      this.parametros.catalasa = this.info.catalasa;
      this.parametros.citrato = this.info.citrato;
      this.parametros.tsi = this.info.tsi;
      this.parametros.lia = this.info.lia;
      this.parametros.sim = this.info.sim;
      this.parametros.rm = this.info.rm;
      this.parametros.vp = this.info.vp;
      this.parametros.nitrato = this.info.nitrato;
      this.parametros.caldo_urea = this.info.caldo_urea;
      this.parametros.of = this.info.of;
      this.parametros.glucosa = this.info.glucosa;
      this.parametros.lactosa = this.info.lactosa;
      this.parametros.manitol = this.info.manitol;
      this.parametros.xilosa = this.info.xilosa;
      this.parametros.arabinosa = this.info.arabinosa;
      this.parametros.sacarosa = this.info.sacarosa;
      this.parametros.otros_azucares = this.info.otros_azucares;
      this.parametros.almidon = this.info.almidon;
      this.parametros.lecitinasa = this.info.lecitinasa;
      this.parametros.lipasa = this.info.lipasa;
      this.parametros.otras_enzimas = this.info.otras_enzimas;
      this.parametros.hidro_caseina = this.info.hidro_caseina;
      this.parametros.hidro_gelatina = this.info.hidro_gelatina;
      this.parametros.hidro_urea = this.info.hidro_urea;
      this.parametros.creci_nacl = this.info.creci_nacl;
      this.parametros.creci_dif_temp = this.info.creci_dif_temp;
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
    required: function required() {
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
    },
    classRow: function classRow() {
      if (this.tituloForm === "Agregar Característica") {
        return "col-md-4";
      } else {
        return "col-md-6";
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

    if (this.$route.params.cepaBacteriaId) {
      this.parametros.cepaId = this.$route.params.cepaBacteriaId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _forms_caract_FormCaractBioquiComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms-caract/FormCaractBioquiComponent.vue */ "./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FormCaractBioqui: _forms_caract_FormCaractBioquiComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      mostrarBtnAgregar: true,
      mostrarForm: false,
      modificarForm: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract", "accionEliminarCaract"]), {
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
    eliminar: function eliminar() {
      var _this = this;

      axios["delete"]("/cepas/bacteria/caract-bioqui/".concat(this.getCaractBioqui.id)).then(function (res) {
        _this.mostrarBtnAgregar = true;
        _this.mostrarForm = false;

        _this.$modal.hide("my_modal");

        _this.accionEliminarCaract({
          tipo: "bioqui",
          data: res.data
        });

        _this.toastr("Eliminar Característica", "Características Bioquímicas eliminadas con exito!!", "success");
      })["catch"](function (error) {
        if (error.response) {
          _this.toastr("Error!!", "", "error"); // console.log(error.response.data);

        }
      });
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getCaractBioqui"]), {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=5991e8b6&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=5991e8b6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card mt-4 mr-4 ml-4" }, [
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
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "oxidasa" } }, [
                            _vm._v("Oxidasa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.oxidasa,
                                expression: "parametros.oxidasa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "oxidasa",
                              id: "oxidasa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.oxidasa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "oxidasa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "catalasa" } }, [
                            _vm._v("Catalasa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.catalasa,
                                expression: "parametros.catalasa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "catalasa",
                              id: "catalasa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.catalasa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "catalasa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "citrato" } }, [
                            _vm._v("Citrato")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.citrato,
                                expression: "parametros.citrato"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "citrato",
                              id: "citrato",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.citrato },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "citrato",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "tsi" } }, [
                            _vm._v("TSI")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.tsi,
                                expression: "parametros.tsi"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "tsi",
                              id: "tsi",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.tsi },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "tsi",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "glucosa" } }, [
                            _vm._v("Glucosa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.glucosa,
                                expression: "parametros.glucosa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "glucosa",
                              id: "glucosa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.glucosa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "glucosa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "lactosa" } }, [
                            _vm._v("Lactosa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.lactosa,
                                expression: "parametros.lactosa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "lactosa",
                              id: "lactosa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.lactosa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "lactosa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "manitol" } }, [
                            _vm._v("Manitol")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.manitol,
                                expression: "parametros.manitol"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "manitol",
                              id: "manitol",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.manitol },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "manitol",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "xilosa" } }, [
                            _vm._v("Xilosa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.xilosa,
                                expression: "parametros.xilosa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "xilosa",
                              id: "xilosa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.xilosa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "xilosa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "arabinosa" } }, [
                            _vm._v("Arabinosa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.arabinosa,
                                expression: "parametros.arabinosa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "arabinosa",
                              id: "arabinosa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.arabinosa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "arabinosa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "sacarosa" } }, [
                            _vm._v("Sacarosa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.sacarosa,
                                expression: "parametros.sacarosa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "sacarosa",
                              id: "sacarosa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.sacarosa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "sacarosa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "otros_azucares" } }, [
                      _vm._v("Otros Azúcares")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.parametros.otros_azucares,
                          expression: "parametros.otros_azucares"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "otros_azucares", id: "otros_azucares" },
                      domProps: { value: _vm.parametros.otros_azucares },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.parametros,
                            "otros_azucares",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "lia" } }, [
                            _vm._v("LIA")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.lia,
                                expression: "parametros.lia"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "lia",
                              id: "lia",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.lia },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "lia",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "sim" } }, [
                            _vm._v("SIM")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.sim,
                                expression: "parametros.sim"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "sim",
                              id: "sim",
                              placeholder: "..",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.sim },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "sim",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "rm" } }, [_vm._v("RM")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.rm,
                                expression: "parametros.rm"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "rm",
                              id: "rm",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.rm },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "rm",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "vp" } }, [_vm._v("VP")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.vp,
                                expression: "parametros.vp"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "vp",
                              id: "vp",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.vp },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "vp",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "nitrato" } }, [
                            _vm._v("Nitrato")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.nitrato,
                                expression: "parametros.nitrato"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "nitrato",
                              id: "nitrato",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.nitrato },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "nitrato",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "caldo_urea" } }, [
                            _vm._v("Caldo Úrea")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.caldo_urea,
                                expression: "parametros.caldo_urea"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "caldo_urea",
                              id: "caldo_urea",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.caldo_urea },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "caldo_urea",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "of" } }, [_vm._v("OF")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.of,
                                expression: "parametros.of"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "of",
                              id: "of",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.of },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "of",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "almidon" } }, [
                            _vm._v("Almidón")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.almidon,
                                expression: "parametros.almidon"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "almidon",
                              id: "almidon",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.almidon },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "almidon",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "lecitinasa" } }, [
                            _vm._v("Lecitinasa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.lecitinasa,
                                expression: "parametros.lecitinasa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "lecitinasa",
                              id: "lecitinasa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.lecitinasa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "lecitinasa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "lipasa" } }, [
                            _vm._v("Lipasa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.lipasa,
                                expression: "parametros.lipasa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "lipasa",
                              id: "lipasa",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.lipasa },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "lipasa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "otras_enzimas" } }, [
                      _vm._v("Otras Enzimas")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.parametros.otras_enzimas,
                          expression: "parametros.otras_enzimas"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "otras_enzimas", id: "otras_enzimas" },
                      domProps: { value: _vm.parametros.otras_enzimas },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.parametros,
                            "otras_enzimas",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "hidro_caseina" } }, [
                            _vm._v("Hidrolisís de la Caseína")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.hidro_caseina,
                                expression: "parametros.hidro_caseina"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "hidro_caseina",
                              id: "hidro_caseina",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.hidro_caseina },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "hidro_caseina",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "hidro_gelatina" } }, [
                            _vm._v("Hidrolisís de la Gelatina")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.hidro_gelatina,
                                expression: "parametros.hidro_gelatina"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "hidro_gelatina",
                              id: "hidro_gelatina",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.hidro_gelatina },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "hidro_gelatina",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "hidro_urea" } }, [
                            _vm._v("Hidrolisís de la Úrea")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.hidro_urea,
                                expression: "parametros.hidro_urea"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "hidro_urea",
                              id: "hidro_urea",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.hidro_urea },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "hidro_urea",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "creci_dif_temp" } }, [
                            _vm._v("Crecimiento en Diferentes Temperaturas")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.creci_dif_temp,
                                expression: "parametros.creci_dif_temp"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "creci_dif_temp",
                              id: "creci_dif_temp",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.creci_dif_temp },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "creci_dif_temp",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
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
                            _c("label", { attrs: { for: "creci_nacl" } }, [
                              _vm._v("Crecimiento en Nacl")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.creci_nacl,
                                  expression: "parametros.creci_nacl"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "creci_nacl",
                                id: "creci_nacl",
                                placeholder: "...",
                                type: "text",
                                required: ""
                              },
                              domProps: { value: _vm.parametros.creci_nacl },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.parametros,
                                    "creci_nacl",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.required
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
                                    staticClass: "form-control-file",
                                    attrs: {
                                      name: "imagen",
                                      id: "imagen",
                                      type: "file",
                                      accept: "image/jpeg, image/png",
                                      multiple: "",
                                      required: _vm.required
                                    },
                                    on: { change: _vm.obtenerImagenes }
                                  }),
                                  _vm._v(" "),
                                  _vm.erroresImagenes
                                    ? _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v(_vm._s(_vm.erroresImagenes))]
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
                              staticClass: "form-control",
                              attrs: {
                                name: "otras_caract",
                                id: "otras_caract"
                              },
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
                      attrs: { disabled: _vm.btnDisable }
                    },
                    [_vm._v(_vm._s(_vm.nomBtn))]
                  )
                ])
              ])
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "row justify-content-md-center" },
        [
          _vm.required
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
                                on: {
                                  cambiarValorImagen: _vm.cambiarValorImagen
                                }
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
                            tipoCepa: "bacteria/caract-bioqui",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=11c8dfb2&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=11c8dfb2& ***!
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
                          return _vm.$modal.show("my_modal")
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
      _c(
        "modal",
        {
          attrs: {
            name: "my_modal",
            classes: "my_modal",
            width: 400,
            height: 300
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
                [_vm._v("Eliminar Característica Bioquímica")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("my_modal")
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
              _c("p", [_vm._v("Esta segura/o de eliminar la Característica?.")])
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
                      return _vm.$modal.hide("my_modal")
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
                  on: { click: _vm.eliminar }
                },
                [_vm._v("Eliminar")]
              )
            ])
          ])
        ]
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

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormCaractBioquiComponent_vue_vue_type_template_id_5991e8b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormCaractBioquiComponent.vue?vue&type=template&id=5991e8b6& */ "./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=5991e8b6&");
/* harmony import */ var _FormCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCaractBioquiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormCaractBioquiComponent_vue_vue_type_template_id_5991e8b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormCaractBioquiComponent_vue_vue_type_template_id_5991e8b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractBioquiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=5991e8b6&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=5991e8b6& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_template_id_5991e8b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractBioquiComponent.vue?vue&type=template&id=5991e8b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue?vue&type=template&id=5991e8b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_template_id_5991e8b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractBioquiComponent_vue_vue_type_template_id_5991e8b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoCaractBioquiComponent_vue_vue_type_template_id_11c8dfb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoCaractBioquiComponent.vue?vue&type=template&id=11c8dfb2& */ "./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=11c8dfb2&");
/* harmony import */ var _InfoCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoCaractBioquiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoCaractBioquiComponent_vue_vue_type_template_id_11c8dfb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoCaractBioquiComponent_vue_vue_type_template_id_11c8dfb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractBioquiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=11c8dfb2&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=11c8dfb2& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_template_id_11c8dfb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractBioquiComponent.vue?vue&type=template&id=11c8dfb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue?vue&type=template&id=11c8dfb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_template_id_11c8dfb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractBioquiComponent_vue_vue_type_template_id_11c8dfb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);