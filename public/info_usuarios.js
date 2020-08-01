(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info_usuarios"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      variableAgregar: true,
      bloqueos: [],
      misBloqueos: []
    };
  },
  methods: {
    agregar: function agregar() {
      this.variableAgregar = false;
      this.$router.push({
        name: "agregar-usuario"
      });
    },
    cancelar: function cancelar() {
      this.variableAgregar = true;
      var id = 0;

      if (this.misBloqueos.length > 0) {
        id = this.misBloqueos[0].id;
      }

      window.Echo["private"]("desbloquearBtnsUsuario").whisper("desbloquearBtnsUsuario", {
        id: id
      });
      this.$events.fire("spliceMisBloqueosUsuario", {
        id: id
      });
      this.$router.push({
        name: "tabla-usuarios"
      });
    },
    cambiarVariable: function cambiarVariable(tipo) {
      if (tipo === "agregar_editar") {
        this.variableAgregar = false;
      } else {
        this.variableAgregar = true;
      }
    },
    // Bloquear Btns
    bloquearBtnsTabla: function bloquearBtnsTabla(e) {
      this.bloqueos.push({
        idUser: e.idUser,
        id: e.id
      });
      this.crearEventoBtns(e.id);
      this.$events.fire(e.id + "-bloquearBtnsUsuario");
    },
    desbloquearBtnsTabla: function desbloquearBtnsTabla(e) {
      var data = this.bloqueos.find(function (data) {
        return data.id === e.id;
      });
      this.eliminarEventoBtns(data.id);
      this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
        return data.id === e.id;
      }), 1);
      this.$events.fire(data.id + "-desbloquearBtnsUsuario");
    },
    bloquearBtns: function bloquearBtns(id) {
      this.$events.fire(id + "-bloquearBtnsUsuario");
    },
    crearEventoBtns: function crearEventoBtns(id) {
      var _this = this;

      this.$events.$on(id + "-verificarBloqueoBtnsUsuario", function (e) {
        return _this.bloquearBtns(e.id);
      });
    },
    eliminarEventoBtns: function eliminarEventoBtns(id) {
      this.$events.off(id + "-verificarBloqueoBtnsUsuario");
    },
    // guardar mis bloqueos
    pushMisBloqueos: function pushMisBloqueos(e) {
      this.misBloqueos.push({
        idUser: e.idUser,
        id: e.id
      });
    },
    spliceMisBloqueos: function spliceMisBloqueos(e) {
      if (e.id != 0) {
        this.misBloqueos.splice(this.misBloqueos.findIndex(function (data) {
          return data.id === e.id;
        }), 1);
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
    verificarBloqueos: function verificarBloqueos() {
      for (var index = 0; index < this.bloqueos.length; index++) {
        this.bloquearBtns(this.bloqueos[index].id);
      }
    },
    enviarBloqueos: function enviarBloqueos() {
      window.Echo["private"]("recibirBtnsUsuario").whisper("recibirBtnsUsuario", {
        bloqueos: this.misBloqueos
      });
    }
  },
  computed: {
    mostrarLinkAgregar: function mostrarLinkAgregar() {
      return this.variableAgregar;
    }
  },
  created: function created() {
    var _this2 = this;

    console.log("info");
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo["private"]("recibirBtnsUsuario").listenForWhisper("recibirBtnsUsuario", function (e) {
      if (e.bloqueos.length > 0) {
        _this2.bloquearBtnsTabla(e.bloqueos[0]);
      }
    });
    this.$events.$on("pushMisBloqueosUsuario", function (e) {
      return _this2.pushMisBloqueos(e);
    });
    this.$events.$on("spliceMisBloqueosUsuario", function (e) {
      return _this2.spliceMisBloqueos(e);
    });
    this.$events.$on("verificarBloqueos-usuarios", function (e) {
      return _this2.verificarBloqueos();
    });
  },
  mounted: function mounted() {
    var _this3 = this;

    window.Echo.join("usuarios").joining(function (data) {
      if (_this3.misBloqueos.length > 0) {
        _this3.enviarBloqueos();
      }
    }).leaving(function (data) {
      _this3.borrarBloqueos(data.user);
    });
    window.Echo["private"]("bloquearBtnsUsuario").listenForWhisper("bloquearBtnsUsuario", function (e) {
      _this3.bloquearBtnsTabla(e);
    });
    window.Echo["private"]("desbloquearBtnsUsuario").listenForWhisper("desbloquearBtnsUsuario", function (e) {
      if (e.id != 0) {
        _this3.desbloquearBtnsTabla(e);
      }
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("pushMisBloqueosUsuario");
    this.$events.$off("spliceMisBloqueosUsuario");
    this.$events.$off("verificarBloqueos-usuarios");
  },
  beforeDestroy: function beforeDestroy() {
    window.Echo.leave("usuarios");
    window.Echo.leave("recibirBtnsUsuario");
    window.Echo.leave("desbloquearBtnsUsuario");
    window.Echo.leave("bloquearBtnsUsuario");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=template&id=f0bb74ea&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=template&id=f0bb74ea& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "tabs-animation" }, [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _vm.mostrarLinkAgregar
              ? [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
                      on: { click: _vm.agregar }
                    },
                    [_vm._v("Agregar Usuario")]
                  )
                ]
              : [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",
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
        { staticClass: "card-body" },
        [
          _c("router-view", {
            attrs: { bloqueos: _vm.bloqueos },
            on: { cambiarVariable: _vm.cambiarVariable }
          })
        ],
        1
      )
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
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n        Tabla Dinámica Usuarios\n      ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoTablaUsuariosComponent_vue_vue_type_template_id_f0bb74ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoTablaUsuariosComponent.vue?vue&type=template&id=f0bb74ea& */ "./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=template&id=f0bb74ea&");
/* harmony import */ var _InfoTablaUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoTablaUsuariosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoTablaUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoTablaUsuariosComponent_vue_vue_type_template_id_f0bb74ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoTablaUsuariosComponent_vue_vue_type_template_id_f0bb74ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/usuarios/InfoTablaUsuariosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTablaUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoTablaUsuariosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTablaUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=template&id=f0bb74ea&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=template&id=f0bb74ea& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTablaUsuariosComponent_vue_vue_type_template_id_f0bb74ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoTablaUsuariosComponent.vue?vue&type=template&id=f0bb74ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/InfoTablaUsuariosComponent.vue?vue&type=template&id=f0bb74ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTablaUsuariosComponent_vue_vue_type_template_id_f0bb74ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTablaUsuariosComponent_vue_vue_type_template_id_f0bb74ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);