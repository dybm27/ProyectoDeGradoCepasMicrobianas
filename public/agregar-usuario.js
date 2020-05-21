(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-usuario"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker/locale/es */ "./node_modules/vue2-datepicker/locale/es.js");
/* harmony import */ var vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      lang: vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      info: "",
      parametros: {
        tipo_metodo: 1,
        tipo_agar: 2,
        fecha: "",
        numero_replicas: "",
        recuento_microgota: "",
        imagen: "",
        descripcion: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: []
      },
      tituloForm: "",
      imageMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: ""
    };
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions(["accionAgregarTipoCaractBacteria", "accionAgregarCaract", "accionEditarCaract"]), {
    evento: function evento() {
      var _this = this;

      this.parametros.tipo_agar = this.parametros.tipo_metodo === 4 ? this.parametros.tipo_agar : 1;
      this.parametros.fecha = this.parametros.fecha === null ? "" : this.parametros.fecha;

      if (this.tituloForm === "Agregar Método") {
        var formData = new FormData();
        this.appendInfo(formData);
        axios.post("/cepas/bacteria/metodo-conser", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (res) {
          _this.accionAgregarCaract({
            tipo: "metodo",
            data: res.data
          });

          _this.toastr("Agregar Método", "Método agregado con exito!!", "success");

          _this.$emit("cambiarVariable", "tabla");

          _this.redireccionar();
        })["catch"](function (error) {
          if (error.response) {
            _this.errors = [];
            _this.errors = error.response.data.errors;

            _this.toastr("Error!!", "", "error");
          }
        });
      } else {
        if (this.parametros.imagen === this.info.imagen) {
          axios.put("/cepas/bacteria/metodo-conser/".concat(this.info.id), this.parametros).then(function (res) {
            _this.accionEditarCaract({
              tipo: "metodo",
              data: res.data
            });

            _this.toastr("Editar Método", "Método editado con exito!!", "success");

            _this.$emit("cambiarVariable", "tabla");

            _this.redireccionar();
          })["catch"](function (error) {
            if (error.response) {
              _this.errors = [];
              _this.errors = error.response.data.errors;

              _this.toastr("Error!!", "", "error"); // console.log(error.response.data);

            }
          });
        } else {
          var _formData = new FormData();

          this.appendInfo(_formData);

          _formData.append("_method", "PUT");

          axios.post("/cepas/bacteria/metodo-conser/".concat(this.info.id), _formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(function (res) {
            _this.accionEditarCaract({
              tipo: "metodo",
              data: res.data
            });

            _this.toastr("Editar Método", "Método editado con exito!!", "success");

            _this.$emit("cambiarVariable", "tabla");

            _this.redireccionar();
          })["catch"](function (error) {
            if (error.response) {
              _this.errors = [];
              _this.errors = error.response.data.errors;

              _this.toastr("Error!!", "", "error"); // console.log(error.response.data);

            }
          });
        }
      }
    },
    redireccionar: function redireccionar() {
      var ruta = window.location.pathname;

      if (ruta.includes("bacterias")) {
        this.$router.push({
          name: "metodo-conser-bacteria"
        });
      } else {
        this.$router.push({
          name: "metodo-conser-cepa-bacteria"
        });
      }
    },
    toastr: function toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
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
    llenarInfo: function llenarInfo() {
      this.parametros.tipo_metodo = this.info.tipo_id;
      this.parametros.tipo_agar = this.info.tipo_agar_id;
      this.parametros.fecha = this.info.fecha;
      this.parametros.numero_replicas = this.info.numero_replicas;
      this.parametros.recuento_microgota = this.info.recuento_microgota;
      this.parametros.imagen = this.info.imagen;
      this.imageMiniatura = this.info.imagenPublica;
      this.parametros.descripcion = this.info.descripcion;
    },
    appendInfo: function appendInfo(formData) {
      if (this.$route.params.cepaBacteriaId) {
        formData.append("cepaId", this.$route.params.cepaBacteriaId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }

      formData.append("tipo_metodo", this.parametros.tipo_metodo);
      formData.append("tipo_agar", this.parametros.tipo_agar);
      formData.append("fecha", this.parametros.fecha);
      formData.append("numero_replicas", this.parametros.numero_replicas);
      formData.append("recuento_microgota", this.parametros.recuento_microgota);
      formData.append("imagen", this.parametros.imagen);
      formData.append("descripcion", this.parametros.descripcion === null ? "" : this.parametros.descripcion);
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      this.parametros.imagen = file;
      var allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          this.imageMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.imagen;
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this2 = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this2.imageMiniatura = e.target.result;
      };

      reader.readAsDataURL(file);
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
      var _this3 = this;

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
          _this3.accionAgregarTipoCaractBacteria({
            info: res.data,
            tipo: _this3.modal.tipo
          });

          _this3.$modal.hide("agregar-caract-info");

          _this3.toastr("Agregar Informacion", "".concat(_this3.modal.tipo, " agregado/a con exito"), "success");
        })["catch"](function (error) {
          if (error.response) {
            _this3.modal.errors = error.response.data.errors;
          }

          _this3.toastr("Error!!!!", "", "error");
        });
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getInfoMetodoConserBacterias", "getMetodoConserById"]), {
    mostrarAgar: function mostrarAgar() {
      if (this.parametros.tipo_metodo === 4) {
        return true;
      } else {
        return false;
      }
    },
    mostraImagen: function mostraImagen() {
      return this.imageMiniatura;
    },
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Método") {
        return "btn-primary";
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
  }),
  created: function created() {
    this.$emit("cambiarVariable", "agregar_editar");

    if (!this.$route.params.metodoConserBacteriaId) {
      this.tituloForm = "Agregar Método";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getMetodoConserById(this.$route.params.metodoConserBacteriaId);
      this.llenarInfo();
      this.tituloForm = "Editar Método";
      this.nomBtn = "Editar";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916& ***!
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
                                      "btn-icon btn-icon-only btn-pill btn btn-outline-info",
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
                          _c("label", { attrs: { for: "descripcion" } }, [
                            _vm._v("Descripción")
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.descripcion,
                                expression: "parametros.descripcion"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "text", id: "descripcion" },
                            domProps: { value: _vm.parametros.descripcion },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "descripcion",
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
                          class: _vm.btnClase
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
                        _c("img", {
                          staticClass: "d-block w-100",
                          attrs: {
                            src: _vm.mostraImagen,
                            alt: "Imagen Método de Conservación"
                          }
                        })
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
                  staticClass: "btn btn-primary",
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
          _c("b", { staticClass: "text-warning" }, [_vm._v("SIN IMAGEN")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/usuarios/FormUsuariosComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/usuarios/FormUsuariosComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormUsuariosComponent.vue?vue&type=template&id=11c6c916& */ "./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916&");
/* harmony import */ var _FormUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormUsuariosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/usuarios/FormUsuariosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormUsuariosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormUsuariosComponent.vue?vue&type=template&id=11c6c916& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);