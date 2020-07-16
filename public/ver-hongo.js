(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ver-hongo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bacterias_VerBacteriaComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bacterias/VerBacteriaComponent.vue */ "./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue");
/* harmony import */ var _hongos_VerHongoComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hongos/VerHongoComponent.vue */ "./resources/js/components/cepas/hongos/VerHongoComponent.vue");
/* harmony import */ var _levaduras_VerLevaduraComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levaduras/VerLevaduraComponent.vue */ "./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue");
/* harmony import */ var _actinomicetos_VerActinomicetoComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actinomicetos/VerActinomicetoComponent.vue */ "./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VerBacteria: _bacterias_VerBacteriaComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VerHongo: _hongos_VerHongoComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VerLevadura: _levaduras_VerLevaduraComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VerActinomiceto: _actinomicetos_VerActinomicetoComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["tipoG"],
  data: function data() {
    return {
      tipo: ""
    };
  },
  created: function created() {
    switch (this.tipoG) {
      case 1:
        this.obtenerCepa(this.$route.params.cepaBacteriaId);
        break;

      case 2:
        this.obtenerCepa(this.$route.params.cepaHongoId);
        break;

      case 3:
        this.obtenerCepa(this.$route.params.cepaLevaduraId);
        break;

      case 4:
        this.obtenerCepa(this.$route.params.cepaActinomicetoId);
        break;

      case 0:
        this.obtenerCepa(this.$route.params.cepaId);
        break;
    }

    this.$emit("rutaHijo", window.location.pathname);
  },
  watch: {
    getCepa: function getCepa() {
      if (this.getCepa) {
        if (this.getCepa === "No Existe") {
          this.tipo = 5;
        } else {
          this.tipo = this.verificarUrl(this.getCepa.cepa.grupo_microbiano_id);
        }
      }
    }
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["obtenerCepa", "limpiarCepa"]), {
    verificarUrl: function verificarUrl(tipo) {
      var ruta = window.location.pathname;

      switch (tipo) {
        case 1:
          if (ruta.includes("bacteria")) {
            return 1;
          } else {
            return 5;
          }

          break;

        case 2:
          if (ruta.includes("hongo")) {
            return 2;
          } else {
            return 5;
          }

          break;

        case 3:
          if (ruta.includes("levadura")) {
            return 3;
          } else {
            return 5;
          }

          break;

        case 4:
          if (ruta.includes("actinomiceto")) {
            return 4;
          } else {
            return 5;
          }

          break;
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepa", ["getCepa"]), {
    getTipo: function getTipo() {
      return this.tipo;
    }
  }),
  destroyed: function destroyed() {
    this.limpiarCepa();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../carousel/CarouselComponent.vue */ "./resources/js/components/carousel/CarouselComponent.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale("es");
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Carousel: _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      selectImprimir: [],
      errorSelect: "",
      imagenes: {
        micro: [],
        otras: [],
        identi: []
      },
      mostrarCaractMacro: false,
      mostrarCaractMicro: false,
      mostrarIdentiBioqui: false,
      mostrarOtrasCaract: false,
      btnTodo: false,
      btnSeleccionado: false
    };
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapGetters("cepa", ["getCepa", "getCaractMacro", "getCaractMicro", "getOtrasCaract", "getIdentiBioqui"]), {}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapGetters("info_cepas", ["getGrupoCepa", "getGeneroCepa", "getEspecieCepa", "getPhylumCepa", "getOrdenCepa", "getReinoCepa", "getClaseCepa"]), {}, vuex__WEBPACK_IMPORTED_MODULE_2__["default"].mapGetters("info_caract", ["getInfoCaractMacroActinomicetosById", "getInfoCaractMicroActinomicetosById"]), {
    btnTodoDisabled: function btnTodoDisabled() {
      return this.btnTodo;
    },
    btnSeleccionadoDisabled: function btnSeleccionadoDisabled() {
      return this.btnSeleccionado;
    }
  }),
  methods: {
    imprimir: function imprimir(tipo) {
      var _this = this;

      //window.print();
      var imprimir = true;

      switch (tipo) {
        case "todo":
          this.selectImprimir = [];
          this.selectImprimir.push("todo");
          break;

        case "select":
          if (this.selectImprimir.length === 0) {
            imprimir = false;
          }

          break;
      }

      if (imprimir) {
        this.btnTodo = true;
        this.btnSeleccionado = true;
        this.toastr("Descarga!!", "La descarga puede demorar unos segundos, dependiendo de la cantidad de informacion. \n           favor esperar!!", "warning", 10000);
        axios.get("/cepa/imprimir/".concat(this.getCepa.cepa.id), {
          params: {
            imprimir: this.selectImprimir
          },
          responseType: "blob"
        }).then(function (res) {
          _this.toastr("Descarga!!", "La descarga se realizo con éxito", "success", 5000);

          _this.errorSelect = "";
          _this.selectImprimir = [];
          var url = window.URL.createObjectURL(new Blob([res.data]));
          var link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Cepa-".concat(_this.getCepa.cepa.codigo, ".pdf"));
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          _this.btnTodo = false;
          _this.btnSeleccionado = false;
        })["catch"](function (error) {
          _this.btnTodo = false;
          _this.btnSeleccionado = false;
        });
      } else {
        this.errorSelect = "Favor seleccionar minimo una opcion";
      }
    },
    modificarFecha: function modificarFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).fromNow();
    },
    modificarFecha2: function modificarFecha2(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format("D-MMM-YYYY hh:mma");
    },
    primeraMayus: function primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    llenarArregloImagenes: function llenarArregloImagenes(data, tipo) {
      if (data.imagen1) {
        this.pushImagen(1, data.imagenPublica1, true, tipo);

        if (data.imagen2) {
          this.pushImagen(2, data.imagenPublica2, false, tipo);
        }

        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen2) {
        this.pushImagen(2, data.imagenPublica2, true, tipo);

        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen3) {
        this.pushImagen(3, data.imagenPublica3, true, tipo);
      }
    },
    pushImagen: function pushImagen(num, imagen, active, tipo) {
      switch (tipo) {
        case "micro":
          this.imagenes.micro.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;

        case "otras":
          this.imagenes.otras.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;

        case "identi":
          this.imagenes.identi.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;
      }
    },
    mostrarOcultarCaract: function mostrarOcultarCaract(tipo) {
      switch (tipo) {
        case "macro":
          this.mostrarCaractMacro = !this.mostrarCaractMacro;
          break;

        case "micro":
          this.mostrarCaractMicro = !this.mostrarCaractMicro;
          break;

        case "identi":
          this.mostrarIdentiBioqui = !this.mostrarIdentiBioqui;
          break;

        case "otras":
          this.mostrarOtrasCaract = !this.mostrarOtrasCaract;
          break;
      }
    },
    toastr: function toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: function onCreated() {},
        onClicked: function onClicked() {},
        onClosed: function onClosed() {},
        onMouseOver: function onMouseOver() {},
        onMouseOut: function onMouseOut() {}
      });
    }
  },
  created: function created() {
    if (this.getCaractMicro) {
      this.llenarArregloImagenes(this.getCaractMicro, "micro");
    }

    if (this.getIdentiBioqui) {
      this.llenarArregloImagenes(this.getIdentiBioqui, "identi");
    }

    if (this.getOtrasCaract) {
      this.llenarArregloImagenes(this.getOtrasCaract, "otras");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../carousel/CarouselComponent.vue */ "./resources/js/components/carousel/CarouselComponent.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale("es");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Carousel: _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      selectImprimir: [],
      errorSelect: "",
      imagenes: {
        micro: [],
        bioqui: [],
        fisio: []
      },
      mostrarCaractMacro: false,
      mostrarCaractMicro: false,
      mostrarCaractFisio: false,
      mostrarCaractBioqui: false,
      mostrarIdentiMolecu: false,
      mostrarMetodosConser: false,
      metodos: {
        fila1: [],
        fila2: [],
        fila3: []
      },
      btnTodo: false,
      btnSeleccionado: false
    };
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("cepa", ["getCepa", "getCaractMacro", "getCaractMicro", "getCaractBioqui", "getCaractFisio", "getMetodoConser", "getIdentiMolecu"]), {}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("info_cepas", ["getGrupoCepa", "getGeneroCepa", "getEspecieCepa"]), {}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("info_caract", ["getInfoCaractMacroBacteriasById", "getInfoCaractMicroBacteriasById", "getInfoMetodoConserBacteriasById"]), {
    btnTodoDisabled: function btnTodoDisabled() {
      return this.btnTodo;
    },
    btnSeleccionadoDisabled: function btnSeleccionadoDisabled() {
      return this.btnSeleccionado;
    }
  }),
  methods: {
    imprimir: function imprimir(tipo) {
      var _this = this;

      //window.print();
      var imprimir = true;

      switch (tipo) {
        case "todo":
          this.selectImprimir = [];
          this.selectImprimir.push("todo");
          break;

        case "select":
          if (this.selectImprimir.length === 0) {
            imprimir = false;
          }

          break;
      }

      if (imprimir) {
        this.btnTodo = true;
        this.btnSeleccionado = true;
        this.toastr("Descarga!!", "La descarga puede demorar unos segundos, dependiendo de la cantidad de informacion. \n           favor esperar!!", "warning", 10000);
        axios.get("/cepa/imprimir/".concat(this.getCepa.cepa.id), {
          params: {
            imprimir: this.selectImprimir
          },
          responseType: "blob"
        }).then(function (res) {
          _this.toastr("Descarga!!", "La descarga se realizo con éxito", "success", 5000);

          _this.errorSelect = "";
          _this.selectImprimir = [];
          var url = window.URL.createObjectURL(new Blob([res.data]));
          var link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Cepa-".concat(_this.getCepa.cepa.codigo, ".pdf"));
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          _this.btnTodo = false;
          _this.btnSeleccionado = false;
        })["catch"](function (error) {
          _this.btnTodo = false;
          _this.btnSeleccionado = false;
        });
      } else {
        this.errorSelect = "Favor seleccionar minimo una opcion";
      }
    },
    modificarFecha: function modificarFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).fromNow();
    },
    modificarFecha2: function modificarFecha2(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format("D-MMM-YYYY hh:mma");
    },
    primeraMayus: function primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    llenarArregloImagenes: function llenarArregloImagenes(data, tipo) {
      if (data.imagen1) {
        this.pushImagen(1, data.imagenPublica1, true, tipo);

        if (data.imagen2) {
          this.pushImagen(2, data.imagenPublica2, false, tipo);
        }

        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen2) {
        this.pushImagen(2, data.imagenPublica2, true, tipo);

        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen3) {
        this.pushImagen(3, data.imagenPublica3, true, tipo);
      }
    },
    pushImagen: function pushImagen(num, imagen, active, tipo) {
      switch (tipo) {
        case "micro":
          this.imagenes.micro.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;

        case "bioqui":
          this.imagenes.bioqui.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;

        case "fisio":
          this.imagenes.fisio.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;
      }
    },
    mostrarOcultarCaract: function mostrarOcultarCaract(tipo) {
      switch (tipo) {
        case "macro":
          this.mostrarCaractMacro = !this.mostrarCaractMacro;
          break;

        case "micro":
          this.mostrarCaractMicro = !this.mostrarCaractMicro;
          break;

        case "fisio":
          this.mostrarCaractFisio = !this.mostrarCaractFisio;
          break;

        case "bioqui":
          this.mostrarCaractBioqui = !this.mostrarCaractBioqui;
          break;

        case "identi":
          this.mostrarIdentiMolecu = !this.mostrarIdentiMolecu;
          break;

        case "metodo":
          this.mostrarMetodosConser = !this.mostrarMetodosConser;
          break;
      }
    },
    llenarArreglosMetodos: function llenarArreglosMetodos(arregloOrdenadoPorFechaDeCreacion) {
      var contador = 1;

      for (var index = 0; index < arregloOrdenadoPorFechaDeCreacion.length; index++) {
        switch (contador) {
          case 1:
            this.metodos.fila1.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador++;
            break;

          case 2:
            this.metodos.fila2.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador++;
            break;

          case 3:
            this.metodos.fila3.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador = 1;
            break;
        }
      }
    },
    toastr: function toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: function onCreated() {},
        onClicked: function onClicked() {},
        onClosed: function onClosed() {},
        onMouseOver: function onMouseOver() {},
        onMouseOut: function onMouseOut() {}
      });
    }
  },
  created: function created() {
    if (this.getCaractMicro) {
      this.llenarArregloImagenes(this.getCaractMicro, "micro");
    }

    if (this.getCaractFisio) {
      this.llenarArregloImagenes(this.getCaractFisio, "fisio");
    }

    if (this.getCaractBioqui) {
      this.llenarArregloImagenes(this.getCaractBioqui, "bioqui");
    }

    if (this.getMetodoConser) {
      this.llenarArreglosMetodos(this.getMetodoConser.sort(function (a, b) {
        if (a.created_at > b.created_at) {
          return -1;
        }

        if (a.created_at < b.created_at) {
          return 1;
        }

        return 0;
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../carousel/CarouselComponent.vue */ "./resources/js/components/carousel/CarouselComponent.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale("es");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Carousel: _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      selectImprimir: [],
      errorSelect: "",
      imagenes: {
        micro: [],
        bioqui: []
      },
      mostrarCaractMacro: false,
      mostrarCaractMicro: false,
      mostrarCaractBioqui: false,
      mostrarIdentiMolecu: false,
      mostrarMetodosConser: false,
      metodos: {
        fila1: [],
        fila2: [],
        fila3: []
      },
      btnTodo: false,
      btnSeleccionado: false
    };
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("cepa", ["getCepa", "getCaractMacro", "getCaractMicro", "getCaractBioqui", "getMetodoConser", "getIdentiMolecu"]), {}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("info_cepas", ["getGrupoCepa", "getGeneroCepa", "getEspecieCepa", "getOrdenCepa", "getClaseCepa", "getFamiliaCepa", "getPhylumCepa"]), {}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("info_caract", ["getInfoCaractMacroHongosById", "getInfoCaractMicroHongosById", "getInfoMetodoConserHongosById"]), {
    btnTodoDisabled: function btnTodoDisabled() {
      return this.btnTodo;
    },
    btnSeleccionadoDisabled: function btnSeleccionadoDisabled() {
      return this.btnSeleccionado;
    }
  }),
  methods: {
    imprimir: function imprimir(tipo) {
      var _this = this;

      //window.print();
      var imprimir = true;

      switch (tipo) {
        case "todo":
          this.selectImprimir = [];
          this.selectImprimir.push("todo");
          break;

        case "select":
          if (this.selectImprimir.length === 0) {
            imprimir = false;
          }

          break;
      }

      if (imprimir) {
        this.btnTodo = true;
        this.btnSeleccionado = true;
        this.toastr("Descarga!!", "La descarga puede demorar uno segundos, dependiendo de la cantidad de informacion. \n           favor esperar!!", "warning", 10000);
        axios.get("/cepa/imprimir/".concat(this.getCepa.cepa.id), {
          params: {
            imprimir: this.selectImprimir
          },
          responseType: "blob"
        }).then(function (res) {
          _this.toastr("Descarga!!", "La descarga se realizo con éxito", "success", 5000);

          _this.errorSelect = "";
          _this.selectImprimir = [];
          var url = window.URL.createObjectURL(new Blob([res.data]));
          var link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Cepa-".concat(_this.getCepa.cepa.codigo, ".pdf"));
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          _this.btnTodo = false;
          _this.btnSeleccionado = false;
        })["catch"](function (error) {
          if (error.response) {
            _this.btnTodo = false;
            _this.btnSeleccionado = false;
          }
        });
      } else {
        this.errorSelect = "Favor seleccionar minimo una opcion";
      }
    },
    modificarFecha: function modificarFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).fromNow();
    },
    modificarFecha2: function modificarFecha2(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format("D-MMM-YYYY hh:mma");
    },
    primeraMayus: function primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    llenarArregloImagenes: function llenarArregloImagenes(data, tipo) {
      if (data.imagen1) {
        this.pushImagen(1, data.imagenPublica1, true, tipo);

        if (data.imagen2) {
          this.pushImagen(2, data.imagenPublica2, false, tipo);
        }

        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen2) {
        this.pushImagen(2, data.imagenPublica2, true, tipo);

        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen3) {
        this.pushImagen(3, data.imagenPublica3, true, tipo);
      }
    },
    pushImagen: function pushImagen(num, imagen, active, tipo) {
      switch (tipo) {
        case "micro":
          this.imagenes.micro.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;

        case "bioqui":
          this.imagenes.bioqui.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;
      }
    },
    mostrarOcultarCaract: function mostrarOcultarCaract(tipo) {
      switch (tipo) {
        case "macro":
          this.mostrarCaractMacro = !this.mostrarCaractMacro;
          break;

        case "micro":
          this.mostrarCaractMicro = !this.mostrarCaractMicro;
          break;

        case "bioqui":
          this.mostrarCaractBioqui = !this.mostrarCaractBioqui;
          break;

        case "identi":
          this.mostrarIdentiMolecu = !this.mostrarIdentiMolecu;
          break;

        case "metodo":
          this.mostrarMetodosConser = !this.mostrarMetodosConser;
          break;
      }
    },
    llenarArreglosMetodos: function llenarArreglosMetodos(arregloOrdenadoPorFechaDeCreacion) {
      var contador = 1;

      for (var index = 0; index < arregloOrdenadoPorFechaDeCreacion.length; index++) {
        switch (contador) {
          case 1:
            this.metodos.fila1.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador++;
            break;

          case 2:
            this.metodos.fila2.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador++;
            break;

          case 3:
            this.metodos.fila3.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador = 1;
            break;
        }
      }
    },
    toastr: function toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: function onCreated() {},
        onClicked: function onClicked() {},
        onClosed: function onClosed() {},
        onMouseOver: function onMouseOver() {},
        onMouseOut: function onMouseOut() {}
      });
    }
  },
  created: function created() {
    if (this.getCaractMicro) {
      this.llenarArregloImagenes(this.getCaractMicro, "micro");
    }

    if (this.getCaractBioqui) {
      this.llenarArregloImagenes(this.getCaractBioqui, "bioqui");
    }

    if (this.getMetodoConser) {
      this.llenarArreglosMetodos(this.getMetodoConser.sort(function (a, b) {
        if (a.created_at > b.created_at) {
          return -1;
        }

        if (a.created_at < b.created_at) {
          return 1;
        }

        return 0;
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../carousel/CarouselComponent.vue */ "./resources/js/components/carousel/CarouselComponent.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale("es");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Carousel: _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      selectImprimir: [],
      errorSelect: "",
      imagenes: {
        micro: [],
        bioqui: []
      },
      mostrarCaractMacro: false,
      mostrarCaractMicro: false,
      mostrarCaractBioqui: false,
      mostrarIdentiMolecu: false,
      mostrarMetodosConser: false,
      metodos: {
        fila1: [],
        fila2: [],
        fila3: []
      },
      rowTermoData: "",
      btnTodo: false,
      btnSeleccionado: false
    };
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("cepa", ["getCepa", "getCaractMacro", "getCaractMicro", "getCaractBioqui", "getMetodoConser", "getIdentiMolecu"]), {}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("info_cepas", ["getGrupoCepa", "getGeneroCepa", "getEspecieCepa", "getOrdenCepa", "getClaseCepa", "getFamiliaCepa", "getDivisionCepa"]), {}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters("info_caract", ["getInfoCaractMacroLevadurasById", "getInfoCaractMicroLevadurasById", "getInfoMetodoConserLevadurasById"]), {
    rowTermo: function rowTermo() {
      this.rowTermoData = 0;

      if (this.getCaractBioqui.termotolerancia_37) {
        this.rowTermoData++;
      }

      if (this.getCaractBioqui.termotolerancia_42) {
        this.rowTermoData++;
      }

      if (this.getCaractBioqui.termotolerancia_45) {
        this.rowTermoData++;
      }

      if (this.getCaractBioqui.termotolerancia_otra) {
        this.rowTermoData++;
      }

      return this.rowTermoData;
    },
    btnTodoDisabled: function btnTodoDisabled() {
      return this.btnTodo;
    },
    btnSeleccionadoDisabled: function btnSeleccionadoDisabled() {
      return this.btnSeleccionado;
    }
  }),
  methods: {
    imprimir: function imprimir(tipo) {
      var _this = this;

      //window.print();
      var imprimir = true;

      switch (tipo) {
        case "todo":
          this.selectImprimir = [];
          this.selectImprimir.push("todo");
          break;

        case "select":
          if (this.selectImprimir.length === 0) {
            imprimir = false;
          }

          break;
      }

      if (imprimir) {
        this.btnTodo = true;
        this.btnSeleccionado = true;
        this.toastr("Descarga!!", "La descarga puede demorar uno segundos, dependiendo de la cantidad de informacion. \n           favor esperar!!", "warning", 10000);
        axios.get("/cepa/imprimir/".concat(this.getCepa.cepa.id), {
          params: {
            imprimir: this.selectImprimir
          },
          responseType: "blob"
        }).then(function (res) {
          _this.toastr("Descarga!!", "La descarga se realizo con éxito", "success", 5000);

          _this.errorSelect = "";
          _this.selectImprimir = [];
          var url = window.URL.createObjectURL(new Blob([res.data]));
          var link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Cepa-".concat(_this.getCepa.cepa.codigo, ".pdf"));
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          _this.btnTodo = false;
          _this.btnSeleccionado = false;
        })["catch"](function (error) {
          if (error.response) {
            _this.btnTodo = false;
            _this.btnSeleccionado = false;
          }
        });
      } else {
        this.errorSelect = "Favor seleccionar minimo una opcion";
      }
    },
    modificarFecha: function modificarFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).fromNow();
    },
    modificarFecha2: function modificarFecha2(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).format("D-MMM-YYYY hh:mma");
    },
    primeraMayus: function primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    llenarArregloImagenes: function llenarArregloImagenes(data, tipo) {
      if (data.imagen1) {
        this.pushImagen(1, data.imagenPublica1, true, tipo);

        if (data.imagen2) {
          this.pushImagen(2, data.imagenPublica2, false, tipo);
        }

        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen2) {
        this.pushImagen(2, data.imagenPublica2, true, tipo);

        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen3) {
        this.pushImagen(3, data.imagenPublica3, true, tipo);
      }
    },
    pushImagen: function pushImagen(num, imagen, active, tipo) {
      switch (tipo) {
        case "micro":
          this.imagenes.micro.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;

        case "bioqui":
          this.imagenes.bioqui.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;
      }
    },
    mostrarOcultarCaract: function mostrarOcultarCaract(tipo) {
      switch (tipo) {
        case "macro":
          this.mostrarCaractMacro = !this.mostrarCaractMacro;
          break;

        case "micro":
          this.mostrarCaractMicro = !this.mostrarCaractMicro;
          break;

        case "bioqui":
          this.mostrarCaractBioqui = !this.mostrarCaractBioqui;
          break;

        case "identi":
          this.mostrarIdentiMolecu = !this.mostrarIdentiMolecu;
          break;

        case "metodo":
          this.mostrarMetodosConser = !this.mostrarMetodosConser;
          break;
      }
    },
    llenarArreglosMetodos: function llenarArreglosMetodos(arregloOrdenadoPorFechaDeCreacion) {
      var contador = 1;

      for (var index = 0; index < arregloOrdenadoPorFechaDeCreacion.length; index++) {
        switch (contador) {
          case 1:
            this.metodos.fila1.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador++;
            break;

          case 2:
            this.metodos.fila2.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador++;
            break;

          case 3:
            this.metodos.fila3.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador = 1;
            break;
        }
      }
    },
    toastr: function toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: function onCreated() {},
        onClicked: function onClicked() {},
        onClosed: function onClosed() {},
        onMouseOver: function onMouseOver() {},
        onMouseOut: function onMouseOut() {}
      });
    }
  },
  created: function created() {
    if (this.getCaractMicro) {
      this.llenarArregloImagenes(this.getCaractMicro, "micro");
    }

    if (this.getCaractBioqui) {
      this.llenarArregloImagenes(this.getCaractBioqui, "bioqui");
    }

    if (this.getMetodoConser) {
      this.llenarArreglosMetodos(this.getMetodoConser.sort(function (a, b) {
        if (a.created_at > b.created_at) {
          return -1;
        }

        if (a.created_at < b.created_at) {
          return 1;
        }

        return 0;
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.full-height[data-v-fef4403e] {\r\n  height: 40vh;\n}\n.flex-center[data-v-fef4403e] {\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\n}\n.position-ref[data-v-fef4403e] {\r\n  position: relative;\n}\n.code[data-v-fef4403e] {\r\n  border-right: 4px solid;\r\n  font-size: 60px;\r\n  padding: 0 15px 0 15px;\r\n  text-align: center;\n}\n.message[data-v-fef4403e] {\r\n  font-size: 40px;\r\n  text-align: center;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=template&id=fef4403e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=template&id=fef4403e&scoped=true& ***!
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
  return _c(
    "div",
    [
      _vm.getTipo
        ? [
            _vm.getTipo === 1
              ? [_c("VerBacteria")]
              : _vm.getTipo === 2
              ? [_c("VerHongo")]
              : _vm.getTipo === 3
              ? [_c("VerLevadura")]
              : _vm.getTipo === 4
              ? [_c("VerActinomiceto")]
              : [_vm._m(0)]
          ]
        : [_vm._m(1)]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex-center position-ref full-height" }, [
      _c("div", { staticClass: "code" }, [_vm._v("La Cepa")]),
      _vm._v(" "),
      _c("div", { staticClass: "message", staticStyle: { padding: "10px" } }, [
        _vm._v("No Existe")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container mt-5" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12 d-flex justify-content-center mt-5" },
          [
            _c("div", { staticClass: "loader mt-5" }, [
              _c("div", { staticClass: "ball-spin-fade-loader mt-5" }, [
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
                _c("div"),
                _vm._v(" "),
                _c("div")
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=template&id=6a29a450&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=template&id=6a29a450& ***!
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
    { staticClass: "tabs-animation" },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "card border-dark mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v("Cepa Microbiana - Actinomiceto")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-striped" }, [
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _c("th", [_vm._v("Codigo")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.codigo))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Grupo Microbiano")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getGrupoCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Genero")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getGeneroCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Especie")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getEspecieCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Reino")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getReinoCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Phylum")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getPhylumCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Clase")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getClaseCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Orden")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getOrdenCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Estado")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.estado))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Origen")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.origen))])
                        ]),
                        _vm._v(" "),
                        _vm.getCepa.cepa.otras_caract
                          ? [
                              _c("tr", [
                                _c("th", [_vm._v("Otras Características:")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.getCepa.cepa.otras_caract))
                                ])
                              ])
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "card border-dark mb-3" }, [
              _c("div", { staticClass: "card-header d-flex" }, [
                _vm._v("\n            Exportar a PDF\n            "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-icon btn-icon-only btn-pill btn btn-outline-success ml-auto",
                    attrs: { disabled: _vm.btnTodoDisabled },
                    on: {
                      click: function($event) {
                        return _vm.imprimir("todo")
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-print" }),
                    _vm._v("\n              TODO\n            ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "exampleCustomMutlipleSelect" } },
                    [_vm._v("Selecciona lo que deseas Imprimir")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectImprimir,
                          expression: "selectImprimir"
                        }
                      ],
                      class: [
                        "custom-select",
                        _vm.errorSelect ? "is-invalid" : ""
                      ],
                      attrs: { multiple: "", type: "select" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.selectImprimir = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "cepa" } }, [
                        _vm._v("Cepa")
                      ]),
                      _vm._v(" "),
                      _vm.getCaractMacro != ""
                        ? [
                            _c("option", { attrs: { value: "caract-macro" } }, [
                              _vm._v("Características Macroscópicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getCaractMicro
                        ? [
                            _c("option", { attrs: { value: "caract-micro" } }, [
                              _vm._v("Características Microscópicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getIdentiBioqui
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "identi-bioqui" } },
                              [_vm._v("Identificación Bioquímica")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getOtrasCaract
                        ? [
                            _c("option", { attrs: { value: "otras-caract" } }, [
                              _vm._v("Otras Características")
                            ])
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errorSelect
                    ? _c("em", { staticClass: "error invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errorSelect))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { disabled: _vm.btnSeleccionadoDisabled },
                    on: {
                      click: function($event) {
                        return _vm.imprimir("select")
                      }
                    }
                  },
                  [_vm._v("Solo lo Seleccionado")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.getCaractMacro != ""
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Macroscópicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("macro")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractMacro
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(3, function(item, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-md-4" },
                          [
                            _c(
                              "div",
                              { staticClass: "card" },
                              [
                                _vm.getCaractMacro[index]
                                  ? [
                                      _c("img", {
                                        staticClass: "card-img-top",
                                        attrs: {
                                          src:
                                            _vm.getCaractMacro[index]
                                              .imagenPublica
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "card-body overflow-auto"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            { staticClass: "card-title" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.getCaractMacro[index]
                                                    .medio
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "table-responsive" },
                                            [
                                              _c(
                                                "table",
                                                {
                                                  staticClass:
                                                    "table table-striped"
                                                },
                                                [
                                                  _c("tbody", [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Textura:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroActinomicetosById(
                                                              {
                                                                tipo: "textura",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].textura_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Color:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroActinomicetosById(
                                                              {
                                                                tipo: "color",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].color_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Forma:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroActinomicetosById(
                                                              {
                                                                tipo: "forma",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].forma_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Superficie:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroActinomicetosById(
                                                              {
                                                                tipo:
                                                                  "superficie",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ]
                                                                    .superficie_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Borde:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroActinomicetosById(
                                                              {
                                                                tipo: "borde",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].borde_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Pigmento:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroActinomicetosById(
                                                              {
                                                                tipo:
                                                                  "pigmento",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].pigmento_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Secreción de Geosminas:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.primeraMayus(
                                                              _vm
                                                                .getCaractMacro[
                                                                index
                                                              ]
                                                                .secrecion_geosminas
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.getCaractMacro[index].otras_caract
                                            ? [
                                                _c("p", [
                                                  _c("b", [
                                                    _vm._v(
                                                      "Otras Características:"
                                                    )
                                                  ]),
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(
                                                        _vm.getCaractMacro[
                                                          index
                                                        ].otras_caract
                                                      ) +
                                                      "\n                    "
                                                  )
                                                ])
                                              ]
                                            : _vm._e()
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "card-footer" },
                                        [
                                          _c(
                                            "small",
                                            { staticClass: "text-muted" },
                                            [
                                              _c("b", [_vm._v("Creada:")]),
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.modificarFecha(
                                                      _vm.getCaractMacro[index]
                                                        .created_at
                                                    )
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  : [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-body text-center mb-5"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            { staticClass: "card-title mt-5" },
                                            [
                                              _vm._v(
                                                "Medio " +
                                                  _vm._s(item) +
                                                  " No registrado"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                              ],
                              2
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getCaractMicro
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Microscópicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("micro")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractMicro
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.micro != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-3 ml-5 mb-1 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: {
                                          id: 1,
                                          imagenes: _vm.imagenes.micro
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(0)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("th", [_vm._v("Tinción de Gram:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.getInfoCaractMicroActinomicetosById(
                                                {
                                                  tipo: "tincion",
                                                  id:
                                                    _vm.getCaractMicro
                                                      .tinciongram_id
                                                }
                                              ).nombre
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Forma:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.getInfoCaractMicroActinomicetosById(
                                                {
                                                  tipo: "forma",
                                                  id:
                                                    _vm.getCaractMicro.forma_id
                                                }
                                              ).nombre
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Micelío:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.getInfoCaractMicroActinomicetosById(
                                                {
                                                  tipo: "micelio",
                                                  id:
                                                    _vm.getCaractMicro
                                                      .micelio_id
                                                }
                                              ).nombre
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Conidióforo:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.getInfoCaractMicroActinomicetosById(
                                                {
                                                  tipo: "conidioforo",
                                                  id:
                                                    _vm.getCaractMicro
                                                      .conidioforo_id
                                                }
                                              ).nombre
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v(
                                            "Forma Estructura de Reproducción:"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .forma_estructura_reproduccion
                                              )
                                            )
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getCaractMicro.otras_caract
                                ? [
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Otras Características:")
                                      ]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.getCaractMicro.otras_caract
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getCaractMicro.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getIdentiBioqui
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Identificación Bioquímica")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("identi")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarIdentiBioqui
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.identi != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 ml-5 mb-2 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: {
                                          id: 2,
                                          imagenes: _vm.imagenes.identi
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(1)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c(
                                      "tbody",
                                      [
                                        _c("tr", [
                                          _c("th", [_vm._v("Oxidasa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui.oxidasa
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Caseina:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui.caseina
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Nitratos:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui.nitrato
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Catalasa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui.catalasa
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Citrato:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui.citrato
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [
                                            _vm._v("Hidrolisís de la Úrea:")
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui.hidro_urea
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [
                                            _vm._v("Hidrolisís de la Gelatina:")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "3" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.primeraMayus(
                                                    _vm.getIdentiBioqui
                                                      .hidro_gelatina
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [
                                            _vm._v(
                                              "Sensibilidad a Antibióticos:"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "3" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.primeraMayus(
                                                    _vm.getIdentiBioqui
                                                      .sensi_antibioticos
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._m(2),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Lactosa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui
                                                    .fer_lactosa
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Manitol:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui
                                                    .fer_manitol
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Inositol:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui
                                                    .fer_inositol
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Sacarosa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getIdentiBioqui
                                                    .fer_sacarosa
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _vm.getIdentiBioqui.fer_otro
                                          ? [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Otros Azúcares:")
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "3" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.primeraMayus(
                                                          _vm.getIdentiBioqui
                                                            .fer_otro
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getIdentiBioqui.otras_caract
                                ? [
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Otras Características:")
                                      ]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.getIdentiBioqui.otras_caract
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getIdentiBioqui.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getOtrasCaract
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Otras Características")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("otras")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarOtrasCaract
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.otras != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 ml-5 mb-2 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: {
                                          id: 3,
                                          imagenes: _vm.imagenes.otras
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(3)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v("Fijación Nitrogeno:")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract
                                                  .fijacion_nitrogeno
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Producción AIA:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract
                                                  .produccion_aia
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Giberelinas:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract.giberelinas
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v("Producción Sideróforos:")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract
                                                  .produccion_sideroforos
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v("Solubilización de Fósforo:")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract
                                                  .solubili_fosforo
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Producción PHA:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract
                                                  .produccion_pha
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v(
                                            "Alta Producción De Antibióticos:"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract
                                                  .alta_produc_antibioticos
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v("Actividades Enzimáticas:")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract
                                                  .activi_enzimaticas
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Antagonismos:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getOtrasCaract.antagonismos
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr")
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getOtrasCaract.otras_caract
                                ? [
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Otras Características:")
                                      ]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.getOtrasCaract.otras_caract
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getOtrasCaract.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
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
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "text-center", attrs: { colspan: "4" } }, [
        _vm._v("Fermentación")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=template&id=188db8d0&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=template&id=188db8d0& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "card border-dark mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v("Cepa Microbiana - Bacteria")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-striped" }, [
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _c("th", [_vm._v("Codigo")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.codigo))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Grupo Microbiano")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getGrupoCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Genero")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getGeneroCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Especie")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getEspecieCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Estado")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.estado))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Origen")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.origen))])
                        ]),
                        _vm._v(" "),
                        _vm.getCepa.cepa.otras_caract
                          ? [
                              _c("tr", [
                                _c("th", [_vm._v("Otras Características:")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.getCepa.cepa.otras_caract))
                                ])
                              ])
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "card border-dark mb-3" }, [
              _c("div", { staticClass: "card-header d-flex" }, [
                _vm._v("\n            Exportar a PDF\n            "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-icon btn-icon-only btn-pill btn btn-outline-success ml-auto",
                    attrs: { disabled: _vm.btnTodoDisabled },
                    on: {
                      click: function($event) {
                        return _vm.imprimir("todo")
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-print" }),
                    _vm._v("\n              TODO\n            ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "exampleCustomMutlipleSelect" } },
                    [_vm._v("Selecciona lo que deseas Imprimir")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectImprimir,
                          expression: "selectImprimir"
                        }
                      ],
                      class: [
                        "custom-select",
                        _vm.errorSelect ? "is-invalid" : ""
                      ],
                      attrs: { multiple: "", type: "select" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.selectImprimir = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "cepa" } }, [
                        _vm._v("Cepa")
                      ]),
                      _vm._v(" "),
                      _vm.getCaractMacro != ""
                        ? [
                            _c("option", { attrs: { value: "caract-macro" } }, [
                              _vm._v("Características Macroscópicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getCaractMicro
                        ? [
                            _c("option", { attrs: { value: "caract-micro" } }, [
                              _vm._v("Características Microscópicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getCaractBioqui
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "caract-bioqui" } },
                              [_vm._v("Características Bioquímicas")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getCaractFisio
                        ? [
                            _c("option", { attrs: { value: "caract-fisio" } }, [
                              _vm._v("Características Fisiológicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getIdentiMolecu
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "identi-molecu" } },
                              [_vm._v("Identificación Molecular")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getMetodoConser != ""
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "metodo-conser" } },
                              [_vm._v("Métodos De Conservación")]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errorSelect
                    ? _c("em", { staticClass: "error invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errorSelect))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { disabled: _vm.btnSeleccionadoDisabled },
                    on: {
                      click: function($event) {
                        return _vm.imprimir("select")
                      }
                    }
                  },
                  [_vm._v("Solo lo Seleccionado")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.getCaractMacro != ""
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Macroscópicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("macro")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractMacro
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(3, function(item, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-md-4" },
                          [
                            _c(
                              "div",
                              { staticClass: "card" },
                              [
                                _vm.getCaractMacro[index]
                                  ? [
                                      _c("img", {
                                        staticClass: "card-img-top",
                                        attrs: {
                                          src:
                                            _vm.getCaractMacro[index]
                                              .imagenPublica
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "card-body overflow-auto"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            { staticClass: "card-title" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.getCaractMacro[index]
                                                    .medio
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "table-responsive" },
                                            [
                                              _c(
                                                "table",
                                                {
                                                  staticClass:
                                                    "table table-striped"
                                                },
                                                [
                                                  _c("tbody", [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Forma:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroBacteriasById(
                                                              {
                                                                tipo: "forma",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].forma_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Borde:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroBacteriasById(
                                                              {
                                                                tipo: "borde",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].borde_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Detalle Óptico:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroBacteriasById(
                                                              {
                                                                tipo: "detalle",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ]
                                                                    .detalleoptico_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Elevación:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroBacteriasById(
                                                              {
                                                                tipo:
                                                                  "elevacion",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].elevacion_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Superficie:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroBacteriasById(
                                                              {
                                                                tipo:
                                                                  "superficie",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ]
                                                                    .superficie_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Color:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroBacteriasById(
                                                              {
                                                                tipo: "color",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].color_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Tamaño:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.primeraMayus(
                                                              _vm
                                                                .getCaractMacro[
                                                                index
                                                              ].tamano
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.getCaractMacro[index].otras_caract
                                            ? [
                                                _c("p", [
                                                  _c("b", [
                                                    _vm._v(
                                                      "Otras Características:"
                                                    )
                                                  ]),
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(
                                                        _vm.getCaractMacro[
                                                          index
                                                        ].otras_caract
                                                      ) +
                                                      "\n                    "
                                                  )
                                                ])
                                              ]
                                            : _vm._e()
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "card-footer" },
                                        [
                                          _c(
                                            "small",
                                            { staticClass: "text-muted" },
                                            [
                                              _c("b", [_vm._v("Creada:")]),
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.modificarFecha(
                                                      _vm.getCaractMacro[index]
                                                        .created_at
                                                    )
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  : [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-body text-center mb-5"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            { staticClass: "card-title mt-5" },
                                            [
                                              _vm._v(
                                                "Medio " +
                                                  _vm._s(item) +
                                                  " No registrado"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                              ],
                              2
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getCaractMicro
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Microscópicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("micro")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractMicro
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.micro != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-3 ml-5 mb-1 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: {
                                          id: 1,
                                          imagenes: _vm.imagenes.micro
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(0)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("th", [_vm._v("Forma:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.getInfoCaractMicroBacteriasById(
                                                {
                                                  tipo: "forma",
                                                  id:
                                                    _vm.getCaractMicro.forma_id
                                                }
                                              ).nombre
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Ordenamiento:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro.ordenamiento
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Tinción de Gram:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro.tincion_gram
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v("Tinción de Esporas:")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .tincion_esporas
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "tr",
                                        [
                                          _c("th", [
                                            _vm._v("Ubicación de la Espora:")
                                          ]),
                                          _vm._v(" "),
                                          _vm.getCaractMicro.ubicacion_esporas
                                            ? [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.primeraMayus(
                                                        _vm.getCaractMicro
                                                          .ubicacion_esporas
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            : [_c("td", [_vm._v("NO APLICA")])]
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v("Tinción de Cápsula:")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .tincion_capsula
                                              )
                                            )
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getCaractMicro.otras_caract
                                ? [
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Otras Características:")
                                      ]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.getCaractMicro.otras_caract
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getCaractMicro.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getCaractFisio
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Fisiológicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("fisio")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractFisio
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.fisio != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 ml-5 mb-2 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: {
                                          id: 2,
                                          imagenes: _vm.imagenes.fisio
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(1)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v("Acido Indolacético:")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractFisio
                                                  .acido_indolacetico
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Fósforo:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractFisio.fosforo
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Sideróforos:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractFisio.sideroforos
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Nitrógeno:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractFisio.nitrogeno
                                              )
                                            )
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getCaractFisio.otras_caract
                                ? [
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Otras Características:")
                                      ]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.getCaractFisio.otras_caract
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getCaractFisio.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getCaractBioqui
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Bioquímicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("bioqui")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractBioqui
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.bioqui != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 ml-5 mb-2 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: {
                                          id: 3,
                                          imagenes: _vm.imagenes.bioqui
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(2)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c(
                                      "tbody",
                                      [
                                        _c("tr", [
                                          _c("th", [_vm._v("Oxidasa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.oxidasa
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Catalasa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.catalasa
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Citrato:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.citrato
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("TSI:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.tsi
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Glucosa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.glucosa
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Lactosa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.lactosa
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Manitol:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.manitol
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Xilosa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.xilosa
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Arabinosa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.arabinosa
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Sacarosa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.sacarosa
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("LIA:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.lia
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("SIM:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.sim
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("RM:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.rm
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("VP:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.vp
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Nitrato:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.nitrato
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Caldo Úrea:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.caldo_urea
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("OF:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.of
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Almidón:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.almidon
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Lecitinasa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.lecitinasa
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Lipasa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.lipasa
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _vm.getCaractBioqui.otros_azucares
                                          ? [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { attrs: { colspan: "1" } },
                                                  [_vm._v("Otros Azúcares:")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "3" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.primeraMayus(
                                                          _vm.getCaractBioqui
                                                            .otros_azucares
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.getCaractBioqui.otras_enzimas
                                          ? [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { attrs: { colspan: "1" } },
                                                  [_vm._v("Otros Enzimas:")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "3" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.primeraMayus(
                                                          _vm.getCaractBioqui
                                                            .otras_enzimas
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { attrs: { colspan: "1" } },
                                            [
                                              _vm._v(
                                                "Hidrolisís de la Caseína:"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "3" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.primeraMayus(
                                                    _vm.getCaractBioqui
                                                      .hidro_caseina
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { attrs: { colspan: "1" } },
                                            [
                                              _vm._v(
                                                "Hidrolisís de la Gelatina:"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "3" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.primeraMayus(
                                                    _vm.getCaractBioqui
                                                      .hidro_gelatina
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { attrs: { colspan: "1" } },
                                            [_vm._v("Crecimiento en Nacl:")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "3" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.primeraMayus(
                                                    _vm.getCaractBioqui
                                                      .creci_nacl
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { attrs: { colspan: "1" } },
                                            [_vm._v("Hidrolisís de la Úrea:")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "3" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.primeraMayus(
                                                    _vm.getCaractBioqui
                                                      .hidro_urea
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { attrs: { colspan: "1" } },
                                            [
                                              _vm._v(
                                                "Crecimiento en Diferentes Temperaturas:"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "3" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.primeraMayus(
                                                    _vm.getCaractBioqui
                                                      .creci_dif_temp
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ])
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getCaractBioqui.otras_caract
                                ? [
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Otras Características:")
                                      ]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.getCaractBioqui.otras_caract
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getCaractBioqui.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getIdentiMolecu
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Identificación Molecular")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("identi")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarIdentiMolecu
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "container" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "row justify-content-md-center"
                                },
                                [
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-11" }, [
                                    _c(
                                      "div",
                                      { staticClass: "table-responsive" },
                                      [
                                        _c(
                                          "table",
                                          {
                                            staticClass: "table table-striped"
                                          },
                                          [
                                            _c("thead", [
                                              _c("th"),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Nombre")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Secuencia")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Producto")]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.getGrupoCepa.nombre
                                                  )
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("tbody", [
                                              _c("tr", [
                                                _c("th", [_vm._v("F")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getIdentiMolecu
                                                        .nombre_forward
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getIdentiMolecu
                                                        .secuen_forward
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getIdentiMolecu
                                                        .produc_forward
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getGeneroCepa.nombre +
                                                        " " +
                                                        _vm.getEspecieCepa
                                                          .nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("R")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getIdentiMolecu
                                                        .nombre_reversed
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getIdentiMolecu
                                                        .secuen_reversed
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getIdentiMolecu
                                                        .produc_reversed
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getGeneroCepa.nombre +
                                                        " " +
                                                        _vm.getEspecieCepa
                                                          .nombre
                                                    )
                                                  )
                                                ])
                                              ])
                                            ])
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Informe de Secuenciación:")
                                      ]),
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(
                                            _vm.getIdentiMolecu
                                              .obser_secuenciacion
                                          ) +
                                          "\n                      "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getIdentiMolecu.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row mt-3 justify-content-center" },
                      [
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("div", { staticClass: "card" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-3 ml-3 mr-3" }, [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: {
                                  src: _vm.getIdentiMolecu.img_pcrPublica
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("div", { staticClass: "card" }, [
                            _vm._m(5),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-3 ml-3 mr-3" }, [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: {
                                  src: _vm.getIdentiMolecu.img_secuenPublica
                                }
                              })
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getMetodoConser != ""
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Métodos De Conservación")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("metodo")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarMetodosConser
                ? _c("div", { staticClass: "container mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila1, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserBacteriasById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.tipo_id === 4
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Tipo Agar:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoMetodoConserBacteriasById(
                                                              {
                                                                tipo:
                                                                  "tipo_agar",
                                                                id:
                                                                  metodo.tipo_agar_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Número de Réplicas:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      metodo.numero_replicas
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Recuento Microgota:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      metodo.recuento_microgota
                                                    )
                                                  )
                                                ])
                                              ])
                                            ],
                                            2
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila2, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserBacteriasById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.tipo_id === 4
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Tipo Agar:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoMetodoConserBacteriasById(
                                                              {
                                                                tipo:
                                                                  "tipo_agar",
                                                                id:
                                                                  metodo.tipo_agar_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Número de Réplicas:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      metodo.numero_replicas
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Recuento Microgota:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      metodo.recuento_microgota
                                                    )
                                                  )
                                                ])
                                              ])
                                            ],
                                            2
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila3, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserBacteriasById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.tipo_id === 4
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Tipo Agar:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoMetodoConserBacteriasById(
                                                              {
                                                                tipo:
                                                                  "tipo_agar",
                                                                id:
                                                                  metodo.tipo_agar_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Número de Réplicas:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      metodo.numero_replicas
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Recuento Microgota:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      metodo.recuento_microgota
                                                    )
                                                  )
                                                ])
                                              ])
                                            ],
                                            2
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                : _vm._e()
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
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1 mt-5" }, [
      _c("h5", [_c("b", [_vm._v("PCR")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Imagen Pcr")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Imagen Secuenciación")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=template&id=6448c700&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=template&id=6448c700& ***!
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
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "card border-dark mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v("Cepa Microbiana - Hongo")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-striped" }, [
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _c("th", [_vm._v("Codigo")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.codigo))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Grupo Microbiano")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getGrupoCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Genero")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getGeneroCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Especie")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getEspecieCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Clase")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getClaseCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Orden")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getOrdenCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Familia")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getFamiliaCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Phylum")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getPhylumCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Estado")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.estado))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Origen")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.origen))])
                        ]),
                        _vm._v(" "),
                        _vm.getCepa.cepa.otras_caract
                          ? [
                              _c("tr", [
                                _c("th", [_vm._v("Otras Características:")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.getCepa.cepa.otras_caract))
                                ])
                              ])
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "card border-dark mb-3" }, [
              _c("div", { staticClass: "card-header d-flex" }, [
                _vm._v("\n            Exportar a PDF\n            "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-icon btn-icon-only btn-pill btn btn-outline-success ml-auto",
                    attrs: { disabled: _vm.btnTodoDisabled },
                    on: {
                      click: function($event) {
                        return _vm.imprimir("todo")
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-print" }),
                    _vm._v("\n              TODO\n            ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "exampleCustomMutlipleSelect" } },
                    [_vm._v("Selecciona lo que deseas Imprimir")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectImprimir,
                          expression: "selectImprimir"
                        }
                      ],
                      class: [
                        "custom-select",
                        _vm.errorSelect ? "is-invalid" : ""
                      ],
                      attrs: { multiple: "", type: "select" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.selectImprimir = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "cepa" } }, [
                        _vm._v("Cepa")
                      ]),
                      _vm._v(" "),
                      _vm.getCaractMacro != ""
                        ? [
                            _c("option", { attrs: { value: "caract-macro" } }, [
                              _vm._v("Características Macroscópicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getCaractMicro
                        ? [
                            _c("option", { attrs: { value: "caract-micro" } }, [
                              _vm._v("Características Microscópicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getCaractBioqui
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "caract-bioqui" } },
                              [_vm._v("Características Bioquímicas")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getIdentiMolecu
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "identi-molecu" } },
                              [_vm._v("Identificación Molecular")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getMetodoConser != ""
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "metodo-conser" } },
                              [_vm._v("Métodos De Conservación")]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errorSelect
                    ? _c("em", { staticClass: "error invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errorSelect))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { disabled: _vm.btnSeleccionadoDisabled },
                    on: {
                      click: function($event) {
                        return _vm.imprimir("select")
                      }
                    }
                  },
                  [_vm._v("Solo lo Seleccionado")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.getCaractMacro != ""
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Macroscópicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("macro")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractMacro
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(3, function(item, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-md-4" },
                          [
                            _c(
                              "div",
                              { staticClass: "card" },
                              [
                                _vm.getCaractMacro[index]
                                  ? [
                                      _c("img", {
                                        staticClass: "card-img-top",
                                        attrs: {
                                          src:
                                            _vm.getCaractMacro[index]
                                              .imagenPublica
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "card-body overflow-auto"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            { staticClass: "card-title" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.getCaractMacro[index]
                                                    .medio
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "table-responsive" },
                                            [
                                              _c(
                                                "table",
                                                {
                                                  staticClass:
                                                    "table table-striped"
                                                },
                                                [
                                                  _c("tbody", [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Color:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroHongosById(
                                                              {
                                                                tipo: "color",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].color_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Textura:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroHongosById(
                                                              {
                                                                tipo: "textura",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].textura_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Características del reverso:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.primeraMayus(
                                                              _vm
                                                                .getCaractMacro[
                                                                index
                                                              ]
                                                                .caracteristicas_reverso
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "card-footer" },
                                        [
                                          _c(
                                            "small",
                                            { staticClass: "text-muted" },
                                            [
                                              _c("b", [_vm._v("Creada:")]),
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.modificarFecha(
                                                      _vm.getCaractMacro[index]
                                                        .created_at
                                                    )
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  : [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-body text-center mb-5"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            { staticClass: "card-title mt-5" },
                                            [
                                              _vm._v(
                                                "Medio " +
                                                  _vm._s(item) +
                                                  " No registrado"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                              ],
                              2
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getCaractMicro
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Microscópicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("micro")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractMicro
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.micro != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-3 ml-5 mb-1 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: { imagenes: _vm.imagenes.micro }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(0)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c(
                                      "tbody",
                                      [
                                        _c("tr", [
                                          _c("th", [_vm._v("Conidióforo:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.getInfoCaractMicroHongosById(
                                                  {
                                                    tipo: "conidioforo",
                                                    id:
                                                      _vm.getCaractMicro
                                                        .conidioforo_id
                                                  }
                                                ).nombre
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Fiálides:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractMicro.fialides
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _vm.getCaractMicro.fialides ===
                                        "Presencia"
                                          ? [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Forma Fiálides:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.primeraMayus(
                                                        _vm.getCaractMicro
                                                          .fialides_forma
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _vm.getCaractMicro
                                                .fialides_otra_caracteristica
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Otras características Fiálides:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.primeraMayus(
                                                              _vm.getCaractMicro
                                                                .fialides_otra_caracteristica
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e()
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Vesícula:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractMicro.vesicula
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Espora Asexual:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.getInfoCaractMicroHongosById(
                                                  {
                                                    tipo: "asexual",
                                                    id:
                                                      _vm.getCaractMicro
                                                        .espora_asexual_id
                                                  }
                                                ).nombre
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _vm.getCaractMicro.espora_asexual_id ===
                                        2
                                          ? [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Tamaño Conidiosporas:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.primeraMayus(
                                                        _vm.getCaractMicro
                                                          .esporas_asexuales_conidios_tamano
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Color Conidiosporas:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.primeraMayus(
                                                        _vm.getCaractMicro
                                                          .esporas_asexuales_conidios_color
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v("Forma Conidiosporas:")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.primeraMayus(
                                                        _vm.getCaractMicro
                                                          .esporas_asexuales_conidios_forma
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _vm.getCaractMicro
                                                .esporas_asexuales_conidios_otras
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Otras características Conidiosporas:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.primeraMayus(
                                                              _vm.getCaractMicro
                                                                .esporas_asexuales_conidios_otras
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e()
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Espora Sexual:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.getInfoCaractMicroHongosById(
                                                  {
                                                    tipo: "sexual",
                                                    id:
                                                      _vm.getCaractMicro
                                                        .espora_sexual_id
                                                  }
                                                ).nombre
                                              )
                                            )
                                          ])
                                        ])
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getCaractMicro.otras_estructuras
                                ? [
                                    _c("p", [
                                      _c("b", [_vm._v("Otras estructuras:")]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.getCaractMicro.otras_estructuras
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getCaractMicro.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getCaractBioqui
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Bioquímicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("bioqui")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractBioqui
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.bioqui != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 ml-5 mb-2 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: { imagenes: _vm.imagenes.bioqui }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(1)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                { staticClass: "table table-striped" },
                                [
                                  _c(
                                    "tbody",
                                    [
                                      _c("tr", [
                                        _c("th", [_vm._v("Enzimas:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractBioqui.enzimas
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Azúcares:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractBioqui.azucares
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _vm.getCaractBioqui.otras_caracteristicas
                                        ? [
                                            _c("tr", [
                                              _c("th", [
                                                _vm._v("Otras Características:")
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.primeraMayus(
                                                      _vm.getCaractBioqui
                                                        .otras_caracteristicas
                                                    )
                                                  )
                                                )
                                              ])
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getCaractBioqui.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getIdentiMolecu
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Identificación Molecular")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("identi")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarIdentiMolecu
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "container" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "row justify-content-md-center"
                                },
                                [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-md-11" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "table-responsive" },
                                        [
                                          _c(
                                            "table",
                                            {
                                              staticClass: "table table-striped"
                                            },
                                            [
                                              _c("thead", [
                                                _c("th"),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Nombre")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Secuencia")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Producto")]),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getGrupoCepa.nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tbody", [
                                                _c("tr", [
                                                  _c("th", [_vm._v("F")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .nombre_forward
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .secuencia_forward
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .producto_forward
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getGeneroCepa
                                                          .nombre +
                                                          " " +
                                                          _vm.getEspecieCepa
                                                            .nombre
                                                      )
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("th", [_vm._v("R")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .nombre_reversed
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .secuencia_reversed
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .producto_reversed
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getGeneroCepa
                                                          .nombre +
                                                          " " +
                                                          _vm.getEspecieCepa
                                                            .nombre
                                                      )
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { colspan: "2" } },
                                                    [_vm._v("Condiciones PCR")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "3" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getIdentiMolecu
                                                            .condiciones_pcr
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { colspan: "2" } },
                                                    [_vm._v("BLAST")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "3" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getIdentiMolecu
                                                            .blast
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { colspan: "2" } },
                                                    [
                                                      _vm._v(
                                                        "Análisis Filogenético"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "3" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getIdentiMolecu
                                                            .analisis_filogenetico
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ])
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.getIdentiMolecu.observaciones
                                        ? [
                                            _c("p", [
                                              _c("b", [
                                                _vm._v("observaciones:")
                                              ]),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.getIdentiMolecu
                                                      .observaciones
                                                  ) +
                                                  "\n                        "
                                              )
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getIdentiMolecu.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row mt-3 justify-content-center" },
                      [
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("div", { staticClass: "card" }, [
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-3 ml-3 mr-3" }, [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: {
                                  src: _vm.getIdentiMolecu.imagen_pcrPublica
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("div", { staticClass: "card" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-3 ml-3 mr-3" }, [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: {
                                  src: _vm.getIdentiMolecu.imagen_blastPublica
                                }
                              })
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getMetodoConser != ""
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Métodos De Conservación")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("metodo")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarMetodosConser
                ? _c("div", { staticClass: "container mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila1, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserHongosById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.numero_replicas
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Réplicas:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_replicas
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.numero_pases
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Pases:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_pases
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.recuento_microgota
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Recuento Microgota:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.recuento_microgota
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.medio_cultivo
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Medio de Cultivo:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.medio_cultivo
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      metodo.observaciones
                                        ? [
                                            _c("p", [
                                              _c("b", [
                                                _vm._v("observaciones:")
                                              ]),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(metodo.observaciones) +
                                                  "\n                    "
                                              )
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila2, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserHongosById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.numero_replicas
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Réplicas:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_replicas
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.numero_pases
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Pases:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_pases
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.recuento_microgota
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Recuento Microgota:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.recuento_microgota
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.medio_cultivo
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Medio de Cultivo:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.medio_cultivo
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      metodo.observaciones
                                        ? [
                                            _c("p", [
                                              _c("b", [
                                                _vm._v("observaciones:")
                                              ]),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(metodo.observaciones) +
                                                  "\n                    "
                                              )
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila3, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserHongosById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.numero_replicas
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Réplicas:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_replicas
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.numero_pases
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Pases:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_pases
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.recuento_microgota
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Recuento Microgota:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.recuento_microgota
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.medio_cultivo
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Medio de Cultivo:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.medio_cultivo
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      metodo.observaciones
                                        ? [
                                            _c("p", [
                                              _c("b", [
                                                _vm._v("observaciones:")
                                              ]),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(metodo.observaciones) +
                                                  "\n                    "
                                              )
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                : _vm._e()
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
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1 mt-5" }, [
      _c("h5", [_c("b", [_vm._v("PCR")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Imagen Pcr")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Imagen Blast")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=template&id=3a295870&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=template&id=3a295870& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "card border-dark mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v("Cepa Microbiana - Levadura")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-striped" }, [
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _c("th", [_vm._v("Codigo")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.codigo))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Grupo Microbiano")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getGrupoCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Genero")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getGeneroCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Especie")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getEspecieCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Clase")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getClaseCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Orden")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getOrdenCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Familia")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getFamiliaCepa.nombre))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Division")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getDivisionCepa.nombre))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Estado")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.estado))]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Origen")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.getCepa.cepa.origen))])
                        ]),
                        _vm._v(" "),
                        _vm.getCepa.cepa.otras_caract
                          ? [
                              _c("tr", [
                                _c("th", [_vm._v("Otras Características:")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.getCepa.cepa.otras_caract))
                                ])
                              ])
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "card border-dark mb-3" }, [
              _c("div", { staticClass: "card-header d-flex" }, [
                _vm._v("\n            Exportar a PDF\n            "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-icon btn-icon-only btn-pill btn btn-outline-success ml-auto",
                    attrs: { disabled: _vm.btnTodoDisabled },
                    on: {
                      click: function($event) {
                        return _vm.imprimir("todo")
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-print" }),
                    _vm._v("\n              TODO\n            ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _c("div", { staticClass: "position-relative form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "exampleCustomMutlipleSelect" } },
                    [_vm._v("Selecciona lo que deseas Imprimir")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectImprimir,
                          expression: "selectImprimir"
                        }
                      ],
                      class: [
                        "custom-select",
                        _vm.errorSelect ? "is-invalid" : ""
                      ],
                      attrs: { multiple: "", type: "select" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.selectImprimir = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "cepa" } }, [
                        _vm._v("Cepa")
                      ]),
                      _vm._v(" "),
                      _vm.getCaractMacro != ""
                        ? [
                            _c("option", { attrs: { value: "caract-macro" } }, [
                              _vm._v("Características Macroscópicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getCaractMicro
                        ? [
                            _c("option", { attrs: { value: "caract-micro" } }, [
                              _vm._v("Características Microscópicas")
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getCaractBioqui
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "caract-bioqui" } },
                              [_vm._v("Características Bioquímicas")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getIdentiMolecu
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "identi-molecu" } },
                              [_vm._v("Identificación Molecular")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.getMetodoConser != ""
                        ? [
                            _c(
                              "option",
                              { attrs: { value: "metodo-conser" } },
                              [_vm._v("Métodos De Conservación")]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errorSelect
                    ? _c("em", { staticClass: "error invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errorSelect))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { disabled: _vm.btnSeleccionadoDisabled },
                    on: {
                      click: function($event) {
                        return _vm.imprimir("select")
                      }
                    }
                  },
                  [_vm._v("Solo lo Seleccionado")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.getCaractMacro != ""
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Macroscópicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("macro")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractMacro
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(3, function(item, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-md-4" },
                          [
                            _c(
                              "div",
                              { staticClass: "card" },
                              [
                                _vm.getCaractMacro[index]
                                  ? [
                                      _c("img", {
                                        staticClass: "card-img-top",
                                        attrs: {
                                          src:
                                            _vm.getCaractMacro[index]
                                              .imagenPublica
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "card-body overflow-auto"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            { staticClass: "card-title" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.getCaractMacro[index]
                                                    .medio
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "table-responsive" },
                                            [
                                              _c(
                                                "table",
                                                {
                                                  staticClass:
                                                    "table table-striped"
                                                },
                                                [
                                                  _c("tbody", [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Color:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroLevadurasById(
                                                              {
                                                                tipo: "color",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].color_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v("Textura:")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getInfoCaractMacroLevadurasById(
                                                              {
                                                                tipo: "textura",
                                                                id:
                                                                  _vm
                                                                    .getCaractMacro[
                                                                    index
                                                                  ].textura_id
                                                              }
                                                            ).nombre
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Topografía de la Superficie:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.primeraMayus(
                                                              _vm
                                                                .getCaractMacro[
                                                                index
                                                              ]
                                                                .topografia_superficie
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Borde de la Colonia:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.primeraMayus(
                                                              _vm
                                                                .getCaractMacro[
                                                                index
                                                              ].borde_colonia
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "card-footer" },
                                        [
                                          _c(
                                            "small",
                                            { staticClass: "text-muted" },
                                            [
                                              _c("b", [_vm._v("Creada:")]),
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.modificarFecha(
                                                      _vm.getCaractMacro[index]
                                                        .created_at
                                                    )
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  : [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-body text-center mb-5"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            { staticClass: "card-title mt-5" },
                                            [
                                              _vm._v(
                                                "Medio " +
                                                  _vm._s(item) +
                                                  " No registrado"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                              ],
                              2
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getCaractMicro
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Microscópicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("micro")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractMicro
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.micro != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-3 ml-5 mb-1 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: { imagenes: _vm.imagenes.micro }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(0)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("th", [_vm._v("Hifas:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro.hifas
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Cápsula:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro.capsula
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Balistoconidias:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .balistoconidias
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Artroconidias:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro.artroconidias
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Pseudohifas:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro.pseudohifas
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Blastoconidias:")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .blastoconidias
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v("Producción de Clamidosporas:")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .produccion_clamidosporas
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [
                                          _vm._v(
                                            "Inducción de Filamentización:"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .induccion_filamentizacion
                                              )
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [
                                          _vm._v(
                                            "Producción de Tubo Germinativo:"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .produccion_tubo_germinativo
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [
                                          _vm._v(
                                            "Formación de Asco y Ascosporas:"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.primeraMayus(
                                                _vm.getCaractMicro
                                                  .formacion_asco_y_ascosporas
                                              )
                                            )
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getCaractMicro.otras_caract
                                ? [
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Otras Características:")
                                      ]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.getCaractMicro.otras_caract
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getCaractMicro.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getCaractBioqui
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Características Bioquímicas")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("bioqui")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarCaractBioqui
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _vm.imagenes.bioqui != ""
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 ml-5 mb-2 mr-5" },
                                    [
                                      _c("Carousel", {
                                        attrs: { imagenes: _vm.imagenes.bioqui }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(1)
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-striped" },
                                  [
                                    _c(
                                      "tbody",
                                      [
                                        _c("tr", [
                                          _c("th", [_vm._v("Ureasa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.ureasa
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Fenol Oxidasa:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui
                                                    .fenol_oxidasa
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "tr",
                                          [
                                            _c(
                                              "th",
                                              {
                                                staticClass: "text-center",
                                                attrs: { rowspan: _vm.rowTermo }
                                              },
                                              [_vm._v("Termotolerancia")]
                                            ),
                                            _vm._v(" "),
                                            _vm.getCaractBioqui
                                              .termotolerancia_37
                                              ? [
                                                  _c("th", [_vm._v("37°C")]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "2" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.primeraMayus(
                                                            _vm.getCaractBioqui
                                                              .termotolerancia_37
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              : _vm.getCaractBioqui
                                                  .termotolerancia_42
                                              ? [
                                                  _c("th", [_vm._v("42°C")]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "2" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.primeraMayus(
                                                            _vm.getCaractBioqui
                                                              .termotolerancia_42
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              : _vm.getCaractBioqui
                                                  .termotolerancia_45
                                              ? [
                                                  _c("th", [_vm._v("42°C")]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "2" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.primeraMayus(
                                                            _vm.getCaractBioqui
                                                              .termotolerancia_45
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              : [
                                                  _c("th", [_vm._v("42°C")]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "2" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.primeraMayus(
                                                            _vm.getCaractBioqui
                                                              .termotolerancia_otra
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _vm.getCaractBioqui
                                          .termotolerancia_42 &&
                                        _vm.getCaractBioqui.termotolerancia_37
                                          ? [
                                              _c("tr", [
                                                _c("th", [_vm._v("42°C")]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "2" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.primeraMayus(
                                                          _vm.getCaractBioqui
                                                            .termotolerancia_42
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.getCaractBioqui
                                          .termotolerancia_45 &&
                                        _vm.getCaractBioqui.termotolerancia_37
                                          ? [
                                              _c("tr", [
                                                _c("th", [_vm._v("45°C")]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "2" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.primeraMayus(
                                                          _vm.getCaractBioqui
                                                            .termotolerancia_45
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.getCaractBioqui
                                          .termotolerancia_otra &&
                                        _vm.getCaractBioqui.termotolerancia_37
                                          ? [
                                              _c("tr", [
                                                _c("th", [_vm._v("otra°")]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "2" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.primeraMayus(
                                                          _vm.getCaractBioqui
                                                            .termotolerancia_otra
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Crecimineto:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui
                                                    .crecimiento
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Nitratos:")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.primeraMayus(
                                                  _vm.getCaractBioqui.nitratos
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [
                                            _vm._v(
                                              "Producción de ácido a partir de algunos azúcares"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "1" } },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.primeraMayus(
                                                    _vm.getCaractBioqui
                                                      .fenol_oxidasa
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ])
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.getCaractBioqui.otras_caract
                                ? [
                                    _c("p", [
                                      _c("b", [
                                        _vm._v("Otras Características:")
                                      ]),
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.primeraMayus(
                                              _vm.getCaractBioqui.otras_caract
                                            )
                                          ) +
                                          "\n                  "
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getCaractBioqui.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getIdentiMolecu
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Identificación Molecular")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("identi")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarIdentiMolecu
                ? _c("div", { staticClass: "contaider mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "container" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "row justify-content-md-center"
                                },
                                [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-md-11" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "table-responsive" },
                                        [
                                          _c(
                                            "table",
                                            {
                                              staticClass: "table table-striped"
                                            },
                                            [
                                              _c("thead", [
                                                _c("th"),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Nombre")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Secuencia")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Producto")]),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getGrupoCepa.nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tbody", [
                                                _c("tr", [
                                                  _c("th", [_vm._v("F")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .nombre_forward
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .secuencia_forward
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .producto_forward
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getGeneroCepa
                                                          .nombre +
                                                          " " +
                                                          _vm.getEspecieCepa
                                                            .nombre
                                                      )
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("th", [_vm._v("R")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .nombre_reversed
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .secuencia_reversed
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getIdentiMolecu
                                                          .producto_reversed
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getGeneroCepa
                                                          .nombre +
                                                          " " +
                                                          _vm.getEspecieCepa
                                                            .nombre
                                                      )
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { colspan: "2" } },
                                                    [_vm._v("Condiciones PCR")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "3" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getIdentiMolecu
                                                            .condiciones_pcr
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { colspan: "2" } },
                                                    [_vm._v("BLAST")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "3" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getIdentiMolecu
                                                            .blast
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { colspan: "2" } },
                                                    [
                                                      _vm._v(
                                                        "Análisis Filogenético"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "3" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getIdentiMolecu
                                                            .analisis_filogenetico
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ])
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.getIdentiMolecu.observaciones
                                        ? [
                                            _c("p", [
                                              _c("b", [
                                                _vm._v("observaciones:")
                                              ]),
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.getIdentiMolecu
                                                      .observaciones
                                                  ) +
                                                  "\n                        "
                                              )
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-footer" }, [
                            _c("small", { staticClass: "text-muted" }, [
                              _c("b", [_vm._v("Creada:")]),
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.modificarFecha(
                                      _vm.getIdentiMolecu.created_at
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row mt-3 justify-content-center" },
                      [
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("div", { staticClass: "card" }, [
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-3 ml-3 mr-3" }, [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: {
                                  src: _vm.getIdentiMolecu.imagen_pcrPublica
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("div", { staticClass: "card" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-3 ml-3 mr-3" }, [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: {
                                  src: _vm.getIdentiMolecu.imagen_blastPublica
                                }
                              })
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                : _vm._e()
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.getMetodoConser != ""
        ? [
            _c("div", { staticClass: "mb-3 card" }, [
              _c("div", { staticClass: "card-header-tab card-header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header-title font-size-lg text-capitalize font-weight-normal"
                  },
                  [_vm._v("Métodos De Conservación")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-actions-pane-right text-capitalize" },
                  [
                    _c("img", {
                      attrs: { src: "/iconos/icons8-vista-general-3-35.png" },
                      on: {
                        click: function($event) {
                          return _vm.mostrarOcultarCaract("metodo")
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.mostrarMetodosConser
                ? _c("div", { staticClass: "container mb-3 mt-3 ml-3 mr-3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila1, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserLevadurasById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.numero_replicas
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Réplicas:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_replicas
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.numero_pases
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Pases:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_pases
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.recuento_microgota
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Recuento Microgota:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.recuento_microgota
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.medio_cultivo
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Medio de Cultivo:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.medio_cultivo
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      metodo.observaciones
                                        ? [
                                            _c("p", [
                                              _c("b", [
                                                _vm._v("observaciones:")
                                              ]),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(metodo.observaciones) +
                                                  "\n                    "
                                              )
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila2, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserLevadurasById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.numero_replicas
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Réplicas:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_replicas
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.numero_pases
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Pases:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_pases
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.recuento_microgota
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Recuento Microgota:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.recuento_microgota
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.medio_cultivo
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Medio de Cultivo:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.medio_cultivo
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      metodo.observaciones
                                        ? [
                                            _c("p", [
                                              _c("b", [
                                                _vm._v("observaciones:")
                                              ]),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(metodo.observaciones) +
                                                  "\n                    "
                                              )
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        _vm._l(_vm.metodos.fila3, function(metodo, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card p-3 mb-2" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: metodo.imagenPublica }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        { staticClass: "table table-striped" },
                                        [
                                          _c(
                                            "tbody",
                                            [
                                              _c("tr", [
                                                _c("th", [
                                                  _vm._v(
                                                    "Método de Conservación:"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.getInfoMetodoConserLevadurasById(
                                                        {
                                                          tipo: "tipo_metodo",
                                                          id: metodo.tipo_id
                                                        }
                                                      ).nombre
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [_vm._v("Fecha:")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modificarFecha2(
                                                        metodo.fecha
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              metodo.numero_replicas
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Réplicas:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_replicas
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.numero_pases
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Número de Pases:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.numero_pases
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.recuento_microgota
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Recuento Microgota:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.recuento_microgota
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              metodo.medio_cultivo
                                                ? [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Medio de Cultivo:"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            metodo.medio_cultivo
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      metodo.observaciones
                                        ? [
                                            _c("p", [
                                              _c("b", [
                                                _vm._v("observaciones:")
                                              ]),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(metodo.observaciones) +
                                                  "\n                    "
                                              )
                                            ])
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("small", { staticClass: "text-muted" }, [
                                  _c("b", [_vm._v("Creada:")]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.modificarFecha(metodo.created_at)
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                : _vm._e()
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
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("small", { staticClass: "text-muted" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1 mt-5" }, [
      _c("h5", [_c("b", [_vm._v("PCR")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Imagen Pcr")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Imagen Blast")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/VerCepaComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/cepas/VerCepaComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerCepaComponent_vue_vue_type_template_id_fef4403e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerCepaComponent.vue?vue&type=template&id=fef4403e&scoped=true& */ "./resources/js/components/cepas/VerCepaComponent.vue?vue&type=template&id=fef4403e&scoped=true&");
/* harmony import */ var _VerCepaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerCepaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/VerCepaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerCepaComponent_vue_vue_type_style_index_0_id_fef4403e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css& */ "./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerCepaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerCepaComponent_vue_vue_type_template_id_fef4403e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerCepaComponent_vue_vue_type_template_id_fef4403e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fef4403e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/VerCepaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/VerCepaComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/cepas/VerCepaComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerCepaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_style_index_0_id_fef4403e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=style&index=0&id=fef4403e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_style_index_0_id_fef4403e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_style_index_0_id_fef4403e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_style_index_0_id_fef4403e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_style_index_0_id_fef4403e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_style_index_0_id_fef4403e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/cepas/VerCepaComponent.vue?vue&type=template&id=fef4403e&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/cepas/VerCepaComponent.vue?vue&type=template&id=fef4403e&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_template_id_fef4403e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerCepaComponent.vue?vue&type=template&id=fef4403e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/VerCepaComponent.vue?vue&type=template&id=fef4403e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_template_id_fef4403e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerCepaComponent_vue_vue_type_template_id_fef4403e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerActinomicetoComponent_vue_vue_type_template_id_6a29a450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerActinomicetoComponent.vue?vue&type=template&id=6a29a450& */ "./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=template&id=6a29a450&");
/* harmony import */ var _VerActinomicetoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerActinomicetoComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerActinomicetoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerActinomicetoComponent_vue_vue_type_template_id_6a29a450___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerActinomicetoComponent_vue_vue_type_template_id_6a29a450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActinomicetoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerActinomicetoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActinomicetoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=template&id=6a29a450&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=template&id=6a29a450& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActinomicetoComponent_vue_vue_type_template_id_6a29a450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerActinomicetoComponent.vue?vue&type=template&id=6a29a450& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/VerActinomicetoComponent.vue?vue&type=template&id=6a29a450&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActinomicetoComponent_vue_vue_type_template_id_6a29a450___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActinomicetoComponent_vue_vue_type_template_id_6a29a450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerBacteriaComponent_vue_vue_type_template_id_188db8d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerBacteriaComponent.vue?vue&type=template&id=188db8d0& */ "./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=template&id=188db8d0&");
/* harmony import */ var _VerBacteriaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerBacteriaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerBacteriaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerBacteriaComponent_vue_vue_type_template_id_188db8d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerBacteriaComponent_vue_vue_type_template_id_188db8d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/VerBacteriaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerBacteriaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerBacteriaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerBacteriaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=template&id=188db8d0&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=template&id=188db8d0& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerBacteriaComponent_vue_vue_type_template_id_188db8d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerBacteriaComponent.vue?vue&type=template&id=188db8d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/VerBacteriaComponent.vue?vue&type=template&id=188db8d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerBacteriaComponent_vue_vue_type_template_id_188db8d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerBacteriaComponent_vue_vue_type_template_id_188db8d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/hongos/VerHongoComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/VerHongoComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerHongoComponent_vue_vue_type_template_id_6448c700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerHongoComponent.vue?vue&type=template&id=6448c700& */ "./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=template&id=6448c700&");
/* harmony import */ var _VerHongoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerHongoComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerHongoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerHongoComponent_vue_vue_type_template_id_6448c700___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerHongoComponent_vue_vue_type_template_id_6448c700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/hongos/VerHongoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerHongoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerHongoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerHongoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=template&id=6448c700&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=template&id=6448c700& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerHongoComponent_vue_vue_type_template_id_6448c700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerHongoComponent.vue?vue&type=template&id=6448c700& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/VerHongoComponent.vue?vue&type=template&id=6448c700&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerHongoComponent_vue_vue_type_template_id_6448c700___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerHongoComponent_vue_vue_type_template_id_6448c700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerLevaduraComponent_vue_vue_type_template_id_3a295870___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerLevaduraComponent.vue?vue&type=template&id=3a295870& */ "./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=template&id=3a295870&");
/* harmony import */ var _VerLevaduraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerLevaduraComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerLevaduraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerLevaduraComponent_vue_vue_type_template_id_3a295870___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerLevaduraComponent_vue_vue_type_template_id_3a295870___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/VerLevaduraComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerLevaduraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerLevaduraComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerLevaduraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=template&id=3a295870&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=template&id=3a295870& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerLevaduraComponent_vue_vue_type_template_id_3a295870___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerLevaduraComponent.vue?vue&type=template&id=3a295870& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/VerLevaduraComponent.vue?vue&type=template&id=3a295870&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerLevaduraComponent_vue_vue_type_template_id_3a295870___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerLevaduraComponent_vue_vue_type_template_id_3a295870___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);