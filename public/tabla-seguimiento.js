(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabla-seguimiento"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _columnas_seguimiento__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnas-seguimiento */ "./resources/js/components/gestionar_usuarios/seguimiento/columnas-seguimiento.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      fields: _columnas_seguimiento__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "nombre_responsable",
        direction: "asc"
      }],
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_2__["default"]],
  methods: {
    actualizarTabla: function actualizarTabla() {
      if (this.$refs.tabla) {
        this.$refs.tabla.refreshDatos();
      }
    }
    /*
    eliminarDatos() {
    //let fecha = new Date();
    //fecha.setDate(fecha.getDate() - 30);
    this.bloquearBtnModal = true;
    axios
      .delete(`/seguimiento/eliminar-datos`)
      .then((res) => {
        this.bloquearBtnModal = false;
        this.toastr(
          "Eliminar Datos!!",
          "Datos eliminados con exito",
          "success"
        );
        this.actualizarTabla();
        this.$modal.hide("modal_eliminar_datos");
      })
      .catch((error) => {
        if (error.response.status === 405) {
          window.location.href = "/";
        }
        this.bloquearBtnModal = false;
        this.toastr("Error!!!", "", "error");
      });
    },*/

  },
  created: function created() {
    this.$emit("rutaHijo", window.location.pathname);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=template&id=55b72203&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=template&id=55b72203& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "tabs-animation" },
    [
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("MyVuetable", {
              ref: "tabla",
              attrs: {
                "api-url": "/info-panel/seguimientos",
                fields: _vm.fields,
                "sort-order": _vm.sortOrder,
                nameGet: "seguimientos"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_datos",
            classes: "my_modal",
            width: 400,
            height: 300
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
                [_vm._v("Eliminar Datos")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_datos")
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
              _c("p", [_vm._v("Esta segura/o de eliminar datos de la tabla?.")])
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
                      return _vm.$modal.hide("modal_eliminar_datos")
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
                  attrs: { type: "button", disabled: _vm.bloquearBtnModal }
                },
                [_vm._v("Eliminar")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header-tab card-header" }, [
      _c(
        "div",
        {
          staticClass:
            "card-header-title font-size-lg text-capitalize font-weight-normal"
        },
        [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
          }),
          _vm._v("\n        Tabla Seguimientos\n      ")
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "btn-actions-pane-right actions-icon-btn" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaComponent_vue_vue_type_template_id_55b72203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=template&id=55b72203& */ "./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=template&id=55b72203&");
/* harmony import */ var _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaComponent_vue_vue_type_template_id_55b72203___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaComponent_vue_vue_type_template_id_55b72203___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=template&id=55b72203&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=template&id=55b72203& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_55b72203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=template&id=55b72203& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gestionar_usuarios/seguimiento/TablaComponent.vue?vue&type=template&id=55b72203&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_55b72203___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_55b72203___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/gestionar_usuarios/seguimiento/columnas-seguimiento.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/gestionar_usuarios/seguimiento/columnas-seguimiento.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre_responsable",
  sortField: "nombre_responsable",
  title: "Nombre Responsable",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "email_responsable",
  sortField: "email_responsable",
  title: "Email Responsable",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "rol",
  sortField: "rol",
  title: "Tipo de Usuario",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "accion",
  sortField: "accion",
  title: "Acción",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "created_at",
  sortField: "created_at",
  title: "Fecha",
  dataClass: "text-center",
  titleClass: "text-center",
  callback: "formatDate"
}]);

/***/ })

}]);