(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caract-micro-hongo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopie3Imagenes */ "./resources/js/mixins/obtenerImagenCroopie3Imagenes.js");
/* harmony import */ var _CroppieCepasComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../CroppieCepasComponent.vue */ "./resources/js/components/cepas/CroppieCepasComponent.vue");
/* harmony import */ var _ImagenesComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ImagenesComponent.vue */ "./resources/js/components/cepas/ImagenesComponent.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CroppieCepas: _CroppieCepasComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Imagenes: _ImagenesComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["info", "modificarInfo"],
  data: function data() {
    return {
      parametros: {
        cepaId: "",
        conidioforo: null,
        fialides: "Presencia",
        fialides_forma: "",
        fialides_otra_caracteristica: "",
        vesicula: "Presencia",
        espora_asexual: null,
        esporas_asexuales_conidios_tamano: "Grande",
        esporas_asexuales_conidios_color: "",
        esporas_asexuales_conidios_forma: "",
        esporas_asexuales_conidios_otras: "",
        espora_sexual: null,
        otras_estructuras: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        descripcion_imagenes: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: []
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_obtenerImagenCroopie3Imagenes__WEBPACK_IMPORTED_MODULE_2__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_caract", ["accionAgregarTipoCaractHongo"]), {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;

      if (this.parametros.fialides === "Ausencia") {
        this.parametros.fialides_forma = "";
        this.parametros.fialides_otra_caracteristica = "";
      }

      if (this.parametros.espora_asexual != 2) {
        this.parametros.esporas_asexuales_conidios_tamano = "";
        this.parametros.esporas_asexuales_conidios_color = "";
        this.parametros.esporas_asexuales_conidios_forma = "";
        this.parametros.esporas_asexuales_conidios_otras = "";
      }

      if (this.tituloForm === "Agregar Característica") {
        if (this.parametros.imagen1) {
          axios.post("/cepas/hongo/caract-micro", this.parametros).then(function (res) {
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

              _this.toastr("Agregar Característica Microscópica", "Característica Microscópica agregada con éxito!", "success");
            }
          })["catch"](function (error) {
            _this.bloquearBtn = false;

            if (error.response.status === 422) {
              _this.errors = [];
              _this.errors = error.response.data.errors;
            }

            _this.toastr("Error!!", "", "error");
          });
        } else {
          this.bloquearBtn = false;
          this.errors = {
            imagen: ["Favor elija al menos una imagen."]
          };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios.put("/cepas/hongo/caract-micro/".concat(this.info.id), this.parametros).then(function (res) {
          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
            window.location.href = "/";
          } else {
            _this.bloquearBtn = false;
            _this.errors = [];

            _this.$emit("editar", res.data);

            _this.toastr("Editar Característica Microscópica", "Característica Microscópica editada con exito!!", "success");
          }
        })["catch"](function (error) {
          _this.bloquearBtn = false;

          if (error.response.status === 422) {
            _this.errors = [];
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!", "", "error");
        });
      }
    },
    showModal: function showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;

      if (tipo === "conidioforo") {
        this.modal.titulo = "Agregar Nuevo Conidióforo";
      } else if (tipo === "espora_asexual") {
        this.modal.titulo = "Agregar Nueva Espora Asexual";
      } else if (tipo === "espora_sexual") {
        this.modal.titulo = "Agregar Nueva Espora Asexual";
      }

      this.$modal.show("agregar-caract-info");
    },
    agregarInfo: function agregarInfo() {
      var _this2 = this;

      if (this.modal.input === "") {
        this.modal.errors = {
          nombre: {
            0: "Favor llenar este campo"
          }
        };
      } else {
        this.bloquearBtnModal = true;
        var parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input
        };
        axios.post("/info-caract-hongos/agregar", parametros).then(function (res) {
          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
            window.location.href = "/";
          } else {
            _this2.bloquearBtnModal = false;

            _this2.accionAgregarTipoCaractHongo({
              info: res.data,
              tipo: _this2.modal.tipo
            });

            _this2.$modal.hide("agregar-caract-info");

            _this2.toastr("Agregar Informacion", "".concat(_this2.modal.tipo, " agregado/a con exito"), "success");
          }
        })["catch"](function (error) {
          _this2.bloquearBtnModal = false;

          if (error.response.status === 422) {
            _this2.errors = [];
            _this2.modal.errors = error.response.data.errors;
          }

          _this2.toastr("Error!!", "", "error");
        });
      }
    },
    llenarInfo: function llenarInfo() {
      this.imagenes = [];
      this.parametros.conidioforo = this.info.conidioforo_id;
      this.parametros.fialides = this.info.fialides;
      this.parametros.fialides_forma = this.info.fialides_forma;
      this.parametros.fialides_otra_caracteristica = this.info.fialides_otra_caracteristica;
      this.parametros.vesicula = this.info.vesicula;
      this.parametros.espora_asexual = this.info.espora_asexual_id;
      this.parametros.esporas_asexuales_conidios_tamano = this.info.esporas_asexuales_conidios_tamano === null ? "Grande" : this.info.esporas_asexuales_conidios_tamano;
      this.parametros.esporas_asexuales_conidios_color = this.info.esporas_asexuales_conidios_color;
      this.parametros.esporas_asexuales_conidios_forma = this.info.esporas_asexuales_conidios_forma;
      this.parametros.esporas_asexuales_conidios_otras = this.info.esporas_asexuales_conidios_otras;
      this.parametros.espora_sexual = this.info.espora_sexual_id;
      this.parametros.otras_estructuras = this.info.otras_estructuras;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.llenarArregloImagenes();
    },
    accionImagen: function accionImagen(data) {
      this.$emit("editar", data);
    },
    verificarSelects: function verificarSelects() {
      if (this.obtenerConidioforos.length > 0) {
        this.parametros.conidioforo = this.obtenerConidioforos[0].id;
      } else {
        this.parametros.conidioforo = null;
      }

      if (this.obtenerEsporasAsexuales.length > 0) {
        this.parametros.espora_asexual = this.obtenerEsporasAsexuales[0].id;
      } else {
        this.parametros.espora_asexual = null;
      }

      if (this.obtenerEsporasSexuales.length > 0) {
        this.parametros.espora_sexual = this.obtenerEsporasSexuales[0].id;
      } else {
        this.parametros.espora_sexual = null;
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMicroHongos"]), {
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
    obtenerConidioforos: function obtenerConidioforos() {
      return this.getInfoCaractMicroHongos.conidioforos;
    },
    obtenerEsporasAsexuales: function obtenerEsporasAsexuales() {
      return this.getInfoCaractMicroHongos.esporas_asexuales;
    },
    obtenerEsporasSexuales: function obtenerEsporasSexuales() {
      return this.getInfoCaractMicroHongos.esporas_sexuales;
    }
  }),
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
  },
  created: function created() {
    this.verificarSelects();
  },
  watch: {
    modificarInfo: function modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    },
    obtenerConidioforos: function obtenerConidioforos() {
      if (this.obtenerConidioforos.length > 0) {
        this.parametros.conidioforo = this.obtenerConidioforos[0].id;
      } else {
        this.parametros.conidioforo = null;
      }
    },
    obtenerEsporasAsexuales: function obtenerEsporasAsexuales() {
      if (this.obtenerEsporasAsexuales.length > 0) {
        this.parametros.espora_asexual = this.obtenerEsporasAsexuales[0].id;
      } else {
        this.parametros.espora_asexual = null;
      }
    },
    obtenerEsporasSexuales: function obtenerEsporasSexuales() {
      if (this.obtenerEsporasSexuales.length > 0) {
        this.parametros.espora_sexual = this.obtenerEsporasSexuales[0].id;
      } else {
        this.parametros.espora_sexual = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _forms_caract_FormCaractMicroComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms-caract/FormCaractMicroComponent.vue */ "./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue");
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
    FormCaractMicro: _forms_caract_FormCaractMicroComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        tipo: "micro",
        data: data
      });
    },
    editar: function editar(data) {
      this.accionEditarCaract({
        tipo: "micro",
        data: data
      });
      this.modificarForm = true;
    },
    eliminar: function eliminar() {
      var _this = this;

      axios["delete"]("/cepas/hongo/caract-micro/".concat(this.getCaractMicro.id)).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.mostrarBtnAgregar = true;
          _this.mostrarForm = false;

          _this.$modal.hide("my_modal");

          _this.accionEliminarCaract({
            tipo: "micro",
            data: res.data
          });

          _this.toastr("Eliminar Característica", "Característica Microscópica eliminada con exito!!", "success");
        }
      })["catch"](function (error) {
        _this.toastr("Error!!", "", "error");
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getCaractMicro"]), {
    mostrarBtnEliminar: function mostrarBtnEliminar() {
      if (this.getCaractMicro) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar: function mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getCaractMicro) {
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
    if (this.getCaractMicro) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=template&id=ea463a46&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=template&id=ea463a46& ***!
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
    { staticClass: "mt-4 mr-4 ml-4" },
    [
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c("div", { staticClass: "col-sm-6" }, [
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
                  _vm.getInfoCaractMicroHongos
                    ? [
                        _c("label", { attrs: { for: "conidioforo" } }, [
                          _vm._v("Conidióforo")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group mb-3" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.conidioforo,
                                  expression: "parametros.conidioforo"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "select", id: "conidioforo" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.parametros,
                                    "conidioforo",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.obtenerConidioforos, function(f, index) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: f.id } },
                                [_vm._v(_vm._s(f.nombre))]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showModal("conidioforo")
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-plus" })]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "fialides" } }, [
                          _vm._v("Fiálides")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-radio custom-control custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.fialides,
                                    expression: "parametros.fialides"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "fialides1",
                                  name: "fialides",
                                  value: "Presencia"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.parametros.fialides,
                                    "Presencia"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.parametros,
                                      "fialides",
                                      "Presencia"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "fialides1" }
                                },
                                [_vm._v("Presencia")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-radio custom-control custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.fialides,
                                    expression: "parametros.fialides"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "fialides2",
                                  name: "fialides",
                                  value: "Ausencia"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.parametros.fialides,
                                    "Ausencia"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.parametros,
                                      "fialides",
                                      "Ausencia"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "fialides2" }
                                },
                                [_vm._v("Ausencia")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.parametros.fialides === "Presencia"
                            ? _c(
                                "div",
                                { staticClass: "position-relative form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "fialides_forma" } },
                                    [_vm._v("Forma")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.fialides_forma,
                                        expression: "parametros.fialides_forma"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "fialides_forma",
                                      id: "fialides_forma",
                                      placeholder: "...",
                                      type: "text",
                                      required: ""
                                    },
                                    domProps: {
                                      value: _vm.parametros.fialides_forma
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.parametros,
                                          "fialides_forma",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      attrs: {
                                        for: "fialides_otra_caracteristica"
                                      }
                                    },
                                    [_vm._v("Otras características")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.parametros
                                            .fialides_otra_caracteristica,
                                        expression:
                                          "parametros.fialides_otra_caracteristica"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "fialides_otra_caracteristica",
                                      id: "fialides_otra_caracteristica",
                                      placeholder: "...",
                                      type: "text"
                                    },
                                    domProps: {
                                      value:
                                        _vm.parametros
                                          .fialides_otra_caracteristica
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.parametros,
                                          "fialides_otra_caracteristica",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "fialides" } }, [
                          _vm._v("Vesícula")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group mb-3" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-radio custom-control custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.vesicula,
                                    expression: "parametros.vesicula"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "vesicula1",
                                  name: "vesicula",
                                  value: "Presencia"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.parametros.vesicula,
                                    "Presencia"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.parametros,
                                      "vesicula",
                                      "Presencia"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "vesicula1" }
                                },
                                [_vm._v("Presencia")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-radio custom-control custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.vesicula,
                                    expression: "parametros.vesicula"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "vesicula2",
                                  name: "vesicula",
                                  value: "Ausencia"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.parametros.vesicula,
                                    "Ausencia"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.parametros,
                                      "vesicula",
                                      "Ausencia"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "vesicula2" }
                                },
                                [_vm._v("Ausencia")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "espora_asexual" } }, [
                          _vm._v("Espora Asexual")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group mb-3" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.espora_asexual,
                                  expression: "parametros.espora_asexual"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "select", id: "espora_asexual" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.parametros,
                                    "espora_asexual",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.obtenerEsporasAsexuales, function(
                              b,
                              index
                            ) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: b.id } },
                                [_vm._v(_vm._s(b.nombre))]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showModal("espora_asexual")
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-plus" })]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.parametros.espora_asexual === 2
                          ? _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for: "esporas_asexuales_conidios_tamano"
                                    }
                                  },
                                  [_vm._v("Tamaño")]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-radio custom-control custom-control-inline"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.parametros
                                                .esporas_asexuales_conidios_tamano,
                                            expression:
                                              "parametros.esporas_asexuales_conidios_tamano"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "radio",
                                          id:
                                            "esporas_asexuales_conidios_tamano1",
                                          name:
                                            "esporas_asexuales_conidios_tamano",
                                          value: "Grande"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.parametros
                                              .esporas_asexuales_conidios_tamano,
                                            "Grande"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.parametros,
                                              "esporas_asexuales_conidios_tamano",
                                              "Grande"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: {
                                            for:
                                              "esporas_asexuales_conidios_tamano1"
                                          }
                                        },
                                        [_vm._v("Grande")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-radio custom-control custom-control-inline"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.parametros
                                                .esporas_asexuales_conidios_tamano,
                                            expression:
                                              "parametros.esporas_asexuales_conidios_tamano"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "radio",
                                          id:
                                            "esporas_asexuales_conidios_tamano2",
                                          name:
                                            "esporas_asexuales_conidios_tamano",
                                          value: "Mediano"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.parametros
                                              .esporas_asexuales_conidios_tamano,
                                            "Mediano"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.parametros,
                                              "esporas_asexuales_conidios_tamano",
                                              "Mediano"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: {
                                            for:
                                              "esporas_asexuales_conidios_tamano2"
                                          }
                                        },
                                        [_vm._v("Mediano")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-radio custom-control custom-control-inline"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.parametros
                                                .esporas_asexuales_conidios_tamano,
                                            expression:
                                              "parametros.esporas_asexuales_conidios_tamano"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "radio",
                                          id:
                                            "esporas_asexuales_conidios_tamano3",
                                          name:
                                            "esporas_asexuales_conidios_tamano",
                                          value: "Pequeño"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.parametros
                                              .esporas_asexuales_conidios_tamano,
                                            "Pequeño"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.parametros,
                                              "esporas_asexuales_conidios_tamano",
                                              "Pequeño"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: {
                                            for:
                                              "esporas_asexuales_conidios_tamano3"
                                          }
                                        },
                                        [_vm._v("Pequeño")]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for: "esporas_asexuales_conidios_color"
                                    }
                                  },
                                  [_vm._v("Color")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.parametros
                                          .esporas_asexuales_conidios_color,
                                      expression:
                                        "parametros.esporas_asexuales_conidios_color"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "esporas_asexuales_conidios_color",
                                    id: "esporas_asexuales_conidios_color",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.parametros
                                        .esporas_asexuales_conidios_color
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "esporas_asexuales_conidios_color",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for: "esporas_asexuales_conidios_forma"
                                    }
                                  },
                                  [_vm._v("Forma")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.parametros
                                          .esporas_asexuales_conidios_forma,
                                      expression:
                                        "parametros.esporas_asexuales_conidios_forma"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "esporas_asexuales_conidios_forma",
                                    id: "esporas_asexuales_conidios_forma",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.parametros
                                        .esporas_asexuales_conidios_forma
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "esporas_asexuales_conidios_forma",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for: "esporas_asexuales_conidios_otras"
                                    }
                                  },
                                  [_vm._v("Otras características")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.parametros
                                          .esporas_asexuales_conidios_otras,
                                      expression:
                                        "parametros.esporas_asexuales_conidios_otras"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "esporas_asexuales_conidios_otras",
                                    id: "esporas_asexuales_conidios_otras",
                                    placeholder: "...",
                                    type: "text"
                                  },
                                  domProps: {
                                    value:
                                      _vm.parametros
                                        .esporas_asexuales_conidios_otras
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "esporas_asexuales_conidios_otras",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "espora_sexual" } }, [
                          _vm._v("Espora Sexual")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group mb-3" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.espora_sexual,
                                  expression: "parametros.espora_sexual"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "select", id: "espora_sexual" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.parametros,
                                    "espora_sexual",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.obtenerEsporasSexuales, function(
                              b,
                              index
                            ) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: b.id } },
                                [_vm._v(_vm._s(b.nombre))]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showModal("espora_sexual")
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-plus" })]
                            )
                          ])
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.required
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
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "otras_estructuras" } }, [
                      _vm._v("Otras estructuras")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.parametros.otras_estructuras,
                          expression: "parametros.otras_estructuras"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "text", id: "otras_estructuras" },
                      domProps: { value: _vm.parametros.otras_estructuras },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.parametros,
                            "otras_estructuras",
                            $event.target.value
                          )
                        }
                      }
                    })
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
                ],
                2
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _vm.required
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
                          tipoCepa: "hongo/caract-micro",
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
      ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "agregar-caract-info",
            classes: "my_modal",
            width: 450,
            height: 450
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
                [_vm._v(_vm._s(_vm.modal.titulo))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("agregar-caract-info")
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
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modal.input,
                      expression: "modal.input"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "nombre",
                    id: "nombre",
                    placeholder: " ...",
                    type: "text",
                    required: ""
                  },
                  domProps: { value: _vm.modal.input },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.modal, "input", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.modal.errors.nombre
                  ? _c("span", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.modal.errors.nombre[0]))
                    ])
                  : _vm._e()
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
                      return _vm.$modal.hide("agregar-caract-info")
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
                  on: { click: _vm.agregarInfo }
                },
                [_vm._v("Agregar")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=template&id=277e0d10&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=template&id=277e0d10& ***!
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
                  _c("FormCaractMicro", {
                    attrs: {
                      modificarInfo: _vm.modificarForm,
                      info: _vm.getCaractMicro
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
                [_vm._v("Eliminar Característica Microscópica")]
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
        _vm._v("\n          Características Microscópicas\n        ")
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

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormCaractMicroComponent_vue_vue_type_template_id_ea463a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormCaractMicroComponent.vue?vue&type=template&id=ea463a46& */ "./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=template&id=ea463a46&");
/* harmony import */ var _FormCaractMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCaractMicroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormCaractMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormCaractMicroComponent_vue_vue_type_template_id_ea463a46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormCaractMicroComponent_vue_vue_type_template_id_ea463a46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractMicroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=template&id=ea463a46&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=template&id=ea463a46& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMicroComponent_vue_vue_type_template_id_ea463a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractMicroComponent.vue?vue&type=template&id=ea463a46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue?vue&type=template&id=ea463a46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMicroComponent_vue_vue_type_template_id_ea463a46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMicroComponent_vue_vue_type_template_id_ea463a46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoCaractMicroComponent_vue_vue_type_template_id_277e0d10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoCaractMicroComponent.vue?vue&type=template&id=277e0d10& */ "./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=template&id=277e0d10&");
/* harmony import */ var _InfoCaractMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoCaractMicroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoCaractMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoCaractMicroComponent_vue_vue_type_template_id_277e0d10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoCaractMicroComponent_vue_vue_type_template_id_277e0d10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractMicroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=template&id=277e0d10&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=template&id=277e0d10& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMicroComponent_vue_vue_type_template_id_277e0d10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractMicroComponent.vue?vue&type=template&id=277e0d10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue?vue&type=template&id=277e0d10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMicroComponent_vue_vue_type_template_id_277e0d10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMicroComponent_vue_vue_type_template_id_277e0d10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);