(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepas~cepas-todas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/websocketsTabla */ "./resources/js/mixins/websocketsTabla.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  props: ["FieldDefs", "detailRowComponent", "tipo", "tipoM", "titulo"],
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      id: "",
      sortOrder: [{
        field: "codigo",
        direction: "asc"
      }],
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_3__["default"].mapState("cepas", ["cepas"]), {
    mostrarTabla: function mostrarTabla() {
      if (this.cepas != "" && this.cepas != null) {
        return true;
      }

      return false;
    }
  }),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_3__["default"].mapActions("cepas", ["accionCepas"]), {
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarCepa: function eliminarCepa() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/cepas/eliminar/".concat(this.id)).then(function (res) {
        _this.bloquearBtnModal = false;

        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          _this.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

          window.location.href = "/";
        }

        if (res.data === "negativo") {
          _this.toastr("Precaución!!", "La cepa cuenta con caracteristicas registradas, favor eliminarlas", "warning", 8000);
        } else {
          _this.refrescarTabla = true;

          _this.toastr("Eliminar Cepa", "Cepa eliminada con exito!!", "success", 5000);
        }

        _this.accionCepas({
          tipo: "eliminar",
          data: res.data
        });

        _this.actualizarTabla();

        _this.$modal.hide("modal_eliminar_" + _this.tipo);
      })["catch"](function (error) {
        _this.bloquearBtnModal = false;

        _this.toastr("Error!!", "", "error");
      });
    },
    closeEliminar: function closeEliminar() {
      window.Echo["private"]("desbloquearBtns" + this.tipoM).whisper("desbloquearBtns" + this.tipoM, {
        id: this.id
      });
      window.Echo["private"]("desbloquearCheck" + this.tipoM).whisper("desbloquearCheck" + this.tipoM, {
        id: this.id
      });
      this.$events.fire("spliceMisBloqueos" + this.tipoM, {
        id: this.id
      });
    },
    actualizarTabla: function actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    }
  }),
  created: function created() {
    var _this2 = this;

    this.$emit("cambiarTipo", "tabla");
    this.$events.on("actualizartabla" + this.tipoM, function (e) {
      return _this2.actualizarTabla();
    });
  },
  destroyed: function destroyed() {
    this.$events.off("actualizartabla" + this.tipoM);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _vm.mostrarTabla
        ? [
            _c("MyVuetable", {
              ref: "tabla",
              attrs: {
                "api-url": "/info-panel/" + _vm.tipo + "s-tabla",
                fields: _vm.FieldDefs,
                "sort-order": _vm.sortOrder,
                "detail-row-component": _vm.detailRowComponent,
                nameGet: _vm.tipo + "s"
              }
            })
          ]
        : [
            _c("div", { staticClass: "text-center" }, [
              _c("h5", { staticClass: "mt-5 mb-5" }, [
                _c("span", { staticClass: "pr-1" }, [
                  _c("b", { staticClass: "text-success" }, [
                    _vm._v("AÚN NO SE HAN AGREGADO " + _vm._s(_vm.titulo))
                  ])
                ])
              ])
            ])
          ],
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_" + _vm.tipo,
            classes: "my_modal",
            width: 400,
            height: 300
          },
          on: {
            "before-open": _vm.beforeOpenEliminar,
            closed: _vm.closeEliminar
          }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  staticClass: "modal-title",
                  attrs: { id: "exampleModalLongTitle" }
                },
                [_vm._v("Eliminar Cepa Microbiana")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_" + _vm.tipo)
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("p", [_vm._v("Esta segura/o de eliminar la Cepa?.")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_" + _vm.tipo)
                    }
                  }
                },
                [_vm._v("Cancelar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button", disabled: _vm.bloquearBtnModal },
                  on: { click: _vm.eliminarCepa }
                },
                [_vm._v("Eliminar")]
              )
            ])
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/TablaCepasComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/cepas/TablaCepasComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaCepasComponent.vue?vue&type=template&id=17d5da46& */ "./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46&");
/* harmony import */ var _TablaCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaCepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/TablaCepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaCepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaCepasComponent.vue?vue&type=template&id=17d5da46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  name: "codigo",
  sortField: "codigo",
  title: "Código",
  titleClass: "text-center"
}, {
  name: "nombre_grupo",
  sortField: "grupo_microbiano_id",
  title: "Grupo Microbiano",
  titleClass: "text-center"
}, {
  name: "nombre_genero",
  sortField: "genero_id",
  title: "Género",
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
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "__component:acciones_cepas",
  title: "Acciones",
  titleClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/mixins/abrirCerrarFormulario.js":
/*!******************************************************!*\
  !*** ./resources/js/mixins/abrirCerrarFormulario.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var abrirCerrarFormualrio = function abrirCerrarFormualrio(tipoM) {
  return {
    data: function data() {
      return {
        formulario: false,
        id: 0
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
        window.Echo["private"]("desbloquearBtns" + tipoM).whisper("desbloquearBtns" + tipoM, {
          id: this.id
        });
        window.Echo["private"]("desbloquearCheck" + tipoM).whisper("desbloquearCheck" + tipoM, {
          id: this.id
        });
        this.$events.fire("spliceMisBloqueos" + tipoM, {
          id: this.id
        });
        this.id = 0;
        this.formulario = !this.formulario;
      },
      cambiarVariableFormulario: function cambiarVariableFormulario() {
        this.formulario = !this.formulario;
      }
    },
    created: function created() {
      var _this = this;

      this.$events.$on("abrirFormulario" + tipoM, function (e) {
        return _this.abrirFormulario(e);
      });
    },
    beforeDestroy: function beforeDestroy() {
      this.$events.$off("abrirFormulario" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (abrirCerrarFormualrio);

/***/ }),

/***/ "./resources/js/mixins/websockets.js":
/*!*******************************************!*\
  !*** ./resources/js/mixins/websockets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsMixin = function websocketsMixin(tipoM, tipoP) {
  return {
    data: function data() {
      return {
        bloqueos: [],
        misBloqueos: []
      };
    },
    methods: {
      // Bloquear Btns
      bloquearBtnsTabla: function bloquearBtnsTabla(e) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id
        });
        this.$events.fire(e.id + "-bloquearBtns" + tipoM);
      },
      desbloquearBtnsTabla: function desbloquearBtnsTabla(e) {
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id;
        }), 1);
        this.$events.fire(e.id + "-desbloquearBtns" + tipoM);
      },
      // Bloquear Check
      bloquearCheckTabla: function bloquearCheckTabla(e) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id
        });
        this.$events.fire(e.id + "-bloquearCheck" + tipoM);
      },
      desbloquearCheckTabla: function desbloquearCheckTabla(e) {
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id;
        }), 1);
        this.$events.fire(e.id + "-desbloquearCheck" + tipoM);
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
          this.desbloquearCheckTabla(data);
        }
      },
      // verificar bloqueos existentes
      verificarBloqueos: function verificarBloqueos() {
        for (var index = 0; index < this.bloqueos.length; index++) {
          this.$events.fire(this.bloqueos[index].id + "-bloquearBtns" + tipoM);
          this.$events.fire(this.bloqueos[index].id + "-bloquearCheck" + tipoM);
        }
      },
      enviarBloqueos: function enviarBloqueos() {
        window.Echo["private"]("recibirBtnsCheck" + tipoM).whisper("recibirBtnsCheck" + tipoM, {
          bloqueos: this.misBloqueos
        });
      }
    },
    mounted: function mounted() {
      var _this = this;

      window.Echo.join(tipoP).joining(function (data) {
        if (_this.misBloqueos.length > 0) {
          _this.enviarBloqueos();
        }
      }).leaving(function (data) {
        _this.borrarBloqueos(data.user);
      });
      window.Echo["private"]("bloquearBtns" + tipoM).listenForWhisper("bloquearBtns" + tipoM, function (e) {
        _this.bloquearBtnsTabla(e);
      });
      window.Echo["private"]("desbloquearBtns" + tipoM).listenForWhisper("desbloquearBtns" + tipoM, function (e) {
        if (e.id != 0) {
          _this.desbloquearBtnsTabla(e);
        }
      });
      window.Echo["private"]("bloquearCheck" + tipoM).listenForWhisper("bloquearCheck" + tipoM, function (e) {
        _this.bloquearCheckTabla(e);
      });
      window.Echo["private"]("desbloquearCheck" + tipoM).listenForWhisper("desbloquearCheck" + tipoM, function (e) {
        if (e.id != 0) {
          _this.desbloquearCheckTabla(e);
        }
      });
    },
    created: function created() {
      var _this2 = this;

      window.Echo["private"]("recibirBtnsCheck" + tipoM).listenForWhisper("recibirBtnsCheck" + tipoM, function (e) {
        if (e.bloqueos.length > 0) {
          _this2.bloquearBtnsTabla(e.bloqueos[0]);

          _this2.bloquearCheckTabla(e.bloqueos[0]);
        }
      });
      this.$events.$on("pushMisBloqueos" + tipoM, function (e) {
        return _this2.pushMisBloqueos(e);
      });
      this.$events.$on("spliceMisBloqueos" + tipoM, function (e) {
        return _this2.spliceMisBloqueos(e);
      });
      this.$events.$on("verificarBloqueos-" + tipoP, function (e) {
        return _this2.verificarBloqueos();
      });
    },
    destroyed: function destroyed() {
      this.$events.$off("pushMisBloqueos" + tipoM);
      this.$events.$off("spliceMisBloqueos" + tipoM);
      this.$events.$off("verificarBloqueos-" + tipoP);
    },
    beforeDestroy: function beforeDestroy() {
      window.Echo.leave(tipoP);
      window.Echo.leave("recibirBtnsCheck" + tipoM);
      window.Echo.leave("bloquearCheck" + tipoM);
      window.Echo.leave("desbloquearCheck" + tipoM);
      window.Echo.leave("desbloquearBtns" + tipoM);
      window.Echo.leave("bloquearBtns" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsMixin);

/***/ }),

/***/ "./resources/js/mixins/websocketsTabla.js":
/*!************************************************!*\
  !*** ./resources/js/mixins/websocketsTabla.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsTabla = function websocketsTabla(tipoM) {
  return {
    methods: {
      closeEliminar: function closeEliminar() {
        window.Echo["private"]("desbloquearBtns" + tipoM).whisper("desbloquearBtns" + tipoM, {
          id: this.id
        });
        window.Echo["private"]("desbloquearCheck" + tipoM).whisper("desbloquearCheck" + tipoM, {
          id: this.id
        });
        this.$events.fire("spliceMisBloqueos" + tipoM, {
          id: this.id
        });
      },
      actualizarTabla: function actualizarTabla() {
        if (this.mostrarTabla) {
          if (this.$refs.tabla) {
            this.$refs.tabla.refreshDatos();
          }
        }
      }
    },
    created: function created() {
      var _this = this;

      this.$events.on("actualizartabla" + tipoM, function (e) {
        return _this.actualizarTabla();
      });
    },
    destroyed: function destroyed() {
      this.$events.off("actualizartabla" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsTabla);

/***/ })

}]);