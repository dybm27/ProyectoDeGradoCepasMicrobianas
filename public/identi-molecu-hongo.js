(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["identi-molecu-hongo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopie2Imagenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopie2Imagenes */ "./resources/js/mixins/obtenerImagenCroopie2Imagenes.js");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["info", "modificarInfo"],
  data: function data() {
    return {
      parametros: {
        cepaId: "",
        nombre_forward: "",
        nombre_reversed: "",
        secuencia_forward: "",
        secuencia_reversed: "",
        producto_forward: "",
        producto_reversed: "",
        condiciones_pcr: "",
        blast: "",
        analisis_filogenetico: "",
        observaciones: "",
        imagen1: "",
        imagen2: ""
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
      nombre_forward: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      nombre_reversed: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      secuencia_forward: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      secuencia_reversed: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      producto_forward: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      producto_reversed: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      condiciones_pcr: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      blast: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      analisis_filogenetico: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      imagen1: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      imagen2: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      }
    }
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

      this.bloquearBtn = true;
      this.$v.parametros.$touch();

      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Identificación") {
          axios.post("/cepas/hongo/identi-molecu", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;
              _this.errors = [];
              _this.$refs.inputImagen1.value = "";
              _this.$refs.inputImagen2.value = "";
              _this.tituloForm = "Editar Identificación";
              _this.nomBtn = "Editar";

              _this.$emit("agregar", res.data);

              _this.toastr("Agregar Identificación", "Identificación Molecular agregada con exito!!", "success");
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
          axios.put("/cepas/hongo/identi-molecu/".concat(this.info.id), this.parametros).then(function (res) {
            _this.bloquearBtn = false;
            _this.errors = [];
            _this.$refs.inputImagen1.value = "";
            _this.$refs.inputImagen2.value = "";

            _this.$emit("editar", res.data);

            _this.toastr("Editar Identificación", "Identificación Molecular editada con exito!!", "success");
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
      } else {
        this.bloquearBtn = false;
        this.toastr("Error!!", "Favor llenar correctamente los campos", "error");
      }
    },
    llenarInfo: function llenarInfo() {
      this.parametros.nombre_forward = this.info.nombre_forward;
      this.parametros.nombre_reversed = this.info.nombre_reversed;
      this.parametros.secuencia_forward = this.info.secuencia_forward;
      this.parametros.secuencia_reversed = this.info.secuencia_reversed;
      this.parametros.producto_forward = this.info.producto_forward;
      this.parametros.producto_reversed = this.info.producto_reversed;
      this.parametros.condiciones_pcr = this.info.condiciones_pcr;
      this.parametros.blast = this.info.blast;
      this.parametros.analisis_filogenetico = this.info.analisis_filogenetico;
      this.parametros.observaciones = this.info.observaciones;
      this.parametros.imagen1 = this.info.imagen_pcr;
      this.parametros.imagen2 = this.info.imagen_blast;
      this.imagenMiniatura1 = this.info.imagen_pcrPublica;
      this.imagenMiniatura2 = this.info.imagen_blastPublica;
      this.imagenInfo1 = this.info.imagen_pcr;
      this.imagenInfo2 = this.info.imagen_blast;
      this.imagenInfoPublica1 = this.info.imagen_pcrPublica;
      this.imagenInfoPublica2 = this.info.imagen_blastPublica;
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
    validarTipoForm: function validarTipoForm() {
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

    if (this.$route.params.cepaHongoId) {
      this.parametros.cepaId = this.$route.params.cepaHongoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _forms_caract_FormIdentiMolecuComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms-caract/FormIdentiMolecuComponent.vue */ "./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue");
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
    FormIdentiMolecu: _forms_caract_FormIdentiMolecuComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
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
        tipo: "identi",
        data: data
      });
    },
    editar: function editar(data) {
      this.accionEditarCaract({
        tipo: "identi",
        data: data
      });
      this.modificarForm = true;
    },
    eliminar: function eliminar(data) {
      this.accionEliminarCaract({
        tipo: "identi",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=53711101&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=53711101& ***!
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
      _c("div", { staticClass: "col-md-12" }, [
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
                              rawName: "v-model.trim",
                              value: _vm.$v.parametros.nombre_forward.$model,
                              expression: "$v.parametros.nombre_forward.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          class: [
                            "form-control",
                            _vm.$v.parametros.nombre_forward.$error
                              ? "error-input-select"
                              : ""
                          ],
                          attrs: {
                            placeholder: "Nombre..",
                            name: "nombre_forward",
                            id: "nombre_forward",
                            type: "text"
                          },
                          domProps: {
                            value: _vm.$v.parametros.nombre_forward.$model
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.parametros.nombre_forward,
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
                        _vm.$v.parametros.nombre_forward.$error &&
                        !_vm.$v.parametros.nombre_forward.required
                          ? _c("em", { staticClass: "text-error-input" }, [
                              _vm._v(_vm._s(_vm.mensajes.required))
                            ])
                          : _vm._e()
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
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.parametros.secuencia_forward.$model,
                                expression:
                                  "$v.parametros.secuencia_forward.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.secuencia_forward.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "secuencia_forward",
                              id: "secuencia_forward",
                              placeholder: "Secuencia...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.secuencia_forward.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.secuencia_forward,
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
                          _vm.$v.parametros.secuencia_forward.$error &&
                          !_vm.$v.parametros.secuencia_forward.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
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
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.parametros.producto_forward.$model,
                                expression:
                                  "$v.parametros.producto_forward.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.producto_forward.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "producto_forward",
                              id: "producto_forward",
                              placeholder: "Producto...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.producto_forward.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.producto_forward,
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
                          _vm.$v.parametros.producto_forward.$error &&
                          !_vm.$v.parametros.producto_forward.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
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
                              rawName: "v-model.trim",
                              value: _vm.$v.parametros.nombre_reversed.$model,
                              expression:
                                "$v.parametros.nombre_reversed.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          class: [
                            "form-control",
                            _vm.$v.parametros.nombre_reversed.$error
                              ? "error-input-select"
                              : ""
                          ],
                          attrs: {
                            placeholder: "Nombre..",
                            name: "nombre_reversed",
                            id: "nombre_reversed",
                            type: "text"
                          },
                          domProps: {
                            value: _vm.$v.parametros.nombre_reversed.$model
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.parametros.nombre_reversed,
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
                        _vm.$v.parametros.nombre_reversed.$error &&
                        !_vm.$v.parametros.nombre_reversed.required
                          ? _c("em", { staticClass: "text-error-input" }, [
                              _vm._v(_vm._s(_vm.mensajes.required))
                            ])
                          : _vm._e()
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
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.parametros.secuencia_reversed.$model,
                                expression:
                                  "$v.parametros.secuencia_reversed.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.secuencia_reversed.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "secuencia_reversed",
                              id: "secuencia_reversed",
                              placeholder: "Secuencia...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.secuencia_reversed.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.secuencia_reversed,
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
                          _vm.$v.parametros.secuencia_reversed.$error &&
                          !_vm.$v.parametros.secuencia_reversed.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
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
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.parametros.producto_reversed.$model,
                                expression:
                                  "$v.parametros.producto_reversed.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.producto_reversed.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "producto_reversed",
                              id: "producto_reversed",
                              placeholder: "Producto...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.producto_reversed.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.producto_reversed,
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
                          _vm.$v.parametros.producto_reversed.$error &&
                          !_vm.$v.parametros.producto_reversed.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
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
                          _c("label", { attrs: { for: "imagen_pcr" } }, [
                            _vm._v("Imagen PCR")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "inputImagen1",
                            class: [
                              "form-control-file",
                              _vm.$v.parametros.imagen1.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "imagen_pcr",
                              id: "imagen_pcr",
                              type: "file",
                              accept: "image/jpeg, image/png"
                            },
                            on: { change: _vm.obtenerImagen1 }
                          }),
                          _vm._v(" "),
                          _vm.imagenError.imagen1
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.imagenError.imagen1))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$v.parametros.imagen1.$error &&
                          !_vm.$v.parametros.imagen1.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
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
                          _c("label", { attrs: { for: "imagen_blast" } }, [
                            _vm._v("Imagen BLAST")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "inputImagen2",
                            class: [
                              "form-control-file",
                              _vm.$v.parametros.imagen2.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "imagen_blast",
                              id: "imagen_blast",
                              type: "file",
                              accept: "image/jpeg, image/png"
                            },
                            on: { change: _vm.obtenerImagen2 }
                          }),
                          _vm._v(" "),
                          _vm.imagenError.imagen2
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.imagenError.imagen2))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$v.parametros.imagen2.$error &&
                          !_vm.$v.parametros.imagen2.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
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
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "condiciones_pcr" } }, [
                            _vm._v("Condiciones PCR")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.condiciones_pcr.$model,
                                expression:
                                  "$v.parametros.condiciones_pcr.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.condiciones_pcr.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "condiciones_pcr",
                              id: "condiciones_pcr",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.condiciones_pcr.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.condiciones_pcr,
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
                          _vm.$v.parametros.condiciones_pcr.$error &&
                          !_vm.$v.parametros.condiciones_pcr.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "blast" } }, [
                            _vm._v("Blast")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.blast.$model,
                                expression: "$v.parametros.blast.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.blast.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "blast",
                              id: "blast",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: { value: _vm.$v.parametros.blast.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.blast,
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
                          _vm.$v.parametros.blast.$error &&
                          !_vm.$v.parametros.blast.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
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
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c(
                            "label",
                            { attrs: { for: "analisis_filogenetico" } },
                            [_vm._v("Análisis Filogenético")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.parametros.analisis_filogenetico
                                    .$model,
                                expression:
                                  "$v.parametros.analisis_filogenetico.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.analisis_filogenetico.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "analisis_filogenetico",
                              id: "analisis_filogenetico"
                            },
                            domProps: {
                              value:
                                _vm.$v.parametros.analisis_filogenetico.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.analisis_filogenetico,
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
                          _vm.$v.parametros.analisis_filogenetico.$error &&
                          !_vm.$v.parametros.analisis_filogenetico.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "observaciones" } }, [
                            _vm._v("Observaciones")
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.observaciones,
                                expression: "parametros.observaciones"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "observaciones",
                              id: "observaciones"
                            },
                            domProps: { value: _vm.parametros.observaciones },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "observaciones",
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
                    attrs: { disabled: _vm.bloquearBtn }
                  },
                  [_vm._v(_vm._s(_vm.nomBtnComputed))]
                )
              ],
              2
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
                          _c("croppie", {
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
                          _c("croppie", {
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
                      _vm._v("Imagen BLAST")
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
          _c("b", { staticClass: "text-success" }, [_vm._v("SIN IMAGEN BLAST")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=1e8fcdc6&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=1e8fcdc6& ***!
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
      _c("ModalEliminar", {
        attrs: {
          tipo: "Identificación",
          tipoCaract: "Identificación Molecular",
          caract: _vm.getIdentiMolecu,
          url: "hongo/identi-molecu"
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

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormIdentiMolecuComponent_vue_vue_type_template_id_53711101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormIdentiMolecuComponent.vue?vue&type=template&id=53711101& */ "./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=53711101&");
/* harmony import */ var _FormIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormIdentiMolecuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormIdentiMolecuComponent_vue_vue_type_template_id_53711101___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormIdentiMolecuComponent_vue_vue_type_template_id_53711101___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormIdentiMolecuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=53711101&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=53711101& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_template_id_53711101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormIdentiMolecuComponent.vue?vue&type=template&id=53711101& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue?vue&type=template&id=53711101&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_template_id_53711101___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentiMolecuComponent_vue_vue_type_template_id_53711101___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoIdentiMolecuComponent_vue_vue_type_template_id_1e8fcdc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoIdentiMolecuComponent.vue?vue&type=template&id=1e8fcdc6& */ "./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=1e8fcdc6&");
/* harmony import */ var _InfoIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoIdentiMolecuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoIdentiMolecuComponent_vue_vue_type_template_id_1e8fcdc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoIdentiMolecuComponent_vue_vue_type_template_id_1e8fcdc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoIdentiMolecuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=1e8fcdc6&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=1e8fcdc6& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_template_id_1e8fcdc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoIdentiMolecuComponent.vue?vue&type=template&id=1e8fcdc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue?vue&type=template&id=1e8fcdc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_template_id_1e8fcdc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoIdentiMolecuComponent_vue_vue_type_template_id_1e8fcdc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
      },
      imagenInfo1: "",
      imagenInfo2: "",
      imagenInfoPublica1: "",
      imagenInfoPublica2: ""
    };
  },
  methods: {
    cambiarValorImagen1: function cambiarValorImagen1(valor) {
      if (valor) {
        this.parametros.imagen1 = valor;
      } else {
        if (!this.validarTipoForm) {
          this.parametros.imagen1 = this.imagenInfo1;
          this.imagenMiniatura1 = this.imagenInfoPublica1;
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
        if (!this.validarTipoForm) {
          this.parametros.imagen2 = this.imagenInfo2;
          this.imagenMiniatura2 = this.imagenInfoPublica2;
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

          if (this.validarTipoForm) {
            this.imagenMiniatura1 = "";
            this.parametros.imagen1 = "";
          } else {
            this.imagenMiniatura1 = this.imagenInfoPublica1;
            this.parametros.imagen1 = this.imagenInfo1;
          }

          this.$refs.inputImagen1.value = "";
        } else {
          this.imagenError.imagen1 = "";
          this.cargarImagen(file, "imagen1");
        }
      } else {
        if (this.validarTipoForm) {
          this.imagenMiniatura1 = "";
          this.parametros.imagen1 = "";
        } else {
          this.imagenMiniatura1 = this.imagenInfoPublica1;
          this.parametros.imagen1 = this.imagenInfo1;
        }
      }
    },
    obtenerImagen2: function obtenerImagen2(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError.imagen2 = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";

          if (this.validarTipoForm) {
            this.imagenMiniatura2 = "";
            this.parametros.imagen2 = "";
          } else {
            this.imagenMiniatura2 = this.imagenInfoPublica2;
            this.parametros.imagen2 = this.imagenInfo2;
          }

          this.$refs.inputImagen2.value = "";
        } else {
          this.imagenError.imagen2 = "";
          this.cargarImagen(file, "imagen2");
        }
      } else {
        if (this.validarTipoForm) {
          this.imagenMiniatura2 = "";
          this.parametros.imagen2 = "";
        } else {
          this.imagenMiniatura2 = this.imagenInfoPublica2;
          this.parametros.imagen2 = this.imagenInfo2;
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
        if (this.imagenMiniatura1 != this.imagenInfoPublica1) {
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
        if (this.imagenMiniatura2 != this.imagenInfoPublica2) {
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
        if (this.imagenMiniatura1 == this.imagenInfoPublica1) {
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
        if (this.imagenMiniatura2 == this.imagenInfoPublica2) {
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
/* harmony default export */ __webpack_exports__["default"] = (obtenerImagenCroopie3ImagenesMixin);

/***/ })

}]);