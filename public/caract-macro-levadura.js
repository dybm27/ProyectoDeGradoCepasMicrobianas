(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caract-macro-levadura"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopieCepas */ "./resources/js/mixins/obtenerImagenCroopieCepas.js");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["info", "modificarInfo"],
  data: function data() {
    return {
      parametros: {
        cepaId: "",
        medio: "",
        color: 1,
        textura: 1,
        topografia_superficie: "",
        borde_colonia: "",
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
      errors: []
    };
  },
  mixins: [_mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  watch: {
    modificarInfo: function modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_caract", ["accionAgregarTipoCaractLevadura"]), {
    evento: function evento() {
      var _this = this;

      if (this.tituloForm === "Agregar Medio") {
        axios.post("/cepas/levadura/caract-macro", this.parametros).then(function (res) {
          _this.errors = [];
          _this.$refs.inputImagen.value = "";
          _this.tituloForm = "Editar Medio";
          _this.nomBtn = "Editar";

          _this.$emit("agregar", res.data);

          _this.toastr("Agregar Medio", "Medio agregado con exito!!", "success");
        })["catch"](function (error) {
          if (error.response) {
            _this.errors = [];
            _this.errors = error.response.data.errors;

            _this.toastr("Error!!", "", "error");
          }
        });
      } else {
        axios.put("/cepas/levadura/caract-macro/".concat(this.info.id), this.parametros).then(function (res) {
          _this.errors = [];
          _this.$refs.inputImagen.value = "";

          _this.$emit("editar", res.data);

          _this.toastr("Editar Medio", "Medio editado con exito!!", "success");
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
      this.parametros.medio = this.info.medio;
      this.parametros.color = this.info.color_id;
      this.parametros.textura = this.info.textura_id;
      this.parametros.topografia_superficie = this.info.topografia_superficie;
      this.parametros.borde_colonia = this.info.borde_colonia;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    showModal: function showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;

      if (tipo === "color") {
        this.modal.titulo = "Agregar Nuevo Color";
      } else if (tipo === "textura") {
        this.modal.titulo = "Agregar Nueva Textura";
      }

      this.$modal.show("agregar-caract-info-levadura");
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
        this.modal.errors = [];
        var parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input
        };
        axios.post("/info-caract-levaduras/agregar", parametros).then(function (res) {
          _this2.accionAgregarTipoCaractLevadura({
            info: res.data,
            tipo: _this2.modal.tipo
          });

          _this2.$modal.hide("agregar-caract-info-levadura");

          _this2.toastr("Agregar Informacion", "".concat(_this2.modal.tipo, " agregado/a con exito"), "success");
        })["catch"](function (error) {
          if (error.response) {
            _this2.modal.errors = error.response.data.errors;
          }

          _this2.toastr("Error!!!!", "", "error");
        });
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroLevaduras"]), {
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Medio") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required: function required() {
      if (this.tituloForm === "Agregar Medio") {
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
    if (this.info === undefined) {
      this.tituloForm = "Agregar Medio";
      this.nomBtn = "Agregar";
      this.parametros.color = this.getInfoCaractMacroLevaduras.colors[0].id;
      this.parametros.textura = this.getInfoCaractMacroLevaduras.texturas[0].id;
    } else {
      this.llenarInfo();
      this.tituloForm = "Editar Medio";
      this.nomBtn = "Editar";
    }

    if (this.$route.params.cepaLevaduraId) {
      this.parametros.cepaId = this.$route.params.cepaLevaduraId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_infoCaractMacro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/infoCaractMacro */ "./resources/js/mixins/infoCaractMacro.js");
/* harmony import */ var _forms_caract_FormCaractMacroComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms-caract/FormCaractMacroComponent.vue */ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FormCaractMacro: _forms_caract_FormCaractMacroComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_infoCaractMacro__WEBPACK_IMPORTED_MODULE_2__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract", "accionEliminarCaract"]), {
    agregarInfo: function agregarInfo(data) {
      this.accionAgregarCaract({
        tipo: "macro",
        data: data
      });
      this.mostrarBtnAgregar = true;
      this.modificarForm = true;
    },
    editarInfo: function editarInfo(data) {
      this.accionEditarCaract({
        tipo: "macro",
        data: data
      });
      this.modificarForm = true;
    },
    eliminarMedio: function eliminarMedio() {
      var _this = this;

      var id = 0;
      var num = 0;

      if (this.mostrarForm1) {
        id = this.getCaractMacro[0].id;
        num = 1;
      } else if (this.mostrarForm2) {
        id = this.getCaractMacro[1].id;
        num = 2;
      } else {
        id = this.getCaractMacro[2].id;
        num = 3;
      }

      axios["delete"]("/cepas/levadura/caract-macro/".concat(id)).then(function (res) {
        _this.mostrarBtnAgregar = true;
        _this.modificarForm = true;

        _this.$modal.hide("eliminar_caract_macro_levadura");

        _this.accionEliminarCaract({
          tipo: "macro",
          data: res.data
        });

        _this.formatear(num);

        _this.toastr("Eliminar Medio", "Medio eliminado con exito!!", "success");
      })["catch"](function (error) {
        if (error.response) {
          _this.toastr("Error!!", "", "error");
        }
      });
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getCaractMacro"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c& ***!
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
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-md-center" }, [
          _c("div", { staticClass: "col-sm-6" }, [
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
                      _c("label", { attrs: { for: "medio" } }, [
                        _vm._v("Medio")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.medio,
                            expression: "parametros.medio"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "medio",
                          id: "medio",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.medio },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "medio",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.medio
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.medio[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm.getInfoCaractMacroLevaduras
                      ? [
                          _c("label", { attrs: { for: "color" } }, [
                            _vm._v("Color")
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
                                    value: _vm.parametros.color,
                                    expression: "parametros.color"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "color" },
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
                                      "color",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(
                                _vm.getInfoCaractMacroLevaduras.colors,
                                function(c, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: c.id } },
                                    [_vm._v(_vm._s(c.nombre))]
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
                                      return _vm.showModal("color")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "textura" } }, [
                            _vm._v("Textura")
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
                                    value: _vm.parametros.textura,
                                    expression: "parametros.textura"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "textura" },
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
                                      "textura",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(
                                _vm.getInfoCaractMacroLevaduras.texturas,
                                function(t, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: t.id } },
                                    [_vm._v(_vm._s(t.nombre))]
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
                                      return _vm.showModal("textura")
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
                    _c("div", { staticClass: "position-relative form-group" }, [
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
                          accept: "image/jpeg, image/png",
                          type: "file",
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
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "topografia_superficie" } }, [
                        _vm._v("Topografía de la Superficie")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.topografia_superficie,
                            expression: "parametros.topografia_superficie"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "topografia_superficie",
                          id: "topografia_superficie",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: {
                          value: _vm.parametros.topografia_superficie
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "topografia_superficie",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.topografia_superficie
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.topografia_superficie[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "borde_colonia" } }, [
                        _vm._v("Borde de la Colonia")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.borde_colonia,
                            expression: "parametros.borde_colonia"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "borde_colonia",
                          id: "borde_colonia",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.borde_colonia },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "borde_colonia",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.borde_colonia
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.borde_colonia[0]))
                          ])
                        : _vm._e()
                    ]),
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
                    : [_vm._m(0)]
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
            name: "agregar-caract-info-levadura",
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
                      return _vm.$modal.hide("agregar-caract-info-levadura")
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
                      return _vm.$modal.hide("agregar-caract-info-levadura")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29& ***!
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "tabs-animation" }, [
        _c("div", { staticClass: "mb-3 card" }, [
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
                        return _vm.$modal.show("eliminar_caract_macro_levadura")
                      }
                    }
                  },
                  [_vm._v("Eliminar Medio")]
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
                    on: { click: _vm.abrirForm }
                  },
                  [_vm._v("Agregar Medio")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-12" },
              [
                _vm.mostrarForms
                  ? [
                      _c(
                        "div",
                        { staticClass: "tabs-lg-alternate card-header" },
                        [
                          _c(
                            "ul",
                            { staticClass: "nav nav-justified" },
                            [
                              _vm.mostrar1
                                ? [
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link",
                                          class: _vm.computedActive1,
                                          on: {
                                            click: function($event) {
                                              return _vm.cambiarActive(1)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "widget-number text-success"
                                            },
                                            [_vm._v("Medio 1")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "tab-subheading" },
                                            [
                                              _vm._m(1),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(_vm.medio1) +
                                                  "\n                      "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.mostrar2
                                ? [
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link",
                                          class: _vm.computedActive2,
                                          on: {
                                            click: function($event) {
                                              return _vm.cambiarActive(2)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "widget-number text-success"
                                            },
                                            [_vm._v("Medio 2")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "tab-subheading" },
                                            [
                                              _vm._m(2),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(_vm.medio2) +
                                                  "\n                      "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.mostrar3
                                ? [
                                    _c("li", { staticClass: "nav-item" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "nav-link",
                                          class: _vm.computedActive3,
                                          on: {
                                            click: function($event) {
                                              return _vm.cambiarActive(3)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "widget-number text-success"
                                            },
                                            [_vm._v("Medio 3")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "tab-subheading" },
                                            [
                                              _vm._m(3),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(_vm.medio3) +
                                                  "\n                      "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "tab-content" },
                        [
                          _vm.mostrar1
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane",
                                    class: _vm.computedActive1
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card-body" },
                                      [
                                        _vm.computedMostrarForm1
                                          ? [
                                              _c("FormCaractMacro", {
                                                attrs: {
                                                  info: _vm.getCaractMacro[0],
                                                  modificarInfo:
                                                    _vm.modificarForm
                                                },
                                                on: {
                                                  agregar: _vm.agregarInfo,
                                                  editar: _vm.editarInfo,
                                                  cambiarVariable:
                                                    _vm.cambiarVariable
                                                }
                                              })
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.mostrar2
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane",
                                    class: _vm.computedActive2
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card-body" },
                                      [
                                        _vm.computedMostrarForm2
                                          ? [
                                              _c("FormCaractMacro", {
                                                attrs: {
                                                  info: _vm.getCaractMacro[1],
                                                  modificarInfo:
                                                    _vm.modificarForm
                                                },
                                                on: {
                                                  agregar: _vm.agregarInfo,
                                                  editar: _vm.editarInfo,
                                                  cambiarVariable:
                                                    _vm.cambiarVariable
                                                }
                                              })
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.mostrar3
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane",
                                    class: _vm.computedActive3
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card-body" },
                                      [
                                        _vm.computedMostrarForm3
                                          ? [
                                              _c("FormCaractMacro", {
                                                attrs: {
                                                  info: _vm.getCaractMacro[2],
                                                  modificarInfo:
                                                    _vm.modificarForm
                                                },
                                                on: {
                                                  agregar: _vm.agregarInfo,
                                                  editar: _vm.editarInfo,
                                                  cambiarVariable:
                                                    _vm.cambiarVariable
                                                }
                                              })
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  : [_vm._m(4)]
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
            name: "eliminar_caract_macro_levadura",
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
                [_vm._v("Eliminar Característica Macroscópica")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("eliminar_caract_macro_levadura")
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
              _c("p", [_vm._v("Esta segura/o de eliminar la característica?.")])
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
                      return _vm.$modal.hide("eliminar_caract_macro_levadura")
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
                  on: { click: _vm.eliminarMedio }
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
        _vm._v("\n          Características Macroscópicas\n        ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "pr-2 opactiy-6" }, [
      _c("i", { staticClass: "pe-7s-note2" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "pr-2 opactiy-6" }, [
      _c("i", { staticClass: "pe-7s-note2" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "pr-2 opactiy-6" }, [
      _c("i", { staticClass: "pe-7s-note2" })
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
            _vm._v("NO SE HA AGREGADO NINGÚN MEDIO")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c& */ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c&");
/* harmony import */ var _FormCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCaractMacroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractMacroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue?vue&type=template&id=4d70f93c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCaractMacroComponent_vue_vue_type_template_id_4d70f93c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29& */ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29&");
/* harmony import */ var _InfoCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoCaractMacroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractMacroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue?vue&type=template&id=1ef11a29&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoCaractMacroComponent_vue_vue_type_template_id_1ef11a29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/infoCaractMacro.js":
/*!************************************************!*\
  !*** ./resources/js/mixins/infoCaractMacro.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var infoCaractMacroMixin = {
  data: function data() {
    return {
      active1: "active",
      active2: "",
      active3: "",
      mostrar1: false,
      mostrar2: false,
      mostrar3: false,
      mostrarForm1: true,
      mostrarForm2: false,
      mostrarForm3: false,
      mostrarBtnAgregar: true,
      modificarForm: false
    };
  },
  methods: {
    cambiarVariable: function cambiarVariable() {
      this.modificarForm = false;
    },
    cancelar: function cancelar() {
      if (this.mostrarForm1) {
        this.mostrarForm1 = false;
        this.mostrar1 = false;
        this.mostrarBtnAgregar = true;
      } else if (this.mostrarForm2) {
        this.mostrarForm2 = false;
        this.cambiarActive(1);
        this.mostrar2 = false;
        this.mostrarBtnAgregar = true;
      } else if (this.mostrarForm3) {
        this.mostrarForm3 = false;
        this.cambiarActive(2);
        this.mostrar3 = false;
        this.mostrarBtnAgregar = true;
      }
    },
    abrirForm: function abrirForm() {
      if (!this.mostrar1) {
        this.cambiarActive(1);
        this.mostrar1 = true;
        this.mostrarBtnAgregar = false;
      } else if (this.getCaractMacro[0] && !this.mostrar2) {
        this.cambiarActive(2);
        this.mostrar2 = true;
        this.mostrarBtnAgregar = false;
      } else if (this.getCaractMacro[1] && !this.mostrar3) {
        this.cambiarActive(3);
        this.mostrar3 = true;
        this.mostrarBtnAgregar = false;
      }
    },
    llenarForms: function llenarForms() {
      if (this.getCaractMacro[0]) {
        this.medio1 = this.getCaractMacro[0].medio;
        this.mostrar1 = true;
      }

      if (this.getCaractMacro[1]) {
        this.medio2 = this.getCaractMacro[1].medio;
        this.mostrar2 = true;
      }

      if (this.getCaractMacro[2]) {
        this.medio3 = this.getCaractMacro[2].medio;
        this.mostrar3 = true;
        this.mostrarBtnAgregar = false;
      }
    },
    cambiarActive: function cambiarActive(num) {
      switch (num) {
        case 1:
          this.active1 = "active";
          this.active2 = "";
          this.active3 = "";
          this.mostrarForm1 = true;
          this.mostrarForm2 = false;
          this.mostrarForm3 = false;
          break;

        case 2:
          this.active1 = "";
          this.active2 = "active";
          this.active3 = "";
          this.mostrarForm1 = false;
          this.mostrarForm2 = true;
          this.mostrarForm3 = false;
          break;

        case 3:
          this.active1 = "";
          this.active2 = "";
          this.active3 = "active";
          this.mostrarForm1 = false;
          this.mostrarForm2 = false;
          this.mostrarForm3 = true;
          break;
      }
    },
    formatear: function formatear(num) {
      switch (num) {
        case 1:
          if (this.mostrar3) {
            this.mostrar3 = false;
            this.cambiarActive(2);
          } else if (this.mostrar2) {
            this.mostrar2 = false;
            this.cambiarActive(1);
          } else {
            this.mostrar1 = false;
            this.mostrarForm1 = false;
          }

          break;

        case 2:
          if (this.mostrar3) {
            this.mostrar3 = false;
            this.cambiarActive(2);
          } else {
            this.mostrar2 = false;
            this.cambiarActive(1);
          }

          break;

        case 3:
          this.mostrar3 = false;
          this.cambiarActive(2);
          break;
      }
    }
  },
  computed: {
    computedActive1: function computedActive1() {
      return this.active1;
    },
    computedActive2: function computedActive2() {
      return this.active2;
    },
    computedActive3: function computedActive3() {
      return this.active3;
    },
    computedMostrarForm1: function computedMostrarForm1() {
      return this.mostrarForm1;
    },
    computedMostrarForm2: function computedMostrarForm2() {
      return this.mostrarForm2;
    },
    computedMostrarForm3: function computedMostrarForm3() {
      return this.mostrarForm3;
    },
    mostrarForms: function mostrarForms() {
      if (!this.getCaractMacro[0] && !this.mostrar1) {
        this.mostrarForm1 = false;
        return false;
      } else {
        this.llenarForms();
        return true;
      }
    },
    mostrarBtnEliminar: function mostrarBtnEliminar() {
      if (this.getCaractMacro[0] && this.mostrarForm1) {
        return true;
      } else if (this.getCaractMacro[1] && this.mostrarForm2) {
        return true;
      } else if (this.getCaractMacro[2] && this.mostrarForm3) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar: function mostrarBtnCancelar() {
      if (!this.getCaractMacro[0] && this.mostrarForm1) {
        return true;
      } else if (!this.getCaractMacro[1] && this.mostrarForm2) {
        return true;
      } else if (!this.getCaractMacro[2] && this.mostrarForm3) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnAgregarComputed: function mostrarBtnAgregarComputed() {
      return this.mostrarBtnAgregar;
    },
    medio1: {
      get: function get() {
        if (this.getCaractMacro[0]) {
          return this.getCaractMacro[0].medio;
        }
      },
      set: function set() {}
    },
    medio2: {
      get: function get() {
        if (this.getCaractMacro[1]) {
          return this.getCaractMacro[1].medio;
        }
      },
      set: function set() {}
    },
    medio3: {
      get: function get() {
        if (this.getCaractMacro[2]) {
          return this.getCaractMacro[2].medio;
        }
      },
      set: function set() {}
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoCaractMacroMixin);

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