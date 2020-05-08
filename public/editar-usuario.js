(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-usuario"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showPass: false,
      showPass1: false,
      info: "",
      parametros: {
        nombre: "",
        tipo_user: 2,
        email: "",
        pass: "",
        pass1: "",
        imagen: ""
      },
      tituloForm: "",
      imageMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      mensajeErrorEmail: ""
    };
  },
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions(["accionTipoUsuario", "accionUsuario", "accionModificarAuth"]), {
    evento: function evento() {
      var _this = this;

      if (this.validarEmail || this.validarNombre || this.validarContraseña || this.validarContraseñas) {
        this.toastr("Alerta!!", "Favor arreglar los errores.!!", "warning");
      } else {
        this.parametros.pass = this.parametros.pass === undefined ? "" : this.parametros.pass;

        if (this.tituloForm === "Agregar Usuario") {
          var formData = new FormData();
          this.appendInfo(formData);
          axios.post("/usuario/agregar", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(function (res) {
            _this.accionUsuario({
              tipo: "agregar",
              data: res.data
            });

            _this.toastr("Agregar Usuario", "Usuario agregado con exito!!", "success");

            _this.$emit("cambiarVariable", "tabla");

            _this.$router.push({
              name: "tabla-usuarios"
            });
          })["catch"](function (error) {
            if (error.response) {
              _this.errors = [];
              _this.errors = error.response.data.errors;

              _this.toastr("Error!!", "", "error");
            }
          });
        } else {
          if (this.parametros.imagen === this.info.avatar) {
            axios.put("/usuario/editar/".concat(this.info.id), this.parametros).then(function (res) {
              if (_this.getUserAuth.id === res.data.id) {
                _this.accionModificarAuth(res.data);
              }

              _this.accionUsuario({
                tipo: "editar",
                data: res.data
              });

              _this.toastr("Editar Usuario", "Usuario editado con exito!!", "success");

              _this.$emit("cambiarVariable", "tabla");

              _this.$router.push({
                name: "tabla-usuarios"
              });
            })["catch"](function (error) {
              if (error.response) {
                _this.errors = [];
                _this.errors = error.response.data.errors;

                _this.toastr("Error!!", "", "error"); // console.log(error.response.data);

              }
            });
          } else {
            var _formData = new FormData();

            this.appendInfo(_formData);

            _formData.append("_method", "PUT");

            axios.post("/usuario/editar/".concat(this.info.id), _formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(function (res) {
              if (_this.getUserAuth.id === res.data.id) {
                _this.accionModificarAuth(res.data);
              }

              _this.accionUsuario({
                tipo: "editar",
                data: res.data
              });

              _this.toastr("Editar Usuario", "Usuario editado con exito!!", "success");

              _this.$emit("cambiarVariable", "tabla");

              _this.$router.push({
                name: "tabla-usuarios"
              });
            })["catch"](function (error) {
              if (error.response) {
                _this.errors = [];
                _this.errors = error.response.data.errors;

                _this.toastr("Error!!", "", "error"); // console.log(error.response.data);

              }
            });
          }
        }
      }
    },
    toastr: function toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
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
    },
    llenarInfo: function llenarInfo() {
      this.parametros.nombre = this.info.name;
      this.parametros.tipo_user = this.info.tipouser_id;
      this.parametros.email = this.info.email;
      this.parametros.pass = this.info.password;
      this.parametros.imagen = this.info.avatar;
      this.imageMiniatura = this.info.avatarPublico;
    },
    appendInfo: function appendInfo(formData) {
      formData.append("nombre", this.parametros.nombre);
      formData.append("tipo_user", this.parametros.tipo_user);
      formData.append("email", this.parametros.email);
      formData.append("pass", this.parametros.pass);
      formData.append("imagen", this.parametros.imagen);
    },
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];
      this.parametros.imagen = file;
      var allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError = "La imagen debe ser en formato .jpg y menor a 2Mb.";
          this.imageMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.imagen;
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      }
    },
    cargarImagen: function cargarImagen(file) {
      var _this2 = this;

      var reader = new Image();

      reader.onload = function (e) {
        if (e.path[0].height > 500 || e.path[0].width > 500) {
          _this2.imagenError = "La imagen debe tener una dimension maxima de 500x500 px ";
          _this2.imageMiniatura = _this2.info.imagenPublica;
          _this2.$refs.inputImagen.value = "";
          _this2.parametros.imagen = _this2.info.imagen;
        } else {
          _this2.imageMiniatura = reader.src;
        }
      };

      reader.src = URL.createObjectURL(file);
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getTipoUser", "getUsuarioById", "getUsuarioByEmail", "getUsuarios", "getUserAuth"]), {
    mostraImagen: function mostraImagen() {
      return this.imageMiniatura;
    },
    btnClase: function btnClase() {
      if (this.tituloForm === "Agregar Usuario") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    },
    required: function required() {
      if (this.tituloForm === "Agregar Usuario") {
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
    validarContraseñas: function validarContraseAs() {
      if (this.parametros.pass1) {
        if (this.parametros.pass != this.parametros.pass1) {
          return true;
        } else {
          return false;
        }
      }
    },
    validarEmail: function validarEmail() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.parametros.email && this.required) {
        if (!re.test(this.parametros.email) || this.errors.email) {
          this.mensajeErrorEmail = "El correo electrónico debe ser válido.";
          return true;
        } else {
          if (this.getUsuarioByEmail(this.parametros.email)) {
            this.mensajeErrorEmail = "El correo electrónico ya Existe";
            return true;
          }

          return false;
        }
      }

      return false;
    },
    validarNombre: function validarNombre() {
      var letters = /^[A-Za-z\s]+$/;

      if (this.parametros.nombre) {
        if (!letters.test(this.parametros.nombre)) {
          return true;
        } else {
          return false;
        }
      }
    },
    validarContraseña: function validarContraseA() {
      var regexp_password = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@!%?&#()"'|_])([A-Za-z\d$@!%?&#()"'|_]){8,15}$/;

      if (this.parametros.pass) {
        if (!regexp_password.test(this.parametros.pass)) {
          return true;
        } else {
          return false;
        }
      }
    }
  }),
  created: function created() {
    this.$emit("cambiarVariable", "agregar_editar");

    if (!this.$route.params.usuarioId) {
      this.tituloForm = "Agregar Usuario";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getUsuarioById(this.$route.params.usuarioId);
      this.llenarInfo();
      this.tituloForm = "Editar Usuario";
      this.nomBtn = "Editar";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916& ***!
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
    [
      _vm.getUsuarios
        ? [
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
                            _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c("label", { attrs: { for: "nombre" } }, [
                                  _vm._v("Nombre")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.nombre,
                                      expression: "parametros.nombre"
                                    }
                                  ],
                                  class: [
                                    "form-control",
                                    _vm.validarNombre === true
                                      ? "is-invalid"
                                      : ""
                                  ],
                                  attrs: {
                                    name: "nombre",
                                    id: "nombre",
                                    placeholder: "...",
                                    type: "text",
                                    required: ""
                                  },
                                  domProps: { value: _vm.parametros.nombre },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "nombre",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.validarNombre
                                  ? _c(
                                      "em",
                                      { staticClass: "error invalid-feedback" },
                                      [_vm._v("Solo se admiten letras.")]
                                    )
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _vm.getTipoUser
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "osition-relative form-group"
                                    },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "tipo_user" } },
                                        [_vm._v("Tipo de Usuario")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model.number",
                                              value: _vm.parametros.tipo_user,
                                              expression:
                                                "parametros.tipo_user",
                                              modifiers: { number: true }
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            name: "select",
                                            id: "tipo_user"
                                          },
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
                                                  return _vm._n(val)
                                                })
                                              _vm.$set(
                                                _vm.parametros,
                                                "tipo_user",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.getTipoUser, function(
                                          tu,
                                          index
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: index,
                                              domProps: { value: tu.id }
                                            },
                                            [_vm._v(_vm._s(tu.nombre))]
                                          )
                                        }),
                                        0
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e(),
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
                                  ? _c(
                                      "em",
                                      { staticClass: "error invalid-feedback" },
                                      [_vm._v(_vm._s(_vm.imagenError))]
                                    )
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c("label", { attrs: { for: "email" } }, [
                                  _vm._v("Email")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.parametros.email,
                                      expression: "parametros.email"
                                    }
                                  ],
                                  class: [
                                    "form-control",
                                    _vm.validarEmail === true
                                      ? "is-invalid"
                                      : ""
                                  ],
                                  attrs: {
                                    name: "email",
                                    id: "email",
                                    placeholder: "...",
                                    type: "email",
                                    required: _vm.required,
                                    disabled: !_vm.required
                                  },
                                  domProps: { value: _vm.parametros.email },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.parametros,
                                        "email",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.validarEmail
                                  ? _c(
                                      "em",
                                      { staticClass: "error invalid-feedback" },
                                      [_vm._v(_vm._s(_vm.mensajeErrorEmail))]
                                    )
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "pass" } }, [
                              _vm._v("Contraseña")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group mb-3" }, [
                              (_vm.showPass == true ? "text" : "password") ===
                              "checkbox"
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.pass,
                                        expression: "parametros.pass"
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.validarContraseña === true
                                        ? "is-invalid"
                                        : ""
                                    ],
                                    attrs: {
                                      name: "pass",
                                      id: "pass",
                                      placeholder: "...",
                                      required: _vm.required,
                                      type: "checkbox"
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.parametros.pass
                                      )
                                        ? _vm._i(_vm.parametros.pass, null) > -1
                                        : _vm.parametros.pass
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.parametros.pass,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.parametros,
                                                "pass",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.parametros,
                                                "pass",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(_vm.parametros, "pass", $$c)
                                        }
                                      }
                                    }
                                  })
                                : (_vm.showPass == true
                                    ? "text"
                                    : "password") === "radio"
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.pass,
                                        expression: "parametros.pass"
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.validarContraseña === true
                                        ? "is-invalid"
                                        : ""
                                    ],
                                    attrs: {
                                      name: "pass",
                                      id: "pass",
                                      placeholder: "...",
                                      required: _vm.required,
                                      type: "radio"
                                    },
                                    domProps: {
                                      checked: _vm._q(_vm.parametros.pass, null)
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.$set(
                                          _vm.parametros,
                                          "pass",
                                          null
                                        )
                                      }
                                    }
                                  })
                                : _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.pass,
                                        expression: "parametros.pass"
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.validarContraseña === true
                                        ? "is-invalid"
                                        : ""
                                    ],
                                    attrs: {
                                      name: "pass",
                                      id: "pass",
                                      placeholder: "...",
                                      required: _vm.required,
                                      type:
                                        _vm.showPass == true
                                          ? "text"
                                          : "password"
                                    },
                                    domProps: { value: _vm.parametros.pass },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.parametros,
                                          "pass",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group-append" }, [
                                _c(
                                  "span",
                                  { staticClass: "input-group-text" },
                                  [
                                    _vm.showPass
                                      ? _c("i", {
                                          staticClass: "fas fa-eye",
                                          on: {
                                            click: function($event) {
                                              _vm.showPass = !_vm.showPass
                                            }
                                          }
                                        })
                                      : _c("i", {
                                          staticClass: "fas fa-eye-slash",
                                          on: {
                                            click: function($event) {
                                              _vm.showPass = !_vm.showPass
                                            }
                                          }
                                        })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.validarContraseña
                                ? _c(
                                    "em",
                                    { staticClass: "error invalid-feedback" },
                                    [
                                      _vm._v(
                                        "\n                    La contraseña debe tener:\n                    "
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "1: Mínimo 8 y Máximo 15 caracteres\n                    "
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "2: Al menos una letra mayúscula\n                    "
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "3: Al menos un dígito\n                    "
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "4: Al menos 1 carácter especial\n                  "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "pass1" } }, [
                              _vm._v("Confirmar Contraseña")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group mb-3" }, [
                              (_vm.showPass1 == true ? "text" : "password") ===
                              "checkbox"
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.pass1,
                                        expression: "parametros.pass1"
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.validarContraseñas === true
                                        ? "is-invalid"
                                        : ""
                                    ],
                                    attrs: {
                                      name: "pass1",
                                      id: "pass1",
                                      placeholder: "...",
                                      required: _vm.required,
                                      type: "checkbox"
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.parametros.pass1
                                      )
                                        ? _vm._i(_vm.parametros.pass1, null) >
                                          -1
                                        : _vm.parametros.pass1
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.parametros.pass1,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.parametros,
                                                "pass1",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.parametros,
                                                "pass1",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(_vm.parametros, "pass1", $$c)
                                        }
                                      }
                                    }
                                  })
                                : (_vm.showPass1 == true
                                    ? "text"
                                    : "password") === "radio"
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.pass1,
                                        expression: "parametros.pass1"
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.validarContraseñas === true
                                        ? "is-invalid"
                                        : ""
                                    ],
                                    attrs: {
                                      name: "pass1",
                                      id: "pass1",
                                      placeholder: "...",
                                      required: _vm.required,
                                      type: "radio"
                                    },
                                    domProps: {
                                      checked: _vm._q(
                                        _vm.parametros.pass1,
                                        null
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.$set(
                                          _vm.parametros,
                                          "pass1",
                                          null
                                        )
                                      }
                                    }
                                  })
                                : _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.pass1,
                                        expression: "parametros.pass1"
                                      }
                                    ],
                                    class: [
                                      "form-control",
                                      _vm.validarContraseñas === true
                                        ? "is-invalid"
                                        : ""
                                    ],
                                    attrs: {
                                      name: "pass1",
                                      id: "pass1",
                                      placeholder: "...",
                                      required: _vm.required,
                                      type:
                                        _vm.showPass1 == true
                                          ? "text"
                                          : "password"
                                    },
                                    domProps: { value: _vm.parametros.pass1 },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.parametros,
                                          "pass1",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group-append" }, [
                                _c(
                                  "span",
                                  { staticClass: "input-group-text" },
                                  [
                                    _vm.showPass1
                                      ? _c("i", {
                                          staticClass: "fas fa-eye",
                                          on: {
                                            click: function($event) {
                                              _vm.showPass1 = !_vm.showPass1
                                            }
                                          }
                                        })
                                      : _c("i", {
                                          staticClass: "fas fa-eye-slash",
                                          on: {
                                            click: function($event) {
                                              _vm.showPass1 = !_vm.showPass1
                                            }
                                          }
                                        })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.validarContraseñas
                                ? _c(
                                    "em",
                                    { staticClass: "error invalid-feedback" },
                                    [_vm._v("Las contraseñas no coinciden")]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "mb-2 mr-2 btn btn-block",
                                class: _vm.btnClase
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
                        _c("h5", { staticClass: "card-title" }, [
                          _vm._v("Imagen")
                        ]),
                        _vm._v(" "),
                        _vm.mostraImagen
                          ? [
                              _c("img", {
                                staticClass: "d-block w-100",
                                attrs: {
                                  src: _vm.mostraImagen,
                                  alt: "Avatar del Usuario"
                                }
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
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-warning" }, [_vm._v("SIN IMAGEN")])
        ])
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

/***/ "./resources/js/components/usuarios/FormUsuariosComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/usuarios/FormUsuariosComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormUsuariosComponent.vue?vue&type=template&id=11c6c916& */ "./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916&");
/* harmony import */ var _FormUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormUsuariosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/usuarios/FormUsuariosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormUsuariosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormUsuariosComponent.vue?vue&type=template&id=11c6c916& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuarios/FormUsuariosComponent.vue?vue&type=template&id=11c6c916&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuariosComponent_vue_vue_type_template_id_11c6c916___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);