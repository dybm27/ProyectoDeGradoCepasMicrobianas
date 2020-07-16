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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      errors: []
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    evento: function evento() {
      var _this = this;

      if (this.tituloForm === "Agregar Características") {
        axios.post("/cepas/actinomiceto/otras-caract", this.parametros).then(function (res) {
          _this.errors = [];
          _this.$refs.inputImagen.value = "";
          _this.tituloForm = "Editar Características";
          _this.nomBtn = "Editar";

          _this.$emit("agregar", res.data);

          _this.toastr("Agregar Otras Característica", "Características agregadas con exito!!", "success");
        })["catch"](function (error) {
          if (error.response) {
            _this.errors = [];
            _this.errors = error.response.data.errors;

            _this.toastr("Error!!", "", "error");
          }
        });
      } else {
        axios.put("/cepas/actinomiceto/otras-caract/".concat(this.info.id), this.parametros).then(function (res) {
          _this.errors = [];

          _this.$emit("editar", res.data);

          _this.toastr("Editar Otras Característica", "Características editadas con exito!!", "success");
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
    required: function required() {
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
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _forms_caract_FormOtrasCaractComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms-caract/FormOtrasCaractComponent */ "./resources/js/components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FormOtrasCaract: _forms_caract_FormOtrasCaractComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    eliminar: function eliminar() {
      var _this = this;

      axios["delete"]("/cepas/actinomiceto/otras-caract/".concat(this.getOtrasCaract.id)).then(function (res) {
        _this.mostrarBtnAgregar = true;
        _this.mostrarForm = false;

        _this.$modal.hide("otras_caract");

        _this.accionEliminarCaract({
          tipo: "otras",
          data: res.data
        });

        _this.toastr("Eliminar Característica", "Otras Características de Interés eliminadas con exito!!", "success");
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getOtrasCaract"]), {
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
                            rawName: "v-model",
                            value: _vm.parametros.fijacion_nitrogeno,
                            expression: "parametros.fijacion_nitrogeno"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "fijacion_nitrogeno",
                          id: "fijacion_nitrogeno",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.fijacion_nitrogeno },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "fijacion_nitrogeno",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                            rawName: "v-model",
                            value: _vm.parametros.produccion_aia,
                            expression: "parametros.produccion_aia"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "produccion_aia",
                          id: "produccion_aia",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.produccion_aia },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "produccion_aia",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                            rawName: "v-model",
                            value: _vm.parametros.giberelinas,
                            expression: "parametros.giberelinas"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "giberelinas",
                          id: "giberelinas",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.giberelinas },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "giberelinas",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                            rawName: "v-model",
                            value: _vm.parametros.produccion_sideroforos,
                            expression: "parametros.produccion_sideroforos"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "produccion_sideroforos",
                          id: "produccion_sideroforos",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: {
                          value: _vm.parametros.produccion_sideroforos
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "produccion_sideroforos",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                            rawName: "v-model",
                            value: _vm.parametros.solubili_fosforo,
                            expression: "parametros.solubili_fosforo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "solubili_fosforo",
                          id: "solubili_fosforo",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.solubili_fosforo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "solubili_fosforo",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                            rawName: "v-model",
                            value: _vm.parametros.produccion_pha,
                            expression: "parametros.produccion_pha"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "produccion_pha",
                          id: "produccion_pha",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.produccion_pha },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "produccion_pha",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                            rawName: "v-model",
                            value: _vm.parametros.alta_produc_antibioticos,
                            expression: "parametros.alta_produc_antibioticos"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "alta_produc_antibioticos",
                          id: "alta_produc_antibioticos",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: {
                          value: _vm.parametros.alta_produc_antibioticos
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "alta_produc_antibioticos",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                            rawName: "v-model",
                            value: _vm.parametros.activi_enzimaticas,
                            expression: "parametros.activi_enzimaticas"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "activi_enzimaticas",
                          id: "activi_enzimaticas",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.activi_enzimaticas },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "activi_enzimaticas",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                                rawName: "v-model",
                                value: _vm.parametros.antagonismos,
                                expression: "parametros.antagonismos"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "antagonismos",
                              id: "antagonismos",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.antagonismos },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "antagonismos",
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
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(_vm.erroresImagenes))
                                    ])
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
                    attrs: { disabled: _vm.btnDisable }
                  },
                  [_vm._v(_vm._s(_vm.nomBtn))]
                )
              ]
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
                          return _vm.$modal.show("otras_caract")
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
      _c(
        "modal",
        { attrs: { name: "otras_caract", width: 450, height: 200 } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  staticClass: "modal-title",
                  attrs: { id: "exampleModalLongTitle" }
                },
                [_vm._v("Eliminar Otras Características de Interés")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("otras_caract")
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
              _c("p", [
                _vm._v("Esta segura/o de eliminar las Características?.")
              ])
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
                      return _vm.$modal.hide("otras_caract")
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