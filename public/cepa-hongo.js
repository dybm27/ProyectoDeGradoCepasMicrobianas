(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepa-hongo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bacterias_NavBacteriasComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bacterias/NavBacteriasComponent.vue */ "./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue");
/* harmony import */ var _hongos_NavHongosComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hongos/NavHongosComponent.vue */ "./resources/js/components/cepas/hongos/NavHongosComponent.vue");
/* harmony import */ var _levaduras_NavLevadurasComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levaduras/NavLevadurasComponent.vue */ "./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue");
/* harmony import */ var _actinomicetos_NavActinomicetosComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actinomicetos/NavActinomicetosComponent.vue */ "./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_accionVer_accionCaract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/accionVer-accionCaract */ "./resources/js/mixins/accionVer-accionCaract.js");
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
    NavBacterias: _bacterias_NavBacteriasComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NavHongos: _hongos_NavHongosComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NavLevaduras: _levaduras_NavLevadurasComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavActinomicetos: _actinomicetos_NavActinomicetosComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_accionVer_accionCaract__WEBPACK_IMPORTED_MODULE_6__["default"]],
  computed: _objectSpread(_objectSpread(_objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState(["auth"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("usuarios", ["getUsuarioById"])), vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapState("cepa", ["cepa"])),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("cepa", ["llenarCepa", "limpiarCepa"])),
  created: function created() {
    this.$emit("cambiarTipo", "caract");
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.full-height[data-v-6ced8142] {\r\n  height: 40vh;\n}\n.flex-center[data-v-6ced8142] {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\n}\n.position-ref[data-v-6ced8142] {\r\n  position: relative;\n}\n.code[data-v-6ced8142] {\r\n  border-right: 4px solid;\r\n  font-size: 60px;\r\n  padding: 0 15px 0 15px;\r\n  text-align: center;\n}\n.message[data-v-6ced8142] {\r\n  font-size: 40px;\r\n  text-align: center;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=template&id=6ced8142&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=template&id=6ced8142&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      _vm.numGrupo
        ? [
            _vm.numGrupo === 1
              ? [_c("NavBacterias")]
              : _vm.numGrupo === 2
              ? [_c("NavHongos")]
              : _vm.numGrupo === 3
              ? [_c("NavLevaduras")]
              : _vm.numGrupo === 4
              ? [_c("NavActinomicetos")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue?vue&type=template&id=a9a26632&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue?vue&type=template&id=a9a26632& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      _vm.$route.params.cepaId
        ? [
            _c(
              "ul",
              {
                staticClass:
                  "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-macro-cepa-actinomiceto" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Macroscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-micro-cepa-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Microscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "identi-bioqui-cepa-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("I. Bioquímica")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "otras-caract-cepa-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("O. Características")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-molecu-cepa-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Molecular")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "metodo-conser-cepa-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("M. Conservación")])]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        : [
            _c(
              "ul",
              {
                staticClass:
                  "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-macro-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Macroscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-micro-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Microscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "identi-bioqui-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("I. Bioquímica")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "otras-caract-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("O. Características")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-molecu-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Molecular")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "metodo-conser-actinomiceto" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("M. Conservación")])]
                    )
                  ],
                  1
                )
              ]
            )
          ],
      _vm._v(" "),
      _c("router-view")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue?vue&type=template&id=090a0867&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue?vue&type=template&id=090a0867& ***!
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
      _vm.$route.params.cepaId
        ? [
            _c(
              "ul",
              {
                staticClass:
                  "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-macro-cepa-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Macroscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-micro-cepa-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Microscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-bioqui-cepa-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Bioquímicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-fisio-cepa-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Fisiológicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "identi-molecu-cepa-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("I. Molecular")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "metodo-conser-cepa-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("M. Conservación")])]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        : [
            _c(
              "ul",
              {
                staticClass:
                  "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-macro-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Macroscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-micro-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Microscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-bioqui-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Bioquímicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-fisio-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Fisiológicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "identi-molecu-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("I. Molecular")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "metodo-conser-bacteria" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("M. Conservación")])]
                    )
                  ],
                  1
                )
              ]
            )
          ],
      _vm._v(" "),
      _c("router-view")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/NavHongosComponent.vue?vue&type=template&id=5568ad37&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/hongos/NavHongosComponent.vue?vue&type=template&id=5568ad37& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _vm.$route.params.cepaId
        ? [
            _c(
              "ul",
              {
                staticClass:
                  "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-macro-cepa-hongo" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Macroscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-micro-cepa-hongo" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Microscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-bioqui-cepa-hongo" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Bioquímicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "identi-molecu-cepa-hongo" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("I. Molecular")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "metodo-conser-cepa-hongo" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("M. Conservación")])]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        : [
            _c(
              "ul",
              {
                staticClass:
                  "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-macro-hongo" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Macroscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-micro-hongo" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Microscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-bioqui-hongo" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Bioquímicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "identi-molecu-hongo" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("I. Molecular")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "metodo-conser-hongo" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("M. Conservación")])]
                    )
                  ],
                  1
                )
              ]
            )
          ],
      _vm._v(" "),
      _c("router-view")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue?vue&type=template&id=1ae25cc7&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue?vue&type=template&id=1ae25cc7& ***!
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
      _vm.$route.params.cepaId
        ? [
            _c(
              "ul",
              {
                staticClass:
                  "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-macro-cepa-levadura" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Macroscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-micro-cepa-levadura" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Microscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-bioqui-cepa-levadura" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("C. Bioquímicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "identi-molecu-cepa-levadura" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("I. Molecular")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "metodo-conser-cepa-levadura" },
                          role: "tab",
                          "active-class": "active"
                        }
                      },
                      [_c("span", [_vm._v("M. Conservación")])]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        : [
            _c(
              "ul",
              {
                staticClass:
                  "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-macro-levadura" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Macroscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-micro-levadura" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Microscópicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "caract-bioqui-levadura" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("C. Bioquímicas")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "identi-molecu-levadura" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("I. Molecular")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: "metodo-conser-levadura" },
                          "active-class": "active",
                          role: "tab"
                        }
                      },
                      [_c("span", [_vm._v("M. Conservación")])]
                    )
                  ],
                  1
                )
              ]
            )
          ],
      _vm._v(" "),
      _c("router-view")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/AgregarEditarCaractComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/cepas/AgregarEditarCaractComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgregarEditarCaractComponent_vue_vue_type_template_id_6ced8142_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgregarEditarCaractComponent.vue?vue&type=template&id=6ced8142&scoped=true& */ "./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=template&id=6ced8142&scoped=true&");
/* harmony import */ var _AgregarEditarCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgregarEditarCaractComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AgregarEditarCaractComponent_vue_vue_type_style_index_0_id_6ced8142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css& */ "./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AgregarEditarCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgregarEditarCaractComponent_vue_vue_type_template_id_6ced8142_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgregarEditarCaractComponent_vue_vue_type_template_id_6ced8142_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ced8142",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/AgregarEditarCaractComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarEditarCaractComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_style_index_0_id_6ced8142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=style&index=0&id=6ced8142&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_style_index_0_id_6ced8142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_style_index_0_id_6ced8142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_style_index_0_id_6ced8142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_style_index_0_id_6ced8142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_style_index_0_id_6ced8142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=template&id=6ced8142&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=template&id=6ced8142&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_template_id_6ced8142_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarEditarCaractComponent.vue?vue&type=template&id=6ced8142&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/AgregarEditarCaractComponent.vue?vue&type=template&id=6ced8142&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_template_id_6ced8142_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarEditarCaractComponent_vue_vue_type_template_id_6ced8142_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavActinomicetosComponent_vue_vue_type_template_id_a9a26632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavActinomicetosComponent.vue?vue&type=template&id=a9a26632& */ "./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue?vue&type=template&id=a9a26632&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _NavActinomicetosComponent_vue_vue_type_template_id_a9a26632___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavActinomicetosComponent_vue_vue_type_template_id_a9a26632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue?vue&type=template&id=a9a26632&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue?vue&type=template&id=a9a26632& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavActinomicetosComponent_vue_vue_type_template_id_a9a26632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavActinomicetosComponent.vue?vue&type=template&id=a9a26632& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/actinomicetos/NavActinomicetosComponent.vue?vue&type=template&id=a9a26632&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavActinomicetosComponent_vue_vue_type_template_id_a9a26632___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavActinomicetosComponent_vue_vue_type_template_id_a9a26632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBacteriasComponent_vue_vue_type_template_id_090a0867___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBacteriasComponent.vue?vue&type=template&id=090a0867& */ "./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue?vue&type=template&id=090a0867&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _NavBacteriasComponent_vue_vue_type_template_id_090a0867___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBacteriasComponent_vue_vue_type_template_id_090a0867___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/bacterias/NavBacteriasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue?vue&type=template&id=090a0867&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue?vue&type=template&id=090a0867& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBacteriasComponent_vue_vue_type_template_id_090a0867___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBacteriasComponent.vue?vue&type=template&id=090a0867& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/bacterias/NavBacteriasComponent.vue?vue&type=template&id=090a0867&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBacteriasComponent_vue_vue_type_template_id_090a0867___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBacteriasComponent_vue_vue_type_template_id_090a0867___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/hongos/NavHongosComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/NavHongosComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavHongosComponent_vue_vue_type_template_id_5568ad37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavHongosComponent.vue?vue&type=template&id=5568ad37& */ "./resources/js/components/cepas/hongos/NavHongosComponent.vue?vue&type=template&id=5568ad37&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _NavHongosComponent_vue_vue_type_template_id_5568ad37___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavHongosComponent_vue_vue_type_template_id_5568ad37___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/hongos/NavHongosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/hongos/NavHongosComponent.vue?vue&type=template&id=5568ad37&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/cepas/hongos/NavHongosComponent.vue?vue&type=template&id=5568ad37& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHongosComponent_vue_vue_type_template_id_5568ad37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavHongosComponent.vue?vue&type=template&id=5568ad37& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/hongos/NavHongosComponent.vue?vue&type=template&id=5568ad37&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHongosComponent_vue_vue_type_template_id_5568ad37___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHongosComponent_vue_vue_type_template_id_5568ad37___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavLevadurasComponent_vue_vue_type_template_id_1ae25cc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLevadurasComponent.vue?vue&type=template&id=1ae25cc7& */ "./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue?vue&type=template&id=1ae25cc7&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _NavLevadurasComponent_vue_vue_type_template_id_1ae25cc7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavLevadurasComponent_vue_vue_type_template_id_1ae25cc7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/levaduras/NavLevadurasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue?vue&type=template&id=1ae25cc7&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue?vue&type=template&id=1ae25cc7& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLevadurasComponent_vue_vue_type_template_id_1ae25cc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavLevadurasComponent.vue?vue&type=template&id=1ae25cc7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/levaduras/NavLevadurasComponent.vue?vue&type=template&id=1ae25cc7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLevadurasComponent_vue_vue_type_template_id_1ae25cc7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLevadurasComponent_vue_vue_type_template_id_1ae25cc7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/accionVer-accionCaract.js":
/*!*******************************************************!*\
  !*** ./resources/js/mixins/accionVer-accionCaract.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var accionVerYCaractmixin = {
  props: ["tipoG", "bloqueos", "miBloqueo", "cantUser", "cantRecibirBtns", "tipo"],
  data: function data() {
    return {
      numGrupo: "",
      idCepa: 0
    };
  },
  created: function created() {
    this.buscarIdCepa();
    this.obtenerCepa(this.idCepa);
  },
  watch: {
    cepa: function cepa() {
      if (this.cepa) {
        if (this.cepa === "No Existe") {
          this.numGrupo = 5;
        } else {
          this.numGrupo = this.verificarUrl(this.cepa.cepa.grupo_microbiano_id);
        }
      }
    },
    cantRecibirBtns: function cantRecibirBtns() {
      if (this.cantRecibirBtns === this.cantUser - 1) {
        if (!this.miBloqueo) {
          this.verificarBloqueo(this.idCepa);
        }
      }
    }
  },
  methods: {
    buscarIdCepa: function buscarIdCepa() {
      switch (this.tipoG) {
        case 1:
          this.idCepa = parseInt(this.$route.params.cepaBacteriaId);
          break;

        case 2:
          this.idCepa = parseInt(this.$route.params.cepaHongoId);
          break;

        case 3:
          this.idCepa = parseInt(this.$route.params.cepaLevaduraId);
          break;

        case 4:
          this.idCepa = parseInt(this.$route.params.cepaActinomicetoId);
          break;

        case 0:
          this.idCepa = parseInt(this.$route.params.cepaId);
          break;
      }
    },
    verificarUrl: function verificarUrl(tipo) {
      var ruta = window.location.pathname;

      switch (tipo) {
        case 1:
          if (ruta.includes("bacteria")) {
            this.enviarBloqueo();
            return 1;
          }

          break;

        case 2:
          if (ruta.includes("hongo")) {
            this.enviarBloqueo();
            return 2;
          }

          break;

        case 3:
          if (ruta.includes("levadura")) {
            this.enviarBloqueo();
            return 3;
          }

          break;

        case 4:
          if (ruta.includes("actinomiceto")) {
            this.enviarBloqueo();
            return 4;
          }

          break;
      }

      return 5;
    },
    verificarBloqueo: function verificarBloqueo(id) {
      var data = this.bloqueos.find(function (btn) {
        return btn.id === id;
      });

      if (data) {
        this.$router.push({
          name: this.tipo + "s"
        });
        this.toastr("Acción no disponible!!!", this.getUsuarioById(data.idUser).name + " se encuentra modificando esa Cepa!!!", "warning");
      } else {
        this.obtenerCepa(this.idCepa);
      }
    },
    obtenerCepa: function obtenerCepa(id) {
      var _this = this;

      axios.get("/info-panel/cepa/agregar-editar-caract/".concat(id)).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.llenarCepa(res.data);
        }
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this.$router.push("/sin-acceso");
        }
      });
    },
    enviarBloqueo: function enviarBloqueo() {
      if (!this.miBloqueo) {
        window.Echo["private"]("bloquearBtnsCepa").whisper("bloquearBtnsCepa", {
          id: this.idCepa,
          idUser: this.auth.id
        });
        this.$events.fire("agregarMiBloqueoCepa", {
          id: this.idCepa,
          idUser: this.auth.id
        });
      }
    }
  },
  destroyed: function destroyed() {
    this.limpiarCepa();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (accionVerYCaractmixin);

/***/ })

}]);