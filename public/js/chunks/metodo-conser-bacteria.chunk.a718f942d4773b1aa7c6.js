(function(d){	const l = d['es'] = d['es'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The URL must not be empty.":"La URL no debe estar vacía","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metodo-conser-bacteria"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! croppie */ "./node_modules/croppie/croppie.js");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
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
  props: ["id", "imagen", "mostrarBtnCroppie", "zoom", "editar", "enableZoom", "boundaryHeigth", "viewportWidth"],
  data: function data() {
    return {
      croppie: null,
      btnAprobar: true
    };
  },
  mounted: function mounted() {
    this.crearCroppie();
  },
  methods: {
    crearCroppie: function crearCroppie() {
      var el = document.getElementById(this.id);
      this.croppie = new croppie__WEBPACK_IMPORTED_MODULE_0___default.a(el, {
        viewport: {
          width: this.viewportWidth,
          height: 200
        },
        boundary: {
          height: this.boundaryHeigth
        },
        enableZoom: this.enableZoom
      });
      this.croppie.bind({
        url: this.imagen,
        zoom: this.zoom
      });
    },
    resultado: function resultado() {
      var _this = this;

      this.croppie.result().then(function (res) {
        _this.btnAprobar = false;

        _this.$emit("cambiarValorImagen", res);
      });
    },
    cancelar: function cancelar() {
      this.btnAprobar = true;
      this.$emit("cambiarValorImagen", "");
    }
  },
  watch: {
    imagen: function imagen() {
      if (this.imagen) {
        this.btnAprobar = true;
        this.croppie.destroy();
        this.crearCroppie();
      }
    }
  },
  computed: {
    mostrarMensaje: function mostrarMensaje() {
      if (this.btnAprobar && !this.editar) {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker/locale/es */ "./node_modules/vue2-datepicker/locale/es.js");
/* harmony import */ var vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../mixins/obtenerImagenCroopieCepas */ "./resources/js/mixins/obtenerImagenCroopieCepas.js");
/* harmony import */ var _CroppieComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../CroppieComponent */ "./resources/js/components/CroppieComponent.vue");
/* harmony import */ var _ModalAgregarInfoCaractComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ModalAgregarInfoCaractComponent.vue */ "./resources/js/components/cepas/ModalAgregarInfoCaractComponent.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["idMetodo"],
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    Croppie: _CroppieComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalAgregarInfo: _ModalAgregarInfoCaractComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      lang: vue2_datepicker_locale_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      info: "",
      parametros: {
        cepaId: "",
        tipo_metodo: null,
        tipo_agar: null,
        fecha: "",
        numero_replicas: "",
        recuento_microgota: "",
        imagen: ""
      },
      tituloModal: "",
      tipoModal: "",
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      bloquearBtn: false,
      bloquearBtnModal: false,
      mensajes: {
        required: "El campo es requerido",
        numeric: "El campo debe ser un numero.",
        between: "Debe estar en el rango de "
      }
    };
  },
  validations: function validations() {
    if (this.mostrarAgar) {
      return {
        parametros: {
          tipo_metodo: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          },
          tipo_agar: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          },
          fecha: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          },
          numero_replicas: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"],
            numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["numeric"],
            between: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["between"])(1, 10000)
          },
          recuento_microgota: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          },
          imagen: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          }
        }
      };
    } else {
      return {
        parametros: {
          tipo_metodo: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          },
          fecha: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          },
          numero_replicas: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"],
            numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["numeric"],
            between: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["between"])(1, 10000)
          },
          recuento_microgota: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          },
          imagen: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
          }
        }
      };
    }
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_obtenerImagenCroopieCepas__WEBPACK_IMPORTED_MODULE_4__["default"]],
  methods: _objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_caract", ["accionAgregarTipoCaractBacteria"])), {}, {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;
      this.$v.parametros.$touch();

      if (!this.$v.$invalid) {
        this.parametros.tipo_agar = this.parametros.tipo_metodo === 4 ? this.parametros.tipo_agar : 1;
        this.parametros.fecha = this.parametros.fecha === null ? "" : this.parametros.fecha;

        if (this.tituloForm === "Agregar Método") {
          axios.post("/cepas/bacteria/metodo-conser", this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;

              _this.accionAgregarCaract({
                tipo: "metodo",
                data: res.data
              });

              _this.toastr("Agregar Método", "Método agregado con exito!!", "success");

              _this.$emit("cambiarVariable");
            }
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        } else {
          axios.put("/cepas/bacteria/metodo-conser/".concat(this.info.id), this.parametros).then(function (res) {
            _this.bloquearBtn = false;

            _this.accionEditarCaract({
              tipo: "metodo",
              data: res.data
            });

            _this.toastr("Editar Método", "Método editado con exito!!", "success");

            _this.$emit("cambiarVariable");
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        }
      } else {
        this.bloquearBtn = false;
        this.toastr("Error!!", "Favor llenar correctamente los campos", "error");
      }
    },
    llenarInfo: function llenarInfo() {
      this.parametros.tipo_metodo = this.info.tipo_id;

      if (this.info.tipo_agar_id > 1) {
        this.parametros.tipo_agar = this.info.tipo_agar_id;
      }

      this.parametros.fecha = this.info.fecha;
      this.parametros.numero_replicas = this.info.numero_replicas;
      this.parametros.recuento_microgota = this.info.recuento_microgota;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    showModal: function showModal(tipo) {
      this.tipoModal = tipo;

      if (tipo === "tipo_metodo") {
        this.tituloModal = "Agregar Nueva Tipo de Método";
      } else {
        this.tituloModal = "Agregar Nuevo Tipo de Agar";
      }

      this.$modal.show("modal_agregar_info_caract");
    },
    verificarSelects: function verificarSelects() {
      if (this.obtenerMetodos.length > 0) {
        this.parametros.tipo_metodo = this.obtenerMetodos[0].id;
      } else {
        this.parametros.tipo_metodo = null;
      }

      if (this.obtenerAgars.length > 0) {
        this.parametros.tipo_agar = this.obtenerAgars[0].id;
      } else {
        this.parametros.tipo_agar = null;
      }
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getPermisoByNombre"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getMetodoConserById"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoMetodoConserBacterias"])), {}, {
    mostrarAgar: function mostrarAgar() {
      if (this.parametros.tipo_metodo === 4) {
        return true;
      } else {
        return false;
      }
    },
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Método") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm: function validarTipoForm() {
      if (this.tituloForm === "Agregar Método") {
        return true;
      } else {
        return false;
      }
    },
    titulo: function titulo() {
      return this.tituloForm;
    },
    nomBtnComputed: function nomBtnComputed() {
      return this.nomBtn;
    },
    obtenerMetodos: function obtenerMetodos() {
      return this.getInfoMetodoConserBacterias.tipo_metodo;
    },
    obtenerAgars: function obtenerAgars() {
      return this.getInfoMetodoConserBacterias.tipo_agar;
    }
  }),
  created: function created() {
    this.verificarSelects();

    if (this.idMetodo === 0) {
      this.tituloForm = "Agregar Método";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getMetodoConserById(this.idMetodo);
      this.llenarInfo();
      this.tituloForm = "Editar Método";
      this.nomBtn = "Editar";
    }

    var array = [];

    if (this.$route.params.cepaBacteriaSlug) {
      array = this.$route.params.cepaBacteriaSlug.split("-");
      this.parametros.cepaId = parseInt(array[array.length - 1]);
    } else {
      array = this.$route.params.cepaSlug.split("-");
      this.parametros.cepaId = parseInt(array[array.length - 1]);
    }
  },
  watch: {
    obtenerMetodos: function obtenerMetodos() {
      if (this.obtenerMetodos.length > 0) {
        this.parametros.tipo_metodo = this.obtenerMetodos[0].id;
      } else {
        this.parametros.tipo_metodo = null;
      }
    },
    obtenerAgars: function obtenerAgars() {
      if (this.obtenerAgars.length > 0) {
        this.parametros.tipo_agar = this.obtenerAgars[0].id;
      } else {
        this.parametros.tipo_agar = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_caract_FormMetodoConserComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms-caract/FormMetodoConserComponent.vue */ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue");
/* harmony import */ var _tablas_TablaMetodoConserBacteriasComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tablas/TablaMetodoConserBacteriasComponent.vue */ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormMetodoConser: _forms_caract_FormMetodoConserComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TablaMetodo: _tablas_TablaMetodoConserBacteriasComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
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
    cambiarVariableFormulario: function cambiarVariableFormulario() {
      this.formulario = !this.formulario;
    }
  },
  created: function created() {
    var _this = this;

    this.$events.$on("abrirFormularioMetodoBacteria", function (e) {
      return _this.abrirFormulario(e);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metodo_conser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metodo-conser */ "./resources/js/components/cepas/bacterias/tablas/metodo-conser.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      url: "/info-panel/cepa/bacteria/metodos-conser/",
      idMetodoEliminar: "",
      fields: _metodo_conser__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "tipo_id",
        direction: "asc"
      }],
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapActions("cepa", ["accionEliminarCaract"])), {}, {
    cambiarVariable: function cambiarVariable() {
      this.refrescarTabla = false;
    },
    eliminarMetodo: function eliminarMetodo() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/cepas/bacteria/metodo-conser/".concat(this.idMetodoEliminar)).then(function (res) {
        _this.bloquearBtnModal = false;

        _this.accionEliminarCaract({
          tipo: "metodo",
          data: res.data
        });

        _this.actualizarTabla();

        _this.toastr("Eliminar Metodo", "Metodo eliminada con exito!!", "success");

        _this.$modal.hide("my_modal_eliminar_metodo");
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this.$router.push("/sin-acceso");
        } else if (error.response.status === 405 || error.response.status === 401) {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.toastr("Error!!", "", "error");
        }
      });
    },
    beforeOpen: function beforeOpen(data) {
      this.idMetodoEliminar = data.params.id;
    },
    actualizarTabla: function actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    }
  }),
  computed: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapGetters("cepa", ["getMetodoConser"])), {}, {
    mostrarTabla: function mostrarTabla() {
      if (this.getMetodoConser != "" && this.getMetodoConser != null) {
        return true;
      }

      return false;
    }
  }),
  created: function created() {
    var array = [];

    if (this.$route.params.cepaBacteriaSlug) {
      array = this.$route.params.cepaBacteriaSlug.split("-");
      this.url += parseInt(array[array.length - 1]);
    } else {
      array = this.$route.params.cepaSlug.split("-");
      this.url += parseInt(array[array.length - 1]);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c("div", { attrs: { id: _vm.id } }),
      _vm._v(" "),
      _vm.mostrarBtnCroppie
        ? [
            _vm.btnAprobar
              ? [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { dusk: "btn-croppie" },
                      on: { click: _vm.resultado }
                    },
                    [_vm._v("Aprobar Imagen")]
                  ),
                  _vm._v(" "),
                  _vm.mostrarMensaje
                    ? _c("em", { staticClass: "text-danger small" }, [
                        _vm._v("Debe Aprobar la imagen")
                      ])
                    : _vm._e()
                ]
              : [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger float-right",
                      on: { click: _vm.cancelar }
                    },
                    [_vm._v("Cancelar")]
                  )
                ]
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "container mt-3 ml-2 mr-2" }, [
        _c("div", { staticClass: "row justify-content-md-center" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "main-card mb-3 card" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.evento($event)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(_vm.titulo))
                      ]),
                      _vm._v(" "),
                      _vm.errors != ""
                        ? [
                            _c(
                              "div",
                              { staticClass: "alert alert-danger" },
                              _vm._l(_vm.errors, function(item, index) {
                                return _c("p", { key: index }, [
                                  _vm._v(_vm._s(item[0]))
                                ])
                              }),
                              0
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getInfoMetodoConserBacterias
                        ? _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c("label", { attrs: { for: "forma" } }, [
                                _vm._v("Método de Conservación")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group mb-3" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value:
                                          _vm.$v.parametros.tipo_metodo.$model,
                                        expression:
                                          "$v.parametros.tipo_metodo.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.$v.parametros.tipo_metodo.$error
                                        ? "error-input-select"
                                        : ""
                                    ],
                                    attrs: { name: "select", id: "forma" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.parametros.tipo_metodo,
                                          "$model",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.obtenerMetodos, function(
                                    m,
                                    index
                                  ) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: m.id } },
                                      [_vm._v(_vm._s(m.nombre))]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _vm.getPermisoByNombre("agregar-otra")
                                  ? _c(
                                      "div",
                                      { staticClass: "input-group-append" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.showModal(
                                                  "tipo_metodo"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-plus"
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _vm.$v.parametros.tipo_metodo.$error &&
                              !_vm.$v.parametros.tipo_metodo.required
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-select" },
                                    [_vm._v(_vm._s(_vm.mensajes.required))]
                                  )
                                : _vm._e()
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.mostrarAgar
                        ? _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c("label", { attrs: { for: "tipo_agar" } }, [
                                _vm._v("Tipo Agar")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group mb-3" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value:
                                          _vm.$v.parametros.tipo_agar.$model,
                                        expression:
                                          "$v.parametros.tipo_agar.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.$v.parametros.tipo_agar.$error
                                        ? "error-input-select"
                                        : ""
                                    ],
                                    attrs: { name: "select", id: "tipo_agar" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.parametros.tipo_agar,
                                          "$model",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.obtenerAgars, function(f, index) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: f.id } },
                                      [_vm._v(_vm._s(f.nombre))]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _vm.getPermisoByNombre("agregar-otra")
                                  ? _c(
                                      "div",
                                      { staticClass: "input-group-append" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.showModal(
                                                  "tipo_agar"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-plus"
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _vm.$v.parametros.tipo_agar.$error &&
                              !_vm.$v.parametros.tipo_agar.required
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-select" },
                                    [_vm._v(_vm._s(_vm.mensajes.required))]
                                  )
                                : _vm._e()
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "container" }, [
                            _vm._m(0),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _c("date-picker", {
                                  class: _vm.$v.parametros.fecha.$error
                                    ? "error-input-select"
                                    : "",
                                  attrs: {
                                    lang: _vm.lang,
                                    type: "datetime",
                                    "value-type": "format",
                                    placeholder: "..."
                                  },
                                  model: {
                                    value: _vm.$v.parametros.fecha.$model,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.$v.parametros.fecha,
                                        "$model",
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "$v.parametros.fecha.$model"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.$v.parametros.fecha.$error &&
                                !_vm.$v.parametros.fecha.required
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-input" },
                                      [_vm._v(_vm._s(_vm.mensajes.required))]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "numero_replicas" } },
                                [_vm._v("Número de Réplicas")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value:
                                      _vm.$v.parametros.numero_replicas.$model,
                                    expression:
                                      "$v.parametros.numero_replicas.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                class: [
                                  "form-control",
                                  _vm.$v.parametros.numero_replicas.$error
                                    ? "error-input-select"
                                    : ""
                                ],
                                attrs: {
                                  name: "numero_replicas",
                                  id: "numero_replicas",
                                  placeholder: "...",
                                  type: "text"
                                },
                                domProps: {
                                  value:
                                    _vm.$v.parametros.numero_replicas.$model
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.parametros.numero_replicas,
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
                              _vm.$v.parametros.numero_replicas.$error &&
                              !_vm.$v.parametros.numero_replicas.required
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-input" },
                                    [_vm._v(_vm._s(_vm.mensajes.required))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$v.parametros.numero_replicas.$error &&
                              !_vm.$v.parametros.numero_replicas.numeric
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-input" },
                                    [_vm._v(_vm._s(_vm.mensajes.numeric))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$v.parametros.numero_replicas.$error &&
                              !_vm.$v.parametros.numero_replicas.between
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-input" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.mensajes.between +
                                            _vm.$v.parametros.numero_replicas
                                              .$params.between.min +
                                            " a " +
                                            _vm.$v.parametros.numero_replicas
                                              .$params.between.max
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "imagen" } }, [
                            _vm._v("Imagen")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "inputImagen",
                            class: [
                              "form-control-file",
                              _vm.$v.parametros.imagen.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "imagen",
                              id: "imagen",
                              type: "file",
                              accept: "image/jpeg, image/png"
                            },
                            on: { change: _vm.obtenerImagen }
                          }),
                          _vm._v(" "),
                          _vm.imagenError
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.imagenError))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$v.parametros.imagen.$error &&
                          !_vm.$v.parametros.imagen.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c(
                            "label",
                            { attrs: { for: "recuento_microgota" } },
                            [_vm._v("Recuento Microgota")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.parametros.recuento_microgota.$model,
                                expression:
                                  "$v.parametros.recuento_microgota.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.recuento_microgota.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "recuento_microgota",
                              id: "recuento_microgota",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.recuento_microgota.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.recuento_microgota,
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
                          _vm.$v.parametros.recuento_microgota.$error &&
                          !_vm.$v.parametros.recuento_microgota.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "mb-2 mr-2 btn btn-block",
                          class: _vm.btnClase,
                          attrs: { disabled: _vm.bloquearBtn }
                        },
                        [_vm._v(_vm._s(_vm.nomBtnComputed))]
                      )
                    ],
                    2
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "main-card mb-3 card" }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("h5", { staticClass: "card-title" }, [_vm._v("Imagen")]),
                  _vm._v(" "),
                  _vm.mostraImagen
                    ? [
                        _vm.validarCroppie
                          ? [
                              _c("Croppie", {
                                attrs: {
                                  id: "croppie",
                                  imagen: _vm.mostraImagen,
                                  mostrarBtnCroppie: _vm.mostrarBtnCroppie,
                                  enableZoom: false,
                                  zoom: 0,
                                  editar: true,
                                  boundaryHeigth: 300,
                                  viewportWidth: 200
                                },
                                on: {
                                  cambiarValorImagen: _vm.cambiarValorImagen
                                }
                              })
                            ]
                          : [
                              _c("Croppie", {
                                attrs: {
                                  id: "croppie",
                                  imagen: _vm.mostraImagen,
                                  mostrarBtnCroppie: _vm.mostrarBtnCroppie,
                                  zoom: 1,
                                  enableZoom: true,
                                  editar: false,
                                  boundaryHeigth: 300,
                                  viewportWidth: 200
                                },
                                on: {
                                  cambiarValorImagen: _vm.cambiarValorImagen
                                }
                              })
                            ]
                      ]
                    : [_vm._m(1)]
                ],
                2
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ModalAgregarInfo", {
        attrs: {
          url: "info-caract-bacterias",
          tipo: _vm.tipoModal,
          titulo: _vm.tituloModal,
          tipoForm: "bacteria"
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("label", { attrs: { for: "fecha" } }, [_vm._v("Fecha")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [_vm._v("SIN IMAGEN")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "tabs-animation" }, [
      _c("div", { staticClass: "mb-3 card" }, [
        _c("div", { staticClass: "card-header-tab card-header" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-actions-pane-right text-capitalize" },
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
                        on: {
                          click: function($event) {
                            return _vm.abrirFormulario(0)
                          }
                        }
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
          [
            !_vm.formulario
              ? [_c("TablaMetodo")]
              : [
                  _c("FormMetodoConser", {
                    attrs: { idMetodo: _vm.id },
                    on: { cambiarVariable: _vm.cambiarVariableFormulario }
                  })
                ]
          ],
          2
        )
      ])
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
          staticClass: "header-icon lnr-charts icon-gradient bg-happy-green"
        }),
        _vm._v("\n          Métodos de Conservación\n        ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              { staticClass: "card-body mt-3 ml-2 mr-2" },
              [
                _c("MyVuetable", {
                  ref: "tabla",
                  attrs: {
                    apiUrl: _vm.url,
                    fields: _vm.fields,
                    sortOrder: _vm.sortOrder,
                    detailRowComponent: "",
                    nameGet: "metodos-bacterias"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "transition",
              { attrs: { name: "fade" } },
              [
                _c(
                  "modal",
                  {
                    attrs: {
                      name: "my_modal_eliminar_metodo",
                      classes: "my_modal",
                      maxWidth: 400,
                      adaptive: true,
                      height: "auto",
                      scrollable: true
                    },
                    on: { "before-open": _vm.beforeOpen }
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
                          [_vm._v("Eliminar Método de Conservación")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "close",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.$modal.hide(
                                  "my_modal_eliminar_metodo"
                                )
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
                        _c("p", [
                          _vm._v("Esta segura/o de eliminar el Método?.")
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
                                return _vm.$modal.hide(
                                  "my_modal_eliminar_metodo"
                                )
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
                            attrs: {
                              type: "button",
                              disabled: _vm.bloquearBtnModal
                            },
                            on: { click: _vm.eliminarMetodo }
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
          ]
        : [_vm._m(0)]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("NO SE HA AGREGADO NINGÚN MÉTODO")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CroppieComponent.vue?vue&type=template&id=2cc1e54c& */ "./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&");
/* harmony import */ var _CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CroppieComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CroppieComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CroppieComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CroppieComponent.vue?vue&type=template&id=2cc1e54c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CroppieComponent.vue?vue&type=template&id=2cc1e54c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieComponent_vue_vue_type_template_id_2cc1e54c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormMetodoConserComponent.vue?vue&type=template&id=184351d5& */ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5&");
/* harmony import */ var _FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormMetodoConserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormMetodoConserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormMetodoConserComponent.vue?vue&type=template&id=184351d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue?vue&type=template&id=184351d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMetodoConserComponent_vue_vue_type_template_id_184351d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoMetodoConserComponent.vue?vue&type=template&id=94660d74& */ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74&");
/* harmony import */ var _InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoMetodoConserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoMetodoConserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoMetodoConserComponent.vue?vue&type=template&id=94660d74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue?vue&type=template&id=94660d74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoMetodoConserComponent_vue_vue_type_template_id_94660d74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac& */ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac&");
/* harmony import */ var _TablaMetodoConserBacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaMetodoConserBacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue?vue&type=template&id=f2d947ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaMetodoConserBacteriasComponent_vue_vue_type_template_id_f2d947ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/tablas/metodo-conser.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/tablas/metodo-conser.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre_tipo_metodo",
  sortField: "tipo_id",
  title: "Tipo de Método",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "nombre_tipo_agar",
  sortField: "tipo_agar_id",
  title: "Tipo Agar",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "tipoAgar"
}, {
  name: "numero_replicas",
  sortField: "numero_replicas",
  title: "Número de Replicas",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "recuento_microgota",
  sortField: "recuento_microgota",
  title: "Recuento Microgota",
  titleClass: "text-center"
}, {
  name: "fecha",
  sortField: "fecha",
  title: "Fecha",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "formatDate"
}, {
  name: "imagenPublica",
  title: "Imagen",
  titleClass: "text-center",
  dataClass: "text-center",
  callback: "imagen"
}, {
  name: "__component:acciones_tabla_metodo_conser_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/mixins/obtenerImagenCroopieCepas.js":
/*!**********************************************************!*\
  !*** ./resources/js/mixins/obtenerImagenCroopieCepas.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var obtenerImagenCroopieCepasMixin = {
  data: function data() {
    return {
      imagenMiniatura: "",
      imagenError: ""
    };
  },
  methods: {
    cambiarValorImagen: function cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.validarTipoForm) {
          this.parametros.imagen = this.info.imagen;
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";

          if (this.info) {
            this.imagenMiniatura = this.info.imagenPublica;
            this.parametros.imagen = this.info.imagen;
          } else {
            this.imagenMiniatura = "";
            this.parametros.imagen = "";
          }
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        if (this.info) {
          this.imagenMiniatura = this.info.imagenPublica;
          this.parametros.imagen = this.info.imagen;
        } else {
          this.parametros.imagen = "";
          this.imagenMiniatura = "";
        }
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this = this;

      var reader = new Image();

      reader.onload = function (e) {
        _this.imagenMiniatura = reader.src;
      };

      reader.src = URL.createObjectURL(file);
    }
  },
  computed: {
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    },
    mostrarBtnCroppie: function mostrarBtnCroppie() {
      if (this.info) {
        if (this.imagenMiniatura != this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    validarCroppie: function validarCroppie() {
      if (this.info) {
        if (this.imagenMiniatura == this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (obtenerImagenCroopieCepasMixin);

/***/ })

}]);