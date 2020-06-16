(function(d){	const l = d['es'] = d['es'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Blue marker":"Marcador azul",Bold:"Negrita",Cancel:"Cancelar","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen",Code:"Código",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Full size image":"Imagen a tamaño completo","Green marker":"Marcador verde","Green pen":"Texto verde",Highlight:"Resaltar","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Insert image":"Insertar imagen","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Cursiva","Left aligned image":"Imagen alineada a la izquierda",Link:"Enlace","Link URL":"URL del enlace",Next:"Siguiente","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva","Pink marker":"Marcador rosa",Previous:"Anterior","Red pen":"Texto rojo",Redo:"Rehacer","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0","Right aligned image":"Imagen alineada a la derecha",Save:"Guardar","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Strikethrough:"Tachado",Subscript:"Subíndice",Superscript:"Superíndice","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto","This link has no URL":"Este enlace no tiene URL",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Widget toolbar":"Barra de herramientas del widget","Yellow marker":"Marcador amarillo"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tablas-cepas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
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
      refrescarTabla1: false,
      refrescarTabla2: false,
      refrescarTabla3: false,
      refrescarTabla4: false,
      refrescarTabla5: false,
      refrescarTabla6: false,
      refrescarTabla7: false,
      refrescarTabla8: false
    };
  },
  created: function created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  methods: {
    accionModal: function accionModal(datos) {
      switch (datos.tipo) {
        case "genero":
          this.refrescarTabla1 = true;
          break;

        case "especie":
          this.refrescarTabla2 = true;
          break;

        case "familia":
          this.refrescarTabla8 = true;
          break;

        case "orden":
          this.refrescarTabla3 = true;
          break;

        case "clase":
          this.refrescarTabla4 = true;
          break;

        case "phylum":
          this.refrescarTabla5 = true;
          break;

        case "reino":
          this.refrescarTabla7 = true;
          break;

        case "division":
          this.refrescarTabla6 = true;
          break;
      }
    },
    cambiarVariable: function cambiarVariable() {
      this.refrescarTabla1 = false;
      this.refrescarTabla2 = false;
      this.refrescarTabla3 = false;
      this.refrescarTabla4 = false;
      this.refrescarTabla5 = false;
      this.refrescarTabla6 = false;
      this.refrescarTabla7 = false;
      this.refrescarTabla8 = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c(
          "div",
          { staticClass: "col-md-10" },
          [
            _c("tabla-generos", {
              attrs: { refrescarTabla: _vm.refrescarTabla1 },
              on: { cambiarVariable: _vm.cambiarVariable }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c(
          "div",
          { staticClass: "col-md-10" },
          [
            _c("tabla-especies", {
              attrs: { refrescarTabla: _vm.refrescarTabla2 },
              on: { cambiarVariable: _vm.cambiarVariable }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c(
          "div",
          { staticClass: "col-md-10" },
          [
            _c("tabla-ordens", {
              attrs: { refrescarTabla: _vm.refrescarTabla3 },
              on: { cambiarVariable: _vm.cambiarVariable }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c(
          "div",
          { staticClass: "col-md-10" },
          [
            _c("tabla-clases", {
              attrs: { refrescarTabla: _vm.refrescarTabla4 },
              on: { cambiarVariable: _vm.cambiarVariable }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c(
          "div",
          { staticClass: "col-md-10" },
          [
            _c("tabla-phylums", {
              attrs: { refrescarTabla: _vm.refrescarTabla5 },
              on: { cambiarVariable: _vm.cambiarVariable }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c(
          "div",
          { staticClass: "col-md-10" },
          [
            _c("tabla-divisions", {
              attrs: { refrescarTabla: _vm.refrescarTabla6 },
              on: { cambiarVariable: _vm.cambiarVariable }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c(
          "div",
          { staticClass: "col-md-10" },
          [
            _c("tabla-reinos", {
              attrs: { refrescarTabla: _vm.refrescarTabla7 },
              on: { cambiarVariable: _vm.cambiarVariable }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c(
          "div",
          { staticClass: "col-md-10" },
          [
            _c("tabla-familias", {
              attrs: { refrescarTabla: _vm.refrescarTabla8 },
              on: { cambiarVariable: _vm.cambiarVariable }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("modales-otra-info-cepas", { on: { accionModal: _vm.accionModal } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/otra-info/CepasComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/otra-info/CepasComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CepasComponent.vue?vue&type=template&id=4f5807d0& */ "./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0&");
/* harmony import */ var _CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/CepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/CepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CepasComponent.vue?vue&type=template&id=4f5807d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/CepasComponent.vue?vue&type=template&id=4f5807d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_4f5807d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);