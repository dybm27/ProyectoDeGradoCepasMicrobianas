(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepas-todas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/CepasComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/CepasComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/bloquearPestañas */ "./resources/js/mixins/bloquearPestañas.js");
/* harmony import */ var _columnas_columnas_cepas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas/columnas-cepas */ "./resources/js/components/cepas/columnas/columnas-cepas.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
      tituloCepa: "",
      tipoAccion: "",
      mostrarBtnVolver: false,
      fields: _columnas_columnas_cepas__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  mixins: [Object(_mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__["default"])("cepas")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("cepas", ["obtenerCepas", "accionCepas"]), {}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("info_cepas", ["obtenerTiposCepas", "accionAgregarTipoCepa", "accionEditarTipoCepa", "accionEliminarTipoCepa"]), {}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("info_caract", ["obtenerInfoCaractHongos", "obtenerInfoCaractBacterias", "obtenerInfoCaractLevaduras", "obtenerInfoCaractActinomicetos", "accionAgregarTipoCaractBacteria", "accionEditarTipoCaractBacteria", "accionEliminarTipoCaractBacteria", "accionAgregarTipoCaractLevadura", "accionEditarTipoCaractLevadura", "accionEliminarTipoCaractLevadura", "accionAgregarTipoCaractHongo", "accionEditarTipoCaractHongo", "accionEliminarTipoCaractHongo", "accionAgregarTipoCaractActinomiceto", "accionEditarTipoCaractActinomiceto", "accionEliminarTipoCaractActinomiceto"]), {
    cambiarTipo: function cambiarTipo(tipo) {
      if (tipo === "ver") {
        this.mostrarBtnVolver = true;
        this.tipoAccion = "Ver información";
      } else if (tipo === "caract") {
        this.mostrarBtnVolver = true;
        this.tipoAccion = "Modificar Características";
      } else if (tipo === "agregar") {
        this.mostrarBtnVolver = false;
        this.tipoAccion = "Agregar";
      } else if (tipo === "editar") {
        this.mostrarBtnVolver = false;
        this.tipoAccion = "Editar";
      } else {
        this.mostrarBtnVolver = false;
        this.tipoAccion = "tabla";
      }
    },
    volverTabla: function volverTabla() {
      window.Echo["private"]("desbloquearBtnsCepa").whisper("desbloquearBtnsCepa", {
        id: this.$route.params.cepaId
      });
      this.$events.fire("eliminarMiBloqueoCepa", {
        id: this.$route.params.cepaId
      });
      this.$router.push({
        name: "cepas"
      });
    }
  }),
  created: function created() {
    var _this = this;

    this.$emit("rutaSider", this.$route.path);
    this.obtenerCepas();
    this.obtenerTiposCepas();
    this.obtenerInfoCaractActinomicetos();
    this.obtenerInfoCaractHongos();
    this.obtenerInfoCaractBacterias();
    this.obtenerInfoCaractLevaduras();
    window.Echo.channel("cepas").listen("CepasEvent", function (e) {
      _this.accionCepas({
        tipo: e.tipoAccion,
        data: e.data
      });

      _this.$events.fire(e.data.id + "-actualizarPublicarCepa", e.data.publicar);

      _this.$events.fire("actualizartablaCepa");
    });
    window.Echo.channel("cepas-info").listen("CepasInfoEvent", function (e) {
      switch (e.tipoAccion) {
        case "agregar":
          _this.accionAgregarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "editar":
          _this.accionEditarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "eliminar":
          _this.accionEliminarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;
      }
    });
    window.Echo.channel("bacterias-info").listen("BacteriasInfoEvent", function (e) {
      switch (e.tipoAccion) {
        case "agregar":
          _this.accionAgregarTipoCaractBacteria({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "editar":
          _this.accionEditarTipoCaractBacteria({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "eliminar":
          _this.accionEliminarTipoCaractBacteria({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;
      }
    });
    window.Echo.channel("hongos-info").listen("HongosInfoEvent", function (e) {
      switch (e.tipoAccion) {
        case "agregar":
          _this.accionAgregarTipoCaractHongo({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "editar":
          _this.accionEditarTipoCaractHongo({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "eliminar":
          _this.accionEliminarTipoCaractHongo({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;
      }
    });
    window.Echo.channel("levaduras-info").listen("LevadurasInfoEvent", function (e) {
      switch (e.tipoAccion) {
        case "agregar":
          _this.accionAgregarTipoCaractLevadura({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "editar":
          _this.accionEditarTipoCaractLevadura({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "eliminar":
          _this.accionEliminarTipoCaractLevadura({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;
      }
    });
    window.Echo.channel("actinomicetos-info").listen("ActinomicetosInfoEvent", function (e) {
      switch (e.tipoAccion) {
        case "agregar":
          _this.accionAgregarTipoCaractActinomiceto({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "editar":
          _this.accionEditarTipoCaractActinomiceto({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;

        case "eliminar":
          _this.accionEliminarTipoCaractActinomiceto({
            info: e.data,
            tipo: e.tipoCaract
          });

          break;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/CepasComponent.vue?vue&type=template&id=30981fb7&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/CepasComponent.vue?vue&type=template&id=30981fb7& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "app-page-title" }, [
        _c("div", { staticClass: "page-title-wrapper" }, [
          _c("div", { staticClass: "page-title-heading" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "\n          Administrar Cepas Microbianas " +
                  _vm._s(_vm.tituloCepa) +
                  "\n          "
              ),
              _c("div", { staticClass: "page-title-subheading opacity-10" }, [
                _c("nav", [
                  _c(
                    "ol",
                    { staticClass: "breadcrumb" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      [
                        _c("li", { staticClass: "breadcrumb-item" }, [
                          _c("a", [_vm._v(_vm._s(_vm.tipoAccion))])
                        ])
                      ]
                    ],
                    2
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "page-title-actions" },
            [
              _vm.numPestaña == 1 && _vm.mostrarBtnVolver
                ? [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-wide mb-2 mr-2 btn-hover-shine btn btn-danger btn-lg",
                        on: { click: _vm.volverTabla }
                      },
                      [_vm._v("Volver")]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _vm.numPestaña == 1
        ? [
            _c("router-view", {
              attrs: {
                tipoG: 0,
                tipo: "cepa",
                detailRowComponent: "my-detail-row-cepas",
                titulo: "CEPAS",
                tituloCepa: _vm.tituloCepa,
                FieldDefs: _vm.fields
              },
              on: { cambiarTipo: _vm.cambiarTipo }
            })
          ]
        : [_vm._m(3)]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title-icon" }, [
      _c("i", { staticClass: "pe-7s-science icon-gradient bg-mean-fruit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", [_c("i", { staticClass: "fa fa-home" })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", [_vm._v("Cepas Microbianas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c(
                "div",
                {
                  staticClass: "alert alert-danger mt-4 text-center",
                  attrs: { role: "alert" }
                },
                [_vm._v("Ya has ingresado desde otra pestaña del navegador!!")]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/CepasComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/cepas/CepasComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CepasComponent_vue_vue_type_template_id_30981fb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CepasComponent.vue?vue&type=template&id=30981fb7& */ "./resources/js/components/cepas/CepasComponent.vue?vue&type=template&id=30981fb7&");
/* harmony import */ var _CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/CepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CepasComponent_vue_vue_type_template_id_30981fb7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CepasComponent_vue_vue_type_template_id_30981fb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/CepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/CepasComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/cepas/CepasComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/CepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/CepasComponent.vue?vue&type=template&id=30981fb7&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/cepas/CepasComponent.vue?vue&type=template&id=30981fb7& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_30981fb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CepasComponent.vue?vue&type=template&id=30981fb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/CepasComponent.vue?vue&type=template&id=30981fb7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_30981fb7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasComponent_vue_vue_type_template_id_30981fb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  name: "__component:checkboxs_publicar",
  sortField: "publicar",
  title: "Publicar",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "__component:acciones_cepas",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/mixins/bloquearPestañas.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/bloquearPestañas.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bloquearPestañasMixin = function bloquearPestañasMixin(tipo) {
  return {
    data: function data() {
      return {
        numPestañas: 0,
        numPestaña: 0
      };
    },
    methods: {
      obtenerValorPestañas: function obtenerValorPestaAs() {
        var value = this.$ls.get(tipo);

        if (value) {
          this.numPestañas = value.numPestañas + 1;
          this.numPestaña = this.numPestañas;
          this.$ls.set(tipo, {
            numPestañas: this.numPestañas,
            numPestañaSaliente: 0
          });
        } else {
          this.numPestañas = 1;
          this.numPestaña = 1;
          this.$ls.set(tipo, {
            numPestañas: 1,
            numPestañaSaliente: 0
          });
        }
      },
      modificarValorPestañas: function modificarValorPestaAs(val, oldVal) {
        this.numPestañas = val.numPestañas;

        if (val.numPestañas < oldVal.numPestañas) {
          if (val.numPestañaSaliente < this.numPestaña) {
            this.numPestaña = this.numPestaña - 1;
          }
        }
      },
      verificar: function verificar() {
        if (this.numPestañas === 1) {
          this.$ls.remove(tipo);
        } else {
          this.$ls.set(tipo, {
            numPestañas: --this.numPestañas,
            numPestañaSaliente: this.numPestaña
          });
        }
      },
      beforeunload: function beforeunload() {
        this.verificar();
      }
    },
    mounted: function mounted() {
      this.obtenerValorPestañas();
      window.addEventListener("beforeunload", this.beforeunload);
    },
    created: function created() {
      this.$ls.on(tipo, this.modificarValorPestañas);
    },
    beforeDestroy: function beforeDestroy() {
      this.verificar();
      this.$ls.off(tipo, this.modificarValorPestañas);
      window.removeEventListener("beforeunload", this.beforeunload);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (bloquearPestañasMixin);

/***/ })

}]);