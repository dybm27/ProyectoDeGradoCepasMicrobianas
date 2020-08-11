(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["publicidad"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/bloquearPestañas */ "./resources/js/mixins/bloquearPestañas.js");
/* harmony import */ var _publicidad_NavComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publicidad/NavComponent.vue */ "./resources/js/components/sitio-web/publicidad/NavComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Nav: _publicidad_NavComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tipo: "",
      tipo2: ""
    };
  },
  mixins: [Object(_mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_1__["default"])("publicidad")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("publicidad", ["obtenerPublicidad", "accionNoticia", "accionActividad", "accionNovedad"]), {
    ruta: function ruta(_ruta) {
      if (_ruta.includes("novedades")) {
        this.tipo = "Tabla Novedades";
      } else if (_ruta.includes("actividades")) {
        this.tipo = "Tabla Actividades";
      } else {
        this.tipo = "Tabla Noticias";
      }
    },
    cambiarTipo: function cambiarTipo(tipo) {
      if (tipo === "agregar") {
        this.tipo2 = "Agregar";
      } else if (tipo === "editar") {
        this.tipo2 = "Editar";
      } else {
        this.tipo2 = "";
      }
    }
    /*
    eliminarImagenesStorage() {
    axios
      .get("/editor/upload")
      .then((res) => {
        console.log(res.data);
        if (res.request.responseURL === process.env.MIX_LOGIN) {
          localStorage.setItem(
            "mensajeLogin",
            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
          );
          window.location.href = "/";
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          this.$router.push("/sin-acceso");
        }
      });
    },*/

  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState(["auth"])),
  created: function created() {
    var _this = this;

    this.$emit("rutaSider", window.location.pathname);
    window.Echo.channel("novedad").listen("NovedadEvent", function (e) {
      _this.accionNovedad({
        tipo: e.tipo,
        data: e.novedad
      });

      _this.$events.fire(e.novedad.id + "-actualizarPublicarNovedad", e.novedad.publicar);

      _this.$events.fire("actualizartablaNovedad");
    });
    window.Echo.channel("actividad").listen("ActividadEvent", function (e) {
      _this.accionActividad({
        tipo: e.tipo,
        data: e.actividad
      });

      _this.$events.fire(e.actividad.id + "-actualizarPublicarActividad", e.actividad.publicar);

      _this.$events.fire("actualizartablaActividad");
    });
    window.Echo.channel("noticia").listen("NoticiaEvent", function (e) {
      _this.accionNoticia({
        tipo: e.tipo,
        data: e.noticia
      });

      _this.$events.fire(e.noticia.id + "-actualizarPublicarNoticia", e.noticia.publicar);

      _this.$events.fire("actualizartablaNoticia");
    });
    this.obtenerPublicidad(); //this.eliminarImagenesStorage();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
      mostrarNoticia: false,
      mostrarActividad: false,
      mostrarNovedad: false
    };
  },
  methods: {
    ruta: function ruta(_ruta) {
      this.$emit("rutaHijo", _ruta);
    },
    cambiarTipo: function cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getPermisoByNombres"]), {
    verificarNav: function verificarNav() {
      var num = 0;

      if (this.getPermisoByNombres(["agregar-noticia", "editar-noticia", "eliminar-noticia"])) {
        this.mostrarNoticia = true;
        num++;
      } else {
        this.mostrarNoticia = false;
      }

      if (this.getPermisoByNombres(["agregar-actividad", "editar-actividad", "eliminar-actividad"])) {
        this.mostrarActividad = true;
        num++;
      } else {
        this.mostrarActividad = false;
      }

      if (this.getPermisoByNombres(["agregar-novedad", "editar-novedad", "eliminar-novedad"])) {
        this.mostrarNovedad = true;
        num++;
      } else {
        this.mostrarNovedad = false;
      }

      return num;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=template&id=43308512&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=template&id=43308512& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
              _vm._v("\n          Publicidad\n          "),
              _c("div", { staticClass: "page-title-subheading opacity-10" }, [
                _c("nav", [
                  _c(
                    "ol",
                    { staticClass: "breadcrumb" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("li", { staticClass: "breadcrumb-item" }, [
                        _c("a", [_vm._v(_vm._s(_vm.tipo))])
                      ]),
                      _vm._v(" "),
                      _vm.tipo2
                        ? [
                            _c("li", { staticClass: "breadcrumb-item" }, [
                              _c("a", [_vm._v(_vm._s(_vm.tipo2))])
                            ])
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page-title-actions" })
        ])
      ]),
      _vm._v(" "),
      _vm.numPestaña == 1
        ? [
            _c("Nav", {
              on: { rutaHijo: _vm.ruta, cambiarTipo: _vm.cambiarTipo }
            })
          ]
        : [_vm._m(2)]
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
      _c("i", { staticClass: "pe-7s-news-paper icon-gradient bg-mean-fruit" })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=template&id=87615aba&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=template&id=87615aba& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _vm.verificarNav > 1
      ? _c(
          "ul",
          {
            staticClass:
              "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
          },
          [
            _vm.mostrarNoticia
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "noticias" },
                          "active-class": "active",
                          exact: ""
                        }
                      },
                      [_c("span", [_vm._v("Noticias")])]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.mostrarActividad
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "actividades" },
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("Actividades")])]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.mostrarNovedad
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "novedades" },
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("Novedades")])]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tabs-animation" },
      [
        _c("router-view", {
          on: { rutaHijo: _vm.ruta, cambiarTipo: _vm.cambiarTipo }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/PublicidadComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/sitio-web/PublicidadComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PublicidadComponent_vue_vue_type_template_id_43308512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicidadComponent.vue?vue&type=template&id=43308512& */ "./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=template&id=43308512&");
/* harmony import */ var _PublicidadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicidadComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PublicidadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicidadComponent_vue_vue_type_template_id_43308512___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PublicidadComponent_vue_vue_type_template_id_43308512___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/PublicidadComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicidadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicidadComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicidadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=template&id=43308512&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=template&id=43308512& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicidadComponent_vue_vue_type_template_id_43308512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicidadComponent.vue?vue&type=template&id=43308512& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/PublicidadComponent.vue?vue&type=template&id=43308512&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicidadComponent_vue_vue_type_template_id_43308512___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicidadComponent_vue_vue_type_template_id_43308512___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/NavComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/NavComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavComponent_vue_vue_type_template_id_87615aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=template&id=87615aba& */ "./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=template&id=87615aba&");
/* harmony import */ var _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavComponent_vue_vue_type_template_id_87615aba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavComponent_vue_vue_type_template_id_87615aba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/NavComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=template&id=87615aba&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=template&id=87615aba& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_87615aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=template&id=87615aba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/NavComponent.vue?vue&type=template&id=87615aba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_87615aba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_87615aba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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