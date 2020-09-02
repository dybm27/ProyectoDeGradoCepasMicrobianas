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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      errors: [],
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido"
      }
    };
  },
  validations: {
    parametros: {
      oxidasa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      catalasa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      citrato: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      tsi: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      lia: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      sim: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      rm: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      vp: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      nitrato: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      caldo_urea: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      of: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      glucosa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      lactosa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      manitol: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      xilosa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      arabinosa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      sacarosa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      almidon: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      lecitinasa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      lipasa: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hidro_caseina: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hidro_gelatina: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hidro_urea: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      creci_nacl: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      creci_dif_temp: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      tincion_gram: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      tincion_esporas: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      ubicacion_esporas: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      tincion_capsula: {
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
    cambiarValorImagen: function cambiarValorImagen(datos) {
      switch (datos.num) {
        case 1:
          this.parametros.imagen1 = datos.data;
          break;

        case 2:
          this.parametros.imagen2 = datos.data;
          break;

        case 3:
          this.parametros.imagen3 = datos.data;
          break;
      }
    },
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;
      this.$v.parametros.$touch();

      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Característica") {
          axios.post("/cepas/bacteria/caract-bioqui", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
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
          axios.put("/cepas/bacteria/caract-bioqui/".concat(this.info.id), this.parametros).then(function (res) {
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
/* harmony import */ var _forms_caract_FormCaractBioquiComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms-caract/FormCaractBioquiComponent.vue */ "./resources/js/components/cepas/bacterias/forms-caract/FormCaractBioquiComponent.vue");
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
            _vm.errors != ""
              ? [
                  _c(
                    "div",
                    { staticClass: "alert alert-danger" },
                    _vm._l(_vm.errors, function(item, index) {
                      return _c("p", { key: index }, [_vm._v(_vm._s(item[0]))])
                    }),
                    0
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.oxidasa.$model,
                                expression: "$v.parametros.oxidasa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.oxidasa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "oxidasa",
                              id: "oxidasa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.oxidasa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.oxidasa,
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
                          _vm.$v.parametros.oxidasa.$error &&
                          !_vm.$v.parametros.oxidasa.required
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
                          _c("label", { attrs: { for: "catalasa" } }, [
                            _vm._v("Catalasa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.catalasa.$model,
                                expression: "$v.parametros.catalasa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.catalasa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "catalasa",
                              id: "catalasa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.catalasa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.catalasa,
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
                          _vm.$v.parametros.catalasa.$error &&
                          !_vm.$v.parametros.catalasa.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.citrato.$model,
                                expression: "$v.parametros.citrato.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.citrato.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "citrato",
                              id: "citrato",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.citrato.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.citrato,
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
                          _vm.$v.parametros.citrato.$error &&
                          !_vm.$v.parametros.citrato.required
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
                          _c("label", { attrs: { for: "tsi" } }, [
                            _vm._v("TSI")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.tsi.$model,
                                expression: "$v.parametros.tsi.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.tsi.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "tsi",
                              id: "tsi",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: { value: _vm.$v.parametros.tsi.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.tsi,
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
                          _vm.$v.parametros.tsi.$error &&
                          !_vm.$v.parametros.tsi.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.glucosa.$model,
                                expression: "$v.parametros.glucosa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.glucosa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "glucosa",
                              id: "glucosa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.glucosa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.glucosa,
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
                          _vm.$v.parametros.glucosa.$error &&
                          !_vm.$v.parametros.glucosa.required
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
                          _c("label", { attrs: { for: "lactosa" } }, [
                            _vm._v("Lactosa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.lactosa.$model,
                                expression: "$v.parametros.lactosa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.lactosa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "lactosa",
                              id: "lactosa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.lactosa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.lactosa,
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
                          _vm.$v.parametros.lactosa.$error &&
                          !_vm.$v.parametros.lactosa.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.manitol.$model,
                                expression: "$v.parametros.manitol.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.manitol.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "manitol",
                              id: "manitol",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.manitol.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.manitol,
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
                          _vm.$v.parametros.manitol.$error &&
                          !_vm.$v.parametros.manitol.required
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
                          _c("label", { attrs: { for: "xilosa" } }, [
                            _vm._v("Xilosa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.xilosa.$model,
                                expression: "$v.parametros.xilosa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.xilosa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "xilosa",
                              id: "xilosa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.xilosa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.xilosa,
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
                          _vm.$v.parametros.xilosa.$error &&
                          !_vm.$v.parametros.xilosa.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.arabinosa.$model,
                                expression: "$v.parametros.arabinosa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.arabinosa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "arabinosa",
                              id: "arabinosa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.arabinosa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.arabinosa,
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
                          _vm.$v.parametros.arabinosa.$error &&
                          !_vm.$v.parametros.arabinosa.required
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
                          _c("label", { attrs: { for: "sacarosa" } }, [
                            _vm._v("Sacarosa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.sacarosa.$model,
                                expression: "$v.parametros.sacarosa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.sacarosa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "sacarosa",
                              id: "sacarosa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.sacarosa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.sacarosa,
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
                          _vm.$v.parametros.sacarosa.$error &&
                          !_vm.$v.parametros.sacarosa.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.lia.$model,
                                expression: "$v.parametros.lia.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.lia.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "lia",
                              id: "lia",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: { value: _vm.$v.parametros.lia.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.lia,
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
                          _vm.$v.parametros.lia.$error &&
                          !_vm.$v.parametros.lia.required
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
                          _c("label", { attrs: { for: "sim" } }, [
                            _vm._v("SIM")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.sim.$model,
                                expression: "$v.parametros.sim.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.sim.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "sim",
                              id: "sim",
                              placeholder: "..",
                              type: "text"
                            },
                            domProps: { value: _vm.$v.parametros.sim.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.sim,
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
                          _vm.$v.parametros.sim.$error &&
                          !_vm.$v.parametros.sim.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.rm.$model,
                                expression: "$v.parametros.rm.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.rm.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "rm",
                              id: "rm",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: { value: _vm.$v.parametros.rm.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.rm,
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
                          _vm.$v.parametros.rm.$error &&
                          !_vm.$v.parametros.rm.required
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
                          _c("label", { attrs: { for: "vp" } }, [_vm._v("VP")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.vp.$model,
                                expression: "$v.parametros.vp.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.vp.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "vp",
                              id: "vp",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: { value: _vm.$v.parametros.vp.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.vp,
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
                          _vm.$v.parametros.vp.$error &&
                          !_vm.$v.parametros.vp.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.nitrato.$model,
                                expression: "$v.parametros.nitrato.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.nitrato.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "nitrato",
                              id: "nitrato",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.nitrato.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.nitrato,
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
                          _vm.$v.parametros.nitrato.$error &&
                          !_vm.$v.parametros.nitrato.required
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
                          _c("label", { attrs: { for: "caldo_urea" } }, [
                            _vm._v("Caldo Úrea")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.caldo_urea.$model,
                                expression: "$v.parametros.caldo_urea.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.caldo_urea.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "caldo_urea",
                              id: "caldo_urea",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.caldo_urea.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.caldo_urea,
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
                          _vm.$v.parametros.caldo_urea.$error &&
                          !_vm.$v.parametros.caldo_urea.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.of.$model,
                                expression: "$v.parametros.of.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.of.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "of",
                              id: "of",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: { value: _vm.$v.parametros.of.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.of,
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
                          _vm.$v.parametros.of.$error &&
                          !_vm.$v.parametros.of.required
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
                          _c("label", { attrs: { for: "almidon" } }, [
                            _vm._v("Almidón")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.almidon.$model,
                                expression: "$v.parametros.almidon.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.almidon.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "almidon",
                              id: "almidon",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.almidon.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.almidon,
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
                          _vm.$v.parametros.almidon.$error &&
                          !_vm.$v.parametros.almidon.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.lecitinasa.$model,
                                expression: "$v.parametros.lecitinasa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.lecitinasa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "lecitinasa",
                              id: "lecitinasa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.lecitinasa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.lecitinasa,
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
                          _vm.$v.parametros.lecitinasa.$error &&
                          !_vm.$v.parametros.lecitinasa.required
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
                          _c("label", { attrs: { for: "lipasa" } }, [
                            _vm._v("Lipasa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.lipasa.$model,
                                expression: "$v.parametros.lipasa.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.lipasa.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "lipasa",
                              id: "lipasa",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.lipasa.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.lipasa,
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
                          _vm.$v.parametros.lipasa.$error &&
                          !_vm.$v.parametros.lipasa.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.hidro_caseina.$model,
                                expression:
                                  "$v.parametros.hidro_caseina.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.hidro_caseina.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "hidro_caseina",
                              id: "hidro_caseina",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.hidro_caseina.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.hidro_caseina,
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
                          _vm.$v.parametros.hidro_caseina.$error &&
                          !_vm.$v.parametros.hidro_caseina.required
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
                          _c("label", { attrs: { for: "hidro_gelatina" } }, [
                            _vm._v("Hidrolisís de la Gelatina")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.hidro_gelatina.$model,
                                expression:
                                  "$v.parametros.hidro_gelatina.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.hidro_gelatina.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "hidro_gelatina",
                              id: "hidro_gelatina",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.hidro_gelatina.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.hidro_gelatina,
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
                          _vm.$v.parametros.hidro_gelatina.$error &&
                          !_vm.$v.parametros.hidro_gelatina.required
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
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.hidro_urea.$model,
                                expression: "$v.parametros.hidro_urea.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.hidro_urea.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "hidro_urea",
                              id: "hidro_urea",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.hidro_urea.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.hidro_urea,
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
                          _vm.$v.parametros.hidro_urea.$error &&
                          !_vm.$v.parametros.hidro_urea.required
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
                          _c("label", { attrs: { for: "creci_dif_temp" } }, [
                            _vm._v("Crecimiento en Diferentes Temperaturas")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.creci_dif_temp.$model,
                                expression:
                                  "$v.parametros.creci_dif_temp.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.creci_dif_temp.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "creci_dif_temp",
                              id: "creci_dif_temp",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.creci_dif_temp.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.creci_dif_temp,
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
                          _vm.$v.parametros.creci_dif_temp.$error &&
                          !_vm.$v.parametros.creci_dif_temp.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
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
                                  rawName: "v-model.trim",
                                  value: _vm.$v.parametros.creci_nacl.$model,
                                  expression: "$v.parametros.creci_nacl.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.$v.parametros.creci_nacl.$error
                                  ? "error-input-select"
                                  : ""
                              ],
                              attrs: {
                                name: "creci_nacl",
                                id: "creci_nacl",
                                placeholder: "...",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.$v.parametros.creci_nacl.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.parametros.creci_nacl,
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
                            _vm.$v.parametros.creci_nacl.$error &&
                            !_vm.$v.parametros.creci_nacl.required
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
                      attrs: { disabled: _vm.bloquearBtn }
                    },
                    [_vm._v(_vm._s(_vm.nomBtn))]
                  )
                ])
              ])
            ])
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
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
          url: "bacteria/caract-bioqui"
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