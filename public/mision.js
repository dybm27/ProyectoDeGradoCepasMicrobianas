(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mision"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websocketsSinTabla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/websocketsSinTabla */ "./resources/js/mixins/websocketsSinTabla.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  mixins: [Object(_mixins_websocketsSinTabla__WEBPACK_IMPORTED_MODULE_0__["default"])("mision", "Mision"), _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: _objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapState("quienes_somos", ["quienes_somos"])), vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapState(["auth"])), {}, {
    verificarBtn: function verificarBtn() {
      if (this.quienes_somos.mision) {
        if (this.parametros.cuerpo) {
          if (this.quienes_somos.mision.cuerpo === this.parametros.cuerpo) {
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
  methods: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("quienes_somos", ["accionCambiarQuienesSomos"])), {}, {
    cambiarMision: function cambiarMision() {
      var _this = this;

      axios.put("/quienes-somos/mision/cambiar", this.parametros).then(function (res) {
        _this.accionCambiarQuienesSomos({
          data: res.data,
          tipo: "mision"
        });

        _this.toastr("Cambiar Misión", "Misión cambiada con exito", "success");
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this.$router.push("/sin-acceso");
        } else if (error.response.status === 405 || error.response.status === 401) {
          window.location.href = "/";
        }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=template&id=5fb9cb82&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=template&id=5fb9cb82& ***!
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
                                    _vm._v("Misión")
                                  ]),
                                  _vm._v(" "),
                                  _c("Editor", {
                                    attrs: { info: _vm.quienes_somos.mision },
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
                          !_vm.verificarBtn
                            ? _c(
                                "div",
                                { staticClass: "row justify-content-center" },
                                [
                                  _c("div", { staticClass: "col-md-4 mt-3" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-block btn-success",
                                        on: { click: _vm.cambiarMision }
                                      },
                                      [_vm._v("Guardar Cambios")]
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
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
                                        " se encuentra editando la misión!"
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

/***/ "./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MisionComponent_vue_vue_type_template_id_5fb9cb82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MisionComponent.vue?vue&type=template&id=5fb9cb82& */ "./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=template&id=5fb9cb82&");
/* harmony import */ var _MisionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MisionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MisionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MisionComponent_vue_vue_type_template_id_5fb9cb82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MisionComponent_vue_vue_type_template_id_5fb9cb82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/quienes-somos/MisionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MisionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MisionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MisionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=template&id=5fb9cb82&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=template&id=5fb9cb82& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MisionComponent_vue_vue_type_template_id_5fb9cb82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MisionComponent.vue?vue&type=template&id=5fb9cb82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/MisionComponent.vue?vue&type=template&id=5fb9cb82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MisionComponent_vue_vue_type_template_id_5fb9cb82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MisionComponent_vue_vue_type_template_id_5fb9cb82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);