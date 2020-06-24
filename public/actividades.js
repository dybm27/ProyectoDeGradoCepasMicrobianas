(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actividades"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formulario: false,
      id: 0,
      tipo: "",
      ids: {
        btns: [],
        checks: []
      },
      misBloqueos: {
        btns: [],
        checks: []
      }
    };
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getUserAuth"])),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("publicidad", ["accionActividad"]), {
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
        window.Echo["private"]("desbloquearBtnsActividad").whisper("desbloquearBtnsActividad", {
          idBtn: this.id
        });
        window.Echo["private"]("desbloquearCheckActividad").whisper("desbloquearCheckActividad", {
          idCheck: this.id
        });
        this.$events.fire("spliceMisBloqueosActividad", {
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
    bloquearBtns: function bloquearBtns(index, id) {
      this.$events.fire(index + "-bloquearBtnsActividad", {
        idBtn: id
      });
    },
    crearEventoBtns: function crearEventoBtns(index) {
      var _this = this;

      this.$events.$on(index + "-verificarBloqueoBtnsActividad", function (e) {
        return _this.bloquearBtns(e.index, e.id);
      });
    },
    eliminarEventoBtns: function eliminarEventoBtns(index) {
      this.$events.off(index + "-verificarBloqueoBtnsActividad");
    },
    bloquearCheck: function bloquearCheck(index, id) {
      this.$events.fire(index + "-bloquearCheckActividad", {
        idCheck: id
      });
    },
    crearEventoCheck: function crearEventoCheck(index) {
      var _this2 = this;

      this.$events.$on(index + "-verificarBloqueoCheckActividad", function (e) {
        return _this2.bloquearCheck(e.index, e.id);
      });
    },
    eliminarEventoCheck: function eliminarEventoCheck(index) {
      this.$events.off(index + "-verificarBloqueoCheckActividad");
    },
    bloquearBtnsActividad: function bloquearBtnsActividad(e) {
      this.ids.btns.push({
        idUser: e.idUser,
        idBtn: e.idBtn,
        index: e.index
      });
      this.crearEventoBtns(e.index);
      this.$events.fire(e.index + "-bloquearBtnsActividad", {
        idBtn: e.idBtn
      });
    },
    desbloquearBtnsActividad: function desbloquearBtnsActividad(e) {
      var data = this.ids.btns.find(function (data) {
        return data.idBtn === e.idBtn;
      });
      this.eliminarEventoBtns(data.index);
      this.ids.btns.splice(this.ids.btns.findIndex(function (data) {
        return data.idBtn === e.idBtn;
      }), 1);
      this.$events.fire(data.index + "-desbloquearBtnsActividad", {
        idBtn: data.idBtn
      });
    },
    bloquearCheckActividad: function bloquearCheckActividad(e) {
      this.ids.checks.push({
        idUser: e.idUser,
        idCheck: e.idCheck,
        index: e.index
      });
      this.crearEventoCheck(e.index);
      this.$events.fire(e.index + "-bloquearCheckActividad", {
        idCheck: e.idCheck
      });
    },
    desbloquearCheckActividad: function desbloquearCheckActividad(e) {
      var data = this.ids.checks.find(function (data) {
        return data.idCheck === e.idCheck;
      });
      this.eliminarEventoCheck(data.index);
      this.ids.checks.splice(this.ids.checks.findIndex(function (data) {
        return data.idCheck === e.idCheck;
      }), 1);
      this.$events.fire(data.index + "-desbloquearCheckActividad", {
        idCheck: data.idCheck
      });
    },
    borrarBtnsCheck: function borrarBtnsCheck(id) {
      var btns = this.ids.btns.find(function (data) {
        return data.idUser === id;
      });
      var checks = this.ids.checks.find(function (data) {
        return data.idUser === id;
      });

      if (btns) {
        this.desbloquearBtnsActividad(btns);
        this.desbloquearCheckActividad(checks);
      }
    },
    pushMisBloqueos: function pushMisBloqueos(e) {
      this.misBloqueos.btns.push({
        idUser: e.idUser,
        idBtn: e.id,
        index: e.index
      });
      this.misBloqueos.checks.push({
        idUser: e.idUser,
        idCheck: e.id,
        index: e.index
      });
    },
    spliceMisBloqueos: function spliceMisBloqueos(e) {
      this.misBloqueos.btns.splice(this.misBloqueos.btns.findIndex(function (data) {
        return data.idBtn === e.id;
      }), 1);
      this.misBloqueos.checks.splice(this.misBloqueos.checks.findIndex(function (data) {
        return data.idCheck === e.id;
      }), 1);
    },
    verificarBloqueos: function verificarBloqueos() {
      for (var index = 0; index < this.ids.btns.length; index++) {
        this.$events.fire(this.ids.btns[index].index + "-bloquearBtnsActividad", {
          idBtn: this.ids.btns[index].idBtn
        });
        this.$events.fire(this.ids.btns[index].index + "-bloquearCheckActividad", {
          idCheck: this.ids.btns[index].idBtn
        });
      }
    }
  }),
  mounted: function mounted() {
    var _this3 = this;

    window.Echo.join("noticias").here(function (data) {}).joining(function (data) {
      window.Echo["private"]("recibirBtnsCheckActividad").whisper("recibirBtnsCheckActividad", {
        bloqueos: _this3.misBloqueos
      });
    }).leaving(function (data) {
      _this3.borrarBtnsCheck(data.id);
    }); //  .listen("Prueba", e => {});

    window.Echo["private"]("bloquearBtnsActividad").listenForWhisper("bloquearBtnsActividad", function (e) {
      _this3.bloquearBtnsActividad(e);
    });
    window.Echo["private"]("desbloquearBtnsActividad").listenForWhisper("desbloquearBtnsActividad", function (e) {
      _this3.desbloquearBtnsActividad(e);
    });
    window.Echo["private"]("bloquearCheckActividad").listenForWhisper("bloquearCheckActividad", function (e) {
      _this3.bloquearCheckActividad(e);
    });
    window.Echo["private"]("desbloquearCheckActividad").listenForWhisper("desbloquearCheckActividad", function (e) {
      _this3.desbloquearCheckActividad(e);
    });
  },
  created: function created() {
    var _this4 = this;

    this.$events.$on("abrirFormularioActividad", function (e) {
      return _this4.abrirFormulario(e);
    });
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo.channel("actividad").listen("ActividadEvent", function (e) {
      _this4.accionActividad({
        tipo: e.tipo,
        data: e.actividad
      });

      _this4.$events.fire(e.actividad.id + "-actualizarPublicarActividad", e.actividad.publicar);

      if (!_this4.formulario) {
        _this4.$events.fire("actualizartablaActividad");
      }
    });
    window.Echo["private"]("recibirBtnsCheckActividad").listenForWhisper("recibirBtnsCheckActividad", function (e) {
      for (var index = 0; index < e.bloqueos.btns.length; index++) {
        _this4.bloquearBtnsActividad(e.bloqueos.btns[index]);
      }

      for (var _index = 0; _index < e.bloqueos.checks.length; _index++) {
        _this4.bloquearCheckActividad(e.bloqueos.checks[_index]);
      }
    });
    this.$events.$on("pushMisBloqueosActividad", function (e) {
      return _this4.pushMisBloqueos(e);
    });
    this.$events.$on("spliceMisBloqueosActividad", function (e) {
      return _this4.spliceMisBloqueos(e);
    });
    this.$events.$on("verificarBloqueos", function (e) {
      return _this4.verificarBloqueos();
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("abrirFormularioActividad");
    this.$events.$off("pushMisBloqueosActividad");
    this.$events.$off("spliceMisBloqueosActividad");
    this.$events.$off("verificarBloqueos");
  },
  beforeDestroy: function beforeDestroy() {
    window.Echo.leave("noticias");
    window.Echo.leave("recibirBtnsCheckActividad");
    window.Echo.leave("actividad");
    window.Echo.leave("bloquearCheckActividad");
    window.Echo.leave("desbloquearCheckActividad");
    window.Echo.leave("desbloquearBtnsActividad");
    window.Echo.leave("bloquearBtnsActividad");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=template&id=4d8edea9&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=template&id=4d8edea9& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
          ? [_c("tabla-actividades", { on: { cambiarTipo: _vm.cambiarTipo } })]
          : [
              _c("form-actividades", {
                attrs: { idActividad: _vm.id },
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
        _vm._v("\n      Tabla Dinámica Actividades\n    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerComponent_vue_vue_type_template_id_4d8edea9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=template&id=4d8edea9& */ "./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=template&id=4d8edea9&");
/* harmony import */ var _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerComponent_vue_vue_type_template_id_4d8edea9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerComponent_vue_vue_type_template_id_4d8edea9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=template&id=4d8edea9&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=template&id=4d8edea9& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_4d8edea9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=template&id=4d8edea9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/actividades/ContainerComponent.vue?vue&type=template&id=4d8edea9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_4d8edea9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_4d8edea9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);