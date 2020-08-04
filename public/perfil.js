(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/bloquearPestañas */ "./resources/js/mixins/bloquearPestañas.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      showPass: false,
      showPass1: false,
      titulo: "",
      tipo: "",
      nombre: "",
      imagen: "",
      pass: "",
      pass1: "",
      errorImagen: "",
      errorPass: "",
      errorNombre: "",
      imagenMiniatura: "",
      bloquearBtnModal: false
    };
  },
  mixins: [Object(_mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__["default"])("perfil"), _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions(["accionModificarAuth"]), {
    cambiarValorImagen: function cambiarValorImagen(valor) {
      this.imagen = valor;
    },
    showModal: function showModal(tipo) {
      this.nombre = "";
      this.pass = "";
      this.imagen = "";
      this.tipo = tipo;

      switch (tipo) {
        case "nombre":
          this.titulo = "Cambiar Nombre";
          this.nombre = this.auth.name;
          this.$modal.show("cambiarInfo");
          break;

        case "imagen":
          this.titulo = "Cambiar Imagen";
          this.$modal.show("cambiarImagen");
          break;

        case "contraseña":
          this.titulo = "Cambiar Contraseña";
          this.$modal.show("cambiarInfo");
          break;
      }
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.errorImagen = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";
          this.imagen = "";
        } else {
          this.errorImagen = "";
          this.cargarImagen(file);
        }
      } else {
        this.imagen = "";
        this.imagenMiniatura = "";
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this = this;

      var reader = new Image();

      reader.onload = function (e) {
        _this.imagenMiniatura = reader.src;
      };

      reader.src = URL.createObjectURL(file);
    },
    eventBtn: function eventBtn() {
      var _this2 = this;

      this.bloquearBtnModal = true;
      var parametros = {
        nombre: this.nombre,
        pass: this.pass,
        imagen: this.imagen
      };

      switch (this.tipo) {
        case "nombre":
          axios.put("/perfil/cambiar-".concat(this.tipo, "/").concat(this.auth.id), parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this2.bloquearBtnModal = false;

              _this2.accionModificarAuth({
                data: res.data
              });

              _this2.toastr(_this2.titulo, "Accion realizada con exito!!", "success");

              _this2.$modal.hide("cambiarInfo");
            }
          })["catch"](function (error) {
            _this2.bloquearBtnModal = false;
          });
          break;

        case "imagen":
          axios.put("/perfil/cambiar-".concat(this.tipo, "/").concat(this.auth.id), parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this2.bloquearBtnModal = false;

              _this2.accionModificarAuth({
                data: res.data
              });

              _this2.toastr(_this2.titulo, "Accion realizada con exito!!", "success");

              _this2.$modal.hide("cambiarImagen");
            }
          })["catch"](function (error) {
            _this2.bloquearBtnModal = false;
          });
          break;

        case "contraseña":
          axios.put("/perfil/cambiar-".concat(this.tipo, "/").concat(this.auth.id), parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this2.bloquearBtnModal = false;

              _this2.accionModificarAuth({
                data: res.data
              });

              _this2.toastr(_this2.titulo, "Accion realizada con exito!!", "success");

              _this2.$modal.hide("cambiarInfo");
            }
          })["catch"](function (error) {
            _this2.bloquearBtnModal = false;
          });
          break;
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapGetters("usuarios", ["getRolById", "getRoles"]), {}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapState(["auth"]), {
    validarNombre: function validarNombre() {
      var letters = /^[A-Za-z\s]+$/;

      if (this.nombre) {
        if (!letters.test(this.nombre)) {
          this.errorNombre = "Solo se admiten letras.";
          return true;
        } else {
          return false;
        }
      } else {
        this.errorNombre = "Favor llenar el campo";
        return true;
      }
    },
    validarContraseñas: function validarContraseAs() {
      if (this.pass1) {
        if (this.pass != this.pass1) {
          return true;
        } else {
          return false;
        }
      }
    },
    validarContraseña: function validarContraseA() {
      var regexp_password = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@!%?&#()"'|_])([A-Za-z\d$@!%?&#()"'|_]){8,15}$/;

      if (this.pass) {
        if (!regexp_password.test(this.pass)) {
          this.errorPass = " La contrase\xF1a debe tener:\n                1: M\xEDnimo 8 y M\xE1ximo 15 caracteres\n                2: Al menos una letra may\xFAscula\n                3: Al menos un d\xEDgito\n                4: Al menos 1 car\xE1cter especial";
          return true;
        } else {
          return false;
        }
      }
    },
    validarBoton: function validarBoton() {
      switch (this.tipo) {
        case "nombre":
          if (this.validarNombre || this.auth.name === this.nombre) {
            return true;
          } else {
            return false;
          }

          break;

        case "imagen":
          if (this.imagen) {
            return false;
          } else {
            return true;
          }

          break;

        case "contraseña":
          if (this.validarContraseña || this.validarContraseñas || this.pass === "") {
            return true;
          } else {
            return false;
          }

          break;
      }
    },
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    }
  }),
  created: function created() {
    this.$emit("rutaSider", window.location.pathname);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("ul", {
        staticClass:
          "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tabs-animation" },
        [
          _vm.numPestaña == 1
            ? [
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "row justify-content-md-center" }, [
                    _c("div", { staticClass: "col-md-7" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card-shadow-primary profile-responsive card-border mb-3 card"
                        },
                        [
                          _c("div", { staticClass: "dropdown-menu-header" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "dropdown-menu-header-inner bg-focus"
                              },
                              [
                                _c("div", {
                                  staticClass: "menu-header-image opacity-3",
                                  staticStyle: {
                                    "background-image":
                                      "url('data:image/jpeg;base64,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')"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "menu-header-content btn-pane-right"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "avatar-icon-wrapper mr-2 avatar-icon-xl"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "avatar-icon rounded"
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: _vm.auth.avatarPublico,
                                                alt: "Avatar"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c(
                                        "h5",
                                        { staticClass: "menu-header-title" },
                                        [_vm._v(_vm._s(_vm.auth.name))]
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "list-group list-group-flush" },
                            [
                              _c("li", { staticClass: "list-group-item" }, [
                                _c("div", { staticClass: "widget-content" }, [
                                  _c("div", { staticClass: "text-center" }, [
                                    _c("h5", {
                                      staticClass: "widget-heading opacity-2"
                                    }),
                                    _vm._v(" "),
                                    _c("h5", [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-md-12" },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "float-left" },
                                              [
                                                _c("b", [
                                                  _vm._v("Rol de Usuario:")
                                                ]),
                                                _vm._v(" "),
                                                _vm.getRoles != ""
                                                  ? [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getRolById(
                                                            _vm.auth.rol_id
                                                          ).nombre
                                                        )
                                                      )
                                                    ]
                                                  : _vm._e()
                                              ],
                                              2
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
                                            _c(
                                              "span",
                                              { staticClass: "float-left" },
                                              [
                                                _c("b", [_vm._v("Email:")]),
                                                _vm._v(
                                                  "\n                              " +
                                                    _vm._s(_vm.auth.email) +
                                                    "\n                            "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "p-0 list-group-item" }, [
                                _c(
                                  "div",
                                  { staticClass: "grid-menu grid-menu-3col" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "no-gutters row" },
                                      [
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn-icon-vertical btn-square btn-transition btn btn-outline-link",
                                              on: {
                                                click: function($event) {
                                                  return _vm.showModal("nombre")
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "lnr-pencil btn-icon-wrapper btn-icon-lg mb-3"
                                              }),
                                              _vm._v(
                                                "Cambiar Nombre\n                        "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn-icon-vertical btn-square btn-transition btn btn-outline-link",
                                              on: {
                                                click: function($event) {
                                                  return _vm.showModal("imagen")
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "lnr-link btn-icon-wrapper btn-icon-lg mb-3"
                                              }),
                                              _vm._v(
                                                "Cambiar Imagen\n                        "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-4" }, [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn-icon-vertical btn-square btn-transition btn btn-outline-link",
                                              on: {
                                                click: function($event) {
                                                  return _vm.showModal(
                                                    "contraseña"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "lnr-star btn-icon-wrapper btn-icon-lg mb-3"
                                              }),
                                              _vm._v(
                                                "Cambiar Contraseña\n                        "
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            : [_vm._m(1)]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "cambiarImagen",
            classes: "my_modal",
            width: 700,
            height: 485
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
                [_vm._v(_vm._s(_vm.titulo))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("cambiarImagen")
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
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _vm.tipo === "imagen"
                  ? [
                      _c("div", { staticClass: "container" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
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
                                  class: [
                                    "form-control-file",
                                    _vm.errorImagen != "" ? "is-invalid" : ""
                                  ],
                                  attrs: {
                                    name: "imagen",
                                    id: "imagen",
                                    accept: "image/jpeg",
                                    type: "file",
                                    required: ""
                                  },
                                  on: { change: _vm.obtenerImagen }
                                }),
                                _vm._v(" "),
                                _vm.errorImagen
                                  ? _c(
                                      "em",
                                      { staticClass: "error invalid-feedback" },
                                      [_vm._v(_vm._s(_vm.errorImagen))]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6" },
                            [
                              _vm.mostraImagen
                                ? [
                                    _c("Croppie", {
                                      attrs: {
                                        id: "croppie",
                                        imagen: _vm.mostraImagen,
                                        mostrarBtnCroppie: true,
                                        zoom: 1,
                                        enableZoom: true,
                                        editar: false,
                                        boundaryHeigth: 230,
                                        viewportWidth: 200
                                      },
                                      on: {
                                        cambiarValorImagen:
                                          _vm.cambiarValorImagen
                                      }
                                    })
                                  ]
                                : [
                                    _c("div", { staticClass: "text-center" }, [
                                      _c("h5", { staticClass: "mt-5 mb-5" }, [
                                        _c("span", { staticClass: "pr-1" }, [
                                          _c(
                                            "b",
                                            { staticClass: "text-warning" },
                                            [_vm._v("SIN IMAGEN")]
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                            ],
                            2
                          )
                        ])
                      ])
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("cambiarImagen")
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
                  attrs: {
                    type: "button",
                    disabled: _vm.validarBoton || _vm.bloquearBtnModal
                  },
                  on: { click: _vm.eventBtn }
                },
                [_vm._v("Cambiar")]
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
            name: "cambiarInfo",
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
                [_vm._v(_vm._s(_vm.titulo))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("cambiarInfo")
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
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _vm.tipo === "nombre"
                  ? [
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "nombre" } }, [
                            _vm._v("Nombre")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.nombre,
                                expression: "nombre"
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.validarNombre === true ? "is-invalid" : ""
                            ],
                            attrs: {
                              name: "nombre",
                              id: "nombre",
                              placeholder: "...",
                              type: "text",
                              required: ""
                            },
                            domProps: { value: _vm.nombre },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.nombre = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.validarNombre
                            ? _c(
                                "em",
                                { staticClass: "error invalid-feedback" },
                                [_vm._v(_vm._s(_vm.errorNombre))]
                              )
                            : _vm._e()
                        ]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.tipo === "contraseña"
                  ? [
                      _c("label", { attrs: { for: "pass" } }, [
                        _vm._v("Contraseña")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group mb-3" }, [
                        (_vm.showPass == true ? "text" : "password") ===
                        "checkbox"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass,
                                  expression: "pass"
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.validarContraseña === true
                                  ? "is-invalid"
                                  : ""
                              ],
                              attrs: {
                                name: "pass",
                                id: "pass",
                                placeholder: "...",
                                required: "",
                                type: "checkbox"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.pass)
                                  ? _vm._i(_vm.pass, null) > -1
                                  : _vm.pass
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.pass,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 && (_vm.pass = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.pass = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.pass = $$c
                                  }
                                }
                              }
                            })
                          : (_vm.showPass == true ? "text" : "password") ===
                            "radio"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass,
                                  expression: "pass"
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.validarContraseña === true
                                  ? "is-invalid"
                                  : ""
                              ],
                              attrs: {
                                name: "pass",
                                id: "pass",
                                placeholder: "...",
                                required: "",
                                type: "radio"
                              },
                              domProps: { checked: _vm._q(_vm.pass, null) },
                              on: {
                                change: function($event) {
                                  _vm.pass = null
                                }
                              }
                            })
                          : _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass,
                                  expression: "pass"
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.validarContraseña === true
                                  ? "is-invalid"
                                  : ""
                              ],
                              attrs: {
                                name: "pass",
                                id: "pass",
                                placeholder: "...",
                                required: "",
                                type: _vm.showPass == true ? "text" : "password"
                              },
                              domProps: { value: _vm.pass },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.pass = $event.target.value
                                }
                              }
                            }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _vm.showPass
                              ? _c("i", {
                                  staticClass: "fas fa-eye",
                                  on: {
                                    click: function($event) {
                                      _vm.showPass = !_vm.showPass
                                    }
                                  }
                                })
                              : _c("i", {
                                  staticClass: "fas fa-eye-slash",
                                  on: {
                                    click: function($event) {
                                      _vm.showPass = !_vm.showPass
                                    }
                                  }
                                })
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.validarContraseña
                          ? _c(
                              "em",
                              { staticClass: "error invalid-feedback" },
                              [_vm._v(_vm._s(_vm.errorPass))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "pass1" } }, [
                        _vm._v("Confirmar Contraseña")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group mb-3" }, [
                        (_vm.showPass1 == true ? "text" : "password") ===
                        "checkbox"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass1,
                                  expression: "pass1"
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.validarContraseñas === true
                                  ? "is-invalid"
                                  : ""
                              ],
                              attrs: {
                                name: "pass1",
                                id: "pass1",
                                placeholder: "...",
                                required: "",
                                type: "checkbox"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.pass1)
                                  ? _vm._i(_vm.pass1, null) > -1
                                  : _vm.pass1
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.pass1,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 && (_vm.pass1 = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.pass1 = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.pass1 = $$c
                                  }
                                }
                              }
                            })
                          : (_vm.showPass1 == true ? "text" : "password") ===
                            "radio"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass1,
                                  expression: "pass1"
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.validarContraseñas === true
                                  ? "is-invalid"
                                  : ""
                              ],
                              attrs: {
                                name: "pass1",
                                id: "pass1",
                                placeholder: "...",
                                required: "",
                                type: "radio"
                              },
                              domProps: { checked: _vm._q(_vm.pass1, null) },
                              on: {
                                change: function($event) {
                                  _vm.pass1 = null
                                }
                              }
                            })
                          : _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass1,
                                  expression: "pass1"
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.validarContraseñas === true
                                  ? "is-invalid"
                                  : ""
                              ],
                              attrs: {
                                name: "pass1",
                                id: "pass1",
                                placeholder: "...",
                                required: "",
                                type:
                                  _vm.showPass1 == true ? "text" : "password"
                              },
                              domProps: { value: _vm.pass1 },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.pass1 = $event.target.value
                                }
                              }
                            }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _vm.showPass1
                              ? _c("i", {
                                  staticClass: "fas fa-eye",
                                  on: {
                                    click: function($event) {
                                      _vm.showPass1 = !_vm.showPass1
                                    }
                                  }
                                })
                              : _c("i", {
                                  staticClass: "fas fa-eye-slash",
                                  on: {
                                    click: function($event) {
                                      _vm.showPass1 = !_vm.showPass1
                                    }
                                  }
                                })
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.validarContraseñas
                          ? _c(
                              "em",
                              { staticClass: "error invalid-feedback" },
                              [_vm._v("Las contraseñas no coinciden")]
                            )
                          : _vm._e()
                      ])
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("cambiarInfo")
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
                  attrs: {
                    type: "button",
                    disabled: _vm.validarBoton || _vm.bloquearBtnModal
                  },
                  on: { click: _vm.eventBtn }
                },
                [_vm._v("Cambiar")]
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
    return _c("div", { staticClass: "app-page-title" }, [
      _c("div", { staticClass: "page-title-wrapper" }, [
        _c("div", { staticClass: "page-title-heading" }, [
          _c("div", { staticClass: "page-title-icon" }, [
            _c("i", { staticClass: "pe-7s-id icon-gradient bg-mean-fruit" })
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v("\n          Información del Usuario\n          "),
            _c("div", { staticClass: "page-title-subheading opacity-10" }, [
              _c("nav", [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _c("li", { staticClass: "breadcrumb-item" }, [
                    _c("a", [_c("i", { staticClass: "fa fa-home" })])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "breadcrumb-item" }, [
                    _c("a", [_vm._v("Perfil")])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "page-title-actions" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c(
                "div",
                {
                  staticClass: "alert alert-danger mt-4 text-center",
                  attrs: { role: "alert" }
                },
                [_vm._v("Ya has ingresado desde otra pestaña del navegador!!")]
              )
            ])
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

/***/ "./resources/js/components/PerfilComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/PerfilComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerfilComponent.vue?vue&type=template&id=85951714& */ "./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714&");
/* harmony import */ var _PerfilComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PerfilComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PerfilComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PerfilComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PerfilComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PerfilComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PerfilComponent.vue?vue&type=template&id=85951714& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PerfilComponent.vue?vue&type=template&id=85951714&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PerfilComponent_vue_vue_type_template_id_85951714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/bloquearPestañas.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/bloquearPestañas.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bloquearPestañasMixin = function bloquearPestañasMixin(tipo) {
  return {
    data: function data() {
      return {
        numPestañas: 0,
        numPestaña: 0
      };
    },
    methods: {
      obtenerValorPestañas: function obtenerValorPestaAs() {
        var value = this.$ls.get(tipo);

        if (value) {
          this.numPestañas = value.numPestañas + 1;
          this.numPestaña = this.numPestañas;
          this.$ls.set(tipo, {
            numPestañas: this.numPestañas,
            numPestañaSaliente: 0
          });
        } else {
          this.numPestañas = 1;
          this.numPestaña = 1;
          this.$ls.set(tipo, {
            numPestañas: 1,
            numPestañaSaliente: 0
          });
        }
      },
      modificarValorPestañas: function modificarValorPestaAs(val, oldVal) {
        this.numPestañas = val.numPestañas;

        if (val.numPestañas < oldVal.numPestañas) {
          if (val.numPestañaSaliente < this.numPestaña) {
            this.numPestaña = this.numPestaña - 1;
          }
        }
      },
      verificar: function verificar() {
        if (this.numPestañas === 1) {
          this.$ls.remove(tipo);
        } else {
          this.$ls.set(tipo, {
            numPestañas: --this.numPestañas,
            numPestañaSaliente: this.numPestaña
          });
        }
      },
      beforeunload: function beforeunload() {
        this.verificar();
      }
    },
    mounted: function mounted() {
      this.obtenerValorPestañas();
      window.addEventListener("beforeunload", this.beforeunload);
    },
    created: function created() {
      this.$ls.on(tipo, this.modificarValorPestañas);
    },
    beforeDestroy: function beforeDestroy() {
      this.verificar();
      this.$ls.off(tipo, this.modificarValorPestañas);
      window.removeEventListener("beforeunload", this.beforeunload);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (bloquearPestañasMixin);

/***/ })

}]);