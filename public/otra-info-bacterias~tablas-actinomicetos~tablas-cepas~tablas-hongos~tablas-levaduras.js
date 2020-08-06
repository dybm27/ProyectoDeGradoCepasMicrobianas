(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otra-info-bacterias~tablas-actinomicetos~tablas-cepas~tablas-hongos~tablas-levaduras"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tipoModal", "tipo"],
  methods: {
    mostrarTabla: function mostrarTabla() {
      this.$emit("mostrarTabla");
    }
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getPermisoByNombre"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _vm.getPermisoByNombre("agregar-otra")
      ? _c(
          "button",
          {
            staticClass:
              "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
            on: {
              click: function($event) {
                return _vm.$modal.show("modal_agregar_tipo_" + _vm.tipoModal, {
                  tipo: _vm.tipo
                })
              }
            }
          },
          [_vm._v("Agregar")]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("img", {
      attrs: {
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
      },
      on: { click: _vm.mostrarTabla }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccionMostrar.vue?vue&type=template&id=07821ea6& */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&");
/* harmony import */ var _AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccionMostrar.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/AccionMostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccionMostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccionMostrar.vue?vue&type=template&id=07821ea6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/websocketsModalOtraInfo.js":
/*!********************************************************!*\
  !*** ./resources/js/mixins/websocketsModalOtraInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsModalOtraInfo = function websocketsModalOtraInfo(tipoInfo) {
  return {
    methods: {
      closeEditar: function closeEditar() {
        window.Echo["private"]("desbloquearBtns" + tipoInfo).whisper("desbloquearBtns" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
        this.$events.fire("eliminarMiBloqueo" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
      },
      closeEliminar: function closeEliminar() {
        window.Echo["private"]("desbloquearBtns" + tipoInfo).whisper("desbloquearBtns" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
        this.$events.fire("eliminarMiBloqueo" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsModalOtraInfo);

/***/ }),

/***/ "./resources/js/mixins/websocketsOtraInfo.js":
/*!***************************************************!*\
  !*** ./resources/js/mixins/websocketsOtraInfo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsOtraInfoMixin = function websocketsOtraInfoMixin(tipoInfo) {
  return {
    data: function data() {
      return {
        bloqueos: [],
        miBloqueo: null
      };
    },
    methods: {
      // Bloquear Btns
      bloquearBtnsTabla: function bloquearBtnsTabla(e) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id,
          tipo: e.tipo
        });
        this.$events.fire(e.id + "-bloquearBtns-" + e.tipo);
      },
      desbloquearBtnsTabla: function desbloquearBtnsTabla(e) {
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id && data.tipo === e.tipo;
        }), 1);
        this.$events.fire(e.id + "-desbloquearBtns-" + e.tipo);
      },
      // guardar mis bloqueos
      agregarMiBloqueo: function agregarMiBloqueo(e) {
        this.miBloqueo = {
          idUser: e.idUser,
          id: e.id,
          tipo: e.tipo
        };
      },
      eliminarMiBloqueo: function eliminarMiBloqueo(e) {
        if (e.id != 0) {
          this.miBloqueo = null;
        }
      },
      //borrar bloqueos
      borrarBloqueos: function borrarBloqueos(e) {
        var data = this.bloqueos.find(function (data) {
          return data.idUser === e.id;
        });

        if (data) {
          this.desbloquearBtnsTabla(data);
        }
      },
      // verificar bloqueos existentes
      verificarBloqueos: function verificarBloqueos(tipo) {
        for (var index = 0; index < this.bloqueos.length; index++) {
          if (this.bloqueos[index].tipo == tipo) {
            this.$events.fire(this.bloqueos[index].id + "-bloquearBtns-" + tipo);
          }
        }
      },
      enviarBloqueos: function enviarBloqueos() {
        window.Echo["private"]("recibirBtns" + tipoInfo).whisper("recibirBtns" + tipoInfo, {
          miBloqueo: this.miBloqueo
        });
      }
    },
    mounted: function mounted() {
      var _this = this;

      window.Echo.join(tipoInfo).joining(function (data) {
        if (_this.miBloqueo) {
          _this.enviarBloqueos();
        }
      }).leaving(function (data) {
        _this.borrarBloqueos(data.user);
      });
      window.Echo["private"]("bloquearBtns" + tipoInfo).listenForWhisper("bloquearBtns" + tipoInfo, function (e) {
        _this.bloquearBtnsTabla(e);
      });
      window.Echo["private"]("desbloquearBtns" + tipoInfo).listenForWhisper("desbloquearBtns" + tipoInfo, function (e) {
        if (e.id != 0) {
          _this.desbloquearBtnsTabla(e);
        }
      });
    },
    created: function created() {
      var _this2 = this;

      this.$emit("rutaHijo", window.location.pathname);
      window.Echo["private"]("recibirBtns" + tipoInfo).listenForWhisper("recibirBtns" + tipoInfo, function (e) {
        if (e.miBloqueo) {
          _this2.bloquearBtnsTabla(e.miBloqueo);
        }
      });
      this.$events.$on("agregarMiBloqueo" + tipoInfo, function (e) {
        _this2.agregarMiBloqueo(e);
      });
      this.$events.$on("eliminarMiBloqueo" + tipoInfo, function (e) {
        _this2.eliminarMiBloqueo(e);
      });
    },
    destroyed: function destroyed() {
      this.$events.$off("agregarMiBloqueo" + tipoInfo);
      this.$events.$off("eliminarMiBloqueo" + tipoInfo);
    },
    beforeDestroy: function beforeDestroy() {
      window.Echo.leave(tipoInfo);
      window.Echo.leave("recibirBtns" + tipoInfo);
      window.Echo.leave("desbloquearBtns" + tipoInfo);
      window.Echo.leave("bloquearBtns" + tipoInfo);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsOtraInfoMixin);

/***/ }),

/***/ "./resources/js/mixins/websocketsTablaOtraInfo.js":
/*!********************************************************!*\
  !*** ./resources/js/mixins/websocketsTablaOtraInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsTablaOtraInfo = function websocketsTablaOtraInfo(tipo) {
  return {
    data: function data() {
      return {
        tabla: false
      };
    },
    methods: {
      mostrarTabla: function mostrarTabla() {
        this.tabla = !this.tabla;
      },
      actualizarTabla: function actualizarTabla() {
        if (this.tabla) {
          if (this.$refs.tabla) {
            this.$refs.tabla.refreshDatos();
          }
        }
      }
    },
    created: function created() {
      var _this = this;

      this.$events.on("actualizartabla" + tipo, function (e) {
        return _this.actualizarTabla();
      });
    },
    destroyed: function destroyed() {
      this.$events.off("actualizartabla" + tipo);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsTablaOtraInfo);

/***/ })

}]);