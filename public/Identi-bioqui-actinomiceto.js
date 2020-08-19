(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["identi-bioqui-actinomiceto"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        oxidasa: "",
        catalasa: "",
        citrato: "",
        caseina: "",
        nitrato: "",
        sensi_antibioticos: "",
        fer_manitol: "",
        fer_lactosa: "",
        fer_inositol: "",
        fer_sacarosa: "",
        fer_otro: "",
        hidro_gelatina: "",
        hidro_urea: "",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;

      if (this.tituloForm === "Agregar Identificación") {
        if (this.parametros.imagen1) {
          axios.post("/cepas/actinomiceto/identi-bioqui", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;
              _this.errors = [];
              _this.$refs.inputImagen.value = "";
              _this.tituloForm = "Editar Identificación";
              _this.nomBtn = "Editar";

              _this.$emit("agregar", res.data);

              _this.toastr("Agregar Identificación Bioquímica", "Identificación Bioquímica agregada con exito!!", "success");
            }
          })["catch"](function (error) {
            if (error.response.status === 403) {
              _this.$router.push("/sin-acceso");
            } else {
              _this.bloquearBtn = false;

              if (error.response.status === 422) {
                _this.errors = [];
                _this.errors = error.response.data.errors;
              }

              _this.toastr("Error!!", "", "error");
            }
          });
        } else {
          this.bloquearBtn = false;
          this.errors = {
            imagen: ["Favor elija al menos 1 imagen."]
          };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios.put("/cepas/actinomiceto/identi-bioqui/".concat(this.info.id), this.parametros).then(function (res) {
          _this.bloquearBtn = false;
          _this.errors = [];

          _this.$emit("editar", res.data);

          _this.toastr("Editar Identificación Bioquímica", "Identificación Bioquímica editada con exito!!", "success");
        })["catch"](function (error) {
          if (error.response.status === 403) {
            _this.$router.push("/sin-acceso");
          } else if (error.response.status === 405) {
            window.location.href = "/";
          } else {
            _this.bloquearBtn = false;

            if (error.response.status === 422) {
              _this.errors = [];
              _this.errors = error.response.data.errors;
            }

            _this.toastr("Error!!", "", "error");
          }
        });
      }
    },
    llenarInfo: function llenarInfo() {
      this.imagenes = [];
      this.parametros.oxidasa = this.info.oxidasa;
      this.parametros.catalasa = this.info.catalasa;
      this.parametros.citrato = this.info.citrato;
      this.parametros.caseina = this.info.caseina;
      this.parametros.nitrato = this.info.nitrato;
      this.parametros.sensi_antibioticos = this.info.sensi_antibioticos;
      this.parametros.fer_manitol = this.info.fer_manitol;
      this.parametros.fer_lactosa = this.info.fer_lactosa;
      this.parametros.fer_inositol = this.info.fer_inositol;
      this.parametros.fer_sacarosa = this.info.fer_sacarosa;
      this.parametros.fer_otro = this.info.fer_otro;
      this.parametros.hidro_gelatina = this.info.hidro_gelatina;
      this.parametros.hidro_urea = this.info.hidro_urea;
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
      if (this.tituloForm === "Agregar Identificación") {
        return true;
      } else {
        return false;
      }
    },
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Identificación") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    classRow: function classRow() {
      if (this.tituloForm === "Agregar Identificación") {
        return "col-md-4";
      } else {
        return "col-md-6";
      }
    }
  },
  mounted: function mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Identificación";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Identificación";
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _forms_caract_FormIdentiBioquiComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms-caract/FormIdentiBioquiComponent.vue */ "./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue");
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
    FormIdentiBioqui: _forms_caract_FormIdentiBioquiComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModalEliminar: _ModalEliminarCaractComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      mostrarBtnAgregar: true,
      mostrarForm: false,
      modificarForm: false
    };
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract", "accionEliminarCaract"]), {
    agregar: function agregar(data) {
      this.accionAgregarCaract({
        tipo: "identi_bioqui",
        data: data
      });
    },
    editar: function editar(data) {
      this.accionEditarCaract({
        tipo: "identi_bioqui",
        data: data
      });
      this.modificarForm = true;
    },
    eliminar: function eliminar(data) {
      this.accionEliminarCaract({
        tipo: "identi_bioqui",
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getIdentiBioqui"]), {
    mostrarBtnEliminar: function mostrarBtnEliminar() {
      if (this.getIdentiBioqui) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar: function mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getIdentiBioqui) {
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
    if (this.getIdentiBioqui) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=template&id=3f6ecf92&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=template&id=3f6ecf92& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container mt-4" }, [
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("h5", { staticClass: "card-title" }, [
            _vm._v(_vm._s(_vm.tituloForm))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-md-center" }, [
            _c(
              "div",
              { staticClass: "col-md-12" },
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
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
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
                      _c("div", { staticClass: "col-md-4" }, [
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
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
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "nitrato" } }, [
                              _vm._v("Nitratos")
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
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "caseina" } }, [
                              _vm._v("Caseina")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.caseina,
                                  expression: "parametros.caseina"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "caseina",
                                id: "caseina",
                                placeholder: "...",
                                type: "text",
                                required: ""
                              },
                              domProps: { value: _vm.parametros.caseina },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.parametros,
                                    "caseina",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
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
                              _c(
                                "label",
                                { attrs: { for: "hidro_gelatina" } },
                                [_vm._v("Hidrolisís de la Gelatina")]
                              ),
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
                                domProps: {
                                  value: _vm.parametros.hidro_gelatina
                                },
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
                        ]),
                        _vm._v(" "),
                        _vm.required
                          ? [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "position-relative form-group"
                                  },
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
                              _c(
                                "label",
                                { attrs: { for: "sensi_antibioticos" } },
                                [_vm._v("Sensibilidad a Antibióticos")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.sensi_antibioticos,
                                    expression: "parametros.sensi_antibioticos"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "sensi_antibioticos",
                                  id: "sensi_antibioticos",
                                  placeholder: "...",
                                  type: "text",
                                  required: ""
                                },
                                domProps: {
                                  value: _vm.parametros.sensi_antibioticos
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.parametros,
                                      "sensi_antibioticos",
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
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c("label", { attrs: { for: "fer_lactosa" } }, [
                                  _vm._v("Lactosa")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.fer_lactosa,
                                      expression: "parametros.fer_lactosa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "fer_lactosa",
                                    id: "fer_lactosa",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: {
                                    value: _vm.parametros.fer_lactosa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "fer_lactosa",
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
                                _c("label", { attrs: { for: "fer_manitol" } }, [
                                  _vm._v("Manitol")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.fer_manitol,
                                      expression: "parametros.fer_manitol"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "fer_manitol",
                                    id: "fer_manitol",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: {
                                    value: _vm.parametros.fer_manitol
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "fer_manitol",
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
                                _c(
                                  "label",
                                  { attrs: { for: "fer_inositol" } },
                                  [_vm._v("Inositol")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.fer_inositol,
                                      expression: "parametros.fer_inositol"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "fer_inositol",
                                    id: "fer_inositol",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: {
                                    value: _vm.parametros.fer_inositol
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "fer_inositol",
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
                                _c(
                                  "label",
                                  { attrs: { for: "fer_sacarosa" } },
                                  [_vm._v("Sacarosa")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.fer_sacarosa,
                                      expression: "parametros.fer_sacarosa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "fer_sacarosa",
                                    id: "fer_sacarosa",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: {
                                    value: _vm.parametros.fer_sacarosa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "fer_sacarosa",
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
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "fer_inositol" } }, [
                              _vm._v("Otro Azúcar")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.fer_otro,
                                  expression: "parametros.fer_otro"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "fer_inositol",
                                id: "fer_inositol",
                                placeholder: "...",
                                type: "text"
                              },
                              domProps: { value: _vm.parametros.fer_otro },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.parametros,
                                    "fer_otro",
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
                              staticClass: "form-control mt-2",
                              staticStyle: { height: "200px" },
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
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "mb-2 mr-2 btn btn-block",
                        class: _vm.btnClase,
                        attrs: { disabled: _vm.btnDisable || _vm.bloquearBtn }
                      },
                      [_vm._v(_vm._s(_vm.nomBtn))]
                    )
                  ]
                )
              ],
              2
            )
          ])
        ])
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
                          : [_vm._m(1)]
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
                            tipoCepa: "actinomiceto/identi-bioqui",
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
    return _c("label", { attrs: { for: "manitol" } }, [
      _c("b", [_vm._v("Fermentación de:")])
    ])
  },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=template&id=0b9b84f0&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=template&id=0b9b84f0& ***!
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
                    [_vm._v("Eliminar Identificación")]
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
                    [_vm._v("Agregar Identificación")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm.mostrarForm
              ? [
                  _c("FormIdentiBioqui", {
                    attrs: {
                      modificarInfo: _vm.modificarForm,
                      info: _vm.getIdentiBioqui
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
          tipo: "Identificación",
          tipoCaract: "Identificación Bioquímica",
          caract: _vm.getIdentiBioqui,
          url: "actinomiceto/identi-bioqui"
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
        _vm._v("\n          Identificación Bioquímica\n        ")
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
            _vm._v("AÚN NO SE HAN AGREGADO LA IDENTIFICACIÓN")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormIdentiBioquiComponent_vue_vue_type_template_id_3f6ecf92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormIdentiBioquiComponent.vue?vue&type=template&id=3f6ecf92& */ "./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=template&id=3f6ecf92&");
/* harmony import */ var _FormIdentiBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormIdentiBioquiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormIdentiBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormIdentiBioquiComponent_vue_vue_type_template_id_3f6ecf92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormIdentiBioquiComponent_vue_vue_type_template_id_3f6ecf92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormIdentiBioquiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=template&id=3f6ecf92&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=template&id=3f6ecf92& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiBioquiComponent_vue_vue_type_template_id_3f6ecf92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormIdentiBioquiComponent.vue?vue&type=template&id=3f6ecf92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue?vue&type=template&id=3f6ecf92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiBioquiComponent_vue_vue_type_template_id_3f6ecf92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiBioquiComponent_vue_vue_type_template_id_3f6ecf92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoIdentiBioquiComponent_vue_vue_type_template_id_0b9b84f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoIdentiBioquiComponent.vue?vue&type=template&id=0b9b84f0& */ "./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=template&id=0b9b84f0&");
/* harmony import */ var _InfoIdentiBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoIdentiBioquiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoIdentiBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoIdentiBioquiComponent_vue_vue_type_template_id_0b9b84f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoIdentiBioquiComponent_vue_vue_type_template_id_0b9b84f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoIdentiBioquiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiBioquiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=template&id=0b9b84f0&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=template&id=0b9b84f0& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiBioquiComponent_vue_vue_type_template_id_0b9b84f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoIdentiBioquiComponent.vue?vue&type=template&id=0b9b84f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue?vue&type=template&id=0b9b84f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiBioquiComponent_vue_vue_type_template_id_0b9b84f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiBioquiComponent_vue_vue_type_template_id_0b9b84f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);