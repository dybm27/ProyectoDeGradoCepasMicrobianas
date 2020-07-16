(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["identi-molecu-bacteria"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopie2Imagenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopie2Imagenes */ "./resources/js/mixins/obtenerImagenCroopie2Imagenes.js");
/* harmony import */ var _CroppieComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CroppieComponent */ "./resources/js/components/CroppieComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Croppie: _CroppieComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["info", "modificarInfo"],
  data: function data() {
    return {
      parametros: {
        cepaId: "",
        nombre_forward: "",
        nombre_reversed: "",
        secuen_forward: "",
        secuen_reversed: "",
        produc_forward: "",
        produc_reversed: "",
        obser_secuenciacion: "",
        imagen1: "",
        imagen2: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: []
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_obtenerImagenCroopie2Imagenes__WEBPACK_IMPORTED_MODULE_2__["default"]],
  watch: {
    modificarInfo: function modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  methods: {
    evento: function evento() {
      var _this = this;

      if (this.tituloForm === "Agregar Identificación") {
        axios.post("/cepas/bacteria/identi-molecu", this.parametros).then(function (res) {
          _this.errors = [];
          _this.$refs.inputImagen1.value = "";
          _this.$refs.inputImagen2.value = "";
          _this.tituloForm = "Editar Identificación";
          _this.nomBtn = "Editar";

          _this.$emit("agregar", res.data);

          _this.toastr("Agregar Identificación", "Identificación Molecular agregada con exito!!", "success");
        })["catch"](function (error) {
          if (error.response) {
            _this.errors = [];
            _this.errors = error.response.data.errors;

            _this.toastr("Error!!", "", "error");
          }
        });
      } else {
        axios.put("/cepas/bacteria/identi-molecu/".concat(this.info.id), this.parametros).then(function (res) {
          _this.errors = [];
          _this.$refs.inputImagen1.value = "";
          _this.$refs.inputImagen2.value = "";

          _this.$emit("editar", res.data);

          _this.toastr("Editar Identificación", "Identificación Molecular editada con exito!!", "success");
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
      this.parametros.nombre_forward = this.info.nombre_forward;
      this.parametros.nombre_reversed = this.info.nombre_reversed;
      this.parametros.secuen_forward = this.info.secuen_forward;
      this.parametros.secuen_reversed = this.info.secuen_reversed;
      this.parametros.produc_forward = this.info.produc_forward;
      this.parametros.produc_reversed = this.info.produc_reversed;
      this.parametros.obser_secuenciacion = this.info.obser_secuenciacion;
      this.parametros.imagen1 = this.info.img_pcr;
      this.parametros.imagen2 = this.info.img_secuen;
      this.imagenMiniatura1 = this.info.img_pcrPublica;
      this.imagenMiniatura2 = this.info.img_secuenPublica;
    }
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getGeneroCepa", "getEspecieCepa"]), {
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Identificación") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required: function required() {
      if (this.tituloForm === "Agregar Identificación") {
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
    }
  }),
  mounted: function mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Identificación";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Identificación";
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _forms_caract_FormIdentiMolecuComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms-caract/FormIdentiMolecuComponent.vue */ "./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue");
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
    FormIdentiMolecu: _forms_caract_FormIdentiMolecuComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        tipo: "identi",
        data: data
      });
      this.modificarForm = true;
    },
    editar: function editar(data) {
      this.accionEditarCaract({
        tipo: "identi",
        data: data
      });
      this.modificarForm = true;
    },
    eliminar: function eliminar() {
      var _this = this;

      axios["delete"]("/cepas/bacteria/identi-molecu/".concat(this.getIdentiMolecu.id)).then(function (res) {
        _this.mostrarBtnAgregar = true;
        _this.mostrarForm = false;

        _this.$modal.hide("my_modal");

        _this.accionEliminarCaract({
          tipo: "identi",
          data: res.data
        });

        _this.toastr("Eliminar Identificación", "Identificación Molecular eliminada con exito!!", "success");
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getIdentiMolecu"]), {
    mostrarBtnEliminar: function mostrarBtnEliminar() {
      if (this.getIdentiMolecu) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar: function mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getIdentiMolecu) {
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
    if (this.getIdentiMolecu) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=e9d8b1ea&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=e9d8b1ea& ***!
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
  return _c("div", { staticClass: "container mt-3" }, [
    _c("div", { staticClass: "row justify-content-md-center" }, [
      _c("div", { staticClass: "col-sm-12" }, [
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
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c("label", { attrs: { for: "medio" } }, [_vm._v("Primers")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.parametros.nombre_forward,
                              expression: "parametros.nombre_forward"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder: "Nombre..",
                            name: "nombre_forward",
                            id: "nombre_forward",
                            type: "text",
                            required: ""
                          },
                          domProps: { value: _vm.parametros.nombre_forward },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.parametros,
                                "nombre_forward",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.secuen_forward,
                                expression: "parametros.secuen_forward"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "secuen_forward",
                              id: "secuen_forward",
                              placeholder: "Secuencia...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.secuen_forward },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "secuen_forward",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.produc_forward,
                                expression: "parametros.produc_forward"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "produc_forward",
                              id: "produc_forward",
                              placeholder: "Producto...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.produc_forward },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "produc_forward",
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
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.parametros.nombre_reversed,
                              expression: "parametros.nombre_reversed"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder: "Nombre..",
                            name: "nombre_reversed",
                            id: "nombre_reversed",
                            type: "text",
                            required: ""
                          },
                          domProps: { value: _vm.parametros.nombre_reversed },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.parametros,
                                "nombre_reversed",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.secuen_reversed,
                                expression: "parametros.secuen_reversed"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "secuen_reversed",
                              id: "secuen_reversed",
                              placeholder: "Secuencia...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.secuen_reversed },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "secuen_reversed",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.produc_reversed,
                                expression: "parametros.produc_reversed"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "produc_reversed",
                              id: "produc_reversed",
                              placeholder: "Producto...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.parametros.produc_reversed },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "produc_reversed",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-row justify-content-md-center" },
                  [
                    _c("div", { staticClass: "col-md-5" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: _vm.getGeneroCepa.nombre }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-5" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: _vm.getEspecieCepa.nombre }
                        })
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-row justify-content-md-center mt-2" },
                  [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "imagen1" } }, [
                            _vm._v("Imagen PCR")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "inputImagen1",
                            staticClass: "form-control-file",
                            attrs: {
                              name: "imagen1",
                              id: "imagen1",
                              type: "file",
                              accept: "image/jpeg, image/png",
                              required: _vm.required
                            },
                            on: { change: _vm.obtenerImagen1 }
                          }),
                          _vm._v(" "),
                          _vm.imagenError.imagen1
                            ? _c("span", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.imagenError.imagen1))
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "imagen2" } }, [
                            _vm._v("Imagen Secuencia")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "inputImagen2",
                            staticClass: "form-control-file",
                            attrs: {
                              name: "imagen2",
                              id: "imagen2",
                              type: "file",
                              accept: "image/jpeg, image/png",
                              required: _vm.required
                            },
                            on: { change: _vm.obtenerImagen2 }
                          }),
                          _vm._v(" "),
                          _vm.imagenError.imagen2
                            ? _c("span", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.imagenError.imagen2))
                              ])
                            : _vm._e()
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-row justify-content-md-center" },
                  [
                    _c("div", { staticClass: "col-md-8" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c(
                            "label",
                            { attrs: { for: "obser_secuenciacion" } },
                            [_vm._v("Informe de Secuenciación")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.obser_secuenciacion,
                                expression: "parametros.obser_secuenciacion"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "obser_secuenciacion",
                              id: "obser_secuenciacion",
                              required: ""
                            },
                            domProps: {
                              value: _vm.parametros.obser_secuenciacion
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "obser_secuenciacion",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ])
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
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-md-center" }, [
      _c("div", { staticClass: "col-md-5" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.mostraImagen1
                ? [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("Imagen PCR")
                    ]),
                    _vm._v(" "),
                    _vm.validarCroppie1
                      ? [
                          _c("Croppie", {
                            attrs: {
                              id: "croppie1",
                              imagen: _vm.mostraImagen1,
                              mostrarBtnCroppie: _vm.mostrarBtnCroppie1,
                              enableZoom: false,
                              zoom: 0,
                              editar: true,
                              boundaryHeigth: 300,
                              viewportWidth: 200
                            },
                            on: { cambiarValorImagen: _vm.cambiarValorImagen1 }
                          })
                        ]
                      : [
                          _c("Croppie", {
                            attrs: {
                              id: "croppie1",
                              imagen: _vm.mostraImagen1,
                              mostrarBtnCroppie: _vm.mostrarBtnCroppie1,
                              zoom: 1,
                              enableZoom: true,
                              editar: false,
                              boundaryHeigth: 300,
                              viewportWidth: 200
                            },
                            on: { cambiarValorImagen: _vm.cambiarValorImagen1 }
                          })
                        ]
                  ]
                : [_vm._m(4)]
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.mostraImagen2
                ? [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("Imagen Secuenciación")
                    ]),
                    _vm._v(" "),
                    _vm.validarCroppie2
                      ? [
                          _c("Croppie", {
                            attrs: {
                              id: "croppie2",
                              imagen: _vm.mostraImagen2,
                              mostrarBtnCroppie: _vm.mostrarBtnCroppie2,
                              enableZoom: false,
                              zoom: 0,
                              editar: true,
                              boundaryHeigth: 300,
                              viewportWidth: 300
                            },
                            on: { cambiarValorImagen: _vm.cambiarValorImagen2 }
                          })
                        ]
                      : [
                          _c("Croppie", {
                            attrs: {
                              id: "croppie2",
                              imagen: _vm.mostraImagen2,
                              mostrarBtnCroppie: _vm.mostrarBtnCroppie2,
                              zoom: 1,
                              enableZoom: true,
                              editar: false,
                              boundaryHeigth: 300,
                              viewportWidth: 300
                            },
                            on: { cambiarValorImagen: _vm.cambiarValorImagen2 }
                          })
                        ]
                  ]
                : [_vm._m(5)]
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("F")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("R")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Genero")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Especie")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [_vm._v("SIN IMAGEN PCR")])
        ])
      ])
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
            _vm._v("SIN IMAGEN DE SECUENCIACIÓN")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=289d4e7c&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=289d4e7c& ***!
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
                  _c("FormIdentiMolecu", {
                    attrs: {
                      modificarInfo: _vm.modificarForm,
                      info: _vm.getIdentiMolecu
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
                [_vm._v("Eliminar Identificación Molecular")]
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
              _c("p", [_vm._v("Esta segura/o de eliminar la Identificación?.")])
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
        _vm._v("\n          Identificación Molecular\n        ")
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
            _vm._v("AÚN NO SE HA AGREGADO LA IDENTIFICACIÓN")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormIdentiMolecuComponent_vue_vue_type_template_id_e9d8b1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormIdentiMolecuComponent.vue?vue&type=template&id=e9d8b1ea& */ "./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=e9d8b1ea&");
/* harmony import */ var _FormIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormIdentiMolecuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormIdentiMolecuComponent_vue_vue_type_template_id_e9d8b1ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormIdentiMolecuComponent_vue_vue_type_template_id_e9d8b1ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormIdentiMolecuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=e9d8b1ea&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=e9d8b1ea& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_template_id_e9d8b1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormIdentiMolecuComponent.vue?vue&type=template&id=e9d8b1ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=e9d8b1ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_template_id_e9d8b1ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_template_id_e9d8b1ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoIdentiMolecuComponent_vue_vue_type_template_id_289d4e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoIdentiMolecuComponent.vue?vue&type=template&id=289d4e7c& */ "./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=289d4e7c&");
/* harmony import */ var _InfoIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoIdentiMolecuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoIdentiMolecuComponent_vue_vue_type_template_id_289d4e7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoIdentiMolecuComponent_vue_vue_type_template_id_289d4e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoIdentiMolecuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=289d4e7c&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=289d4e7c& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_template_id_289d4e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoIdentiMolecuComponent.vue?vue&type=template&id=289d4e7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=289d4e7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_template_id_289d4e7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_template_id_289d4e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/obtenerImagenCroopie2Imagenes.js":
/*!**************************************************************!*\
  !*** ./resources/js/mixins/obtenerImagenCroopie2Imagenes.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var obtenerImagenCroopie3ImagenesMixin = {
  data: function data() {
    return {
      imagenMiniatura1: "",
      imagenMiniatura2: "",
      imagenError: {
        imagen1: "",
        imagen2: ""
      }
    };
  },
  methods: {
    cambiarValorImagen1: function cambiarValorImagen1(valor) {
      if (valor) {
        this.parametros.imagen1 = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen1 = this.info.img_pcr;
          this.imagenMiniatura1 = this.info.img_pcrPublica;
          this.$refs.inputImagen1.value = "";
        } else {
          this.parametros.imagen1 = "";
        }
      }
    },
    cambiarValorImagen2: function cambiarValorImagen2(valor) {
      if (valor) {
        this.parametros.imagen2 = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen2 = this.info.img_secuen;
          this.imagenMiniatura2 = this.info.img_secuenPublica;
          this.$refs.inputImagen2.value = "";
        } else {
          this.parametros.imagen2 = "";
        }
      }
    },
    obtenerImagen1: function obtenerImagen1(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError.imagen1 = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";

          if (this.required) {
            this.imagenMiniatura1 = "";
            this.parametros.imagen1 = "";
          } else {
            this.imagenMiniatura1 = this.info.img_pcrPublica;
            this.parametros.imagen1 = this.info.img_pcr;
          }

          this.$refs.inputImagen1.value = "";
        } else {
          this.imagenError.imagen1 = "";
          this.cargarImagen(file, "imagen1");
        }
      } else {
        if (this.required) {
          this.imagenMiniatura1 = "";
          this.parametros.imagen1 = "";
        } else {
          this.imagenMiniatura1 = this.info.img_pcrPublica;
          this.parametros.imagen1 = this.info.img_pcr;
        }
      }
    },
    obtenerImagen2: function obtenerImagen2(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError.imagen2 = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";

          if (this.required) {
            this.imagenMiniatura2 = "";
            this.parametros.imagen2 = "";
          } else {
            this.imagenMiniatura2 = this.info.img_secuenPublica;
            this.parametros.imagen2 = this.info.img_secuen;
          }

          this.$refs.inputImagen2.value = "";
        } else {
          this.imagenError.imagen2 = "";
          this.cargarImagen(file, "imagen2");
        }
      } else {
        if (this.required) {
          this.imagenMiniatura2 = "";
          this.parametros.imagen2 = "";
        } else {
          this.imagenMiniatura2 = this.info.img_secuenPublica;
          this.parametros.imagen2 = this.info.img_secuen;
        }
      }
    },
    cargarImagen: function cargarImagen(file, tipo) {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        switch (tipo) {
          case "imagen1":
            _this.imagenMiniatura1 = e.target.result;
            break;

          case "imagen2":
            _this.imagenMiniatura2 = e.target.result;
            break;
        }
      };

      reader.readAsDataURL(file);
    }
  },
  computed: {
    mostraImagen1: function mostraImagen1() {
      return this.imagenMiniatura1;
    },
    mostraImagen2: function mostraImagen2() {
      return this.imagenMiniatura2;
    },
    mostrarBtnCroppie1: function mostrarBtnCroppie1() {
      if (this.info) {
        if (this.imagenMiniatura1 != this.info.img_pcrPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    mostrarBtnCroppie2: function mostrarBtnCroppie2() {
      if (this.info) {
        if (this.imagenMiniatura2 != this.info.img_secuenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    validarCroppie1: function validarCroppie1() {
      if (this.info) {
        if (this.imagenMiniatura1 == this.info.img_pcrPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    validarCroppie2: function validarCroppie2() {
      if (this.info) {
        if (this.imagenMiniatura2 == this.info.img_secuenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    validarBtn: function validarBtn() {
      if (!this.parametros.imagen1 || !this.parametros.imagen2) {
        return true;
      }

      return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (obtenerImagenCroopie3ImagenesMixin);

/***/ })

}]);