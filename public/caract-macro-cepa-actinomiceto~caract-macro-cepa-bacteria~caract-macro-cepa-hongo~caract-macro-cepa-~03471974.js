(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caract-macro-cepa-actinomiceto~caract-macro-cepa-bacteria~caract-macro-cepa-hongo~caract-macro-cepa-~03471974"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
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
  props: ["titulo", "tipo", "url", "tipoForm"],
  data: function data() {
    return {
      nombre: "",
      errors: [],
      bloquearBtnModal: false,
      mensajes: {
        required: "El campo es requerido.",
        unique: "Ya existe un registro con ese nombre."
      }
    };
  },
  validations: {
    nombre: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      unique: function unique(value) {
        if (value == "") return true;
        if (this.validarNombreUnico) return false;
        return true;
      }
    }
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("info_caract", ["accionAgregarTipoCaractLevadura", "accionAgregarTipoCaractActinomiceto", "accionAgregarTipoCaractHongo", "accionAgregarTipoCaractBacteria"])), vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("info_caract", [])), vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("info_caract", [])), vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("info_caract", [])), {}, {
    closed: function closed() {
      this.nombre = "";
      this.errors = [];
    },
    agregarInfo: function agregarInfo() {
      var _this = this;

      this.bloquearBtnModal = true;
      this.$v.nombre.$touch();

      if (!this.$v.$invalid) {
        var parametros = {
          tipo: this.tipo,
          nombre: this.nombre
        };
        axios.post("/".concat(this.url, "/agregar"), parametros).then(function (res) {
          if (res.request.responseURL === "http://127.0.0.1") {
            localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
            window.location.href = "/";
          } else {
            _this.bloquearBtnModal = false;

            _this.guardarInfo(res.data);

            _this.$modal.hide("modal_agregar_info_caract");

            _this.toastr("Agregar Info!!", "".concat(_this.tipo, " agregado/a con exito"), "success");
          }
        })["catch"](function (error) {
          _this.verificarErrorAxios(error.response.status, error.response.data.errors);
        });
      } else {
        this.bloquearBtnModal = false;
        this.toastr("Error!!", "Favor corregir el Error.", "error");
      }
    },
    guardarInfo: function guardarInfo(data) {
      switch (this.tipoForm) {
        case "bacteria":
          this.accionAgregarTipoCaractBacteria({
            info: data,
            tipo: this.tipo
          });
          break;

        case "hongo":
          this.accionAgregarTipoCaractHongo({
            info: data,
            tipo: this.tipo
          });
          break;

        case "levadura":
          this.accionAgregarTipoCaractLevadura({
            info: data,
            tipo: this.tipo
          });
          break;

        case "actinomiceto":
          this.accionAgregarTipoCaractActinomiceto({
            info: data,
            tipo: this.tipo
          });
          break;

        case "cepa":
          break;
      }
    },
    verificarErrorAxios: function verificarErrorAxios(code, errors) {
      if (code === 403) {
        this.$router.push("/sin-acceso");
      } else if (code === 405 || code === 401) {
        window.location.href = "/";
      } else {
        if (code === 422) {
          this.errors = [];
          this.errors = errors;
        }

        this.bloquearBtnModal = false;
        this.toastr("Error!!", "", "error");
      }
    }
  }),
  computed: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("info_caract", ["getInfoCaractMacroBacteriasByNombre", "getInfoCaractMicroBacteriasByNombre", "getInfoMetodoConserBacteriasByNombre", "getInfoCaractMacroHongosByNombre", "getInfoCaractMicroHongosByNombre", "getInfoMetodoConserHongosByNombre", "getInfoCaractMacroLevadurasByNombre", "getInfoMetodoConserLevadurasByNombre", "getInfoCaractMacroActinomicetosByNombre", "getInfoCaractMicroActinomicetosByNombre"])), {}, {
    validarNombreUnico: function validarNombreUnico() {
      switch (this.tipoForm) {
        case "bacteria":
          if (this.tipo == "borde" || this.tipo == "color" || this.tipo == "detalle" || this.tipo == "elevacion" || this.tipo == "forma_macro" || this.tipo == "superficie") {
            if (this.getInfoCaractMacroBacteriasByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          } else if (this.tipo == "forma_micro") {
            if (this.getInfoCaractMicroBacteriasByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          } else {
            if (this.getInfoMetodoConserBacteriasByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          }

          return false;
          break;

        case "hongo":
          if (this.tipo == "color" || this.tipo == "textura") {
            if (this.getInfoCaractMacroHongosByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          } else if (this.tipo == "conidioforo" || this.tipo == "esporaA" || this.tipo == "esporaS") {
            if (this.getInfoCaractMicroHongosByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          } else {
            if (this.getInfoMetodoConserHongosByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          }

          return false;
          break;

        case "levadura":
          if (this.tipo == "color" || this.tipo == "textura") {
            if (this.getInfoCaractMacroLevadurasByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          } else {
            if (this.getInfoMetodoConserLevadurasByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          }

          break;

        case "actinomiceto":
          if (this.tipo == "borde" || this.tipo == "color" || this.tipo == "textura" || this.tipo == "pigmento" || this.tipo == "forma_macro" || this.tipo == "superficie") {
            if (this.getInfoCaractMacroActinomicetosByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          } else if (this.tipo == "forma_micro" || this.tipo == "conidioforo" || this.tipo == "tincion" || this.tipo == "micelio") {
            if (this.getInfoCaractMicroActinomicetosByNombre({
              nombre: this.nombre,
              tipo: this.tipo
            })) {
              return true;
            }
          }

          return false;
          break;
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=template&id=eecf83d6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=template&id=eecf83d6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "modal",
        {
          attrs: {
            name: "modal_agregar_info_caract",
            classes: "my_modal",
            width: 450,
            height: 450
          },
          on: { closed: _vm.closed }
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
                [_vm._v(_vm._s(_vm.titulo))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_agregar_info_caract")
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
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.nombre.$model,
                      expression: "$v.nombre.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  class: [
                    "form-control",
                    _vm.errors.nombre || _vm.$v.nombre.$error
                      ? "error-input-select"
                      : ""
                  ],
                  attrs: {
                    name: "nombre",
                    id: "nombre",
                    placeholder: "...",
                    type: "text"
                  },
                  domProps: { value: _vm.$v.nombre.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.nombre,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.nombre
                  ? _c("em", { staticClass: "text-error-input" }, [
                      _vm._v(_vm._s(_vm.errors.nombre[0]))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.$v.nombre.$error && !_vm.$v.nombre.required
                  ? _c("em", { staticClass: "text-error-input" }, [
                      _vm._v(_vm._s(_vm.mensajes.required))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.$v.nombre.$error && !_vm.$v.nombre.unique
                  ? _c("em", { staticClass: "text-error-input" }, [
                      _vm._v(_vm._s(_vm.mensajes.unique))
                    ])
                  : _vm._e()
              ])
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
                      return _vm.$modal.hide("modal_agregar_info_caract")
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
                  on: { click: _vm.agregarInfo }
                },
                [_vm._v("Agregar")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalAgregarInfoCaractComponent_vue_vue_type_template_id_eecf83d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalAgregarInfoCaractComponent.vue?vue&type=template&id=eecf83d6& */ "./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=template&id=eecf83d6&");
/* harmony import */ var _ModalAgregarInfoCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalAgregarInfoCaractComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalAgregarInfoCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalAgregarInfoCaractComponent_vue_vue_type_template_id_eecf83d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalAgregarInfoCaractComponent_vue_vue_type_template_id_eecf83d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarInfoCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalAgregarInfoCaractComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarInfoCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=template&id=eecf83d6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=template&id=eecf83d6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarInfoCaractComponent_vue_vue_type_template_id_eecf83d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalAgregarInfoCaractComponent.vue?vue&type=template&id=eecf83d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue?vue&type=template&id=eecf83d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarInfoCaractComponent_vue_vue_type_template_id_eecf83d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarInfoCaractComponent_vue_vue_type_template_id_eecf83d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);