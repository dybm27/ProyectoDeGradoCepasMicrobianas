(function(d){	const l = d['es'] = d['es'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Blue marker":"Marcador azul",Bold:"Negrita",Cancel:"Cancelar","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen",Code:"Código",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Full size image":"Imagen a tamaño completo","Green marker":"Marcador verde","Green pen":"Texto verde",Highlight:"Resaltar","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Insert image":"Insertar imagen","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Cursiva","Left aligned image":"Imagen alineada a la izquierda",Link:"Enlace","Link URL":"URL del enlace",Next:"Siguiente","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva","Pink marker":"Marcador rosa",Previous:"Anterior","Red pen":"Texto rojo",Redo:"Rehacer","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0","Right aligned image":"Imagen alineada a la derecha",Save:"Guardar","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Strikethrough:"Tachado",Subscript:"Subíndice",Superscript:"Superíndice","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto","This link has no URL":"Este enlace no tiene URL",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Widget toolbar":"Barra de herramientas del widget","Yellow marker":"Marcador amarillo"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      texto: ""
    };
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("quienes_somos", ["getQuienesSomos"]), {
    verificarBtn: function verificarBtn() {
      if (this.texto) {
        if (this.texto === this.getQuienesSomos.vision.texto) {
          return true;
        }

        return false;
      } else {
        return true;
      }
    }
  }),
  created: function created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  watch: {
    getQuienesSomos: function getQuienesSomos() {
      if (this.getQuienesSomos) {
        this.texto = this.getQuienesSomos.vision.texto;
      }
    }
  },
  mounted: function mounted() {
    if (this.getQuienesSomos) {
      this.texto = this.getQuienesSomos.vision.texto;
    }
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("quienes_somos", ["accionCambiarQuienesSomos"]), {
    cambiarVision: function cambiarVision() {
      var _this = this;

      axios.put("/quienes-somos/vision/cambiar", {
        texto: this.texto
      }).then(function (res) {
        _this.accionCambiarQuienesSomos({
          data: res.data,
          tipo: "vision"
        });

        _this.toastr("Cambiar Visión", "Visión cambiada con exito", "success");
      })["catch"](function (error) {
        if (error.response) {}

        _this.toastr("Error!!!!", "", "error");
      });
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-9" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title" }, [_vm._v("Visión")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.texto,
                  expression: "texto"
                }
              ],
              staticClass: "form-control",
              staticStyle: { height: "150px" },
              attrs: { name: "texto", id: "texto" },
              domProps: { value: _vm.texto },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.texto = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-3 justify-content-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { disabled: _vm.verificarBtn },
                  on: { click: _vm.cambiarVision }
                },
                [_vm._v("Cambiar")]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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



/***/ })

}]);