(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["noticias"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bloqueos: [],
      misBloqueos: []
    };
  },
  methods: {
    abrirFormulario: function abrirFormulario(id) {
      if (id != 0) {
        this.id = id;
      } else {
        this.id = 0;
      }

      this.formulario = !this.formulario;
    },
    cerrarFormulario: function cerrarFormulario() {
      if (this.id != 0) {
        window.Echo["private"]("desbloquearBtnsNoticia").whisper("desbloquearBtnsNoticia", {
          id: this.id
        });
        window.Echo["private"]("desbloquearCheckNoticia").whisper("desbloquearCheckNoticia", {
          id: this.id
        });
        this.$events.fire("spliceMisBloqueosNoticia", {
          id: this.id
        });
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
    // Bloquear Btns
    bloquearBtnsNoticia: function bloquearBtnsNoticia(e) {
      this.bloqueos.push({
        idUser: e.idUser,
        id: e.id
      });
      this.crearEventoBtns(e.id);
      this.$events.fire(e.id + "-bloquearBtnsNoticia");
    },
    desbloquearBtnsNoticia: function desbloquearBtnsNoticia(e) {
      var data = this.bloqueos.find(function (data) {
        return data.id === e.id;
      });
      this.eliminarEventoBtns(data.id);
      this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
        return data.id === e.id;
      }), 1);
      this.$events.fire(data.id + "-desbloquearBtnsNoticia");
    },
    bloquearBtns: function bloquearBtns(id) {
      this.$events.fire(id + "-bloquearBtnsNoticia");
    },
    crearEventoBtns: function crearEventoBtns(id) {
      var _this = this;

      this.$events.$on(id + "-verificarBloqueoBtnsNoticia", function (e) {
        return _this.bloquearBtns(e.id);
      });
    },
    eliminarEventoBtns: function eliminarEventoBtns(id) {
      this.$events.off(id + "-verificarBloqueoBtnsNoticia");
    },
    // Bloquear Check
    bloquearCheckNoticia: function bloquearCheckNoticia(e) {
      this.bloqueos.push({
        idUser: e.idUser,
        id: e.id
      });
      this.crearEventoCheck(e.id);
      this.$events.fire(e.id + "-bloquearCheckNoticia");
    },
    desbloquearCheckNoticia: function desbloquearCheckNoticia(e) {
      var data = this.bloqueos.find(function (data) {
        return data.id === e.id;
      });
      this.eliminarEventoCheck(data.id);
      this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
        return data.id === e.id;
      }), 1);
      this.$events.fire(data.id + "-desbloquearCheckNoticia");
    },
    bloquearCheck: function bloquearCheck(id) {
      this.$events.fire(id + "-bloquearCheckNoticia");
    },
    crearEventoCheck: function crearEventoCheck(id) {
      var _this2 = this;

      this.$events.$on(id + "-verificarBloqueoCheckNoticia", function (e) {
        return _this2.bloquearCheck(e.id);
      });
    },
    eliminarEventoCheck: function eliminarEventoCheck(id) {
      this.$events.off(id + "-verificarBloqueoCheckNoticia");
    },
    // eliminar bloqueos
    borrarBtnsCheck: function borrarBtnsCheck(id) {
      var data = this.bloqueos.find(function (data) {
        return data.idUser === id;
      });

      if (data) {
        this.desbloquearBtnsNoticia(data);
        this.desbloquearCheckNoticia(data);
      }
    },
    // guardar mis bloqueos
    pushMisBloqueos: function pushMisBloqueos(e) {
      this.misBloqueos.push({
        idUser: e.idUser,
        id: e.id
      });
    },
    spliceMisBloqueos: function spliceMisBloqueos(e) {
      this.misBloqueos.splice(this.misBloqueos.findIndex(function (data) {
        return data.id === e.id;
      }), 1);
    },
    // verificar bloqueos existentes
    verificarBloqueos: function verificarBloqueos() {
      for (var index = 0; index < this.bloqueos.length; index++) {
        this.bloquearBtns(this.bloqueos[index].id);
        this.bloquearCheck(this.bloqueos[index].id);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    window.Echo.join("noticias").here(function (data) {}).joining(function (data) {
      window.Echo["private"]("recibirBtnsCheckNoticia").whisper("recibirBtnsCheckNoticia", {
        bloqueos: _this3.misBloqueos
      });
    }).leaving(function (data) {
      _this3.borrarBtnsCheck(data.id);
    }); //  .listen("Prueba", e => {});

    window.Echo["private"]("bloquearBtnsNoticia").listenForWhisper("bloquearBtnsNoticia", function (e) {
      _this3.bloquearBtnsNoticia(e);
    });
    window.Echo["private"]("desbloquearBtnsNoticia").listenForWhisper("desbloquearBtnsNoticia", function (e) {
      _this3.desbloquearBtnsNoticia(e);
    });
    window.Echo["private"]("bloquearCheckNoticia").listenForWhisper("bloquearCheckNoticia", function (e) {
      _this3.bloquearCheckNoticia(e);
    });
    window.Echo["private"]("desbloquearCheckNoticia").listenForWhisper("desbloquearCheckNoticia", function (e) {
      _this3.desbloquearCheckNoticia(e);
    });
  },
  created: function created() {
    var _this4 = this;

    this.$emit("rutaHijo", window.location.pathname);
    window.Echo["private"]("recibirBtnsCheckNoticia").listenForWhisper("recibirBtnsCheckNoticia", function (e) {
      for (var index = 0; index < e.bloqueos.length; index++) {
        _this4.bloquearBtnsNoticia(e.bloqueos[index]);

        _this4.bloquearCheckNoticia(e.bloqueos[index]);
      }
    });
    this.$events.$on("abrirFormularioNoticia", function (e) {
      return _this4.abrirFormulario(e);
    });
    this.$events.$on("pushMisBloqueosNoticia", function (e) {
      return _this4.pushMisBloqueos(e);
    });
    this.$events.$on("spliceMisBloqueosNoticia", function (e) {
      return _this4.spliceMisBloqueos(e);
    });
    this.$events.$on("verificarBloqueos-noticias", function (e) {
      return _this4.verificarBloqueos();
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("abrirFormularioNoticia");
    this.$events.$off("pushMisBloqueosNoticia");
    this.$events.$off("spliceMisBloqueosNoticia");
    this.$events.$off("verificarBloqueos-noticias");
  },
  beforeDestroy: function beforeDestroy() {
    window.Echo.leave("noticias");
    window.Echo.leave("recibirBtnsCheckNoticia");
    window.Echo.leave("bloquearCheckNoticia");
    window.Echo.leave("desbloquearCheckNoticia");
    window.Echo.leave("desbloquearBtnsNoticia");
    window.Echo.leave("bloquearBtnsNoticia");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138& ***!
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
                    on: { click: _vm.cerrarFormulario }
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
          ? [_c("tabla-noticias", { on: { cambiarTipo: _vm.cambiarTipo } })]
          : [
              _c("form-noticias", {
                attrs: { idNoticia: _vm.id },
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
        _vm._v("\n      Tabla Dinámica Noticias\n    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=template&id=fe260138& */ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138&");
/* harmony import */ var _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=template&id=fe260138& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);