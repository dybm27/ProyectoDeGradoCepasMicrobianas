(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caract-macro-actinomiceto~caract-macro-bacteria~caract-macro-hongo~caract-macro-levadura"],{

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

/***/ "./resources/js/mixins/infoCaractMacro.js":
/*!************************************************!*\
  !*** ./resources/js/mixins/infoCaractMacro.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var infoCaractMacroMixin = {
  data: function data() {
    return {
      active1: "active",
      active2: "",
      active3: "",
      mostrar1: false,
      mostrar2: false,
      mostrar3: false,
      mostrarForm1: true,
      mostrarForm2: false,
      mostrarForm3: false,
      mostrarBtnAgregar: true,
      modificarForm: false
    };
  },
  methods: {
    cambiarVariable: function cambiarVariable() {
      this.modificarForm = false;
    },
    cancelar: function cancelar() {
      if (this.mostrarForm1) {
        this.mostrarForm1 = false;
        this.mostrar1 = false;
        this.mostrarBtnAgregar = true;
      } else if (this.mostrarForm2) {
        this.mostrarForm2 = false;
        this.cambiarActive(1);
        this.mostrar2 = false;
        this.mostrarBtnAgregar = true;
      } else if (this.mostrarForm3) {
        this.mostrarForm3 = false;
        this.cambiarActive(2);
        this.mostrar3 = false;
        this.mostrarBtnAgregar = true;
      }
    },
    abrirForm: function abrirForm() {
      if (!this.mostrar1) {
        this.cambiarActive(1);
        this.mostrar1 = true;
        this.mostrarBtnAgregar = false;
      } else if (this.getCaractMacro[0] && !this.mostrar2) {
        this.cambiarActive(2);
        this.mostrar2 = true;
        this.mostrarBtnAgregar = false;
      } else if (this.getCaractMacro[1] && !this.mostrar3) {
        this.cambiarActive(3);
        this.mostrar3 = true;
        this.mostrarBtnAgregar = false;
      }
    },
    llenarForms: function llenarForms() {
      if (this.getCaractMacro[0]) {
        this.medio1 = this.getCaractMacro[0].medio;
        this.mostrar1 = true;
      }

      if (this.getCaractMacro[1]) {
        this.medio2 = this.getCaractMacro[1].medio;
        this.mostrar2 = true;
      }

      if (this.getCaractMacro[2]) {
        this.medio3 = this.getCaractMacro[2].medio;
        this.mostrar3 = true;
        this.mostrarBtnAgregar = false;
      }
    },
    cambiarActive: function cambiarActive(num) {
      switch (num) {
        case 1:
          this.active1 = "active";
          this.active2 = "";
          this.active3 = "";
          this.mostrarForm1 = true;
          this.mostrarForm2 = false;
          this.mostrarForm3 = false;
          break;

        case 2:
          this.active1 = "";
          this.active2 = "active";
          this.active3 = "";
          this.mostrarForm1 = false;
          this.mostrarForm2 = true;
          this.mostrarForm3 = false;
          break;

        case 3:
          this.active1 = "";
          this.active2 = "";
          this.active3 = "active";
          this.mostrarForm1 = false;
          this.mostrarForm2 = false;
          this.mostrarForm3 = true;
          break;
      }
    },
    formatear: function formatear(num) {
      switch (num) {
        case 1:
          if (this.mostrar3) {
            this.mostrar3 = false;
            this.cambiarActive(2);
          } else if (this.mostrar2) {
            this.mostrar2 = false;
            this.cambiarActive(1);
          } else {
            this.mostrar1 = false;
            this.mostrarForm1 = false;
          }

          break;

        case 2:
          if (this.mostrar3) {
            this.mostrar3 = false;
            this.cambiarActive(2);
          } else {
            this.mostrar2 = false;
            this.cambiarActive(1);
          }

          break;

        case 3:
          this.mostrar3 = false;
          this.cambiarActive(2);
          break;
      }
    }
  },
  computed: {
    computedActive1: function computedActive1() {
      return this.active1;
    },
    computedActive2: function computedActive2() {
      return this.active2;
    },
    computedActive3: function computedActive3() {
      return this.active3;
    },
    computedMostrarForm1: function computedMostrarForm1() {
      return this.mostrarForm1;
    },
    computedMostrarForm2: function computedMostrarForm2() {
      return this.mostrarForm2;
    },
    computedMostrarForm3: function computedMostrarForm3() {
      return this.mostrarForm3;
    },
    mostrarForms: function mostrarForms() {
      if (!this.getCaractMacro[0] && !this.mostrar1) {
        this.mostrarForm1 = false;
        return false;
      } else {
        this.llenarForms();
        return true;
      }
    },
    mostrarBtnEliminar: function mostrarBtnEliminar() {
      if (this.getCaractMacro[0] && this.mostrarForm1) {
        return true;
      } else if (this.getCaractMacro[1] && this.mostrarForm2) {
        return true;
      } else if (this.getCaractMacro[2] && this.mostrarForm3) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar: function mostrarBtnCancelar() {
      if (!this.getCaractMacro[0] && this.mostrarForm1) {
        return true;
      } else if (!this.getCaractMacro[1] && this.mostrarForm2) {
        return true;
      } else if (!this.getCaractMacro[2] && this.mostrarForm3) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnAgregarComputed: function mostrarBtnAgregarComputed() {
      return this.mostrarBtnAgregar;
    },
    medio1: {
      get: function get() {
        if (this.getCaractMacro[0]) {
          return this.getCaractMacro[0].medio;
        }
      },
      set: function set() {}
    },
    medio2: {
      get: function get() {
        if (this.getCaractMacro[1]) {
          return this.getCaractMacro[1].medio;
        }
      },
      set: function set() {}
    },
    medio3: {
      get: function get() {
        if (this.getCaractMacro[2]) {
          return this.getCaractMacro[2].medio;
        }
      },
      set: function set() {}
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoCaractMacroMixin);

/***/ }),

/***/ "./resources/js/mixins/obtenerImagenCroopieCepas.js":
/*!**********************************************************!*\
  !*** ./resources/js/mixins/obtenerImagenCroopieCepas.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var obtenerImagenCroopieCepasMixin = {
  data: function data() {
    return {
      imagenMiniatura: "",
      imagenError: ""
    };
  },
  methods: {
    cambiarValorImagen: function cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen = this.info.imagen;
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";

          if (this.info) {
            this.imagenMiniatura = this.info.imagenPublica;
            this.parametros.imagen = this.info.imagen;
          } else {
            this.imagenMiniatura = "";
            this.parametros.imagen = "";
          }
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        if (this.info) {
          this.imagenMiniatura = this.info.imagenPublica;
          this.parametros.imagen = this.info.imagen;
        } else {
          this.parametros.imagen = "";
          this.imagenMiniatura = "";
        }
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this = this;

      var reader = new Image();

      reader.onload = function (e) {
        _this.imagenMiniatura = reader.src;
      };

      reader.src = URL.createObjectURL(file);
    }
  },
  computed: {
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    },
    mostrarBtnCroppie: function mostrarBtnCroppie() {
      if (this.info) {
        if (this.imagenMiniatura != this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    validarCroppie: function validarCroppie() {
      if (this.info) {
        if (this.imagenMiniatura == this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    validarBtn: function validarBtn() {
      if (!this.parametros.imagen) {
        return true;
      }

      return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (obtenerImagenCroopieCepasMixin);

/***/ })

}]);