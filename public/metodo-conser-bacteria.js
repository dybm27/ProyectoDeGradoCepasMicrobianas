(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metodo-conser-bacteria"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
//
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
      variableAgregar: true
    };
  },
  methods: {
    agregar: function agregar() {
      this.variableAgregar = false;
      this.$router.push({
        name: "metodo-conser-bacteria-agregar"
      });
    },
    cancelar: function cancelar() {
      this.variableAgregar = true;
      this.$router.go(-1);
    },
    cambiarVariable: function cambiarVariable(tipo) {
      this.variableAgregar = false;
    }
  },
  computed: {
    mostrarBtnAgregar: function mostrarBtnAgregar() {
      return this.variableAgregar;
    }
  }
});

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
              _vm.mostrarBtnAgregar
                ? [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm",
                        on: { click: _vm.agregar }
                      },
                      [_vm._v("Agregar Método")]
                    )
                  ]
                : [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",
                        attrs: { to: { name: "metodo-conser-bacteria" } },
                        on: { click: _vm.cancelar }
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
          [_c("router-view", { on: { cambiarVariable: _vm.cambiarVariable } })],
          1
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



/***/ })

}]);