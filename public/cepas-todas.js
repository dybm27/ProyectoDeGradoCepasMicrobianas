(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepas-todas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TableCepasComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/TableCepasComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _columnas_columnas_cepas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnas/columnas-cepas */ "./resources/js/components/cepas/columnas/columnas-cepas.js");
//
//
//
//
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
      fields: _columnas_columnas_cepas__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "id",
        direction: "asc"
      }]
    };
  },
  methods: {},
  computed: {},
  mounted: function mounted() {
    this.$emit("rutaHijo", window.location.pathname);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TableCepasComponent.vue?vue&type=template&id=2abe99e1&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/TableCepasComponent.vue?vue&type=template&id=2abe99e1&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c("ul", {
        staticClass:
          "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      }),
      _vm._v(" "),
      _c("my-vuetable", {
        attrs: {
          "api-url": "http://127.0.0.1:8000/api/cepas",
          fields: _vm.fields,
          "sort-order": _vm.sortOrder,
          "detail-row-component": "my-detail-row"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/TableCepasComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/cepas/TableCepasComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableCepasComponent_vue_vue_type_template_id_2abe99e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableCepasComponent.vue?vue&type=template&id=2abe99e1&scoped=true& */ "./resources/js/components/cepas/TableCepasComponent.vue?vue&type=template&id=2abe99e1&scoped=true&");
/* harmony import */ var _TableCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableCepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/TableCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableCepasComponent_vue_vue_type_template_id_2abe99e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableCepasComponent_vue_vue_type_template_id_2abe99e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2abe99e1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/TableCepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/TableCepasComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cepas/TableCepasComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TableCepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TableCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/TableCepasComponent.vue?vue&type=template&id=2abe99e1&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/cepas/TableCepasComponent.vue?vue&type=template&id=2abe99e1&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCepasComponent_vue_vue_type_template_id_2abe99e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TableCepasComponent.vue?vue&type=template&id=2abe99e1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TableCepasComponent.vue?vue&type=template&id=2abe99e1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCepasComponent_vue_vue_type_template_id_2abe99e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCepasComponent_vue_vue_type_template_id_2abe99e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/columnas/columnas-cepas.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/cepas/columnas/columnas-cepas.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "id",
  sortField: "id",
  title: "Id",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "codigo",
  sortField: "codigo",
  title: "Codigo",
  titleClass: "text-center"
}, {
  name: "nombre_grupo",
  sortField: "grupo_microbiano_id",
  title: "Grupo Microbiano",
  titleClass: "text-center"
}, {
  name: "nombre_genero",
  sortField: "genero_id",
  title: "Genero",
  titleClass: "text-center"
}, {
  name: "nombre_especie",
  sortField: "especie_id",
  title: "Especie",
  titleClass: "text-center"
}, {
  name: "estado",
  sortField: "estado",
  titleClass: "text-center"
}, {
  name: "origen",
  sortField: "origen",
  titleClass: "text-center"
},, {
  name: "__component:checkboxs-publicar",
  title: "Publicar",
  titleClass: "text-center"
}, {
  name: "__component:acciones-cepas",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ })

}]);