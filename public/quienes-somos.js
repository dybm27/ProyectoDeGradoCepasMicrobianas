(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quienes-somos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/bloquearPestañas */ "./resources/js/mixins/bloquearPestañas.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _quienes_somos_NavQuienesSomosComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quienes-somos/NavQuienesSomosComponent.vue */ "./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Nav: _quienes_somos_NavQuienesSomosComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tipo: ""
    };
  },
  mixins: [Object(_mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__["default"])("quienesSomos")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("quienes_somos", ["obtenerQuienesSomos", "accionCambiarQuienesSomos"]), {
    cambiarTipo: function cambiarTipo(ruta) {
      if (ruta.includes("Objetivos")) {
        this.tipo = "objetivos";
      } else if (ruta.includes("vision")) {
        this.tipo = "Visión";
      } else {
        this.tipo = "Misión";
      }
    }
  }),
  created: function created() {
    var _this = this;

    this.$emit("rutaSider", window.location.pathname);
    this.obtenerQuienesSomos();
    window.Echo.channel("quienesSomos").listen("QuienesSomosEvent", function (e) {
      _this.accionCambiarQuienesSomos({
        data: e.data,
        tipo: e.tipo
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
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
  methods: {
    cambiarTipo: function cambiarTipo(ruta) {
      this.$emit("rutaHijo", ruta);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=template&id=623838b6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=template&id=623838b6& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "app-page-title" }, [
        _c("div", { staticClass: "page-title-wrapper" }, [
          _c("div", { staticClass: "page-title-heading" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", [
              _vm._v("\n          Quienes Somos\n          "),
              _c("div", { staticClass: "page-title-subheading opacity-10" }, [
                _c("nav", [
                  _c("ol", { staticClass: "breadcrumb" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("li", { staticClass: "breadcrumb-item" }, [
                      _c("a", [_vm._v(_vm._s(_vm.tipo))])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page-title-actions" })
        ])
      ]),
      _vm._v(" "),
      _vm.numPestaña == 1
        ? [_c("Nav", { on: { rutaHijo: _vm.cambiarTipo } })]
        : [_vm._m(3)]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title-icon" }, [
      _c("i", { staticClass: "pe-7s-notebook icon-gradient bg-mean-fruit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", [_c("i", { staticClass: "fa fa-home" })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", [_vm._v("Inicio")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=template&id=4d0fc60a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=template&id=4d0fc60a& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
        "ul",
        {
          staticClass:
            "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
        },
        [
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: {
                    to: { name: "mision" },
                    "active-class": "active",
                    exact: ""
                  }
                },
                [_c("span", [_vm._v("Misión")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: { to: { name: "vision" }, "active-class": "active" }
                },
                [_c("span", [_vm._v("Visión")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: { to: { name: "objetivos" }, "active-class": "active" }
                },
                [_c("span", [_vm._v("Objetivos")])]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("router-view", { on: { rutaHijo: _vm.cambiarTipo } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/QuienesSomosComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/sitio-web/QuienesSomosComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuienesSomosComponent_vue_vue_type_template_id_623838b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuienesSomosComponent.vue?vue&type=template&id=623838b6& */ "./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=template&id=623838b6&");
/* harmony import */ var _QuienesSomosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuienesSomosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuienesSomosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuienesSomosComponent_vue_vue_type_template_id_623838b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuienesSomosComponent_vue_vue_type_template_id_623838b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/QuienesSomosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuienesSomosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuienesSomosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuienesSomosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=template&id=623838b6&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=template&id=623838b6& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuienesSomosComponent_vue_vue_type_template_id_623838b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuienesSomosComponent.vue?vue&type=template&id=623838b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/QuienesSomosComponent.vue?vue&type=template&id=623838b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuienesSomosComponent_vue_vue_type_template_id_623838b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuienesSomosComponent_vue_vue_type_template_id_623838b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavQuienesSomosComponent_vue_vue_type_template_id_4d0fc60a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavQuienesSomosComponent.vue?vue&type=template&id=4d0fc60a& */ "./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=template&id=4d0fc60a&");
/* harmony import */ var _NavQuienesSomosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavQuienesSomosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavQuienesSomosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavQuienesSomosComponent_vue_vue_type_template_id_4d0fc60a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavQuienesSomosComponent_vue_vue_type_template_id_4d0fc60a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavQuienesSomosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavQuienesSomosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavQuienesSomosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=template&id=4d0fc60a&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=template&id=4d0fc60a& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavQuienesSomosComponent_vue_vue_type_template_id_4d0fc60a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavQuienesSomosComponent.vue?vue&type=template&id=4d0fc60a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue?vue&type=template&id=4d0fc60a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavQuienesSomosComponent_vue_vue_type_template_id_4d0fc60a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavQuienesSomosComponent_vue_vue_type_template_id_4d0fc60a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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