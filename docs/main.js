/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/templates/Filter.js":
/*!*********************************!*\
  !*** ./src/templates/Filter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Filter = /*#__PURE__*/function () {
  function Filter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filter);

    this.filters = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }];
    this.selectedFilters = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filter, [{
    key: "clearFilters",
    value: function clearFilters() {
      this.selectedFilters = [];
    }
  }, {
    key: "getFilters",
    value: function getFilters() {
      var _this = this;

      var result = this.filters.filter(function (filt, i) {
        var isThere = _this.selectedFilters.find(function (select) {
          return select.id == filt.id;
        });

        if (!isThere) {
          return filt;
        }
      });
      return result;
    }
  }, {
    key: "selectFilter",
    value: function selectFilter(id, status) {
      if (status) {
        this.selectedFilters.push({
          id: id
        });
      } else {
        var index = this.selectedFilters.indexOf(id);
        this.selectedFilters.splice(index, 1);
      }
    }
  }, {
    key: "countSelected",
    value: function countSelected() {
      return this.selectedFilters.length;
    }
  }]);

  return Filter;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./src/templates/Navbar.js":
/*!*********************************!*\
  !*** ./src/templates/Navbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Navbar = function Navbar() {
  return "\n  <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n    <div class=\"bg-dark p-4\">\n        <h5 class=\"text-white h4\">Collapsed content</h5>\n        <span class=\"text-muted\">Toggleable via the navbar brand.</span>\n    </div>\n  </div>\n  <nav class=\"navbar navbar-dark bg-dark\">\n    <div class=\"container-fluid navbar-container\">\n        <div class=\"navbar-container__left\">\n            <button class=\"navbar-toggler btn-large\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">            \n                <object data=\"assets/svg/menu.svg\" width=\"15\" height=\"15\"></object>\n            </button>\n            <object data=\"assets/svg/logo.svg\" width=\"30\" height=\"30\"></object>\n        </div>\n        <div class=\"navbar-container__right\">\n            <object data=\"assets/svg/search.svg\" width=\"30\" height=\"30\"></object>\n            <object data=\"assets/svg/cart.svg\" width=\"30\" height=\"30\"></object>\n        </div>        \n    </div>\n  </nav>\n    ";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/templates/Template.js":
/*!***********************************!*\
  !*** ./src/templates/Template.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/products.json */ "./src/utils/products.json");
/* harmony import */ var _templates_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @templates/Navbar */ "./src/templates/Navbar.js");
// import getData from '@utils/getData.js';



var Template = function Template() {
  // const data = await getData();
  var View = Handlebars.compile("\n    <div>\n        ".concat((0,_templates_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])(), "\n        <div class=\"content\">\n            <div class=\"content-title text-center\">\n                <h1>Cervezas</h1>\n            </div>\n            <div class=\"container mb-4\">\n                <div class=\"row row-cols-2 justify-content-between\">\n                    {{#each products}}\n                    <div class=\"col mt-3 filter-{{filterId}}\" id=\"filter-{{filterId}}\">\n                        <div class=\"card\">\n                            <img src=\"assets/images/{{img}}\" class=\"content-card__img card-img-top\" alt=\"...\">\n                            <div class=\"card-body\">\n                                <h5 class=\"content-card__title\">{{name}}</h5>\n                                <p class=\"content-card__descrip\">{{description}}</p>\n                                <h5 class=\"content-card__price\">{{price}}</h5>\n                            </div>\n                            <div class=\"card-action d-grid gap-2\">\n                                <button class=\"btn btn-lg btn-outline-primary\">AGREGAR</button>\n                            </div>\n                        </div>\n                    </div>\n                    {{/each}}\n                </div>\n              </div>\n              <button type=\"button\" class=\"btn btn-primary handle-modal\" data-bs-toggle=\"modal\" data-bs-target=\"#filterModal\">\n                FILTRAR <object data=\"assets/svg/filters.svg\" width=\"15\" height=\"15\"></object>\n              </button>\n            </div>\n\n            <div class=\"modal\" tabindex=\"-1\" id=\"filterModal\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\">Filtros</h5>\n                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <ul class=\"modal-body__ul\">\n                                <li id=\"option-1\">\n                                    <div class=\"modal-body__filter \">Rubia <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"checkbox-1\"></div>\n                                </li>\n                                <li id=\"option-2\">\n                                    <div class=\"modal-body__filter\">Morena <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"checkbox-2\"></div>\n                                </li>\n                                <li id=\"option-3\">\n                                    <div class=\"modal-body__filter\">Roja <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"checkbox-3\"></div>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <div class=\"row justify-content-around modal-footer__row\">\n                                <div class=\"col-6 d-grid gap-2\">\n                                    <button id=\"modal-footer__clear\" type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\"  >Limpiar</button>\n                                </div>\n                                <div class=\"col-6 d-grid gap-2 modal-footer__filter\">\n                                    <button id=\"modal-footer__filter\" type=\"button\" class=\"btn btn-primary\">FILTRAR <object data=\"assets/svg/filters.svg\" width=\"15\" height=\"15\"></object></button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    "));
  return View(_utils_products_json__WEBPACK_IMPORTED_MODULE_0__);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./src/utils/products.json":
/*!*********************************!*\
  !*** ./src/utils/products.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"products":[{"name":"Cassels Milk Stou","description":"Cassels & Sons Brewing. Cerveza porter y stout.","price":75000,"img":"cassels.png","filterId":1},{"name":"Camba Pale Ale","description":"La Souche Franc-Bois d’hiver. Cerveza pale.","price":85300,"img":"camba.png","filterId":2},{"name":"Votus Nº 001","description":"India Pale Ale del año 2019. Nº 001 Red IPA.","price":75000,"img":"votus.png","filterId":3},{"name":"Prairie Artisian","description":"Ales Prairie Noir Whiskey Barrel Aged Imperial Stout 12oz.","price":85300,"img":"prairie-artisian.png","filterId":1},{"name":"Lost Abbey","description":"The Lost Abbey Citrus Sin American Wild Ale 750ml.","price":75000,"img":"lost-abbey.png","filterId":2},{"name":"Prairie","description":"Prairie Artisa Ales Paradise Imperial Stout 12oz.","price":85300,"img":"prairie.png","filterId":3},{"name":"Redrice","description":"Hitachino Nest Beer Red Rice Ale 330ml.","price":85300,"img":"redrice.png","filterId":1},{"name":"Cascade","description":"Cascade Brewing 2017 Brunch Line BA NORTHWEST Sour Ale.","price":175000,"img":"cascade.png","filterId":2},{"name":"Topa Topa","description":"Topa Topa BREWING CO. 5th Year Anniversary clear Ipa 16oz.","price":85300,"img":"topa.png","filterId":3},{"name":"Mira Brune Nº 6","description":"Brown Ale, Brown Mira American Style.","price":375000,"img":"mira.png","filterId":1}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _templates_Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @templates/Template.js */ "./src/templates/Template.js");
/* harmony import */ var _templates_Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/Filter */ "./src/templates/Filter.js");




(function App() {
  var main =  false || document.getElementById('main');
  main.innerHTML = (0,_templates_Template_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

document.addEventListener("DOMContentLoaded", function (event) {
  //código a ejecutar cuando el DOM está listo para recibir acciones
  var originalFilters = [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }];
  var filter = new _templates_Filter__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var btnClear = document.getElementById('modal-footer__clear');
  var btnFilter = document.getElementById('modal-footer__filter');
  var check1 = document.getElementById('checkbox-1');
  var check2 = document.getElementById('checkbox-2');
  var check3 = document.getElementById('checkbox-3');
  btnClear.addEventListener("click", function () {
    return deleteAllFilters();
  }, false);
  btnFilter.addEventListener("click", function () {
    return filterAction();
  }, false);
  check1.addEventListener('change', function (e) {
    return handleChecbox(1, check1.checked);
  });
  check2.addEventListener('change', function (e) {
    return handleChecbox(2, check2.checked);
  });
  check3.addEventListener('change', function (e) {
    return handleChecbox(3, check3.checked);
  });

  var hideCartsElements = function hideCartsElements(selectedFilters) {
    selectedFilters.map(function (filt) {
      var elements = document.getElementsByClassName("filter-".concat(filt.id));

      for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute("style", "display:none;");
      }
    });
  };

  var showCartsElements = function showCartsElements(selectedFilters) {
    selectedFilters.map(function (filt) {
      var elements = document.getElementsByClassName("filter-".concat(filt.id));

      for (var i = 0; i < elements.length; i++) {
        elements[i].removeAttribute("style");
      }
    });
  };

  var filterAction = function filterAction() {
    showCartsElements(originalFilters);
    var selectedFilters = filter.getFilters();
    hideCartsElements(selectedFilters);
  };

  var handleDisabledBtns = function handleDisabledBtns() {
    var countSelected = filter.countSelected();

    if (countSelected < 1) {
      btnFilter.setAttribute("disabled", "");
      btnClear.setAttribute("disabled", "");
    }

    if (countSelected > 0) {
      btnFilter.removeAttribute("disabled");
      btnClear.removeAttribute("disabled");
    }
  };

  var deleteAllFilters = function deleteAllFilters() {
    check1.checked = false;
    check2.checked = false;
    check3.checked = false;
    filter.clearFilters();
    handleDisabledBtns();
  };

  var handleChecbox = function handleChecbox(id, status) {
    filter.selectFilter(id, status);
    handleDisabledBtns();
  };

  handleDisabledBtns();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map