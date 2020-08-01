(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imagenes-login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["idImagen"],
  data: function data() {
    return {
      parametros: {
        imagen: "",
        titulo: "",
        descripcion: "",
        mostrar: false
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      info: "",
      bloquearBtn: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("imagenes_login", ["accionImagenLogin"]), {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;

      if (this.parametros.imagen === this.info.imagen) {
        axios.put("/login/imagen/".concat(this.info.id), this.parametros).then(function (res) {
          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
            window.location.href = "/";
          } else {
            _this.bloquearBtn = false;

            if (res.data.mostrar) {
              res.data.mostrar = 1;
            } else {
              res.data.mostrar = 0;
            }

            _this.accionImagenLogin({
              tipo: "editar",
              data: res.data
            });

            _this.$emit("mostrarFrom");

            _this.toastr("Editar Imagen", "Imagen editado con exito!!", "success");
          }
        })["catch"](function (error) {
          _this.bloquearBtn = false;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!", "", "error");
        });
      } else {
        var form = new FormData();
        form.append("imagen", this.parametros.imagen);
        form.append("descripcion", this.parametros.descripcion);
        form.append("titulo", this.parametros.titulo);

        if (this.parametros.mostrar) {
          form.append("mostrar", 1);
        } else {
          form.append("mostrar", 0);
        }

        form.append("_method", "PUT");
        axios.post("/login/imagen/".concat(this.info.id), form, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (res) {
          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
            window.location.href = "/";
          } else {
            _this.bloquearBtn = false;

            _this.toastr("Editar Imagen", "Imagen editada con exito!!", "success");

            _this.accionImagenLogin({
              tipo: "editar",
              data: res.data
            });

            _this.$emit("mostrarFrom");
          }
        })["catch"](function (error) {
          _this.bloquearBtn = false;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!", "", "error");
        });
      }
    },
    llenarInfo: function llenarInfo() {
      this.parametros.titulo = this.info.titulo;
      this.parametros.descripcion = this.info.descripcion;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;

      if (this.info.mostrar == 1) {
        this.parametros.mostrar = true;
      }
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      this.parametros.imagen = file;
      var allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .jpg y menor a 2Mb.";
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
      var _this2 = this;

      var reader = new Image();

      reader.onload = function (e) {
        if (e.path[0].height > e.path[0].width) {
          _this2.imagenMiniatura = reader.src;
        } else {
          _this2.imagenError = "La imagen debe ser en forma vertical.";
          _this2.$refs.inputImagen.value = "";

          if (_this2.info) {
            _this2.imagenMiniatura = _this2.info.imagenPublica;
            _this2.parametros.imagen = _this2.info.imagen;
          } else {
            _this2.imagenMiniatura = "";
            _this2.parametros.imagen = "";
          }
        }
      };

      reader.src = URL.createObjectURL(file);
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("imagenes_login", ["getImagenLoginById"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState(["auth"]), {
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    }
  }),
  mounted: function mounted() {
    this.info = this.getImagenLoginById(this.idImagen);
    this.llenarInfo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/bloquearPestañas */ "./resources/js/mixins/bloquearPestañas.js");
/* harmony import */ var _VerImagenesComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerImagenesComponent.vue */ "./resources/js/components/imagenes-login/VerImagenesComponent.vue");
/* harmony import */ var _FromImagenComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FromImagenComponent.vue */ "./resources/js/components/imagenes-login/FromImagenComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Form: _FromImagenComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VerImagenes: _VerImagenesComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      idImagen: 0,
      from: false,
      bloqueos: [],
      miBloqueo: null
    };
  },
  mixins: [Object(_mixins_bloquearPesta_as__WEBPACK_IMPORTED_MODULE_1__["default"])("imagenesLogin")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState(["auth"])),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("imagenes_login", ["obtenerImagenesLogin", "accionImagenLogin"]), {
    editarImagen: function editarImagen(id) {
      window.Echo["private"]("bloquearBtnImgLogin").whisper("bloquearBtnImgLogin", {
        id: id,
        idUser: this.auth.id
      });
      this.$events.fire("agregarMiBloqueoImgLogin", {
        id: id,
        idUser: this.auth.id
      });
      this.idImagen = id;
      this.from = !this.from;
    },
    mostrarFrom: function mostrarFrom() {
      window.Echo["private"]("desbloquearBtnImgLogin").whisper("desbloquearBtnImgLogin", {
        id: this.idImagen
      });
      this.$events.fire("eliminarMiBloqueoImgLogin", {
        id: this.idImagen
      });
      this.idImagen = 0;
      this.from = !this.from;
    },
    // Bloquear Btns
    bloquearBtn: function bloquearBtn(e) {
      this.bloqueos.push({
        idUser: e.idUser,
        id: e.id
      });
      this.$events.fire(e.id + "-bloquearBtnImgLogin");
    },
    desbloquearBtn: function desbloquearBtn(e) {
      this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
        return data.id === e.id;
      }), 1);
      this.$events.fire(e.id + "-desbloquearBtnImgLogin");
    },
    // guardar mis bloqueos
    agregarMiBloqueo: function agregarMiBloqueo(e) {
      this.miBloqueo = {
        idUser: e.idUser,
        id: e.id
      };
    },
    eliminarMiBloqueo: function eliminarMiBloqueo(e) {
      if (e.id != 0) {
        this.miBloqueo = null;
      }
    },
    //borrar bloqueos
    borrarBloqueo: function borrarBloqueo(e) {
      var data = this.bloqueos.find(function (data) {
        return data.idUser === e.id;
      });

      if (data) {
        this.desbloquearBtn(data);
      }
    },
    // verificar bloqueos existentes
    verificarBloqueos: function verificarBloqueos(tipo) {
      for (var index = 0; index < this.bloqueos.length; index++) {
        this.$events.fire(this.bloqueos[index].id + "-bloquearBtnImgLogin");
      }
    },
    enviarBloqueo: function enviarBloqueo() {
      window.Echo["private"]("recibirBtnImgLogin").whisper("recibirBtnImgLogin", {
        miBloqueo: this.miBloqueo
      });
    }
  }),
  mounted: function mounted() {
    var _this = this;

    window.Echo.join("ImgLogin").joining(function (data) {
      if (_this.miBloqueo) {
        _this.enviarBloqueo();
      }
    }).leaving(function (data) {
      _this.borrarBloqueo(data.user);
    });
    window.Echo["private"]("bloquearBtnImgLogin").listenForWhisper("bloquearBtnImgLogin", function (e) {
      _this.bloquearBtn(e);
    });
    window.Echo["private"]("desbloquearBtnImgLogin").listenForWhisper("desbloquearBtnImgLogin", function (e) {
      if (e.id != 0) {
        _this.desbloquearBtn(e);
      }
    });
  },
  created: function created() {
    var _this2 = this;

    this.$emit("rutaSider", window.location.pathname);
    this.obtenerImagenesLogin();
    window.Echo.channel("imagenesLogin").listen("ImagenesLoginEvent", function (e) {
      _this2.accionImagenLogin({
        tipo: "editar",
        data: e.imagen
      });
    });
    window.Echo["private"]("recibirBtnImgLogin").listenForWhisper("recibirBtnImgLogin", function (e) {
      if (e.miBloqueo) {
        _this2.bloquearBtn(e.miBloqueo);
      }
    });
    this.$events.$on("agregarMiBloqueoImgLogin", function (e) {
      _this2.agregarMiBloqueo(e);
    });
    this.$events.$on("eliminarMiBloqueoImgLogin", function (e) {
      _this2.eliminarMiBloqueo(e);
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("agregarMiBloqueoImgLogin");
    this.$events.$off("eliminarMiBloqueoImgLogin");
  },
  beforeDestroy: function beforeDestroy() {
    window.Echo.leave("ImgLogin");
    window.Echo.leave("recibirBtnImgLogin");
    window.Echo.leave("desbloquearBtnImgLogin");
    window.Echo.leave("bloquearBtnImgLogin");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["bloqueos"],
  data: function data() {
    return {
      bloquear: {
        imagen1: false,
        imagen2: false,
        imagen3: false
      }
    };
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState("imagenes_login", ["imagenesLogin"])),
  methods: {
    modificarFecha: function modificarFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(fecha).fromNow();
    },
    editar: function editar(id) {
      this.$emit("editarImagen", id);
    },
    disabledBtn: function disabledBtn(id) {
      var data = this.bloqueos.find(function (btn) {
        return btn.id === id;
      });

      if (data) {
        switch (id) {
          case 1:
            this.bloquear.imagen1 = true;
            break;

          case 2:
            this.bloquear.imagen2 = true;
            break;

          case 3:
            this.bloquear.imagen3 = true;
            break;
        }
      }
    }
  },
  watch: {
    bloqueos: function bloqueos() {
      this.bloquear.imagen1 = false;
      this.bloquear.imagen3 = false;
      this.bloquear.imagen2 = false;

      if (this.bloqueos != "") {
        this.disabledBtn(1);
        this.disabledBtn(2);
        this.disabledBtn(3);
      }
    }
  },
  created: function created() {
    if (this.bloqueos != "") {
      this.disabledBtn(1);
      this.disabledBtn(2);
      this.disabledBtn(3);
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=template&id=21db5b19&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=template&id=21db5b19& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-md-center" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title" }, [_vm._v("Editar Imagen")]),
            _vm._v(" "),
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
                  _c("label", { attrs: { for: "titulo" } }, [_vm._v("Título")]),
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
                    staticClass: "form-control",
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
                        _vm.$set(_vm.parametros, "titulo", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c("label", { attrs: { for: "imagen" } }, [_vm._v("Imagen")]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "inputImagen",
                    staticClass: "form-control-file",
                    attrs: {
                      name: "imagen",
                      id: "imagen",
                      accept: "image/jpeg",
                      type: "file"
                    },
                    on: { change: _vm.obtenerImagen }
                  }),
                  _vm._v(" "),
                  _vm.imagenError
                    ? _c("em", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.imagenError))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c("label", { attrs: { for: "descripcion" } }, [
                    _vm._v("Descripción")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.parametros.descripcion,
                        expression: "parametros.descripcion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "text", id: "descripcion", required: "" },
                    domProps: { value: _vm.parametros.descripcion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.parametros,
                          "descripcion",
                          $event.target.value
                        )
                      }
                    }
                  })
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
                          value: _vm.parametros.mostrar,
                          expression: "parametros.mostrar"
                        }
                      ],
                      class: [
                        "custom-control-input",
                        _vm.errors.mostrar ? "is-invalid" : ""
                      ],
                      attrs: { type: "checkbox", id: "mostrar" },
                      domProps: {
                        checked: Array.isArray(_vm.parametros.mostrar)
                          ? _vm._i(_vm.parametros.mostrar, null) > -1
                          : _vm.parametros.mostrar
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.parametros.mostrar,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.parametros,
                                  "mostrar",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.parametros,
                                  "mostrar",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.parametros, "mostrar", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label",
                        attrs: { for: "mostrar" }
                      },
                      [_vm._v("Desea Mostrar la imagen?")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "mb-2 mr-2 btn btn-block btn-warning",
                    attrs: { disabled: _vm.bloquearBtn }
                  },
                  [_vm._v("Editar")]
                )
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
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
    ])
  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=template&id=135e51e8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=template&id=135e51e8& ***!
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
  return _c("div", [
    _c("div", { staticClass: "app-page-title" }, [
      _c("div", { staticClass: "page-title-wrapper" }, [
        _c("div", { staticClass: "page-title-heading" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", [
            _vm._v("\n          Imagenes Login\n          "),
            _c("div", { staticClass: "page-title-subheading opacity-10" }, [
              _c("nav", [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _vm.from
                        ? [_c("a", [_vm._v("Editar")])]
                        : [_c("a", [_vm._v("Ver")])]
                    ],
                    2
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "page-title-actions" },
          [
            _vm.from
              ? [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn-wide mb-2 mr-2 btn-hover-shine btn btn-danger btn-lg",
                      on: { click: _vm.mostrarFrom }
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
    _c(
      "div",
      { staticClass: "tabs-animation" },
      [
        _vm.numPestaña == 1
          ? [
              !_vm.from
                ? [
                    _c("VerImagenes", {
                      attrs: { bloqueos: _vm.bloqueos },
                      on: { editarImagen: _vm.editarImagen }
                    })
                  ]
                : [
                    _c("Form", {
                      attrs: { idImagen: _vm.idImagen },
                      on: { mostrarFrom: _vm.mostrarFrom }
                    })
                  ]
            ]
          : [_vm._m(3)]
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
    return _c("div", { staticClass: "page-title-icon" }, [
      _c("i", { staticClass: "pe-7s-photo icon-gradient bg-mean-fruit" })
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
      _c("a", [_vm._v("Imagenes")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=template&id=ebc622a0&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=template&id=ebc622a0& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "card-body m-3" },
      [
        _c("h5", { staticClass: "card-title" }, [_vm._v("imagenes")]),
        _vm._v(" "),
        _vm.imagenesLogin != ""
          ? [
              _c("div", { staticClass: "container" }, [
                _c(
                  "div",
                  { staticClass: "row justify-content-md-center" },
                  _vm._l(_vm.imagenesLogin, function(imagen, index) {
                    return _c("div", { key: index, staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("img", {
                          staticClass: "card-img-top",
                          attrs: { src: imagen.imagenPublica }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _c("h5", { staticClass: "card-title" }, [
                            _vm._v(_vm._s(imagen.titulo))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(_vm._s(imagen.descripcion))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-footer" }, [
                          _c("div", { staticClass: "container" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-7" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.modificarFecha(imagen.updated_at)
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-5 text-right" },
                                [
                                  imagen.mostrar === 1
                                    ? [
                                        _c("img", {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: "Mostrando imagen",
                                              expression: "'Mostrando imagen'"
                                            }
                                          ],
                                          staticClass: "mb-2",
                                          attrs: {
                                            src:
                                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABwklEQVQ4jc2TvWsUQRiHn9lL9s7kCBgIfpCIxCNVIhxELMRCQRCxSKGIMYKIIJYp7NPkL1CCheEIEWxCPhQs05vSztImoImSQLzczM3Ma5G9u91lNzm7/GBgmNl9eOZ9Z+C0R7UmNdk67+idASl0+ev3F6q6nl7taU0OrTxXmPn/kDFAMRfYtCZEqfT+cQmzFttAY22sANnZ2/1NWCrRV+4H4FJtRoJy0Qjq8Y+H71dTQHMscGf7JytvagwOnuXR65cAeOfAuRDhKpAEam9oEXW9AUCxrwTA7vYvNhaWaTY01bs30a4ZBxI3SR45ytrbJZy13H/1hPrBX768+0hTa+48e8CFscsYGwGtB+vzgB3DyuQ4Xz9v8mnhA7rewGrNradTnKuMtGEJQyEL2GnK6PVxJICtjU0KQcCN6XsMVYYxrgM7MnRgHUieYawpI9UxHMKZgX6GrgxHJ0jGOx/VMNPQkL6HFydGo72kWRvoJaphFtDbeCm6ijiHd0Hukb8JypDzAtLZ/7OH9w5lg+ymrEzMrhK9zfLc7ZNlFRD2IHn3MB7fW+jO1MvRULQ7lgkUa6cFde1EIEDAYSFQi119eyryD6eiyYAFcGMFAAAAAElFTkSuQmCC"
                                          }
                                        })
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  index === 0
                                    ? [
                                        _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "tooltip",
                                                rawName: "v-tooltip",
                                                value: "Editar Imagen",
                                                expression: "'Editar Imagen'"
                                              }
                                            ],
                                            staticClass:
                                              "btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning",
                                            attrs: {
                                              disabled: _vm.bloquear.imagen1
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editar(imagen.id)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-pencil-alt"
                                            })
                                          ]
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  index === 1
                                    ? [
                                        _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "tooltip",
                                                rawName: "v-tooltip",
                                                value: "Editar Imagen",
                                                expression: "'Editar Imagen'"
                                              }
                                            ],
                                            staticClass:
                                              "btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning",
                                            attrs: {
                                              disabled: _vm.bloquear.imagen2
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editar(imagen.id)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-pencil-alt"
                                            })
                                          ]
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  index === 2
                                    ? [
                                        _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "tooltip",
                                                rawName: "v-tooltip",
                                                value: "Editar Imagen",
                                                expression: "'Editar Imagen'"
                                              }
                                            ],
                                            staticClass:
                                              "btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning",
                                            attrs: {
                                              disabled: _vm.bloquear.imagen3
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editar(imagen.id)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-pencil-alt"
                                            })
                                          ]
                                        )
                                      ]
                                    : _vm._e()
                                ],
                                2
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  }),
                  0
                )
              ])
            ]
          : [_vm._m(0)]
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
    return _c("div", { staticClass: "container mt-5" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12 d-flex justify-content-center" }, [
          _c("div", { staticClass: "loader mt-5" }, [
            _c("div", { staticClass: "ball-spin-fade-loader" }, [
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [_c("hr")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [_c("hr")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/imagenes-login/FromImagenComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/FromImagenComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FromImagenComponent_vue_vue_type_template_id_21db5b19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FromImagenComponent.vue?vue&type=template&id=21db5b19& */ "./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=template&id=21db5b19&");
/* harmony import */ var _FromImagenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FromImagenComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FromImagenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FromImagenComponent_vue_vue_type_template_id_21db5b19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FromImagenComponent_vue_vue_type_template_id_21db5b19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/imagenes-login/FromImagenComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FromImagenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FromImagenComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FromImagenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=template&id=21db5b19&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=template&id=21db5b19& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FromImagenComponent_vue_vue_type_template_id_21db5b19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FromImagenComponent.vue?vue&type=template&id=21db5b19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/FromImagenComponent.vue?vue&type=template&id=21db5b19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FromImagenComponent_vue_vue_type_template_id_21db5b19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FromImagenComponent_vue_vue_type_template_id_21db5b19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/imagenes-login/ImagenesLoginComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/ImagenesLoginComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImagenesLoginComponent_vue_vue_type_template_id_135e51e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagenesLoginComponent.vue?vue&type=template&id=135e51e8& */ "./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=template&id=135e51e8&");
/* harmony import */ var _ImagenesLoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagenesLoginComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImagenesLoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImagenesLoginComponent_vue_vue_type_template_id_135e51e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImagenesLoginComponent_vue_vue_type_template_id_135e51e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/imagenes-login/ImagenesLoginComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesLoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagenesLoginComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesLoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=template&id=135e51e8&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=template&id=135e51e8& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesLoginComponent_vue_vue_type_template_id_135e51e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagenesLoginComponent.vue?vue&type=template&id=135e51e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/ImagenesLoginComponent.vue?vue&type=template&id=135e51e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesLoginComponent_vue_vue_type_template_id_135e51e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesLoginComponent_vue_vue_type_template_id_135e51e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/imagenes-login/VerImagenesComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/VerImagenesComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerImagenesComponent_vue_vue_type_template_id_ebc622a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerImagenesComponent.vue?vue&type=template&id=ebc622a0& */ "./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=template&id=ebc622a0&");
/* harmony import */ var _VerImagenesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerImagenesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerImagenesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerImagenesComponent_vue_vue_type_template_id_ebc622a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerImagenesComponent_vue_vue_type_template_id_ebc622a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/imagenes-login/VerImagenesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerImagenesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerImagenesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerImagenesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=template&id=ebc622a0&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=template&id=ebc622a0& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerImagenesComponent_vue_vue_type_template_id_ebc622a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerImagenesComponent.vue?vue&type=template&id=ebc622a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagenes-login/VerImagenesComponent.vue?vue&type=template&id=ebc622a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerImagenesComponent_vue_vue_type_template_id_ebc622a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerImagenesComponent_vue_vue_type_template_id_ebc622a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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