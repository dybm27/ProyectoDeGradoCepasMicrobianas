(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vision"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_websocketsSinTabla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/websocketsSinTabla */ "./resources/js/mixins/websocketsSinTabla.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _editor_texto_EditorTextoComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../editor-texto/EditorTextoComponent.vue */ "./resources/js/components/editor-texto/EditorTextoComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Editor: _editor_texto_EditorTextoComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      parametros: {
        cuerpo: "",
        imagenesEditor: [],
        imagenesGuardadas: []
      }
    };
  },
  mixins: [Object(_mixins_websocketsSinTabla__WEBPACK_IMPORTED_MODULE_1__["default"])("vision", "Vision"), _mixins_toastr__WEBPACK_IMPORTED_MODULE_2__["default"]],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState("quienes_somos", ["quienes_somos"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState(["auth"]), {
    verificarBtn: function verificarBtn() {
      if (this.quienes_somos.vision) {
        if (this.parametros.cuerpo) {
          if (this.quienes_somos.vision.cuerpo === this.parametros.cuerpo) {
            return true;
          }

          return false;
        }

        return true;
      } else {
        return true;
      }
    }
  }),
  created: function created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("quienes_somos", ["accionCambiarQuienesSomos"]), {
    cambiarVision: function cambiarVision() {
      var _this = this;

      axios.put("/quienes-somos/vision/cambiar", this.parametros).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          _this.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

          window.location.href = "/";
        }

        _this.accionCambiarQuienesSomos({
          data: res.data,
          tipo: "vision"
        });

        _this.toastr("Cambiar Visión", "Visión cambiada con exito", "success");
      });
    },
    aceptarContenido: function aceptarContenido(data) {
      this.parametros.cuerpo = data.contenido;
      this.parametros.imagenesEditor = data.imagenesEditor;
      this.parametros.imagenesGuardadas = data.imagenesGuardadas;
    },
    modificarContenido: function modificarContenido(data) {
      this.parametros.cuerpo = "";
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=template&id=ca91896a&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=template&id=ca91896a& ***!
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
      _vm.quienes_somos
        ? [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "main-card mb-3 card" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    !_vm.ocupado
                      ? [
                          _c(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("h5", { staticClass: "card-title" }, [
                                    _vm._v("Visión")
                                  ]),
                                  _vm._v(" "),
                                  _c("Editor", {
                                    attrs: { info: _vm.quienes_somos.vision },
                                    on: {
                                      contenido: _vm.aceptarContenido,
                                      modificar: _vm.modificarContenido
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              _c("div", { staticClass: "col-md-4 mt-3" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-block btn-success",
                                    attrs: { disabled: _vm.verificarBtn },
                                    on: { click: _vm.cambiarVision }
                                  },
                                  [_vm._v("Cambiar")]
                                )
                              ])
                            ]
                          )
                        ]
                      : [
                          _c(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              _c("div", { staticClass: "col-md-8" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "alert alert-success mt-4 text-center",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.user.name) +
                                        " se encuentra editando la visión!"
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                  ],
                  2
                )
              ])
            ])
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
    return _c("div", { staticClass: "container mt-5" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12 d-flex justify-content-center mt-5" },
          [
            _c("div", { staticClass: "loader" }, [
              _c("div", { staticClass: "ball-spin-fade-loader" }, [
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [_c("hr")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [_c("hr")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VisionComponent_vue_vue_type_template_id_ca91896a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisionComponent.vue?vue&type=template&id=ca91896a& */ "./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=template&id=ca91896a&");
/* harmony import */ var _VisionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisionComponent_vue_vue_type_template_id_ca91896a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VisionComponent_vue_vue_type_template_id_ca91896a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/quienes-somos/VisionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VisionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=template&id=ca91896a&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=template&id=ca91896a& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisionComponent_vue_vue_type_template_id_ca91896a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VisionComponent.vue?vue&type=template&id=ca91896a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/VisionComponent.vue?vue&type=template&id=ca91896a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisionComponent_vue_vue_type_template_id_ca91896a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisionComponent_vue_vue_type_template_id_ca91896a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/websocketsSinTabla.js":
/*!***************************************************!*\
  !*** ./resources/js/mixins/websocketsSinTabla.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsSinTablaMixin = function websocketsSinTablaMixin(tipo, tipoM) {
  return {
    data: function data() {
      return {
        ocupado: false,
        user: "",
        ordenEntrada: []
      };
    },
    methods: {
      bloquear: function bloquear(arrayUsers) {
        if (this.ordenEntrada.length === 0) {
          this.ordenEntrada = arrayUsers;
        }

        if (this.auth.id != this.ordenEntrada[0].id) {
          this.ocupado = true;
          this.user = this.ordenEntrada[0];
        } else {
          this.ocupado = false;
          this.user = "";
        }
      },
      borrarUsuario: function borrarUsuario(user) {
        if (this.ordenEntrada.length > 1) {
          var index = this.ordenEntrada.findIndex(function (userArray) {
            return userArray.id === user.id;
          });
          this.ordenEntrada.splice(index, 1);

          if (this.auth.id === this.ordenEntrada[0].id) {
            this.ocupado = false;
            this.user = "";
          } else {
            this.ocupado = true;
            this.user = this.ordenEntrada[0];
          }
        }
      },
      verificarPush: function verificarPush(user) {
        if (this.ordenEntrada.length === 0) {
          this.ordenEntrada.push(this.auth);
          this.ordenEntrada.push(user);
        } else {
          this.ordenEntrada.push(user);
        }
      }
    },
    mounted: function mounted() {
      var _this = this;

      window.Echo.join(tipo).joining(function (data) {
        _this.verificarPush(data.user);

        window.Echo["private"]("bloquear" + tipoM).whisper("bloquear" + tipoM + "-" + data.user.id, {
          arrayUsers: _this.ordenEntrada
        });
      }).leaving(function (data) {
        _this.borrarUsuario(data.user);
      });
    },
    created: function created() {
      var _this2 = this;

      this.$emit("rutaHijo", window.location.pathname);
      window.Echo["private"]("bloquear" + tipoM).listenForWhisper("bloquear" + tipoM + "-" + this.auth.id, function (e) {
        _this2.bloquear(e.arrayUsers);
      });
      window.Echo["private"]("borrarBloqueo" + tipoM).listenForWhisper("borrarBloqueo" + tipoM, function (e) {
        _this2.borrarUsuario(e.user);
      });
    },
    beforeDestroy: function beforeDestroy() {
      window.Echo.leave(tipo);
      window.Echo.leave("bloquear" + tipoM);
    },
    destroyed: function destroyed() {
      window.Echo.leave("borrarBloqueo" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsSinTablaMixin);

/***/ })

}]);