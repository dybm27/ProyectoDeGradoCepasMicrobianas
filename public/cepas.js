(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/abrirCerrarFormulario */ "./resources/js/mixins/abrirCerrarFormulario.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TablaCepasComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TablaCepasComponent.vue */ "./resources/js/components/cepas/TablaCepasComponent.vue");
/* harmony import */ var _FormCepasComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormCepasComponent.vue */ "./resources/js/components/cepas/FormCepasComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Tabla: _TablaCepasComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Form: _FormCepasComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["tipoG", "tipo", "detailRowComponent", "titulo", "tituloCepa", "FieldDefs"],
  mixins: [Object(_mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_0__["default"])("Cepa")],
  methods: {
    cambiarTipo: function cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  },
  computed: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapState("info_cepas", ["tipos"])), vuex__WEBPACK_IMPORTED_MODULE_1__["default"].mapGetters(["getPermisoByNombre"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["tipoG", "idCepa"],
  data: function data() {
    return {
      info: "",
      parametros: {
        codigo: "",
        grupo_microbiano: null,
        genero: null,
        especie: null,
        phylum: null,
        clase: null,
        orden: null,
        reino: null,
        division: null,
        familia: null,
        estado: "",
        origen: "Donación",
        publicar: false,
        otras_caracteristicas: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        grupo_microbiano: 1,
        genero: 1,
        errors: false
      },
      errors: [],
      mostrarGrupos: true,
      disabled: false,
      nombre: "",
      nombreBtn: "",
      classBtn: "",
      bloquearBtn: false,
      bloquearBtnModal: false,
      mensajeCodigo: "",
      mensajes: {
        required: "El campo es requerido",
        minLength: "El campo debe tener como minimo ",
        unique: ""
      }
    };
  },
  validations: function validations() {
    if (this.parametros.grupo_microbiano == 1) {
      return {
        parametros: {
          codigo: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
            minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(4),
            unique: function unique(value) {
              if (value == "") return true;

              if (this.validarCodigo) {
                return false;
              }

              return true;
            }
          },
          genero: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          especie: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          estado: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          }
        }
      };
    } else if (this.parametros.grupo_microbiano == 2) {
      return {
        parametros: {
          codigo: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
            minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(4),
            unique: function unique(value) {
              if (value == "") return true;

              if (this.validarCodigo) {
                return false;
              }

              return true;
            }
          },
          genero: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          especie: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          phylum: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          clase: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          orden: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          familia: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          estado: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          }
        }
      };
    } else if (this.parametros.grupo_microbiano == 3) {
      return {
        parametros: {
          codigo: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
            minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(4),
            unique: function unique(value) {
              if (value == "") return true;

              if (this.validarCodigo) {
                return false;
              }

              return true;
            }
          },
          genero: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          especie: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          clase: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          orden: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          division: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          familia: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          estado: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          }
        }
      };
    } else {
      return {
        parametros: {
          codigo: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
            minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(4),
            unique: function unique(value) {
              if (value == "") return true;

              if (this.validarCodigo) {
                return false;
              }

              return true;
            }
          },
          genero: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          especie: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          phylum: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          clase: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          orden: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          reino: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          },
          estado: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
          }
        }
      };
    }
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepas", ["accionCepas"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_cepas", ["accionAgregarTipoCepa"])), {}, {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;
      this.$v.parametros.$touch();

      if (!this.$v.$invalid) {
        if (this.nombre === "Editar Cepa") {
          axios.put("/cepas/editar/".concat(this.idCepa), this.parametros).then(function (res) {
            _this.bloquearBtn = false;

            _this.accionCepas({
              tipo: "editar",
              data: res.data
            });

            window.Echo["private"]("desbloquearBtnsCepa").whisper("desbloquearBtnsCepa", {
              id: res.data.id
            });

            _this.$events.fire("eliminarMiBloqueoCepa", {
              id: res.data.id
            });

            _this.$emit("cambiarVariableFormulario");

            _this.toastr("Editar Cepa", "Cepa editada con exito!!", "success");
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        } else {
          axios.post("/cepas/agregar", this.parametros).then(function (res) {
            _this.bloquearBtn = false;

            if (res.request.responseURL === "http://127.0.0.1") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this.accionCepas({
                tipo: "agregar",
                data: res.data
              });

              _this.$emit("cambiarVariableFormulario");

              _this.toastr("Agregar Cepa", "Cepa agregada con exito!!", "success");
            }
          })["catch"](function (error) {
            _this.verificarError(error.response.status, error.response.data.errors);
          });
        }
      } else {
        this.bloquearBtn = false;
        this.toastr("Error!!", "Favor llenar correctamente los campos", "error");
      }
    },
    llenarParametros: function llenarParametros(cepa) {
      this.parametros.codigo = this.info.codigo;
      this.parametros.grupo_microbiano = this.info.grupo_microbiano_id;
      this.modal.grupo_microbiano = this.info.grupo_microbiano_id;
      this.parametros.genero = this.info.genero_id;
      this.modal.genero = this.info.genero_id;
      this.parametros.especie = this.info.especie_id;
      this.parametros.estado = this.info.estado;
      this.parametros.origen = this.info.origen;
      this.parametros.otras_caracteristicas = this.info.otras_caract;

      switch (this.info.grupo_microbiano_id) {
        case 1:
          break;

        case 2:
          this.parametros.phylum = this.info.hongo.phylum_id;
          this.parametros.clase = this.info.hongo.clase_id;
          this.parametros.orden = this.info.hongo.orden_id;
          this.parametros.familia = this.info.hongo.familia_id;
          break;

        case 3:
          this.parametros.division = this.info.levadura.division_id;
          this.parametros.clase = this.info.levadura.clase_id;
          this.parametros.orden = this.info.levadura.orden_id;
          this.parametros.familia = this.info.levadura.familia_id;
          break;

        case 4:
          this.parametros.reino = this.info.actinomiceto.reino_id;
          this.parametros.phylum = this.info.actinomiceto.phylum_id;
          this.parametros.clase = this.info.actinomiceto.clase_id;
          this.parametros.orden = this.info.actinomiceto.orden_id;
          break;
      }

      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
    ocultarGrupoMicrobiano: function ocultarGrupoMicrobiano() {
      if (this.tipoG === 0) {
        this.mostrarGrupos = true;
      } else {
        this.parametros.grupo_microbiano = this.tipoG;
        this.mostrarGrupos = false;
        this.cambiarGeneroEspecie();
      }
    },
    cambiarGeneroEspecie: function cambiarGeneroEspecie() {
      this.parametros.genero = this.getGenerosId(this.parametros.grupo_microbiano)[0].id;
      this.parametros.especie = this.getEspeciesId(this.parametros.genero)[0].id;
      this.modal.genero = this.getGenerosId(this.parametros.grupo_microbiano)[0].id;
    },
    cambiarEspecie: function cambiarEspecie() {
      this.parametros.especie = this.getEspeciesId(this.parametros.genero)[0].id;
    },
    showModal: function showModal(tipo) {
      this.modal.errors = false;
      this.modal.input = "";
      this.modal.tipo = tipo;

      if (tipo === "genero") {
        this.modal.titulo = "Agregar Nuevo Género";
      } else if (tipo === "especie") {
        this.modal.titulo = "Agregar Nueva Especie";
      } else if (tipo === "familia") {
        this.modal.titulo = "Agregar Nueva Familia";
      } else if (tipo === "orden") {
        this.modal.titulo = "Agregar Nuevo Orden";
      } else if (tipo === "clase") {
        this.modal.titulo = "Agregar Nueva Clase";
      } else if (tipo === "phylum") {
        this.modal.titulo = "Agregar Nuevo Phylum";
      } else if (tipo === "reino") {
        this.modal.titulo = "Agregar Nuevo Reino";
      } else {
        this.modal.titulo = "Agregar Nueva Division";
      }

      this.$modal.show("agregar-otra-info");
    },
    agregarInfo: function agregarInfo() {
      var _this2 = this;

      if (this.modal.input === "") {
        this.modal.errors = true;
      } else {
        this.bloquearBtnModal = true;

        if (!this.validarNombreUnico) {
          var parametros = {
            tipo: this.modal.tipo,
            nombre: this.modal.input,
            genero: this.modal.genero,
            grupo_microbiano: this.modal.grupo_microbiano
          };
          axios.post("/info-cepas/agregar", parametros).then(function (res) {
            _this2.bloquearBtnModal = false;

            if (res.request.responseURL === "http://127.0.0.1") {
              localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
              window.location.href = "/";
            } else {
              _this2.accionAgregarTipoCepa({
                info: res.data,
                tipo: _this2.modal.tipo
              });

              _this2.$modal.hide("agregar-otra-info");

              _this2.toastr("Agregar Info", "".concat(_this2.modal.tipo, " agregado/a con exito"), "success");
            }
          })["catch"](function (error) {
            if (error.response.status === 403) {
              _this2.$router.push("/sin-acceso");
            } else if (error.response.status === 405 || error.response.status === 401) {
              window.location.href = "/";
            } else {
              _this2.bloquearBtnModal = false;

              _this2.toastr("Error!!", "", "error");
            }
          });
        } else {
          this.bloquearBtnModal = false;
          this.toastr("Error!!", "favor arregla el error", "error");
        }
      }
    },
    verificarSelects: function verificarSelects() {
      if (this.getGrupos.length > 0) {
        this.parametros.grupo_microbiano = this.getGrupos[0].id;
      } else {
        this.parametros.grupo_microbiano = null;
      }

      if (this.getGeneros.length > 0) {
        this.parametros.genero = this.getGeneros[0].id;
      } else {
        this.parametros.genero = null;
      }

      if (this.getEspecies.length > 0) {
        this.parametros.especie = this.getEspecies[0].id;
      } else {
        this.parametros.especie = null;
      }

      if (this.getPhylums.length > 0) {
        this.parametros.phylum = this.getPhylums[0].id;
      } else {
        this.parametros.phylum = null;
      }

      if (this.getOrdens.length > 0) {
        this.parametros.orden = this.getOrdens[0].id;
      } else {
        this.parametros.orden = null;
      }

      if (this.getReinos.length > 0) {
        this.parametros.reino = this.getReinos[0].id;
      } else {
        this.parametros.reino = null;
      }

      if (this.getDivisiones.length > 0) {
        this.parametros.division = this.getDivisiones[0].id;
      } else {
        this.parametros.division = null;
      }

      if (this.getClases.length > 0) {
        this.parametros.clase = this.getClases[0].id;
      } else {
        this.parametros.clase = null;
      }

      if (this.getFamilias.length > 0) {
        this.parametros.familia = this.getFamilias[0].id;
      } else {
        this.parametros.familia = null;
      }
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getPermisoByNombre"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepas", ["getCepaById", "getCepaByCodigo"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getGrupos", "getGeneros", "getEspecies", "getPhylums", "getOrdens", "getReinos", "getDivisiones", "getClases", "getFamilias", "getGenerosId", "getEspeciesId", "getGeneroByNombre", "getEspecieByNombre", "getPhylumByNombre", "getOrdenByNombre", "getReinoByNombre", "getDivisionByNombre", "getClaseByNombre", "getFamiliaByNombre"])), {}, {
    validarNombreUnico: function validarNombreUnico() {
      if (this.modal.input) {
        switch (this.modal.tipo) {
          case "genero":
            if (this.getGeneroByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "especie":
            if (this.getEspecieByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "familia":
            if (this.getFamiliaByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "orden":
            if (this.getOrdenByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "clase":
            if (this.getClaseByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "phylum":
            if (this.getPhylumByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "reino":
            if (this.getReinoByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "division":
            if (this.getDivisionByNombre(this.modal.input)) {
              return true;
            }

            break;
        }
      }

      return false;
    },
    validarCodigo: function validarCodigo() {
      if (this.parametros.codigo) {
        if (this.getCepaByCodigo(this.parametros.codigo)) {
          if (this.getCepaByCodigo(this.parametros.codigo).id != this.info.id) {
            this.mensajes.unique = "Ya existe una cepa con ese codigo";
            return true;
          }
        }
      }

      return false;
    },
    inputModal: function inputModal() {
      return this.modal.input;
    }
  }),
  created: function created() {
    this.verificarSelects();
    this.ocultarGrupoMicrobiano();

    if (this.idCepa === 0) {
      this.nombre = "Agregar Nueva Cepa";
      this.classBtn = "btn-success";
      this.nombreBtn = "Guardar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getCepaById(this.idCepa);
      this.disabled = true;
      this.nombre = "Editar Cepa";
      this.classBtn = "btn-warning";
      this.nombreBtn = "Editar";
      this.$emit("cambiarTipo", "editar");
      this.llenarParametros();
    }
  },
  watch: {
    getGrupos: function getGrupos() {
      if (this.getGrupos.length > 0) {
        if (this.tipoG === 0) {
          this.parametros.grupo_microbiano = this.getGrupos[0].id;
        } else {
          this.parametros.grupo_microbiano = this.tipoG;
        }
      } else {
        this.parametros.grupo_microbiano = null;
      }
    },
    getGeneros: function getGeneros() {
      if (this.getGeneros.length > 0) {
        this.parametros.genero = this.getGenerosId(this.parametros.grupo_microbiano)[0].id;
      } else {
        this.parametros.genero = null;
      }
    },
    getEspecies: function getEspecies() {
      if (this.getEspecies.length > 0) {
        this.parametros.especie = this.getEspeciesId(this.parametros.genero)[0].id;
      } else {
        this.parametros.especie = null;
      }
    },
    getPhylums: function getPhylums() {
      if (this.getPhylums.length > 0) {
        this.parametros.phylum = this.getPhylums[0].id;
      } else {
        this.parametros.phylum = null;
      }
    },
    getOrdens: function getOrdens() {
      if (this.getOrdens.length > 0) {
        this.parametros.orden = this.getOrdens[0].id;
      } else {
        this.parametros.orden = null;
      }
    },
    getReinos: function getReinos() {
      if (this.getReinos.length > 0) {
        this.parametros.reino = this.getReinos[0].id;
      } else {
        this.parametros.reino = null;
      }
    },
    getDivisiones: function getDivisiones() {
      if (this.getDivisiones.length > 0) {
        this.parametros.division = this.getDivisiones[0].id;
      } else {
        this.parametros.division = null;
      }
    },
    getClases: function getClases() {
      if (this.getClases.length > 0) {
        this.parametros.clase = this.getClases[0].id;
      } else {
        this.parametros.clase = null;
      }
    },
    getFamilias: function getFamilias() {
      if (this.getFamilias.length > 0) {
        this.parametros.familia = this.getFamilias[0].id;
      } else {
        this.parametros.familia = null;
      }
    },
    inputModal: function inputModal() {
      if (!this.inputModal) {
        this.modal.errors = true;
      } else {
        this.modal.errors = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/websocketsTabla */ "./resources/js/mixins/websocketsTabla.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["FieldDefs", "detailRowComponent", "tipo", "titulo"],
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      id: "",
      sortOrder: [{
        field: "codigo",
        direction: "asc"
      }],
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: _objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_3__["default"].mapState("cepas", ["cepas"])), vuex__WEBPACK_IMPORTED_MODULE_3__["default"].mapGetters("cepas", ["getCepasByGrupo"])), {}, {
    mostrarTabla: function mostrarTabla() {
      if (this.cepas != "" && this.cepas != null && this.validarTipoCepa) {
        return true;
      }

      return false;
    },
    validarTipoCepa: function validarTipoCepa() {
      switch (this.tipo) {
        case "cepa":
          return true;
          break;

        case "bacteria":
          if (this.getCepasByGrupo(1).length > 0) {
            return true;
          }

          break;

        case "levadura":
          if (this.getCepasByGrupo(3).length > 0) {
            return true;
          }

          break;

        case "hongo":
          if (this.getCepasByGrupo(2).length > 0) {
            return true;
          }

          break;

        case "actinomiceto":
          if (this.getCepasByGrupo(4).length > 0) {
            return true;
          }

          break;
      }

      return false;
    }
  }),
  methods: _objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_3__["default"].mapActions("cepas", ["accionCepas"])), {}, {
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarCepa: function eliminarCepa() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/cepas/eliminar/".concat(this.id)).then(function (res) {
        _this.bloquearBtnModal = false;

        if (res.data === "negativo") {
          _this.toastr("Precaución!!", "La cepa cuenta con caracteristicas registradas, favor eliminarlas", "warning", 8000);
        } else {
          _this.refrescarTabla = true;

          _this.toastr("Eliminar Cepa", "Cepa eliminada con exito!!", "success", 5000);
        }

        _this.accionCepas({
          tipo: "eliminar",
          data: res.data
        });

        _this.actualizarTabla();

        _this.$modal.hide("modal_eliminar_cepa");
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this.$router.push("/sin-acceso");
        } else if (error.response.status === 405 || error.response.status === 401) {
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.toastr("Error!!", "", "error");
        }
      });
    },
    closeEliminar: function closeEliminar() {
      window.Echo["private"]("desbloquearBtnsCepa").whisper("desbloquearBtnsCepa", {
        id: this.id
      });
      this.$events.fire("eliminarMiBloqueoCepa", {
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
  }),
  created: function created() {
    var _this2 = this;

    this.$emit("cambiarTipo", "tabla");
    this.$events.on("actualizartablaCepa", function (e) {
      return _this2.actualizarTabla();
    });
  },
  destroyed: function destroyed() {
    this.$events.off("actualizartablaCepa");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=template&id=15bcfaae&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=template&id=15bcfaae& ***!
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
  return _c("div", { staticClass: "main-card mb-3 card" }, [
    _c("div", { staticClass: "card-header-tab card-header" }, [
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
          _vm._v(
            "\n      Tabla Dinámica Cepas Microbianas " +
              _vm._s(_vm.tituloCepa) +
              "\n    "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "btn-actions-pane-right actions-icon-btn" },
        [
          !_vm.formulario
            ? [
                _vm.getPermisoByNombre("agregar-cepa")
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
                        attrs: { disabled: _vm.tipos == "" },
                        on: {
                          click: function($event) {
                            return _vm.abrirFormulario(0)
                          }
                        }
                      },
                      [_vm._v("Agregar")]
                    )
                  : _vm._e()
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
          ? [
              _c("Tabla", {
                attrs: {
                  FieldDefs: _vm.FieldDefs,
                  detailRowComponent: _vm.detailRowComponent,
                  tipo: _vm.tipo,
                  titulo: _vm.titulo
                },
                on: { cambiarTipo: _vm.cambiarTipo }
              })
            ]
          : [
              _c("Form", {
                attrs: { tipoG: _vm.tipoG, idCepa: _vm.id },
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(_vm.nombre))
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
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c("label", { attrs: { for: "codigo" } }, [
                            _vm._v("Código")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.parametros.codigo.$model,
                                expression: "$v.parametros.codigo.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.$v.parametros.codigo.$error
                                ? "error-input-select"
                                : ""
                            ],
                            attrs: {
                              name: "codigo",
                              id: "codigo",
                              placeholder: "...",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.$v.parametros.codigo.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.parametros.codigo,
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
                          _vm.$v.parametros.codigo.$error &&
                          !_vm.$v.parametros.codigo.required
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$v.parametros.codigo.$error &&
                          !_vm.$v.parametros.codigo.minLength
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.mensajes.minLength +
                                      _vm.$v.parametros.codigo.$params.minLength
                                        .min +
                                      " letras."
                                  )
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$v.parametros.codigo.$error &&
                          !_vm.$v.parametros.codigo.unique
                            ? _c("em", { staticClass: "text-error-input" }, [
                                _vm._v(_vm._s(_vm.mensajes.unique))
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _vm.mostrarGrupos && !_vm.disabled
                        ? _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "grupo_microbiano" } },
                                [_vm._v("Grupo Microbiano")]
                              ),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.grupo_microbiano,
                                      expression: "parametros.grupo_microbiano"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "select",
                                    id: "grupo_microbiano"
                                  },
                                  on: {
                                    change: [
                                      function($event) {
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
                                          _vm.parametros,
                                          "grupo_microbiano",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      _vm.cambiarGeneroEspecie
                                    ]
                                  }
                                },
                                _vm._l(_vm.getGrupos, function(gm, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: gm.id } },
                                    [_vm._v(_vm._s(gm.nombre))]
                                  )
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "genero" } }, [
                            _vm._v("Género")
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
                                    value: _vm.$v.parametros.genero.$model,
                                    expression: "$v.parametros.genero.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                class: [
                                  "form-control",
                                  _vm.$v.parametros.genero.$error
                                    ? "error-input-select"
                                    : ""
                                ],
                                attrs: { name: "select", id: "genero" },
                                on: {
                                  change: [
                                    function($event) {
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
                                        _vm.$v.parametros.genero,
                                        "$model",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    _vm.cambiarEspecie
                                  ]
                                }
                              },
                              _vm._l(
                                _vm.getGenerosId(
                                  _vm.parametros.grupo_microbiano
                                ),
                                function(g, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: g.id } },
                                    [_vm._v(_vm._s(g.nombre))]
                                  )
                                }
                              ),
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
                                            return _vm.showModal("genero")
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fas fa-plus" })]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _vm.$v.parametros.genero.$error &&
                          !_vm.$v.parametros.genero.required
                            ? _c("em", { staticClass: "text-error-select" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "especie" } }, [
                            _vm._v("Especie")
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
                                    value: _vm.$v.parametros.especie.$model,
                                    expression: "$v.parametros.especie.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                class: [
                                  "form-control",
                                  _vm.$v.parametros.especie.$error
                                    ? "error-input-select"
                                    : ""
                                ],
                                attrs: { name: "select", id: "especie" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.$v.parametros.especie,
                                      "$model",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(
                                _vm.getEspeciesId(_vm.parametros.genero),
                                function(e, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: e.id } },
                                    [_vm._v(_vm._s(e.nombre))]
                                  )
                                }
                              ),
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
                                            return _vm.showModal("especie")
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fas fa-plus" })]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _vm.$v.parametros.especie.$error &&
                          !_vm.$v.parametros.especie.required
                            ? _c("em", { staticClass: "text-error-select" }, [
                                _vm._v(_vm._s(_vm.mensajes.required))
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _vm.parametros.grupo_microbiano === 2 ||
                          _vm.parametros.grupo_microbiano === 3
                            ? _c("div", [
                                _c("label", { attrs: { for: "familia" } }, [
                                  _vm._v("Familia")
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
                                            _vm.$v.parametros.familia.$model,
                                          expression:
                                            "$v.parametros.familia.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      class: [
                                        "form-control",
                                        _vm.$v.parametros.familia.$error
                                          ? "error-input-select"
                                          : ""
                                      ],
                                      attrs: { name: "select", id: "familia" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.$v.parametros.familia,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getFamilias, function(f, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: f.id }
                                        },
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
                                                    "familia"
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
                                _vm.$v.parametros.familia.$error &&
                                !_vm.$v.parametros.familia.required
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-select" },
                                      [_vm._v(_vm._s(_vm.mensajes.required))]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.parametros.grupo_microbiano === 4
                            ? _c("div", [
                                _c("label", { attrs: { for: "reino" } }, [
                                  _vm._v("Reino")
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
                                          value: _vm.$v.parametros.reino.$model,
                                          expression:
                                            "$v.parametros.reino.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      class: [
                                        "form-control",
                                        _vm.$v.parametros.reino.$error
                                          ? "error-input-select"
                                          : ""
                                      ],
                                      attrs: { name: "select", id: "reino" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.$v.parametros.reino,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getReinos, function(r, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: r.id }
                                        },
                                        [_vm._v(_vm._s(r.nombre))]
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
                                                  return _vm.showModal("reino")
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
                                _vm.$v.parametros.reino.$error &&
                                !_vm.$v.parametros.reino.required
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-select" },
                                      [_vm._v(_vm._s(_vm.mensajes.required))]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _vm.parametros.grupo_microbiano === 2 ||
                          _vm.parametros.grupo_microbiano === 4
                            ? _c("div", [
                                _c("label", { attrs: { for: "phylum" } }, [
                                  _vm._v("Phylum")
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
                                            _vm.$v.parametros.phylum.$model,
                                          expression:
                                            "$v.parametros.phylum.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      class: [
                                        "form-control",
                                        _vm.$v.parametros.phylum.$error
                                          ? "error-input-select"
                                          : ""
                                      ],
                                      attrs: { name: "select", id: "phylum" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.$v.parametros.phylum,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getPhylums, function(p, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: p.id }
                                        },
                                        [_vm._v(_vm._s(p.nombre))]
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
                                                  return _vm.showModal("phylum")
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
                                _vm.$v.parametros.phylum.$error &&
                                !_vm.$v.parametros.phylum.required
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-select" },
                                      [_vm._v(_vm._s(_vm.mensajes.required))]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.parametros.grupo_microbiano === 3
                            ? _c("div", [
                                _c("label", { attrs: { for: "division" } }, [
                                  _vm._v("Division")
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
                                            _vm.$v.parametros.division.$model,
                                          expression:
                                            "$v.parametros.division.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      class: [
                                        "form-control",
                                        _vm.$v.parametros.division.$error
                                          ? "error-input-select"
                                          : ""
                                      ],
                                      attrs: { name: "select", id: "division" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.$v.parametros.division,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getDivisiones, function(
                                      d,
                                      index
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: d.id }
                                        },
                                        [_vm._v(_vm._s(d.nombre))]
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
                                                    "division"
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
                                _vm.$v.parametros.division.$error &&
                                !_vm.$v.parametros.division.required
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-select" },
                                      [_vm._v(_vm._s(_vm.mensajes.required))]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.parametros.grupo_microbiano === 2 ||
                      _vm.parametros.grupo_microbiano === 3 ||
                      _vm.parametros.grupo_microbiano === 4
                        ? _c("div", [
                            _c("div", { staticClass: "form-row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("label", { attrs: { for: "clase" } }, [
                                  _vm._v("Clase")
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
                                          value: _vm.$v.parametros.clase.$model,
                                          expression:
                                            "$v.parametros.clase.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      class: [
                                        "form-control",
                                        _vm.$v.parametros.clase.$error
                                          ? "error-input-select"
                                          : ""
                                      ],
                                      attrs: { name: "select", id: "clase" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.$v.parametros.clase,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getClases, function(c, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: c.id }
                                        },
                                        [_vm._v(_vm._s(c.nombre))]
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
                                                  return _vm.showModal("clase")
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
                                _vm.$v.parametros.clase.$error &&
                                !_vm.$v.parametros.clase.required
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-select" },
                                      [_vm._v(_vm._s(_vm.mensajes.required))]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("label", { attrs: { for: "orden" } }, [
                                  _vm._v("Orden")
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
                                          value: _vm.$v.parametros.orden.$model,
                                          expression:
                                            "$v.parametros.orden.$model",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      class: [
                                        "form-control",
                                        _vm.$v.parametros.orden.$error
                                          ? "error-input-select"
                                          : ""
                                      ],
                                      attrs: { name: "select", id: "orden" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.$v.parametros.orden,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getOrdens, function(o, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: o.id }
                                        },
                                        [_vm._v(_vm._s(o.nombre))]
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
                                                  return _vm.showModal("orden")
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
                                _vm.$v.parametros.orden.$error &&
                                !_vm.$v.parametros.orden.required
                                  ? _c(
                                      "em",
                                      { staticClass: "text-error-select" },
                                      [_vm._v(_vm._s(_vm.mensajes.required))]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c("label", { attrs: { for: "estado" } }, [
                                _vm._v("Estado")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value: _vm.$v.parametros.estado.$model,
                                    expression: "$v.parametros.estado.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                class: [
                                  "form-control",
                                  _vm.$v.parametros.estado.$error
                                    ? "error-input-select"
                                    : ""
                                ],
                                attrs: {
                                  name: "estado",
                                  id: "estado",
                                  placeholder: "...",
                                  type: "text"
                                },
                                domProps: {
                                  value: _vm.$v.parametros.estado.$model
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.parametros.estado,
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
                              _vm.$v.parametros.estado.$error &&
                              !_vm.$v.parametros.estado.required
                                ? _c(
                                    "em",
                                    { staticClass: "text-error-input" },
                                    [_vm._v(_vm._s(_vm.mensajes.required))]
                                  )
                                : _vm._e()
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            { staticClass: "position-relative form-group" },
                            [
                              _c("label", { attrs: { for: "origen" } }, [
                                _vm._v("Origen")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.origen,
                                      expression: "parametros.origen"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { name: "select", id: "origen" },
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
                                        _vm.parametros,
                                        "origen",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "Donación" } },
                                    [_vm._v("Donación")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "Compra" } }, [
                                    _vm._v("Compra")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "Proyecto" } },
                                    [_vm._v("Proyecto")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    {
                                      attrs: {
                                        value: "Aislamiento del Laboratorio"
                                      }
                                    },
                                    [_vm._v("Aislamiento del Laboratorio")]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "position-relative form-group" },
                        [
                          _c(
                            "label",
                            { attrs: { for: "otras_caracteristicas" } },
                            [_vm._v("Otras Caracteristicas")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parametros.otras_caracteristicas,
                                expression: "parametros.otras_caracteristicas"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "text",
                              id: "otras_caracteristicas"
                            },
                            domProps: {
                              value: _vm.parametros.otras_caracteristicas
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.parametros,
                                  "otras_caracteristicas",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      ),
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
                            [_vm._v("Desea publicar la cepa?")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "mt-2 btn btn-block",
                          class: _vm.classBtn,
                          attrs: { disabled: _vm.bloquearBtn }
                        },
                        [_vm._v(_vm._s(_vm.nombreBtn))]
                      )
                    ],
                    2
                  )
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "agregar-otra-info",
            classes: "my_modal",
            width: 450,
            height: 450
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
                [_vm._v(_vm._s(_vm.modal.titulo))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("agregar-otra-info")
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
              _vm.modal.tipo === "genero"
                ? _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "grupo_microbiano-modal" } }, [
                      _vm._v("Grupo Microbiano")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modal.grupo_microbiano,
                            expression: "modal.grupo_microbiano"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "select", id: "grupo_microbiano-modal" },
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
                            _vm.$set(
                              _vm.modal,
                              "grupo_microbiano",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.getGrupos, function(gm, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: gm.id } },
                          [_vm._v(_vm._s(gm.nombre))]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.modal.tipo === "especie"
                ? _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "genero-modal" } }, [
                      _vm._v("Genero")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modal.genero,
                            expression: "modal.genero"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "select", id: "genero-modal" },
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
                            _vm.$set(
                              _vm.modal,
                              "genero",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(
                        _vm.getGenerosId(_vm.parametros.grupo_microbiano),
                        function(g, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: g.id } },
                            [_vm._v(_vm._s(g.nombre))]
                          )
                        }
                      ),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modal.input,
                      expression: "modal.input"
                    }
                  ],
                  class: [
                    "form-control",
                    _vm.validarNombreUnico || _vm.modal.errors
                      ? "error-input-select"
                      : ""
                  ],
                  attrs: {
                    name: "nombre",
                    id: "nombre",
                    placeholder: "...",
                    type: "text"
                  },
                  domProps: { value: _vm.modal.input },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.modal, "input", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.validarNombreUnico
                  ? _c("em", { staticClass: "text-error-input" }, [
                      _vm._v("Ya existe un registro con ese nombre")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.modal.errors
                  ? _c("em", { staticClass: "text-error-input" }, [
                      _vm._v(_vm._s(_vm.mensajes.required))
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
                      return _vm.$modal.hide("agregar-otra-info")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                apiUrl: "/info-panel/" + _vm.tipo + "s-tabla",
                fields: _vm.FieldDefs,
                sortOrder: _vm.sortOrder,
                detailRowComponent: _vm.detailRowComponent,
                nameGet: _vm.tipo + "s"
              }
            })
          ]
        : [
            _c("div", { staticClass: "text-center" }, [
              _c("h5", { staticClass: "mt-5 mb-5" }, [
                _c("span", { staticClass: "pr-1" }, [
                  _c("b", { staticClass: "text-success" }, [
                    _vm._v("AÚN NO SE HAN AGREGADO " + _vm._s(_vm.titulo))
                  ])
                ])
              ])
            ])
          ],
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_cepa",
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
                [_vm._v("Eliminar Cepa Microbiana")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_cepa")
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
              _c("p", [_vm._v("Esta segura/o de eliminar la Cepa?.")])
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
                      return _vm.$modal.hide("modal_eliminar_cepa")
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
                  on: { click: _vm.eliminarCepa }
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/ContainerFormTablaComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerFormTablaComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerFormTablaComponent_vue_vue_type_template_id_15bcfaae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerFormTablaComponent.vue?vue&type=template&id=15bcfaae& */ "./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=template&id=15bcfaae&");
/* harmony import */ var _ContainerFormTablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerFormTablaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerFormTablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerFormTablaComponent_vue_vue_type_template_id_15bcfaae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerFormTablaComponent_vue_vue_type_template_id_15bcfaae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/ContainerFormTablaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerFormTablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerFormTablaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerFormTablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=template&id=15bcfaae&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=template&id=15bcfaae& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerFormTablaComponent_vue_vue_type_template_id_15bcfaae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerFormTablaComponent.vue?vue&type=template&id=15bcfaae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerFormTablaComponent.vue?vue&type=template&id=15bcfaae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerFormTablaComponent_vue_vue_type_template_id_15bcfaae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerFormTablaComponent_vue_vue_type_template_id_15bcfaae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/FormCepasComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/cepas/FormCepasComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormCepasComponent_vue_vue_type_template_id_9c23e2ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormCepasComponent.vue?vue&type=template&id=9c23e2ca& */ "./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&");
/* harmony import */ var _FormCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormCepasComponent_vue_vue_type_template_id_9c23e2ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormCepasComponent_vue_vue_type_template_id_9c23e2ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/FormCepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_template_id_9c23e2ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCepasComponent.vue?vue&type=template&id=9c23e2ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_template_id_9c23e2ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_template_id_9c23e2ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/TablaCepasComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/cepas/TablaCepasComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaCepasComponent.vue?vue&type=template&id=17d5da46& */ "./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46&");
/* harmony import */ var _TablaCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaCepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/TablaCepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaCepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaCepasComponent.vue?vue&type=template&id=17d5da46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaCepasComponent.vue?vue&type=template&id=17d5da46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaCepasComponent_vue_vue_type_template_id_17d5da46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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