(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caract-bioqui-bacteria~caract-bioqui-hongo~caract-bioqui-levadura~caract-fisio-bacteria~caract-micro~1943b561"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["imagenes", "posicion"],
  data: function data() {
    return {
      croppie1: null,
      croppie2: null,
      croppie3: null,
      btnAprobar1: true,
      btnAprobar2: true,
      btnAprobar3: true
    };
  },
  mounted: function mounted() {
    for (var index = 0; index < this.imagenes.length; index++) {
      this.crearCroppie(index + 1, this.imagenes[index]);
    }
  },
  methods: {
    crearCroppie: function crearCroppie(index, imagen) {
      switch (index) {
        case 1:
          var el1 = document.getElementById("croppie1");
          this.croppie1 = new croppie__WEBPACK_IMPORTED_MODULE_0___default.a(el1, {
            viewport: {
              width: 200,
              height: 200
            },
            boundary: {
              height: 250
            }
          });
          this.croppie1.bind({
            url: imagen
          });
          break;

        case 2:
          var el2 = document.getElementById("croppie2");
          this.croppie2 = new croppie__WEBPACK_IMPORTED_MODULE_0___default.a(el2, {
            viewport: {
              width: 200,
              height: 200
            },
            boundary: {
              height: 250
            }
          });
          this.croppie2.bind({
            url: imagen
          });
          break;

        case 3:
          var el3 = document.getElementById("croppie3");
          this.croppie3 = new croppie__WEBPACK_IMPORTED_MODULE_0___default.a(el3, {
            viewport: {
              width: 200,
              height: 200
            },
            boundary: {
              height: 250
            }
          });
          this.croppie3.bind({
            url: imagen
          });
          break;
      }
    },
    resultado: function resultado(num) {
      var _this = this;

      switch (num) {
        case 1:
          this.croppie1.result().then(function (res) {
            _this.btnAprobar1 = false;

            _this.$emit("cambiarValorImagen", {
              data: res,
              num: num
            });
          });
          break;

        case 2:
          this.croppie2.result().then(function (res) {
            _this.btnAprobar2 = false;

            _this.$emit("cambiarValorImagen", {
              data: res,
              num: num
            });
          });
          break;

        case 3:
          this.croppie3.result().then(function (res) {
            _this.btnAprobar3 = false;

            _this.$emit("cambiarValorImagen", {
              data: res,
              num: num
            });
          });
          break;
      }
    },
    cancelar: function cancelar(num) {
      switch (num) {
        case 1:
          this.btnAprobar1 = true;
          this.$emit("cambiarValorImagen", {
            data: "",
            num: num
          });
          break;

        case 2:
          this.btnAprobar2 = true;
          this.$emit("cambiarValorImagen", {
            data: "",
            num: num
          });
          break;

        case 3:
          this.btnAprobar3 = true;
          this.$emit("cambiarValorImagen", {
            data: "",
            num: num
          });
          break;
      }
    }
  },
  computed: {
    mostrarMensaje1: function mostrarMensaje1() {
      if (this.btnAprobar1) {
        return true;
      }

      return false;
    },
    mostrarMensaje2: function mostrarMensaje2() {
      if (this.btnAprobar2) {
        return true;
      }

      return false;
    },
    mostrarMensaje3: function mostrarMensaje3() {
      if (this.btnAprobar3) {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ImagenesComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ImagenesComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../carousel/CarouselComponent.vue */ "./resources/js/components/carousel/CarouselComponent.vue");
/* harmony import */ var _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CroppieComponent.vue */ "./resources/js/components/CroppieComponent.vue");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Carousel: _carousel_CarouselComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Croppie: _CroppieComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["parametros", "tipoCepa", "imagenes", "cepa"],
  data: function data() {
    return {
      modalImagen: {
        nomBtn: "",
        select_imagen: 1,
        imagen: "",
        titulo: "",
        nomLabel: "",
        errors: ""
      },
      imagenMiniatura: ""
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_2__["default"]],
  methods: {
    cambiarValorImagen: function cambiarValorImagen(valor) {
      this.modalImagen.imagen = valor;
    },
    showModalImagen: function showModalImagen(tipo) {
      this.seleccionar();
      this.imagenMiniatura = "";
      this.modalImagen.errors = "";
      this.modalImagen.imagen = "";

      if (tipo === "cambiar") {
        this.modalImagen.nomBtn = "Cambiar";
        this.modalImagen.titulo = "Cambiar Imagen";
        this.modalImagen.nomLabel = "Cual imagen desea cambiar?";
        this.$modal.show("agregar_cambiar_imagen");
      } else if (tipo === "eliminar") {
        this.modalImagen.nomBtn = "Eliminar";
        this.modalImagen.titulo = "Eliminar Imagen";
        this.modalImagen.nomLabel = "Cual imagen desea eliminar?";
        this.$modal.show("eliminar_imagen");
      } else {
        this.modalImagen.nomBtn = "Agregar";
        this.modalImagen.titulo = "Agregar Imagen";
        this.$modal.show("agregar_cambiar_imagen");
      }
    },
    seleccionar: function seleccionar() {
      if (this.parametros.imagen1) {
        this.modalImagen.select_imagen = 1;
      } else if (this.parametros.imagen2) {
        this.modalImagen.select_imagen = 2;
      } else if (this.parametros.imagen3) {
        this.modalImagen.select_imagen = 3;
      }
    },
    accionModal: function accionModal() {
      var _this = this;

      this.modalImagen.errors = "";

      if (this.modalImagen.nomBtn === "Cambiar") {
        if (this.$refs.inputImagenModal.value) {
          var parametros = {
            numero: this.modalImagen.select_imagen,
            imagen: this.modalImagen.imagen
          };
          axios.put("/cepas/".concat(this.tipoCepa, "/cambiar-imagen/").concat(this.cepa.id), parametros).then(function (res) {
            _this.$emit("accionImagen", res.data);

            _this.$modal.hide("agregar_cambiar_imagen");

            _this.toastr("Cambiar Imagen", "La imagen fue cambiada con exito!!", "success");
          })["catch"](function (error) {
            if (error.response.status === 403) {
              _this.$router.push("/sin-acceso");
            } else if (error.response.status === 405) {
              window.location.href = "/";
            } else {
              if (error.response.status === 422) {
                _this.modalImagen.errors = [];
                _this.modalImagen.errors = error.response.data.errors;
              }

              _this.toastr("Error!!", "", "error");
            }
          });
        } else {
          this.modalImagen.errors = "Favor seleccionar una imagen.";
        }
      } else if (this.modalImagen.nomBtn === "Eliminar") {
        var _parametros = {
          numero: this.modalImagen.select_imagen
        };
        axios.put("/cepas/".concat(this.tipoCepa, "/eliminar-imagen/").concat(this.cepa.id), _parametros).then(function (res) {
          _this.$emit("accionImagen", res.data);

          _this.$modal.hide("eliminar_imagen");

          _this.toastr("Eliminar Imagen", "Imagen eliminada con exito!!", "success");
        })["catch"](function (error) {
          if (error.response.status === 403) {
            _this.$router.push("/sin-acceso");
          } else if (error.response.status === 405) {
            window.location.href = "/";
          } else {
            if (error.response.status === 422) {
              _this.modalImagen.errors = [];
              _this.modalImagen.errors = error.response.data.errors;
            }

            _this.toastr("Error!!", "", "error");
          }
        });
      } else {
        if (this.$refs.inputImagenModal.value) {
          this.colocarNumeroAgregar();
          var _parametros2 = {
            numero: this.modalImagen.select_imagen,
            imagen: this.modalImagen.imagen
          };
          axios.put("/cepas/".concat(this.tipoCepa, "/agregar-imagen/").concat(this.cepa.id), _parametros2).then(function (res) {
            _this.$emit("accionImagen", res.data);

            _this.$modal.hide("agregar_cambiar_imagen");

            _this.toastr("Agregar Imagen", "La imagen fue agregada con exito!!", "success");
          })["catch"](function (error) {
            if (error.response.status === 403) {
              _this.$router.push("/sin-acceso");
            } else if (error.response.status === 405) {
              window.location.href = "/";
            } else {
              if (error.response.status === 422) {
                _this.modalImagen.errors = [];
                _this.modalImagen.errors = error.response.data.errors;
              }

              _this.toastr("Error!!", "", "error");
            }
          });
        } else {
          this.modalImagen.errors = "Favor seleccionar una imagen.";
        }
      }
    },
    colocarNumeroAgregar: function colocarNumeroAgregar() {
      if (!this.parametros.imagen1) {
        this.modalImagen.select_imagen = 1;
      } else if (!this.parametros.imagen2) {
        this.modalImagen.select_imagen = 2;
      } else if (!this.parametros.imagen3) {
        this.modalImagen.select_imagen = 3;
      }
    },
    verificarImagen: function verificarImagen(e) {
      this.modalImagen.errors = "";
      var file = e.target.files[0];
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.modalImagen.errors = "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagenModal.value = "";
          this.modalImagen.imagen = "";
        } else {
          this.modalImagen.errors = "";
          this.cargarImagen(file);
        }
      } else {
        this.modalImagen.imagen = "";
        this.imagenMiniatura = "";
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this2 = this;

      var reader = new Image();

      reader.onload = function (e) {
        _this2.imagenMiniatura = reader.src;
      };

      reader.src = URL.createObjectURL(file);
    }
  },
  computed: {
    mostraImagenes: function mostraImagenes() {
      if (this.parametros.imagen1 || this.parametros.imagen2 || this.parametros.imagen3) {
        return true;
      } else {
        return false;
      }
    },
    btnAgregar: function btnAgregar() {
      if (!this.parametros.imagen1 || !this.parametros.imagen2 || !this.parametros.imagen3) {
        return true;
      } else {
        return false;
      }
    },
    btnCambiar: function btnCambiar() {
      if (this.parametros.imagen1 || this.parametros.imagen2 || this.parametros.imagen3) {
        return true;
      } else {
        return false;
      }
    },
    btnEliminar: function btnEliminar() {
      var cant = 0;

      if (this.parametros.imagen1) {
        cant++;
      }

      if (this.parametros.imagen2) {
        cant++;
      }

      if (this.parametros.imagen3) {
        cant++;
      }

      if (cant > 1) {
        return true;
      } else {
        return false;
      }
    },
    mostraImagen: function mostraImagen() {
      return this.imagenMiniatura;
    },
    validarBtn: function validarBtn() {
      if (!this.modalImagen.imagen) {
        return true;
      }

      return false;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=template&id=08d5740f&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=template&id=08d5740f& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _vm.posicion === "horizontal"
        ? [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row justify-content-md-center" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "container" },
                    [
                      _c("div", { attrs: { id: "croppie1" } }),
                      _vm._v(" "),
                      _vm.imagenes[0]
                        ? [
                            _vm.btnAprobar1
                              ? [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success mb-2",
                                      on: {
                                        click: function($event) {
                                          return _vm.resultado(1)
                                        }
                                      }
                                    },
                                    [_vm._v("Aprobar Imagen")]
                                  ),
                                  _vm._v(" "),
                                  _vm.mostrarMensaje1
                                    ? _c(
                                        "em",
                                        { staticClass: "text-danger small" },
                                        [_vm._v("Debe Aprobar la imagen")]
                                      )
                                    : _vm._e()
                                ]
                              : [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-danger mb-2 float-right",
                                      on: {
                                        click: function($event) {
                                          return _vm.cancelar(1)
                                        }
                                      }
                                    },
                                    [_vm._v("Cancelar")]
                                  )
                                ]
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "container" },
                    [
                      _c("div", { attrs: { id: "croppie2" } }),
                      _vm._v(" "),
                      _vm.imagenes[1]
                        ? [
                            _vm.btnAprobar2
                              ? [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success mb-2",
                                      on: {
                                        click: function($event) {
                                          return _vm.resultado(2)
                                        }
                                      }
                                    },
                                    [_vm._v("Aprobar Imagen")]
                                  ),
                                  _vm._v(" "),
                                  _vm.mostrarMensaje2
                                    ? _c(
                                        "em",
                                        { staticClass: "text-danger small" },
                                        [_vm._v("Debe Aprobar la imagen")]
                                      )
                                    : _vm._e()
                                ]
                              : [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-danger mb-2 float-right",
                                      on: {
                                        click: function($event) {
                                          return _vm.cancelar(2)
                                        }
                                      }
                                    },
                                    [_vm._v("Cancelar")]
                                  )
                                ]
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "container" },
                    [
                      _c("div", { attrs: { id: "croppie3" } }),
                      _vm._v(" "),
                      _vm.imagenes[2]
                        ? [
                            _vm.btnAprobar3
                              ? [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success mb-2",
                                      on: {
                                        click: function($event) {
                                          return _vm.resultado(3)
                                        }
                                      }
                                    },
                                    [_vm._v("Aprobar Imagen")]
                                  ),
                                  _vm._v(" "),
                                  _vm.mostrarMensaje3
                                    ? _c(
                                        "em",
                                        { staticClass: "text-danger small" },
                                        [_vm._v("Debe Aprobar la imagen")]
                                      )
                                    : _vm._e()
                                ]
                              : [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-danger mb-2 float-right",
                                      on: {
                                        click: function($event) {
                                          return _vm.cancelar(3)
                                        }
                                      }
                                    },
                                    [_vm._v("Cancelar")]
                                  )
                                ]
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ])
            ])
          ]
        : [
            _c("div", { staticClass: "container" }, [
              _c(
                "div",
                { staticClass: "row mt-2 ml-2 mr-2" },
                [
                  _c("div", { attrs: { id: "croppie1" } }),
                  _vm._v(" "),
                  _vm.imagenes[0]
                    ? [
                        _vm.btnAprobar1
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success mb-2",
                                  on: {
                                    click: function($event) {
                                      return _vm.resultado(1)
                                    }
                                  }
                                },
                                [_vm._v("Aprobar Imagen")]
                              ),
                              _vm._v(" "),
                              _vm.mostrarMensaje1
                                ? _c("em", { staticClass: "text-danger" }, [
                                    _vm._v("Debe Aprobar la imagen")
                                  ])
                                : _vm._e()
                            ]
                          : [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-danger mb-2 float-right",
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelar(1)
                                    }
                                  }
                                },
                                [_vm._v("Cancelar")]
                              )
                            ]
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row mt-2 ml-2 mr-2" },
                [
                  _c("div", { attrs: { id: "croppie2" } }),
                  _vm._v(" "),
                  _vm.imagenes[1]
                    ? [
                        _vm.btnAprobar2
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success mb-2",
                                  on: {
                                    click: function($event) {
                                      return _vm.resultado(2)
                                    }
                                  }
                                },
                                [_vm._v("Aprobar Imagen")]
                              ),
                              _vm._v(" "),
                              _vm.mostrarMensaje2
                                ? _c("em", { staticClass: "text-danger" }, [
                                    _vm._v("Debe Aprobar la imagen")
                                  ])
                                : _vm._e()
                            ]
                          : [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-danger mb-2 float-right",
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelar(2)
                                    }
                                  }
                                },
                                [_vm._v("Cancelar")]
                              )
                            ]
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row mt-2 ml-2 mr-2" },
                [
                  _c("div", { attrs: { id: "croppie3" } }),
                  _vm._v(" "),
                  _vm.imagenes[2]
                    ? [
                        _vm.btnAprobar3
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success mb-2",
                                  on: {
                                    click: function($event) {
                                      return _vm.resultado(3)
                                    }
                                  }
                                },
                                [_vm._v("Aprobar Imagen")]
                              ),
                              _vm._v(" "),
                              _vm.mostrarMensaje3
                                ? _c("em", { staticClass: "text-danger" }, [
                                    _vm._v("Debe Aprobar la imagen")
                                  ])
                                : _vm._e()
                            ]
                          : [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-danger mb-2 float-right",
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelar(3)
                                    }
                                  }
                                },
                                [_vm._v("Cancelar")]
                              )
                            ]
                      ]
                    : _vm._e()
                ],
                2
              )
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ImagenesComponent.vue?vue&type=template&id=7abf0d9c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ImagenesComponent.vue?vue&type=template&id=7abf0d9c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _vm.mostraImagenes
        ? [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [
                    _c("Carousel", { attrs: { id: 1, imagenes: _vm.imagenes } })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3 mb-3" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.btnAgregar,
                          expression: "btnAgregar"
                        }
                      ],
                      staticClass: "mr-3 btn btn-success btn-block",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.showModalImagen("agregar")
                        }
                      }
                    },
                    [_vm._v("Agregar")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.btnCambiar,
                          expression: "btnCambiar"
                        }
                      ],
                      staticClass: "mr-3 btn btn-warning btn-block",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.showModalImagen("cambiar")
                        }
                      }
                    },
                    [_vm._v("Cambiar")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.btnEliminar,
                          expression: "btnEliminar"
                        }
                      ],
                      staticClass: "btn btn-danger btn-block",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.showModalImagen("eliminar")
                        }
                      }
                    },
                    [_vm._v("Eliminar")]
                  )
                ])
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "agregar_cambiar_imagen",
            classes: "my_modal",
            width: 700,
            height: 490
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
                [_vm._v(_vm._s(_vm.modalImagen.titulo))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("agregar_cambiar_imagen")
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
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _vm.modalImagen.nomBtn === "Agregar"
                  ? [
                      _c("div", { staticClass: "container" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c("label", { attrs: { for: "imagen" } }, [
                                  _vm._v("Seleccione la nueva Imagen")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  ref: "inputImagenModal",
                                  staticClass: "form-control-file",
                                  attrs: {
                                    name: "imagen",
                                    id: "imagen",
                                    type: "file",
                                    accept: "image/jpeg, image/png"
                                  },
                                  on: { change: _vm.verificarImagen }
                                }),
                                _vm._v(" "),
                                _vm.modalImagen.errors
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(_vm.modalImagen.errors))
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-6" },
                            [
                              _vm.mostraImagen
                                ? [
                                    _c("Croppie", {
                                      attrs: {
                                        id: "croppie",
                                        imagen: _vm.mostraImagen,
                                        mostrarBtnCroppie: true,
                                        zoom: 1,
                                        enableZoom: true,
                                        editar: false,
                                        boundaryHeigth: 230,
                                        viewportWidth: 200
                                      },
                                      on: {
                                        cambiarValorImagen:
                                          _vm.cambiarValorImagen
                                      }
                                    })
                                  ]
                                : [
                                    _c("div", { staticClass: "text-center" }, [
                                      _c("h5", { staticClass: "mt-5 mb-5" }, [
                                        _c("span", { staticClass: "pr-1" }, [
                                          _c(
                                            "b",
                                            { staticClass: "text-warning" },
                                            [_vm._v("SIN IMAGEN")]
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                            ],
                            2
                          )
                        ])
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.modalImagen.nomBtn === "Cambiar"
                  ? [
                      _c("div", { staticClass: "container" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "select_imagen" } },
                                  [_vm._v(_vm._s(_vm.modalImagen.nomLabel))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: _vm.modalImagen.select_imagen,
                                        expression: "modalImagen.select_imagen",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "select_imagen",
                                      id: "select_imagen"
                                    },
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
                                            return _vm._n(val)
                                          })
                                        _vm.$set(
                                          _vm.modalImagen,
                                          "select_imagen",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm.parametros.imagen1
                                      ? _c(
                                          "option",
                                          { attrs: { value: "1" } },
                                          [_vm._v("Primera")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.parametros.imagen2
                                      ? _c(
                                          "option",
                                          { attrs: { value: "2" } },
                                          [_vm._v("Segunda")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.parametros.imagen3
                                      ? _c(
                                          "option",
                                          { attrs: { value: "3" } },
                                          [_vm._v("Tercera")]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c("label", { attrs: { for: "imagen" } }, [
                                  _vm._v("Seleccione la nueva Imagen")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  ref: "inputImagenModal",
                                  staticClass: "form-control-file",
                                  attrs: {
                                    name: "imagen",
                                    id: "imagen",
                                    type: "file",
                                    accept: "image/jpeg, image/png"
                                  },
                                  on: { change: _vm.verificarImagen }
                                }),
                                _vm._v(" "),
                                _vm.modalImagen.errors
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(_vm.modalImagen.errors))
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-6" },
                            [
                              _vm.mostraImagen
                                ? [
                                    _c("Croppie", {
                                      attrs: {
                                        id: "croppie",
                                        imagen: _vm.mostraImagen,
                                        mostrarBtnCroppie: true,
                                        zoom: 1,
                                        enableZoom: true,
                                        editar: false,
                                        boundaryHeigth: 230,
                                        viewportWidth: 200
                                      },
                                      on: {
                                        cambiarValorImagen:
                                          _vm.cambiarValorImagen
                                      }
                                    })
                                  ]
                                : [
                                    _c("div", { staticClass: "text-center" }, [
                                      _c("h5", { staticClass: "mt-5 mb-5" }, [
                                        _c("span", { staticClass: "pr-1" }, [
                                          _c(
                                            "b",
                                            { staticClass: "text-warning" },
                                            [_vm._v("SIN IMAGEN")]
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                            ],
                            2
                          )
                        ])
                      ])
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("agregar_cambiar_imagen")
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
                  attrs: { type: "button", disabled: _vm.validarBtn },
                  on: { click: _vm.accionModal }
                },
                [_vm._v(_vm._s(_vm.modalImagen.nomBtn))]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "eliminar_imagen",
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
                [_vm._v(_vm._s(_vm.modalImagen.titulo))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("eliminar_imagen")
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
                _c("label", { attrs: { for: "select_imagen" } }, [
                  _vm._v(_vm._s(_vm.modalImagen.nomLabel))
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.modalImagen.select_imagen,
                        expression: "modalImagen.select_imagen",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "select_imagen", id: "select_imagen" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return _vm._n(val)
                          })
                        _vm.$set(
                          _vm.modalImagen,
                          "select_imagen",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _vm.parametros.imagen1
                      ? _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Primera")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.parametros.imagen2
                      ? _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Segunda")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.parametros.imagen3
                      ? _c("option", { attrs: { value: "3" } }, [
                          _vm._v("Tercera")
                        ])
                      : _vm._e()
                  ]
                )
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
                      return _vm.$modal.hide("eliminar_imagen")
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
                  attrs: { type: "button" },
                  on: { click: _vm.accionModal }
                },
                [_vm._v(_vm._s(_vm.modalImagen.nomBtn))]
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

/***/ "./resources/js/components/cepas/CroppieCepasComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/cepas/CroppieCepasComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CroppieCepasComponent_vue_vue_type_template_id_08d5740f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CroppieCepasComponent.vue?vue&type=template&id=08d5740f& */ "./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=template&id=08d5740f&");
/* harmony import */ var _CroppieCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CroppieCepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CroppieCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CroppieCepasComponent_vue_vue_type_template_id_08d5740f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CroppieCepasComponent_vue_vue_type_template_id_08d5740f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/CroppieCepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CroppieCepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=template&id=08d5740f&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=template&id=08d5740f& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieCepasComponent_vue_vue_type_template_id_08d5740f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CroppieCepasComponent.vue?vue&type=template&id=08d5740f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/CroppieCepasComponent.vue?vue&type=template&id=08d5740f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieCepasComponent_vue_vue_type_template_id_08d5740f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CroppieCepasComponent_vue_vue_type_template_id_08d5740f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/ImagenesComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/cepas/ImagenesComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImagenesComponent_vue_vue_type_template_id_7abf0d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagenesComponent.vue?vue&type=template&id=7abf0d9c& */ "./resources/js/components/cepas/ImagenesComponent.vue?vue&type=template&id=7abf0d9c&");
/* harmony import */ var _ImagenesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagenesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/ImagenesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImagenesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImagenesComponent_vue_vue_type_template_id_7abf0d9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImagenesComponent_vue_vue_type_template_id_7abf0d9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/ImagenesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/ImagenesComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/cepas/ImagenesComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagenesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ImagenesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/ImagenesComponent.vue?vue&type=template&id=7abf0d9c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cepas/ImagenesComponent.vue?vue&type=template&id=7abf0d9c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesComponent_vue_vue_type_template_id_7abf0d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImagenesComponent.vue?vue&type=template&id=7abf0d9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ImagenesComponent.vue?vue&type=template&id=7abf0d9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesComponent_vue_vue_type_template_id_7abf0d9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagenesComponent_vue_vue_type_template_id_7abf0d9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/obtenerImagenCroopie3Imagenes.js":
/*!**************************************************************!*\
  !*** ./resources/js/mixins/obtenerImagenCroopie3Imagenes.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var obtenerImagenCroopie3ImagenesMixin = {
  data: function data() {
    return {
      erroresImagenes: "",
      imagenesCroppie: [],
      imagenes: [],
      cantImagenes: ""
    };
  },
  methods: {
    cambiarValorImagen: function cambiarValorImagen(datos) {
      switch (datos.num) {
        case 1:
          this.imagenes[0].source = datos.data;
          this.parametros.imagen1 = datos.data;
          break;

        case 2:
          this.imagenes[1].source = datos.data;
          this.parametros.imagen2 = datos.data;
          break;

        case 3:
          this.imagenes[2].source = datos.data;
          this.parametros.imagen3 = datos.data;
          break;
      }
    },
    obtenerImagenes: function obtenerImagenes(e) {
      this.cantImagenes = 0;
      this.limpiar(0);
      var file = e.target.files[3];

      if (file) {
        this.erroresImagenes = "Solo puede subir max 3 imágenes.";
        this.limpiar(1);
      } else {
        var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
        var imagenes = [];

        for (var index = 0; index < 3; index++) {
          var imagen = e.target.files[index];

          if (imagen) {
            if (!allowedExtensions.exec(imagen.name) || imagen.size > 2000000) {
              this.limpiar(1);
              this.erroresImagenes = "Las imagenes deben ser en formato .png .jpg y menor a 2Mb.";
              imagenes = "";
              break;
            } else {
              this.erroresImagenes = "";
              imagenes.push(imagen);
            }
          } else {
            break;
          }
        }

        this.cantImagenes = imagenes.length;
        this.cargarImagenes(imagenes);
      }
    },
    cargarImagenes: function cargarImagenes(imagenes) {
      var _this = this;

      this.imagenesCroppie = [];

      if (imagenes) {
        var _loop = function _loop(index) {
          var reader = new FileReader();

          reader.onload = function (e) {
            switch (index) {
              case 0:
                _this.pushImagen(1, e.target.result, true);

                _this.imagenesCroppie.push(e.target.result);

                break;

              case 1:
                _this.pushImagen(2, e.target.result, false);

                _this.imagenesCroppie.push(e.target.result);

                break;

              case 2:
                _this.pushImagen(3, e.target.result, false);

                _this.imagenesCroppie.push(e.target.result);

                break;
            }
          };

          reader.readAsDataURL(imagenes[index]);
        };

        for (var index = 0; index < imagenes.length; index++) {
          _loop(index);
        }
      }
    },
    pushImagen: function pushImagen(num, imagen, active) {
      this.imagenes.push({
        num: num,
        source: imagen,
        isActive: active
      });
    },
    llenarArregloImagenes: function llenarArregloImagenes() {
      if (this.parametros.imagen1) {
        this.pushImagen(1, this.info.imagenPublica1, true);

        if (this.parametros.imagen2) {
          this.pushImagen(2, this.info.imagenPublica2, false);
        }

        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen2) {
        this.pushImagen(2, this.info.imagenPublica2, true);

        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen3) {
        this.pushImagen(3, this.info.imagenPublica3, true);
      }
    },
    limpiar: function limpiar(num) {
      switch (num) {
        case 0:
          this.parametros.imagen1 = "";
          this.parametros.imagen2 = "";
          this.parametros.imagen3 = "";
          this.imagenes = [];
          break;

        case 1:
          this.$refs.inputImagen.value = "";
          break;
      }
    }
  },
  computed: {
    btnDisable: function btnDisable() {
      if (this.imagenes != "") {
        if (this.info) {
          if (this.info.imagen1) {
            if (this.imagenes[0] && !this.parametros.imagen1) {
              return true;
            }

            if (this.info.imagen2) {
              if (this.imagenes[1] && !this.parametros.imagen2) {
                return true;
              }

              if (this.info.imagen3) {
                if (this.imagenes[2] && !this.parametros.imagen3) {
                  return true;
                }
              }
            } else if (this.info.imagen3) {
              if (this.imagenes[1] && !this.parametros.imagen3) {
                return true;
              }
            }
          } else if (this.info.imagen2) {
            if (this.imagenes[0] && !this.parametros.imagen2) {
              return true;
            }

            if (this.info.imagen3) {
              if (this.imagenes[1] && !this.parametros.imagen3) {
                return true;
              }
            }
          } else if (this.info.imagen3) {
            if (this.imagenes[0] && !this.parametros.imagen3) {
              return true;
            }
          }

          return false;
        } else {
          if (this.imagenes[0] && !this.parametros.imagen1) {
            return true;
          }

          if (this.imagenes[1] && !this.parametros.imagen2) {
            return true;
          }

          if (this.imagenes[2] && !this.parametros.imagen3) {
            return true;
          }

          return false;
        }
      } else {
        return false;
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (obtenerImagenCroopie3ImagenesMixin);

/***/ })

}]);