(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepas-todas-container"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tipoG", "tipo", "detailRowComponent", "titulo", "tituloCepa", "FieldDefs"],
  data: function data() {
    return {
      bloqueos: [],
      miBloqueo: null,
      cantUser: 0,
      cantRecibirBtns: 0
    };
  },
  methods: {
    cambiarTipo: function cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    },
    bloquearBtns: function bloquearBtns(e) {
      var data = this.bloqueos.find(function (data) {
        return data.id === e.id;
      });

      if (!data) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id
        });
        this.$events.fire(e.id + "-bloquearBtnsCepa");
        this.$events.fire(e.id + "-bloquearCheckCepa");
      }
    },
    desbloquearBtns: function desbloquearBtns(e) {
      this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
        return data.id === e.id;
      }), 1);
      this.$events.fire(e.id + "-desbloquearBtnsCepa");
      this.$events.fire(e.id + "-desbloquearCheckCepa");
    },
    // guardar mis bloqueos
    agregarMiBloqueo: function agregarMiBloqueo(e) {
      this.miBloqueo = e;
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
        this.desbloquearBtns(data);
      }
    },
    // verificar bloqueos existentes
    verificarBloqueos: function verificarBloqueos() {
      for (var index = 0; index < this.bloqueos.length; index++) {
        this.$events.fire(this.bloqueos[index].id + "-bloquearBtnsCepa");
        this.$events.fire(this.bloqueos[index].id + "-bloquearCheckCepa");
      }
    },
    enviarBloqueos: function enviarBloqueos() {
      window.Echo["private"]("recibirBtnsCepa").whisper("recibirBtnsCepa", {
        miBloqueo: this.miBloqueo
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.Echo.join("cepas").here(function (data) {
      _this.cantUser = data.length;
    }).joining(function (data) {
      _this.cantUser++;

      _this.enviarBloqueos();
    }).leaving(function (data) {
      _this.cantUser--;

      _this.borrarBloqueos(data.user);
    });
    window.Echo["private"]("bloquearBtnsCepa").listenForWhisper("bloquearBtnsCepa", function (e) {
      _this.bloquearBtns(e);
    });
    window.Echo["private"]("desbloquearBtnsCepa").listenForWhisper("desbloquearBtnsCepa", function (e) {
      if (e.id != 0) {
        _this.desbloquearBtns(e);
      }
    });
  },
  created: function created() {
    var _this2 = this;

    window.Echo["private"]("recibirBtnsCepa").listenForWhisper("recibirBtnsCepa", function (e) {
      _this2.cantRecibirBtns++;

      if (e.miBloqueo) {
        _this2.bloquearBtns(e.miBloqueo);
      }
    });
    this.$events.$on("agregarMiBloqueoCepa", function (e) {
      return _this2.agregarMiBloqueo(e);
    });
    this.$events.$on("eliminarMiBloqueoCepa", function (e) {
      return _this2.eliminarMiBloqueo(e);
    });
    this.$events.$on("verificarBloqueos-" + this.tipo + "s", function (e) {
      return _this2.verificarBloqueos();
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("agregarMiBloqueoCepa");
    this.$events.$off("eliminarMiBloqueoCepa");
    this.$events.$off("verificarBloqueos-" + this.tipo + "s");
  },
  beforeDestroy: function beforeDestroy() {
    window.Echo.leave("cepas");
    window.Echo.leave("recibirBtnsCepa");
    window.Echo.leave("desbloquearBtnsCepa");
    window.Echo.leave("bloquearBtnsCepa");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=template&id=d463a166&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=template&id=d463a166& ***!
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
  return _c(
    "div",
    { staticClass: "tabs-animation" },
    [
      _c("router-view", {
        attrs: {
          tipoG: _vm.tipoG,
          bloqueos: _vm.bloqueos,
          miBloqueo: _vm.miBloqueo,
          cantUser: _vm.cantUser,
          cantRecibirBtns: _vm.cantRecibirBtns,
          tipo: _vm.tipo,
          detailRowComponent: _vm.detailRowComponent,
          titulo: _vm.titulo,
          tituloCepa: _vm.tituloCepa,
          FieldDefs: _vm.FieldDefs
        },
        on: { cambiarTipo: _vm.cambiarTipo }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/ContainerRouterComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerRouterComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerRouterComponent_vue_vue_type_template_id_d463a166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerRouterComponent.vue?vue&type=template&id=d463a166& */ "./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=template&id=d463a166&");
/* harmony import */ var _ContainerRouterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerRouterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerRouterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerRouterComponent_vue_vue_type_template_id_d463a166___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerRouterComponent_vue_vue_type_template_id_d463a166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/ContainerRouterComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerRouterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerRouterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerRouterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=template&id=d463a166&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=template&id=d463a166& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerRouterComponent_vue_vue_type_template_id_d463a166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerRouterComponent.vue?vue&type=template&id=d463a166& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerRouterComponent.vue?vue&type=template&id=d463a166&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerRouterComponent_vue_vue_type_template_id_d463a166___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerRouterComponent_vue_vue_type_template_id_d463a166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);