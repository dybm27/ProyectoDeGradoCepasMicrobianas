(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["novedades"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formulario: false,
      id: 0,
      tipo: "",
      refrescar: false
    };
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("publicidad", ["accionNovedad"]), {
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
    },
    cambiarTipo: function cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    },
    cambiarVariable: function cambiarVariable() {
      this.refrescar = false;
    }
  }),
  created: function created() {
    var _this = this;

    this.$events.$on("abrirFormularioNovedad", function (e) {
      return _this.abrirFormulario(e);
    });
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo.channel("novedad").listen("NovedadEvent", function (e) {
      _this.accionNovedad({
        tipo: e.tipo,
        data: e.novedad
      });

      _this.$events.fire(e.novedad.id + "-actualizarPublicarNovedad", e.novedad.publicar);

      if (!_this.formulario) {
        _this.$events.fire("actualizartablaNovedad");
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2& ***!
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
  return _c("div", { staticClass: "main-card mb-3 card" }, [
    _c("div", { staticClass: "card-header-tab card-header" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "btn-actions-pane-right actions-icon-btn" },
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
      { staticClass: "card-body" },
      [
        !_vm.formulario
          ? [
              _c("tabla-novedades", {
                attrs: { refrescar: _vm.refrescar },
                on: {
                  abrirFormularioNovedad: _vm.abrirFormulario,
                  cambiarTipo: _vm.cambiarTipo,
                  cambiarVariable: _vm.cambiarVariable
                }
              })
            ]
          : [
              _c("form-novedades", {
                attrs: { idNovedad: _vm.id },
                on: {
                  cambiarTipo: _vm.cambiarTipo,
                  cambiarVariableFormulario: _vm.cambiarVariableFormulario
                }
              })
            ]
      ],
      2
    )
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
        _vm._v("\n      Tabla Dinámica Novedades\n    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=template&id=e241a9e2& */ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2&");
/* harmony import */ var _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=template&id=e241a9e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/novedades/ContainerComponent.vue?vue&type=template&id=e241a9e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_e241a9e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);