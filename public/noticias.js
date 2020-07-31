(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["noticias"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websockets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../mixins/websockets */ "./resources/js/mixins/websockets.js");
/* harmony import */ var _mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/abrirCerrarFormulario */ "./resources/js/mixins/abrirCerrarFormulario.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TablaComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TablaComponent.vue */ "./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue");
/* harmony import */ var _FormComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormComponent.vue */ "./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Tabla: _TablaComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Form: _FormComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [Object(_mixins_websockets__WEBPACK_IMPORTED_MODULE_0__["default"])("Noticia", "noticias"), Object(_mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_1__["default"])("Noticia")],
  methods: {
    cambiarTipo: function cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  },
  created: function created() {
    this.$emit("rutaHijo", window.location.pathname);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _editor_texto_EditorTextoComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../editor-texto/EditorTextoComponent.vue */ "./resources/js/components/editor-texto/EditorTextoComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Editor: _editor_texto_EditorTextoComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ["idNoticia"],
  data: function data() {
    return {
      info: "",
      parametros: {
        titulo: "",
        link: "",
        cuerpo: "",
        imagen: "",
        publicar: false,
        tipo: "noticia",
        imagenesEditor: [],
        imagenesGuardadas: []
      },
      selectTipo: "link",
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      imagenError: "",
      mensajeTitulo: "",
      mensajeLink: "",
      errors: [],
      bloquearBtn: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("publicidad", ["accionNoticia"]), {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;

      if (this.tituloForm === "Agregar Noticia") {
        var form = new FormData();
        form.append("titulo", this.parametros.titulo);
        form.append("link", this.parametros.link);
        form.append("cuerpo", this.parametros.cuerpo);
        form.append("imagen", this.parametros.imagen);
        form.append("imagenesEditor", this.parametros.imagenesEditor);
        form.append("imagenesGuardadas", this.parametros.imagenesGuardadas);

        if (this.parametros.publicar) {
          form.append("publicar", 1);
        } else {
          form.append("publicar", 0);
        }

        form.append("tipo", this.parametros.tipo);
        axios.post("/publicidad", form, {
          headers: {
            "content-type": "multipart/form-data"
          }
        }).then(function (res) {
          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
            window.location.href = "/";
          } else {
            _this.bloquearBtn = false;

            _this.toastr("Agregar Noticia", "Noticia agregada con exito!!", "success");

            _this.accionNoticia({
              tipo: "agregar",
              data: res.data
            });

            _this.$emit("cambiarVariableFormulario");
          }
        })["catch"](function (error) {
          _this.bloquearBtn = false;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!", "", "error");
        });
      } else {
        if (this.parametros.imagen === this.info.imagen) {
          axios.put("/publicidad/".concat(this.idNoticia), this.parametros).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;

              _this.toastr("Editar Noticia", "Noticia editada con exito!!", "success");

              window.Echo["private"]("desbloquearBtnsNoticia").whisper("desbloquearBtnsNoticia", {
                id: res.data.id
              });

              _this.$events.fire("eliminarMiBloqueoNoticia", {
                id: res.data.id
              });

              _this.accionNoticia({
                tipo: "editar",
                data: res.data
              });

              _this.$emit("cambiarVariableFormulario");
            }
          })["catch"](function (error) {
            _this.bloquearBtn = false;

            if (error.response.status === 422) {
              _this.errors = error.response.data.errors;
            }

            _this.toastr("Error!!", "", "error");
          });
        } else {
          var _form = new FormData();

          _form.append("titulo", this.parametros.titulo);

          _form.append("link", this.parametros.link);

          _form.append("cuerpo", this.parametros.cuerpo);

          _form.append("imagen", this.parametros.imagen);

          _form.append("imagenesEditor", this.parametros.imagenesEditor);

          _form.append("imagenesGuardadas", this.parametros.imagenesGuardadas);

          if (this.parametros.publicar) {
            _form.append("publicar", 1);
          } else {
            _form.append("publicar", 0);
          }

          _form.append("tipo", this.parametros.tipo);

          _form.append("_method", "PUT");

          axios.post("/publicidad/".concat(this.idNoticia), _form, {
            headers: {
              "content-type": "multipart/form-data"
            }
          }).then(function (res) {
            if (res.request.responseURL === "http://127.0.0.1:8000/") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.bloquearBtn = false;

              _this.toastr("Editar Noticia", "Noticia editada con exito!!", "success");

              window.Echo["private"]("desbloquearBtnsNoticia").whisper("desbloquearBtnsNoticia", {
                id: res.data.id
              });

              _this.$events.fire("eliminarMiBloqueoNoticia", {
                id: res.data.id
              });

              _this.accionNoticia({
                tipo: "editar",
                data: res.data
              });

              _this.$emit("cambiarVariableFormulario");
            }
          })["catch"](function (error) {
            _this.bloquearBtn = false;

            if (error.response.status === 422) {
              _this.errors = error.response.data.errors;
            }

            _this.toastr("Error!!", "", "error");
          });
        }
      }
    },
    llenarInfo: function llenarInfo() {
      this.parametros.titulo = this.info.titulo;
      this.parametros.cuerpo = this.info.cuerpo;
      this.parametros.link = this.info.link;

      if (this.info.cuerpo) {
        this.selectTipo = "texto";
      }

      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;

      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      this.parametros.imagen = file;
      var allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .jpg y menor a 2Mb.";
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.imagen;
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        this.imagenMiniatura = this.info.imagenPublica;
        this.$refs.inputImagen.value = "";
        this.parametros.imagen = this.info.imagen;
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this2 = this;

      var reader = new Image();

      reader.onload = function (e) {
        if (e.path[0].height < e.path[0].width) {
          _this2.imagenMiniatura = reader.src;
        } else {
          _this2.imagenError = "La imagen debe ser en forma Horizontal.";
          _this2.imagenMiniatura = _this2.info.imagenPublica;
          _this2.$refs.inputImagen.value = "";
          _this2.parametros.imagen = _this2.info.imagen;
        }
      };

      reader.src = URL.createObjectURL(file);
    },
    aceptarContenido: function aceptarContenido(data) {
      this.parametros.cuerpo = data.contenido;
      this.parametros.imagenesEditor = data.imagenesEditor;
      this.parametros.imagenesGuardadas = data.imagenesGuardadas;
    },
    modificarContenido: function modificarContenido() {
      this.parametros.cuerpo = "";
      this.parametros.imagenesEditor = "";
    },
    cambiarDatos: function cambiarDatos() {
      if (this.selectTipo === "texto") {
        this.parametros.link = "";
      } else {
        this.parametros.cuerpo = "";
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("publicidad", ["getNoticiaById", "getNoticiaByTitulo"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getUserAuth"]), {
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Noticia") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required: function required() {
      if (this.tituloForm === "Agregar Noticia") {
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
    validarTitulo: function validarTitulo() {
      if (this.parametros.titulo) {
        var titulo = this.getNoticiaByTitulo(this.parametros.titulo);

        if (titulo) {
          if (titulo.id != this.info.id) {
            this.mensajeTitulo = "Ya existe una noticia con ese titulo";
            return true;
          }

          return false;
        }

        return false;
      }

      return false;
    },
    validarLink: function validarLink() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      var letters = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

      if (this.parametros.link) {
        if (!letters.test(this.parametros.link)) {
          this.mensajeLink = "El link no tiene un formato valido.";
          return true;
        }

        return false;
      }

      return false;
    },
    validarCuerpo: function validarCuerpo() {
      if (this.selectTipo == "texto" && !this.parametros.cuerpo) {
        return true;
      }

      return false;
    },
    validarBtn: function validarBtn() {
      if (this.validarTitulo || this.selectTipo == "link" && this.validarLink || this.validarCuerpo) {
        return true;
      }

      return false;
    }
  }),
  created: function created() {
    if (this.idNoticia === 0) {
      this.tituloForm = "Agregar Noticia";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getNoticiaById(this.idNoticia);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Noticia";
      this.nomBtn = "Editar";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/sitio-web/publicidad/noticias/columnas.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mixins/websocketsTabla */ "./resources/js/mixins/websocketsTabla.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
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
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "titulo",
        direction: "asc"
      }],
      id: "",
      bloquearBtnModal: false
    };
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("publicidad", ["getNoticias"]), {
    mostrarTabla: function mostrarTabla() {
      if (this.getNoticias != "" && this.getNoticias != null) {
        return true;
      }

      return false;
    }
  }),
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_3__["default"])("Noticia")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapActions("publicidad", ["accionNoticia"]), {
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarNoticia: function eliminarNoticia() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/publicidad/".concat(this.id), {
        data: {
          tipo: "noticia"
        }
      }).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.toastr("Eliminar Noticia", "Noticia eliminada con exito!!", "success");

          _this.accionNoticia({
            tipo: "eliminar",
            data: res.data
          });

          _this.actualizarTabla();

          _this.$modal.hide("modal_eliminar_noticia");
        }
      })["catch"](function (error) {
        _this.bloquearBtnModal = false;

        _this.toastr("Error!!!!", "", "error");
      });
    }
  }),
  created: function created() {
    this.$emit("cambiarTipo", "tabla");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
          ? [_c("Tabla", { on: { cambiarTipo: _vm.cambiarTipo } })]
          : [
              _c("Form", {
                attrs: { idNoticia: _vm.id },
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
        _vm._v("\n      Tabla Dinámica Noticias\n    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=template&id=caf1013e&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=template&id=caf1013e& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container mt-3 ml-2 mr-2" },
    [
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
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "titulo" } }, [
                        _vm._v("Título")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.titulo,
                            expression: "parametros.titulo"
                          }
                        ],
                        class: [
                          "form-control",
                          _vm.validarTitulo ? "is-invalid" : ""
                        ],
                        attrs: {
                          name: "titulo",
                          id: "titulo",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.titulo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "titulo",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.validarTitulo
                        ? _c("em", { staticClass: "error invalid-feedback" }, [
                            _vm._v(_vm._s(_vm.mensajeTitulo))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "select" } }, [
                        _vm._v("Contenido de la Noticia:")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectTipo,
                              expression: "selectTipo"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "select",
                            id: "conidioforo",
                            disabled: !_vm.required
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.selectTipo = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.cambiarDatos
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "link" } }, [
                            _vm._v("Link")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "texto" } }, [
                            _vm._v("Texto")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.selectTipo == "link"
                      ? [
                          _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c("label", { attrs: { for: "link" } }, [
                                _vm._v("Link")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.link,
                                    expression: "parametros.link"
                                  }
                                ],
                                class: [
                                  "form-control",
                                  _vm.validarLink ? "is-invalid" : ""
                                ],
                                attrs: {
                                  name: "link",
                                  id: "link",
                                  placeholder: "...",
                                  type: "text",
                                  required: ""
                                },
                                domProps: { value: _vm.parametros.link },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.parametros,
                                      "link",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.validarLink
                                ? _c(
                                    "em",
                                    { staticClass: "error invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.mensajeLink))]
                                  )
                                : _vm._e()
                            ]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "imagen" } }, [
                        _vm._v("Imagen")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "inputImagen",
                        class: [
                          "form-control-file",
                          _vm.imagenError != "" ? "is-invalid" : ""
                        ],
                        attrs: {
                          name: "imagen",
                          id: "imagen",
                          accept: "image/jpeg",
                          type: "file",
                          required: _vm.required
                        },
                        on: { change: _vm.obtenerImagen }
                      }),
                      _vm._v(" "),
                      _vm.imagenError
                        ? _c("em", { staticClass: "error invalid-feedback" }, [
                            _vm._v(_vm._s(_vm.imagenError))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "custom-checkbox custom-control mb-2" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.parametros.publicar,
                              expression: "parametros.publicar"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "publicar" },
                          domProps: {
                            checked: Array.isArray(_vm.parametros.publicar)
                              ? _vm._i(_vm.parametros.publicar, null) > -1
                              : _vm.parametros.publicar
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.parametros.publicar,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.parametros,
                                      "publicar",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.parametros,
                                      "publicar",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.parametros, "publicar", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "publicar" }
                          },
                          [_vm._v("Desea publicar la Noticia?")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "mb-2 mr-2 btn btn-block",
                        class: _vm.btnClase,
                        attrs: { disabled: _vm.validarBtn || _vm.bloquearBtn }
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
                      _c("img", {
                        staticClass: "d-block w-100 p-3",
                        attrs: { src: _vm.mostraImagen }
                      })
                    ]
                  : [_vm._m(0)]
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.selectTipo == "texto"
        ? [
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Elaborar Noticia")
                      ]),
                      _vm._v(" "),
                      _c("Editor", {
                        attrs: { info: _vm.info, quienesSomos: false },
                        on: {
                          contenido: _vm.aceptarContenido,
                          modificar: _vm.modificarContenido
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        : _vm._e()
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
          _c("b", { staticClass: "text-success" }, [_vm._v("SIN IMAGEN")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=template&id=9dabd28a&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=template&id=9dabd28a& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
                "api-url": "/info-panel/noticias-tabla",
                fields: _vm.fields,
                "sort-order": _vm.sortOrder,
                nameGet: "noticias"
              }
            })
          ]
        : [_vm._m(0)],
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_noticia",
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
                [_vm._v("Eliminar Noticia")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_noticia")
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
              _c("p", [_vm._v("Esta segura/o de eliminar la Noticia?.")])
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
                      return _vm.$modal.hide("modal_eliminar_noticia")
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
                  on: { click: _vm.eliminarNoticia }
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO NOTICIAS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=template&id=fe260138& */ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138&");
/* harmony import */ var _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerComponent.vue?vue&type=template&id=fe260138& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/ContainerComponent.vue?vue&type=template&id=fe260138&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerComponent_vue_vue_type_template_id_fe260138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormComponent_vue_vue_type_template_id_caf1013e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=template&id=caf1013e& */ "./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=template&id=caf1013e&");
/* harmony import */ var _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormComponent_vue_vue_type_template_id_caf1013e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormComponent_vue_vue_type_template_id_caf1013e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=template&id=caf1013e&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=template&id=caf1013e& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_caf1013e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=template&id=caf1013e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/FormComponent.vue?vue&type=template&id=caf1013e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_caf1013e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_caf1013e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaComponent_vue_vue_type_template_id_9dabd28a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=template&id=9dabd28a& */ "./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=template&id=9dabd28a&");
/* harmony import */ var _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaComponent_vue_vue_type_template_id_9dabd28a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaComponent_vue_vue_type_template_id_9dabd28a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=template&id=9dabd28a&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=template&id=9dabd28a& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_9dabd28a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=template&id=9dabd28a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sitio-web/publicidad/noticias/TablaComponent.vue?vue&type=template&id=9dabd28a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_9dabd28a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_9dabd28a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sitio-web/publicidad/noticias/columnas.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/sitio-web/publicidad/noticias/columnas.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "titulo",
  sortField: "titulo",
  title: "Titulo",
  titleClass: "text-center"
},
/**
{
    name: "imagenPublica",
    sortField: "imagenPublica",
    title: "Imagen",
    titleClass: "text-center",
    callback: "imagen",
    dataClass: "text-center"
}, */
{
  name: "__component:checkboxs_noticias",
  title: "Publicar",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "__component:acciones_noticias",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
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
        this.$events.fire("eliminarMiBloqueo" + tipoM, {
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
        miBloqueo: null
      };
    },
    methods: {
      // Bloquear Btns
      bloquearBtns: function bloquearBtns(e) {
        var data = this.bloqueos.find(function (data) {
          return data.id === e.id;
        });

        if (!data) {
          this.bloqueos.push({
            idUser: e.idUser,
            id: e.id
          });
          this.$events.fire(e.id + "-bloquearBtns" + tipoM);
          this.$events.fire(e.id + "-bloquearCheck" + tipoM);
        }
      },
      desbloquearBtns: function desbloquearBtns(e) {
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id;
        }), 1);
        this.$events.fire(e.id + "-desbloquearBtns" + tipoM);
        this.$events.fire(e.id + "-desbloquearCheck" + tipoM);
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
          this.$events.fire(this.bloqueos[index].id + "-bloquearBtns" + tipoM);
          this.$events.fire(this.bloqueos[index].id + "-bloquearCheck" + tipoM);
        }
      },
      enviarBloqueos: function enviarBloqueos() {
        window.Echo["private"]("recibirBtns" + tipoM).whisper("recibirBtns" + tipoM, {
          miBloqueo: this.miBloqueo
        });
      }
    },
    mounted: function mounted() {
      var _this = this;

      window.Echo.join(tipoP).joining(function (data) {
        _this.enviarBloqueos();
      }).leaving(function (data) {
        _this.borrarBloqueos(data.user);
      });
      window.Echo["private"]("bloquearBtns" + tipoM).listenForWhisper("bloquearBtns" + tipoM, function (e) {
        _this.bloquearBtns(e);
      });
      window.Echo["private"]("desbloquearBtns" + tipoM).listenForWhisper("desbloquearBtns" + tipoM, function (e) {
        if (e.id != 0) {
          _this.desbloquearBtns(e);
        }
      });
    },
    created: function created() {
      var _this2 = this;

      window.Echo["private"]("recibirBtns" + tipoM).listenForWhisper("recibirBtns" + tipoM, function (e) {
        if (e.miBloqueo) {
          _this2.bloquearBtns(e.miBloqueo);
        }
      });
      this.$events.$on("agregarMiBloqueo" + tipoM, function (e) {
        return _this2.agregarMiBloqueo(e);
      });
      this.$events.$on("eliminarMiBloqueo" + tipoM, function (e) {
        return _this2.eliminarMiBloqueo(e);
      });
      this.$events.$on("verificarBloqueos-" + tipoP, function (e) {
        return _this2.verificarBloqueos();
      });
    },
    destroyed: function destroyed() {
      this.$events.$off("agregarMiBloqueo" + tipoM);
      this.$events.$off("eliminarMiBloqueo" + tipoM);
      this.$events.$off("verificarBloqueos-" + tipoP);
    },
    beforeDestroy: function beforeDestroy() {
      window.Echo.leave(tipoP);
      window.Echo.leave("recibirBtns" + tipoM);
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
        this.$events.fire("eliminarMiBloqueo" + tipoM, {
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