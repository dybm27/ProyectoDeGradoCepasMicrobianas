(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tablas-cepas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websocketsOtraInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/websocketsOtraInfo */ "./resources/js/mixins/websocketsOtraInfo.js");
/* harmony import */ var _tablas_cepas_ModalesComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablas/cepas/ModalesComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue");
/* harmony import */ var _tablas_cepas_generos_TablaGenerosComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablas/cepas/generos/TablaGenerosComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue");
/* harmony import */ var _tablas_cepas_especies_TablaEspeciesComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tablas/cepas/especies/TablaEspeciesComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue");
/* harmony import */ var _tablas_cepas_ordens_TablaOrdensComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tablas/cepas/ordens/TablaOrdensComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue");
/* harmony import */ var _tablas_cepas_clases_TablaClasesComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tablas/cepas/clases/TablaClasesComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue");
/* harmony import */ var _tablas_cepas_phylums_TablaPhylumsComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tablas/cepas/phylums/TablaPhylumsComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue");
/* harmony import */ var _tablas_cepas_divisions_TablaDivisionsComponent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tablas/cepas/divisions/TablaDivisionsComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue");
/* harmony import */ var _tablas_cepas_reinos_TablaReinosComponent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tablas/cepas/reinos/TablaReinosComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue");
/* harmony import */ var _tablas_cepas_familias_TablaFamiliasComponent_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tablas/cepas/familias/TablaFamiliasComponent.vue */ "./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalOtraInfoCepas: _tablas_cepas_ModalesComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TablaEspecies: _tablas_cepas_especies_TablaEspeciesComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TablaOrdens: _tablas_cepas_ordens_TablaOrdensComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TablaGeneros: _tablas_cepas_generos_TablaGenerosComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TablaDivisions: _tablas_cepas_divisions_TablaDivisionsComponent_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    TablaPhylums: _tablas_cepas_phylums_TablaPhylumsComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TablaClases: _tablas_cepas_clases_TablaClasesComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    TablaReinos: _tablas_cepas_reinos_TablaReinosComponent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    TablaFamilias: _tablas_cepas_familias_TablaFamiliasComponent_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  mixins: [Object(_mixins_websocketsOtraInfo__WEBPACK_IMPORTED_MODULE_0__["default"])("CepasInfo")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_10__["default"].mapActions("info_cepas", ["obtenerTiposCepas"])),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_10__["default"].mapState("info_cepas", ["tipos"])),
  created: function created() {
    var _this = this;

    this.obtenerTiposCepas();
    this.$events.$on("verificarBloqueos-generos", function (e) {
      return _this.verificarBloqueos("genero");
    });
    this.$events.$on("verificarBloqueos-especies", function (e) {
      return _this.verificarBloqueos("especie");
    });
    this.$events.$on("verificarBloqueos-ordens", function (e) {
      return _this.verificarBloqueos("orden");
    });
    this.$events.$on("verificarBloqueos-clases", function (e) {
      return _this.verificarBloqueos("clase");
    });
    this.$events.$on("verificarBloqueos-phylums", function (e) {
      return _this.verificarBloqueos("phylum");
    });
    this.$events.$on("verificarBloqueos-divisions", function (e) {
      return _this.verificarBloqueos("division");
    });
    this.$events.$on("verificarBloqueos-reinos", function (e) {
      return _this.verificarBloqueos("reino");
    });
    this.$events.$on("verificarBloqueos-familias", function (e) {
      return _this.verificarBloqueos("familia");
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("verificarBloqueos-generos");
    this.$events.$off("verificarBloqueos-especies");
    this.$events.$off("verificarBloqueos-ordens");
    this.$events.$off("verificarBloqueos-clases");
    this.$events.$off("verificarBloqueos-phylums");
    this.$events.$off("verificarBloqueos-divisions");
    this.$events.$off("verificarBloqueos-reinos");
    this.$events.$off("verificarBloqueos-familias");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
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
  props: ["tipoModal", "tipo"],
  methods: {
    mostrarTabla: function mostrarTabla() {
      this.$emit("mostrarTabla");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsModalOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/websocketsModalOtraInfo */ "./resources/js/mixins/websocketsModalOtraInfo.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: "",
      modal: {
        grupo_microbiano: 1,
        nombre: "",
        tipo: "",
        genero: 1
      },
      errors: "",
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], Object(_mixins_websocketsModalOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("CepasInfo")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_cepas", ["accionAgregarTipoCepa", "accionEditarTipoCepa", "accionEliminarTipoCepa"]), {
    beforeOpenAgregar: function beforeOpenAgregar(data) {
      this.modal.nombre = "";
      this.modal.tipo = data.params.tipo;
      this.modal.grupo_microbiano = 1;
      this.modal.genero = 1;
    },
    agregarTipo: function agregarTipo() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios.post("/info-cepas/agregar", this.modal).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          _this.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

          window.location.href = "/";
        }

        _this.bloquearBtnModal = false;

        _this.accionAgregarTipoCepa({
          info: res.data,
          tipo: _this.modal.tipo
        });

        _this.$events.fire("actualizartabla" + _this.modal.tipo);

        _this.$modal.hide("modal_agregar_tipo_cepa");

        _this.toastr("Agregar ".concat(_this.primeraMayus(_this.modal.tipo)), "".concat(_this.primeraMayus(_this.modal.tipo), " agregado/a con exito"), "success");
      })["catch"](function (error) {
        _this.bloquearBtnModal = false;

        if (error.response) {
          _this.errors = error.response.data.errors;
        }

        _this.toastr("Error!!!!", "", "error");
      });
    },
    beforeOpenEditar: function beforeOpenEditar(data) {
      this.id = data.params.id;
      this.modal.nombre = data.params.nombre;
      this.modal.tipo = data.params.tipo;

      if (data.params.tipo === "genero") {
        this.modal.grupo_microbiano = data.params.grupo;
      } else if (data.params.tipo === "especie") {
        this.modal.genero = data.params.genero;
        this.modal.grupo_microbiano = this.getGenerosById(data.params.genero).grupo_microbiano_id;
      }
    },
    editarTipo: function editarTipo() {
      var _this2 = this;

      this.bloquearBtnModal = true;
      axios.put("/info-cepas/editar/".concat(this.id), this.modal).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          _this2.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

          window.location.href = "/";
        }

        _this2.bloquearBtnModal = false;

        _this2.accionEditarTipoCepa({
          info: res.data,
          tipo: _this2.modal.tipo
        });

        _this2.$events.fire("actualizartabla" + _this2.modal.tipo);

        _this2.toastr("Editar ".concat(_this2.primeraMayus(_this2.modal.tipo)), "".concat(_this2.primeraMayus(_this2.modal.tipo), " editado/a con exito!!"), "success", 5000);

        _this2.$modal.hide("modal_editar_tipo_cepa");
      })["catch"](function (error) {
        _this2.bloquearBtnModal = false;

        if (error.response) {
          _this2.errors = error.response.data;
        }

        _this2.toastr("Error!!!", "", "error", 4000);
      });
    },
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
      this.modal.tipo = data.params.tipo;
    },
    eliminarTipo: function eliminarTipo() {
      var _this3 = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/info-cepas/eliminar/".concat(this.id), {
        data: this.modal
      }).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          _this3.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

          window.location.href = "/";
        }

        _this3.bloquearBtnModal = false;

        if (res.data === "negativo") {
          _this3.toastr("Precaución!!", "El/La " + _this3.modal.tipo + " cuenta con cepas vinculadas, favor eliminarlas", "warning", 8000);
        } else if (res.data === "negativo1") {
          _this3.toastr("Precaución!!", "El Genero cuenta con cepas o especies vinculadas, favor eliminarlas", "warning", 8000);
        } else {
          _this3.accionEliminarTipoCepa({
            info: res.data,
            tipo: _this3.modal.tipo
          });

          _this3.toastr("Eliminar ".concat(_this3.primeraMayus(_this3.modal.tipo)), "".concat(_this3.primeraMayus(_this3.modal.tipo), " eliminado/a con exito!!"), "success", 5000);

          _this3.$events.fire("actualizartabla" + _this3.modal.tipo);
        }

        _this3.$modal.hide("modal_eliminar_tipo_cepa");
      })["catch"](function (error) {
        _this3.bloquearBtnModal = false;

        _this3.toastr("Error!!!", "", "error", 4000);
      });
    },
    primeraMayus: function primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    cambiarGeneroEspecie: function cambiarGeneroEspecie() {
      this.modal.genero = this.getGenerosId(this.modal.grupo_microbiano)[0].id;
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getGenerosId", "getGrupos", "getGenerosById"]), {
    validarNombre: function validarNombre() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      var letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;

      if (this.modal.nombre) {
        if (!letters.test(this.modal.nombre)) {
          this.errors = "Solo se admiten letras.";
          return true;
        } else {
          this.errors = "";
          return false;
        }
      }
    },
    validarBtn: function validarBtn() {
      if (this.validarNombre || !this.modal.nombre) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/cepas/clases/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("clase")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getClases"]), {
    siHayDatos: function siHayDatos() {
      if (this.getClases != "" && this.getClases != null) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/cepas/divisions/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      idCepaEliminar: "",
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("division")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getDivisiones"]), {
    siHayDatos: function siHayDatos() {
      if (this.getDivisiones != "" && this.getDivisiones != null) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/cepas/especies/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("especie")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getEspecies"]), {
    siHayDatos: function siHayDatos() {
      if (this.getEspecies != "" && this.getEspecies != null) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/cepas/familias/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("familia")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getFamilias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getFamilias != "" && this.getFamilias != null) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/cepas/generos/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("genero")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getGeneros"]), {
    siHayDatos: function siHayDatos() {
      if (this.getGeneros != "" && this.getGeneros != null) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/cepas/ordens/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("orden")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getOrdens"]), {
    siHayDatos: function siHayDatos() {
      if (this.getOrdens != "" && this.getOrdens != null) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/cepas/phylums/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("phylum")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getPhylums"]), {
    siHayDatos: function siHayDatos() {
      if (this.getPhylums != "" && this.getPhylums != null) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/cepas/reinos/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("reino")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getReinos"]), {
    siHayDatos: function siHayDatos() {
      if (this.getReinos != "" && this.getReinos != null) {
        return true;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _vm.tipos != ""
        ? [
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-10" }, [_c("TablaGeneros")], 1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-10" }, [_c("TablaEspecies")], 1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-10" }, [_c("TablaOrdens")], 1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-10" }, [_c("TablaClases")], 1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-10" }, [_c("TablaPhylums")], 1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-10" }, [_c("TablaDivisions")], 1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-10" }, [_c("TablaReinos")], 1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-10" }, [_c("TablaFamilias")], 1)
            ])
          ]
        : [_vm._m(0)],
      _vm._v(" "),
      _c("ModalOtraInfoCepas")
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12 d-flex justify-content-center mt-5" },
        [
          _c("div", { staticClass: "loader mt-5" }, [
            _c("div", { staticClass: "ball-spin-fade-loader mt-5" }, [
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div")
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "button",
      {
        staticClass:
          "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
        on: {
          click: function($event) {
            return _vm.$modal.show("modal_agregar_tipo_" + _vm.tipoModal, {
              tipo: _vm.tipo
            })
          }
        }
      },
      [_vm._v("Agregar")]
    ),
    _vm._v(" "),
    _c("img", {
      attrs: {
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
      },
      on: { click: _vm.mostrarTabla }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=template&id=4ee69d54&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=template&id=4ee69d54& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "modal",
        {
          attrs: {
            name: "modal_agregar_tipo_cepa",
            classes: "my_modal",
            width: 450,
            height: 450
          },
          on: { "before-open": _vm.beforeOpenAgregar }
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
                [_vm._v("Agregar " + _vm._s(_vm.primeraMayus(_vm.modal.tipo)))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_agregar_tipo_cepa")
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
              _vm.modal.tipo === "genero" || _vm.modal.tipo === "especie"
                ? _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "grupo_microbiano-modal" } }, [
                      _vm._v("Grupo Microbiano")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modal.grupo_microbiano,
                            expression: "modal.grupo_microbiano"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "select", id: "grupo_microbiano-modal" },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.modal,
                                "grupo_microbiano",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.cambiarGeneroEspecie
                          ]
                        }
                      },
                      _vm._l(_vm.getGrupos, function(gm, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: gm.id } },
                          [_vm._v(_vm._s(gm.nombre))]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.modal.tipo === "especie"
                ? _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "genero-modal" } }, [
                      _vm._v("Genero")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modal.genero,
                            expression: "modal.genero"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "select", id: "genero-modal" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.modal,
                              "genero",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(
                        _vm.getGenerosId(_vm.modal.grupo_microbiano),
                        function(g, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: g.id } },
                            [_vm._v(_vm._s(g.nombre))]
                          )
                        }
                      ),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modal.nombre,
                      expression: "modal.nombre"
                    }
                  ],
                  staticClass: "form-control",
                  class: [
                    "form-control",
                    _vm.validarNombre || _vm.errors ? "is-invalid" : ""
                  ],
                  attrs: {
                    name: "nombre",
                    id: "nombre",
                    placeholder: "...",
                    type: "text"
                  },
                  domProps: { value: _vm.modal.nombre },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.modal, "nombre", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.validarNombre || _vm.errors
                  ? _c("em", { staticClass: "error invalid-feedback" }, [
                      _vm._v(
                        _vm._s(
                          _vm.errors.nombre ? _vm.errors.nombre[0] : _vm.errors
                        )
                      )
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
                      return _vm.$modal.hide("modal_agregar_tipo_cepa")
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
                    disabled: _vm.validarBtn || _vm.bloquearBtnModal
                  },
                  on: { click: _vm.agregarTipo }
                },
                [_vm._v("Agregar")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_editar_tipo_cepa",
            classes: "my_modal",
            width: 400,
            height: 450
          },
          on: { "before-open": _vm.beforeOpenEditar, closed: _vm.closeEditar }
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
                [_vm._v("Editar " + _vm._s(_vm.primeraMayus(_vm.modal.tipo)))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_editar_tipo_cepa")
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
              _vm.modal.tipo === "genero"
                ? _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "grupo_microbiano-modal" } }, [
                      _vm._v("Grupo Microbiano")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modal.grupo_microbiano,
                            expression: "modal.grupo_microbiano"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "select", id: "grupo_microbiano-modal" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.modal,
                              "grupo_microbiano",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.getGrupos, function(gm, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: gm.id } },
                          [_vm._v(_vm._s(gm.nombre))]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.modal.tipo === "especie"
                ? _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "genero-modal" } }, [
                      _vm._v("Genero")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modal.genero,
                            expression: "modal.genero"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "select", id: "genero-modal" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.modal,
                              "genero",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(
                        _vm.getGenerosId(_vm.modal.grupo_microbiano),
                        function(g, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: g.id } },
                            [_vm._v(_vm._s(g.nombre))]
                          )
                        }
                      ),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modal.nombre,
                      expression: "modal.nombre"
                    }
                  ],
                  class: [
                    "form-control",
                    _vm.validarNombre || _vm.errors ? "is-invalid" : ""
                  ],
                  attrs: {
                    name: "nombre",
                    id: "nombre",
                    placeholder: "...",
                    type: "text"
                  },
                  domProps: { value: _vm.modal.nombre },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.modal, "nombre", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.validarNombre || _vm.errors
                  ? _c("em", { staticClass: "error invalid-feedback" }, [
                      _vm._v(
                        _vm._s(
                          _vm.errors.nombre ? _vm.errors.nombre[0] : _vm.errors
                        )
                      )
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
                      return _vm.$modal.hide("modal_editar_tipo_cepa")
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
                    disabled: _vm.validarBtn || _vm.bloquearBtnModal
                  },
                  on: { click: _vm.editarTipo }
                },
                [_vm._v("Editar")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_tipo_cepa",
            classes: "my_modal",
            width: 400,
            height: 300
          },
          on: {
            "before-open": _vm.beforeOpenEliminar,
            closed: _vm.closeEliminar
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
                [_vm._v("Eliminar " + _vm._s(_vm.primeraMayus(_vm.modal.tipo)))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_tipo_cepa")
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
                _vm._v(
                  "Esta segura/o de eliminar el/la " +
                    _vm._s(_vm.primeraMayus(_vm.modal.tipo)) +
                    "?."
                )
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
                      return _vm.$modal.hide("modal_eliminar_tipo_cepa")
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
                  on: { click: _vm.eliminarTipo }
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=template&id=87e25ce4&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=template&id=87e25ce4& ***!
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "cepa", tipo: "clase" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/clases",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "clases"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Clases\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO CLASES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=template&id=52a45736&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=template&id=52a45736& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "cepa", tipo: "division" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/divisions",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "divisions"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Divisions\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO DIVISIONES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=template&id=36565bb2&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=template&id=36565bb2& ***!
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
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "cepa", tipo: "especie" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/especies",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "especies"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Especies\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO ESPECIES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=template&id=2bafffd8&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=template&id=2bafffd8& ***!
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
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "cepa", tipo: "familia" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/familias",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "familias"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Familias\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO FAMILIAS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=template&id=45ef9ad4&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=template&id=45ef9ad4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "cepa", tipo: "genero" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/generos",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "generos"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Generos\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO GENEROS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=template&id=13812d4e&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=template&id=13812d4e& ***!
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "cepa", tipo: "orden" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/ordens",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "ordens"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Ordens\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO ORDENS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=template&id=e6649394&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=template&id=e6649394& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "cepa", tipo: "phylum" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/phylums",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "phylums"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Phylums\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO PHYLUMS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=template&id=1194cf68&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=template&id=1194cf68& ***!
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "cepa", tipo: "reino" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/reinos",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "reinos"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Reinos\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO REINOS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/otra-info/CepasComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/otra-info/CepasComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CepasComponent.vue?vue&type=template&id=4f5807d0& */ "./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0&");
/* harmony import */ var _CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/CepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CepasComponent.vue?vue&type=template&id=4f5807d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccionMostrar.vue?vue&type=template&id=07821ea6& */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&");
/* harmony import */ var _AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccionMostrar.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/AccionMostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccionMostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccionMostrar.vue?vue&type=template&id=07821ea6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalesComponent_vue_vue_type_template_id_4ee69d54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalesComponent.vue?vue&type=template&id=4ee69d54& */ "./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=template&id=4ee69d54&");
/* harmony import */ var _ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalesComponent_vue_vue_type_template_id_4ee69d54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalesComponent_vue_vue_type_template_id_4ee69d54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=template&id=4ee69d54&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=template&id=4ee69d54& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_4ee69d54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalesComponent.vue?vue&type=template&id=4ee69d54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/ModalesComponent.vue?vue&type=template&id=4ee69d54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_4ee69d54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_4ee69d54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaClasesComponent_vue_vue_type_template_id_87e25ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaClasesComponent.vue?vue&type=template&id=87e25ce4& */ "./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=template&id=87e25ce4&");
/* harmony import */ var _TablaClasesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaClasesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaClasesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaClasesComponent_vue_vue_type_template_id_87e25ce4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaClasesComponent_vue_vue_type_template_id_87e25ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaClasesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaClasesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaClasesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=template&id=87e25ce4&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=template&id=87e25ce4& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaClasesComponent_vue_vue_type_template_id_87e25ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaClasesComponent.vue?vue&type=template&id=87e25ce4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/clases/TablaClasesComponent.vue?vue&type=template&id=87e25ce4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaClasesComponent_vue_vue_type_template_id_87e25ce4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaClasesComponent_vue_vue_type_template_id_87e25ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/clases/columnas.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/clases/columnas.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_clases",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaDivisionsComponent_vue_vue_type_template_id_52a45736___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaDivisionsComponent.vue?vue&type=template&id=52a45736& */ "./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=template&id=52a45736&");
/* harmony import */ var _TablaDivisionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaDivisionsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaDivisionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaDivisionsComponent_vue_vue_type_template_id_52a45736___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaDivisionsComponent_vue_vue_type_template_id_52a45736___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDivisionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaDivisionsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDivisionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=template&id=52a45736&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=template&id=52a45736& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDivisionsComponent_vue_vue_type_template_id_52a45736___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaDivisionsComponent.vue?vue&type=template&id=52a45736& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/divisions/TablaDivisionsComponent.vue?vue&type=template&id=52a45736&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDivisionsComponent_vue_vue_type_template_id_52a45736___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDivisionsComponent_vue_vue_type_template_id_52a45736___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/divisions/columnas.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/divisions/columnas.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_divisions",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaEspeciesComponent_vue_vue_type_template_id_36565bb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaEspeciesComponent.vue?vue&type=template&id=36565bb2& */ "./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=template&id=36565bb2&");
/* harmony import */ var _TablaEspeciesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaEspeciesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaEspeciesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaEspeciesComponent_vue_vue_type_template_id_36565bb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaEspeciesComponent_vue_vue_type_template_id_36565bb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEspeciesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaEspeciesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEspeciesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=template&id=36565bb2&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=template&id=36565bb2& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEspeciesComponent_vue_vue_type_template_id_36565bb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaEspeciesComponent.vue?vue&type=template&id=36565bb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/especies/TablaEspeciesComponent.vue?vue&type=template&id=36565bb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEspeciesComponent_vue_vue_type_template_id_36565bb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEspeciesComponent_vue_vue_type_template_id_36565bb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/especies/columnas.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/especies/columnas.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "nombre_genero",
  sortField: "genero_id",
  title: "Genero",
  titleClass: "text-center"
}, {
  name: "__component:acciones_especies",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaFamiliasComponent_vue_vue_type_template_id_2bafffd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaFamiliasComponent.vue?vue&type=template&id=2bafffd8& */ "./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=template&id=2bafffd8&");
/* harmony import */ var _TablaFamiliasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaFamiliasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaFamiliasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaFamiliasComponent_vue_vue_type_template_id_2bafffd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaFamiliasComponent_vue_vue_type_template_id_2bafffd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFamiliasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaFamiliasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFamiliasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=template&id=2bafffd8&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=template&id=2bafffd8& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFamiliasComponent_vue_vue_type_template_id_2bafffd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaFamiliasComponent.vue?vue&type=template&id=2bafffd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/familias/TablaFamiliasComponent.vue?vue&type=template&id=2bafffd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFamiliasComponent_vue_vue_type_template_id_2bafffd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFamiliasComponent_vue_vue_type_template_id_2bafffd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/familias/columnas.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/familias/columnas.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_familias",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaGenerosComponent_vue_vue_type_template_id_45ef9ad4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaGenerosComponent.vue?vue&type=template&id=45ef9ad4& */ "./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=template&id=45ef9ad4&");
/* harmony import */ var _TablaGenerosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaGenerosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaGenerosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaGenerosComponent_vue_vue_type_template_id_45ef9ad4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaGenerosComponent_vue_vue_type_template_id_45ef9ad4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaGenerosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaGenerosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaGenerosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=template&id=45ef9ad4&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=template&id=45ef9ad4& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaGenerosComponent_vue_vue_type_template_id_45ef9ad4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaGenerosComponent.vue?vue&type=template&id=45ef9ad4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/generos/TablaGenerosComponent.vue?vue&type=template&id=45ef9ad4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaGenerosComponent_vue_vue_type_template_id_45ef9ad4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaGenerosComponent_vue_vue_type_template_id_45ef9ad4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/generos/columnas.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/generos/columnas.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "nombre_grupo",
  sortField: "grupo_microbiano_id",
  title: "Grupo Microbiano",
  titleClass: "text-center"
}, {
  name: "__component:acciones_generos",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaOrdensComponent_vue_vue_type_template_id_13812d4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaOrdensComponent.vue?vue&type=template&id=13812d4e& */ "./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=template&id=13812d4e&");
/* harmony import */ var _TablaOrdensComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaOrdensComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaOrdensComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaOrdensComponent_vue_vue_type_template_id_13812d4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaOrdensComponent_vue_vue_type_template_id_13812d4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaOrdensComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaOrdensComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaOrdensComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=template&id=13812d4e&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=template&id=13812d4e& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaOrdensComponent_vue_vue_type_template_id_13812d4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaOrdensComponent.vue?vue&type=template&id=13812d4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/ordens/TablaOrdensComponent.vue?vue&type=template&id=13812d4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaOrdensComponent_vue_vue_type_template_id_13812d4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaOrdensComponent_vue_vue_type_template_id_13812d4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/ordens/columnas.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/ordens/columnas.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_ordens",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaPhylumsComponent_vue_vue_type_template_id_e6649394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaPhylumsComponent.vue?vue&type=template&id=e6649394& */ "./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=template&id=e6649394&");
/* harmony import */ var _TablaPhylumsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaPhylumsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaPhylumsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaPhylumsComponent_vue_vue_type_template_id_e6649394___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaPhylumsComponent_vue_vue_type_template_id_e6649394___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaPhylumsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaPhylumsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaPhylumsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=template&id=e6649394&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=template&id=e6649394& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaPhylumsComponent_vue_vue_type_template_id_e6649394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaPhylumsComponent.vue?vue&type=template&id=e6649394& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/phylums/TablaPhylumsComponent.vue?vue&type=template&id=e6649394&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaPhylumsComponent_vue_vue_type_template_id_e6649394___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaPhylumsComponent_vue_vue_type_template_id_e6649394___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/phylums/columnas.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/phylums/columnas.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_phylums",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaReinosComponent_vue_vue_type_template_id_1194cf68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaReinosComponent.vue?vue&type=template&id=1194cf68& */ "./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=template&id=1194cf68&");
/* harmony import */ var _TablaReinosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaReinosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaReinosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaReinosComponent_vue_vue_type_template_id_1194cf68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaReinosComponent_vue_vue_type_template_id_1194cf68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaReinosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaReinosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaReinosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=template&id=1194cf68&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=template&id=1194cf68& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaReinosComponent_vue_vue_type_template_id_1194cf68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaReinosComponent.vue?vue&type=template&id=1194cf68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/cepas/reinos/TablaReinosComponent.vue?vue&type=template&id=1194cf68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaReinosComponent_vue_vue_type_template_id_1194cf68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaReinosComponent_vue_vue_type_template_id_1194cf68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/cepas/reinos/columnas.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/cepas/reinos/columnas.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_reinos",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/mixins/websocketsModalOtraInfo.js":
/*!********************************************************!*\
  !*** ./resources/js/mixins/websocketsModalOtraInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsModalOtraInfo = function websocketsModalOtraInfo(tipoInfo) {
  return {
    methods: {
      closeEditar: function closeEditar() {
        window.Echo["private"]("desbloquearBtns" + tipoInfo).whisper("desbloquearBtns" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
        this.$events.fire("spliceMisBloqueos" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
      },
      closeEliminar: function closeEliminar() {
        window.Echo["private"]("desbloquearBtns" + tipoInfo).whisper("desbloquearBtns" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
        this.$events.fire("spliceMisBloqueos" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsModalOtraInfo);

/***/ }),

/***/ "./resources/js/mixins/websocketsOtraInfo.js":
/*!***************************************************!*\
  !*** ./resources/js/mixins/websocketsOtraInfo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsOtraInfoMixin = function websocketsOtraInfoMixin(tipoInfo) {
  return {
    data: function data() {
      return {
        bloqueos: [],
        misBloqueos: []
      };
    },
    methods: {
      // Bloquear Btns
      bloquearBtnsTabla: function bloquearBtnsTabla(e) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id,
          tipo: e.tipo
        });
        this.$events.fire(e.id + "-bloquearBtns-" + e.tipo);
      },
      desbloquearBtnsTabla: function desbloquearBtnsTabla(e) {
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id && data.tipo === e.tipo;
        }), 1);
        this.$events.fire(e.id + "-desbloquearBtns-" + e.tipo);
      },
      // guardar mis bloqueos
      pushMisBloqueos: function pushMisBloqueos(e) {
        this.misBloqueos.push({
          idUser: e.idUser,
          id: e.id,
          tipo: e.tipo
        });
      },
      spliceMisBloqueos: function spliceMisBloqueos(e) {
        if (e.id != 0) {
          this.misBloqueos.splice(this.misBloqueos.findIndex(function (data) {
            return data.id === e.id;
          }), 1);
        }
      },
      //borrar bloqueos
      borrarBloqueos: function borrarBloqueos(e) {
        var data = this.bloqueos.find(function (data) {
          return data.idUser === e.id;
        });

        if (data) {
          this.desbloquearBtnsTabla(data);
        }
      },
      // verificar bloqueos existentes
      verificarBloqueos: function verificarBloqueos(tipo) {
        for (var index = 0; index < this.bloqueos.length; index++) {
          if (this.bloqueos[index].tipo == tipo) {
            this.$events.fire(this.bloqueos[index].id + "-bloquearBtns-" + tipo);
          }
        }
      },
      enviarBloqueos: function enviarBloqueos() {
        window.Echo["private"]("recibirBtns" + tipoInfo).whisper("recibirBtns" + tipoInfo, {
          bloqueos: this.misBloqueos
        });
      }
    },
    mounted: function mounted() {
      var _this = this;

      window.Echo.join(tipoInfo).joining(function (data) {
        if (_this.misBloqueos.length > 0) {
          _this.enviarBloqueos();
        }
      }).leaving(function (data) {
        _this.borrarBloqueos(data.user);
      });
      window.Echo["private"]("bloquearBtns" + tipoInfo).listenForWhisper("bloquearBtns" + tipoInfo, function (e) {
        _this.bloquearBtnsTabla(e);
      });
      window.Echo["private"]("desbloquearBtns" + tipoInfo).listenForWhisper("desbloquearBtns" + tipoInfo, function (e) {
        if (e.id != 0) {
          _this.desbloquearBtnsTabla(e);
        }
      });
    },
    created: function created() {
      var _this2 = this;

      this.$emit("rutaHijo", window.location.pathname);
      window.Echo["private"]("recibirBtns" + tipoInfo).listenForWhisper("recibirBtns" + tipoInfo, function (e) {
        if (e.bloqueos.length > 0) {
          _this2.bloquearBtnsTabla(e.bloqueos[0]);
        }
      });
      this.$events.$on("pushMisBloqueos" + tipoInfo, function (e) {
        _this2.pushMisBloqueos(e);
      });
      this.$events.$on("spliceMisBloqueos" + tipoInfo, function (e) {
        _this2.spliceMisBloqueos(e);
      });
    },
    destroyed: function destroyed() {
      this.$events.$off("pushMisBloqueos" + tipoInfo);
      this.$events.$off("spliceMisBloqueos" + tipoInfo);
    },
    beforeDestroy: function beforeDestroy() {
      window.Echo.leave(tipoInfo);
      window.Echo.leave("recibirBtns" + tipoInfo);
      window.Echo.leave("desbloquearBtns" + tipoInfo);
      window.Echo.leave("bloquearBtns" + tipoInfo);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsOtraInfoMixin);

/***/ }),

/***/ "./resources/js/mixins/websocketsTablaOtraInfo.js":
/*!********************************************************!*\
  !*** ./resources/js/mixins/websocketsTablaOtraInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsTablaOtraInfo = function websocketsTablaOtraInfo(tipo) {
  return {
    data: function data() {
      return {
        tabla: false
      };
    },
    methods: {
      mostrarTabla: function mostrarTabla() {
        this.tabla = !this.tabla;
      },
      actualizarTabla: function actualizarTabla() {
        if (this.tabla) {
          if (this.$refs.tabla) {
            this.$refs.tabla.refreshDatos();
          }
        }
      }
    },
    created: function created() {
      var _this = this;

      this.$events.on("actualizartabla" + tipo, function (e) {
        return _this.actualizarTabla();
      });
    },
    destroyed: function destroyed() {
      this.$events.off("actualizartabla" + tipo);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsTablaOtraInfo);

/***/ })

}]);