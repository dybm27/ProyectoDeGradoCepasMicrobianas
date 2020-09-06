(function(d){	const l = d['es'] = d['es'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The URL must not be empty.":"La URL no debe estar vacía","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepas-levaduras"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/bloquearPestañas */ "./resources/js/mixins/bloquearPestañas.js");
/* harmony import */ var _tablas_columnas_cepas_levaduras__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablas/columnas-cepas-levaduras */ "./resources/js/components/cepas/levaduras/tablas/columnas-cepas-levaduras.js");
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
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tituloCepa: "",
      tipoAccion: "",
      mostrarBtnVolver: false,
      fields: _tablas_columnas_cepas_levaduras__WEBPACK_IMPORTED_MODULE_1__["default"],
      bloquearBtnVolver: false
    };
  },
  mixins: [Object(_mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_0__["default"])("cepas")],
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("cepas", ["obtenerCepas", "accionCepas"])), vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("info_cepas", ["obtenerTiposCepas", "accionAgregarTipoCepa", "accionEditarTipoCepa", "accionEliminarTipoCepa"])), vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("info_caract", ["obtenerInfoCaractLevaduras", "accionAgregarTipoCaractLevadura", "accionEditarTipoCaractLevadura", "accionEliminarTipoCaractLevadura"])), {}, {
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
        id: this.$route.params.cepaLevaduraId
      });
      this.$events.fire("eliminarMiBloqueoCepa", {
        id: this.$route.params.cepaLevaduraId
      });
      this.$router.push({
        name: "levaduras"
      });
    }
  }),
  created: function created() {
    var _this = this;

    this.tituloCepa = "- Levaduras";
    this.$emit("rutaSider", this.$route.path);
    this.obtenerCepas();
    this.obtenerTiposCepas();
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
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$events.$on("bloquearBtnVolver", function (e) {
      _this2.bloquearBtnVolver = !_this2.bloquearBtnVolver;
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("bloquearBtnVolver");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=template&id=34ebad38&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=template&id=34ebad38& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                        attrs: { disabled: _vm.bloquearBtnVolver },
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
                tipoG: 3,
                tipo: "levadura",
                detailRowComponent: "my-detail-row-h-l-a",
                titulo: "LEVADURAS",
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

/***/ "./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CepasLevadurasComponent_vue_vue_type_template_id_34ebad38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CepasLevadurasComponent.vue?vue&type=template&id=34ebad38& */ "./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=template&id=34ebad38&");
/* harmony import */ var _CepasLevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CepasLevadurasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CepasLevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CepasLevadurasComponent_vue_vue_type_template_id_34ebad38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CepasLevadurasComponent_vue_vue_type_template_id_34ebad38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasLevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CepasLevadurasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasLevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=template&id=34ebad38&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=template&id=34ebad38& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasLevadurasComponent_vue_vue_type_template_id_34ebad38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CepasLevadurasComponent.vue?vue&type=template&id=34ebad38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/CepasLevadurasComponent.vue?vue&type=template&id=34ebad38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasLevadurasComponent_vue_vue_type_template_id_34ebad38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CepasLevadurasComponent_vue_vue_type_template_id_34ebad38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/tablas/columnas-cepas-levaduras.js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/tablas/columnas-cepas-levaduras.js ***!
  \************************************************************************************/
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
  name: "nombre_division",
  sortField: "division_id",
  title: "Division",
  titleClass: "text-center"
}, {
  name: "nombre_clase",
  sortField: "clase_id",
  title: "Clase",
  titleClass: "text-center"
}, {
  name: "nombre_orden",
  sortField: "orden_id",
  title: "Orden",
  titleClass: "text-center"
}, {
  name: "nombre_familia",
  sortField: "familia_id",
  title: "Familia",
  titleClass: "text-center"
}, {
  name: "__component:checkboxs_publicar_levaduras",
  title: "Publicar",
  titleClass: "text-center",
  dataClass: "text-center",
  sortField: "publicar"
}, {
  name: "__component:acciones_cepas_levaduras",
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