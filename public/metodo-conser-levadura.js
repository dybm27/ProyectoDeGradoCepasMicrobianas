(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metodo-conser-levadura"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! croppie */ "./node_modules/croppie/croppie.js");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
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
  props: ["id", "imagen", "mostrarBtnCroppie", "zoom", "editar", "enableZoom", "boundaryHeigth", "viewportWidth"],
  data: function data() {
    return {
      croppie: null,
      btnAprobar: true
    };
  },
  mounted: function mounted() {
    this.crearCroppie();
  },
  methods: {
    crearCroppie: function crearCroppie() {
      var el = document.getElementById(this.id);
      this.croppie = new croppie__WEBPACK_IMPORTED_MODULE_0___default.a(el, {
        viewport: {
          width: this.viewportWidth,
          height: 200
        },
        boundary: {
          height: this.boundaryHeigth
        },
        enableZoom: this.enableZoom
      });
      this.croppie.bind({
        url: this.imagen,
        zoom: this.zoom
      });
    },
    resultado: function resultado() {
      var _this = this;

      this.croppie.result().then(function (res) {
        _this.btnAprobar = false;

        _this.$emit("cambiarValorImagen", res);
      });
    },
    cancelar: function cancelar() {
      this.btnAprobar = true;
      this.$emit("cambiarValorImagen", "");
    }
  },
  watch: {
    imagen: function imagen() {
      if (this.imagen) {
        this.btnAprobar = true;
        this.croppie.destroy();
        this.crearCroppie();
      }
    }
  },
  computed: {
    mostrarMensaje: function mostrarMensaje() {
      if (this.btnAprobar && !this.editar) {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker/locale/es */ "./node_modules/vue2-datepicker/locale/es.js");
/* harmony import */ var vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopieCepas */ "./resources/js/mixins/obtenerImagenCroopieCepas.js");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["idMetodo"],
  components: {
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      lang: vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      info: "",
      parametros: {
        cepaId: "",
        tipo_metodo: null,
        fecha: "",
        numero_replicas: "",
        recuento_microgota: "",
        medio_cultivo: "",
        numero_pases: "",
        observaciones: "",
        imagen: ""
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
  mixins: [_mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_toastr__WEBPACK_IMPORTED_MODULE_3__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_caract", ["accionAgregarTipoCaractLevadura"]), {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;
      this.parametros.fecha = this.parametros.fecha === null ? "" : this.parametros.fecha;

      if (this.tituloForm === "Agregar Método") {
        if (this.parametros.imagen) {
          axios.post("/cepas/levadura/metodo-conser", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;

              _this.accionAgregarCaract({
                tipo: "metodo",
                data: res.data
              });

              _this.toastr("Agregar Método", "Método agregado con exito!!", "success");

              _this.$emit("cambiarVariable");
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
            imagen: ["Favor elija una imagen."]
          };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios.put("/cepas/levadura/metodo-conser/".concat(this.info.id), this.parametros).then(function (res) {
          _this.bloquearBtn = false;

          _this.accionEditarCaract({
            tipo: "metodo",
            data: res.data
          });

          _this.toastr("Editar Método", "Método editado con exito!!", "success");

          _this.$emit("cambiarVariable");
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
      this.parametros.tipo_metodo = this.info.tipo_id;
      this.parametros.medio_cultivo = this.info.medio_cultivo;
      this.parametros.numero_pases = this.info.numero_pases;
      this.parametros.observaciones = this.info.observaciones;
      this.parametros.fecha = this.info.fecha;
      this.parametros.numero_replicas = this.info.numero_replicas;
      this.parametros.recuento_microgota = this.info.recuento_microgota;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    showModal: function showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;

      if (tipo === "metodo_conser") {
        this.modal.titulo = "Agregar Nueva Tipo de Método";
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
        axios.post("/info-caract-levaduras/agregar", parametros).then(function (res) {
          _this2.bloquearBtnModal = false;

          _this2.accionAgregarTipoCaractLevadura({
            info: res.data,
            tipo: _this2.modal.tipo
          });

          _this2.$modal.hide("agregar-caract-info");

          _this2.toastr("Agregar Informacion", "".concat(_this2.modal.tipo, " agregado/a con exito"), "success");
        })["catch"](function (error) {
          if (error.response.status === 403) {
            _this2.$router.push("/sin-acceso");
          } else if (error.response.status === 405) {
            window.location.href = "/";
          } else {
            _this2.bloquearBtnModal = false;

            if (error.response.status === 422) {
              _this2.errors = [];
              _this2.modal.errors = error.response.data.errors;
            }

            _this2.toastr("Error!!", "", "error");
          }
        });
      }
    },
    verificarSelects: function verificarSelects() {
      if (this.obtenerMetodos.length > 0) {
        this.parametros.tipo_metodo = this.obtenerMetodos[0].id;
      } else {
        this.parametros.tipo_metodo = null;
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getPermisoByNombre"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getMetodoConserById"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoMetodoConserLevaduras"]), {
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Método") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required: function required() {
      if (this.tituloForm === "Agregar Método") {
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
    mostrarNumReplicas: function mostrarNumReplicas() {
      if (this.parametros.tipo_metodo != 3) {
        this.parametros.numero_pases = "";
        return true;
      } else {
        this.parametros.numero_replicas = "";
        return false;
      }
    },
    mostrarRecuentoMicrogota: function mostrarRecuentoMicrogota() {
      if (this.parametros.tipo_metodo === 2 || this.parametros.tipo_metodo === 3) {
        this.parametros.recuento_microgota = "";
        return false;
      } else {
        this.parametros.medio_cultivo = "";
        return true;
      }
    },
    obtenerMetodos: function obtenerMetodos() {
      return this.getInfoMetodoConserLevaduras.tipo_metodo;
    }
  }),
  created: function created() {
    this.verificarSelects();

    if (this.idMetodo === 0) {
      this.tituloForm = "Agregar Método";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getMetodoConserById(this.idMetodo);
      this.llenarInfo();
      this.tituloForm = "Editar Método";
      this.nomBtn = "Editar";
    }

    if (this.$route.params.cepaLevaduraId) {
      this.parametros.cepaId = this.$route.params.cepaLevaduraId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  },
  watch: {
    obtenerMetodos: function obtenerMetodos() {
      if (this.obtenerMetodos.length > 0) {
        this.parametros.tipo_metodo = this.obtenerMetodos[0].id;
      } else {
        this.parametros.tipo_metodo = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_caract_FormMetodoConserComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms-caract/FormMetodoConserComponent.vue */ "./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue");
/* harmony import */ var _tablas_TablaMetodoConserLevadurasComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tablas/TablaMetodoConserLevadurasComponent.vue */ "./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormMetodoConser: _forms_caract_FormMetodoConserComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TablaMetodo: _tablas_TablaMetodoConserLevadurasComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      formulario: false,
      id: 0
    };
  },
  methods: {
    abrirFormulario: function abrirFormulario(id) {
      if (id != 0) {
        this.id = id;
      } else {
        this.id = 0;
      }

      this.formulario = !this.formulario;
    },
    cambiarVariableFormulario: function cambiarVariableFormulario() {
      this.formulario = !this.formulario;
    }
  },
  created: function created() {
    var _this = this;

    this.$events.$on("abrirFormularioMetodoLevadura", function (e) {
      return _this.abrirFormulario(e);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metodo_conser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metodo-conser */ "./resources/js/components/cepas/levaduras/tablas/metodo-conser.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
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
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      url: "/info-panel/cepa/levadura/metodos-conser/",
      idMetodoEliminar: "",
      fields: _metodo_conser__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "tipo_id",
        direction: "asc"
      }],
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("cepa", ["accionEliminarCaract"]), {
    cambiarVariable: function cambiarVariable() {
      this.refrescarTabla = false;
    },
    eliminarMetodo: function eliminarMetodo() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/cepas/levadura/metodo-conser/".concat(this.idMetodoEliminar)).then(function (res) {
        _this.bloquearBtnModal = false;

        _this.accionEliminarCaract({
          tipo: "metodo",
          data: res.data
        });

        _this.actualizarTabla();

        _this.toastr("Eliminar Metodo", "Metodo eliminada con exito!!", "success");

        _this.$modal.hide("my_modal_eliminar_metodo");
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this.$router.push("/sin-acceso");
        } else if (error.response.status === 405) {
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.toastr("Error!!", "", "error");
        }
      });
    },
    beforeOpen: function beforeOpen(data) {
      this.idMetodoEliminar = data.params.id;
    },
    actualizarTabla: function actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapGetters("cepa", ["getMetodoConser"]), {
    mostrarTabla: function mostrarTabla() {
      if (this.getMetodoConser != "" && this.getMetodoConser != null) {
        return true;
      }

      return false;
    }
  }),
  created: function created() {
    if (this.$route.params.cepaLevaduraId) {
      this.url += this.$route.params.cepaLevaduraId;
    } else {
      this.url += this.$route.params.cepaId;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c("div", { attrs: { id: _vm.id } }),
      _vm._v(" "),
      _vm.mostrarBtnCroppie
        ? [
            _vm.btnAprobar
              ? [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: { click: _vm.resultado }
                    },
                    [_vm._v("Aprobar Imagen")]
                  ),
                  _vm._v(" "),
                  _vm.mostrarMensaje
                    ? _c("em", { staticClass: "text-danger small" }, [
                        _vm._v("Debe Aprobar la imagen")
                      ])
                    : _vm._e()
                ]
              : [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger float-right",
                      on: { click: _vm.cancelar }
                    },
                    [_vm._v("Cancelar")]
                  )
                ]
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=d5c2fb78&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=d5c2fb78& ***!
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "container mt-3 ml-2 mr-2" }, [
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
                      _vm.getInfoMetodoConserLevaduras
                        ? [
                            _c("label", { attrs: { for: "forma" } }, [
                              _vm._v("Método de Conservación")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group mb-3" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: _vm.parametros.tipo_metodo,
                                      expression: "parametros.tipo_metodo",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { name: "select", id: "forma" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return _vm._n(val)
                                        })
                                      _vm.$set(
                                        _vm.parametros,
                                        "tipo_metodo",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                _vm._l(_vm.obtenerMetodos, function(m, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: m.id } },
                                    [_vm._v(_vm._s(m.nombre))]
                                  )
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _vm.getPermisoByNombre("agregar-otra")
                                ? _c(
                                    "div",
                                    { staticClass: "input-group-append" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.showModal(
                                                "metodo_conser"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-plus"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "container" }, [
                            _vm._m(0),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _c("date-picker", {
                                  attrs: {
                                    lang: _vm.lang,
                                    type: "datetime",
                                    "value-type": "format",
                                    placeholder: "..."
                                  },
                                  model: {
                                    value: _vm.parametros.fecha,
                                    callback: function($$v) {
                                      _vm.$set(_vm.parametros, "fecha", $$v)
                                    },
                                    expression: "parametros.fecha"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors.fecha
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(_vm.errors.fecha[0]))
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _vm.mostrarNumReplicas
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "position-relative form-group"
                                    },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "numero_replicas" } },
                                        [_vm._v("Número de Réplicas")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model.number",
                                            value:
                                              _vm.parametros.numero_replicas,
                                            expression:
                                              "parametros.numero_replicas",
                                            modifiers: { number: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          name: "numero_replicas",
                                          id: "numero_replicas",
                                          placeholder: "...",
                                          type: "text",
                                          required: ""
                                        },
                                        domProps: {
                                          value: _vm.parametros.numero_replicas
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.parametros,
                                              "numero_replicas",
                                              _vm._n($event.target.value)
                                            )
                                          },
                                          blur: function($event) {
                                            return _vm.$forceUpdate()
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.numero_replicas
                                        ? _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.numero_replicas[0]
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              : [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "position-relative form-group"
                                    },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "numero_pases" } },
                                        [_vm._v("Número de Pases")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model.number",
                                            value: _vm.parametros.numero_pases,
                                            expression:
                                              "parametros.numero_pases",
                                            modifiers: { number: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          name: "numero_pases",
                                          id: "numero_pases",
                                          placeholder: "...",
                                          type: "text",
                                          required: ""
                                        },
                                        domProps: {
                                          value: _vm.parametros.numero_pases
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.parametros,
                                              "numero_pases",
                                              _vm._n($event.target.value)
                                            )
                                          },
                                          blur: function($event) {
                                            return _vm.$forceUpdate()
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.numero_pases
                                        ? _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.numero_pases[0]
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _vm.mostrarRecuentoMicrogota
                        ? [
                            _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "recuento_microgota" } },
                                  [_vm._v("Recuento Microgota")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.recuento_microgota,
                                      expression:
                                        "parametros.recuento_microgota"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "recuento_microgota",
                                    id: "recuento_microgota",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: {
                                    value: _vm.parametros.recuento_microgota
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "recuento_microgota",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]
                        : [
                            _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "medio_cultivo" } },
                                  [_vm._v("Medio de Cultivo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.medio_cultivo,
                                      expression: "parametros.medio_cultivo"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "medio_cultivo",
                                    id: "medio_cultivo",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: {
                                    value: _vm.parametros.medio_cultivo
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "medio_cultivo",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ],
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "imagen" } }, [
                            _vm._v("Imagen")
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
                              required: _vm.required
                            },
                            on: { change: _vm.obtenerImagen }
                          }),
                          _vm._v(" "),
                          _vm.imagenError
                            ? _c("span", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.imagenError))
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
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
                            attrs: { name: "text", id: "observaciones" },
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
                        _vm.validarCroppie
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
                                on: {
                                  cambiarValorImagen: _vm.cambiarValorImagen
                                }
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
                                on: {
                                  cambiarValorImagen: _vm.cambiarValorImagen
                                }
                              })
                            ]
                      ]
                    : [_vm._m(1)]
                ],
                2
              )
            ])
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
                    placeholder: "...",
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
    return _c("div", { staticClass: "row" }, [
      _c("label", { attrs: { for: "fecha" } }, [_vm._v("Fecha")])
    ])
  },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=18bb0212&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=18bb0212& ***!
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
  return _c("div", [
    _c("div", { staticClass: "tabs-animation" }, [
      _c("div", { staticClass: "mb-3 card" }, [
        _c("div", { staticClass: "card-header-tab card-header" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-actions-pane-right text-capitalize" },
            [
              !_vm.formulario
                ? [
                    _c(
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
                  ]
                : [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.abrirFormulario(0)
                          }
                        }
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
          [
            !_vm.formulario
              ? [_c("TablaMetodo")]
              : [
                  _c("FormMetodoConser", {
                    attrs: { idMetodo: _vm.id },
                    on: { cambiarVariable: _vm.cambiarVariableFormulario }
                  })
                ]
          ],
          2
        )
      ])
    ])
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
          staticClass: "header-icon lnr-charts icon-gradient bg-happy-green"
        }),
        _vm._v("\n          Métodos de Conservación\n        ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=template&id=44fa09c8&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=template&id=44fa09c8& ***!
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
  return _c(
    "div",
    [
      _vm.mostrarTabla
        ? [
            _c(
              "div",
              { staticClass: "card-body mt-3 ml-2 mr-2" },
              [
                _c("MyVuetable", {
                  ref: "tabla",
                  attrs: {
                    "api-url": _vm.url,
                    fields: _vm.fields,
                    "sort-order": _vm.sortOrder,
                    nameGet: "metodos-levaduras"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "modal",
              {
                attrs: {
                  name: "my_modal_eliminar_metodo",
                  classes: "my_modal",
                  width: 400,
                  height: 300
                },
                on: { "before-open": _vm.beforeOpen }
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
                      [_vm._v("Eliminar Método de Conservación")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.$modal.hide("my_modal_eliminar_metodo")
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
                    _c("p", [_vm._v("Esta segura/o de eliminar el Método?.")])
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
                            return _vm.$modal.hide("my_modal_eliminar_metodo")
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
                        attrs: {
                          type: "button",
                          disabled: _vm.bloquearBtnModal
                        },
                        on: { click: _vm.eliminarMetodo }
                      },
                      [_vm._v("Eliminar")]
                    )
                  ])
                ])
              ]
            )
          ]
        : [_vm._m(0)]
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
            _vm._v("NO SE HA AGREGADO NINGÚN MÉTODO")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CroppieComponent.vue?vue&type=template&id=2cc1e54c& */ "./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&");
/* harmony import */ var _CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CroppieComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CroppieComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CroppieComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CroppieComponent.vue?vue&type=template&id=2cc1e54c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormMetodoConserComponent_vue_vue_type_template_id_d5c2fb78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormMetodoConserComponent.vue?vue&type=template&id=d5c2fb78& */ "./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=d5c2fb78&");
/* harmony import */ var _FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormMetodoConserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormMetodoConserComponent_vue_vue_type_template_id_d5c2fb78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormMetodoConserComponent_vue_vue_type_template_id_d5c2fb78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormMetodoConserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=d5c2fb78&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=d5c2fb78& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_d5c2fb78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormMetodoConserComponent.vue?vue&type=template&id=d5c2fb78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=d5c2fb78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_d5c2fb78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_d5c2fb78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoMetodoConserComponent_vue_vue_type_template_id_18bb0212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoMetodoConserComponent.vue?vue&type=template&id=18bb0212& */ "./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=18bb0212&");
/* harmony import */ var _InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoMetodoConserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoMetodoConserComponent_vue_vue_type_template_id_18bb0212___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoMetodoConserComponent_vue_vue_type_template_id_18bb0212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoMetodoConserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=18bb0212&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=18bb0212& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_18bb0212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoMetodoConserComponent.vue?vue&type=template&id=18bb0212& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=18bb0212&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_18bb0212___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_18bb0212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaMetodoConserLevadurasComponent_vue_vue_type_template_id_44fa09c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaMetodoConserLevadurasComponent.vue?vue&type=template&id=44fa09c8& */ "./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=template&id=44fa09c8&");
/* harmony import */ var _TablaMetodoConserLevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaMetodoConserLevadurasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaMetodoConserLevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaMetodoConserLevadurasComponent_vue_vue_type_template_id_44fa09c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaMetodoConserLevadurasComponent_vue_vue_type_template_id_44fa09c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserLevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaMetodoConserLevadurasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserLevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=template&id=44fa09c8&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=template&id=44fa09c8& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserLevadurasComponent_vue_vue_type_template_id_44fa09c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaMetodoConserLevadurasComponent.vue?vue&type=template&id=44fa09c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue?vue&type=template&id=44fa09c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserLevadurasComponent_vue_vue_type_template_id_44fa09c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserLevadurasComponent_vue_vue_type_template_id_44fa09c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/tablas/metodo-conser.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/tablas/metodo-conser.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre_tipo_metodo",
  sortField: "tipo_id",
  title: "Tipo de Método",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "numero_replicas",
  sortField: "numero_replicas",
  title: "Número de Replicas",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "numeroReplicas"
}, {
  name: "recuento_microgota",
  sortField: "recuento_microgota",
  title: "Recuento Microgota",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "recuentoMicorgota"
}, {
  name: "medio_cultivo",
  sortField: "medio_cultivo",
  title: "Medio de Cultivo",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "medioCultivo"
}, {
  name: "numero_pases",
  sortField: "numero_pases",
  title: "Número de Pases",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "numeroPases"
}, {
  name: "fecha",
  sortField: "fecha",
  title: "Fecha",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "formatDate"
}, {
  name: "imagenPublica",
  title: "Imagen",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "imagen"
}, {
  name: "__component:acciones_tabla_metodo_conser_levadura",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/mixins/obtenerImagenCroopieCepas.js":
/*!**********************************************************!*\
  !*** ./resources/js/mixins/obtenerImagenCroopieCepas.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var obtenerImagenCroopieCepasMixin = {
  data: function data() {
    return {
      imagenMiniatura: "",
      imagenError: ""
    };
  },
  methods: {
    cambiarValorImagen: function cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen = this.info.imagen;
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";

          if (this.info) {
            this.imagenMiniatura = this.info.imagenPublica;
            this.parametros.imagen = this.info.imagen;
          } else {
            this.imagenMiniatura = "";
            this.parametros.imagen = "";
          }
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        if (this.info) {
          this.imagenMiniatura = this.info.imagenPublica;
          this.parametros.imagen = this.info.imagen;
        } else {
          this.parametros.imagen = "";
          this.imagenMiniatura = "";
        }
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this = this;

      var reader = new Image();

      reader.onload = function (e) {
        _this.imagenMiniatura = reader.src;
      };

      reader.src = URL.createObjectURL(file);
    }
  },
  computed: {
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    },
    mostrarBtnCroppie: function mostrarBtnCroppie() {
      if (this.info) {
        if (this.imagenMiniatura != this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    validarCroppie: function validarCroppie() {
      if (this.info) {
        if (this.imagenMiniatura == this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    validarBtn: function validarBtn() {
      if (!this.parametros.imagen) {
        return true;
      }

      return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (obtenerImagenCroopieCepasMixin);

/***/ })

}]);