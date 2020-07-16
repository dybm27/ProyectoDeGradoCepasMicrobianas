(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metodo-conser-bacteria"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _CroppieComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../CroppieComponent */ "./resources/js/components/CroppieComponent.vue");
var _components$props$com;

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






/* harmony default export */ __webpack_exports__["default"] = (_components$props$com = {
  components: {
    Croppie: _CroppieComponent__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ["idMetodo"]
}, _defineProperty(_components$props$com, "components", {
  DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
}), _defineProperty(_components$props$com, "data", function data() {
  return {
    lang: vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2___default.a,
    info: "",
    parametros: {
      cepaId: "",
      tipo_metodo: 1,
      tipo_agar: 2,
      fecha: "",
      numero_replicas: "",
      recuento_microgota: "",
      imagen: ""
    },
    modal: {
      titulo: "",
      input: "",
      tipo: "",
      errors: []
    },
    tituloForm: "",
    imagenMiniatura: "",
    nomBtn: "",
    errors: [],
    imagenError: ""
  };
}), _defineProperty(_components$props$com, "mixins", [_mixins_toastr__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_4__["default"]]), _defineProperty(_components$props$com, "methods", _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_caract", ["accionAgregarTipoCaractBacteria"]), {
  evento: function evento() {
    var _this = this;

    this.parametros.tipo_agar = this.parametros.tipo_metodo === 4 ? this.parametros.tipo_agar : 1;
    this.parametros.fecha = this.parametros.fecha === null ? "" : this.parametros.fecha;

    if (this.tituloForm === "Agregar Método") {
      axios.post("/cepas/bacteria/metodo-conser", this.parametros).then(function (res) {
        _this.accionAgregarCaract({
          tipo: "metodo",
          data: res.data
        });

        _this.toastr("Agregar Método", "Método agregado con exito!!", "success");

        _this.$emit("cambiarVariable");
      })["catch"](function (error) {
        if (error.response) {
          _this.errors = [];
          _this.errors = error.response.data.errors;

          _this.toastr("Error!!", "", "error");
        }
      });
    } else {
      axios.put("/cepas/bacteria/metodo-conser/".concat(this.info.id), this.parametros).then(function (res) {
        _this.accionEditarCaract({
          tipo: "metodo",
          data: res.data
        });

        _this.toastr("Editar Método", "Método editado con exito!!", "success");

        _this.$emit("cambiarVariable");
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
    this.parametros.tipo_metodo = this.info.tipo_id;
    this.parametros.tipo_agar = this.info.tipo_agar_id;
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
    } else {
      //tipo_agar
      this.modal.titulo = "Agregar Nuevo Tipo de Agar";
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
      var parametros = {
        tipo: this.modal.tipo,
        nombre: this.modal.input
      };
      axios.post("/info-caract-bacterias/agregar", parametros).then(function (res) {
        _this2.accionAgregarTipoCaractBacteria({
          info: res.data,
          tipo: _this2.modal.tipo
        });

        _this2.$modal.hide("agregar-caract-info");

        _this2.toastr("Agregar Informacion", "".concat(_this2.modal.tipo, " agregado/a con exito"), "success");
      })["catch"](function (error) {
        if (error.response) {
          _this2.modal.errors = error.response.data.errors;
        }

        _this2.toastr("Error!!!!", "", "error");
      });
    }
  }
})), _defineProperty(_components$props$com, "computed", _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getMetodoConserById"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoMetodoConserBacterias"]), {
  mostrarAgar: function mostrarAgar() {
    if (this.parametros.tipo_metodo === 4) {
      return true;
    } else {
      return false;
    }
  },
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
  }
})), _defineProperty(_components$props$com, "created", function created() {
  if (this.idMetodo === 0) {
    this.tituloForm = "Agregar Método";
    this.nomBtn = "Agregar";
  } else {
    this.info = this.getMetodoConserById(this.idMetodo);
    this.llenarInfo();
    this.tituloForm = "Editar Método";
    this.nomBtn = "Editar";
  }

  if (this.$route.params.cepaBacteriaId) {
    this.parametros.cepaId = this.$route.params.cepaBacteriaId;
  } else {
    this.parametros.cepaId = this.$route.params.cepaId;
  }
}), _components$props$com);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_caract_FormMetodoConserComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms-caract/FormMetodoConserComponent.vue */ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue");
/* harmony import */ var _tablas_TablaMetodoConserBacteriasComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tablas/TablaMetodoConserBacteriasComponent.vue */ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TablaMetodo: _tablas_TablaMetodoConserBacteriasComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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

    this.$events.$on("abrirFormularioMetodoBacteria", function (e) {
      return _this.abrirFormulario(e);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metodo_conser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metodo-conser */ "./resources/js/components/cepas/bacterias/tablas/metodo-conser.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      url: "/info-panel/cepa/bacteria/metodos-conser/",
      refrescarTabla: false,
      idMetodoEliminar: "",
      fields: _metodo_conser__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "tipo_id",
        direction: "asc"
      }]
    };
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("cepa", ["accionEliminarCaract"]), {
    toastr: function toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: function onCreated() {},
        onClicked: function onClicked() {},
        onClosed: function onClosed() {},
        onMouseOver: function onMouseOver() {},
        onMouseOut: function onMouseOut() {}
      });
    },
    cambiarVariable: function cambiarVariable() {
      this.refrescarTabla = false;
    },
    eliminarMetodo: function eliminarMetodo() {
      var _this = this;

      axios["delete"]("/cepas/bacteria/metodo-conser/".concat(this.idMetodoEliminar)).then(function (res) {
        _this.refrescarTabla = true;

        _this.accionEliminarCaract({
          tipo: "metodo",
          data: res.data
        });

        _this.toastr("Eliminar Cepa", "Cepa eliminada con exito!!", "success", 5000);

        _this.$modal.hide("my_modal_eliminar_metodo");
      })["catch"](function (error) {
        if (error.response) {//console.log(error.response.data);
        }

        _this.toastr("Error!!!", "", "error", 4000);
      });
    },
    beforeOpen: function beforeOpen(data) {
      this.idMetodoEliminar = data.params.id;
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("cepa", ["getMetodoConser"])),
  created: function created() {
    if (this.$route.params.cepaBacteriaId) {
      this.url += this.$route.params.cepaBacteriaId;
    } else {
      this.url += this.$route.params.cepaId;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5& ***!
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
                      _vm.getInfoMetodoConserBacterias
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
                                _vm._l(
                                  _vm.getInfoMetodoConserBacterias.tipo_metodo,
                                  function(m, index) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: m.id } },
                                      [_vm._v(_vm._s(m.nombre))]
                                    )
                                  }
                                ),
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
                                        return _vm.showModal("metodo_conser")
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
                      _vm.mostrarAgar
                        ? [
                            _c("label", { attrs: { for: "tipo_agar" } }, [
                              _vm._v("Tipo Agar")
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
                                      value: _vm.parametros.tipo_agar,
                                      expression: "parametros.tipo_agar",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { name: "select", id: "tipo_agar" },
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
                                        "tipo_agar",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                _vm._l(
                                  _vm.getInfoMetodoConserBacterias.tipo_agar,
                                  function(f, index) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: f.id } },
                                      [_vm._v(_vm._s(f.nombre))]
                                    )
                                  }
                                ),
                                0
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group-append" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn-icon btn-icon-only btn-pill btn btn-outline-info",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.showModal("tipo_agar")
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            { staticClass: "position-relative form-group" },
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
                                    value: _vm.parametros.numero_replicas,
                                    expression: "parametros.numero_replicas",
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
                                ? _c("span", { staticClass: "text-danger" }, [
                                    _vm._v(
                                      _vm._s(_vm.errors.numero_replicas[0])
                                    )
                                  ])
                                : _vm._e()
                            ]
                          )
                        ])
                      ]),
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
                                expression: "parametros.recuento_microgota"
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
                  attrs: { type: "button" },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac& ***!
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
      _vm.getMetodoConser != ""
        ? [
            _c(
              "div",
              { staticClass: "card-body mt-3 ml-2 mr-2" },
              [
                _c("MyVuetable", {
                  attrs: {
                    "api-url": _vm.url,
                    fields: _vm.fields,
                    "sort-order": _vm.sortOrder,
                    refrescarTabla: _vm.refrescarTabla,
                    nameGet: "metodos-bacterias"
                  },
                  on: { cambiarVariable: _vm.cambiarVariable }
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
                        attrs: { type: "button" },
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

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormMetodoConserComponent.vue?vue&type=template&id=184351d5& */ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5&");
/* harmony import */ var _FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormMetodoConserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormMetodoConserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormMetodoConserComponent.vue?vue&type=template&id=184351d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoMetodoConserComponent.vue?vue&type=template&id=94660d74& */ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74&");
/* harmony import */ var _InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoMetodoConserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoMetodoConserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoMetodoConserComponent.vue?vue&type=template&id=94660d74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac& */ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac&");
/* harmony import */ var _TablaMetodoConserBacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaMetodoConserBacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/tablas/metodo-conser.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/tablas/metodo-conser.js ***!
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
  name: "nombre_tipo_agar",
  sortField: "tipo_agar_id",
  title: "Tipo Agar",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "tipoAgar"
}, {
  name: "numero_replicas",
  sortField: "numero_replicas",
  title: "Número de Replicas",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "recuento_microgota",
  sortField: "recuento_microgota",
  title: "Recuento Microgota",
  titleClass: "text-center"
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
  name: "__component:acciones_tabla_metodo_conser_bacteria",
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