(function(d){	const l = d['es'] = d['es'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The URL must not be empty.":"La URL no debe estar vacía","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
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
      _c(
        "transition",
        { attrs: { "enter-active-class": "slideInLeft" } },
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